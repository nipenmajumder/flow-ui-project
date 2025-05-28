
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary dark:from-primary/80 dark:to-secondary/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t('ctaTitle')}
        </h2>
        <p className="text-xl text-white/90 mb-8">
          {t('ctaDescription')}
        </p>
        <Button asChild size="lg" variant="secondary" className="px-8 py-6 text-lg bg-white text-primary hover:bg-white/90 shadow-lg">
          <Link to="/auth/register">
            {t('ctaButton')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
