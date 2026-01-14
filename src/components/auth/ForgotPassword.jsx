import React, { useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";

const ForgotPassword = ({ onSwitchToLogin, onSwitchToOTP, onClose }) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic
    console.log("Forgot password for:", email);
    setIsSubmitted(true);
    setTimeout(() => {
      onSwitchToOTP(email);
    }, 2000);
  };

  return (
    <div className="text-white">
      {/* Header */}
      <div className="text-center mb-8">
        <button
          onClick={onSwitchToLogin}
          className="absolute top-4 left-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
        >
          <ArrowLeft size={16} className="text-white" />
        </button>
        
        <h2 className="text-3xl font-black tracking-wider mb-4">Reset Password</h2>
        <p className="text-gray-400">
          Enter your email address and we'll send you a verification code
        </p>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/10 border border-white/20 rounded-2xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-2xl font-bold text-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
          >
            Send Reset Code
          </button>
        </form>
      ) : (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Check Your Email</h3>
          <p className="text-gray-400 mb-4">
            We've sent a verification code to <br />
            <span className="text-white font-semibold">{email}</span>
          </p>
          <div className="animate-spin w-6 h-6 border-2 border-white border-t-transparent rounded-full mx-auto"></div>
        </div>
      )}

      {/* Back to Login */}
      <div className="mt-8 text-center">
        <button
          onClick={onSwitchToLogin}
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          ← Back to Sign In
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
