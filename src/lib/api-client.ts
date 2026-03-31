import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Extract error message from various error response formats
 * Handles common API response structures
 */
const getErrorMessage = (error: AxiosError<any>): string => {
  // Check for custom error message from backend
  if (error.response?.data?.message) {
    return error.response.data.message;
  }

  // Check for validation errors array
  if (
    error.response?.data?.errors &&
    Array.isArray(error.response.data.errors)
  ) {
    return error.response.data.errors
      .map((err: any) => err.message || err)
      .join(", ");
  }

  // Check for error object
  if (error.response?.data?.error) {
    return error.response.data.error;
  }

  // HTTP status text
  if (error.response?.statusText) {
    return error.response.statusText;
  }

  // Network error
  if (error.message === "Network Error") {
    return "Network error. Please check your connection.";
  }

  // Default message
  return "An error occurred. Please try again.";
};

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const errorMessage = getErrorMessage(error);
    const isAuthEndpoint = error.config?.url?.includes("/auth/");

    // Handle different error statuses
    if (error.response?.status === 401) {
      // Unauthorized - clear auth and redirect
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      toast.error("Session expired. Please login again.");
      window.location.href = "/login";
    } else if (error.response?.status === 403) {
      // Forbidden
      toast.error("You don't have permission to perform this action.");
    } else if (error.response?.status === 404) {
      // Not found
      toast.error("Resource not found.");
    } else if (error.response?.status === 409) {
      // Conflict
      toast.error(errorMessage || "This resource already exists.");
    } else if (
      error.response?.status === 422 ||
      error.response?.status === 400
    ) {
      // Validation error - skip toast for auth endpoints (handled by mutation)
      if (!isAuthEndpoint) {
        toast.error(errorMessage);
      }
    } else if (error.response?.status && error.response.status >= 500) {
      // Server error
      toast.error("Server error. Please try again later.");
    } else if (error.message === "Network Error") {
      // Network error
      toast.error("Network error. Please check your connection.");
    } else {
      // Generic error
      toast.error(errorMessage);
    }

    return Promise.reject(error);
  },
);

export const apiRequest = async <T>(
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const response = await apiClient({
      method,
      url,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default apiClient;
