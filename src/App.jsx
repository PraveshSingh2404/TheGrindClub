import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Layout,
  Home,
  AdminDashboard,
  UserDashboard,
  TrainerDashboard
} from "./index.js";
import AuthModal from "./components/auth/AuthModal";

function App() {
  const navigate = useNavigate();
  const [openAuth, setOpenAuth] = useState(false);

  // 🔁 Called after successful login
  const handleLoginSuccess = (dashboard) => {
    setOpenAuth(false);
    navigate(`/${dashboard}`);
  };

  return (
    <>
      {/* AUTH MODAL */}
      <AuthModal
        isOpen={openAuth}
        onClose={() => setOpenAuth(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <Routes>
        <Route path="/" element={<Layout onLoginClick={() => setOpenAuth(true)} />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/trainer-dashboard" element={<TrainerDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default App;
