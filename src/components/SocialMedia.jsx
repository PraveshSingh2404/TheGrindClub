import React from "react";

const FollowTheFlow = () => {
  const steps = [
    {
      number: "01",
      title: "Breathe",
      desc: "Begin each session by tuning inwards, connecting with your breath, and setting your intention.",
      icon: "🧘‍♀️",
    },
    {
      number: "02",
      title: "Flow",
      desc: "Move through dynamic vinyasa sequences synced to the beat — building heat and energy.",
      icon: "🌊",
    },
    {
      number: "03",
      title: "Sweat",
      desc: "End with power — push past limits, sweat it out, and leave feeling renewed and grounded.",
      icon: "💪",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Section Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 text-sm font-semibold mb-8">
          <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
          Our Method
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider leading-none mb-6 text-white">
          Follow The Flow
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 font-light leading-relaxed">
          Our signature method blends breathwork, dynamic movement, and heat
        </p>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
          Delivering an immersive yoga experience that transforms both body and mind.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="mt-16 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
          >
            
            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Step Number */}
            <div className="relative z-10 flex flex-col items-center text-center">
              
              {/* Large Number Background */}
              <div className="relative mb-6">
                <span className="text-8xl md:text-9xl font-black text-white/10 select-none">
                  {step.number}
                </span>
                
                {/* Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl border border-white/20">
                    {step.icon}
                  </div>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wider mb-4 text-white">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-base max-w-xs mx-auto">
                {step.desc}
              </p>
              
              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-white/20 to-transparent transform -translate-y-1/2"></div>
              )}
              
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Experience the Flow?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our community and discover how our signature method can transform your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300">
              Book Your First Class
            </button>
            <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default FollowTheFlow;
