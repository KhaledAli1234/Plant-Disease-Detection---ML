import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function HistoryPage({ history }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">سجل الفحوصات</h2>
      <div className="space-y-4">
        {history.map(item => (
          <div key={item.id} className="flex justify-between bg-gray-50 p-4 rounded-xl">
            <div>
              <h4>{item.plant}</h4>
              <p>{item.disease}</p>
            </div>
            <div>
              <p>{item.percentage}%</p>
              {item.percentage > 50 ? <AlertCircle className="text-red-600"/> : <CheckCircle className="text-green-600"/>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
