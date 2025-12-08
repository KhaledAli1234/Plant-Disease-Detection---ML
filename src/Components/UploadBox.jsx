import React from 'react';
import { Camera, Upload } from 'lucide-react';

export default function UploadCard({
  selectedImage,
  setSelectedImage,
  imagePreview,
  setImagePreview,
  analyzeImage,
  isAnalyzing
}) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        كشف أمراض النباتات
      </h2>

      <div className="border-4 border-dashed border-green-300 rounded-2xl p-8 text-center hover:border-green-500 transition-colors bg-gradient-to-br from-green-50 to-emerald-50">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
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

      {selectedImage && (
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
  );
}
