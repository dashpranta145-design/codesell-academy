import React, { useState, useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import { PaperAirplaneIcon, SparklesIcon } from "./Icons/Icons";

// Define message type
interface Message {
  sender: "user" | "ai";
  text: string;
}

const AICareerCounselor: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Hello! I'm your AI Career Counselor. Ask me anything about starting a career in tech or which CodeSell course is right for you!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({
        apiKey: import.meta.env.VITE_GOOGLE_AI_API_KEY,
      });
      const systemInstruction = `You are a friendly and encouraging AI Career Counselor for CodeSell IT Academy. Your goal is to help users understand different tech career paths and guide them towards the most suitable course offered by CodeSell Academy. The available courses are: Web Development, Digital Marketing, Data Science, Graphics Design, and AI & Machine Learning. Always be positive, keep your answers concise and easy to understand, and recommend a specific CodeSell course when appropriate.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: userMessage.text,
        config: {
          systemInstruction: systemInstruction,
        },
      });

      const aiMessage: Message = { sender: "ai", text: response.text };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage: Message = {
        sender: "ai",
        text: "Sorry, something went wrong. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-counselor" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            AI Career Counselor
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Video Section - LEFT SIDE */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-primary/20">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/zOjov-2OZ0E"
                  title="Learn to Code"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Why Learn Programming?
                </h3>
                <p className="text-gray-400">
                  Discover how coding can transform your career and open doors
                  to endless opportunities in the tech industry.
                </p>
              </div>
            </div>
          </div>

          {/* Chat Section - RIGHT SIDE */}
          <div className="order-1 lg:order-2">
            <div className="bg-gray-900 rounded-2xl shadow-lg border border-primary/20 flex flex-col h-[600px]">
              <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 ${
                      msg.sender === "user" ? "justify-end" : ""
                    }`}
                  >
                    {msg.sender === "ai" && (
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                        <SparklesIcon className="w-6 h-6 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-md p-4 rounded-2xl ${
                        msg.sender === "user"
                          ? "bg-primary text-white rounded-br-none"
                          : "bg-gray-800 text-gray-200 rounded-bl-none"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                      <SparklesIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="max-w-md p-4 rounded-2xl bg-gray-800 text-gray-200 rounded-bl-none">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <div className="p-4 border-t border-primary/20">
                <form
                  onSubmit={handleSendMessage}
                  className="flex items-center gap-4"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask for career advice..."
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-full py-3 px-5 text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    className="bg-primary text-white rounded-full p-3 hover:bg-primary-dark disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
                    disabled={isLoading || !input.trim()}
                    aria-label="Send message"
                  >
                    <PaperAirplaneIcon className="w-6 h-6" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICareerCounselor;
