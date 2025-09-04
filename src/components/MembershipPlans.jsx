import React from "react";
import { CheckCircle, X, Crown, Star } from "lucide-react";

const MembershipPlans = () => {
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
    <section id="membership" className="bg-black text-white py-20 px-6 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider leading-none mb-6 text-white">
            Membership <span className="text-gray-400">Plans</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4 font-light leading-relaxed">
            Choose the plan that fits your fitness goals and budget. Our long-term memberships are designed to support your fitness journey with consistent progress and sustainable results.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                plan.highlight 
                  ? 'border-white/40 bg-white/10' 
                  : plan.popular 
                    ? 'border-white/30 bg-white/8'
                    : 'border-white/10'
              }`}
            >
              {/* Special Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-xs font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  {plan.title}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-lg">
                    {plan.duration}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
                
                {plan.excluded && plan.excluded.map((excluded, excludedIndex) => (
                  <div key={excludedIndex} className="flex items-center text-sm">
                    <X className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-500 line-through">{excluded}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button 
                className={`w-full py-4 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 ${
                  plan.highlight
                    ? 'bg-white text-black hover:bg-gray-200'
                    : plan.popular
                      ? 'bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                GET STARTED
              </button>
            </div>
          ))}
        </div>

        {/* Long-term Benefits */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Choose Long-Term Membership?
            </h3>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-8">
              Committing to a longer membership plan isn't just about saving money—it's about investing in your long-term health and fitness journey. Our extended plans are designed to support sustainable lifestyle changes and consistent progress toward your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Members who choose our 6 and 12-month plans see significantly better results as they develop consistent habits, overcome plateaus, and build a stronger relationship with our training team. Your fitness journey is a marathon, not a sprint—and we're here to support you every step of the way.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-white font-bold text-lg mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2" />
                Personal Training Available
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Additionally, you can avail personal training facilities from our expert trainers who have more than five to twelve years of experience. Our trainers will create customized workout plans tailored to your specific goals and fitness level, providing motivation and accountability throughout your fitness journey.
              </p>
              <button className="text-white hover:text-gray-300 transition-colors duration-300 text-sm font-semibold">
                Inquire about personal training →
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default MembershipPlans;
