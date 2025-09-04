import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-black text-white py-20 px-6 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider leading-none mb-6 text-white">
            Contact <span className="text-gray-400">Us</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4 font-light leading-relaxed">
            Ready to start your fitness journey? Get in touch with The Grind Club today.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Cards */}
            <div className="grid gap-6">
              
              {/* Address Card */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Visit Our Gym</h3>
                    <p className="text-gray-300">
                      123 Fitness Street, Downtown<br/>
                      New Delhi, India 110001
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                    <p className="text-gray-300">
                      +91 8542064474<br/>
                      Available Mon-Sun, 6AM-11PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                    <p className="text-gray-300">
                      thegrindclubgym@gmail.com<br/>
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Operating Hours</h3>
                    <div className="text-gray-300 space-y-1">
                      <p>Monday - Friday: 6:00 AM - 11:00 PM</p>
                      <p>Saturday - Sunday: 7:00 AM - 10:00 PM</p>
                      <p className="text-sm text-gray-400">24/7 access for premium members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors duration-300"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-black/40 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your fitness goals or ask any questions..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Send Message
                <Send className="w-5 h-5 ml-3" />
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
              <h4 className="text-white font-bold mb-3">Ready to Start?</h4>
              <p className="text-gray-300 text-sm mb-4">
                Book a free consultation or tour our facilities. We're here to help you begin your fitness transformation.
              </p>
              <button className="bg-transparent border border-white/30 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-all duration-300">
                Schedule Free Tour
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
