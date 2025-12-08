import React from 'react';
import { Menu, Leaf, Bell, Settings } from 'lucide-react';

export default function Header({ setSidebarOpen, username }) {
  return (
    <div className="bg-white shadow-md p-4 lg:p-6 flex items-center justify-between">
      <button 
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
      >
        <Menu className="w-6 h-6 text-gray-600" />
      </button>
      
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-2 rounded-lg lg:hidden">
          <Leaf className="w-6 h-6 text-white" />
        </div>
        <div className="text-right">
          <h1 className="text-xl font-bold text-gray-800">مرحباً، {username}!</h1>
          <p className="text-sm text-gray-600">نظام الكشف الذكي عن أمراض النباتات</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-gray-100 rounded-lg relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Settings className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
