import { pipeline, TextStreamer } from "@huggingface/transformers";
import { retrievePortfolioContext } from "./rag.js";

// A stronger small instruct model than SmolLM-135M. It follows
// instructions well enough to answer from the supplied context.
const MODEL_ID = "onnx-community/Qwen2.5-0.5B-Instruct";
const MIN_SCORE = 0.2;

let generatorPromise = null;

// Loads the model once and caches it. Reports download progress (0-100),
// and null when loading finishes.
function loadModel(onProgress) {
  if (!generatorPromise) {
    const files = new Map();

    const progress_callback = (info) => {
      if (info.status === "progress") {
        files.set(info.file, info.progress);
        const values = [...files.values()];
        const average = values.reduce((a, b) => a + b, 0) / values.length;
        onProgress?.(Math.round(average));
      }
      if (info.status === "ready") onProgress?.(null);
    };

    const attempt = (device) =>
      pipeline("text-generation", MODEL_ID, {
        dtype: "q4",
        device,
        progress_callback,
      });

    // Try the GPU first, then fall back to the CPU (WASM).
    generatorPromise = attempt("webgpu")
      .catch(() => attempt("wasm"))
      .catch((error) => {
        generatorPromise = null;
        throw error;
      });
  }

  return generatorPromise;
}

const SYSTEM_PROMPT = `You are the AI assistant on Sufiyan Ali's developer portfolio website.
Answer the visitor's question using ONLY the portfolio context in the user message.
- Facts about Sufiyan must come from the context. Never invent projects, jobs, skills, dates or links.
- If the context does not answer the question, say briefly that the portfolio does not cover it, and suggest emailing Sufiyan at satkhanhello32199@gmail.com.
- Answer in 2 to 4 short, friendly, professional sentences.
- Do not repeat the context. Do not write "Question:", "Answer:" or "Context:" labels.`;

// Removes any prompt text the model might echo back.
function cleanAnswer(text = "") {
  return text
    .split(/\n\s*(?:Question|User|Context|Portfolio context)\s*:/i)[0]
    .replace(/^\s*(?:Answer|Assistant)\s*:\s*/i, "")
    .trim();
}

export async function answerPortfolioQuestion(
  question,
  { onStatus, onToken, onProgress } = {}
) {
  onStatus?.("search");
  const matches = await retrievePortfolioContext(question);

  const sources = matches.map((item) => ({
    title: item.title,
    source: item.source,
  }));

  if (!matches.length || matches[0].score < MIN_SCORE) {
    return {
      answer:
        "I couldn't find that in Sufiyan's portfolio. Try asking about his skills, projects, experience or contact details.",
      sources: [],
    };
  }

  const context = matches
    .map((item) => `[${item.source}] ${item.title}: ${item.content}`)
    .join("\n\n");

  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    {
      role: "user",
      content: `Portfolio context:\n${context}\n\nQuestion: ${question}`,
    },
  ];

  try {
    onStatus?.("model");
    const generator = await loadModel(onProgress);

    onStatus?.("write");
    let raw = "";

    const streamer = new TextStreamer(generator.tokenizer, {
      skip_prompt: true,
      skip_special_tokens: true,
      callback_function: (chunk) => {
        raw += chunk;
        onToken?.(cleanAnswer(raw));
      },
    });

    const output = await generator(messages, {
      max_new_tokens: 160,
      do_sample: false,
      streamer,
    });

    const generated = output?.[0]?.generated_text;
    const final =
      cleanAnswer(
        Array.isArray(generated) ? generated.at(-1)?.content : generated
      ) || cleanAnswer(raw);

    if (!final) throw new Error("The model returned an empty answer.");

    return { answer: final, sources };
  } catch (error) {
    // If the model cannot load or run on this device, answer directly from the
    // best-matching portfolio text so the visitor still gets a correct answer.
    console.warn("Model unavailable, using portfolio text instead:", error);
    return {
      answer: matches[0].content,
      sources,
      fallback: true,
    };
  }
}