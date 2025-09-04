import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

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
      const headerHeight = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('header')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl" 
            : "bg-black backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 group cursor-pointer transform hover:scale-105 transition-all duration-300" 
            onClick={() => scrollToSection('hero')}
          >
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full  group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:rotate-12 overflow-hidden">
              <img 
                src={logo} 
                alt="The Grind Club Logo" 
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black tracking-wider bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:from-gray-200 group-hover:via-white group-hover:to-gray-200 transition-all duration-300">
                The Grind Club
              </h1>
              <p className="text-xs text-gray-400 hidden md:block group-hover:text-gray-300 transition-colors duration-300">
                Train Hard. Stay Strong.
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: "Home", id: "hero" },
              { name: "Trainers", id: "trainers" },
              { name: "Services", id: "services" },
              { name: "Membership", id: "membership" },
              { name: "Contact", id: "contact" }
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm font-semibold tracking-wider text-gray-300 hover:text-white transition-all duration-300 group py-2"
              >
                {item.name.toUpperCase()}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 border border-white/30 rounded-full text-sm font-semibold text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transform transition-all duration-300 backdrop-blur-sm"
            >
              JOIN NOW
            </button>
            <button
              onClick={() => scrollToSection('membership')}
              className="px-6 py-3 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-200 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-white/20"
            >
              START TRIAL
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden relative w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/40 hover:scale-110 transform transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className={`absolute transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-0' : 'rotate-0 -translate-y-2'}`}>
                <div className="w-6 h-0.5 bg-white"></div>
              </div>
              <div className={`absolute transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}>
                <div className="w-6 h-0.5 bg-white"></div>
              </div>
              <div className={`absolute transition-all duration-300 ${menuOpen ? '-rotate-45 translate-y-0' : 'rotate-0 translate-y-2'}`}>
                <div className="w-6 h-0.5 bg-white"></div>
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="bg-black/95 backdrop-blur-xl border-t border-white/10">
            <nav className="flex flex-col items-center space-y-6 py-8 text-center">
              {[
                { name: "Home", id: "hero" },
                { name: "About", id: "about" },
                { name: "Services", id: "services" },
                { name: "Membership", id: "membership" },
                { name: "Trainers", id: "trainers" },
                { name: "Contact", id: "contact" }
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="text-lg font-semibold tracking-wider text-gray-300 hover:text-white transition-all duration-300 py-2 px-6 rounded-full hover:bg-white/10 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name.toUpperCase()}
                </button>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="flex flex-col space-y-4 pt-6">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border border-white/30 rounded-full text-sm font-semibold text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transform transition-all duration-300 backdrop-blur-sm"
                >
                  JOIN NOW
                </button>
                <button
                  onClick={() => scrollToSection('membership')}
                  className="px-8 py-3 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-200 hover:scale-105 transform transition-all duration-300"
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
