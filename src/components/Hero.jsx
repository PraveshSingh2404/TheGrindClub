import React, { useState, useEffect } from "react";
import { ArrowRight, Users } from "lucide-react";

// Import your video file (place it in src/assets/ folder)
import heroVideo from "../assets/hero.mp4";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll function for button navigation
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
  };

  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center text-white px-6 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10"></div>

      {/* Content with fade effects */}
      <div className={`relative z-20 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Main Heading with Black Ops font and shadow */}
        <h1 className={`hero-title text-5xl md:text-7xl font-extrabold tracking-wider uppercase leading-tight mb-6 transition-all duration-1200 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          Be Your Best Self..
        </h1>

        {/* Subtext with shadow */}
        <p className={`hero-subtitle mt-6 max-w-2xl text-lg md:text-xl text-gray-200 mb-10 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Train hard. Stay strong. Join the movement at The Grind Club.
        </p>

        {/* CTA Buttons with enhanced fade effects */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Primary CTA Button - Membership Plans */}
          <button
            onClick={() => scrollToSection('membership')}
            className="group relative bg-white text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25 flex items-center justify-center overflow-hidden"
          >
            {/* Button background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Button content */}
            <span className="relative z-10 flex items-center">
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            
            {/* Ripple effect on hover */}
            <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
          </button>
          
          {/* Secondary CTA Button - Trainers */}
          <button
            onClick={() => scrollToSection('trainers')}
            className="group relative border-2 border-white/60 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center overflow-hidden"
          >
            {/* Button background animation */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Button content */}
            <span className="relative z-10 flex items-center group-hover:text-black transition-colors duration-300">
              <Users className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Meet Our Trainers
            </span>
            
            {/* Border glow effect */}
            <div className="absolute inset-0 border-2 border-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </button>
        </div>
        
        {/* Additional fade-in text */}
        <p className={`text-sm text-gray-400 mt-8 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Where champions are forged and limits are shattered
        </p>
      </div>

      {/* Enhanced CSS for font styling and effects */}
      <style jsx>{`
        .hero-title {
          font-family: 'Black Ops One', cursive !important;
          text-shadow: 
            3px 3px 0px #000000,
            6px 6px 0px rgba(0, 0, 0, 0.7),
            9px 9px 0px rgba(0, 0, 0, 0.4),
            0 0 20px rgba(255, 255, 255, 0.3);
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
        }

        .hero-subtitle {
          text-shadow: 
            2px 2px 4px rgba(0, 0, 0, 0.8),
            0 0 10px rgba(0, 0, 0, 0.5);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
