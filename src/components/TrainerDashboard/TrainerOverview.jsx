import React from "react";
import { Activity, Users, Clock, Trophy, TrendingUp, Calendar } from "lucide-react";

const TrainerOverview = ({ trainerData }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold mb-1">Welcome back, {trainerData.name.split(' ')[0]} 👋</h2>
        <p className="text-gray-400">Here's your daily breakdown.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Active Clients", val: trainerData.activeClients, icon: Users, color: "text-blue-400", bg: "bg-blue-500/10" },
          { label: "Classes Today", val: trainerData.classesThisWeek, icon: Calendar, color: "text-green-400", bg: "bg-green-500/10" },
          { label: "Total Hours", val: "156h", icon: Clock, color: "text-orange-400", bg: "bg-orange-500/10" },
          { label: "Client Rating", val: trainerData.rating, icon: Trophy, color: "text-yellow-400", bg: "bg-yellow-500/10" },
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className="flex items-center text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                <TrendingUp size={12} className="mr-1"/> +4%
              </span>
            </div>
            <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            <h3 className="text-3xl font-black text-white mt-1">{stat.val}</h3>
          </div>
        ))}
      </div>

      {/* Quick Schedule Preview */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Activity className="text-pink-500" /> Current Activity
          </h3>
          <span className="text-sm text-gray-400">09:41 AM</span>
        </div>
        
        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-pulse">
                <Clock size={32} className="text-white"/>
              </div>
              <div>
                <p className="text-purple-300 text-sm font-bold uppercase tracking-wider">Happening Now</p>
                <h4 className="text-2xl font-bold">Personal Training Session</h4>
                <p className="text-gray-400">Client: Sarah Wilson</p>
              </div>
           </div>
           <button className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition shadow-lg shadow-white/10">
             View Session Details
           </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerOverview;