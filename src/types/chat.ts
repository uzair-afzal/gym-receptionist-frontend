export type Role = "user" | "assistant";

export interface Message {
  id: string;
  role: Role;
  content: string;
  createdAt: number;
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
}

export interface QuickSuggestion {
  id: string;
  label: string;
  prompt: string;
}
