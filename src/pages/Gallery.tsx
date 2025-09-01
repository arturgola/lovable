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

  const galleryImages = [
    {
      id: 1,
      images: [
        { id: 1, src: "/images/real-images/door1.png", alt: "", note: "" },
        { id: 2, src: "/images/ai-images/door-A-1.png", alt: "", note: "" },
      ],
    },
    {
      id: 2,
      images: [
        { id: 3, src: "/images/ai-images/door-A-2.png", alt: "", note: "" },
        { id: 4, src: "/images/real-images/door2.png", alt: "", note: "" },
      ],
    },
    {
      id: 3,
      images: [
        { id: 5, src: "/images/real-images/door3.png", alt: "", note: "" },
        { id: 6, src: "/images/ai-images/door-A-3.png", alt: "", note: "" },
      ],
    },
    {
      id: 4,
      images: [
        { id: 7, src: "/images/ai-images/door-A-4.png", alt: "", note: "" },
        { id: 8, src: "/images/real-images/door4.jpg", alt: "", note: "" },
      ],
    },
    {
      id: 5,
      images: [
        { id: 9, src: "/images/ai-images/door-A-5.png", alt: "", note: "" },
        { id: 10, src: "/images/real-images/door5.jpg", alt: "", note: "" },
      ],
    },
    {
      id: 6,
      images: [
        { id: 11, src: "/images/real-images/door6.jpg", alt: "", note: "" },
        { id: 12, src: "/images/ai-images/door-A-6.png", alt: "", note: "" },
      ],
    },
    {
      id: 7,
      images: [
        { id: 13, src: "/images/ai-images/door-A-7.png", alt: "", note: "" },
        { id: 14, src: "/images/real-images/door7.jpg", alt: "", note: "" },
      ],
    },
    {
      id: 8,
      images: [
        { id: 15, src: "/images/real-images/door8.jpg", alt: "", note: "" },
        { id: 16, src: "/images/ai-images/door-A-8.png", alt: "", note: "" },
      ],
    },
    {
      id: 9,
      images: [
        { id: 17, src: "/images/real-images/door9.png", alt: "", note: "" },
        { id: 18, src: "/images/ai-images/door-A-9.png", alt: "", note: "" },
      ],
    },
    {
      id: 10,
      images: [
        { id: 19, src: "/images/ai-images/door-A-10.png", alt: "", note: "" },
        { id: 20, src: "/images/real-images/door10.png", alt: "", note: "" },
      ],
    },
    {
      id: 11,
      images: [
        { id: 21, src: "/images/ai-images/door-A-11.png", alt: "", note: "" },
        { id: 22, src: "/images/real-images/door11.png", alt: "", note: "" },
      ],
    },
    {
      id: 12,
      images: [
        { id: 23, src: "/images/real-images/door12.png", alt: "", note: "" },
        { id: 24, src: "/images/ai-images/door-A-12.png", alt: "", note: "" },
      ],
    },
    {
      id: 13,
      images: [
        { id: 25, src: "/images/ai-images/door-A-13.png", alt: "", note: "" },
        { id: 26, src: "/images/real-images/door13.png", alt: "", note: "" },
      ],
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
            {/*             <p className="text-base md:text-lg text-muted-foreground">
              Discover our collection of custom-crafted doors, each designed to enhance your living space with exceptional quality and timeless beauty. 
              From contemporary designs to classic elegance, find the perfect door that reflects your personal style and complements your interior aesthetic.
            </p> */}
          </div>

          {/* <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="text-center">
              <h2 className="text-lg md:text-xl font-normal tracking-tight text-foreground mb-4">
                AI-Enhanced Visual Experience
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                Our gallery showcases AI-enhanced images that demonstrate how our custom doors can transform various interior styles. 
                Each image has been processed using advanced AI technology to improve clarity, lighting, and visual appeal, 
                helping you envision the perfect door for your space.
                <span className="inline-flex items-baseline gap-1 ml-2 px-1 py-0 bg-muted text-muted-foreground text-[9px] font-medium rounded-full leading-none">
                  <span className="w-0.5 h-0.5 bg-foreground rounded-full"></span>
                  AI Enhanced
                </span>
              </p>
            </div>
          </div> */}

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
