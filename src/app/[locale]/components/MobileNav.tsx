"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Burger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-6 bg-secondary transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-secondary transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-secondary transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-primary/1 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className="fixed top-16 right-0 w-64 h-auto z-50 supports-backdrop-filter:bg-primary/95 overflow-y-auto border-l border-b border-secondary/30 md:hidden"
        >
          <div className="flex flex-col min-h-full p-6 space-y-6">
            {/* Navigation Links */}
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-secondary font-medium text-lg hover:opacity-80 transition-opacity"
              >
                {t("home")}
              </Link>
              <Link
                href="/services"
                onClick={closeMenu}
                className="text-secondary font-medium text-lg hover:opacity-80 transition-opacity"
              >
                {t("services")}
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="text-secondary font-medium text-lg hover:opacity-80 transition-opacity"
              >
                {t("about")}
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="text-secondary font-medium text-lg hover:opacity-80 transition-opacity"
              >
                {t("contact")}
              </Link>
            </nav>

            {/* Language Switcher */}
            <div className="pt-6 border-t border-secondary/10">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
