import React from 'react';
import { Leaf, AlertCircle, CheckCircle } from 'lucide-react';

export default function ResultCard({
  result,
  setResult,
  setSelectedImage,
  setImagePreview,
  setCurrentPage
}) {
  if (!result) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
      <div className="text-center mb-6">
        <div
          className={`inline-block p-4 rounded-full mb-4 ${
            result.percentage > 50
              ? 'bg-gradient-to-br from-red-400 to-orange-500'
              : 'bg-gradient-to-br from-green-400 to-emerald-500'
          }`}
        >
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
  );
}
