import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Detect from './Pages/Detect';
import History from './Pages/History';

export default function App() {
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

const analyzeImage = async () => {
  if (!selectedImage) return;
  setIsAnalyzing(true);

  const formData = new FormData();
  formData.append("file", selectedImage);

  try {
    const res = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      body: formData
    });

    if (!res.ok) {
      throw new Error("Server error: " + res.status);
    }

    const data = await res.json();

    const resultObj = {
      name: data.disease,
      percentage: Math.round(data.severity_ratio * 100),
      treatment: data.treatment
    };

    setResult(resultObj);

    setHistory(prev => [
      {
        id: prev.length + 1,
        plant: data.disease.split("___")[0] || "Unknown",
        disease: data.disease,
        date: new Date().toISOString().split("T")[0],
        percentage: resultObj.percentage
      },
      ...prev
    ]);
  } catch (err) {
    console.error(err);
    alert("Error connecting to server!");
  } finally {
    setIsAnalyzing(false);
  }
};


  if (!isLoggedIn) {
    return (
      <Login 
        setIsLoggedIn={setIsLoggedIn} 
        username={username} setUsername={setUsername} 
        password={password} setPassword={setPassword} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex">
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        username={username} 
        setIsLoggedIn={setIsLoggedIn} 
      />
      <div className="flex-1 flex flex-col">
        <Header setSidebarOpen={setSidebarOpen} username={username} />
        <div className="flex-1 p-4 lg:p-8 overflow-y-auto">
          {currentPage === 'home' && (
            <Home setCurrentPage={setCurrentPage} history={history} />
          )}
          {currentPage === 'detect' && (
            <Detect
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              imagePreview={imagePreview}
              setImagePreview={setImagePreview}
              analyzeImage={analyzeImage}
              result={result}
              setResult={setResult}
              isAnalyzing={isAnalyzing}
              setCurrentPage={setCurrentPage}
            />
          )}
          {currentPage === 'history' && (
            <History history={history} />
          )}
        </div>
      </div>
    </div>
  );
}
