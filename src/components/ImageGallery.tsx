import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useTranslation } from "react-i18next";

interface Image {
  id: number;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  note?: string;
}

interface GalleryProps {
  images: Image[];
}

const ImageGallery = ({ images }: GalleryProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const closeLightbox = () => {
    setOpen(false);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const createLightbox = () => {
    const img = images[currentIndex];
    return (
      <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
        <button
          onClick={closeLightbox}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
        >
          ✕
        </button>
        <button
          onClick={showPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-gray-400 hover:text-white transition-colors"
        >
          ‹
        </button>
        <div className="flex flex-col items-center max-w-4xl w-full">
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <img
                src={img.src}
                alt={img.alt}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
            </div>
            {img.note && (
              <div className="text-center max-w-2xl">
                <p className="text-white text-base md:text-lg leading-relaxed">
                  {img.note}
                </p>
              </div>
            )}
          </div>
        </div>
        <button
          onClick={showNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-gray-400 hover:text-white transition-colors"
        >
          ›
        </button>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((img, i) => (
          <div
            key={img.id}
            className="overflow-hidden rounded-2xl bg-gray-100 cursor-pointer hover:opacity-90 transition-opacity group"
            onClick={() => openLightbox(i)}
          >
            <AspectRatio ratio={4 / 3} className="bg-gray-100">
              <img
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </AspectRatio>
          </div>
        ))}
      </div>
      {open && createLightbox()}
    </div>
  );
};

export default ImageGallery;
