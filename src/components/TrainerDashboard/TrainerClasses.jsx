import React from "react";
import { Clock, Users, PlayCircle, MoreHorizontal } from "lucide-react";

const TrainerClasses = ({ todaySchedule }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold mb-1">Class Schedule</h2>
          <p className="text-gray-400">Your roadmap for today.</p>
        </div>
        <button className="text-sm bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition">
          View Weekly Calendar
        </button>
      </div>

      <div className="relative border-l-2 border-white/10 ml-4 space-y-8 py-4">
        {todaySchedule.map((session, index) => (
          <div key={session.id} className="relative pl-8 group">
            
            {/* Timeline Dot */}
            <div className={`absolute -left-[9px] top-6 w-4 h-4 rounded-full border-2 border-black ${
              session.status === 'in-progress' ? 'bg-green-500 animate-pulse' : 
              session.status === 'completed' ? 'bg-gray-500' : 'bg-blue-500'
            }`}></div>

            <div className="bg-white/5 border border-white/10 hover:border-white/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                
                {/* Time & Title */}
                <div className="flex-1">
                   <div className="flex items-center gap-3 mb-2">
                     <span className="text-blue-400 font-mono font-bold text-lg">{session.time}</span>
                     <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${
                        session.status === 'in-progress' ? 'bg-green-500 text-black' : 'bg-white/10 text-gray-400'
                     }`}>
                       {session.status}
                     </span>
                   </div>
                   <h3 className="text-xl font-bold text-white">{session.class}</h3>
                   <p className="text-gray-400 text-sm flex items-center gap-2 mt-1">
                     <Clock size={14} /> {session.duration} Minutes
                   </p>
                </div>

                {/* Clients & Action */}
                <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                   <div className="text-right">
                      <div className="flex items-center gap-1 justify-end text-white font-bold text-lg">
                        <Users size={18} className="text-purple-400"/> {session.clients}
                      </div>
                      <p className="text-xs text-gray-500">Registered</p>
                   </div>
                   
                   {session.status === 'in-progress' ? (
                     <button className="bg-green-500 text-black px-6 py-2 rounded-xl font-bold hover:bg-green-400 transition flex items-center gap-2">
                       <PlayCircle size={18} /> Start
                     </button>
                   ) : (
                     <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400">
                       <MoreHorizontal />
                     </button>
                   )}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerClasses;