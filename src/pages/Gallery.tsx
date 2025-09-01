import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import ImageGallery from "@/components/ImageGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Gallery = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  useScrollToTop(false);

  const handleContactClick = () => {
    // Set a flag to preserve scroll position
    sessionStorage.setItem('preserveScroll', 'true');
    // Navigate to index page
    navigate('/');
  };

  const galleryImages = [
    {
      id: 1,
      images: [
        {
          id: 1,
          src: "/images/1.png",
          alt: "Custom wooden door with glass panels",
          note: "Elegant custom wooden door featuring beautiful glass panels that allow natural light to flow through while maintaining privacy and style.",
        },
        {
          id: 2,
          src: "/images/1-real.png",
          alt: "Modern entrance door",
          note: "Contemporary entrance door design with clean lines and modern aesthetics, perfect for contemporary homes and commercial spaces.",
        }
      ]
    },
    {
      id: 2,
      images: [
        {
          id: 3,
          src: "/images/2.png",
          alt: "Rustic wooden door",
          note: "Handcrafted rustic wooden door showcasing natural wood grain and traditional craftsmanship, adding warmth and character to any space.",
        },
        {
          id: 4,
          src: "/images/2.png",
          alt: "Rustic door detail",
          note: "Close-up view of the rustic door's natural wood texture and handcrafted details that showcase traditional woodworking techniques.",
        }
      ]
    },
    {
      id: 3,
      images: [
        {
          id: 5,
          src: "/images/3.png",
          alt: "Black front door",
          note: "Striking black front door that makes a bold statement, combining modern sophistication with timeless elegance for your home's entrance.",
        },
        {
          id: 6,
          src: "/images/3.png",
          alt: "Black door installation",
          note: "Professional installation of the black front door, showing how it enhances the overall aesthetic of the home's exterior.",
        }
      ]
    },
    {
      id: 4,
      images: [
        {
          id: 7,
          src: "/images/4.png",
          alt: "Decorative wooden door",
          note: "Artistically designed decorative wooden door featuring intricate carvings and details that serve as a focal point and conversation starter.",
        },
        {
          id: 8,
          src: "/images/4.png",
          alt: "Decorative door close-up",
          note: "Detailed view of the decorative door's intricate carvings and artistic elements that demonstrate exceptional craftsmanship.",
        }
      ]
    },
    {
      id: 5,
      images: [
        {
          id: 9,
          src: "/images/5.png",
          alt: "Colorful door",
          note: "Vibrant and colorful door design that adds personality and charm to any space, perfect for those who love bold and creative expressions.",
        },
        {
          id: 10,
          src: "/images/5.png",
          alt: "Colorful door in context",
          note: "The colorful door shown in its natural environment, demonstrating how it brightens and enhances the surrounding space.",
        }
      ]
    },
    {
      id: 6,
      images: [
        {
          id: 11,
          src: "/images/1-real.png",
          alt: "Classic wooden door",
          note: "Timeless classic wooden door design that combines traditional aesthetics with modern functionality, suitable for any architectural style.",
        },
        {
          id: 12,
          src: "/images/1.png",
          alt: "Classic door detail",
          note: "Detailed view highlighting the classic door's refined proportions and elegant design elements that never go out of style.",
        }
      ]
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
                {t('galleryTitle')}
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
              {t('contactButton')}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
