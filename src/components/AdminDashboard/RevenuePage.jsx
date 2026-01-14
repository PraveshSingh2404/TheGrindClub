import React from "react";
import { DollarSign, TrendingUp, CreditCard, PieChart } from "lucide-react";

const RevenuePage = ({ revenue }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Financial Performance</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Revenue Card */}
        <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-green-900/40 to-black border border-white/10 p-8 rounded-3xl relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-gray-400 mb-2 font-medium">Total Revenue (YTD)</p>
            <h3 className="text-5xl font-black text-white mb-4">
              ${revenue.yearly.toLocaleString()}
            </h3>
            <div className="flex items-center gap-2 bg-green-500/20 text-green-400 w-fit px-3 py-1 rounded-full text-sm font-bold">
               <TrendingUp size={16} /> +24.5% Growth
            </div>
          </div>
          {/* Decorative Blur */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        </div>

        {/* Pending Payments */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
           <div>
             <div className="bg-red-500/20 w-12 h-12 rounded-xl flex items-center justify-center text-red-400 mb-4">
                <CreditCard />
             </div>
             <p className="text-gray-400 font-medium">Pending Payments</p>
             <h3 className="text-3xl font-bold text-white mt-1">
               ${revenue.pending.toLocaleString()}
             </h3>
           </div>
           <button className="w-full mt-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-sm font-bold transition">
             View Invoices
           </button>
        </div>
      </div>

      {/* Visual Bar Chart (CSS only) */}
      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Monthly Breakdown</h3>
            <button className="text-sm text-gray-400 hover:text-white">Last 6 Months</button>
        </div>
        
        <div className="flex items-end justify-between gap-4 h-48">
            {[45, 60, 75, 50, 80, 95].map((height, i) => (
                <div key={i} className="w-full flex flex-col items-center gap-2 group">
                    <div 
                        className="w-full bg-white/10 rounded-t-xl hover:bg-green-500/50 transition-all duration-300 relative"
                        style={{ height: `${height}%` }}
                    >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black border border-white/10 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition">
                            ${height}k
                        </div>
                    </div>
                    <span className="text-xs text-gray-500 uppercase font-bold">
                        {['Aug','Sep','Oct','Nov','Dec','Jan'][i]}
                    </span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RevenuePage;