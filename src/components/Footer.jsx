import React from "react";
import { Instagram, Facebook, Youtube, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute top-10 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-4 text-center md:text-left mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              The Grind Club
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              Where strength meets style. Train hard, stay strong, and join the movement that's redefining fitness.
            </p>
             {/* Newsletter Signup */}
            <div className="bg-white/5 w-[80%] mb:w-full backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 text-white">
                Stay Updated
              </h4>
              <p className="text-xs text-gray-400 mb-4">
                Get fitness tips, class updates, and exclusive offers on your whatsapp.
              </p>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter your whatsapp number"
                  className="flex-1 bg-black/40 border border-white/20 rounded-l-full px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/40"
                />
                <button className="bg-white text-black px-4 py-2 rounded-r-full text-sm font-semibold hover:bg-gray-200 transition-colors duration-300">
                  Join
                </button>
              </div>
            </div>
            
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Memberships", href: "#membership" },
                { name: "Personal Training", href: "#training" },
                { name: "Group Classes", href: "#classes" },
                { name: "Nutrition Plans", href: "#nutrition" },
                { name: "About Us", href: "#about" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-white/20 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect Section */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-6 text-white">
              Connect With Us
            </h3>
            
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Youtube, href: "#", label: "YouTube" },
                { Icon: Twitter, href: "#", label: "Twitter" }
              ].map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  aria-label={label}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 hover:border-white/40 hover:scale-110 transform transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            
           
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Copyright */}
          <div className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} The Grind Club. All Rights Reserved.
            <span className="mx-2">•</span>
            <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <span className="mx-2">•</span>
            <a href="#terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
          
          {/* Contact Info */}
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="tel:+918542064474" className="flex items-center space-x-2 hover:text-white transition-colors duration-300">
              <Phone size={16} />
              <span>+91 8542064474</span>
            </a>
            <a href="mailto:thegrindclubgym@gmail.com" className="flex items-center space-x-2 hover:text-white transition-colors duration-300">
              <Mail size={16} />
              <span>thegrindclubgym@gmail.com</span>
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
