import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";

import type { ChatRequest } from "../types/chat-types";
import { chatService } from "../service/chat-service";

export function useSendMessage() {
    return useMutation({
        mutationFn: (payload: ChatRequest) => chatService.sendMessage(payload),
    });
}

/** Turns any thrown error into a message that is safe to show in the chat. */
export function getErrorMessage(err: unknown): string {
    if (isAxiosError<{ error?: string }>(err)) {
        return err.response?.data?.error ?? "Can't reach the server. Please try again.";
    }
    return "Something went wrong. Please try again.";
}