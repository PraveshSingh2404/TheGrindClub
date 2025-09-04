import React from "react";

const VideoSection = () => {
  return (
    <section 
      id="about"
      className="relative h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
      <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse delay-700"></div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 right-20 w-12 h-12 border-2 border-white/20 rotate-45 animate-pulse delay-300"></div>
      <div className="absolute bottom-32 left-20 w-8 h-8 border-2 border-white/15 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-1/3 left-1/3 w-6 h-16 bg-white/10 rotate-12 animate-pulse delay-800"></div>

      {/* Content Container */}
      <div className="flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8 relative z-10">
        
        
        
        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-wider leading-none mb-8 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
            Move With Us
          </h1>
          
          {/* Animated Tagline */}
          <div className="relative mb-8">
            <p className="text-2xl sm:text-3xl md:text-4xl text-gray-200 mb-4 font-light leading-relaxed animate-pulse">
              Experience TGC anywhere
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto animate-pulse"></div>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Train hard. Stay strong. Join the movement at The Grind Club — where every workout transforms your potential into power.
          </p>
          
          {/* Enhanced Stats with Hover Effects */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-6 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2">
              <div className="text-4xl font-black text-white group-hover:text-yellow-400 transition-colors duration-300">1000+</div>
              <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 font-semibold">Active Members</div>
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-6 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2">
              <div className="text-4xl font-black text-white group-hover:text-blue-400 transition-colors duration-300">50+</div>
              <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 font-semibold">Expert Trainers</div>
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-6 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2">
              <div className="text-4xl font-black text-white group-hover:text-green-400 transition-colors duration-300">24/7</div>
              <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 font-semibold">Gym Access</div>
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
        
      </div>

      {/* Enhanced Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      {/* Animated Border Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
    </section>
  );
};

export default VideoSection;
