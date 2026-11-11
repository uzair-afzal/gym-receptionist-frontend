import { Sparkles } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { cn } from "../../lib/utils";
import type { Message } from "../../types/chat";

export function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex gap-3", isUser && "justify-end")}>
      {!isUser && (
        <Avatar className="size-8 shrink-0">
          <AvatarFallback className="bg-primary text-primary-foreground">
            <Sparkles className="size-4" />
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          "max-w-[85%] whitespace-pre-wrap text-sm leading-relaxed sm:max-w-[75%]",
          isUser
            ? "rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-primary-foreground"
            : "pt-1.5 text-foreground"
        )}
      >
        {message.content}
      </div>
    </div>
  );
}
