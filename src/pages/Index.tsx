
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section - Minimalist Layout */}
        <section className="py-16 md:py-24">
          <div className="container-custom max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Column - Empty Space */}
              <div className="lg:col-span-3">
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">info@doorgallery.com</p>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">(01)</p>
                </div>
              </div>

              {/* Middle Column - Main Content */}
              <div className="lg:col-span-6">
                <div className="space-y-6 mb-12">
                  <p className="text-sm text-center">(A)</p>
                  <h1 className="text-3xl md:text-4xl font-normal tracking-tight text-center">
                    {t('aboutTitle')}
                  </h1>
                  <p className="text-base text-muted-foreground">
                    {t('aboutDescription')}
                  </p>
                </div>

                <div className="space-y-6 mb-12">
                  <p className="text-sm">(02)</p>
                  <p className="text-base text-muted-foreground">
                    We want to provide artists a platform to show off to the world. Our collection includes contemporary work in furniture, ceramics, sculpture, and design. The designers range from well-known masters to emerging talents, each with their distinctive approach or style that is uniqueically unique in some manner.
                  </p>
                </div>

                <div className="space-y-6 mb-12">
                  <p className="text-sm">(03)</p>
                  <p className="text-base text-muted-foreground">
                    With the use of unique and special materials that can turn diverse interiors and styles, our designs aim to reflect the diversity of artistic origins and skills in a constantly changing and evolving space.
                  </p>
                </div>
              </div>

              {/* Right Column - Empty Space */}
              <div className="lg:col-span-3"></div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="pb-16 md:pb-24">
          <div className="container-custom max-w-6xl">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1616177635753-920dee141885?q=80&w=1000" 
                alt="Custom door craftsmanship" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container-custom max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Column */}
              <div className="lg:col-span-6">
                <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-6">
                  {t('contactTitle')}
                </h2>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-6">
                <ContactForm />
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
