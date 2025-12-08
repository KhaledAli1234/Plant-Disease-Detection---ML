import React from 'react';
import { Leaf, Home, Camera, FileText, BarChart3, X } from 'lucide-react';

export default function Sidebar({ sidebarOpen, setSidebarOpen, currentPage, setCurrentPage, username, setIsLoggedIn }) {
  return (
    <div className={`fixed inset-y-0 right-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 lg:relative lg:w-64`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-2 rounded-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-gray-800 text-sm">PlantGuard</h2>
              <p className="text-xs text-gray-500">{username}</p>
            </div>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <nav className="space-y-2">
          {[
            { id: 'home', icon: Home, label: 'الرئيسية' },
            { id: 'detect', icon: Camera, label: 'كشف الأمراض' },
            { id: 'history', icon: FileText, label: 'السجل' },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => { setCurrentPage(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                currentPage === item.id
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <button
          onClick={() => setIsLoggedIn(false)}
          className="w-full mt-8 px-4 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors font-medium"
        >
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
}
