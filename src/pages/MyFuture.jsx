import React from "react";

const MyFuture = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Картка Бачення майбутнього */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-8">
        <h1 className="text-3xl font-extrabold text-slate-800 mb-3">🧮 Моє майбутнє у професії</h1>
        <p className="text-slate-600 leading-relaxed mb-4">
          Я чітко усвідомив, що хочу стати саме <strong>професійним математиком-дослідником</strong>. 
          Мене не приваблює звичайна рутинна розробка програмного забезпечення чи побудова користувацьких інтерфейсів. 
          Моя мета — чиста наука, робота з абстрактними структурами та пошук фундаментальних закономірностей.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Бачу себе в ролі наукового співробітника в провідному дослідному центрі або R&D-лабораторії, де математичний апарат 
          використовується для розв'язання найскладніших теоретичних та прикладних задач людства.
        </p>
      </div>

      {/* Таймлайн 3 кроків за вимогами методички */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">🎯 3 конкретні кроки до мети</h2>
        
        <div className="relative border-l-2 border-indigo-100 pl-6 space-y-8">
          {/* Крок 1 */}
          <div className="relative">
            <div className="absolute -left-[31px] top-0 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white"></div>
            <h3 className="font-bold text-slate-800 text-base">Крок 1: Глибоке вивчення фундаментальних дисциплін</h3>
            <p className="text-slate-500 text-sm mt-1">
              Освоєння класичної академічної бази: математичного аналізу, вищої алгебри, теорії ймовірностей та математичної логіки. 
              Це необхідно для формування строгого математичного мислення та вміння будувати аналітичні доведення.
            </p>
          </div>

          {/* Крок 2 */}
          <div className="relative">
            <div className="absolute -left-[31px] top-0 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white"></div>
            <h3 className="font-bold text-slate-800 text-base">Крок 2: Дослідження суміжних та просунутих розділів</h3>
            <p className="text-slate-500 text-sm mt-1">
              Перехід до складніших теоретичних систем — диференціальних рівнянь, теорії міри та функціонального аналізу. 
              Побудова власних аналітичних моделей для опису абстрактних і прикладних логічних процесів.
            </p>
          </div>

          {/* Крок 3 */}
          <div className="relative">
            <div className="absolute -left-[31px] top-0 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white"></div>
            <h3 className="font-bold text-slate-800 text-base">Крок 3: Наукова діяльність та інтеграція у спільноту</h3>
            <p className="text-slate-500 text-sm mt-1">
              Написання перших дослідницьких робіт, участь у наукових семінарах та співпраця з однодумцями 
              задля розв'язання складних теоретичних задач у галузі чистої математики.
            </p>
          </div>
        </div>
      </div>

      {/* Мотиваційна цитата */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-950 text-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
        <p className="italic text-lg text-slate-200">
          "Математика — це мова, якою написана книга природи."
        </p>
        <span className="text-xs text-indigo-400 font-mono mt-2 block font-semibold">— Галілео Галілей</span>
      </div>
    </div>
  );
};

export default MyFuture;