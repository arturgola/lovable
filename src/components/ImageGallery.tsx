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

interface GalleryItem {
  id: number;
  images: Image[];
}

interface GalleryProps {
  images: GalleryItem[];
}

const ImageGallery = ({ images }: GalleryProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(0);
  const [currentView, setCurrentView] = useState(0); // 0 = first image, 1 = second image

  const openLightbox = (galleryItemIndex: number) => {
    setSelectedGalleryItem(galleryItemIndex);
    setCurrentView(0); // Reset to first image view
    setOpen(true);
  };

  // Create a custom lightbox with only 2 images and note
  const createCustomLightbox = () => {
    const currentGalleryItem = images[selectedGalleryItem];
    const currentImage = currentGalleryItem.images[0];
    const nextImage = currentGalleryItem.images[1];

    // Determine which image to show based on currentView
    const displayImage = currentView === 0 ? currentImage : nextImage;
    const displayNote = currentView === 0 ? currentImage.note : nextImage.note;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
        >
          ✕
        </button>
        
        <div className="flex flex-col items-center max-w-4xl w-full">
          {/* Single Image */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <img
                src={displayImage.src}
                alt={displayImage.alt}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
            </div>
            {displayNote && (
              <div className="text-center max-w-2xl">
                <p className="text-white text-base md:text-lg leading-relaxed">
                  {displayNote}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation arrows - scroll between the 2 images */}
        <button
          onClick={() => setCurrentView(0)}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl transition-colors ${
            currentView === 0 ? 'text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          ‹
        </button>
        <button
          onClick={() => setCurrentView(1)}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl transition-colors ${
            currentView === 1 ? 'text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          ›
        </button>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((galleryItem, i) => (
          <div 
            key={galleryItem.id}
            className="overflow-hidden rounded-2xl bg-gray-100 cursor-pointer hover:opacity-90 transition-opacity group"
            onClick={() => openLightbox(i)}
          >
            <AspectRatio ratio={4/3} className="bg-gray-100">
              <img
                src={galleryItem.images[0].src}
                alt={galleryItem.images[0].alt}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </AspectRatio>
          </div>
        ))}
      </div>

      {open && createCustomLightbox()}
    </div>
  );
};

export default ImageGallery;
