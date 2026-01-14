import React from "react";
import { Users, Award } from "lucide-react";

const Trainers = () => {
  const trainers = [
    {
      name: "SURYA",
      specialty: "Strength & Yoga Specialist",
      description: "Specializes in muscle building, strength training, and high-intensity cardio workouts. Yash helps members achieve their peak physical condition with customized training plans.",
      tags: ["Strength", "Yoga", "HIIT"]
    },
    {
      name: "UBAID", 
      specialty: "Muscle Training & Fitness Coach",
      description: "With expertise in both muscle training and dance fitness, Abhishek brings creativity and energy to help members build fitness while having fun.",
      tags: ["Muscle", "Fitness", "Cardio"]
    },
    {
      name: "PUSPENDRA",
      specialty: "Zumba & Dance Instructor", 
      description: "Vikash brings the joy of movement to our gym with energetic Zumba and dance classes. His passion transforms boring choreography into effective cardio workouts.",
      tags: ["Zumba", "Dance", "Aerobics"]
    }
  ];

  return (
    <section id="trainers" className="bg-black text-white py-20 px-6 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider leading-none mb-6 text-white">
            Our <span className="text-gray-400">Trainers</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expert guidance from certified fitness professionals.
          </p>
        </div>

        {/* Team Photo */}
        <div className="mb-16">
          <div 
            className="w-full h-96 rounded-3xl relative overflow-hidden"
            style={{
              backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Our Training Team</h3>
              <p className="text-gray-300">Our team of certified professionals is dedicated to helping you achieve your fitness goals.</p>
            </div>
          </div>
        </div>

        {/* Individual Trainers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              {/* Trainer Avatar */}
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-black text-white">{trainer.name.charAt(0)}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 text-center">{trainer.name}</h3>
              <p className="text-gray-400 text-center mb-4">{trainer.specialty}</p>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {trainer.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {trainer.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specialization Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "💪", title: "Strength Training", desc: "Build muscle and power" },
            { icon: "❤️", title: "Cardio Experts", desc: "Heart health specialists" }, 
            { icon: "🧘", title: "Yoga Instructors", desc: "Mind-body wellness" },
            { icon: "🥗", title: "Nutrition Coaches", desc: "Dietary guidance" }
          ].map((category, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-white/20 transition-all duration-300">
              <div className="text-3xl mb-3">{category.icon}</div>
              <h4 className="text-white font-bold mb-2">{category.title}</h4>
              <p className="text-gray-400 text-sm">{category.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
