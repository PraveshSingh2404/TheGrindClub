import React, { useState } from "react";
import { 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp,
  Settings,
  Bell,
  Search,
  Filter,
  Download,
  Plus,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  UserCheck,
  UserX,
  Activity,
  Target,
  Dumbbell
} from "lucide-react";
import DashboardOverview from "../../components/AdminDashboard/DashboardOverview";
import RevenuePage from "../../components/AdminDashboard/RevenuePage";
import StaffManagement from "../../components/AdminDashboard/StaffManagement";
import ClientManagement from "../../components/AdminDashboard/ClientManagement";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample data
  const stats = {
    totalMembers: 1247,
    activeMembers: 1038,
    monthlyRevenue: 156000,
    newSignups: 45,
    classesThisWeek: 84,
    trainerCount: 12
  };

  const recentMembers = [
    { id: 1, name: "John Smith", email: "john@email.com", plan: "Premium", status: "Active", joined: "2024-01-15" },
    { id: 2, name: "Sarah Wilson", email: "sarah@email.com", plan: "Basic", status: "Active", joined: "2024-01-14" },
    { id: 3, name: "Mike Johnson", email: "mike@email.com", plan: "Premium", status: "Inactive", joined: "2024-01-13" },
    { id: 4, name: "Emily Davis", email: "emily@email.com", plan: "Premium", status: "Active", joined: "2024-01-12" }
  ];

  const trainers = [
    { id: 1, name: "Alex Brown", specialty: "Strength Training", members: 45, rating: 4.8, status: "Active" },
    { id: 2, name: "Lisa Garcia", specialty: "Yoga & Mindfulness", members: 38, rating: 4.9, status: "Active" },
    { id: 3, name: "David Lee", specialty: "HIIT & Cardio", members: 52, rating: 4.7, status: "Active" },
    { id: 4, name: "Maria Rodriguez", specialty: "Dance Fitness", members: 41, rating: 4.8, status: "Active" }
  ];

  const upcomingClasses = [
    { id: 1, name: "Morning HIIT", trainer: "David Lee", time: "06:00 AM", capacity: 20, booked: 18 },
    { id: 2, name: "Yoga Flow", trainer: "Lisa Garcia", time: "07:30 AM", capacity: 15, booked: 12 },
    { id: 3, name: "Strength Training", trainer: "Alex Brown", time: "09:00 AM", capacity: 25, booked: 22 },
    { id: 4, name: "Zumba Dance", trainer: "Maria Rodriguez", time: "06:00 PM", capacity: 30, booked: 28 }
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
              <h1 className="text-xl font-bold">The Grind Club Admin</h1>
              <p className="text-gray-400 text-sm">Administrative Dashboard</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-white/10 border border-white/20 rounded-2xl pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
              />
            </div>
            <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-80 bg-white/5 backdrop-blur-sm border-r border-white/10 h-screen overflow-y-auto">
          <div className="p-6">
            <nav className="space-y-2">
              {[
                { id: "overview", icon: Activity, label: "Overview" },
                { id: "members", icon: Users, label: "Members" },
                { id: "trainers", icon: UserCheck, label: "Trainers" },
                { id: "revenue", icon: DollarSign, label: "Revenue" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                    activeTab === item.id
                      ? 'bg-white/20 text-white border border-white/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-semibold">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeTab === "overview" && <DashboardOverview stats={stats} />}
{activeTab === "revenue" && <RevenuePage revenue={{ monthly: 156000, yearly: 1800000, pending: 22000 }} />}
{activeTab === "trainers" && <StaffManagement staff={trainers} />}
{activeTab === "members" && <ClientManagement clients={recentMembers} />}

        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
