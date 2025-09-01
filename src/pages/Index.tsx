import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to contact section if preserveScroll flag is set
  React.useEffect(() => {
    if (sessionStorage.getItem("preserveScroll")) {
      sessionStorage.removeItem("preserveScroll");
      // Scroll to the contact section at the bottom of the page
      const contactSection = document.querySelector("section.bg-background");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // fallback: scroll to bottom
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  }, []);

  const handleGalleryClick = () => {
    // Immediately scroll to top before navigation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    // Navigate to gallery
    navigate("/gallery");
  };

  const handleContactClick = () => {
    // Scroll to the contact form section at the bottom of the page
    const contactSection = document.querySelector(
      "section:has(.bg-background)"
    );
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Main Product Image */}
        <section className="pt-12 md:pt-24 pb-6 md:pb-8 bg-white">
          <div className="container-custom max-w-7xl mx-auto px-4">
            {/* Text above image (from Index copy) */}
            <div className="text-center mb-8">
              <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end gap-3 md:gap-0 max-w-4xl mx-auto">
                <p className="text-sm text-gray-600 max-w-none md:max-w-xs text-center md:text-left">
                  {t("ecoFriendlyDescription")}
                </p>
                <div className="mt-1 md:mt-0 text-center md:text-right">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {t("ecoFriendlyBrand")}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mb-4">
              <div className="aspect-[16/10] bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src="/images/mainPicture.png"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-6 md:left-auto md:right-6 md:translate-x-0 flex gap-3 md:gap-4">
                <Button
                  variant="outline"
                  className="bg-white/90 backdrop-blur-sm border-gray-200 text-black px-4 py-2 rounded-full text-xs"
                  onClick={handleGalleryClick}
                >
                  {t("galleryButton")}
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/90 backdrop-blur-sm border-gray-200 text-black px-4 py-2 rounded-full text-xs"
                  onClick={handleContactClick}
                >
                  {t("contactButton")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="pt-6 md:pt-12 pb-6 md:pb-8">
          <div className="container-custom max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-sm">{t("sectionA")}</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight">
                {t("aboutTitle")}
              </h1>
            </div>

            {/* Aligned Description Section */}
            <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
              <div className="flex justify-center">
                <div className="flex gap-4 md:gap-6 max-w-4xl">
                  <p className="text-sm w-12 text-right flex-shrink-0">
                    {t("section01")}
                  </p>
                  <p className="text-base text-muted-foreground">
                    {t("aboutDescription")}
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex gap-4 md:gap-6 max-w-4xl">
                  <p className="text-sm w-12 text-right flex-shrink-0">
                    {t("section02")}
                  </p>
                  <p className="text-base text-muted-foreground">
                    <span
                      dangerouslySetInnerHTML={{ __html: t("artistPlatform") }}
                    />
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex gap-4 md:gap-6 max-w-4xl">
                  <p className="text-sm w-12 text-right flex-shrink-0">
                    {t("section03")}
                  </p>
                  <p className="text-base text-muted-foreground">
                    <span
                      dangerouslySetInnerHTML={{ __html: t("uniqueMaterials") }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="pt-6 md:pt-12 pb-10 md:pb-24 bg-white">
          <div className="container-custom max-w-6xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-sm text-gray-500">
                {t("furnitureWithValue")}
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight">
                {t("designedWithPurpose")}
              </h3>
            </div>

            {/* Product Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div>
                <div className="aspect-[16/10] md:aspect-[16/10] bg-gray-100 rounded-2xl md:rounded-2xl overflow-hidden max-w-[92%] md:max-w-[85%] mx-auto">
                  <img
                    src="/images/ai-images/door-A-11-1.png"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Description under image 1 */}
                <div className="text-center mt-3">
                  <p className="text-xs text-gray-400 mb-2">{t("section01")}</p>
                  <p className="text-base text-muted-foreground">
                    {t("craftedForDurability")}
                  </p>
                </div>
              </div>
              <div>
                <div className="aspect-[16/10] md:aspect-[16/10] bg-gray-100 rounded-2xl md:rounded-2xl overflow-hidden max-w-[92%] md:max-w-[85%] mx-auto">
                  <img
                    src="/images/mainPicture-2.png"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Description under image 2 */}
                <div className="text-center mt-3">
                  <p className="text-xs text-gray-400 mb-2">{t("section02")}</p>
                  <p className="text-base text-muted-foreground">
                    {t("sustainablePractices")}
                  </p>
                </div>
              </div>
              <div>
                <div className="aspect-[16/10] md:aspect-[16/10] bg-gray-100 rounded-2xl md:rounded-2xl overflow-hidden max-w-[92%] md:max-w-[85%] mx-auto">
                  <img
                    src="/images/ai-images/door-A-5.png"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Description under image 3 */}
                <div className="text-center mt-3">
                  <p className="text-xs text-gray-400 mb-2">{t("section03")}</p>
                  <p className="text-base text-muted-foreground">
                    {t("collaborateWithCommunities")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-10 md:py-14 bg-background">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="pt-6 md:pt-8">
                  <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                    {t("contactTitle")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {t("contactDescription")}
                  </p>
                </div>

                <div className="bg-background p-6 md:p-8 rounded-md border border-border">
                  <ContactForm />
                </div>
              </div>

              {/* Phone consultation note outside the form box */}
              <div className="mt-4 ml-auto max-w-md">
                <p className="text-sm text-muted-foreground text-right">
                  Feel free to reach out directly by phone for consultation.{" "}
                  <a
                    href="tel:+37256254169"
                    className="font-bold text-foreground hover:underline"
                  >
                    +37256254169
                  </a>
                </p>
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
