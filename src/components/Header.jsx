import React, { useState, useEffect } from "react";
import { Menu, X, Dumbbell } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function for single page navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header
        className=" fixed top-0 w-full z-50 transition-all duration-500 bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
              <Dumbbell size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black tracking-wider bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                The Grind Club
              </h1>
              <p className="text-xs text-gray-400 hidden md:block">
                Train Hard. Stay Strong.
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Classes", id: "classes" },
              { name: "Contact", id: "contact" }
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm font-semibold tracking-wider text-gray-300 hover:text-white transition-all duration-300 group"
              >
                {item.name.toUpperCase()}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 border border-white/30 rounded-full text-sm font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              JOIN NOW
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-200 hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
              START TRIAL
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden relative w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="relative">
              {menuOpen ? (
                <X size={20} className="text-white animate-in spin-in-90 duration-200" />
              ) : (
                <Menu size={20} className="text-white animate-in fade-in duration-200" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="bg-black/95 backdrop-blur-xl border-t border-white/10">
            <nav className="flex flex-col items-center space-y-6 py-8 text-center">
              {[
                { name: "Home", id: "hero" },
                { name: "About", id: "about" },
                { name: "Services", id: "services" },
                { name: "Classes", id: "classes" },
                { name: "Contact", id: "contact" }
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="text-lg font-semibold tracking-wider text-gray-300 hover:text-white transition-all duration-300"
                >
                  {item.name.toUpperCase()}
                </button>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border border-white/30 rounded-full text-sm font-semibold text-white hover:bg-white/10 transition-all duration-300"
                >
                  JOIN NOW
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-3 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-200 transition-all duration-300"
                >
                  START TRIAL
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;
