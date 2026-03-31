import { useAuth } from "@/context/auth-context";
import { FeatureProvider } from "@/context/feature-context";
import AppLayout from "@/components/layouts/app-layout";
import { Navigate, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { LoadingFallback } from "@/components/loading";

function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <FeatureProvider>
      <AppLayout>
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </AppLayout>
    </FeatureProvider>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default ProtectedRoute;
