
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'et' ? 'en' : 'et';
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="border-b border-border py-4 bg-background">
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/" className="text-lg font-medium tracking-tight">
          Askordoors
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-sm hover:text-primary/80 transition-colors ${
              isActive('/') ? 'font-medium' : ''
            }`}
          >
            {t('mainPage')}
          </Link>
          <Link
            to="/gallery"
            className={`text-sm hover:text-primary/80 transition-colors ${
              isActive('/gallery') ? 'font-medium' : ''
            }`}
          >
            {t('gallery')}
          </Link>
          <Link
            to="/contact"
            className={`text-sm hover:text-primary/80 transition-colors ${
              isActive('/contact') ? 'font-medium' : ''
            }`}
          >
            {t('contact')}
          </Link>
        </nav>

        {/* Language Toggle and Cart */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={toggleLanguage}>
            {i18n.language === 'et' ? 'EN' : 'ET'}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="sm" className="mr-2" onClick={toggleLanguage}>
            {i18n.language === 'et' ? 'EN' : 'ET'}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-background z-50 md:hidden">
            <div className="flex flex-col h-full">
              <div className="container-custom flex justify-between items-center py-4">
                <div>
                  <Link to="/" className="text-lg font-medium tracking-tight" onClick={closeMenu}>
                  Askordoors
                  </Link>
                </div>
                <Button variant="ghost" size="icon" onClick={closeMenu}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="container-custom flex-1 flex flex-col justify-center items-center space-y-6">
                <Link
                  to="/"
                  className={`text-lg hover:text-primary/80 transition-colors ${
                    isActive('/') ? 'font-medium' : ''
                  }`}
                  onClick={closeMenu}
                >
                  {t('mainPage')}
                </Link>
                <Link
                  to="/gallery"
                  className={`text-lg hover:text-primary/80 transition-colors ${
                    isActive('/gallery') ? 'font-medium' : ''
                  }`}
                  onClick={closeMenu}
                >
                  {t('gallery')}
                </Link>
                <Link
                  to="/contact"
                  className={`text-lg hover:text-primary/80 transition-colors ${
                    isActive('/contact') ? 'font-medium' : ''
                  }`}
                  onClick={closeMenu}
                >
                  {t('contact')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
