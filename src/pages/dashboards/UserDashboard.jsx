import React, { useState } from "react";
import { 
  Calendar, 
  Activity, 
  Clock, 
  Dumbbell, 
  Utensils,
  CreditCard,
  CheckCircle,
  Menu,
  X,
  Flame,
  ChevronRight,
  LogOut,
  Bell
} from "lucide-react";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- Mock Data ---
  const userData = {
    name: "Aditya Kumar",
    plan: "Gold Membership",
    expiry: "2026-03-15", // YYYY-MM-DD
    streak: 12,
    attendancePercentage: 85,
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop"
  };

  const upcomingClasses = [
    { id: 1, name: "Zumba Blast", trainer: "Puspendra", time: "06:00 PM", date: "Today", status: "Booked" },
    { id: 2, name: "HIIT Cardio", trainer: "Surya", time: "07:00 AM", date: "Tomorrow", status: "Open" },
    { id: 3, name: "Muscle Training", trainer: "Ubaid", time: "06:00 PM", date: "Wed, 16 Jan", status: "Waitlist" },
  ];

  const dietPlan = [
    { time: "Breakfast", meal: "Oatmeal with Almonds & Banana", cals: "350 kcal" },
    { time: "Lunch", meal: "Grilled Chicken Breast + Brown Rice", cals: "500 kcal" },
    { time: "Pre-Workout", meal: "Black Coffee + Apple", cals: "80 kcal" },
    { time: "Dinner", meal: "Boiled Egg Whites + Green Salad", cals: "250 kcal" },
  ];

  const workoutSchedule = [
    { day: "Monday", focus: "Chest & Triceps", exercises: 6 },
    { day: "Tuesday", focus: "Back & Biceps", exercises: 6 },
    { day: "Wednesday", focus: "Legs & Core", exercises: 7 },
    { day: "Thursday", focus: "Shoulders & Cardio", exercises: 5 },
    { day: "Friday", focus: "Full Body Mix", exercises: 8 },
    { day: "Saturday", focus: "Active Rest / Yoga", exercises: 3 },
  ];

  const attendanceLog = [
    { date: "14 Jan", status: "Present", time: "06:30 PM" },
    { date: "13 Jan", status: "Present", time: "06:15 PM" },
    { date: "12 Jan", status: "Rest Day", time: "--" },
    { date: "11 Jan", status: "Absent", time: "--" },
    { date: "10 Jan", status: "Present", time: "07:00 AM" },
  ];

  // --- Helper Components ---

  const NavItem = ({ id, icon: Icon, label, mobile = false }) => (
    <button
      onClick={() => {
        setActiveTab(id);
        if (mobile) setIsMobileMenuOpen(false);
      }}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 w-full
        ${activeTab === id 
          ? "bg-gradient-to-r from-white/20 to-white/5 text-white border border-white/10 shadow-lg shadow-white/5" 
          : "text-gray-400 hover:bg-white/5 hover:text-white"}
        ${mobile ? "justify-center flex-col gap-1 text-xs py-2 rounded-none bg-transparent" : ""}
      `}
    >
      <Icon className={`${mobile ? "w-6 h-6" : "w-5 h-5"}`} />
      <span className={`${mobile ? "font-medium" : "font-semibold"}`}>{label}</span>
    </button>
  );

  const StatCard = ({ icon: Icon, label, value, subtext, color = "text-white" }) => (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-all">
      <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${color}`}>
        <Icon className="w-16 h-16" />
      </div>
      <div className="relative z-10">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
        <h3 className="text-3xl font-black text-white mb-1">{value}</h3>
        <p className="text-gray-300 font-medium">{label}</p>
        {subtext && <p className="text-xs text-gray-500 mt-2">{subtext}</p>}
      </div>
    </div>
  );

  // --- Render Content ---
  const renderContent = () => {
    switch (activeTab) {
      case "classes":
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-black uppercase text-white">Upcoming <span className="text-gray-500">Classes</span></h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {upcomingClasses.map((cls) => (
                <div key={cls.id} className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/20">
                      {cls.status}
                    </span>
                    <span className="text-gray-400 text-sm font-mono">{cls.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{cls.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">Trainer: {cls.trainer}</p>
                  <div className="flex items-center gap-2 text-gray-300 bg-black/20 p-3 rounded-xl">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold">{cls.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "attendance":
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-black uppercase text-white">My <span className="text-gray-500">Attendance</span></h2>
            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
              {attendanceLog.map((log, index) => (
                <div key={index} className="flex items-center justify-between p-5 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      log.status === "Present" ? "bg-green-500/20 text-green-400" : 
                      log.status === "Absent" ? "bg-red-500/20 text-red-400" : "bg-gray-500/20 text-gray-400"
                    }`}>
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-white">{log.date}</p>
                      <p className="text-xs text-gray-500">{log.time}</p>
                    </div>
                  </div>
                  <span className={`text-sm font-bold ${
                     log.status === "Present" ? "text-green-400" : 
                     log.status === "Absent" ? "text-red-400" : "text-gray-400"
                  }`}>{log.status}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "diet":
        return (
          <div className="space-y-8 animate-fade-in">
             <h2 className="text-3xl font-black uppercase text-white">Diet & <span className="text-gray-500">Routine</span></h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Diet Section */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-500/20 rounded-xl text-green-400"><Utensils className="w-6 h-6"/></div>
                  <h3 className="text-xl font-bold">Daily Nutrition</h3>
                </div>
                <div className="space-y-4">
                  {dietPlan.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 rounded-2xl bg-black/20">
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">{item.time}</p>
                        <p className="font-medium text-gray-200">{item.meal}</p>
                      </div>
                      <span className="text-sm font-mono text-green-400">{item.cals}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workout Schedule */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-orange-500/20 rounded-xl text-orange-400"><Dumbbell className="w-6 h-6"/></div>
                   <h3 className="text-xl font-bold">Weekly Split</h3>
                </div>
                <div className="space-y-3">
                  {workoutSchedule.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition-colors cursor-default">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        <span className="font-bold text-gray-300">{item.day}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-medium">{item.focus}</p>
                        <p className="text-xs text-gray-500">{item.exercises} Exercises</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "plan":
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-black uppercase text-white">Membership <span className="text-gray-500">Plan</span></h2>
            
            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 relative overflow-hidden">
               {/* Decorative Circles */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
               
               <div className="relative z-10">
                 <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="text-gray-400 mb-1">Current Plan</p>
                      <h3 className="text-3xl font-black text-white tracking-wide">{userData.plan}</h3>
                    </div>
                    <CreditCard className="w-12 h-12 text-white/20" />
                 </div>

                 <div className="space-y-2 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Status</span>
                      <span className="text-green-400 font-bold flex items-center gap-1"><CheckCircle className="w-3 h-3"/> Active</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Member since</span>
                      <span className="text-white font-mono">Jan 2024</span>
                    </div>
                 </div>

                 <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex items-center gap-4">
                    <Clock className="w-8 h-8 text-red-500" />
                    <div>
                      <p className="text-red-200 text-xs font-bold uppercase tracking-wider">Expiring On</p>
                      <p className="text-xl font-bold text-white">{userData.expiry}</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        );

      default: // Overview
        return (
          <div className="space-y-8 animate-fade-in">
            {/* Header / Welcome */}
            <div className="flex justify-between items-end">
               <div>
                 <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-none">
                   Hello, <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                     {userData.name.split(" ")[0]}
                   </span>
                 </h2>
               </div>
               <div className="hidden md:block">
                  <p className="text-right text-gray-400 text-sm">Current Plan</p>
                  <p className="text-right font-bold text-white">{userData.plan}</p>
               </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard icon={Flame} value={userData.streak} label="Day Streak" color="text-orange-500" />
              <StatCard icon={CheckCircle} value={`${userData.attendancePercentage}%`} label="Attendance" color="text-green-500" />
              <StatCard icon={Dumbbell} value="24" label="Workouts" color="text-blue-500" />
              <StatCard icon={Utensils} value="2.1k" label="Avg Cals" color="text-purple-500" />
            </div>

            {/* Quick Actions / Next Up */}
            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-white/5 border border-white/10 rounded-3xl p-6 relative overflow-hidden">
                 <div className="flex justify-between items-center mb-6">
                   <h3 className="text-xl font-bold">Next Class</h3>
                   <span className="px-3 py-1 bg-white/10 rounded-full text-xs">Today</span>
                 </div>
                 <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-xl">
                      Z
                   </div>
                   <div>
                     <p className="font-bold text-lg">Zumba Blast</p>
                     <p className="text-gray-400 text-sm">with Puspendra • 06:00 PM</p>
                   </div>
                 </div>
                 <button className="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                   View Details
                 </button>
               </div>

               <div className="bg-gradient-to-br from-red-900/40 to-black border border-red-500/20 rounded-3xl p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="text-red-500 w-5 h-5" />
                    <span className="text-red-400 font-bold text-sm uppercase">Plan Expiry</span>
                  </div>
                  <p className="text-3xl font-black text-white mb-1">{userData.expiry}</p>
                  <p className="text-gray-400 text-sm mb-4">You have 60 days remaining</p>
                  <button onClick={() => setActiveTab('plan')} className="text-left text-white underline decoration-gray-500 underline-offset-4 hover:decoration-white transition-all text-sm">
                    Manage Subscription &rarr;
                  </button>
               </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 font-sans pb-24 md:pb-0">
      
      {/* Background Elements (Consistent with Home) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-gray-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex max-w-7xl mx-auto">
        
        {/* DESKTOP SIDEBAR */}
        <aside className="hidden md:flex flex-col w-72 h-screen sticky top-0 border-r border-white/10 p-6">
          <div className="flex items-center gap-3 mb-10 px-2">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <span className="text-black font-black text-xl">G</span>
            </div>
            <span className="font-bold text-xl tracking-wider">THE GYM</span>
          </div>

          <div className="space-y-2 flex-1">
            <NavItem id="overview" icon={Activity} label="Overview" />
            <NavItem id="classes" icon={Calendar} label="Classes" />
            <NavItem id="attendance" icon={CheckCircle} label="Attendance" />
            <NavItem id="diet" icon={Utensils} label="Diet & Schedule" />
            <NavItem id="plan" icon={CreditCard} label="My Plan" />
          </div>

          <div className="border-t border-white/10 pt-6 mt-6">
            <div className="flex items-center gap-3 px-2 mb-4">
              <img src={userData.avatar} alt="Profile" className="w-10 h-10 rounded-full object-cover border-2 border-white/20" />
              <div className="flex-1 min-w-0">
                <p className="font-bold truncate">{userData.name}</p>
                <p className="text-xs text-gray-500 truncate">{userData.plan}</p>
              </div>
            </div>
            <button className="flex items-center gap-3 px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-xl w-full transition-colors text-sm font-medium">
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 md:p-10 min-w-0">
          {/* Mobile Header */}
          <div className="md:hidden flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                  <span className="text-black font-black text-xl">G</span>
               </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative">
                <Bell className="w-6 h-6 text-gray-300" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <img src={userData.avatar} alt="Profile" className="w-10 h-10 rounded-full object-cover border border-white/20" />
            </div>
          </div>

          {renderContent()}
        </main>
      </div>

      {/* MOBILE BOTTOM NAVIGATION */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-xl border-t border-white/10 z-50">
        <div className="flex justify-around items-center p-2">
           <NavItem id="overview" icon={Activity} label="Home" mobile />
           <NavItem id="classes" icon={Calendar} label="Classes" mobile />
           <NavItem id="diet" icon={Utensils} label="Diet" mobile />
           <NavItem id="attendance" icon={CheckCircle} label="Log" mobile />
           <NavItem id="plan" icon={CreditCard} label="Plan" mobile />
        </div>
      </div>

    </div>
  );
};

export default UserDashboard;