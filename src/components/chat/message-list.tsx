import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { MessageBubble } from "./message-bubble";
import type { Message } from "../../types/chat";

function TypingIndicator() {
  return (
    <div className="flex gap-3" role="status" aria-label="Assistant is typing">
      <Avatar className="size-8 shrink-0">
        <AvatarFallback className="bg-primary text-primary-foreground">
          <Sparkles className="size-4" />
        </AvatarFallback>
      </Avatar>
      <div className="flex items-center gap-1 pt-1.5">
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            className="size-1.5 animate-bounce rounded-full bg-muted-foreground/60 motion-reduce:animate-none"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

export function MessageList({
  messages,
  isTyping,
}: {
  messages: Message[];
  isTyping: boolean;
}) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, isTyping]);

  return (
    <div className="min-h-0 flex-1 overflow-y-auto">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-6">
        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={endRef} />
      </div>
    </div>
  );
}
