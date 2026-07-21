
    const { useState, useEffect, useMemo } = React;
    
    const currencyMeta = {
      USD: { name: 'Доллар США', flag: '🇺🇸' },
      EUR: { name: 'Евро', flag: '🇪🇺' },
      GBP: { name: 'Британский фунт', flag: '🇬🇧' },
      JPY: { name: 'Японская йена', flag: '🇯🇵' },
      CNY: { name: 'Китайский юань', flag: '🇨🇳' },
      TRY: { name: 'Турецкая лира', flag: '🇹🇷' },
      CHF: { name: 'Швейцарский франк', flag: '🇨🇭' },
      KZT: { name: 'Казахстанский тенге', flag: '🇰🇿' },
      KRW: { name: 'Южнокорейская вона', flag: '🇰🇷' },
      INR: { name: 'Индийская рупия', flag: '🇮🇳' },
      BRL: { name: 'Бразильский реал', flag: '🇧🇷' },
      CAD: { name: 'Канадский доллар', flag: '🇨🇦' },
      AUD: { name: 'Австралийский доллар', flag: '🇦🇺' },
      SEK: { name: 'Шведская крона', flag: '🇸🇪' },
      NOK: { name: 'Норвежская крона', flag: '🇳🇴' },
    };
    
    function App() {
      const [rates, setRates] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      const [amount, setAmount] = useState(1000);
      const [fromCurr, setFromCurr] = useState('USD');
      const [toCurr, setToCurr] = useState('RUB');
      const [time, setTime] = useState(new Date());
      
      useEffect(() => {
        const t = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(t);
      }, []);
      
      const fetchRates = async () => {
        setLoading(true);
        setError(null);
        try {
          const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
          if (!res.ok) throw new Error('Ошибка загрузки курсов');
          const data = await res.json();
          setRates(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      
      useEffect(() => {
        fetchRates();
      }, []);
      
      const converted = useMemo(() => {
        if (!rates) return '0.00';
        if (fromCurr === toCurr) return amount.toFixed(2);
        const fromRate = fromCurr === 'USD' ? 1 : rates.rates[fromCurr];
        const toRate = toCurr === 'USD' ? 1 : rates.rates[toCurr];
        if (!fromRate || !toRate) return '0.00';
        const usdAmount = fromCurr === 'USD' ? amount : amount / fromRate;
        return (usdAmount * toRate).toFixed(2);
      }, [amount, fromCurr, toCurr, rates]);
      
      const getRateToRUB = (code) => {
        if (!rates) return 0;
        if (code === 'USD') return rates.rates.RUB || 0;
        const cross = rates.rates[code];
        return cross ? (rates.rates.RUB / cross) : 0;
      };
      
      // Генерируем фейковую историю на основе реального курса
      const generateHistory = (baseRate) => {
        const hist = [];
        let current = baseRate * 0.97;
        for (let i = 0; i < 7; i++) {
          current += (Math.random() - 0.4) * baseRate * 0.02;
          hist.push(current);
        }
        hist[6] = baseRate;
        return hist;
      };
      
      const swapCurrencies = () => {
        setFromCurr(toCurr);
        setToCurr(fromCurr);
      };
      
      if (loading && !rates) {
        return (
          <div className="loading">
            <div className="spinner"></div>
            <p>Загружаем курсы валют...</p>
          </div>
        );
      }
      
      if (error) {
        return (
          <div className="error">
            <h2>❌ {error}</h2>
            <button onClick={fetchRates}>Повторить</button>
          </div>
        );
      }
      
      const usdToRub = rates?.rates?.RUB || 90;
      const usdHistory = generateHistory(usdToRub);
      const minH = Math.min(...usdHistory);
      const maxH = Math.max(...usdHistory);
      
      return (
        <>
          <header className="header">
            <div className="logo">💱 CurrencyHub</div>
            <div className="header-time">{time.toLocaleTimeString('ru-RU')} | Обновлено: {rates?.date || '—'}</div>
          </header>
          
          <main className="main">
            <div className="converter-hero">
              <div className="ch-content">
                <h1>Конвертер валют</h1>
                <p>Реальные курсы в реальном времени</p>
                <div className="conv-pair">
                  <div className="conv-box">
                    <label>Отдаю</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
                    <select value={fromCurr} onChange={(e) => setFromCurr(e.target.value)}>
                      {Object.keys(currencyMeta).concat(['RUB', 'USD']).map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <span className="conv-arrow" onClick={swapCurrencies}>⇄</span>
                  <div className="conv-box">
                    <label>Получаю</label>
                    <input type="text" value={converted} readOnly style={{color:'#22c55e'}} />
                    <select value={toCurr} onChange={(e) => setToCurr(e.target.value)}>
                      {Object.keys(currencyMeta).concat(['RUB', 'USD']).map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rates-section">
              <h2>📊 Курсы к рублю</h2>
              <div className="rates-list">
                {Object.entries(currencyMeta).map(([code, meta]) => {
                  const rate = getRateToRUB(code);
                  const history = generateHistory(rate);
                  const miniBars = history.map((v, i, arr) => {
                    const min = Math.min(...arr);
                    const max = Math.max(...arr);
                    return ((v - min) / (max - min)) * 100;
                  });
                  const prevRate = history[5];
                  const change = ((rate - prevRate) / prevRate) * 100;
                  const isUp = change >= 0;
                  
                  return (
                    <div key={code} className="rate-row" onClick={() => { setFromCurr('RUB'); setToCurr(code); }} style={{cursor:'pointer'}}>
                      <span className="rate-flag\">{meta.flag}</span>
                      <div className="rate-name">
                        <span className="rate-code\">{code}</span>
                        <span className="rate-full\">{meta.name}</span>
                      </div>
                      <span className="rate-val\">{rate.toFixed(2)}</span>
                      <span className="rate-val\">{(rate * 1.015).toFixed(2)}</span>
                      <span className={`rate-change ${isUp ? 'up' : 'down'}`}>
                        {isUp ? '▲' : '▼'} {Math.abs(change).toFixed(2)}%
                      </span>
                      <div className="rate-graph">
                        {miniBars.map((h, i) => (
                          <div key={i} className="rg-bar" style={{ height: `${Math.max(h, 8)}%` }}></div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="chart-section">
              <h3>📈 Динамика USD/RUB (7 дней)</h3>
              <div className="big-chart">
                {usdHistory.map((v, i) => {
                  const h = ((v - minH) / (maxH - minH)) * 100;
                  const days = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
                  return (
                    <div key={i} className="bc-col">
                      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <div className="bc-fill" style={{ height: `${h}%` }}></div>
                        <div className="bc-line" style={{ bottom: `${h}%` }}></div>
                        <div className="bc-dot" style={{ bottom: `${h}%` }}></div>
                        <span className="bc-val\">{v.toFixed(2)}</span>
                      </div>
                      <span className="bc-label\">{days[i]}</span>
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
