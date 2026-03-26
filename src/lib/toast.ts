import { toast } from "react-toastify";
import type { AxiosError } from "axios";

export const toastConfig = {
  position: "top-right" as const,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const showSuccessToast = (message: string, duration = 3000) => {
  toast.success(message, {
    ...toastConfig,
    autoClose: duration,
  });
};

export const showErrorToast = (message: string, duration = 5000) => {
  toast.error(message, {
    ...toastConfig,
    autoClose: duration,
  });
};

export const showInfoToast = (message: string, duration = 3000) => {
  toast.info(message, {
    ...toastConfig,
    autoClose: duration,
  });
};

export const showWarningToast = (message: string, duration = 4000) => {
  toast.warning(message, {
    ...toastConfig,
    autoClose: duration,
  });
};

export const getErrorMessageFromAxios = (error: AxiosError<any>): string => {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }

  if (
    error.response?.data?.errors &&
    Array.isArray(error.response.data.errors)
  ) {
    return error.response.data.errors
      .map((err: any) => err.message || err)
      .join(", ");
  }

  if (error.response?.data?.error) {
    return error.response.data.error;
  }

  if (error.response?.statusText) {
    return error.response.statusText;
  }

  if (error.message === "Network Error") {
    return "Network error. Please check your connection.";
  }

  // Default
  return "An error occurred. Please try again.";
};

export const showApiErrorToast = (error: AxiosError<any>) => {
  const message = getErrorMessageFromAxios(error);

  switch (error.response?.status) {
    case 400:
      showErrorToast(`Invalid request: ${message}`);
      break;
    case 401:
      showErrorToast("Session expired. Please login again.");
      break;
    case 403:
      showErrorToast("You don't have permission to perform this action.");
      break;
    case 404:
      showErrorToast("Resource not found.");
      break;
    case 409:
      showErrorToast(message || "This resource already exists.");
      break;
    case 422:
      showErrorToast(`Validation error: ${message}`);
      break;
    case 500:
    case 502:
    case 503:
    case 504:
      showErrorToast("Server error. Please try again later.");
      break;
    default:
      showErrorToast(message);
  }
};

export const showCreateSuccessToast = (resource: string) => {
  showSuccessToast(`${resource} created successfully!`);
};

export const showUpdateSuccessToast = (resource: string) => {
  showSuccessToast(`${resource} updated successfully!`);
};

export const showDeleteSuccessToast = (resource: string) => {
  showSuccessToast(`${resource} deleted successfully!`);
};

export default {
  showSuccessToast,
  showErrorToast,
  showInfoToast,
  showWarningToast,
  showApiErrorToast,
  getErrorMessageFromAxios,
  showCreateSuccessToast,
  showUpdateSuccessToast,
  showDeleteSuccessToast,
};
