export interface LicenseRegisterRequest {
  email: string;
}

export interface LicenseRegisterResponse {
  success: boolean;
  message: string;
  data: {
    license_key: string;
  };
}

export type LicenseButtonState = "register" | "active" | "activating";
