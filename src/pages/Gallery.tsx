import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ImageGallery from "@/components/ImageGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Gallery = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Set a flag to preserve scroll position
    sessionStorage.setItem("preserveScroll", "true");
    // Navigate to index page
    navigate("/");
  };

  // Flatten all images into a single array
  const galleryImages = [
    {
      id: 1,
      src: "/images/real-images/door1.png",
      alt: "",
      note: "keep, Ulkoovet",
    },
    {
      id: 4,
      src: "/images/real-images/door2.png",
      alt: "",
      note: "keep, Sisäovet",
    },
    {
      id: 5,
      src: "/images/real-images/door3.png",
      alt: "",
      note: "keep, Ulkoovet",
    },
    {
      id: 7,
      src: "/images/ai-images/door-A-4.png",
      alt: "",
      note: "keep, Ulkoovet",
    },
    {
      id: 9,
      src: "/images/ai-images/door-A-5.png",
      alt: "",
      note: "keep, Sisäovet",
    },
    {
      id: 12,
      src: "/images/ai-images/door-A-6.png",
      alt: "",
      note: "keep, Ulkoovet",
    },
    {
      id: 13,
      src: "/images/ai-images/door-A-7.png",
      alt: "",
      note: "keep, but brighter, Ulkoovet",
    },
    {
      id: 18,
      src: "/images/ai-images/door-A-9.png",
      alt: "",
      note: "ai, jos saisi oven kiinnitykset 3 saranalla, Ulkoovet",
    },
    {
      id: 21,
      src: "/images/ai-images/door-A-11.png",
      alt: "",
      note: "keep, Ulkoovet",
    },
    {
      id: 23,
      src: "/images/real-images/door12.png",
      alt: "",
      note: "keep, Ulkoovet",
    },
    {
      id: 25,
      src: "/images/ai-images/door-A-13.png",
      alt: "",
      note: "keep, Sisäovet",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 md:py-16 lg:py-24">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <div className="flex items-baseline justify-center gap-2 mb-3 md:mb-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight">
                {t("galleryTitle")}
              </h1>
              <span className="inline-flex items-baseline gap-1 px-1 py-0 bg-muted text-muted-foreground text-[9px] font-medium rounded-full leading-none">
                <span className="w-0.5 h-0.5 bg-foreground rounded-full"></span>
                AI Enhanced
              </span>
            </div>
          </div>
          <div className="w-full">
            <ImageGallery images={galleryImages} />
          </div>

          {/* Contact Button - After Gallery in Right Corner */}
          <div className="flex justify-end mt-8">
            <Button
              variant="outline"
              className="bg-white/90 backdrop-blur-sm border-gray-200 text-black px-4 py-2 rounded-full text-xs hover:bg-white transition-colors"
              onClick={handleContactClick}
            >
              {t("contactButton")}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
