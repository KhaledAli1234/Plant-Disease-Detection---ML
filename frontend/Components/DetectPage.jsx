import React from 'react';
import { Upload, Camera, Leaf, AlertCircle, CheckCircle } from 'lucide-react';

export default function DetectPage({ selectedImage, setSelectedImage, imagePreview, setImagePreview, result, setResult, analyzeImage, setCurrentPage, isAnalyzing }) {

  const handleReset = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setResult(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
      setResult(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">كشف أمراض النباتات</h2>
        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="upload"/>
        <label htmlFor="upload" className="cursor-pointer">
          {imagePreview ? <img src={imagePreview} alt="preview" className="mx-auto max-h-96"/> : <Camera className="mx-auto w-12 h-12 text-green-500"/>}
        </label>
        {selectedImage && !result && (
          <button onClick={analyzeImage} disabled={isAnalyzing} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-xl">
            {isAnalyzing ? 'جاري التحليل...' : 'بدء التحليل'}
          </button>
        )}
        {result && (
          <div className="mt-4">
            <h3>{result.name}</h3>
            <p>{result.percentage}%</p>
            <p>{result.treatment}</p>
            <button onClick={handleReset} className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-xl">فحص جديد</button>
            <button onClick={() => setCurrentPage('home')} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-xl">الرئيسية</button>
          </div>
        )}
      </div>
    </div>
  );
}
