import React from "react";
import { Link } from "react-router-dom";

const Offerings = () => {
  const items = [
    {
      title: "Memberships",
      desc: "Join The Grind Club family with flexible membership options designed for your lifestyle.",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/membership",
      badge: "Full Access",
    },
    {
      title: "Personal Training",
      desc: "Get personalized coaching from certified trainers to reach your goals faster.",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/personal-training",
      badge: "1-on-1",
    },
    {
      title: "Group Classes",
      desc: "Experience high-energy group workouts that challenge and motivate you every session.",
      img: "https://images.unsplash.com/photo-1583500178690-f7e1a1b3d531?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/classes",
      badge: "All Levels",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 relative overflow-hidden">
      
      {/* Minimal Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Section Badge */}
       

        {/* Section Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider leading-none mb-6 text-white">
          Choose Your Grind
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 font-light leading-relaxed">
          Whether you're starting your journey or pushing new limits
        </p>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
          The Grind Club offers premium fitness experiences tailored to help you achieve your goals.
        </p>

        {/* Grid of Items */}
        <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${item.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '450px'
              }}
            >
              
              {/* Minimal Overlay */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] group-hover:backdrop-blur-sm transition-all duration-500"></div>
              
              {/* Badge */}
              <div className="absolute top-6 left-6 z-20">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-gray-200 text-sm font-semibold">
                  {item.badge}
                </span>
              </div>

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-left text-white z-10">
                
                {/* Glass Card for Content */}
                <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  
                  <h3 className="text-3xl font-bold mb-3 text-white">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-base">
                    {item.desc}
                  </p>
                  
                  {/* CTA Button */}
                  <Link
                    to={item.link}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  
                </div>
              </div>

              {/* Subtle Hover Effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
            </div>
          ))}
        </div>

      
        
      </div>
    </section>
  );
};

export default Offerings;
