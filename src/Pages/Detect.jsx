import React, { useState } from 'react';
import UploadCard from '../Components/UploadBox';
import ResultCard from '../Components/ResultCard';

export default function Detect({ 
  selectedImage, setSelectedImage, 
  imagePreview, setImagePreview,
  analyzeImage, result, setResult, 
  isAnalyzing, setCurrentPage 
}) {
  
  return (
    <div className="space-y-6">
      <UploadCard
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        imagePreview={imagePreview}
        setImagePreview={setImagePreview}
        analyzeImage={analyzeImage}
        isAnalyzing={isAnalyzing}
      />
      
      {result && (
        <ResultCard
          result={result}
          setResult={setResult}
          setSelectedImage={setSelectedImage}
          setImagePreview={setImagePreview}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}
