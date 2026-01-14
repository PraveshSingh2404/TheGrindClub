import React from "react";
import { CheckCircle, X, Star } from "lucide-react";
import VisitorPopup from "./VisitorPopup";

const MembershipPlans = () => {
  const [showVisitorPopup, setShowVisitorPopup] = React.useState(false);

  const plans = [
    {
      title: "Regular",
      price: "₹1,500",
      duration: "/month",
      features: [
        "Access to all equipment",
        "Basic fitness assessment",
        "1 free class per week"
      ],
      excluded: ["Personal training"],
      popular: false,
      highlight: false
    },
    {
      title: "Regular",
      price: "₹3,500",
      duration: "/3 months",
      features: [
        "Access to all equipment",
        "Detailed fitness assessment",
        "Weekly fitness tracking",
        "Basic workout plan"
      ],
      excluded: [],
      popular: true,
      highlight: false
    },
    {
      title: "Total Fitness",
      price: "₹6,000",
      duration: "/6 months",
      features: [
        "Unlimited equipment access",
        "Personalized workout plan",
        "Monthly progress assessment",
        "Fitness goal consultation"
      ],
      excluded: [],
      popular: false,
      highlight: false
    },
    {
      title: "Total Fitness",
      price: "₹10,000",
      duration: "/12 months",
      features: [
        "Unlimited everything",
        "Premium fitness experience",
        "Nutrition consultation",
        "Quarterly body composition analysis",
        "Long-term fitness planning"
      ],
      excluded: [],
      popular: false,
      highlight: true,
      badge: "Special Offer"
    }
  ];

  return (
    <section
      id="membership"
      className="bg-black text-white py-20 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-6">
            Membership <span className="text-gray-400">Plans</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Choose the plan that fits your fitness goals and budget.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white/5 rounded-3xl p-8 border transition-all hover:scale-105 ${
                plan.highlight
                  ? "border-white/40 bg-white/10"
                  : plan.popular
                  ? "border-white/30"
                  : "border-white/10"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-xs font-bold">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-xl font-bold mb-4 text-center">
                {plan.title}
              </h3>

              <div className="text-center mb-6">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-gray-400">{plan.duration}</span>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowVisitorPopup(true)}
                className="w-full py-3 rounded-full font-bold bg-white text-black hover:bg-gray-200 transition"
              >
                GET STARTED
              </button>
            </div>
          ))}
        </div>

        {/* 🔥 POPUP RENDERED ONLY ON CLICK */}
        {showVisitorPopup && (
          <VisitorPopup onClose={() => setShowVisitorPopup(false)} />
        )}

        {/* Extra Info */}
        <div className="mt-20 bg-white/5 p-8 rounded-3xl border border-white/10">
          <h3 className="text-3xl font-bold mb-4 text-center">
            Why Choose Long-Term Membership?
          </h3>
          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            Long-term members achieve better consistency, stronger habits, and
            real transformation.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MembershipPlans;
