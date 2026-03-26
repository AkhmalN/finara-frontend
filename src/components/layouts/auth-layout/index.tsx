import { type ReactNode } from "react";
import FinaraLogoBrand from "@/assets/Finara-brand.png";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 p-4">
      <div className="mb-8">
        <img
          src={FinaraLogoBrand}
          alt="Finara Logo"
          className="h-16 object-contain"
        />
      </div>
      {children}
    </div>
  );
}
