import { apiClient } from "../api/api-client";
import type { ChatRequest, ChatResponse } from "../types/chat-types";


export const chatService = {
    sendMessage: async (
        payload: ChatRequest
    ): Promise<ChatResponse> => {
        const { data } = await apiClient.post<ChatResponse>(
            "/chat",
            payload
        );

        return data;
    },
};
