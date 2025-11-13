// src/components/Chatbot.tsx
import { useState, useRef, useEffect } from "react";

type Msg = { sender: "user" | "bot"; text: string };

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
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const res = await fetch(
        "https://codesell-academy-backend1.onrender.com/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-frontend-secret": "WE_ARE_10_262025",
          },
          body: JSON.stringify({ message: text }),
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Unknown error" }));
        throw new Error(
          err?.error || `Request failed with status ${res.status}`
        );
      }

      const data = await res.json();
      const botMsg: Msg = {
        sender: "bot",
        text: data?.reply || "I couldn't find an answer right now.",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      console.error("Chat send error:", err);

      let errorMessage =
        "⚠️ সার্ভারের সাথে যোগাযোগ করা যাচ্ছে না। পরে চেষ্টা করুন।";

      if (err.name === "AbortError") {
        errorMessage =
          "⏰ রিকোয়েস্ট টাইমআউট হয়েছে। দয়া করে আবার চেষ্টা করুন।";
      } else if (err.message.includes("429")) {
        errorMessage =
          "🚫 অনেক রিকোয়েস্ট পাঠানো হয়েছে। এক মিনিট পরে আবার চেষ্টা করুন।";
      } else if (err.message.includes("401") || err.message.includes("403")) {
        errorMessage = "🔒 অনুমতি ত্রুটি। দয়া করে পৃষ্ঠাটি রিফ্রেশ করুন।";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: errorMessage,
        },
      ]);
    } finally {
      setSending(false);
      setLoading(false);
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
        <div className="fixed z-[99998] right-20 bottom-10 w-[360px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden chat-window">
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
                className="text-sm px-2 py-1 bg-white/20 rounded-md hover:bg-white/30 transition"
                disabled={sending}
              >
                Clear
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="close"
                className="text-xl font-bold hover:bg-white/20 w-6 h-6 rounded-full flex items-center justify-center transition"
                disabled={sending}
              >
                ×
              </button>
            </div>
          </div>

          {/* body */}
          <div
            ref={bodyRef}
            className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3 relative"
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

            {/* Loading indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[78%] px-4 py-2 rounded-2xl rounded-bl-none bg-white border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <span className="text-sm">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* input */}
          <div className="px-4 py-3 border-t bg-white flex gap-2 items-center">
            <input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !sending && handleSend()}
              placeholder="Type your question (English or বাংলা)..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-[13px] disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={sending}
            />
            <button
              onClick={handleSend}
              disabled={!userInput.trim() || sending}
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white disabled:opacity-60 disabled:cursor-not-allowed hover:bg-indigo-700 transition flex items-center gap-2 min-w-[80px] justify-center"
            >
              {sending ? (
                <>
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                "Send"
              )}
            </button>
          </div>

          {/* Connection status indicator */}
          <div className="px-4 py-1 bg-gray-100 border-t text-xs text-gray-600 flex justify-between items-center">
            <span>{sending ? "Connecting to server..." : "Ready to chat"}</span>
            <div
              className={`w-2 h-2 rounded-full ${
                sending ? "bg-yellow-500 animate-pulse" : "bg-green-500"
              }`}
            ></div>
          </div>
        </div>
      )}
    </>
  );
}
