import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function History({ history }) {
  return (
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
}
