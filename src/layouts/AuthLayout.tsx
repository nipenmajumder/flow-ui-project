
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const AuthLayout = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 dark:from-primary/5 dark:via-gray-900 dark:to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="absolute top-4 right-4 flex items-center space-x-4">
          <DarkModeToggle />
          <LanguageSwitcher />
        </div>
        
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-foreground hover:text-primary transition-colors">
            {siteConfig.name}
          </Link>
          <p className="text-muted-foreground mt-2">{t('welcomeBack')}</p>
        </div>
        
        <Card className="p-6 shadow-xl border-border bg-card dark:bg-card">
          <Outlet />
        </Card>
        
        <div className="text-center mt-6">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            {t('backToHome')}
          </Link>
        </div>
      </div>
    </div>
  );
};
