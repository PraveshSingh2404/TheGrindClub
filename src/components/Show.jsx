import React from "react";

const VideoSection = () => {
  return (
    <section 
      className="relative h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}
    >
      {/* Content Container */}
      <div className="flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
        
        
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider leading-none mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
            Move With Us
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Experience TGC anywhere — Train hard. Stay strong. Join the movement at The Grind Club.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm text-gray-300">Active Members</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-gray-300">Classes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-gray-300">Access</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Start Free Trial
            </button>
            
            <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
              Book Demo
            </button>
          </div>
        </div>
        
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-white/20 rounded-full animate-pulse delay-1000"></div>
      
    </section>
  );
};

export default VideoSection;
