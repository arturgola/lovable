
import { useTranslation } from "react-i18next";
import ImageGallery from "@/components/ImageGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Gallery = () => {
  const { t } = useTranslation();

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1619732130055-5dc2576e7456",
      alt: "Custom wooden door with glass panels",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1533779164707-c72e6109449d",
      alt: "Modern entrance door",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1613346945084-35cccc812dd5",
      alt: "Rustic wooden door",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1618856377091-38c92e44ecdf",
      alt: "Black front door",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1527801779725-f761193fea0a",
      alt: "Decorative wooden door",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1516248424560-7c420abf9bcf",
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

          <ImageGallery images={galleryImages} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
