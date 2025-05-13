
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Define the image interface
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category?: string;
}

const Gallery = () => {
  // Sample gallery images
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&q=80",
      alt: "Contemporary door design",
      category: "Contemporary"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1517490629755-95051d0a01af?auto=format&fit=crop&q=80",
      alt: "Traditional wooden door",
      category: "Traditional"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1505409628601-edc9af17fda6?auto=format&fit=crop&q=80",
      alt: "Custom entry door",
      category: "Entry"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80",
      alt: "Interior French door",
      category: "French"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1505409628601-edc9af17fda6?auto=format&fit=crop&q=80",
      alt: "Modern front door",
      category: "Entry"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&q=80",
      alt: "Sliding door design",
      category: "Contemporary"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1517490629755-95051d0a01af?auto=format&fit=crop&q=80",
      alt: "Rustic wooden door",
      category: "Traditional"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80",
      alt: "Glass panel door",
      category: "French"
    },
  ];

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openImage = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsDialogOpen(true);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Door Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            View our collection of custom-made doors for inspiration and quality craftsmanship.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden cursor-pointer"
              onClick={() => openImage(image)}
            >
              <div className="h-72 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              <div className="pt-3">
                <p className="text-sm font-light text-gray-800">{image.alt}</p>
                {image.category && <span className="text-xs text-gray-500">{image.category}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Size Image Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-4xl bg-white p-0 border-none">
          {selectedImage && (
            <div className="flex flex-col">
              <div className="relative">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="w-full object-contain max-h-[80vh]" 
                />
              </div>
              <div className="p-4">
                <p className="text-lg font-light text-gray-900">{selectedImage.alt}</p>
                {selectedImage.category && (
                  <p className="text-sm text-gray-500">Category: {selectedImage.category}</p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
