
    const { useState, useEffect, useMemo } = React;

    const destinations = [
      {
        id: 1, name: 'Санторини, Греция', tag: 'Романтика', price: 89900, duration: '7 дней',
        desc: 'Белоснежные домики, голубые купола и закаты, от которых перехватывает дыхание.',
        image: 'https://th.bing.com/th/id/OIP.LxVwjrsXVYG0vT-cbfkUkAHaE7?w=234&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
        rating: 4.9, reviews: 2847
      },
      {
        id: 2, name: 'Бали, Индонезия', tag: 'Природа', price: 64900, duration: '10 дней',
        desc: 'Рисовые террасы, джунгли, храмы и серфинг на лучших волнах Азии.',
        image: 'https://th.bing.com/th/id/OIP.KXKMwGm8J9BGupJYJK36_wHaE8?w=266&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
        rating: 4.8, reviews: 5123
      },
      {
        id: 3, name: 'Швейцарские Альпы', tag: 'Горы', price: 112900, duration: '5 дней',
        desc: 'Кристально чистые озёра, заснеженные вершины и треккинг мечты.',
        image: 'https://th.bing.com/th/id/OIP.FaraYcZ1xh91DWAiZvsAOgHaEK?w=299&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
        rating: 4.9, reviews: 1892
      },
      {
        id: 4, name: 'Сафари в Африке', tag: 'Приключения', price: 154900, duration: '8 дней',
        desc: 'Большая пятёрка в естественной среде обитания. Незабываемый опыт.',
        image: 'https://th.bing.com/th/id/OIP.Ck7zn6dawKw8glJ_a_y1oQHaEK?w=322&h=181&c=7&r=0&o=7&pid=1.7&rm=3',
        rating: 5.0, reviews: 967
      },
      {
        id: 5, name: 'Мальдивы', tag: 'Пляж', price: 189900, duration: '6 дней',
        desc: 'Бунгало над водой, коралловые рифы и персональный дайвинг-гид.',
        image: 'https://th.bing.com/th/id/OIP.RCnr2Q8jwGqkZq2qyRQg2QHaEK?w=306&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
        rating: 4.9, reviews: 3421
      },
      {
        id: 6, name: 'Прага, Чехия', tag: 'Город', price: 45900, duration: '4 дня',
        desc: 'Средневековая архитектура, Карлов мост и лучшее пиво в Европе.',
        image: 'https://th.bing.com/th/id/OIP.cpk6cxHeDUxHKraO96YtcAHaEK?w=315&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
        rating: 4.7, reviews: 6234
      },
    ];

    const tags = ['Все', 'Романтика', 'Природа', 'Горы', 'Приключения', 'Пляж', 'Город'];

    function App() {
      const [activeTag, setActiveTag] = useState('Все');
      const [favorites, setFavorites] = useState(new Set());
      const [modalDest, setModalDest] = useState(null);
      const [scrollY, setScrollY] = useState(0);
      const [isLoaded, setIsLoaded] = useState(false);

      useEffect(() => {
        setIsLoaded(true);
        const onScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
      }, []);

      const filtered = useMemo(() => {
        if (activeTag === 'Все') return destinations;
        return destinations.filter(d => d.tag === activeTag);
      }, [activeTag]);

      const toggleFav = (id) => {
        const next = new Set(favorites);
        next.has(id) ? next.delete(id) : next.add(id);
        setFavorites(next);
      };

      const parallaxY = scrollY * 0.4;
      const heroOpacity = Math.max(0, 1 - scrollY / 700);
      const navBg = scrollY > 80 ? 'rgba(10,10,18,0.92)' : 'transparent';

      return (
        <>
          <nav className="nav-bar" style={{ background: navBg, backdropFilter: 'blur(20px)' }}>
            <div className="nav-logo">✈️ Wanderlust</div>
            <div className="nav-links">
              <a onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>Главная</a>
              <a onClick={() => document.getElementById('destinations').scrollIntoView({behavior:'smooth'})}>Направления</a>
              <a onClick={() => document.getElementById('why').scrollIntoView({behavior:'smooth'})}>Почему мы</a>
              <a onClick={() => document.getElementById('reviews').scrollIntoView({behavior:'smooth'})}>Отзывы</a>
            </div>
            <button className="nav-cta">Забронировать</button>
          </nav>

          <section className="hero">
            <div className="hero-bg" style={{ transform: `translateY(${parallaxY}px)` }}>
              <div className="hero-orb orb-1"></div>
              <div className="hero-orb orb-2"></div>
              <div className="hero-orb orb-3"></div>
            </div>
            <div className="hero-content" style={{ opacity: heroOpacity }}>
              <div className={`hero-badge ${isLoaded ? 'show' : ''}`}>🌍 Более 50 стран</div>
              <h1 className={`hero-title ${isLoaded ? 'show' : ''}`}>
                Открой мир<br/>с <span className="gradient-text">Wanderlust</span>
              </h1>
              <p className={`hero-sub ${isLoaded ? 'show' : ''}`}>
                Индивидуальные туры, проверенные отели и персональные гиды. 
                Ваше приключение начинается здесь.
              </p>
              <div className={`hero-actions ${isLoaded ? 'show' : ''}`}>
                <button className="btn-primary" onClick={() => document.getElementById('destinations').scrollIntoView({behavior:'smooth'})}>
                  Выбрать тур
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <button className="btn-ghost">Смотреть видео</button>
              </div>
              <div className="hero-stats">
                <div className="hstat"><span>50+</span>стран</div>
                <div className="hstat"><span>12K</span>довольных клиентов</div>
                <div className="hstat"><span>4.9</span>рейтинг</div>
              </div>
            </div>
            <div className="hero-images" style={{ opacity: heroOpacity }}>
              <div className="hero-img-card card-1" style={{'--delay':'0s'}}>
                <img src="https://kimi-web-img.moonshot.cn/img/i.etsystatic.com/f48cf81f5179ea3bc61fbe2ff8f09c4c432da4a3.jpg" alt="Santorini" />
                <div className="img-overlay">
                  <span className="img-tag">Греция</span>
                  <span className="img-price">от 89 900 ₽</span>
                </div>
              </div>
              <div className="hero-img-card card-2" style={{'--delay':'0.2s'}}>
                <img src="https://kimi-web-img.moonshot.cn/img/www.characrosstheworld.com/b7c4cec299bd0a959def6109e6b54f12ab58f99b.jpg" alt="Bali" />
                <div className="img-overlay">
                  <span className="img-tag">Бали</span>
                  <span className="img-price">от 64 900 ₽</span>
                </div>
              </div>
              <div className="hero-img-card card-3" style={{'--delay':'0.4s'}}>
                <img src="https://kimi-web-img.moonshot.cn/img/thumbs.dreamstime.com/fbaa662f6a65d095b72e3169fb4ea24ac25e4313.jpg" alt="Alps" />
                <div className="img-overlay">
                  <span className="img-tag">Швейцария</span>
                  <span className="img-price">от 112 900 ₽</span>
                </div>
              </div>
            </div>
          </section>

          <section className="marquee">
            <div className="marquee-track">
              <span>Санторини</span><span>•</span><span>Бали</span><span>•</span><span>Мальдивы</span><span>•</span><span>Альпы</span><span>•</span><span>Токио</span><span>•</span><span>Африка</span><span>•</span><span>Прага</span><span>•</span>
              <span>Санторини</span><span>•</span><span>Бали</span><span>•</span><span>Мальдивы</span><span>•</span><span>Альпы</span><span>•</span><span>Токио</span><span>•</span><span>Африка</span><span>•</span><span>Прага</span><span>•</span>
            </div>
          </section>

          <section id="destinations" className="destinations">
            <div className="section-head">
              <span className="section-label">Популярные направления</span>
              <h2>Куда отправимся?</h2>
              <p>Выбирайте из лучших локаций мира, проверенных нашими экспертами</p>
            </div>
            <div className="tags">
              {tags.map(tag => (
                <button key={tag} className={`tag ${activeTag === tag ? 'active' : ''}`} onClick={() => setActiveTag(tag)}>
                  {tag}
                </button>
              ))}
            </div>
            <div className="dest-grid">
              {filtered.map((d, i) => (
                <div key={d.id} className="dest-card" style={{'--i': i}} onClick={() => setModalDest(d)}>
                  <div className="dest-img-wrap">
                    <img src={d.image} alt={d.name} loading="lazy" />
                    <div className="dest-img-overlay"></div>
                    <span className="dest-tag">{d.tag}</span>
                    <button className="dest-fav" onClick={(e) => { e.stopPropagation(); toggleFav(d.id); }}>
                      {favorites.has(d.id) ? '❤️' : '🤍'}
                    </button>
                  </div>
                  <div className="dest-body">
                    <div className="dest-meta">
                      <span className="dest-rating">★ {d.rating}</span>
                      <span className="dest-reviews">({d.reviews.toLocaleString()} отзывов)</span>
                    </div>
                    <h3>{d.name}</h3>
                    <p>{d.desc}</p>
                    <div className="dest-footer">
                      <div>
                        <span className="dest-price">{d.price.toLocaleString()} ₽</span>
                        <span className="dest-duration">{d.duration}</span>
                      </div>
                      <button className="dest-btn">Подробнее →</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="why" className="why">
            <div className="why-visual">
              <div className="why-img-main">
                <img src="https://kimi-web-img.moonshot.cn/img/cdn.tourradar.com/fdcfcc48a94c9fb8ace645342d34d88e0e468857.jpg" alt="Travel" />
              </div>
              <div className="why-img-float">
                <img src="https://kimi-web-img.moonshot.cn/img/www.journee-mondiale.com/b665fea037bfe338dbc4e9b304c34d325472917a.webp" alt="Resort" />
              </div>
              <div className="why-badge">
                <span className="wb-num">12K+</span>
                <span className="wb-text">довольных путешественников</span>
              </div>
            </div>
            <div className="why-content">
              <span className="section-label">Почему Wanderlust</span>
              <h2>Путешествуй без забот</h2>
              <div className="why-features">
                {[
                  { icon: '🎯', title: 'Индивидуальные маршруты', desc: 'Не шаблонные туры, а путешествия под ваши желания' },
                  { icon: '🛡️', title: 'Страховка включена', desc: 'Медицинская страховка на весь период поездки' },
                  { icon: '📞', title: 'Поддержка 24/7', desc: 'Русскоязычная поддержка в любой точке мира' },
                  { icon: '💰', title: 'Лучшие цены', desc: 'Гарантируем низкую цену или вернём разницу' },
                ].map((f, i) => (
                  <div key={i} className="why-feat">
                    <div className="why-feat-icon">{f.icon}</div>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="reviews" className="reviews">
            <div className="section-head">
              <span className="section-label">Отзывы</span>
              <h2>Что говорят путешественники</h2>
            </div>
            <div className="reviews-grid">
              {[
                { name: 'Анна К.', avatar: '👩', text: 'Санторини превзошёл все ожидания! Гид был невероятным, отель с видом на закат — мечта.', rating: 5, trip: 'Санторини, 2026' },
                { name: 'Дмитрий В.', avatar: '👨', text: 'Сафари в Кении — это то, что нужно попробовать хотя бы раз в жизни. Организация на высоте.', rating: 5, trip: 'Кения, 2026' },
                { name: 'Мария С.', avatar: '👩‍🦰', text: 'Бали оказался ещё красивее, чем на фото. Рисовые террасы, храмы, серфинг — всё супер!', rating: 5, trip: 'Бали, 2025' },
              ].map((r, i) => (
                <div key={i} className="review-card">
                  <div className="review-stars">{'★'.repeat(r.rating)}</div>
                  <p className="review-text">"{r.text}"</p>
                  <div className="review-author">
                    <span className="review-avatar">{r.avatar}</span>
                    <div>
                      <span className="review-name">{r.name}</span>
                      <span className="review-trip">{r.trip}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-bg">
              <div className="cta-orb"></div>
            </div>
            <div className="cta-content">
              <h2>Готовы к приключению?</h2>
              <p>Оставьте заявку и получите персональный маршрут в течение 24 часов</p>
              <form className="cta-form" onSubmit={(e) => { e.preventDefault(); alert('Заявка отправлена!'); }}>
                <input type="email" placeholder="Ваш email" required />
                <button type="submit" className="btn-primary">Получить предложение</button>
              </form>
            </div>
          </section>

          <footer className="footer">
            <div className="footer-main">
              <div className="footer-brand">
                <div className="footer-logo">✈️ Wanderlust</div>
                <p>Путешествия, которые меняют жизнь. С 2018 года.</p>
              </div>
              <div className="footer-links">
                <div>
                  <h4>Направления</h4>
                  <a>Европа</a><a>Азия</a><a>Африка</a><a>Америка</a>
                </div>
                <div>
                  <h4>Компания</h4>
                  <a>О нас</a><a>Блог</a><a>Карьера</a><a>Контакты</a>
                </div>
                <div>
                  <h4>Поддержка</h4>
                  <a>FAQ</a><a>Страхование</a><a>Отмена</a><a>Помощь</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2026 Wanderlust Travel. Все права защищены.</p>
              <div className="footer-socials">
                <span>📱</span><span>💬</span><span>📸</span><span>▶️</span>
              </div>
            </div>
          </footer>

          {modalDest && (
            <div className="modal-overlay" onClick={() => setModalDest(null)}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setModalDest(null)}>×</button>
                <img src={modalDest.image} alt={modalDest.name} className="modal-img" />
                <div className="modal-body">
                  <span className="modal-tag">{modalDest.tag}</span>
                  <h2>{modalDest.name}</h2>
                  <p>{modalDest.desc}</p>
                  <div className="modal-details">
                    <div><span>Длительность</span><strong>{modalDest.duration}</strong></div>
                    <div><span>Рейтинг</span><strong>★ {modalDest.rating}</strong></div>
                    <div><span>Отзывы</span><strong>{modalDest.reviews.toLocaleString()}</strong></div>
                  </div>
                  <div className="modal-footer">
                    <span className="modal-price">{modalDest.price.toLocaleString()} ₽</span>
                    <button className="btn-primary">Забронировать</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
 