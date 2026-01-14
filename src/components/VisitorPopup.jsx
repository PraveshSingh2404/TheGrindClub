import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const VisitorPopup = ({ isLoggedIn = false, open = false, onClose }) => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "" });

  // 🔹 Auto popup on refresh (only if not controlled manually)
  useEffect(() => {
    if (!isLoggedIn && !open) {
      const timer = setTimeout(() => setShow(true), 400);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn, open]);

  // 🔹 Manual popup control (GET STARTED click)
  useEffect(() => {
    if (open && !isLoggedIn) {
      setShow(true);
    }
  }, [open, isLoggedIn]);

  const closePopup = () => {
    setShow(false);
    onClose && onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    console.log("Visitor Data:", form);
    closePopup();
  };

  if (!show || isLoggedIn) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 text-white backdrop-blur-xl">

        {/* Close */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={22} />
        </button>

        <h2 className="text-3xl font-black uppercase mb-2">
          Start Your <span className="text-gray-400">Fitness</span> Journey
        </h2>
        <p className="text-gray-300 mb-6 text-sm">
          Enter your details & our trainer will contact you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3"
            required
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3"
            required
          />

          <button
            type="submit"
            className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200"
          >
            Get a Call Back
          </button>

          <button
            type="button"
            onClick={closePopup}
            className="w-full text-sm text-gray-400 hover:text-white"
          >
            Skip for now
          </button>
        </form>
      </div>
    </div>
  );
};

export default VisitorPopup;
