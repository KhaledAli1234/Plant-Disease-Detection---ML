import React, { useState } from 'react';
import { Menu, X, Leaf, Home, Camera, FileText, BarChart3, Settings, Bell } from 'lucide-react';

export default function Layout({ children, currentPage, setCurrentPage, username }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transition-transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0`}>
        <div className="p-6">
          <h2 className="text-lg font-bold mb-4">{username}</h2>
          <nav className="space-y-2">
            {[
              { id: 'home', label: 'الرئيسية', icon: Home },
              { id: 'detect', label: 'كشف الأمراض', icon: Camera },
              { id: 'history', label: 'السجل', icon: FileText },
              { id: 'stats', label: 'الإحصائيات', icon: BarChart3 },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => { setCurrentPage(item.id); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-2 p-2 rounded ${currentPage === item.id ? 'bg-green-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <div className="flex-1 flex flex-col">
        <div className="bg-white shadow p-4 flex justify-between items-center">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
            <Menu />
          </button>
          <h1 className="font-bold">PlantGuard AI</h1>
          <div className="flex gap-4">
            <Bell />
            <Settings />
          </div>
        </div>
        <div className="p-4 flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
}
