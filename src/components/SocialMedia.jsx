import React, { useState } from "react";
import VisitorPopup from "./VisitorPopup";

const FollowTheFlow = () => {
  const [showPopup, setShowPopup] = useState(false);

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
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider leading-none mb-6">
          Follow The Flow
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 font-light">
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
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <span className="text-8xl md:text-9xl font-black text-white/10">
                  {step.number}
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-2xl border border-white/20">
                    {step.icon}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">
                {step.title}
              </h3>

              <p className="text-gray-300 max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience the Flow?
          </h3>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our community and discover how our signature method can transform your practice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowPopup(true)}
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
            >
              Book Your First Class
            </button>

            <button className="bg-transparent border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Visitor Popup */}
      {showPopup && <VisitorPopup />}
    </section>
  );
};

export default FollowTheFlow;
