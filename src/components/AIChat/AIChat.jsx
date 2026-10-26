
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  ChevronDown,
  Cpu,
  LoaderCircle,
  Search,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { answerPortfolioQuestion } from "../../ai/model.js";
import RobotFace from "./RobotFace.jsx";
import "./AIChat.css";

const suggestions = [
  "Explore Sufiyan's projects",
  "What technologies does he work with?",
  "Tell me about his development experience",
  "How can we discuss a project?",
];

const STEPS = [
  { key: "search", label: "Search", icon: Search },
  { key: "model", label: "Model", icon: Cpu },
  { key: "write", label: "Write", icon: Sparkles },
];

const welcome = {
  id: "welcome-message",
  role: "assistant",
  content:
    "Hi! 👋 Welcome to Sufiyan's portfolio. I'm Sufiyan AI, your personal assistant. Ask me about his skills, projects, or experience.",
};

let idCounter = 0;

const nextId = (prefix) => `${prefix}-${++idCounter}`;

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([welcome]);
  const [busy, setBusy] = useState(false);
  const [step, setStep] = useState(null);
  const [download, setDownload] = useState(null);
  const [draft, setDraft] = useState("");

  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;

    if (el) {
      el.scrollTo({
        top: el.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, busy]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  async function ask(text) {
    const question = text.trim();

    if (!question || busy) return;

    const assistantId = nextId("assistant");

    setDraft("");
    setBusy(true);

    setMessages((current) => [
      ...current,
      {
        id: nextId("user"),
        role: "user",
        content: question,
      },
      {
        id: assistantId,
        role: "assistant",
        content: "",
        sources: [],
        streaming: true,
      },
    ]);

    const patch = (fields) =>
      setMessages((current) =>
        current.map((message) =>
          message.id === assistantId
            ? { ...message, ...fields }
            : message
        )
      );

    try {
      const result = await answerPortfolioQuestion(question, {
        onStatus: setStep,
        onToken: (content) => patch({ content }),
        onProgress: setDownload,
      });

      patch({
        content: result.answer,
        sources: result.sources || [],
        streaming: false,
        note: result.fallback
          ? "AI model unavailable on this device, so this answer is taken directly from the portfolio."
          : null,
      });
    } catch (error) {
      console.error("Sufiyan AI error:", error);

      patch({
        content:
          "Something went wrong while answering. Please try again in a moment.",
        streaming: false,
        error: true,
      });
    } finally {
      setBusy(false);
      setStep(null);
      setDownload(null);
    }
  }

  const activeIndex = STEPS.findIndex((item) => item.key === step);

  const isWriting = messages.some(
    (message) => message.streaming && message.content
  );

  const faceMood = busy
    ? isWriting
      ? "talking"
      : "thinking"
    : "idle";

  return (
    <div className="ai-root">
      <AnimatePresence>
        {open && (
          <motion.div
            className="ai-window"
            role="dialog"
            aria-label="Sufiyan AI chat assistant"
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.94,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: 24,
              scale: 0.94,
              filter: "blur(8px)",
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="ai-aurora" aria-hidden="true" />

            <header className="ai-header">
              <div className="ai-face-badge">
                <RobotFace size={44} mood={faceMood} />
              </div>

              <div className="ai-title">
                <strong>Sufiyan AI</strong>
                <span>
                  <i className="ai-live-dot" />
                  Your Personal AI Assistant
                </span>
              </div>

              <button
                type="button"
                className="ai-icon-button"
                onClick={() => setOpen(false)}
                aria-label="Close Sufiyan AI chat"
              >
                <X size={18} />
              </button>
            </header>

            {busy && (
              <div className="ai-status">
                <div className="ai-steps">
                  {STEPS.map((item, index) => {
                    const Icon = item.icon;

                    const state =
                      index === activeIndex
                        ? "is-active"
                        : index < activeIndex
                          ? "is-done"
                          : "";

                    return (
                      <span
                        key={item.key}
                        className={`ai-step ${state}`}
                      >
                        <Icon size={12} />
                        {item.label}
                      </span>
                    );
                  })}
                </div>

                {download !== null && (
                  <>
                    <div className="ai-progress">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${download}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    <small>
                      Downloading AI model {download}% (first visit only)
                    </small>
                  </>
                )}
              </div>
            )}

            <div className="ai-messages" ref={scrollRef}>
              <AnimatePresence initial={false}>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    layout
                    initial={{
                      opacity: 0,
                      y: 14,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`ai-row ai-row-${message.role}`}
                  >
                    {message.role === "assistant" && (
                      <span className="ai-avatar">
                        <RobotFace
                          size={26}
                          mood={
                            message.streaming
                              ? message.content
                                ? "talking"
                                : "thinking"
                              : "idle"
                          }
                        />
                      </span>
                    )}

                    <div
                      className={`ai-bubble ai-bubble-${message.role}${
                        message.error ? " is-error" : ""
                      }`}
                    >
                      {message.role === "assistant" &&
                      message.streaming &&
                      !message.content ? (
                        <span
                          className="ai-dots"
                          aria-label="Thinking"
                        >
                          <i />
                          <i />
                          <i />
                        </span>
                      ) : (
                        <p>
                          {message.content}
                          {message.streaming && (
                            <span className="ai-caret" />
                          )}
                        </p>
                      )}

                      {message.sources?.length > 0 && (
                        <div className="ai-sources">
                          {message.sources.map((source) => (
                            <span
                              className="ai-source"
                              key={source.title}
                            >
                              <BookOpen size={11} />
                              {source.title}
                            </span>
                          ))}
                        </div>
                      )}

                      {message.note && (
                        <small className="ai-note">
                          {message.note}
                        </small>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {messages.length === 1 && !busy && (
              <div className="ai-suggestions">
                {suggestions.map((suggestion, index) => (
                  <motion.button
                    key={suggestion}
                    type="button"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + index * 0.07 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => ask(suggestion)}
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            )}

            <form
              className="ai-form"
              onSubmit={(event) => {
                event.preventDefault();
                ask(draft);
              }}
            >
              <input
                ref={inputRef}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Ask me anything about Sufiyan..."
                maxLength={500}
                aria-label="Ask Sufiyan AI a question"
                disabled={busy}
              />

              <button
                type="submit"
                aria-label="Send question to Sufiyan AI"
                disabled={busy || !draft.trim()}
              >
                {busy ? (
                  <LoaderCircle className="ai-spin" size={17} />
                ) : (
                  <Send size={17} />
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        className="ai-launcher"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close Sufiyan AI" : "Open Sufiyan AI"}
        aria-expanded={open}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        <span className="ai-launcher-ring" aria-hidden="true" />

        {open ? (
          <ChevronDown size={22} />
        ) : (
          <RobotFace
            size={34}
            mood={faceMood}
            className="ai-launcher-face"
          />
        )}

        {!open && (
          <span className="ai-launcher-label">Sufiyan AI</span>
        )}
      </motion.button>
    </div>
  );
}
