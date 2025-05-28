
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { Link } from "react-router-dom";

export const Hero = () => {
  const { hero } = siteConfig.content;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            {hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              <Link to="/register">
                {hero.ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              <Play className="mr-2 h-5 w-5" />
              {hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
