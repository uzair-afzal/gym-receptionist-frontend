
import { useCallback, useRef, useState } from "react";
import type { Message, QuickSuggestion } from "../types/chat";
import { getErrorMessage, useSendMessage } from "../lib/error-handler";

const uid = () => crypto.randomUUID();

const GREETING_ID = "greeting";
const ERROR_PREFIX = "error-";

export const INITIAL_GREETING =
  "Hey! 👋 I'm the virtual assistant at IronPeak Gym. I can tell you about memberships or book a session for you. How can I help?";

export const QUICK_SUGGESTIONS: QuickSuggestion[] = [
  { id: "tour", label: "Book a free tour", prompt: "Book a free tour" },
  { id: "sessions", label: "Sessions & prices", prompt: "Sessions & prices" },
  { id: "plans", label: "Membership plans", prompt: "Membership plans" },
  { id: "hours", label: "Opening hours", prompt: "Opening hours" },
];

const createMessage = (
  role: Message["role"],
  content: string,
  id: string = uid()
): Message => ({
  id,
  role,
  content,
  createdAt: Date.now(),
});

const createInitialMessage = (): Message =>
  createMessage("assistant", INITIAL_GREETING, GREETING_ID);

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    createInitialMessage(),
  ]);

  const {
    mutateAsync,
    isPending,
    reset: resetMutation,
  } = useSendMessage();

  // Ignore API responses from previous sessions after resetting the chat.
  const sessionRef = useRef(0);

  const send = useCallback(
    async (text: string) => {
      const content = text.trim();

      if (!content || isPending) return;

      const session = sessionRef.current;

      const userMessage = createMessage("user", content);

      setMessages((prev) => [...prev, userMessage]);

      try {
        // Backend payload: { messages: string }
        const { reply } = await mutateAsync({
          message: content,
        });

        // Ignore responses belonging to an old chat session.
        if (session !== sessionRef.current) return;

        const assistantMessage = createMessage("assistant", reply);

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (error) {
        if (session !== sessionRef.current) return;

        console.error("Failed to send message:", error);

        const errorMessage = createMessage(
          "assistant",
          getErrorMessage(error),
          `${ERROR_PREFIX}${uid()}`
        );

        setMessages((prev) => [...prev, errorMessage]);
      }
    },
    [isPending, mutateAsync]
  );

  const reset = useCallback(() => {
    sessionRef.current += 1;

    resetMutation();
    setMessages([createInitialMessage()]);
  }, [resetMutation]);

  return {
    messages,
    isTyping: isPending,
    send,
    reset,
  };
}
