import React, { useState } from 'react';
import { Upload, Leaf, AlertCircle, CheckCircle, LogIn, User, Lock, Camera, TrendingUp, Activity, FileText, Home, BarChart3, Bell, Settings, Menu, X } from 'lucide-react';

export default function PlantDiseaseDetector() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [history, setHistory] = useState([
    { id: 1, plant: 'طماطم', disease: 'تبقع الأوراق', date: '2024-12-05', percentage: 85 },
    { id: 2, plant: 'بطاطس', disease: 'نبات صحي', date: '2024-12-04', percentage: 15 },
    { id: 3, plant: 'خيار', disease: 'العفن الرمادي', date: '2024-12-03', percentage: 72 }
  ]);

  const handleLogin = () => {
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setResult(null);
    }
  };

  const analyzeImage = () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const diseases = [
        { name: 'تبقع الأوراق البكتيري', percentage: 85, treatment: 'استخدام مبيد فطري نحاسي، إزالة الأوراق المصابة، تحسين التهوية', severity: 'high' },
        { name: 'العفن الرمادي', percentage: 72, treatment: 'تقليل الرطوبة، استخدام مبيد بوتريتيس، تحسين الصرف', severity: 'medium' },
        { name: 'صدأ الأوراق', percentage: 68, treatment: 'رش مبيد فطري كبريتي، إزالة الأجزاء المصابة فوراً', severity: 'medium' },
        { name: 'نبات صحي', percentage: 15, treatment: 'لا يوجد علاج مطلوب، استمر في العناية المنتظمة', severity: 'low' }
      ];
      
      const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
      setResult(randomDisease);
      setIsAnalyzing(false);
    }, 2000);
  };

  // Login Page
  if (!isLoggedIn) {
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
              onClick={handleLogin}
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

  // Main App Pages
  const Sidebar = () => (
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
            { id: 'stats', icon: BarChart3, label: 'الإحصائيات' }
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

  const HomePage = () => (
    <div className="space-y-6">
      {/* Hero Section with Plants Image */}
      <div className="relative bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 rounded-3xl shadow-2xl overflow-hidden h-80">
        {/* Decorative Plant Illustrations */}
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

  const DetectPage = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">كشف أمراض النباتات</h2>
        
        <div className="border-4 border-dashed border-green-300 rounded-2xl p-8 text-center hover:border-green-500 transition-colors bg-gradient-to-br from-green-50 to-emerald-50">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <label htmlFor="image-upload" className="cursor-pointer">
            {imagePreview ? (
              <div className="space-y-4">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-h-96 mx-auto rounded-xl shadow-lg"
                />
                <p className="text-green-600 font-semibold">اضغط لتغيير الصورة</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-24 h-24 rounded-full mx-auto flex items-center justify-center animate-pulse">
                  <Camera className="w-12 h-12 text-white" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-700 mb-2">
                    اسحب الصورة هنا أو اضغط للرفع
                  </p>
                  <p className="text-sm text-gray-500">
                    PNG, JPG أو JPEG (حجم أقصى 5MB)
                  </p>
                </div>
              </div>
            )}
          </label>
        </div>

        {selectedImage && !result && (
          <button
            onClick={analyzeImage}
            disabled={isAnalyzing}
            className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg disabled:opacity-50"
          >
            {isAnalyzing ? (
              <>
                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                <span>جاري التحليل بالذكاء الاصطناعي...</span>
              </>
            ) : (
              <>
                <Upload className="w-6 h-6" />
                <span>بدء التحليل</span>
              </>
            )}
          </button>
        )}
      </div>

      {result && (
        <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
          <div className="text-center mb-6">
            <div className={`inline-block p-4 rounded-full mb-4 ${
              result.percentage > 50 
                ? 'bg-gradient-to-br from-red-400 to-orange-500' 
                : 'bg-gradient-to-br from-green-400 to-emerald-500'
            }`}>
              {result.percentage > 50 ? (
                <AlertCircle className="w-12 h-12 text-white" />
              ) : (
                <CheckCircle className="w-12 h-12 text-white" />
              )}
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">{result.name}</h3>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {result.percentage}%
              </div>
              <span className="text-gray-600 text-lg">دقة الكشف</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="h-6 bg-gray-200 rounded-full overflow-hidden shadow-inner">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${
                  result.percentage > 50
                    ? 'bg-gradient-to-r from-red-400 to-orange-500'
                    : 'bg-gradient-to-r from-green-400 to-emerald-500'
                }`}
                style={{ width: `${result.percentage}%` }}
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200 mb-4">
            <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-blue-600" />
              <span>العلاج الموصى به:</span>
            </h4>
            <p className="text-gray-700 leading-relaxed">{result.treatment}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => {
                setResult(null);
                setSelectedImage(null);
                setImagePreview(null);
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              فحص جديد
            </button>
            <button
              onClick={() => setCurrentPage('home')}
              className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              الصفحة الرئيسية
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const HistoryPage = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">سجل الفحوصات</h2>
      <div className="space-y-4">
        {history.map(item => (
          <div key={item.id} className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all border-r-4 border-green-500">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                item.percentage > 50 ? 'bg-red-100' : 'bg-green-100'
              }`}>
                {item.percentage > 50 ? (
                  <AlertCircle className="w-8 h-8 text-red-600" />
                ) : (
                  <CheckCircle className="w-8 h-8 text-green-600" />
                )}
              </div>
              <div className="text-right">
                <h4 className="font-bold text-gray-800 text-lg">{item.plant}</h4>
                <p className="text-gray-600">{item.disease}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800">{item.percentage}%</p>
              <p className="text-sm text-gray-600">نسبة التطابق</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const StatsPage = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">الإحصائيات</h2>
        
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 font-medium">نباتات صحية</span>
              <span className="text-green-600 font-bold">75%</span>
            </div>
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 w-3/4 rounded-full"></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 font-medium">نباتات مريضة</span>
              <span className="text-red-600 font-bold">25%</span>
            </div>
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-red-400 to-orange-500 w-1/4 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
              <TrendingUp className="w-8 h-8 text-green-600 mb-2" />
              <p className="text-sm text-gray-600">معدل الشفاء</p>
              <p className="text-3xl font-bold text-gray-800">92%</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
              <BarChart3 className="w-8 h-8 text-blue-600 mb-2" />
              <p className="text-sm text-gray-600">دقة النظام</p>
              <p className="text-3xl font-bold text-gray-800">98%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
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

        {/* Content */}
        <div className="flex-1 p-4 lg:p-8 overflow-y-auto">
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'detect' && <DetectPage />}
          {currentPage === 'history' && <HistoryPage />}
          {currentPage === 'stats' && <StatsPage />}
        </div>
      </div>

      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}