
    const { useState, useEffect, useMemo, useCallback } = React;
    
    // Города с координатами
    const citiesDB = [
      { name: 'Москва', lat: 55.7558, lon: 37.6173, country: 'Россия' },
      { name: 'Санкт-Петербург', lat: 59.9343, lon: 30.3351, country: 'Россия' },
      { name: 'Сочи', lat: 43.6028, lon: 39.7342, country: 'Россия' },
      { name: 'Казань', lat: 55.8304, lon: 49.0661, country: 'Россия' },
      { name: 'Новосибирск', lat: 55.0084, lon: 82.9357, country: 'Россия' },
      { name: 'Владивосток', lat: 43.1155, lon: 131.8855, country: 'Россия' },
      { name: 'Екатеринбург', lat: 56.8389, lon: 60.6057, country: 'Россия' },
      { name: 'Краснодар', lat: 45.0393, lon: 38.9872, country: 'Россия' },
      { name: 'Самара', lat: 53.2415, lon: 50.2212, country: 'Россия' },
      { name: 'Омск', lat: 54.9885, lon: 73.3242, country: 'Россия' },
      { name: 'Ростов-на-Дону', lat: 47.2357, lon: 39.7015, country: 'Россия' },
      { name: 'Уфа', lat: 54.7388, lon: 55.9721, country: 'Россия' },
      { name: 'Красноярск', lat: 56.0153, lon: 92.8932, country: 'Россия' },
      { name: 'Воронеж', lat: 51.6608, lon: 39.2003, country: 'Россия' },
      { name: 'Пермь', lat: 58.0105, lon: 56.2502, country: 'Россия' },
      { name: 'Волгоград', lat: 48.7080, lon: 44.5133, country: 'Россия' },
      { name: 'Лондон', lat: 51.5074, lon: -0.1278, country: 'Великобритания' },
      { name: 'Париж', lat: 48.8566, lon: 2.3522, country: 'Франция' },
      { name: 'Берлин', lat: 52.5200, lon: 13.4050, country: 'Германия' },
      { name: 'Нью-Йорк', lat: 40.7128, lon: -74.0060, country: 'США' },
      { name: 'Токио', lat: 35.6762, lon: 139.6503, country: 'Япония' },
      { name: 'Дубай', lat: 25.2048, lon: 55.2708, country: 'ОАЭ' },
      { name: 'Стамбул', lat: 41.0082, lon: 28.9784, country: 'Турция' },
      { name: 'Барселона', lat: 41.3851, lon: 2.1734, country: 'Испания' },
      { name: 'Рим', lat: 41.9028, lon: 12.4964, country: 'Италия' },
      { name: 'Амстердам', lat: 52.3676, lon: 4.9041, country: 'Нидерланды' },
      { name: 'Прага', lat: 50.0755, lon: 14.4378, country: 'Чехия' },
      { name: 'Вена', lat: 48.2082, lon: 16.3738, country: 'Австрия' },
      { name: 'Будапешт', lat: 47.4979, lon: 19.0402, country: 'Венгрия' },
      { name: 'Варшава', lat: 52.2297, lon: 21.0122, country: 'Польша' },
      { name: 'Бангкок', lat: 13.7563, lon: 100.5018, country: 'Таиланд' },
      { name: 'Сингапур', lat: 1.3521, lon: 103.8198, country: 'Сингапур' },
      { name: 'Сидней', lat: -33.8688, lon: 151.2093, country: 'Австралия' },
      { name: 'Торонто', lat: 43.6532, lon: -79.3832, country: 'Канада' },
      { name: 'Лос-Анджелес', lat: 34.0522, lon: -118.2437, country: 'США' },
      { name: 'Майами', lat: 25.7617, lon: -80.1918, country: 'США' },
      { name: 'Каир', lat: 30.0444, lon: 31.2357, country: 'Египет' },
      { name: 'Мумбаи', lat: 19.0760, lon: 72.8777, country: 'Индия' },
      { name: 'Сеул', lat: 37.5665, lon: 126.9780, country: 'Южная Корея' },
      { name: 'Пекин', lat: 39.9042, lon: 116.4074, country: 'Китай' },
      { name: 'Шанхай', lat: 31.2304, lon: 121.4737, country: 'Китай' },
      { name: 'Гонконг', lat: 22.3193, lon: 114.1694, country: 'Китай' },
      { name: 'Тель-Авив', lat: 32.0853, lon: 34.7818, country: 'Израиль' },
      { name: 'Афины', lat: 37.9838, lon: 23.7275, country: 'Греция' },
      { name: 'Лиссабон', lat: 38.7223, lon: -9.1393, country: 'Португалия' },
      { name: 'Мадрид', lat: 40.4168, lon: -3.7038, country: 'Испания' },
      { name: 'Мюнхен', lat: 48.1351, lon: 11.5820, country: 'Германия' },
      { name: 'Цюрих', lat: 47.3769, lon: 8.5417, country: 'Швейцария' },
      { name: 'Женева', lat: 46.2044, lon: 6.1432, country: 'Швейцария' },
      { name: 'Осло', lat: 59.9139, lon: 10.7522, country: 'Норвегия' },
      { name: 'Стокгольм', lat: 59.3293, lon: 18.0686, country: 'Швеция' },
      { name: 'Хельсинки', lat: 60.1699, lon: 24.9384, country: 'Финляндия' },
      { name: 'Копенгаген', lat: 55.6761, lon: 12.5683, country: 'Дания' },
      { name: 'Рейкьявик', lat: 64.1466, lon: -21.9426, country: 'Исландия' },
    ];
    
    const WMO_CODES = {
      0: { icon: '☀️', desc: 'Ясно' },
      1: { icon: '🌤️', desc: 'Преимущественно ясно' },
      2: { icon: '⛅', desc: 'Переменная облачность' },
      3: { icon: '☁️', desc: 'Пасмурно' },
      45: { icon: '🌫️', desc: 'Туман' },
      48: { icon: '🌫️', desc: 'Изморозь' },
      51: { icon: '🌦️', desc: 'Морось' },
      53: { icon: '🌧️', desc: 'Умеренная морось' },
      55: { icon: '🌧️', desc: 'Сильная морось' },
      61: { icon: '🌧️', desc: 'Небольшой дождь' },
      63: { icon: '🌧️', desc: 'Дождь' },
      65: { icon: '🌧️', desc: 'Сильный дождь' },
      71: { icon: '🌨️', desc: 'Небольшой снег' },
      73: { icon: '🌨️', desc: 'Снег' },
      75: { icon: '❄️', desc: 'Сильный снег' },
      80: { icon: '🌦️', desc: 'Ливень' },
      81: { icon: '🌧️', desc: 'Умеренный ливень' },
      82: { icon: '⛈️', desc: 'Сильный ливень' },
      95: { icon: '⛈️', desc: 'Гроза' },
      96: { icon: '⛈️', desc: 'Гроза с градом' },
      99: { icon: '⛈️', desc: 'Сильная гроза' },
    };
    
    function getIcon(code) { return WMO_CODES[code]?.icon || '☁️'; }
    function getDesc(code) { return WMO_CODES[code]?.desc || 'Облачно'; }
    function getDayName(dateStr) {
      const days = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
      return days[new Date(dateStr).getDay()];
    }
    
    function App() {
      const [city, setCity] = useState(citiesDB[0]);
      const [search, setSearch] = useState('');
      const [showDropdown, setShowDropdown] = useState(false);
      const [weather, setWeather] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      
      const filteredCities = useMemo(() => {
        if (!search.trim()) return [];
        return citiesDB.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
      }, [search]);
      
      const fetchWeather = useCallback(async (lat, lon) => {
        setLoading(true);
        setError(null);
        try {
          const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,surface_pressure,visibility&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
          );
          if (!res.ok) throw new Error('Ошибка загрузки');
          const data = await res.json();
          setWeather(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }, []);
      
      useEffect(() => {
        fetchWeather(city.lat, city.lon);
      }, [city, fetchWeather]);
      
      const handleCitySelect = (c) => {
        setCity(c);
        setSearch('');
        setShowDropdown(false);
      };
      
      if (loading && !weather) {
        return (
          <div className="loading">
            <div className="spinner"></div>
            <p>Загружаем погоду для {city.name}...</p>
          </div>
        );
      }
      
      if (error) {
        return (
          <div className="error">
            <h2>❌ {error}</h2>
            <button onClick={() => fetchWeather(city.lat, city.lon)}>Повторить</button>
          </div>
        );
      }
      
      const current = weather.current;
      const hourly = weather.hourly;
      const daily = weather.daily;
      
      // Ближайшие 12 часов
      const now = new Date();
      const currentHour = now.getHours();
      const hourlySlice = [];
      for (let i = 0; i < 12; i++) {
        const idx = currentHour + i;
        if (idx < hourly.time.length) {
          hourlySlice.push({
            time: hourly.time[idx].slice(11, 16),
            temp: Math.round(hourly.temperature_2m[idx]),
            code: hourly.weather_code[idx]
          });
        }
      }
      
      const minForecast = Math.min(...daily.temperature_2m_min);
      const maxForecast = Math.max(...daily.temperature_2m_max);
      const range = maxForecast - minForecast || 1;
      
      return (
        <>
          <header className="header">
            <div className="logo">🌤️ WeatherApp</div>
            <div className="search-box">
              <input
                type="text"
                placeholder="Найти город..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setShowDropdown(true); }}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              />
              {showDropdown && filteredCities.length > 0 && (
                <div className="search-dropdown">
                  {filteredCities.map(c => (
                    <div key={c.name} className="search-item" onMouseDown={() => handleCitySelect(c)}>
                      <span>{c.name}</span>
                      <span>{c.country}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </header>
          
          <main className="main">
            <div className="hero-weather">
              <div className="hw-content">
                <div className="hw-left">
                  <div className="hw-city">{city.name}, {city.country}</div>
                  <h1>{getDesc(current.weather_code)}</h1>
                  <div className="hw-date">{now.toLocaleDateString('ru-RU', {weekday:'long', day:'numeric', month:'long'})}</div>
                </div>
                <div className="hw-right">
                  <span className="hw-icon">{getIcon(current.weather_code)}</span>
                  <div className="hw-temp">{Math.round(current.temperature_2m)}°</div>
                  <div className="hw-feels">Ощущается как {Math.round(current.apparent_temperature)}°</div>
                </div>
              </div>
            </div>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">💧</div>
                <span className="stat-val">{current.relative_humidity_2m}%</span>
                <span className="stat-label">Влажность</span>
              </div>
              <div className="stat-card">
                <div className="stat-icon">💨</div>
                <span className="stat-val">{current.wind_speed_10m} м/с</span>
                <span className="stat-label">Ветер</span>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📊</div>
                <span className="stat-val">{Math.round(current.surface_pressure)}</span>
                <span className="stat-label">Давление, гПа</span>
              </div>
              <div className="stat-card">
                <div className="stat-icon">👁️</div>
                <span className="stat-val">{(current.visibility / 1000).toFixed(1)} км</span>
                <span className="stat-label">Видимость</span>
              </div>
            </div>
            
            <div className="hourly-section">
              <h3>⏰ Почасовой прогноз</h3>
              <div className="hourly-scroll">
                {hourlySlice.map((h, i) => (
                  <div key={i} className="hour-item">
                    <div className="hour-time">{h.time}</div>
                    <span className="hour-icon">{getIcon(h.code)}</span>
                    <div className="hour-temp">{h.temp}°</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="forecast-section">
              <h3>📅 Прогноз на 7 дней</h3>
              <div className="forecast-list">
                {daily.time.map((date, i) => {
                  const left = ((daily.temperature_2m_min[i] - minForecast) / range) * 100;
                  const width = ((daily.temperature_2m_max[i] - daily.temperature_2m_min[i]) / range) * 100;
                  return (
                    <div key={i} className="forecast-row">
                      <span className="f-day">{i === 0 ? 'Сегодня' : getDayName(date)}</span>
                      <div className="f-bar-wrap">
                        <div className="f-bar" style={{ left: `${left}%`, width: `${width}%` }}></div>
                      </div>
                      <span className="f-low">{Math.round(daily.temperature_2m_min[i])}°</span>
                      <span className="f-high">{Math.round(daily.temperature_2m_max[i])}°</span>
                      <span className="f-icon">{getIcon(daily.weather_code[i])}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </main>
        </>
      );
    }
    
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
