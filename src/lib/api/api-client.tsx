
import axios from "axios";
import type {
    AxiosError,
    InternalAxiosRequestConfig,
} from "axios";



export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request Interceptor
apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // Add authentication token here when required.

        return config;
    },
    (error: AxiosError) => Promise.reject(error)
);

// Response Interceptor
apiClient.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        const message =
            (error.response?.data as { message?: string })?.message ||
            error.message ||
            "Something went wrong. Please try again.";

        return Promise.reject(new Error(message));
    }
);
