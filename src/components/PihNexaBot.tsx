"use client";

import React, { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "model";
  text: string;
}

export default function PihNexaBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Hi there! 👋 I am PihNexa AI. I can help you understand our hospital queue management pricing and features. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          history: messages,
        }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "model", text: data.text }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "model", text: "Oops, something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: "1rem",
        boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.15)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        margin: "0 auto",
      }}
      className="float-anim pihnexa-bot-container"
    >
      {/* Header */}
      <div
        style={{
          padding: "1rem 1.5rem",
          background: "#F8FAFC",
          borderBottom: "1px solid #E2E8F0",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #2DD4BF 0%, #6389D5 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFF",
            fontSize: "1.2rem",
          }}
        >
          <i className="fa-solid fa-robot"></i>
        </div>
        <div>
          <h3 style={{ margin: 0, fontSize: "1.1rem", color: "#0F172A", fontWeight: 600 }}>PihNexa AI</h3>
          <span style={{ fontSize: "0.8rem", color: "#0D9488" }}>Online &bull; Ready to help</span>
        </div>
      </div>

      {/* Chat Area */}
      <div
        style={{
          flex: 1,
          padding: "1.5rem",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(255,255,255,0.2) transparent",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              maxWidth: "85%",
              padding: "0.85rem 1.15rem",
              borderRadius: msg.role === "user" ? "1rem 1rem 0 1rem" : "1rem 1rem 1rem 0",
              background: msg.role === "user" 
                ? "var(--teal-600, #0D9488)" 
                : "#F1F5F9",
              color: msg.role === "user" ? "#FFFFFF" : "#334155",
              fontSize: "0.95rem",
              lineHeight: 1.5,
              border: msg.role === "model" ? "1px solid #E2E8F0" : "none",
            }}
          >
            <span 
              dangerouslySetInnerHTML={{ 
                __html: msg.text
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; font-weight: bold; color: var(--teal-500);">$1</a>')
                  .replace(/\n/g, '<br/>') 
              }} 
            />
          </div>
        ))}
        {isLoading && (
          <div
            style={{
              alignSelf: "flex-start",
              maxWidth: "85%",
              padding: "0.85rem 1.15rem",
              borderRadius: "1rem 1rem 1rem 0",
              background: "#F1F5F9",
              color: "#64748B",
              fontSize: "0.95rem",
              border: "1px solid #E2E8F0",
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <i className="fa-solid fa-circle-notch fa-spin"></i> Typing...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div style={{ padding: "1rem", background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
        <form
          onSubmit={handleSend}
          style={{
            display: "flex",
            gap: "0.5rem",
            background: "#FFFFFF",
            borderRadius: "2rem",
            padding: "0.25rem",
            border: "1px solid #CBD5E1",
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about pricing or features..."
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#0F172A",
              padding: "0.75rem 1rem",
              fontSize: "0.95rem",
            }}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            style={{
              background: "#0D9488",
              border: "none",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: (!input.trim() || isLoading) ? "not-allowed" : "pointer",
              opacity: (!input.trim() || isLoading) ? 0.5 : 1,
              color: "#FFFFFF",
              transition: "opacity 0.2s",
            }}
          >
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
