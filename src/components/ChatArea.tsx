"use client";
import React from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { useState } from "react";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;

export default function ChatArea() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  async function runChat(prompt: string) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: messages.map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage(prompt);
    const response = result.response;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: prompt },
      { role: "model", text: response.text() },
    ]);
  }

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (input.trim() === "") return;
    runChat(input);
    setInput("");
  };

  const parseMessage = (message: string) => {
    // Parse bold (**text**) into <b>
    let parsedMessage = message.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

    // Parse italic (*text*) into <i>
    parsedMessage = parsedMessage.replace(/\*(.*?)\*/g, "<i>$1</i>");

    // Convert list items prefixed with "*" into <ul><li> structure
    parsedMessage = parsedMessage.replace(/^\s*\*\s+(.*)/gm, "<li>$1</li>");

    // Wrap consecutive <li> elements in a <ul> tag
    parsedMessage = parsedMessage.replace(/(<li>.*?<\/li>)/g, "<ul>$1</ul>");

    // Prevent nested <ul> tags being created repeatedly
    parsedMessage = parsedMessage.replace(/<\/ul>\s*<ul>/g, "");

    // Handle paragraph separation for better readability
    parsedMessage = parsedMessage.replace(/\n\n+/g, "</p><p>");
    parsedMessage = `<p>${parsedMessage}</p>`;

    return parsedMessage;
  };
  return (
    <div className="flex flex-col min-h-screen bg-[#212121] text-gray-100 p-4 w-1/2">
      <div className="flex flex-col flex-1 bg-[#EEEEEE] rounded-lg shadow-md">
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  key={index}
                  className={`p-3 rounded-lg max-w-sm ${
                    msg.role === "user"
                      ? "bg-[#222831] text-[#EEEEEE] text-left"
                      : "bg-[#D65A31] text-[#EEEEEE] text-left"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: parseMessage(msg.text),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex items-center gap-2 border-t border-gray-700 p-4"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-[#D65A31] text-[#EEEEEE] text-xl font-medium p-3 rounded-lg focus:ring-2 focus:ring-[#222831] outline-none placeholder:text-[#222831]"
          />
          <button
            type="submit"
            className="bg-[#212121] text-[#E2E2E2] font-semibold text-xl px-4 py-2 rounded-lg hover:bg-[#D65A31] transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
