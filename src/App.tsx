import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import AuthRoute from "./routes/auth-route";
import ProtectedRoute from "./routes/protected-route";

// Lazy load pages
const LoginPage = lazy(() => import("@/features/auth/pages/login-page"));
const UserPage = lazy(() => import("@/features/globals/pages/user-page"));
const LicensesPage = lazy(
  () => import("@/features/licenses/pages/register-license-page"),
);

function App() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route element={<AuthRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/licenses" element={<LicensesPage />} />
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
