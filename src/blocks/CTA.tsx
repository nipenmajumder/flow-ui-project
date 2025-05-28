
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { Link } from "react-router-dom";

export const CTA = () => {
  const { cta } = siteConfig.content;

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {cta.title}
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          {cta.description}
        </p>
        <Button asChild size="lg" variant="secondary" className="px-8 py-6 text-lg">
          <Link to="/register">
            {cta.buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
