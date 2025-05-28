
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";
import { Link, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-gray-900">
            {siteConfig.name}
          </Link>
          <p className="text-gray-600 mt-2">Welcome back</p>
        </div>
        
        <Card className="p-6 shadow-lg">
          <Outlet />
        </Card>
        
        <div className="text-center mt-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};
