import { pipeline } from "@huggingface/transformers";
import { portfolioKnowledge } from "./knowledge.js";

let extractorPromise = null;
let knowledgeEmbeddingsPromise = null;

async function getExtractor() {
  if (!extractorPromise) {
    extractorPromise = pipeline(
      "feature-extraction",
      "Xenova/all-MiniLM-L6-v2"
    ).catch((error) => {
      extractorPromise = null;
      throw error;
    });
  }

  return extractorPromise;
}

async function embed(text) {
  const extractor = await getExtractor();

  const output = await extractor(text, {
    pooling: "mean",
    normalize: true,
  });

  return Array.from(output.data);
}

function cosineSimilarity(a, b) {
  let score = 0;

  for (let i = 0; i < Math.min(a.length, b.length); i += 1) {
    score += a[i] * b[i];
  }

  return score;
}

async function getKnowledgeEmbeddings() {
  if (!knowledgeEmbeddingsPromise) {
    knowledgeEmbeddingsPromise = (async () => {
      const extractor = await getExtractor();

      const texts = portfolioKnowledge.map(
        (item) => `${item.title}. ${item.content}`
      );

      const output = await extractor(texts, {
        pooling: "mean",
        normalize: true,
      });

      const vectors = output.tolist();

      return portfolioKnowledge.map((item, index) => ({
        ...item,
        embedding: vectors[index],
      }));
    })().catch((error) => {
      knowledgeEmbeddingsPromise = null;
      throw error;
    });
  }

  return knowledgeEmbeddingsPromise;
}

export async function retrievePortfolioContext(question) {
  const cleanQuestion = question.trim();

  if (!cleanQuestion) {
    return [];
  }

  const [questionEmbedding, knowledge] = await Promise.all([
    embed(cleanQuestion),
    getKnowledgeEmbeddings(),
  ]);

  return knowledge
    .map((item) => ({
      id: item.id,
      title: item.title,
      content: item.content,
      source: item.source,
      score: cosineSimilarity(questionEmbedding, item.embedding),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}