import { useState } from "react";
import { Outlet } from "react-router-dom";
import { TopBanner } from "./top-banner";
import { Navbar } from "./navbar";
import { Footer } from "../home/footer";
import { ChatWidget } from "../chat/chat-widget";
import { useChat } from "../../hooks/use-chat";

export interface RootLayoutContext {
  onOpenChat: () => void;
  onSelectPrompt: (prompt: string) => void;
}

export function RootLayout() {
  const { messages, isTyping, send, reset } = useChat();
  const [isChatOpen, setIsChatOpen] = useState(true);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleSelectPrompt = (prompt: string) => {
    setIsChatOpen(true);
    send(prompt);
  };

  const contextValue: RootLayoutContext = {
    onOpenChat: handleOpenChat,
    onSelectPrompt: handleSelectPrompt,
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans antialiased selection:bg-sky-100 selection:text-sky-950">
      {/* Top Demo Banner */}
      <TopBanner />

      {/* Navigation Bar */}
      <Navbar onOpenChat={handleOpenChat} />

      {/* Routed Page Content */}
      <main className="flex-1">
        <Outlet context={contextValue} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating AI Chat Widget across all routes */}
      <ChatWidget
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen((prev) => !prev)}
        onClose={() => setIsChatOpen(false)}
        messages={messages}
        isTyping={isTyping}
        onSend={send}
        onReset={reset}
      />
    </div>
  );
}

