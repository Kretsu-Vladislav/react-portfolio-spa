import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import MyCity from "./pages/MyCity";
import MyFuture from "./pages/MyFuture";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900">
        {/* Шапка сайту з меню */}
        <Header />
        
        {/* Головний контент сайту */}
        <main className="flex-grow px-4">
          <Routes>
            {/* Перенаправляємо з головного URL прямо на сторінку про мене */}
            <Route path="/" element={<Navigate to="/about" replace />} />
            
            <Route path="/about" element={<AboutMe />} />
            <Route path="/my-city" element={<MyCity />} />
            <Route path="/my-future" element={<MyFuture />} />
            
            {/* Якщо ввели невідому адресу — повертаємо на головну */}
            <Route path="*" element={<Navigate to="/about" replace />} />
          </Routes>
        </main>
        
        {/* Підвал сайту */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;