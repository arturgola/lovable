import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useTranslation } from "react-i18next";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Image {
  id: number;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface GalleryProps {
  images: Image[];
}

const ImageGallery = ({ images }: GalleryProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = (imageIndex: number) => {
    setIndex(imageIndex);
    setOpen(true);
  };

  const lightboxImages = images.map(img => ({
    src: img.src,
    alt: img.alt,
    width: img.width || 1600,
    height: img.height || 1200,
  }));

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((image, i) => (
          <div 
            key={image.id}
            className="overflow-hidden border border-border rounded-md cursor-pointer hover:opacity-90 transition-opacity group"
            onClick={() => openLightbox(i)}
          >
            <AspectRatio ratio={4/3} className="bg-muted">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </AspectRatio>
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={lightboxImages}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.9)" } }}
      />
    </div>
  );
};

export default ImageGallery;
