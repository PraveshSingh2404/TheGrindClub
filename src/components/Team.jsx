import React from "react";
import { Award, Users, Target } from "lucide-react";

const Team = () => {
  return (
    <section id="team" className="bg-black text-white py-20 px-6 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-10 right-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider leading-none mb-6 text-white">
            Our <span className="text-gray-400">Team</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4 font-light leading-relaxed">
            Meet the dedicated professionals who will guide you on your fitness journey.
          </p>
        </div>

        {/* Team Photo */}
        <div className="mb-16">
          <div 
            className="w-full h-[500px] rounded-3xl relative overflow-hidden shadow-2xl"
            style={{
              backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
            
            {/* Team Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                The Grind Club Family
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                United by passion, driven by results. Our team is committed to helping you achieve your fitness goals.
              </p>
            </div>
          </div>
        </div>

        {/* Team Values */}
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Expert Trainers</h3>
            <p className="text-gray-300 leading-relaxed">
              Our certified trainers bring years of experience and specialized knowledge to help you achieve your fitness goals safely and effectively.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Supportive Community</h3>
            <p className="text-gray-300 leading-relaxed">
              Join a motivating community of like-minded individuals who support and inspire each other on their fitness journeys.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Personalized Approach</h3>
            <p className="text-gray-300 leading-relaxed">
              We believe in customized fitness plans that adapt to your unique needs, goals, and progress for optimal results.
            </p>
          </div>
        </div>        
      </div>
    </section>
  );
};

export default Team;
