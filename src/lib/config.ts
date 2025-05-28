
export const siteConfig = {
  name: "ModernApp",
  description: "A modern React application built with Vite, TypeScript, and shadcn/ui",
  url: "https://modernapp.dev",
  
  // Navigation configuration
  navigation: {
    public: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    dashboard: [
      { name: "Overview", href: "/dashboard" },
      { name: "Profile", href: "/dashboard/profile" },
      { name: "Settings", href: "/dashboard/settings" },
    ]
  },

  // Content configuration
  content: {
    hero: {
      title: "Build Amazing Apps with Modern Stack",
      subtitle: "Experience the power of React, TypeScript, and shadcn/ui in a beautifully crafted application",
      ctaText: "Get Started",
      ctaSecondary: "Learn More"
    },
    features: [
      {
        title: "Modern Tech Stack",
        description: "Built with React, TypeScript, Vite, and Tailwind CSS for optimal performance",
        icon: "Code"
      },
      {
        title: "Beautiful UI",
        description: "Crafted with shadcn/ui components for a consistent and elegant design",
        icon: "Palette"
      },
      {
        title: "Type Safe",
        description: "Full TypeScript support with Zod validation for robust applications",
        icon: "Shield"
      }
    ],
    cta: {
      title: "Ready to get started?",
      description: "Join thousands of developers building amazing applications",
      buttonText: "Start Building"
    }
  }
};
