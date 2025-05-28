
import { Routes, Route, Navigate } from "react-router-dom";
import { PublicLayout } from "@/layouts/PublicLayout";
import { AuthLayout } from "@/layouts/AuthLayout";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Landing } from "@/pages/public/Landing";
import { About } from "@/pages/public/About";
import { Contact } from "@/pages/public/Contact";
import { Login } from "@/pages/auth/Login";
import { Register } from "@/pages/auth/Register";
import { Overview } from "@/pages/dashboard/Overview";
import { Profile } from "@/pages/dashboard/Profile";
import { Settings } from "@/pages/dashboard/Settings";
import { NotFound } from "@/pages/NotFound";
import { useAuth, withAuth } from "@/lib/auth";

// Protected Dashboard Components
const ProtectedOverview = withAuth(Overview);
const ProtectedProfile = withAuth(Profile);
const ProtectedSettings = withAuth(Settings);

// Protected Dashboard Layout
const ProtectedDashboardLayout = withAuth(DashboardLayout);

export const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
        } />
        <Route path="register" element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Register />
        } />
      </Route>
      
      {/* Legacy auth routes for backward compatibility */}
      <Route path="/login" element={
        isAuthenticated ? <Navigate to="/dashboard" replace /> : 
        <Navigate to="/auth/login" replace />
      } />
      <Route path="/register" element={
        isAuthenticated ? <Navigate to="/dashboard" replace /> : 
        <Navigate to="/auth/register" replace />
      } />

      {/* Protected Dashboard Routes */}
      <Route path="/dashboard" element={<ProtectedDashboardLayout />}>
        <Route index element={<ProtectedOverview />} />
        <Route path="profile" element={<ProtectedProfile />} />
        <Route path="settings" element={<ProtectedSettings />} />
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
