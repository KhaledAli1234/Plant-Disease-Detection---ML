import React from 'react';
import { Leaf, Camera, Activity, CheckCircle, AlertCircle, FileText } from 'lucide-react';

export default function Home({ setCurrentPage, history }) {
  return (
    <div className="space-y-6">
      {/* Hero Section with Plants Image */}
      <div className="relative bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 rounded-3xl shadow-2xl overflow-hidden h-80">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
            {/* Left Plant */}
            <circle cx="100" cy="200" r="80" fill="white" opacity="0.3"/>
            <circle cx="90" cy="180" r="60" fill="white" opacity="0.4"/>
            <circle cx="110" cy="170" r="50" fill="white" opacity="0.5"/>
            <rect x="95" y="200" width="10" height="120" fill="white" opacity="0.3"/>
            
            {/* Center Plant */}
            <circle cx="400" cy="150" r="100" fill="white" opacity="0.3"/>
            <circle cx="380" cy="120" r="80" fill="white" opacity="0.4"/>
            <circle cx="420" cy="110" r="70" fill="white" opacity="0.5"/>
            <circle cx="400" cy="90" r="60" fill="white" opacity="0.6"/>
            <rect x="395" y="150" width="10" height="150" fill="white" opacity="0.3"/>
            
            {/* Right Plant */}
            <circle cx="700" cy="220" r="70" fill="white" opacity="0.3"/>
            <circle cx="690" cy="200" r="55" fill="white" opacity="0.4"/>
            <circle cx="710" cy="190" r="45" fill="white" opacity="0.5"/>
            <rect x="695" y="220" width="10" height="100" fill="white" opacity="0.3"/>
            
            {/* Small leaves scattered */}
            <ellipse cx="250" cy="100" rx="30" ry="15" fill="white" opacity="0.4" transform="rotate(-30 250 100)"/>
            <ellipse cx="550" cy="120" rx="35" ry="18" fill="white" opacity="0.4" transform="rotate(45 550 120)"/>
            <ellipse cx="300" cy="280" rx="25" ry="12" fill="white" opacity="0.4" transform="rotate(-45 300 280)"/>
            <ellipse cx="600" cy="300" rx="28" ry="14" fill="white" opacity="0.4" transform="rotate(30 600 300)"/>
          </svg>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8">
          <div className="bg-white/10 backdrop-blur-md rounded-full p-6 mb-6 animate-pulse">
            <Leaf className="w-16 h-16 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            احمِ نباتاتك بالذكاء الاصطناعي
          </h2>
          <p className="text-xl text-white/90 mb-6 max-w-2xl">
            اكتشف الأمراض مبكراً واحصل على العلاج المناسب لنباتاتك
          </p>
          <button
            onClick={() => setCurrentPage('detect')}
            className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-3"
          >
            <Camera className="w-6 h-6" />
            <span>ابدأ الفحص الآن</span>
          </button>
        </div>
        
        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-4 h-4 bg-white rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce" style={{animationDelay: '0.5s'}}>
          <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-bounce" style={{animationDelay: '1s'}}>
          <div className="w-5 h-5 bg-white rounded-full opacity-40"></div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-xl">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">إجمالي الفحوصات</p>
              <h3 className="text-3xl font-bold text-gray-800">24</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-4 rounded-xl">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">نباتات صحية</p>
              <h3 className="text-3xl font-bold text-gray-800">18</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-red-400 to-orange-600 p-4 rounded-xl">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">نباتات مريضة</p>
              <h3 className="text-3xl font-bold text-gray-800">6</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">إجراءات سريعة</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => setCurrentPage('detect')}
            className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-colors border-2 border-green-200"
          >
            <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-3 rounded-lg">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <h4 className="font-bold text-gray-800">فحص جديد</h4>
              <p className="text-sm text-gray-600">ارفع صورة للكشف عن الأمراض</p>
            </div>
          </button>

          <button
            onClick={() => setCurrentPage('history')}
            className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-colors border-2 border-blue-200"
          >
            <div className="bg-gradient-to-br from-blue-400 to-cyan-600 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <h4 className="font-bold text-gray-800">عرض السجل</h4>
              <p className="text-sm text-gray-600">تصفح الفحوصات السابقة</p>
            </div>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">آخر النشاطات</h3>
        <div className="space-y-3">
          {history.slice(0, 3).map(item => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  item.percentage > 50 ? 'bg-red-100' : 'bg-green-100'
                }`}>
                  {item.percentage > 50 ? (
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  ) : (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  )}
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-gray-800">{item.plant}</h4>
                  <p className="text-sm text-gray-600">{item.disease}</p>
                </div>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-800">{item.percentage}%</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
