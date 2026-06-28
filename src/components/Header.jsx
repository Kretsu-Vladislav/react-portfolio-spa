import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path ? "text-indigo-600 font-bold" : "text-slate-600 hover:text-indigo-500";

  return (
    <header className="bg-white shadow-sm border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/about" className="text-xl font-black text-slate-800 tracking-tight">
          DEV.<span className="text-indigo-600">PORTFOLIO</span>
        </Link>
        <nav>
          <ul className="flex space-x-6 font-medium text-sm">
            <li><Link to="/about" className={`${isActive("/about")} transition-colors`}>Про мене</Link></li>
            <li><Link to="/my-city" className={`${isActive("/my-city")} transition-colors`}>Моє місто</Link></li>
            <li><Link to="/my-future" className={`${isActive("/my-future")} transition-colors`}>Мій розвиток</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;