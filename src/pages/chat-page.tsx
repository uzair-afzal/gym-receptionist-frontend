import { useState } from "react";
import { TopBanner } from "../components/layout/top-banner";
import { Navbar } from "../components/layout/navbar";
import { HeroSection } from "../components/home/hero-section";
import { SessionTypes } from "../components/home/session-cards";
import { MembershipSection } from "../components/home/membership-section";
import { FacilitiesSection } from "../components/home/facilities-section";
import { Footer } from "../components/home/footer";
import { ChatWidget } from "../components/chat/chat-widget";
import { useChat } from "../hooks/use-chat";

export default function ChatPage() {
  const { messages, isTyping, send, reset } = useChat();
  // By default, open the chat widget as shown in the user's reference image
  const [isChatOpen, setIsChatOpen] = useState(true);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleSelectPrompt = (prompt: string) => {
    setIsChatOpen(true);
    send(prompt);
  };

  return (
    <div className="min-h-screen bg-[#fbf9f5] text-slate-900 flex flex-col font-sans antialiased selection:bg-orange-100 selection:text-orange-950">
      {/* Top Demo Banner */}
      <TopBanner />

      {/* Navigation */}
      <Navbar onOpenChat={handleOpenChat} />

      {/* Main Page Content */}
      <main className="flex-1">
        <HeroSection onOpenChat={handleOpenChat} />
        <SessionTypes onSelectPrompt={handleSelectPrompt} />
        <MembershipSection onSelectPrompt={handleSelectPrompt} />
        <FacilitiesSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating IronPeak Gym AI Assistant Widget */}
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
