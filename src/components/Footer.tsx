import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const Footer = () => {
  // Scroll to top when navigating to Gallery
  const handleGalleryClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    const languages = ["et", "en", "fi"];
    const currentIndex = languages.indexOf(i18n.language);
    const nextIndex = (currentIndex + 1) % languages.length;
    i18n.changeLanguage(languages[nextIndex]);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleHomeClick = () => {
    // Scroll to top of the page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-border py-4 bg-background">
      <div className="container-custom">
        <div className="relative flex items-center w-full h-12">
          {/* Contact Info */}
          <div className="flex-shrink-0 flex flex-col">
            <span className="text-xs mt-1">askordoors@gmail.com</span>
            <span className="text-xs">+37256254169</span>
          </div>

          {/* Centered Nav */}
          <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-6">
            <Link
              to="/"
              onClick={handleHomeClick}
              className={`text-xs hover:text-primary/80 transition-colors ${
                isActive("/") ? "font-medium" : ""
              }`}
            >
              {t("mainPage")}
            </Link>
            <Link
              to="/gallery"
              className={`text-xs hover:text-primary/80 transition-colors ${
                isActive("/gallery") ? "font-medium" : ""
              }`}
              onClick={handleGalleryClick}
            >
              {t("gallery")}
            </Link>
          </nav>

          {/* Language Toggle */}
          <div className="hidden md:flex items-center ml-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="h-8 px-2 text-xs"
            >
              {i18n.language.toUpperCase()}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center ml-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="h-8 px-2 text-xs"
            >
              {i18n.language.toUpperCase()}
            </Button>
            <nav className="flex items-center space-x-4">
              <Link
                to="/"
                onClick={handleHomeClick}
                className={`text-xs hover:text-primary/80 transition-colors ${
                  isActive("/") ? "font-medium" : ""
                }`}
              >
                {t("mainPage")}
              </Link>
              <Link
                to="/gallery"
                className={`text-xs hover:text-primary/80 transition-colors ${
                  isActive("/gallery") ? "font-medium" : ""
                }`}
                onClick={handleGalleryClick}
              >
                {t("gallery")}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
