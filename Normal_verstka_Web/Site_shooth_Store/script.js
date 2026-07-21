
    const { useState, useEffect, useMemo } = React;

    const products = [
      { id: 1, name: 'Nike Air Max 1', desc: 'Классика 1987 года, visible Air', price: 16990, category: 'Nike', image: '👟', color: '#ef4444' },
      { id: 2, name: 'Adidas Samba OG', desc: 'Кожа, резиновая подошва', price: 12990, category: 'Adidas', image: '⚽', color: '#3b82f6' },
      { id: 3, name: 'New Balance 550', desc: 'Ретро баскетбол, кожа', price: 14990, category: 'NB', image: '🏀', color: '#10b981' },
      { id: 4, name: 'Nike Dunk Low', desc: 'Panda / Black & White', price: 18990, category: 'Nike', image: '🐼', color: '#ef4444' },
      { id: 5, name: 'Adidas Campus 00s', desc: 'Замша, толстая подошва', price: 13990, category: 'Adidas', image: '🛹', color: '#3b82f6' },
      { id: 6, name: 'New Balance 2002R', desc: 'N-ergy амортизация', price: 21990, category: 'NB', image: '🏃', color: '#10b981' },
      { id: 7, name: 'Nike Air Force 1', desc: 'Белые, легенда улиц', price: 15990, category: 'Nike', image: '✈️', color: '#ef4444' },
      { id: 8, name: 'Adidas Gazelle', desc: 'Замша, три полоски', price: 11990, category: 'Adidas', image: '🦌', color: '#3b82f6' },
    ];

    const categories = ['Все', 'Nike', 'Adidas', 'NB'];

    function App() {
      const [cart, setCart] = useState([]);
      const [showCart, setShowCart] = useState(false);
      const [activeCategory, setActiveCategory] = useState('Все');
      const [toast, setToast] = useState({ show: false, msg: '' });
      const [form, setForm] = useState({ name: '', email: '', msg: '' });
      const [liked, setLiked] = useState(new Set());
      const [scrollY, setScrollY] = useState(0);

      useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
      }, []);

      const filtered = useMemo(() => {
        if (activeCategory === 'Все') return products;
        return products.filter(p => p.category === activeCategory);
      }, [activeCategory]);

      const total = useMemo(() => cart.reduce((s, i) => s + i.price, 0), [cart]);

      const inCart = (id) => cart.some(c => c.id === id);

      const toggleCart = (p) => {
        if (inCart(p.id)) {
          setCart(cart.filter(c => c.id !== p.id));
          showToast('Удалено из корзины');
        } else {
          setCart([...cart, p]);
          showToast('Добавлено в корзину');
        }
      };

      const showToast = (msg) => {
        setToast({ show: true, msg });
        setTimeout(() => setToast({ show: false, msg: '' }), 2000);
      };

      const toggleLike = (id) => {
        const next = new Set(liked);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        setLiked(next);
      };

      const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      };

      const submitForm = (e) => {
        e.preventDefault();
        showToast('Сообщение отправлено!');
        setForm({ name: '', email: '', msg: '' });
      };

      const parallaxHero = { transform: `translateY(${scrollY * 0.3}px)` };
      const parallaxOpacity = { opacity: Math.max(0, 1 - scrollY / 600) };

      return (
        <>
          <header className="header" style={{ background: scrollY > 50 ? 'rgba(15,15,20,0.95)' : 'transparent' }}>
            <div className="logo">👟 KickStore</div>
            <nav className="nav">
              <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Главная</a>
              <a onClick={() => scrollTo('products')}>Каталог</a>
              <a onClick={() => scrollTo('about')}>О нас</a>
              <a onClick={() => scrollTo('contacts')}>Контакты</a>
            </nav>
            <div className="cart-icon" onClick={() => setShowCart(true)}>
              🛒 <span className="cart-count">{cart.length}</span>
            </div>
          </header>

          <section className="hero">
            <div className="hero-bg" style={parallaxHero}>
              <div className="orb orb-1"></div>
              <div className="orb orb-2"></div>
              <div className="orb orb-3"></div>
            </div>
            <div className="hero-content" style={parallaxOpacity}>
              <div className="hero-badge">🔥 Новая коллекция 2026</div>
              <h1>Носи легенду<br/>на ногах</h1>
              <p>Оригинальные кроссовки с мировых рынков. Проверка подлинности на каждой паре.</p>
              <button className="btn-primary" onClick={() => scrollTo('products')}>
                <span>Выбрать пару</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>
            <div className="hero-visual" style={parallaxOpacity}>
              <div className="shoe-card" style={{ '--delay': '0s', '--rot': '-8deg' }}>
                <div className="shoe-emoji">👟</div>
                <div className="shoe-name">Nike Air</div>
                <div className="shoe-tag">Bestseller</div>
              </div>
              <div className="shoe-card" style={{ '--delay': '0.15s', '--rot': '6deg' }}>
                <div className="shoe-emoji">⚽</div>
                <div className="shoe-name">Adidas</div>
                <div className="shoe-tag">New</div>
              </div>
              <div className="shoe-card" style={{ '--delay': '0.3s', '--rot': '-4deg' }}>
                <div className="shoe-emoji">🏀</div>
                <div className="shoe-name">New Balance</div>
                <div className="shoe-tag">Hype</div>
              </div>
            </div>
          </section>

          <section id="products" className="products-section">
            <div className="section-header">
              <h2 className="section-title">Каталог</h2>
              <p className="section-sub">Все модели в наличии, доставка сегодня</p>
            </div>
            <div className="filters">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="products-grid">
              {filtered.map(p => (
                <div key={p.id} className={`product-card ${inCart(p.id) ? 'in-cart' : ''}`}>
                  <div className="product-like" onClick={() => toggleLike(p.id)}>
                    {liked.has(p.id) ? '❤️' : '🤍'}
                  </div>
                  <div className="product-image" style={{ background: `linear-gradient(135deg, ${p.color}20, transparent)` }}>
                    <span className="product-emoji">{p.image}</span>
                  </div>
                  <div className="product-info">
                    <div className="product-brand" style={{ color: p.color }}>{p.category}</div>
                    <h3>{p.name}</h3>
                    <p className="product-desc">{p.desc}</p>
                    <div className="product-footer">
                      <span className="product-price">{p.price.toLocaleString()} ₽</span>
                      <button className="btn-add" onClick={() => toggleCart(p)}>
                        {inCart(p.id) ? '✓' : '+'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="marquee-section">
            <div className="marquee">
              <span>Nike</span><span>•</span><span>Adidas</span><span>•</span><span>New Balance</span><span>•</span><span>Jordan</span><span>•</span><span>Puma</span><span>•</span><span>Asics</span><span>•</span>
              <span>Nike</span><span>•</span><span>Adidas</span><span>•</span><span>New Balance</span><span>•</span><span>Jordan</span><span>•</span><span>Puma</span><span>•</span><span>Asics</span><span>•</span>
            </div>
          </section>

          <section className="features">
            {[
              { icon: '✅', title: 'Проверка подлинности', desc: 'LC-верификация каждой пары' },
              { icon: '🚚', title: 'Доставка 2 часа', desc: 'По Москве и СПб' },
              { icon: '🔄', title: 'Обмен 14 дней', desc: 'Без лишних вопросов' },
              { icon: '💎', title: 'Редкие дропы', desc: 'Эксклюзивные коллаборации' },
            ].map((f, i) => (
              <div key={i} className="feature">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </section>

          <section id="about" className="about">
            <div className="about-image">
              <div className="about-emoji">🏭</div>
            </div>
            <div className="about-content">
              <h2>О KickStore</h2>
              <p>Мы — команда сникерхедов, которая начала с продажи пары кроссовок из гаража в 2019 году. Сегодня — это крупнейший магазин оригинальной обуви в СНГ с собственным отделом верификации.</p>
              <div className="stats">
                <div className="stat"><span className="stat-num">120K+</span><span className="stat-label">Пар продано</span></div>
                <div className="stat"><span className="stat-num">99.8%</span><span className="stat-label">Оригинал</span></div>
                <div className="stat"><span className="stat-num">4.9★</span><span className="stat-label">На Яндекс</span></div>
              </div>
            </div>
          </section>

          <section id="contacts" className="contacts">
            <h2>Связаться</h2>
            <form className="contact-form" onSubmit={submitForm}>
              <input type="text" placeholder="Имя" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
              <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
              <textarea placeholder="Что ищешь?" value={form.msg} onChange={e => setForm({...form, msg: e.target.value})} rows="4" required></textarea>
              <button type="submit" className="btn-primary">Отправить</button>
            </form>
          </section>

          <footer className="footer">
            <div>
              <div className="footer-logo">👟 KickStore</div>
              <p>© 2026 Все права защищены</p>
            </div>
            <div className="socials">
              <span>📱</span><span>💬</span><span>📸</span><span>▶️</span>
            </div>
          </footer>

          {showCart && <div className="cart-overlay" onClick={() => setShowCart(false)}></div>}
          <div className={`cart-sidebar ${showCart ? 'open' : ''}`}>
            <div className="cart-header">
              <h3>Корзина</h3>
              <button className="close-btn" onClick={() => setShowCart(false)}>×</button>
            </div>
            {cart.length ? (
              <>
                <div className="cart-items">
                  {cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <span className="cart-item-emoji">{item.image}</span>
                      <span className="cart-item-name">{item.name}</span>
                      <span className="cart-item-price">{item.price.toLocaleString()} ₽</span>
                      <button className="remove-btn" onClick={() => toggleCart(item)}>×</button>
                    </div>
                  ))}
                </div>
                <div className="cart-total">
                  <strong>Итого: {total.toLocaleString()} ₽</strong>
                  <button className="btn-primary checkout">Оформить</button>
                </div>
              </>
            ) : (
              <div className="cart-empty">Корзина пуста 🛒</div>
            )}
          </div>

          <div className={`toast ${toast.show ? 'show' : ''}`}>{toast.msg}</div>
        </>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);