import React, { useState } from "react";
import { Eye, EyeOff, Lock, Smartphone, Dumbbell } from "lucide-react";

const Login = ({ onSwitchToForgotPassword, onClose, onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    mobile: "",
    password: ""
  });
  const [error, setError] = useState("");

  // 📌 Dashboard Mapping
  const USERS = {
    "9936334474": "admin-dashboard",
    "8081403380": "trainer-dashboard",
    "7317417763": "trainer-dashboard",
    "7985728923": "user-dashboard"
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { mobile, password } = formData;

    // 🔐 Check mobile exists & password matches
    if (USERS[mobile] && password === mobile) {
      console.log("Login Success:", USERS[mobile]);

      // pass role/dashboard to parent (recommended)
      onLoginSuccess?.(USERS[mobile]);

      onClose();
    } else {
      setError("Invalid mobile number or password");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  return (
    <div className="text-white">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Dumbbell className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-black mb-2">Welcome Back</h2>
        <p className="text-gray-400">Sign in to The Grind Club</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Mobile */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Mobile Number
          </label>
          <div className="relative">
            <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              maxLength={10}
              className="w-full bg-white/10 border border-white/20 rounded-2xl pl-12 pr-4 py-3"
              placeholder="Enter your mobile number"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full bg-white/10 border border-white/20 rounded-2xl pl-12 pr-12 py-3"
              placeholder="Password = Mobile Number"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>

        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        {/* Forgot Password */}
        <div className="text-right">
          <button
            type="button"
            onClick={onSwitchToForgotPassword}
            className="text-sm text-gray-400 hover:text-white"
          >
            Forgot Password?
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-2xl font-bold text-lg hover:scale-105 transition-all"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
