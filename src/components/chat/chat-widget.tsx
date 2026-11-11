import { useState, useRef, useEffect } from "react";
import {
  RotateCcw,
  X,
  SendHorizontal,
  Dumbbell,
  MessageCircle,
} from "lucide-react";
import type { Message, QuickSuggestion } from "../../types/chat";
import { QUICK_SUGGESTIONS } from "../../hooks/use-chat";

interface ChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  messages: Message[];
  isTyping: boolean;
  onSend: (text: string) => void;
  onReset: () => void;
}

export function ChatWidget({
  isOpen,
  onToggle,
  onClose,
  messages,
  isTyping,
  onSend,
  onReset,
}: ChatWidgetProps) {
  const [inputValue, setInputValue] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll when messages change or typing changes
  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed || isTyping) return;
    onSend(trimmed);
    setInputValue("");
  };

  const handleSuggestionClick = (suggestion: QuickSuggestion) => {
    if (isTyping) return;
    onSend(suggestion.prompt);
  };

  return (
    <>
      {/* Floating Action Button (FAB) at Bottom-Right */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
        <button
          type="button"
          onClick={onToggle}
          aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
          className="flex size-14 sm:size-15 items-center justify-center rounded-full bg-gradient-to-tr from-[#e54524] to-[#f15935] text-white shadow-xl shadow-orange-950/20 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          {isOpen ? (
            <X className="size-6 stroke-[2.5]" />
          ) : (
            <div className="relative flex items-center justify-center">
              <MessageCircle className="size-7" />
              {/* Pulsing indicator */}
              <span className="absolute -top-1 -right-1 flex size-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75" />
                <span className="relative inline-flex rounded-full size-3 bg-white" />
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Chat Window Popup */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="IronPeak Gym AI Assistant"
          className="fixed bottom-22 right-4 sm:bottom-24 sm:right-6 z-50 flex h-[560px] max-h-[calc(100vh-110px)] w-[calc(100vw-2rem)] sm:w-[410px] flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/15 animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-[#e54524] via-[#ea4e2d] to-[#f15935] px-4 py-3.5 text-white shadow-xs select-none">
            {/* Left: Avatar & Info */}
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white shadow-xs">
                <span className="text-xl" role="img" aria-label="Gym logo">
                  <Dumbbell className="size-5 text-[#e54524]" />
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[15px] font-bold tracking-tight text-white leading-tight">
                  IronPeak Gym
                </h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="inline-block size-2 rounded-full bg-emerald-400 ring-2 ring-emerald-300/40 animate-pulse" />
                  <span className="text-[11px] font-medium text-white/95 leading-none">
                    AI gym assistant · replies instantly
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={onReset}
                title="Restart conversation"
                aria-label="Restart conversation"
                className="flex size-8 items-center justify-center rounded-full text-white/85 hover:bg-white/15 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="size-4" />
              </button>
              <button
                type="button"
                onClick={onClose}
                title="Close chat"
                aria-label="Close chat"
                className="flex size-8 items-center justify-center rounded-full text-white/85 hover:bg-white/15 hover:text-white transition-colors cursor-pointer"
              >
                <X className="size-4.5 stroke-[2.2]" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto bg-[#fafaf9]/50 px-4 py-4 space-y-3.5 chat-scrollbar">
            {messages.map((msg, index) => {
              const isAssistant = msg.role === "assistant";
              const isFirstGreeting = isAssistant && index === 0;

              return (
                <div key={msg.id} className="space-y-3">
                  <div
                    className={`flex ${isAssistant ? "justify-start" : "justify-end"
                      }`}
                  >
                    <div
                      className={`max-w-[85%] whitespace-pre-wrap text-[13px] leading-relaxed ${isAssistant
                        ? "rounded-2xl rounded-tl-sm border border-slate-200/80 bg-white p-3.5 text-slate-800 shadow-2xs"
                        : "rounded-2xl rounded-br-sm bg-gradient-to-r from-[#e54524] to-[#f15935] px-4 py-2.5 text-white shadow-2xs font-normal"
                        }`}
                    >
                      {msg.content}
                    </div>
                  </div>

                  {/* Quick Action Suggestion Chips directly under the initial greeting */}
                  {isFirstGreeting && messages.length === 1 && (
                    <div className="grid grid-cols-2 gap-2 pt-1 animate-in fade-in duration-300">
                      {QUICK_SUGGESTIONS.map((suggestion) => (
                        <button
                          key={suggestion.id}
                          type="button"
                          disabled={isTyping}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="flex items-center justify-center rounded-full border border-orange-200/90 bg-white px-3 py-1.5 text-[11.5px] font-medium text-slate-700 shadow-2xs transition-all hover:border-orange-300 hover:bg-orange-50/60 hover:text-orange-950 active:scale-[0.98] disabled:opacity-50 cursor-pointer text-center truncate"
                        >
                          {suggestion.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-slate-200/80 bg-white px-3.5 py-2.5 shadow-2xs">
                  <span className="size-1.5 rounded-full bg-[#e54524] animate-bounce [animation-delay:-0.3s]" />
                  <span className="size-1.5 rounded-full bg-[#e54524] animate-bounce [animation-delay:-0.15s]" />
                  <span className="size-1.5 rounded-full bg-[#e54524] animate-bounce" />
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* Footer / Input Container */}
          <div className="border-t border-slate-100 bg-white p-3 select-none">
            <form onSubmit={handleSubmit} className="relative flex flex-col">
              {/* Rounded Input Pill */}
              <div className="flex items-center rounded-full border border-slate-200 bg-white pl-4 pr-1.5 py-1 shadow-2xs focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100 transition-all">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isTyping}
                  className="w-full bg-transparent text-xs sm:text-[13px] text-slate-800 placeholder:text-slate-400 outline-none disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  aria-label="Send message"
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all ${inputValue.trim() && !isTyping
                    ? "bg-[#e54524] text-white hover:bg-[#d33b1b] shadow-xs cursor-pointer"
                    : "bg-[#fae4df] text-orange-300 cursor-not-allowed"
                    }`}
                >
                  <SendHorizontal className="size-4" />
                </button>
              </div>

              {/* Disclaimer matching image */}
              <p className="mt-2 text-center text-[11px] text-slate-400 font-normal">
                AI assistant, not medical advice. Questions? Call (555) 987-6543
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

