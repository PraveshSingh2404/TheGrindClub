import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, RefreshCw } from "lucide-react";

const OTP = ({ email, onSwitchToLogin, onClose }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleChange = (index, value) => {
    if (value.length > 1) {
      // Handle paste
      const pastedCode = value.slice(0, 6).split("");
      const newOtp = [...otp];
      pastedCode.forEach((char, i) => {
        if (index + i < 6) {
          newOtp[index + i] = char;
        }
      });
      setOtp(newOtp);
      
      // Focus on the last filled input or next empty one
      const nextIndex = Math.min(index + pastedCode.length, 5);
      inputRefs.current[nextIndex]?.focus();
    } else {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode.length === 6) {
      // Handle OTP verification
      console.log("OTP:", otpCode);
      onClose();
    }
  };

  const handleResend = () => {
    setTimeLeft(60);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
    // Handle resend logic
    console.log("Resending OTP to:", email);
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
        
        <h2 className="text-3xl font-black tracking-wider mb-4">Verify Your Email</h2>
        <p className="text-gray-400 mb-2">
          We've sent a 6-digit code to
        </p>
        <p className="text-white font-semibold">{email}</p>
      </div>

      {/* OTP Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* OTP Input */}
        <div className="flex justify-center space-x-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl text-center text-xl font-bold text-white focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
              maxLength={6}
              pattern="\d*"
            />
          ))}
        </div>

        {/* Timer */}
        <div className="text-center">
          {timeLeft > 0 ? (
            <p className="text-gray-400">
              Resend code in <span className="text-white font-semibold">{timeLeft}s</span>
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              disabled={!canResend}
              className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-200 disabled:opacity-50"
            >
              <RefreshCw size={16} className="mr-2" />
              Resend Code
            </button>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={otp.join("").length !== 6}
          className="w-full bg-white text-black py-3 rounded-2xl font-bold text-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300"
        >
          Verify & Continue
        </button>
      </form>

      {/* Support */}
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm">
          Didn't receive the code?{" "}
          <button className="text-white hover:text-gray-300 transition-colors duration-200">
            Contact Support
          </button>
        </p>
      </div>
    </div>
  );
};

export default OTP;
