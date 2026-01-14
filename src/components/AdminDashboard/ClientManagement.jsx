import React from "react";
import { Search, Filter, MoreHorizontal, UserCheck, UserX } from "lucide-react";

const ClientManagement = ({ clients }) => {
  return (
    <div className="space-y-6">
       <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
        <div>
           <h2 className="text-3xl font-bold">Member Directory</h2>
           <p className="text-gray-400">View and manage gym members.</p>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                    type="text" 
                    placeholder="Search members..." 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:border-white/30"
                />
            </div>
            <button className="bg-white/5 border border-white/10 p-2 rounded-xl hover:bg-white/10">
                <Filter size={20} className="text-gray-400" />
            </button>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="bg-black/20 text-xs uppercase text-gray-500 font-bold">
                    <tr>
                        <th className="p-6">Member Name</th>
                        <th className="p-6">Plan</th>
                        <th className="p-6">Status</th>
                        <th className="p-6">Joined Date</th>
                        <th className="p-6 text-right">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {clients.map((client) => (
                        <tr key={client.id} className="hover:bg-white/5 transition">
                            <td className="p-6">
                                <div>
                                    <h4 className="font-bold text-white">{client.name}</h4>
                                    <p className="text-sm text-gray-500">{client.email}</p>
                                </div>
                            </td>
                            <td className="p-6">
                                <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-bold border border-blue-500/20">
                                    {client.plan}
                                </span>
                            </td>
                            <td className="p-6">
                                <span className={`flex items-center gap-2 text-sm font-medium ${
                                    client.status === 'Active' ? 'text-green-400' : 'text-red-400'
                                }`}>
                                    {client.status === 'Active' ? <UserCheck size={14} /> : <UserX size={14} />}
                                    {client.status}
                                </span>
                            </td>
                            <td className="p-6 text-gray-400 font-mono text-sm">
                                {client.joined}
                            </td>
                            <td className="p-6 text-right">
                                <button className="text-gray-500 hover:text-white transition">
                                    <MoreHorizontal />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default ClientManagement;