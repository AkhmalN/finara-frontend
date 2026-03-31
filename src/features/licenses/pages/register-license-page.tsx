import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Loader2, Key } from "lucide-react";
import { useLicenseRegister, useLicenseActivate } from "../hooks/useLicense";
import type { LicenseButtonState } from "../types/license";

const RegisterLicensePage = () => {
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [buttonState, setButtonState] =
    useState<LicenseButtonState>("register");
  const [licenseKey, setLicenseKey] = useState<string | null>(null);

  const registerMutation = useLicenseRegister();
  const activateMutation = useLicenseActivate();

  useEffect(() => {
    if (
      registerMutation.isSuccess &&
      licenseKey &&
      buttonState === "register"
    ) {
      setButtonState("activating");
      activateMutation.mutate({ licenseKey });
    }
  }, [registerMutation.isSuccess, licenseKey, buttonState, activateMutation]);

  useEffect(() => {
    if (activateMutation.isSuccess) {
      setButtonState("active");
    }
  }, [activateMutation.isSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      return;
    }

    setButtonState("register");
    registerMutation.mutate(
      { email },
      {
        onSuccess: (data) => {
          setLicenseKey(data.data.license_key);
        },
      },
    );
  };

  const isLoading = registerMutation.isPending || activateMutation.isPending;
  const hasError = registerMutation.isError || activateMutation.isError;

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="space-y-2">
        <CardTitle className="text-3xl font-bold text-center">
          Register License
        </CardTitle>
        <CardDescription className="text-center">
          Enter your email to register and activate your license
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                disabled={isLoading || buttonState === "active"}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="orderId" className="text-sm font-medium">
              Order ID
            </Label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                id="orderId"
                type="text"
                placeholder="Input your order id"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="pl-10"
                disabled={isLoading || buttonState === "active"}
                required
              />
            </div>
          </div>

          {/* License Key Display */}
          {licenseKey && (
            <div className="space-y-2">
              <Label className="text-sm font-medium">License Key</Label>
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-md break-all font-mono text-sm">
                {licenseKey}
              </div>
            </div>
          )}

          {/* Error Message */}
          {hasError && (
            <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-md text-sm">
              {registerMutation.error?.message ||
                activateMutation.error?.message ||
                "An error occurred"}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading || buttonState === "active" || !email}
            className="w-full"
            variant={
              buttonState === "active"
                ? "outline"
                : buttonState === "activating"
                  ? "default"
                  : "default"
            }
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {buttonState === "register" &&
              (registerMutation.isPending ? "Registering..." : "Register")}
            {buttonState === "activating" && "Activating..."}
            {buttonState === "active" && "✓ License Active"}
          </Button>

          {/* Status Message */}
          {buttonState === "active" && (
            <div className="p-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-md text-sm text-center">
              License successfully registered and activated!
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterLicensePage;
