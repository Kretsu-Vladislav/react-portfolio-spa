import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 mt-auto py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400 gap-4">
        <div>
          © 2026 SPA Portfolio. Виконано в рамках лабораторних робіт.
        </div>
        <div className="flex space-x-4 font-medium text-slate-500">
          <a href="https://github.com/Kretsu-Vladislav" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">GitHub</a>
          <a href="https://t.me/partizanshyzoid" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">Telegram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;