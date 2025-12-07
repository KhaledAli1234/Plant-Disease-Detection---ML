// import React, { useState } from 'react';
// import Layout from './Layout';
// import HomePage from './HomePage';
// import DetectPage from './DetectPage';
// import HistoryPage from './HistoryPage';
// import StatsPage from './StatsPage';

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');
//   const [currentPage, setCurrentPage] = useState('home');
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const historyData = [
//     { id: 1, plant: 'طماطم', disease: 'تبقع الأوراق', date: '2024-12-05', percentage: 85 },
//     { id: 2, plant: 'بطاطس', disease: 'نبات صحي', date: '2024-12-04', percentage: 15 },
//     { id: 3, plant: 'خيار', disease: 'العفن الرمادي', date: '2024-12-03', percentage: 72 }
//   ];

//   if (!isLoggedIn) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div>
//           <input placeholder="اسم المستخدم" value={username} onChange={e => setUsername(e.target.value)} />
//           <button onClick={() => setIsLoggedIn(true)}>Login</button>
//         </div>
//       </div>
//     );
//   }

//   const renderPage = () => {
//     switch(currentPage) {
//       case 'home': return <HomePage setCurrentPage={setCurrentPage} history={historyData} />;
//       case 'detect': return <DetectPage />;
//       case 'history': return <HistoryPage history={historyData} />;
//       case 'stats': return <StatsPage />;
//       default: return <HomePage setCurrentPage={setCurrentPage} history={historyData} />;
//     }
//   };

//   return (
//     <Layout
//       username={username}
//       sidebarOpen={sidebarOpen}
//       setSidebarOpen={setSidebarOpen}
//       currentPage={currentPage}
//       setCurrentPage={setCurrentPage}
//     >
//       {renderPage()}
//     </Layout>
//   );
// }
