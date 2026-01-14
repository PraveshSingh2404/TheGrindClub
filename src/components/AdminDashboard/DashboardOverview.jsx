import React from "react";
import { Users, DollarSign, Activity, Dumbbell, TrendingUp, Calendar } from "lucide-react";

const DashboardOverview = ({ stats }) => {
  // Helper to render a stat card
  const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium mb-1">{label}</p>
          <h3 className="text-3xl font-bold text-white">{value}</h3>
        </div>
        <div className={`p-3 rounded-2xl ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="mt-4 flex items-center text-sm text-green-400">
        <TrendingUp className="w-4 h-4 mr-1" />
        <span>+12% from last month</span>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold">Dashboard Overview</h2>
          <p className="text-gray-400 mt-1">Welcome back, here's what's happening today.</p>
        </div>
        <div className="text-right">
            <p className="text-sm text-gray-500">Current Date</p>
            <p className="font-mono text-xl font-bold">{new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          icon={Users} 
          label="Total Members" 
          value={stats.totalMembers} 
          color="bg-blue-500/20" 
        />
        <StatCard 
          icon={Activity} 
          label="Active Members" 
          value={stats.activeMembers} 
          color="bg-green-500/20" 
        />
        <StatCard 
          icon={DollarSign} 
          label="Monthly Revenue" 
          value={`$${stats.monthlyRevenue.toLocaleString()}`} 
          color="bg-yellow-500/20" 
        />
        <StatCard 
          icon={Dumbbell} 
          label="Classes This Week" 
          value={stats.classesThisWeek} 
          color="bg-purple-500/20" 
        />
        <StatCard 
          icon={Users} 
          label="New Signups" 
          value={stats.newSignups} 
          color="bg-pink-500/20" 
        />
        <StatCard 
          icon={Calendar} 
          label="Total Trainers" 
          value={stats.trainerCount} 
          color="bg-orange-500/20" 
        />
      </div>
    </div>
  );
};

export default DashboardOverview;