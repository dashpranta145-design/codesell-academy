import React, { useState } from "react";
import { SparklesIcon, XIcon } from "./Icons/Icons";

const AIBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full shadow-lg hover:shadow-cyan-400/50 transition-transform hover:scale-110 flex items-center justify-center"
          aria-label="Open AI Assistant"
        >
          <SparklesIcon className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-5 right-5 z-50 bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-xl border border-cyan-500/30 overflow-hidden transition-all duration-300 ${
            isMinimized ? "w-72 h-14" : "w-[320px] h-[420px]"
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-pink-500 p-3 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <SparklesIcon className="w-5 h-5 text-white" />
              <h3 className="text-white font-semibold text-sm">AI Assistant</h3>
            </div>
            <div className="flex items-center gap-2">
              {/* Minimize Button */}
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-7 h-7 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Minimize"
              >
                {isMinimized ? (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <XIcon className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Chat Iframe */}
          {!isMinimized && (
            <iframe
              src="https://mrpranta25-academy-bot.hf.space"
              className="w-full h-[calc(100%-48px)] border-none"
              title="IT Academy Assistant"
              allow="microphone; camera"
              style={{
                background: "#0f172a",
                colorScheme: "dark",
              }}
            />
          )}

          {/* Hide inner texts, Gradio branding, title, settings */}
          <style>{`
            iframe {
              border: none;
            }
            iframe::-webkit-scrollbar {
              display: none;
            }
            /* Hide Gradio headers, footers, and extra text */
            iframe[src*="hf.space"]::part(footer),
            iframe[src*="hf.space"]::part(toolbar),
            iframe[src*="hf.space"] header,
            iframe[src*="hf.space"] [data-testid="block-info"],
            iframe[src*="hf.space"] [data-testid="settings-button"],
            iframe[src*="hf.space"] div:has(a[href*="gradio.app"]),
            iframe[src*="hf.space"] div:has(textarea[placeholder]),
            iframe[src*="hf.space"] h1, 
            iframe[src*="hf.space"] p, 
            iframe[src*="hf.space"] [data-testid="title"],
            iframe[src*="hf.space"] label,
            iframe[src*="hf.space"] [class*="svelte"],
            iframe[src*="hf.space"] [data-testid="markdown"],
            iframe[src*="hf.space"] div[style*="Ask any question"],
            iframe[src*="hf.space"] div[style*="🎓 IT Academy Assistant"] {
              display: none !important;
              visibility: hidden !important;
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default AIBot;
