
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { Link } from "react-router-dom";

export const Hero = () => {
  const { hero } = siteConfig.content;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 dark:from-primary/10 dark:via-gray-900 dark:to-accent/10">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            {hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-lg">
              <Link to="/auth/register">
                {hero.ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-border hover:bg-accent/10 hover:text-accent">
              <Play className="mr-2 h-5 w-5" />
              {hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
