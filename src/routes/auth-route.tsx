import { useAuth } from "@/context/auth-context";
import AuthLayout from "@/components/layouts/auth-layout";
import { Navigate, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { LoadingFallback } from "@/components/loading";

function AuthRoute() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <AuthLayout>
      <Suspense fallback={<LoadingFallback />}>
        <Outlet />
      </Suspense>
    </AuthLayout>
  );
}

export default AuthRoute;
