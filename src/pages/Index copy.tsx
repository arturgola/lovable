import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom max-w-7xl mx-auto px-4">
            {/* Main Hero Content */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-black mb-6">
                Inspired by Nature
              </h1>
              <div className="flex justify-between items-center max-w-4xl mx-auto">
                <p className="text-sm text-gray-600 max-w-xs text-left">
                  Discover eco-friendly furniture for modern living, crafted with nature in mind
                </p>
                <div className="text-right">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">ECO-FRIENDLY BRAND</p>
                </div>
              </div>
            </div>

            {/* Main Product Image */}
            <div className="relative mb-16">
              <div className="aspect-[16/10] bg-gray-100 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop" 
                  alt="Natural wood furniture collection" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Action Buttons */}
              <div className="absolute bottom-6 left-6">
                <Button className="bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-full">
                  SHOP NOW →
                </Button>
              </div>
              
              <div className="absolute bottom-6 right-6 flex gap-4">
                <Button variant="outline" className="bg-white/90 backdrop-blur-sm border-gray-200 text-black px-4 py-2 rounded-full text-xs">
                  TIMELESS DESIGN →
                </Button>
                <Button variant="outline" className="bg-white/90 backdrop-blur-sm border-gray-200 text-black px-4 py-2 rounded-full text-xs">
                  TOP FURNITURE →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-sm text-gray-500 mb-4">Furniture with Value</h2>
              <h3 className="text-4xl md:text-5xl font-light text-black">Designed with Purpose</h3>
            </div>

            {/* Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div className="text-center">
                <p className="text-xs text-gray-400 mb-4">01</p>
                <h4 className="text-lg font-medium mb-4">Crafted for Durability, Priced for Accessibility</h4>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-400 mb-4">02</p>
                <h4 className="text-lg font-medium mb-4">Sustainable Practices Through Repurposing</h4>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-400 mb-4">03</p>
                <h4 className="text-lg font-medium mb-4">Collaborate with eco focused communities</h4>
              </div>
            </div>

            {/* Product Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop" 
                  alt="Wood furniture piece 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop" 
                  alt="Wood furniture piece 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop" 
                  alt="Wood furniture piece 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="pt-8 md:pt-12">
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4 text-black">
                    {t('contactTitle')}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {t('contactDescription')}
                  </p>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
