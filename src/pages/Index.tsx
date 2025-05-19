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
        <section className="py-16 md:py-24">
          <div className="container-custom max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm">(A)</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight">
                {t("aboutTitle")}
              </h1>
            </div>

            {/* Aligned Description Section */}
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="flex justify-center">
                <div className="flex gap-6 max-w-4xl">
                  <p className="text-sm w-12 text-right flex-shrink-0">(01)</p>
                  <p className="text-base text-muted-foreground">
                    {t('aboutDescription')}
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex gap-6 max-w-4xl">
                  <p className="text-sm w-12 text-right flex-shrink-0">(02)</p>
                  <p className="text-base text-muted-foreground">
                    {t('artistPlatform')}
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex gap-6 max-w-4xl">
                  <p className="text-sm w-12 text-right flex-shrink-0">(03)</p>
                  <p className="text-base text-muted-foreground">
                    {t('uniqueMaterials')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="pb-8 md:pb-12">
          <div className="container-custom max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="/images/1.png" 
                  alt="Design gallery interior" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="pt-8 md:pt-12">
                  <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                    {t('contactTitle')}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {t('contactDescription')}
                  </p>
                </div>

                <div className="bg-background p-6 md:p-8 rounded-md border border-border">
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