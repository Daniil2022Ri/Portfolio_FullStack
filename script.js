 
    const { useState, useEffect, useRef } = React;

    const layoutSites = [
      {
        id: 1, title: 'TechStore', desc: 'Магазин гаджетов на Vue 3. Тёмная тема, корзина, фильтрация, адаптив.',
        stack: ['Vue 3', 'CSS Grid', 'Composition API'],
        color: '#6366f1',
        preview: `<div style="background:#0a0a0f;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:60%;background:linear-gradient(90deg,#6366f1,#a855f7);border-radius:4px"></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;flex:1"><div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:10px"><div style="height:30px;font-size:20px">📱</div></div><div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:10px"><div style="height:30px;font-size:20px">🎧</div></div><div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:10px"><div style="height:30px;font-size:20px">⌚</div></div><div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:10px"><div style="height:30px;font-size:20px">🔌</div></div></div></div>`
      },
      {
        id: 2, title: 'KickStore', desc: 'Магазин кроссовок на React 18. Параллакс, лайки, бегущая строка.',
        stack: ['React 18', 'useMemo', 'CSS Animations'],
        color: '#ec4899',
        preview: `<div style="background:#0c0c12;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:50%;background:#fff;border-radius:4px"></div><div style="display:flex;gap:8px;flex:1;align-items:center;justify-content:center"><div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:15px;transform:rotate(-8deg)"><span style="font-size:24px">👟</span></div><div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:15px;transform:rotate(6deg)"><span style="font-size:24px">⚽</span></div><div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:15px;transform:rotate(-4deg)"><span style="font-size:24px">🏀</span></div></div></div>`
      },
      {
        id: 3, title: 'Wanderlust', desc: 'Туристический сайт на React. Реальные фото, модальные окна, адаптив.',
        stack: ['React 18', 'Lazy Loading', 'CSS Grid'],
        color: '#06b6d4',
        preview: `<div style="background:#08080f;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:70%;background:linear-gradient(90deg,#7c3aed,#06b6d4);border-radius:4px"></div><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;flex:1"><div style="background:rgba(124,58,237,0.1);border-radius:6px"></div><div style="background:rgba(6,182,212,0.1);border-radius:6px"></div><div style="background:rgba(245,158,11,0.1);border-radius:6px"></div></div></div>`
      }
    ];

    const apiProjects = [
      {
        id: 1, title: 'WeatherApp', desc: 'Погода в реальном времени. Open-Meteo API, 50+ городов, почасовой прогноз, 7 дней.',
        stack: ['React', 'Open-Meteo API', 'Fetch'],
        color: '#f59e0b',
        live: true,
        preview: `<div style="background:#0c1222;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:28px">☀️</span><span style="font-size:32px;font-weight:800;color:#f59e0b">24°</span></div><div style="display:flex;gap:4px;margin-top:auto"><div style="flex:1;height:30px;background:rgba(245,158,11,0.2);border-radius:4px"></div><div style="flex:1;height:40px;background:rgba(245,158,11,0.3);border-radius:4px"></div><div style="flex:1;height:25px;background:rgba(245,158,11,0.15);border-radius:4px"></div><div style="flex:1;height:35px;background:rgba(245,158,11,0.25);border-radius:4px"></div></div></div>`
      },
      {
        id: 2, title: 'CurrencyHub', desc: 'Курсы валют в реальном времени. exchangerate-api, конвертер, графики.',
        stack: ['React', 'exchangerate-api', 'Charts'],
        color: '#22c55e',
        live: true,
        preview: `<div style="background:#0a0f1a;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:20px">🇺🇸 → 🇷🇺</span><span style="font-size:24px;font-weight:800;color:#22c55e">91.45</span></div><div style="display:flex;align-items:flex-end;gap:3px;margin-top:auto;height:50px"><div style="flex:1;height:40%;background:rgba(34,197,94,0.3);border-radius:3px"></div><div style="flex:1;height:60%;background:rgba(34,197,94,0.4);border-radius:3px"></div><div style="flex:1;height:50%;background:rgba(34,197,94,0.35);border-radius:3px"></div><div style="flex:1;height:70%;background:rgba(34,197,94,0.5);border-radius:3px"></div><div style="flex:1;height:55%;background:rgba(34,197,94,0.38);border-radius:3px"></div><div style="flex:1;height:80%;background:rgba(34,197,94,0.55);border-radius:3px"></div><div style="flex:1;height:65%;background:rgba(34,197,94,0.45);border-radius:3px"></div></div></div>`
      }
    ];

    const skills = [
      { name: 'React', level: 90 },
      { name: 'Vue', level: 75 },
      { name: 'TypeScript', level: 70 },
      { name: 'Next.js', level: 65 },
      { name: 'CSS/Tailwind', level: 95 },
      { name: 'Node.js', level: 60 },
    ];

    function GlitchText({ text, size = '4rem' }) {
      return (
        <div className="glitch-wrapper" style={{ fontSize: size }}>
          <span className="glitch" data-text={text}>{text}</span>
        </div>
      );
    }

    function Scanlines() {
      return <div className="scanlines"></div>;
    }

    function Particles() {
      const canvasRef = useRef(null);
      useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let w, h, particles = [];
        const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
        resize();
        window.addEventListener('resize', resize);
        for (let i = 0; i < 60; i++) {
          particles.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, size: Math.random() * 2 + 0.5, alpha: Math.random() * 0.5 + 0.1 });
        }
        let animId;
        const animate = () => {
          ctx.clearRect(0, 0, w, h);
          particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 160, 60, ${p.alpha})`; ctx.fill();
          });
          animId = requestAnimationFrame(animate);
        };
        animate();
        return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
      }, []);
      return <canvas ref={canvasRef} className="particles-canvas" />;
    }

    function ProjectCard({ project, index }) {
      const [hovered, setHovered] = useState(false);
      return (
        <div className="project-card" style={{ '--delay': `${index * 0.15}s`, '--color': project.color }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <div className="pc-glitch-border"></div>
          <div className="pc-preview" dangerouslySetInnerHTML={{ __html: project.preview }}></div>
          <div className="pc-info">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="pc-stack">{project.stack.map(s => <span key={s} className="pc-tag">{s}</span>)}</div>
            {project.live && <span className="pc-live">● LIVE</span>}
          </div>
          <div className={`pc-scan ${hovered ? 'active' : ''}`}></div>
        </div>
      );
    }

    function SkillBar({ skill, index }) {
      const [width, setWidth] = useState(0);
      const ref = useRef(null);
      useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setTimeout(() => setWidth(skill.level), 100 + index * 100); } }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
      }, [skill.level, index]);
      return (
        <div className="skill-item" ref={ref}>
          <div className="skill-header"><span className="skill-name">{skill.name}</span><span className="skill-percent">{skill.level}%</span></div>
          <div className="skill-track"><div className="skill-fill" style={{ width: `${width}%` }}></div></div>
        </div>
      );
    }

    function App() {
      const [activeSection, setActiveSection] = useState('hero');
      const [scrollY, setScrollY] = useState(0);
      const [typedText, setTypedText] = useState('');
      const fullText = 'FRONTEND DEVELOPER';

      useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
      }, []);

      useEffect(() => {
        let i = 0;
        const interval = setInterval(() => { if (i <= fullText.length) { setTypedText(fullText.slice(0, i)); i++; } else { clearInterval(interval); } }, 80);
        return () => clearInterval(interval);
      }, []);

      const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setActiveSection(id); };

      return (
        <div className="br-portfolio">
          <Scanlines />
          <Particles />
          <nav className={`br-nav ${scrollY > 300 ? 'visible' : ''}`}>
            <div className="br-nav-logo">K</div>
            <div className="br-nav-links">
              <button onClick={() => scrollTo('hero')} className={activeSection === 'hero' ? 'active' : ''}>01 // HERO</button>
              <button onClick={() => scrollTo('about')} className={activeSection === 'about' ? 'active' : ''}>02 // ABOUT</button>
              <button onClick={() => scrollTo('layout')} className={activeSection === 'layout' ? 'active' : ''}>03 // LAYOUT</button>
              <button onClick={() => scrollTo('api')} className={activeSection === 'api' ? 'active' : ''}>04 // API</button>
              <button onClick={() => scrollTo('contact')} className={activeSection === 'contact' ? 'active' : ''}>05 // CONTACT</button>
            </div>
          </nav>

          <section id="hero" className="br-hero">
            <div className="br-hero-bg">
              <div className="br-orb br-orb-1"></div>
              <div className="br-orb br-orb-2"></div>
              <div className="br-orb br-orb-3"></div>
            </div>
            <div className="br-hero-content">
              <div className="br-hero-label"><span className="br-line"></span><span>LOS ANGELES // 2049</span></div>
              <GlitchText text={typedText} size="clamp(3rem, 8vw, 7rem)" />
              <div className="br-hero-sub"><span className="br-cursor">_</span>Создаю цифровые миры. React, Vue, TypeScript, Next.js.</div>
              <div className="br-hero-actions">
                <button className="br-btn-primary" onClick={() => scrollTo('layout')}><span className="br-btn-glitch">Смотреть работы</span></button>
                <button className="br-btn-ghost" onClick={() => scrollTo('contact')}>Связаться</button>
              </div>
              <div className="br-hero-stats">
                <div><span className="br-stat-num">5+</span><span className="br-stat-label">лет опыта</span></div>
                <div><span className="br-stat-num">15+</span><span className="br-stat-label">проектов</span></div>
                <div><span className="br-stat-num">3</span><span className="br-stat-label">коммерческих</span></div>
              </div>
            </div>
            <div className="br-hero-visual">
              <div className="br-holo-card" style={{'--delay': '0s'}}><div className="br-holo-content"><span className="br-holo-icon">⚡</span><span className="br-holo-text">PERFORMANCE</span></div></div>
              <div className="br-holo-card" style={{'--delay': '0.3s'}}><div className="br-holo-content"><span className="br-holo-icon">🎨</span><span className="br-holo-text">DESIGN</span></div></div>
              <div className="br-holo-card" style={{'--delay': '0.6s'}}><div className="br-holo-content"><span className="br-holo-icon">⚙️</span><span className="br-holo-text">ENGINEERING</span></div></div>
            </div>
            <div className="br-scroll-hint"><span>ПРОКРУТИТЕ ВНИЗ</span><div className="br-scroll-line"></div></div>
          </section>

          <section id="about" className="br-about">
            <div className="br-section-label">02 // ABOUT</div>
            <div className="br-about-grid">
              <div className="br-about-left">
                <h2 className="br-section-title">Репликант<br/><span className="br-orange">frontend-разработки</span></h2>
                <p className="br-about-text">Специализируюсь на создании современных веб-приложений. Работаю с React, Vue, TypeScript и Next.js. Верю в pixel-perfect верстку, плавные анимации и чистый код.</p>
                <p className="br-about-text">Каждый проект — это попытка создать что-то, что переживёт своего создателя.</p>
                <div className="br-about-quote"><span className="br-quote-mark">"</span>Все эти моменты затеряются во времени, как слёзы в дожде.<span className="br-quote-mark">"</span></div>
              </div>
              <div className="br-about-right">
                <div className="br-skills-panel">
                  <h3>НАВЫКИ // SKILLS</h3>
                  {skills.map((s, i) => <SkillBar key={s.name} skill={s} index={i} />)}
                </div>
                <div className="br-terminal">
                  <div className="br-terminal-header"><span></span><span></span><span></span><span>terminal — bash</span></div>
                  <div className="br-terminal-body">
                    <div><span className="br-prompt">$</span> whoami</div>
                    <div className="br-output">frontend-developer</div>
                    <div><span className="br-prompt">$</span> cat stack.txt</div>
                    <div className="br-output">React Vue TypeScript Next.js</div>
                    <div><span className="br-prompt">$</span> uptime</div>
                    <div className="br-output">coding for 5+ years</div>
                    <div><span className="br-prompt">$</span> <span className="br-cursor-blink">_</span></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="layout" className="br-projects">
            <div className="br-section-label">03 // LAYOUT SITES</div>
            <h2 className="br-section-title">Верстка<br/><span className="br-orange">сайтов</span></h2>
            <p className="br-section-desc">Чистая вёрстка. Адаптив. Анимации. Без фреймворков и с ними.</p>
            <div className="br-projects-grid">{layoutSites.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}</div>
          </section>

          <section id="api" className="br-projects br-api-section">
            <div className="br-section-label">04 // API PROJECTS</div>
            <h2 className="br-section-title">Работа с<br/><span className="br-orange">API</span></h2>
            <p className="br-section-desc">Реальные данные. Реальные запросы. Реальные приложения.</p>
            <div className="br-projects-grid br-api-grid">{apiProjects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}</div>
          </section>

          <section id="contact" className="br-contact">
            <div className="br-section-label">05 // CONTACT</div>
            <div className="br-contact-grid">
              <div className="br-contact-left">
                <h2 className="br-section-title">Начнём<br/><span className="br-orange">сотрудничество</span></h2>
                <p className="br-contact-text">Открыт к предложениям о работе, фриланс-проектам и интересным идеям.</p>
                <div className="br-contact-links">
                  <a href="#" className="br-contact-link"><span className="br-link-icon">💻</span><span>github.com/username</span></a>
                  <a href="#" className="br-contact-link"><span className="br-link-icon">✉️</span><span>email@example.com</span></a>
                  <a href="#" className="br-contact-link"><span className="br-link-icon">💬</span><span>t.me/username</span></a>
                </div>
              </div>
              <div className="br-contact-right">
                <form className="br-form" onSubmit={(e) => { e.preventDefault(); alert('Сообщение отправлено'); }}>
                  <div className="br-form-group"><label>ИМЯ // NAME</label><input type="text" placeholder="Введите имя" required /></div>
                  <div className="br-form-group"><label>EMAIL // EMAIL</label><input type="email" placeholder="Введите email" required /></div>
                  <div className="br-form-group"><label>СООБЩЕНИЕ // MESSAGE</label><textarea placeholder="Опишите проект..." rows="4" required></textarea></div>
                  <button type="submit" className="br-btn-primary br-submit"><span className="br-btn-glitch">Отправить сообщение</span></button>
                </form>
              </div>
            </div>
          </section>

          <footer className="br-footer">
            <div className="br-footer-content">
              <div className="br-footer-left"><span className="br-footer-logo">K</span><span>© 2026 // ALL RIGHTS RESERVED</span></div>
              <div className="br-footer-right"><span>СОЗДАНО В ЛОС-АНДЖЕЛЕСЕ 2049</span><span className="br-footer-version">v2.0.49</span></div>
            </div>
          </footer>
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
