import React from "react";
import { Award, Dumbbell, Heart, Users } from "lucide-react";

const HeadTrainer = () => {
  return (
    <section id="head-trainer" className="bg-black text-white py-20 px-6 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-10 right-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Badge */}
        <div className="text-center mb-12">
         

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider leading-none mb-6 text-white">
            Meet Our <span className="text-gray-400">Head Trainer</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Learn from the best in the fitness industry.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Trainer Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 relative overflow-hidden">
              {/* Placeholder for trainer image */}
              <div 
                className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center relative"
                style={{
                  backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
                
                {/* Quote Overlay */}
                <div className="relative z-10 text-center p-8">
                  <blockquote className="text-2xl font-bold text-white mb-4 italic">
                    "The only person you are destined to become is the person you decide to be."
                  </blockquote>
                  <div className="text-gray-300">
                    - Beeru Pal, Head Trainer
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trainer Info */}
          <div className="space-y-8">
            
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                Beeru Pal
              </h3>
              <p className="text-xl text-gray-400 mb-6">
                Certified Fitness Trainer & Nutritionist
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                With over 10 years of experience in the fitness industry, Beeru has helped 
                hundreds of clients transform their bodies and lives. His unique approach 
                combines functional training with nutritional guidance for optimal results.
              </p>
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Award className="w-8 h-8 text-white mb-3" />
                <h4 className="text-white font-bold mb-2">ISSA Certified</h4>
                <p className="text-gray-400 text-sm">International Sports Sciences Association</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Heart className="w-8 h-8 text-white mb-3" />
                <h4 className="text-white font-bold mb-2">ACE Certified</h4>
                <p className="text-gray-400 text-sm">American Council on Exercise</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Dumbbell className="w-8 h-8 text-white mb-3" />
                <h4 className="text-white font-bold mb-2">Strength Training</h4>
                <p className="text-gray-400 text-sm">Advanced Strength & Conditioning</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Users className="w-8 h-8 text-white mb-3" />
                <h4 className="text-white font-bold mb-2">Functional Fitness</h4>
                <p className="text-gray-400 text-sm">Movement & Mobility Specialist</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300">
              Book a Session with Beeru
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadTrainer;
