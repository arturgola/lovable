import { useTranslation } from "react-i18next";
import ImageGallery from "@/components/ImageGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Gallery = () => {
  const { t } = useTranslation();

  const galleryImages = [
    {
      id: 1,
      src: "/images/2.png",
      alt: "Custom wooden door with glass panels",
    },
    {
      id: 2,
      src: "/images/2.png",
      alt: "Modern entrance door",
    },
    {
      id: 3,
      src: "/images/2.png",
      alt: "Rustic wooden door",
    },
    {
      id: 4,
      src: "/images/2.png",
      alt: "Black front door",
    },
    {
      id: 5,
      src: "/images/2.png",
      alt: "Decorative wooden door",
    },
    {
      id: 6,
      src: "/images/2.png",
      alt: "Colorful door",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              {t('galleryTitle')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('galleryDescription')}
            </p>
          </div>

          <div className="w-full">
            <ImageGallery images={galleryImages} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
