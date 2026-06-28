import React, { useState, useEffect } from "react";

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Робимо запит на погоду в Черкасах (Cherkasy) через відкрите API wttr.in у форматі JSON
    fetch("https://wttr.in/Cherkasy?format=j1")
      .then((res) => {
        if (!res.ok) throw new Error("Помилка отримання даних");
        return res.json();
      })
      .then((data) => {
        const current = data.current_condition[0];
        const area = data.nearest_area[0];
        setWeather({
          temp: current.temp_C,
          desc: current.lang_uk ? current.lang_uk[0].value : current.weatherDesc[0].value,
          city: "Черкаси",
          country: area.country[0].value,
          lat: area.latitude,
          lon: area.longitude
        });
        setLoading(false);
      })
      .catch((err) => {
        setError("Не вдалося завантажити погоду");
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-8">
        <h1 className="text-3xl font-extrabold text-slate-800 mb-4">Мій рідний край — Черкащина</h1>
        <p className="text-slate-600 leading-relaxed mb-4">
          Я родом із затишного містечка в Черкаській області, розташованого неподалік величної річки Дніпро. 
          Цей край славиться своєю неймовірною природою: неозорими полями, густими лісовими посадками та тихими дорогами, 
          які ідеально підходять для уособлених вечірніх прогулянок та глибоких роздумів під шелест листя.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Черкащина — це географічне серце України, земля з багатою козацькою історією, спокійним життєвим ритмом та чистим повітрям, 
          куди завжди приємно повертатися під час канікул, щоб відпочити від галасливого столичного гуртожитку.
        </p>
      </div>

      {/* Блок API Погоди відповідно до вимог */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">🌤️ Поточна погода в регіоні</h2>
        
        {loading && (
          <div className="py-6 text-center text-sm text-slate-400 animate-pulse">
            Оновлення синоптичних даних...
          </div>
        )}

        {error && (
          <div className="p-4 bg-rose-50 text-rose-600 text-sm rounded-xl border border-rose-100">
            {error}. Виведено стандартні координати: 49.44° N, 32.06° E.
          </div>
        )}

        {weather && !loading && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-indigo-50/40 rounded-xl border border-indigo-100/50">
              <span className="text-[10px] uppercase font-bold text-indigo-500 block mb-1">Місто / Країна</span>
              <p className="text-lg font-bold text-slate-800">{weather.city}, {weather.country}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Температура & Стан</span>
              <p className="text-lg font-bold text-slate-800">{weather.temp}°C, <span className="text-sm font-normal text-slate-500">{weather.desc}</span></p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Гео-координати</span>
              <p className="text-sm font-mono font-bold text-slate-700 mt-1">{parseFloat(weather.lat).toFixed(2)}° N, {parseFloat(weather.lon).toFixed(2)}° E</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCity;