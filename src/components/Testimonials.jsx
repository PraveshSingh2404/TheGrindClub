import React from "react";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Riya Sharma",
      text: "The Grind Club transformed not just my body, but my mind too. The instructors are knowledgeable and the atmosphere is welcoming!",
      rating: 5
    },
    {
      name: "Amit Patel", 
      text: "My strength has doubled and I've never felt better. The equipment is top-notch and the community is incredible.",
      rating: 5
    },
    {
      name: "Priya Singh",
      text: "The Grind Club has transformed my outlook on fitness. The trainers push you to achieve your goals while keeping it fun and engaging.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="bg-black text-white py-20 px-6 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Section Badge */}
        

        {/* Section Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider leading-none mb-6 text-white">
          What Our <span className="text-gray-400">Members Say</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          Real transformations from real people at The Grind Club
        </p>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </blockquote>
              
              {/* Author */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <h4 className="text-white font-bold text-xl">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">Member since 2024</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
