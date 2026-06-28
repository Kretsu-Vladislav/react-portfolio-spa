import React from "react";

const AboutMe = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Профайл */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-8 flex flex-col md:flex-row gap-6 items-center">
        <div className="w-24 h-24 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-4xl text-white font-black shadow-md">
          M
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 text-center md:text-left">Привіт, я початківець розробник</h1>
          <p className="text-slate-500 mt-2 leading-relaxed text-center md:text-left">
            Навчаюся на комп'ютерних науках, проте маю глибоку пристрасть до чистої логіки та фундаментальної математики. 
            Ціную системний підхід, спокійну відокремлену атмосферу для аналізу та створення лаконічного, працюючого коду.
          </p>
        </div>
      </div>

      {/* Блок цінностей та захоплень */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-3">📋 Мої цінності</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Прагнення до суті речей, а не просто поверхневого використання готових інструментів. 
            Вважаю, що хороша архітектура коду подібна до красивих математичних доведень — вона має бути строгою, логічною та вичерпною.
          </p>
        </div>
        
        {/* Оновлений блок захоплень суто про вищу математику */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-3">📐 Наукові захоплення</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Моє главне захоплення поза комерційною розробкою — чиста математика. Поглиблено вивчаю &nbsp;
            <strong>математичний аналіз, диференціальні рівняння, лінійну алгебру та формальну логіку</strong>. 
            Мене захоплює строгість і краса математичних систем, дослідження функцій та побудова аналітичних моделей, що описують фундаментальні закони логіки.
          </p>
        </div>
      </div>

      {/* Блок Проєкти за категоріями */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-extrabold text-slate-800 mb-6">📂 Мої проєкти за категоріями</h2>
        
        <div className="space-y-6">
          {/* HTML + CSS */}
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-bold text-slate-700 mb-2 flex items-center gap-2">🎨 HTML + CSS</h3>
            <p className="text-xs text-slate-400 mb-3">БазовіBN лабораторні роботи з адаптивної верстки та стилізації.</p>
            <a 
              href="https://github.com/Kretsu-Vladislav/html-css-landing.git" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-block px-4 py-1.5 bg-slate-50 hover:bg-slate-100 text-xs text-slate-600 font-semibold rounded-lg border border-slate-200 transition-colors cursor-pointer"
            >
              Переглянути репозиторій 🔗
            </a>
          </div>

          {/* JavaScript */}
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-bold text-slate-700 mb-2 flex items-center gap-2">⚡ JavaScript</h3>
            <p className="text-xs text-slate-400 mb-3">Скрипти обробки даних, калькулятори та інтерактивні елементи.</p>
            <a 
              href="https://github.com/Kretsu-Vladislav/js-array.git" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-block px-4 py-1.5 bg-slate-50 hover:bg-slate-100 text-xs text-slate-600 font-semibold rounded-lg border border-slate-200 transition-colors cursor-pointer"
            >
              Переглянути репозиторій 🔗
            </a>
          </div>

          {/* React */}
          <div>
            <h3 className="font-bold text-indigo-600 mb-2 flex items-center gap-2">⚛️ React (Сучасні SPA)</h3>
            <p className="text-xs text-slate-400 mb-3">Повноцінні додатки з використанням Tailwind CSS, компонентів, React Router та API.</p>
            <div className="flex flex-wrap gap-3">
              {/* Посилання на лабу з Tailwind та картками */}
              <a 
                href="https://github.com/Kretsu-Vladislav/react-props.git" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-block px-4 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-xs text-indigo-600 font-semibold rounded-lg border border-indigo-100 transition-colors cursor-pointer"
              >
                Лаби 12-15 (Картки + Tailwind) 🔗
              </a>
              
              {/* Посилання на лабу з API галереєю */}
              <a 
                href="https://github.com/Kretsu-Vladislav/react-api-gallery.git" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-block px-4 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-xs text-indigo-600 font-semibold rounded-lg border border-indigo-100 transition-colors cursor-pointer"
              >
                Лаба 17 (Галерея з API) 🔗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;