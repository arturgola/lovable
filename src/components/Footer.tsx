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

  // Language data with flag-icons class and code
  const languages = [
    { code: "et", flag: "ee" },
    { code: "en", flag: "gb" },
    { code: "fi", flag: "fi" },
  ];

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    i18n.changeLanguage(event.target.value);
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
        <div className="relative flex flex-col md:flex-row items-center w-full md:h-12">
          {/* Contact Info - visible on all devices */}
          <div className="flex flex-col items-center md:items-start md:mr-6">
            <span className="text-sm text-gray-600 max-w-none text-center md:text-left">
              askordoors@gmail.com
            </span>
            <span className="text-sm text-gray-600 max-w-none text-center md:text-left">
              +37256254169
            </span>
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

          {/* Language Dropdown */}
          <div className="hidden md:flex items-center ml-auto">
            <select
              value={i18n.language}
              onChange={handleLanguageChange}
              className="bg-transparent border-none text-xs cursor-pointer focus:outline-none"
              style={{ minWidth: "40px" }}
            >
              {languages.map((lang) => (
                <option
                  key={lang.code}
                  value={lang.code}
                  className={`fi fi-${lang.flag}`}
                >
                  {lang.code.toUpperCase()}
                </option>
              ))}
            </select>
            <span
              className={`fi fi-${
                languages.find((l) => l.code === i18n.language)?.flag || "xx"
              }`}
              style={{
                fontSize: "19.2px",
                marginLeft: "8px",
                boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
              }}
            ></span>
          </div>

          {/* Mobile Navigation - all elements in one centered row except contact info */}
          <div className="md:hidden flex flex-row items-center justify-center w-full gap-6 mt-2">
            <div className="flex items-center gap-2">
              <select
                value={i18n.language}
                onChange={handleLanguageChange}
                className="bg-transparent border-none text-xs cursor-pointer focus:outline-none"
                style={{ minWidth: "40px" }}
              >
                {languages.map((lang) => (
                  <option
                    key={lang.code}
                    value={lang.code}
                    className={`fi fi-${lang.flag}`}
                  >
                    {lang.code.toUpperCase()}
                  </option>
                ))}
              </select>
              <span
                className={`fi fi-${
                  languages.find((l) => l.code === i18n.language)?.flag || "xx"
                }`}
                style={{
                  fontSize: "19.2px",
                  marginLeft: "4px",
                  boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
                }}
              ></span>
            </div>
            <nav className="flex items-center gap-6">
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
