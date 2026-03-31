import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { apiRequest } from "@/lib/api-client";

interface RegisterRequest {
  email: string;
}

interface RegisterResponse {
  success: boolean;
  message: string;
  data: {
    license_key: string;
  };
}

export const useLicenseRegister = () => {
  return useMutation<RegisterResponse, Error, RegisterRequest>({
    mutationFn: async (credentials: RegisterRequest) => {
      return await apiRequest<RegisterResponse>(
        "POST",
        "/license/register",
        credentials,
      );
    },
    onSuccess: () => {
      toast.success("Registration successful! Welcome.");
    },
  });
};

export const useLicenseActivate = () => {
  return useMutation<void, Error, { licenseKey: string }>({
    mutationFn: async ({ licenseKey }) => {
      await apiRequest<void>("POST", "/license/activate", { licenseKey });
    },
    onSuccess: () => {
      toast.success("License activated successfully!");
    },
  });
};
