import React, { useState } from "react";
import { Search, Filter, MessageSquare, ChevronDown, ChevronUp, Edit3, Calendar, Utensils } from "lucide-react";

const TrainerClients = ({ clients }) => {
  // State to manage which client is expanded for editing
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      
      {/* Search Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
           <h2 className="text-3xl font-bold mb-1">Assigned Clients</h2>
           <p className="text-gray-400">Update diets and weekly plans.</p>
        </div>
        <div className="flex gap-2">
           <div className="relative">
             <Search className="absolute left-3 top-3 text-gray-500" size={18}/>
             <input type="text" placeholder="Search client..." className="pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-white/30 w-full md:w-64" />
           </div>
           <button className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10">
             <Filter size={20} className="text-gray-400" />
           </button>
        </div>
      </div>

      {/* Client List */}
      <div className="space-y-4">
        {clients.map((client) => (
          <div key={client.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300">
            
            {/* Card Header (Always Visible) */}
            <div 
              className="p-6 flex flex-col md:flex-row items-center justify-between cursor-pointer hover:bg-white/5"
              onClick={() => toggleExpand(client.id)}
            >
              <div className="flex items-center gap-4 w-full md:w-auto">
                 <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                    {client.name.charAt(0)}
                 </div>
                 <div>
                    <h4 className="font-bold text-lg">{client.name}</h4>
                    <p className="text-sm text-gray-400">{client.goal}</p>
                 </div>
              </div>

              <div className="flex items-center gap-6 w-full md:w-auto mt-4 md:mt-0 justify-between">
                 <div className="text-right">
                    <p className="text-xs text-gray-500 uppercase">Progress</p>
                    <div className="w-24 h-2 bg-white/10 rounded-full mt-1">
                       <div className="h-full bg-green-500 rounded-full" style={{ width: `${client.progress}%` }}></div>
                    </div>
                 </div>
                 <div className={`transform transition-transform duration-300 ${expandedId === client.id ? 'rotate-180' : ''}`}>
                    <ChevronDown className="text-gray-500" />
                 </div>
              </div>
            </div>

            {/* Expandable Action Area */}
            {expandedId === client.id && (
              <div className="p-6 border-t border-white/10 bg-black/20 grid md:grid-cols-2 gap-6 animate-in slide-in-from-top-2 duration-200">
                 
                 {/* Diet Plan Section */}
                 <div className="space-y-3">
                    <h5 className="font-bold text-sm text-gray-300 flex items-center gap-2">
                      <Utensils size={16} className="text-orange-400"/> Current Diet Plan
                    </h5>
                    <textarea 
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-sm text-gray-300 focus:outline-none focus:border-orange-400/50 h-32 resize-none"
                      placeholder="Enter diet details (e.g., High Protein, 2500 kcal)..."
                      defaultValue="Breakfast: Oats & Whey&#10;Lunch: Chicken Rice&#10;Dinner: Salad"
                    ></textarea>
                    <button className="text-xs bg-orange-500/10 text-orange-400 px-4 py-2 rounded-lg font-bold hover:bg-orange-500/20 w-full">
                      Update Diet
                    </button>
                 </div>

                 {/* Workout Schedule Section */}
                 <div className="space-y-3">
                    <h5 className="font-bold text-sm text-gray-300 flex items-center gap-2">
                      <Calendar size={16} className="text-blue-400"/> Weekly Schedule
                    </h5>
                    <textarea 
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-sm text-gray-300 focus:outline-none focus:border-blue-400/50 h-32 resize-none"
                      placeholder="Enter workout routine..."
                      defaultValue="Mon: Chest/Triceps&#10;Tue: Back/Biceps&#10;Wed: Legs/Abs"
                    ></textarea>
                    <button className="text-xs bg-blue-500/10 text-blue-400 px-4 py-2 rounded-lg font-bold hover:bg-blue-500/20 w-full">
                      Update Schedule
                    </button>
                 </div>
                 
                 <div className="md:col-span-2 flex justify-end pt-2">
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white text-sm">
                       <MessageSquare size={16} /> Send Message to Client
                    </button>
                 </div>

              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerClients;