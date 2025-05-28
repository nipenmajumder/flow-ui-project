
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";
import { Link, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 dark:from-primary/5 dark:via-gray-900 dark:to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-foreground hover:text-primary transition-colors">
            {siteConfig.name}
          </Link>
          <p className="text-muted-foreground mt-2">Welcome back</p>
        </div>
        
        <Card className="p-6 shadow-xl border-border bg-card dark:bg-card">
          <Outlet />
        </Card>
        
        <div className="text-center mt-6">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};
