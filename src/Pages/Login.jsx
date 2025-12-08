import React, { useState } from 'react';
import { LogIn, Leaf, User, Lock } from 'lucide-react';

export default function Login({ setIsLoggedIn, username, setUsername, password, setPassword }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md transform hover:scale-105 transition-all duration-300">
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-full mb-4 animate-bounce">
            <Leaf className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
            PlantGuard AI
          </h1>
          <p className="text-gray-600">نظام ذكي للكشف عن أمراض النباتات</p>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <User className="absolute right-3 top-3 text-green-500 w-5 h-5" />
            <input
              type="text"
              placeholder="اسم المستخدم"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-400 focus:outline-none transition-colors text-right"
            />
          </div>

          <div className="relative">
            <Lock className="absolute right-3 top-3 text-green-500 w-5 h-5" />
            <input
              type="password"
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-400 focus:outline-none transition-colors text-right"
            />
          </div>

          <button
            onClick={() => { if(username && password) setIsLoggedIn(true); }}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            <LogIn className="w-5 h-5" />
            <span>تسجيل الدخول</span>
          </button>
        </div>
      </div>
    </div>
  );
}
