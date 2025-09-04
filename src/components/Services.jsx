import React from "react";
import { Music, Heart, Activity, Shield, Dumbbell, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Zumba",
      desc: "High-energy dance workout that combines Latin rhythms with cardiovascular exercise.",
      icon: Music
    },
    {
      title: "Yoga", 
      desc: "Improve flexibility, strength and balance through physical postures, breathing techniques and meditation.",
      icon: Heart
    },
    {
      title: "Aerobics",
      desc: "Cardiovascular workout that improves your heart health while burning calories.",
      icon: Activity
    },
    {
      title: "Self Defense",
      desc: "Learn practical techniques to protect yourself in any situation while improving fitness.",
      icon: Shield
    },
    {
      title: "Strength Training",
      desc: "Build muscle, increase strength and boost metabolism with our expert-guided weight training.",
      icon: Dumbbell
    },
    {
      title: "Cross Fitness",
      desc: "High-intensity functional movement that will challenge you both physically and mentally.",
      icon: Zap
    }
  ];

  return (
    <section id="services" className="bg-black text-white py-20 px-6 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider leading-none mb-6 text-white">
            Our <span className="text-gray-400">Services</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            We offer a wide range of fitness programs to cater to all your workout needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 text-center"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Service Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className="text-gray-300 leading-relaxed text-base">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience Our Services?
            </h3>
            <p className="text-gray-400 mb-6">
              Join The Grind Club today and discover the perfect workout program for your fitness goals.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300">
              View All Programs
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Services;
