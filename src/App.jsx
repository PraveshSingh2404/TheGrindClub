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

  // 🔁 Called by Login.js when credentials match
  const handleLoginSuccess = (dashboardRoute) => {
    console.log("Navigating to:", dashboardRoute);
    
    // 1. Close the modal
    setOpenAuth(false);
    
    // 2. Navigate to the route passed from Login.js (e.g., /admin-dashboard)
    navigate(`/${dashboardRoute}`);
  };

  return (
    <>
      <AuthModal
        isOpen={openAuth}
        onClose={() => setOpenAuth(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Layout onLoginClick={() => setOpenAuth(true)} />}>
          <Route index element={<Home />} />
        </Route>

        {/* Protected Dashboard Routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/trainer-dashboard" element={<TrainerDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default App;