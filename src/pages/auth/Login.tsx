
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    setIsLoading(true);
    
    try {
      await login();
      toast({
        title: "Redirecting to login",
        description: "You will be redirected to Keycloak login page.",
      });
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Unable to redirect to login page. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Sign in to your account
        </h1>
        <p className="text-gray-600">
          Or{' '}
          <Link to="/auth/register" className="text-blue-600 hover:text-blue-700">
            create a new account
          </Link>
        </p>
      </div>
      
      <div className="space-y-4">
        <Button onClick={handleLogin} className="w-full" disabled={isLoading}>
          {isLoading ? 'Redirecting...' : 'Sign in with Keycloak'}
        </Button>
      </div>
      
      <div className="mt-4 text-center">
        <Link to="#" className="text-sm text-blue-600 hover:text-blue-700">
          Forgot your password?
        </Link>
      </div>
    </div>
  );
};
