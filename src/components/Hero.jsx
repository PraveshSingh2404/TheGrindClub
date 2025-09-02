import React from "react";
import { Link } from "react-router-dom";

// Import your video file (place it in src/assets/ folder)
import heroVideo from "../assets/hero.mp4";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white px-6 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability
      <div className="absolute inset-0 bg-black bg-opacity-40 -z-5"></div> */}

      {/* Main Heading with Black Ops font and shadow */}
      <h1 className="hero-title text-5xl md:text-7xl font-extrabold tracking-wider uppercase leading-tight">
        Be Your Best Self..
      </h1>

      {/* Subtext with shadow */}
      <p className="hero-subtitle mt-6 max-w-2xl text-lg md:text-xl text-gray-200">
        Train hard. Stay strong. Join the movement at The Grind Club.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          to="/flow-now"
          className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Start Flowing
        </Link>
        <Link
          to="/studios"
          className="border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Explore Studios
        </Link>
      </div>
    </section>
  );
};

export default Hero;
