import { useAuth } from "@/context/auth-context";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import AuthLayout from "@/components/layouts/auth-layout";
import AppLayout from "@/components/layouts/app-layout";
import { FeatureProvider } from "@/context/feature-context";

// Lazy load pages
const LoginPage = lazy(() => import("@/features/auth/pages/login-page"));
const UserPage = lazy(() => import("@/features/globals/pages/user-page"));

// Loading Fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">Loading...</div>
);

// Protected Route Component
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

// Auth Route Component
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

function App() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route element={<AuthRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<UserPage />} />
      </Route>

      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
