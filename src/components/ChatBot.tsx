// src/components/Chatbot.tsx
import { useState, useRef, useEffect } from "react";

type Msg = { sender: "user" | "bot"; text: string };

// const FRONTEND_SECRET = import.meta.env.VITE_FRONTEND_SECRET || "";

export default function Chatbot(): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      sender: "bot",
      text: "👋 Hi! আমি আপনার Academy Assistant. How can I help you today?",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [sending, setSending] = useState(false);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({
      top: bodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async () => {
    const text = userInput.trim();
    if (!text) return;

    const userMsg: Msg = { sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setUserInput("");
    setSending(true);

    try {
      const res = await fetch("https://codesell-academy-backend.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-frontend-secret": "WE_ARE_10_262025", // must match server FRONTEND_SECRET (or server skips if empty)
        },
        body: JSON.stringify({ message: text }),
      });

      if (!res.ok) {
        // handle 401/429 etc
        const err = await res.json().catch(() => ({ error: "Unknown error" }));
        throw new Error(err?.error || "Request failed");
      }

      const data = await res.json();
      const botMsg: Msg = {
        sender: "bot",
        text: data?.reply || "I couldn't find an answer right now.",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      console.error("Chat send error:", err);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ সার্ভারের সাথে যোগাযোগ করা যাচ্ছে না বা অনুপযুক্ত অনুমতি আছে। পরে চেষ্টা করুন।",
        },
      ]);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        aria-label="Open chat"
        onClick={() => setOpen((s) => !s)}
        className="fixed z-[99999] right-5 bottom-5 w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-pink-500 text-white shadow-xl flex items-center justify-center hover:scale-105 transition"
        title="Open chat"
      >
        💬
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed z-[99998] right-20 bottom-10 w-[360px] h-[400px] w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden chat-window">
          {/* header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white">
            <div className="flex items-center gap-3">
              <img
                src="/images/CodeSell_Logo.png"
                alt="logo"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <div className="font-semibold text-sm">CodeSell Academy</div>
                <div className="text-xs opacity-80">— Academy Assistant</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setMessages([
                    {
                      sender: "bot",
                      text: "👋 Hi! আমি আপনার Academy Assistant. How can I help you today?",
                    },
                  ]);
                }}
                title="Clear chat"
                className="text-sm px-2 py-1 bg-white/20 rounded-md"
              >
                Clear
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="close"
                className="text-xl font-bold"
              >
                ×
              </button>
            </div>
          </div>

          {/* body */}
          <div
            ref={bodyRef}
            className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[78%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                    m.sender === "user"
                      ? "bg-indigo-600 text-white rounded-br-none"
                      : "bg-white border border-gray-200 rounded-bl-none"
                  }`}
                >
                  <div style={{ whiteSpace: "pre-wrap" }}>{m.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/* input */}
          <div className="px-4 py-3 border-t bg-white flex gap-2 items-center">
            <input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your question (English or বাংলা)..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-[13px]"
              disabled={sending}
            />
            <button
              onClick={handleSend}
              disabled={!userInput.trim() || sending}
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
