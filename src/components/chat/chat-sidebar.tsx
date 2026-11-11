import { MessageSquare, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import type { Conversation } from "../../types/chat";

interface Props {
  conversations: Conversation[];
  activeId: string;
  onSelect: (id: string) => void;
  onNew: () => void;
}

export function ChatSidebar({ conversations, activeId, onSelect, onNew }: Props) {
  return (
    <div className="flex h-full flex-col bg-muted/30">
      <div className="p-3">
        <Button variant="outline" className="w-full justify-start gap-2" onClick={onNew}>
          <Plus className="size-4" />
          New chat
        </Button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto px-2">
        <nav className="flex flex-col gap-1 pb-2" aria-label="Conversations">
          {conversations.map((c) => (
            <button
              key={c.id}
              onClick={() => onSelect(c.id)}
              aria-current={c.id === activeId ? "page" : undefined}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                c.id === activeId && "bg-accent font-medium"
              )}
            >
              <MessageSquare className="size-4 shrink-0 text-muted-foreground" />
              <span className="truncate">{c.title}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
