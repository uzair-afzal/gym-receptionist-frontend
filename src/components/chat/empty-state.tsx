import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";

const suggestions = [
  "Explain React Query caching in simple terms",
  "Write a Zod schema for a signup form",
  "Review my component structure",
  "Help me plan a weekend project",
];

export function EmptyState({ onPick }: { onPick: (text: string) => void }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 px-4">
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <Sparkles className="size-6" />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight">What can I help with?</h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          Ask a question or pick a suggestion to start a conversation.
        </p>
      </div>
      <div className="grid w-full max-w-2xl gap-2 sm:grid-cols-2">
        {suggestions.map((s) => (
          <Button
            key={s}
            variant="outline"
            className="h-auto justify-start whitespace-normal rounded-xl px-4 py-3 text-left font-normal"
            onClick={() => onPick(s)}
          >
            {s}
          </Button>
        ))}
      </div>
    </div>
  );
}
