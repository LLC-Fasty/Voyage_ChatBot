"use client";
import ChatArea from "@/components/ChatArea";
import Content from "@/components/Content";

export default function Home() {
  return (
    <div className="flex items-center min-h-screen bg-[#212121]">
      <Content />
      <ChatArea />
    </div>
  );
}
