import React from "react";
import { Plus, MoreHorizontal, Star, Phone, Mail } from "lucide-react";

const StaffManagement = ({ staff }) => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
           <h2 className="text-3xl font-bold">Trainers & Staff</h2>
           <p className="text-gray-400">Manage your fitness professionals.</p>
        </div>
        <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition">
          <Plus size={20} /> Add Trainer
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {staff.map((trainer) => (
          <div key={trainer.id} className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-white/20 transition group">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-2xl font-bold text-white border border-white/10">
                  {trainer.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                  <p className="text-blue-400 text-sm font-medium">{trainer.specialty}</p>
                </div>
              </div>
              <button className="text-gray-500 hover:text-white transition">
                <MoreHorizontal />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-black/40 p-3 rounded-xl">
                 <p className="text-xs text-gray-500 uppercase">Clients</p>
                 <p className="font-bold text-lg">{trainer.members}</p>
              </div>
              <div className="bg-black/40 p-3 rounded-xl">
                 <p className="text-xs text-gray-500 uppercase">Rating</p>
                 <div className="flex items-center gap-1 font-bold text-lg">
                    {trainer.rating} <Star size={14} className="fill-yellow-500 text-yellow-500"/>
                 </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-white/5">
                <button className="flex-1 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-bold text-gray-300 flex items-center justify-center gap-2">
                    <Mail size={16} /> Email
                </button>
                <button className="flex-1 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-bold text-gray-300 flex items-center justify-center gap-2">
                    <Phone size={16} /> Call
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffManagement;