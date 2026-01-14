import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Login from "./Login";
import OTP from "./OTP";
import ForgotPassword from "./ForgotPassword";

const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [currentView, setCurrentView] = useState("login");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    if (!isOpen) setCurrentView("login");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />

      <div className="relative bg-black border border-white/20 rounded-3xl p-8 w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/10 rounded-full p-2"
        >
          <X size={16} />
        </button>

        {currentView === "login" && (
          <Login
            onSwitchToForgotPassword={() => setCurrentView("forgot")}
            onClose={onClose}
            onLoginSuccess={onLoginSuccess}
          />
        )}

        {currentView === "forgot" && (
          <ForgotPassword
            onSwitchToLogin={() => setCurrentView("login")}
            onSwitchToOTP={(email) => {
              setUserEmail(email);
              setCurrentView("otp");
            }}
          />
        )}

        {currentView === "otp" && (
          <OTP
            email={userEmail}
            onSwitchToLogin={() => setCurrentView("login")}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
