import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { apiRequest } from "@/lib/api-client";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    access_token: string;
    user: {
      id: string;
    };
  };
}

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: async (credentials: LoginRequest) => {
      return await apiRequest<LoginResponse>(
        "POST",
        "/auth/login",
        credentials,
      );
    },
    onSuccess: (data) => {
      if (data.data.access_token) {
        localStorage.setItem("access_token", data.data.access_token);
        localStorage.setItem("user", JSON.stringify(data.data.user));
        toast.success("Login successful! Welcome back.");
      }
    },
    onError: (error: any) => {
      // Show error message from backend or generic message
      const errorMessage =
        error.response?.data?.message ||
        "Login failed. Please check your credentials.";
      toast.error(errorMessage);
    },
    retry: 0, // Disable retry untuk login mutation
  });
};
