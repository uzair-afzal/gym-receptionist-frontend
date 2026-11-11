
import { useMutation } from "@tanstack/react-query";
import { chatService } from "../lib/service/chat-service";
import type {
    ChatRequest,
    ChatResponse,
} from "../lib/types/chat-types";

export function useSendMessage() {
    return useMutation<ChatResponse, Error, ChatRequest>({
        mutationFn: (payload) => chatService.sendMessage(payload),
    });
}
