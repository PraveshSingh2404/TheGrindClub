import React, { useState, useEffect } from "react";
import { Clock, AlertTriangle, CheckCircle, MapPin, Calendar } from "lucide-react";

const TrainerAttendance = () => {
  const [status, setStatus] = useState("out"); // 'in' or 'out'
  const [time, setTime] = useState(new Date());
  
  // LOGIC CONFIGURATION
  const SHIFT_START = "09:00"; 
  const penaltiesThisMonth = 2; // Mock data: User has 2 penalties already
  
  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCheckIn = () => {
    // Logic for checking time and assigning penalties would go here
    setStatus("in");
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-1">Attendance Tracker</h2>
        <p className="text-gray-400">Manage your shifts and check penalty status.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Check In/Out Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden text-center">
           {/* Background Pulse */}
           <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] -z-10 ${status === 'in' ? 'bg-green-500/20' : 'bg-red-500/20'}`}></div>

           <div className="mb-6">
             <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Current Time</p>
             <h3 className="text-6xl font-black font-mono tracking-tighter">
               {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
               <span className="text-2xl ml-2 text-gray-500">{time.toLocaleTimeString([], { second: '2-digit' })}</span>
             </h3>
             <p className="text-blue-400 font-bold mt-2">{time.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</p>
           </div>

           <button 
             onClick={() => setStatus(status === 'in' ? 'out' : 'in')}
             className={`w-48 h-48 rounded-full border-8 transition-all duration-500 flex flex-col items-center justify-center gap-2 shadow-[0_0_40px_rgba(0,0,0,0.5)] ${
               status === 'in' 
               ? 'border-red-500 bg-red-500/10 hover:bg-red-500/20 text-red-500' 
               : 'border-green-500 bg-green-500/10 hover:bg-green-500/20 text-green-500'
             }`}
           >
             <MapPin size={32} />
             <span className="text-xl font-black uppercase">{status === 'in' ? 'Check Out' : 'Check In'}</span>
           </button>
           
           <p className="mt-6 text-sm text-gray-500 flex items-center gap-2">
             <MapPin size={14} /> Location: Gym Floor, Zone A
           </p>
        </div>

        {/* Rules & Penalty Status */}
        <div className="space-y-6">
          {/* Rules Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Clock className="text-blue-400" /> Shift Policy
            </h4>
            <div className="space-y-4 text-sm text-gray-300">
               <div className="flex gap-4 items-start">
                  <div className="bg-green-500/20 p-2 rounded text-green-400 font-bold min-w-[60px] text-center">0-30<br/><span className="text-[10px] uppercase">Mins</span></div>
                  <div>
                    <p className="font-bold text-white">Grace Period</p>
                    <p className="text-gray-500 text-xs">Login within 30 mins of shift start time is allowed without penalty.</p>
                  </div>
               </div>
               <div className="flex gap-4 items-start">
                  <div className="bg-yellow-500/20 p-2 rounded text-yellow-400 font-bold min-w-[60px] text-center">30-45<br/><span className="text-[10px] uppercase">Mins</span></div>
                  <div>
                    <p className="font-bold text-white">Late Mark</p>
                    <p className="text-gray-500 text-xs">15 min buffer after grace period.</p>
                  </div>
               </div>
               <div className="flex gap-4 items-start">
                  <div className="bg-red-500/20 p-2 rounded text-red-400 font-bold min-w-[60px] text-center">45+<br/><span className="text-[10px] uppercase">Mins</span></div>
                  <div>
                    <p className="font-bold text-white">Penalty Strike</p>
                    <p className="text-gray-500 text-xs">Counted as 1 penalty.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Penalty Stats */}
          <div className="bg-gradient-to-r from-red-900/20 to-black border border-red-500/30 rounded-3xl p-6">
             <div className="flex justify-between items-start">
                <div>
                   <h4 className="text-red-400 font-bold flex items-center gap-2">
                     <AlertTriangle size={18}/> Monthly Penalties
                   </h4>
                   <p className="text-xs text-gray-400 mt-1">Reset on 1st of every month</p>
                </div>
                <div className="text-3xl font-black text-white">{penaltiesThisMonth}/3</div>
             </div>
             
             {/* Progress Bar */}
             <div className="mt-4 w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div className={`h-full ${penaltiesThisMonth >= 3 ? 'bg-red-600' : 'bg-yellow-500'}`} style={{ width: `${(penaltiesThisMonth/3)*100}%` }}></div>
             </div>

             <div className="mt-4 bg-red-500/10 border border-red-500/20 p-3 rounded-xl text-xs text-red-200">
               {penaltiesThisMonth >= 3 
                 ? "⚠️ MAXIMUM PENALTIES REACHED. Next late arrival results in HALF-DAY salary deduction."
                 : `You have ${3 - penaltiesThisMonth} strikes remaining before financial penalty.`}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerAttendance;