import React from 'react';
import { TrendingUp, BarChart3 } from 'lucide-react';

export default function StatsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">الإحصائيات</h2>
      <div className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
          <TrendingUp className="w-6 h-6 text-green-600 mb-2"/>
          <p>معدل الشفاء</p>
          <h3>92%</h3>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
          <BarChart3 className="w-6 h-6 text-blue-600 mb-2"/>
          <p>دقة النظام</p>
          <h3>98%</h3>
        </div>
      </div>
    </div>
  );
}
