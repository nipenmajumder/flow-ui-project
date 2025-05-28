
import { siteConfig } from "@/lib/config";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              {siteConfig.description}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('navigation')}</h4>
            <ul className="space-y-2">
              {siteConfig.navigation.public.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {t(item.name.toLowerCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('account')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/auth/login" className="text-gray-400 hover:text-white transition-colors">
                  {t('login')}
                </Link>
              </li>
              <li>
                <Link to="/auth/register" className="text-gray-400 hover:text-white transition-colors">
                  {t('register')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 {siteConfig.name}. {t('allRightsReserved')}.
          </p>
        </div>
      </div>
    </footer>
  );
};
