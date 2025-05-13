
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="font-light text-xl tracking-wider text-gray-900">Artisan Doors</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#about" className="text-gray-700 hover:text-gray-900 py-2 text-sm font-light tracking-wider uppercase">About</a>
            <a href="#products" className="text-gray-700 hover:text-gray-900 py-2 text-sm font-light tracking-wider uppercase">Products</a>
            <a href="#process" className="text-gray-700 hover:text-gray-900 py-2 text-sm font-light tracking-wider uppercase">Process</a>
            <a href="#gallery" className="text-gray-700 hover:text-gray-900 py-2 text-sm font-light tracking-wider uppercase">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 py-2 text-sm font-light tracking-wider uppercase">Contact</a>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-6 px-6 border-t border-gray-100">
          <div className="flex flex-col space-y-6 pt-4">
            <a href="#about" className="text-gray-700 hover:text-gray-900 py-2 text-sm font-light tracking-wider uppercase">About</a>
            <a href="#products" className="text-gray-700 hover:text-gray-900 py-2 text-sm font-light tracking-wider uppercase">Products</a>
            <a href="#process" className="text-gray-700 hover:text-gray-900 py-2 text-sm font-light tracking-wider uppercase">Process</a>
            <a href="#gallery" className="text-gray-700 hover:text-gray-900 py-2 text-sm font-light tracking-wider uppercase">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 py-2 text-sm font-light tracking-wider uppercase">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
