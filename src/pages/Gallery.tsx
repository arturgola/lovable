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
    sessionStorage.setItem("preserveScroll", "true");
    navigate("/");
  };

  const exteriorImages = [
    {
      id: 1,
      src: "/images/real-images/door1.png",
      alt: "",
      note: t("galleryNotes.door1"),
    },
    {
      id: 5,
      src: "/images/real-images/door3.png",
      alt: "",
      note: t("galleryNotes.door3"),
    },
    {
      id: 23,
      src: "/images/real-images/door12.png",
      alt: "",
      note: t("galleryNotes.door12"),
    },
    {
      id: 7,
      src: "/images/ai-images/door-A-4.png",
      alt: "",
      note: t("galleryNotes.doorA4"),
    },
    {
      id: 12,
      src: "/images/ai-images/door-A-6.png",
      alt: "",
      note: t("galleryNotes.doorA6"),
    },
    {
      id: 13,
      src: "/images/ai-images/door-A-7-2.png",
      alt: "",
      note: t("galleryNotes.doorA7_2"),
    },
    {
      id: 18,
      src: "/images/ai-images/door-A-9-2.png",
      alt: "",
      note: t("galleryNotes.doorA9_2"),
    },
    {
      id: 21,
      src: "/images/ai-images/door-A-11.png",
      alt: "",
      note: t("galleryNotes.doorA11"),
    },
  ];

  const interiorImages = [
    {
      id: 9,
      src: "/images/ai-images/door-A-5.png",
      alt: "",
      note: t("galleryNotes.doorA5"),
    },
    {
      id: 4,
      src: "/images/real-images/door2.png",
      alt: "",
      note: t("galleryNotes.door2"),
    },
    {
      id: 25,
      src: "/images/ai-images/door-A-13-2.png",
      alt: "",
      note: t("galleryNotes.doorA13_2"),
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
            <div className="text-center mb-8">
              <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end gap-3 md:gap-0 max-w-4xl mx-auto">
                <p className="text-sm text-gray-600 max-w-none md:max-w-xs text-center md:text-left">
                  {t("interiorTitle", { defaultValue: "Interior" })}
                </p>
              </div>
            </div>
            <ImageGallery images={interiorImages} />
            <div className="text-center mt-16 mb-8">
              <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end gap-3 md:gap-0 max-w-4xl mx-auto">
                <p className="text-sm text-gray-600 max-w-none md:max-w-xs text-center md:text-left">
                  {t("exteriorTitle", { defaultValue: "Exterior" })}
                </p>
              </div>
            </div>
            <ImageGallery images={exteriorImages} />
          </div>

          {/* Contact Button */}
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
