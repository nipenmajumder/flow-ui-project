
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { Link, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const PublicLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-background shadow-sm border-b sticky top-0 z-50 dark:bg-gray-900 dark:border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-foreground">
              {siteConfig.name}
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {siteConfig.navigation.public.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(item.name.toLowerCase())}
                </Link>
              ))}
              <div className="flex items-center space-x-4">
                <DarkModeToggle />
                <LanguageSwitcher />
                <Button variant="ghost" asChild>
                  <Link to="/auth/login">{t('login')}</Link>
                </Button>
                <Button asChild>
                  <Link to="/auth/register">{t('getStarted')}</Link>
                </Button>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                {siteConfig.navigation.public.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.name.toLowerCase())}
                  </Link>
                ))}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4">
                    <DarkModeToggle />
                    <LanguageSwitcher />
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <Button variant="ghost" asChild>
                    <Link to="/auth/login" onClick={() => setIsMenuOpen(false)}>
                      {t('login')}
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link to="/auth/register" onClick={() => setIsMenuOpen(false)}>
                      {t('getStarted')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
      
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
