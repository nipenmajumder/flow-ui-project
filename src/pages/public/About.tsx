
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/blocks/Footer";

export const About = () => {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Our Platform
            </h1>
            <p className="text-xl text-gray-600">
              We're building the future of modern web applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To provide developers with the best tools and frameworks to build 
                  amazing applications quickly and efficiently. We believe in the power 
                  of modern technology to transform ideas into reality.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A world where creating beautiful, functional web applications is 
                  accessible to everyone. We're committed to making development 
                  faster, more enjoyable, and more productive.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded with the vision of simplifying web development, our platform 
              combines the latest technologies and best practices to deliver an 
              exceptional development experience.
            </p>
            <p className="text-gray-600">
              We're passionate about creating tools that not only work well but 
              also feel great to use. Every feature is carefully crafted with 
              developers in mind, ensuring that building applications is both 
              powerful and enjoyable.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
