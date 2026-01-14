import React, { useState } from "react";
import {
  Calendar,
  Users,
  Clock,
  Star,
  TrendingUp,
  Activity,
  MessageSquare,
  Bell,
  Settings,
  Plus,
  Filter,
  User,
  CheckCircle,
  XCircle,
  PlayCircle,
  Target,
  Award,
  Dumbbell
} from "lucide-react";

import TrainerOverview from "../../components/TrainerDashboard/TrainerOverview";
import TrainerAttendance from "../../components/TrainerDashboard/TrainerAttendance";
import TrainerClasses from "../../components/TrainerDashboard/TrainerClasses";
import TrainerClients from "../../components/TrainerDashboard/TrainerClients";

const TrainerDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample trainer data
  const trainerData = {
    name: "Alex Brown",
    specialty: "Strength Training & HIIT",
    rating: 4.8,
    totalClients: 45,
    activeClients: 38,
    classesThisWeek: 12,
    totalClasses: 156,
    experience: "5 years"
  };

  const todaySchedule = [
    { id: 1, time: "06:00 AM", class: "Morning HIIT", clients: 15, duration: 45, status: "upcoming" },
    { id: 2, time: "08:00 AM", class: "Strength Training", clients: 12, duration: 60, status: "upcoming" },
    { id: 3, time: "10:00 AM", class: "Personal Training", clients: 1, duration: 60, status: "in-progress" },
    { id: 4, time: "02:00 PM", class: "Functional Fitness", clients: 18, duration: 45, status: "upcoming" },
    { id: 5, time: "04:00 PM", class: "Personal Training", clients: 1, duration: 60, status: "upcoming" },
    { id: 6, time: "06:00 PM", class: "Evening HIIT", clients: 20, duration: 45, status: "upcoming" }
  ];

  const recentClients = [
    { id: 1, name: "John Smith", lastSession: "Yesterday", progress: 85, status: "Active", goal: "Weight Loss" },
    { id: 2, name: "Sarah Wilson", lastSession: "2 days ago", progress: 92, status: "Active", goal: "Muscle Gain" },
    { id: 3, name: "Mike Johnson", lastSession: "3 days ago", progress: 78, status: "Inactive", goal: "Endurance" },
    { id: 4, name: "Emily Davis", lastSession: "Yesterday", progress: 88, status: "Active", goal: "Strength" }
  ];

  const weeklyStats = [
    { day: "Mon", classes: 3, clients: 25 },
    { day: "Tue", classes: 2, clients: 18 },
    { day: "Wed", classes: 3, clients: 28 },
    { day: "Thu", classes: 2, clients: 16 },
    { day: "Fri", classes: 3, clients: 30 },
    { day: "Sat", classes: 2, clients: 22 },
    { day: "Sun", classes: 1, clients: 12 }
  ];

  const achievements = [
    { title: "100 Classes Milestone", date: "This Month", icon: Target },
    { title: "Top Rated Trainer", date: "Q1 2024", icon: Star },
    { title: "Client Transformation", date: "Last Week", icon: TrendingUp },
    { title: "Perfect Attendance", date: "January", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Trainer Portal</h1>
              <p className="text-gray-400 text-sm">The Grind Club</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <MessageSquare className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-80 bg-white/5 backdrop-blur-sm border-r border-white/10 h-screen overflow-y-auto">
          {/* Trainer Profile */}
          <div className="p-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-xl font-bold mb-1">{trainerData.name}</h2>
                <p className="text-gray-400 text-sm mb-2">{trainerData.specialty}</p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-yellow-400 font-bold">{trainerData.rating}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-black">{trainerData.totalClients}</div>
                    <div className="text-xs text-gray-400">Total Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black">{trainerData.totalClasses}</div>
                    <div className="text-xs text-gray-400">Classes Done</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="px-6">
  {[
    { id: "overview", label: "Overview", icon: Activity },
    { id: "attendance", label: "Attendance", icon: CheckCircle },
    { id: "classes", label: "Classes", icon: PlayCircle },
    { id: "clients", label: "Clients", icon: Users }
  ].map((item) => (
    <button
      key={item.id}
      onClick={() => setActiveTab(item.id)}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl mb-2 transition-all duration-300 ${
        activeTab === item.id
          ? "bg-white/20 text-white border border-white/20"
          : "text-gray-400 hover:text-white hover:bg-white/10"
      }`}
    >
      <item.icon className="w-5 h-5" />
      <span className="font-semibold">{item.label}</span>
    </button>
  ))}
</nav>


          {/* Quick Stats */}
          <div className="p-6 mt-8">
            <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">This Week</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Classes</span>
                <span className="font-bold">{trainerData.classesThisWeek}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Clients</span>
                <span className="font-bold">{trainerData.activeClients}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Experience</span>
                <span className="font-bold">{trainerData.experience}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeTab === "overview" && <TrainerOverview trainerData={trainerData} />}
  {activeTab === "attendance" && <TrainerAttendance />}
  {activeTab === "classes" && <TrainerClasses todaySchedule={todaySchedule} />}
  {activeTab === "clients" && <TrainerClients clients={recentClients} />}
        </main>
      </div>
    </div>
  );
};

export default TrainerDashboard;
