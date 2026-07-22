const { useState, useEffect, useRef, createContext, useContext } = React;


const translations = {
  ru: {
    heroLabel: 'ПОРТФОЛИО // 2026',
    heroSub: 'Java Backend & Modern Frontend. Микросервисы, Event-Driven архитектура, масштабируемые решения и чистый код.',
    heroBtnWorks: 'Смотреть проекты',
    heroBtnContact: 'Связаться',
    statJava: 'лет коммерческой разработки',
    statBackend: 'высоконагруженных сервисов',
    statFrontend: 'production-ready UI',
    aboutLabel: '02 // ABOUT',
    aboutTitle: 'Рыбьяков',
    aboutName: 'Даниил',
    aboutText1: 'Fullstack-разработчик с 4+ годами опыта. Специализируюсь на проектировании и разработке микросервисных архитектур в финтехе и e-commerce. Превращаю сложные бизнес-требования в надежный, тестируемый и масштабируемый код.',
    aboutText2: 'Мой фокус: отказоустойчивость (Resilience), производительность и чистая архитектура (DDD, CQRS). Во фронтенде придерживаюсь принципов компонентного подхода, pixel-perfect верстки и плавного UX.',
    aboutFocus: 'Фокус: Масштабируемость, Отказоустойчивость, Чистая архитектура.',
    skillsLabel: 'ТЕХНОЛОГИЧЕСКИЙ СТЕК',
    backendLabel: '03 // BACKEND PROJECTS',
    backendTitle: 'Java',
    backendSubtitle: 'Backend',
    backendDesc: 'Промышленная разработка: от проектирования API до деплоя в Kubernetes.',
    frontendLabel: '04 // FRONTEND PROJECTS',
    frontendTitle: 'Modern',
    frontendSubtitle: 'Frontend',
    frontendDesc: 'Сложные интерфейсы, работа с реальными API, оптимизация производительности и анимаций.',
    contactLabel: '05 // CONTACT',
    contactTitle: 'Открыт к',
    contactSubtitle: 'предложениям',
    contactText: 'Ищу команду, где ценят инженерную культуру, code review и сложные технические вызовы. Готов обсудить Fullstack или Backend роли.',
    footerRights: '© 2026 // ALL RIGHTS RESERVED',
    footerCreated: 'СОЗДАНО С ВНИМАНИЕМ К ДЕТАЛЯМ',
    navHero: '01 // ГЛАВНАЯ',
    navAbout: '02 // ОБО МНЕ',
    navBackend: '03 // BACKEND',
    navFrontend: '04 // FRONTEND',
    navContact: '05 // КОНТАКТЫ',
    scrollHint: 'ПРОКРУТИТЕ ВНИЗ',
    
    langRu: 'RU',
    langEn: 'EN'
  },
  en: {
    heroLabel: 'PORTFOLIO // 2026',
    heroSub: 'Java Backend & Modern Frontend. Microservices, Event-Driven architecture, scalable solutions and clean code.',
    heroBtnWorks: 'View projects',
    heroBtnContact: 'Get in touch',
    statJava: 'years of commercial dev',
    statBackend: 'high-load services',
    statFrontend: 'production-ready UI',
    aboutLabel: '02 // ABOUT',
    aboutTitle: 'Rybiyakov',
    aboutName: 'Daniil',
    aboutText1: 'Fullstack developer with 4+ years of experience. Specialized in designing and building microservice architectures in fintech and e-commerce. I turn complex business requirements into reliable, testable, and scalable code.',
    aboutText2: 'My focus: Resilience, performance, and clean architecture (DDD, CQRS). In frontend, I adhere to component-driven development, pixel-perfect markup, and smooth UX.',
    aboutFocus: 'Focus: Scalability, Resilience, Clean Architecture.',
    skillsLabel: 'TECH STACK',
    backendLabel: '03 // BACKEND PROJECTS',
    backendTitle: 'Java',
    backendSubtitle: 'Backend',
    backendDesc: 'Industrial development: from API design to Kubernetes deployment.',
    frontendLabel: '04 // FRONTEND PROJECTS',
    frontendTitle: 'Modern',
    frontendSubtitle: 'Frontend',
    frontendDesc: 'Complex interfaces, real API integration, performance and animation optimization.',
    contactLabel: '05 // CONTACT',
    contactTitle: 'Open to',
    contactSubtitle: 'opportunities',
    contactText: 'Looking for a team that values engineering culture, code review, and complex technical challenges. Ready to discuss Fullstack or Backend roles.',
    footerRights: '© 2026 // ALL RIGHTS RESERVED',
    footerCreated: 'CRAFTED WITH ATTENTION TO DETAIL',
    navHero: '01 // HOME',
    navAbout: '02 // ABOUT',
    navBackend: '03 // BACKEND',
    navFrontend: '04 // FRONTEND',
    navContact: '05 // CONTACT',
    scrollHint: 'SCROLL DOWN',
    langRu: 'RU',
    langEn: 'EN'
  }
};

const LangContext = createContext();
function useLang() { return useContext(LangContext); }


const backendProjects = [
  { id: 1, title: 'Payment Processing Service', titleEn: 'Payment Processing Service', desc: 'Высоконагруженный микросервис обработки платежей. Реализована идемпотентность, retry-механизмы и кэширование горячих данных в Redis.', descEn: 'High-load payment processing microservice. Implemented idempotency, retry mechanisms, and hot data caching in Redis.', stack: ['Java 21', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Redis'], color: '#00ff88', github: 'https://github.com/Daniil2022Ri/PaymentService', preview: `<div style="background:#0a0a0f;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:60%;background:linear-gradient(90deg,#00ff88,#00cc6a);border-radius:4px"></div><div style="display:flex;gap:8px;flex:1;align-items:center;justify-content:center"><div style="background:rgba(0,255,136,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">💳</span></div><div style="background:rgba(0,255,136,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">⚡</span></div></div></div>` },
  { id: 2, title: 'AI Assistant API Gateway', titleEn: 'AI Assistant API Gateway', desc: 'Реактивный API-шлюз для AI-ассистента. Интеграция с LLM через Server-Sent Events (SSE), управление контекстом сессий в Redis.', descEn: 'Reactive API gateway for AI assistant. LLM integration via Server-Sent Events (SSE), session context management in Redis.', stack: ['Java 21', 'Spring WebFlux', 'OpenAI API', 'Redis'], color: '#a855f7', github: 'https://github.com/Daniil2022Ri/AIAssistantBackend', preview: `<div style="background:#0a0a0f;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:50%;background:linear-gradient(90deg,#a855f7,#7c3aed);border-radius:4px"></div><div style="display:flex;gap:8px;flex:1;align-items:center;justify-content:center"><div style="background:rgba(168,85,247,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">🤖</span></div><div style="background:rgba(168,85,247,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">🧠</span></div></div></div>` },
  { id: 3, title: 'Bank Antifraud System', titleEn: 'Bank Antifraud System', desc: 'Архитектурный прототип системы антифрода. Реализация паттернов DDD и CQRS, асинхронная коммуникация микросервисов через Kafka.', descEn: 'Architectural prototype of an antifraud system. Implementation of DDD and CQRS patterns, asynchronous microservice communication via Kafka.', stack: ['Java 17', 'Spring Cloud', 'DDD', 'CQRS', 'Kafka'], color: '#f59e0b', github: 'https://github.com/Daniil2022Ri/Bank_DDD_Antifraund/tree/develop/antifraud', preview: `<div style="background:#0a0a0f;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:55%;background:linear-gradient(90deg,#f59e0b,#f97316);border-radius:4px"></div><div style="display:flex;gap:8px;flex:1;align-items:center;justify-content:center"><div style="background:rgba(245,158,11,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">🏦</span></div><div style="background:rgba(245,158,11,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">🛡️</span></div></div></div>` },
  { id: 4, title: 'Centralized Auth Service', titleEn: 'Centralized Auth Service', desc: 'Сервис аутентификации и авторизации. JWT, RBAC, интеграция с OAuth2, защита от brute-force атак и rate limiting.', descEn: 'Centralized authentication and authorization service. JWT, RBAC, OAuth2 integration, brute-force protection, and rate limiting.', stack: ['Java 17', 'Spring Security', 'JWT', 'Redis'], color: '#ec4899', github: 'https://github.com/Daniil2022Ri/SpringSercutiry_V2/tree/main/src/main', preview: `<div style="background:#0a0a0f;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:45%;background:linear-gradient(90deg,#ec4899,#be185d);border-radius:4px"></div><div style="display:flex;gap:8px;flex:1;align-items:center;justify-content:center"><div style="background:rgba(236,72,153,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">🔐</span></div><div style="background:rgba(236,72,153,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">🔑</span></div></div></div>` },
  { id: 5, title: 'Optimized Data Access Layer', titleEn: 'Optimized Data Access Layer', desc: 'Рефакторинг слоя работы с БД. Решение проблемы N+1, внедрение L2-кэширования (Hibernate), оптимизация сложных HQL-запросов.', descEn: 'Database access layer refactoring. Solved N+1 problem, implemented L2 caching (Hibernate), optimized complex HQL queries.', stack: ['Java 11', 'Hibernate', 'PostgreSQL', 'Flyway'], color: '#06b6d4', github: 'https://github.com/Daniil2022Ri/MVC_Hibernate', preview: `<div style="background:#0a0a0f;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:40%;background:linear-gradient(90deg,#06b6d4,#0891b2);border-radius:4px"></div><div style="display:flex;gap:8px;flex:1;align-items:center;justify-content:center"><div style="background:rgba(6,182,212,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">🗄️</span></div></div></div>` }
];


const frontendProjects = [
  {
    id: 1, 
    title: 'TechStore Dashboard', 
    titleEn: 'TechStore Dashboard', 
    desc: 'SPA интернет-магазина. Сложная фильтрация, управление состоянием корзины, адаптивная сетка, темная тема.', 
    descEn: 'E-commerce SPA. Complex filtering, cart state management, responsive grid, dark theme.',
    stack: ['Vue 3', 'Composition API', 'CSS Grid', 'Pinia'], 
    color: '#6366f1',
    github: './Normal_verstka_Web/Site_Gadjet_Store/index.html',
    preview: `<div style="background:#0a0a0f;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:60%;background:linear-gradient(90deg,#6366f1,#a855f7);border-radius:4px"></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;flex:1"><div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:10px"><div style="height:30px;font-size:20px">📱</div></div><div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:10px"><div style="height:30px;font-size:20px">🎧</div></div><div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:10px"><div style="height:30px;font-size:20px">⌚</div></div><div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:10px"><div style="height:30px;font-size:20px">🔌</div></div></div></div>`
  },
  {
    id: 2, 
    title: 'Sneaker Store Platform', 
    titleEn: 'Sneaker Store Platform', 
    desc: 'Интерактивный e-commerce интерфейс с параллакс-эффектами, оптимизированными CSS-анимациями и реактивным управлением состоянием избранного.', 
    descEn: 'Interactive e-commerce interface with parallax effects, optimized CSS animations, and reactive favorites state management.',
    stack: ['React 18', 'useMemo', 'CSS Animations', 'Local Storage'], 
    color: '#ec4899',
    github: './Normal_verstka_Web/Site_shooth_Store/index.html',
    preview: `<div style="background:#0c0c12;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:50%;background:#fff;border-radius:4px"></div><div style="display:flex;gap:8px;flex:1;align-items:center;justify-content:center"><div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:15px;transform:rotate(-8deg)"><span style="font-size:24px">👟</span></div><div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:15px;transform:rotate(6deg)"><span style="font-size:24px">⚽</span></div><div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:15px;transform:rotate(-4deg)"><span style="font-size:24px">🏀</span></div></div></div>`
  },
  {
    id: 3, 
    title: 'Travel & Tourism Portal', 
    titleEn: 'Travel & Tourism Portal', 
    desc: 'Адаптивный туристический портал с ленивой загрузкой изображений (Lazy Loading), модальными окнами и оптимизированной CSS Grid версткой.', 
    descEn: 'Responsive travel portal with image Lazy Loading, modal windows, and optimized CSS Grid layout.',
    stack: ['React 18', 'Lazy Loading', 'CSS Grid', 'Responsive Design'], 
    color: '#06b6d4',
    github: './Normal_verstka_Web/Site_Travel_Store/index.html',
    preview: `<div style="background:#08080f;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:70%;background:linear-gradient(90deg,#7c3aed,#06b6d4);border-radius:4px"></div><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;flex:1;overflow:hidden"><img src="https://th.bing.com/th/id/OIP.LxVwjrsXVYG0vT-cbfkUkAHaE7?w=234&h=180&c=7&r=0&o=7&pid=1.7&rm=3" style="width:100%;height:100%;object-fit:cover;border-radius:6px;opacity:0.85" alt="Санторини"/><img src="https://th.bing.com/th/id/OIP.KXKMwGm8J9BGupJYJK36_wHaE8?w=266&h=180&c=7&r=0&o=7&pid=1.7&rm=3" style="width:100%;height:100%;object-fit:cover;border-radius:6px;opacity:0.85" alt="Бали"/><img src="https://th.bing.com/th/id/OIP.FaraYcZ1xh91DWAiZvsAOgHaEK?w=299&h=180&c=7&r=0&o=7&pid=1.7&rm=3" style="width:100%;height:100%;object-fit:cover;border-radius:6px;opacity:0.85" alt="Альпы"/></div></div>`
  },
  {
    id: 4, title: 'WeatherApp', titleEn: 'WeatherApp', 
    desc: 'Погода в реальном времени. Open-Meteo API, 50+ городов, почасовой прогноз, 7 дней.', 
    descEn: 'Real-time weather. Open-Meteo API, 50+ cities, hourly forecast, 7 days.',
    stack: ['React', 'Open-Meteo API', 'Fetch'], color: '#f59e0b',
    github: './Web_API_sites/Weather_monitoring_site/index.html', live: true,
    preview: `<div style="background:#0c1222;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:28px">☀️</span><span style="font-size:32px;font-weight:800;color:#f59e0b">24°</span></div><div style="display:flex;gap:4px;margin-top:auto"><div style="flex:1;height:30px;background:rgba(245,158,11,0.2);border-radius:4px"></div><div style="flex:1;height:40px;background:rgba(245,158,11,0.3);border-radius:4px"></div><div style="flex:1;height:25px;background:rgba(245,158,11,0.15);border-radius:4px"></div><div style="flex:1;height:35px;background:rgba(245,158,11,0.25);border-radius:4px"></div></div></div>`
  },
  {
    id: 5, title: 'Real-time Currency Dashboard', titleEn: 'Real-time Currency Dashboard', 
    desc: 'Финансовый дашборд с интеграцией внешнего API курсов валют. Реализован конвертер, визуализация данных и кэширование запросов.', 
    descEn: 'Financial dashboard with external currency exchange API integration. Features converter, data visualization, and request caching.',
    stack: ['React 18', 'ExchangeRate API', 'Chart.js', 'Custom Hooks'], color: '#22c55e',
    github: './Web_API_sites/CurrencyHub/index.html', live: true,
    preview: `<div style="background:#0a0f1a;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:20px">🇺🇸 → 🇷🇺</span><span style="font-size:24px;font-weight:800;color:#22c55e">91.45</span></div><div style="display:flex;align-items:flex-end;gap:3px;margin-top:auto;height:50px"><div style="flex:1;height:40%;background:rgba(34,197,94,0.3);border-radius:3px"></div><div style="flex:1;height:60%;background:rgba(34,197,94,0.4);border-radius:3px"></div><div style="flex:1;height:50%;background:rgba(34,197,94,0.35);border-radius:3px"></div><div style="flex:1;height:70%;background:rgba(34,197,94,0.5);border-radius:3px"></div><div style="flex:1;height:55%;background:rgba(34,197,94,0.38);border-radius:3px"></div><div style="flex:1;height:80%;background:rgba(34,197,94,0.55);border-radius:3px"></div><div style="flex:1;height:65%;background:rgba(34,197,94,0.45);border-radius:3px"></div></div></div>`
  }
];


const skillCategories = [
  { title: 'Core Backend', items: ['Java 17/21', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Kotlin'] },
  { title: 'Data & Messaging', items: ['PostgreSQL', 'Redis', 'Apache Kafka', 'RabbitMQ', 'Hibernate/JPA'] },
  { title: 'Architecture & Patterns', items: ['Microservices', 'DDD', 'CQRS', 'Event-Driven', 'REST/gRPC'] },
  { title: 'Frontend', items: ['React 18', 'Vue 3', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
  { title: 'DevOps & Tools', items: ['Docker', 'Kubernetes', 'GitLab CI', 'Grafana', 'JUnit 5/Mockito'] }
];


function SkillCategory({ category, index }) {
  return (
    <div className="skill-category-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <h4 className="skill-category-title">{category.title}</h4>
      <div className="skill-tags">
        {category.items.map(item => (
          <span key={item} className="skill-tag">{item}</span>
        ))}
      </div>
    </div>
  );
}

function GlitchText({ text, size = '4rem' }) {
  return (
    <div className="glitch-wrapper" style={{ fontSize: size }}>
      <span className="glitch" data-text={text}>{text}</span>
    </div>
  );
}

function Scanlines() { return <div className="scanlines"></div>; }

function Particles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w, h, particles = [];
    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < 50; i++) {
      particles.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2, size: Math.random() * 2 + 0.5, alpha: Math.random() * 0.4 + 0.1 });
    }
    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 136, ${p.alpha})`; ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="particles-canvas" />;
}

function ProjectCard({ project, index }) {
  const { lang } = useLang(); 
  const [hovered, setHovered] = useState(false);
  
  
  const title = lang === 'ru' ? project.title : (project.titleEn || project.title);
  const desc = lang === 'ru' ? project.desc : (project.descEn || project.desc);

  return (
    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card" style={{ '--delay': `${index * 0.15}s`, '--color': project.color }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="pc-glitch-border"></div>
      <div className="pc-preview" dangerouslySetInnerHTML={{ __html: project.preview }}></div>
      <div className="pc-info">
        <h3>{title}</h3>   
        <p>{desc}</p>      
        <div className="pc-stack">{project.stack.map(s => <span key={s} className="pc-tag">{s}</span>)}</div>
        {project.live && <span className="pc-live">● LIVE</span>} 
      </div>
      <div className={`pc-scan ${hovered ? 'active' : ''}`}></div>
    </a>
  );
}

function LangSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang-switcher">
      <button className={`lang-btn ${lang === 'ru' ? 'active' : ''}`} onClick={() => setLang('ru')}>
        <span className="lang-flag">🇷🇺</span><span>RU</span>
      </button>
      <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>
        <span className="lang-flag">🇬🇧</span><span>EN</span>
      </button>
    </div>
  );
}

function App() {
  const [lang, setLang] = useState('ru');
  const t = translations[lang];
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = 'FULLSTACK DEVELOPER';

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => { 
      if (i <= fullText.length) { setTypedText(fullText.slice(0, i)); i++; } 
      else { clearInterval(interval); } 
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setActiveSection(id); };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div className="br-portfolio">
        <Scanlines />
        <Particles />
        <LangSwitcher />
        
        <nav className={`br-nav ${scrollY > 300 ? 'visible' : ''}`}>
          <div className="br-nav-logo">DR</div>
          <div className="br-nav-links">
            <button onClick={() => scrollTo('hero')} className={activeSection === 'hero' ? 'active' : ''}>{t.navHero}</button>
            <button onClick={() => scrollTo('about')} className={activeSection === 'about' ? 'active' : ''}>{t.navAbout}</button>
            <button onClick={() => scrollTo('backend')} className={activeSection === 'backend' ? 'active' : ''}>{t.navBackend}</button>
            <button onClick={() => scrollTo('frontend')} className={activeSection === 'frontend' ? 'active' : ''}>{t.navFrontend}</button>
            <button onClick={() => scrollTo('contact')} className={activeSection === 'contact' ? 'active' : ''}>{t.navContact}</button>
          </div>
        </nav>

        <section id="hero" className="br-hero">
          <div className="br-hero-bg">
            <div className="br-orb br-orb-1"></div>
            <div className="br-orb br-orb-2"></div>
          </div>
          <div className="br-hero-content">
            <div className="br-hero-label"><span className="br-line"></span><span>{t.heroLabel}</span></div>
            <GlitchText text={typedText} size="clamp(3rem, 8vw, 7rem)" />
            <div className="br-hero-sub"><span className="br-cursor">_</span>{t.heroSub}</div>
            <div className="br-hero-actions">
              <button className="br-btn-primary" onClick={() => scrollTo('backend')}><span className="br-btn-glitch">{t.heroBtnWorks}</span></button>
              <button className="br-btn-ghost" onClick={() => scrollTo('contact')}>{t.heroBtnContact}</button>
            </div>
            <div className="br-hero-stats">
              <div><span className="br-stat-num">4+</span><span className="br-stat-label">{t.statJava}</span></div>
              <div><span className="br-stat-num">5+</span><span className="br-stat-label">{t.statBackend}</span></div>
              <div><span className="br-stat-num">4+</span><span className="br-stat-label">{t.statFrontend}</span></div>
            </div>
          </div>
          <div className="br-scroll-hint"><span>{t.scrollHint}</span><div className="br-scroll-line"></div></div>
        </section>

        <section id="about" className="br-about">
          <div className="br-section-label">{t.aboutLabel}</div>
          <div className="br-about-grid">
            <div className="br-about-left">
              <h2 className="br-section-title">{t.aboutTitle}<br/><span className="br-orange">{t.aboutName}</span></h2>
              <p className="br-about-text">{t.aboutText1}</p>
              <p className="br-about-text">{t.aboutText2}</p>
              <div className="br-about-focus">
                <span className="br-focus-icon">🎯</span>
                <span>{t.aboutFocus}</span>
              </div>
            </div>
            <div className="br-about-right">
              <h3 className="br-skills-main-title">{t.skillsLabel}</h3>
              <div className="br-skills-grid">
                {skillCategories.map((cat, i) => (
                  <SkillCategory key={cat.title} category={cat} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="backend" className="br-projects">
          <div className="br-section-label">{t.backendLabel}</div>
          <h2 className="br-section-title">{t.backendTitle}<br/><span className="br-orange">{t.backendSubtitle}</span></h2>
          <p className="br-section-desc">{t.backendDesc}</p>
          <div className="br-projects-grid">{backendProjects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}</div>
        </section>

        <section id="frontend" className="br-projects">
          <div className="br-section-label">{t.frontendLabel}</div>
          <h2 className="br-section-title">{t.frontendTitle}<br/><span className="br-orange">{t.frontendSubtitle}</span></h2>
          <p className="br-section-desc">{t.frontendDesc}</p>
          <div className="br-projects-grid">{frontendProjects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}</div>
        </section>

        <section id="contact" className="br-contact">
          <div className="br-section-label">{t.contactLabel}</div>
          <div className="br-contact-grid">
            <div className="br-contact-left">
              <h2 className="br-section-title">{t.contactTitle}<br/><span className="br-orange">{t.contactSubtitle}</span></h2>
              <p className="br-contact-text">{t.contactText}</p>
              <div className="br-contact-links">
                <a href="https://github.com/Daniil2022Ri" target="_blank" rel="noopener noreferrer" className="br-contact-link">
                  <span className="br-link-icon">💻</span><span>github.com/Daniil2022Ri</span>
                </a>
                <a href="mailto:hhffcgubv@gmail.com" className="br-contact-link">
                  <span className="br-link-icon">✉️</span><span>hhffcgubv@gmail.com</span>
                </a>
                <a href="tel:+79284102669" className="br-contact-link">
                  <span className="br-link-icon">📞</span><span>+7 (928) 410-26-69</span>
                </a>
            
                <a href="https://t.me/danilRyDeveloperFullStack" target="_blank" rel="noopener noreferrer" className="br-contact-link">
                  <span className="br-link-icon">💬</span><span>t.me/danilRyDeveloperFullStack</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="br-footer">
          <div className="br-footer-content">
            <div className="br-footer-left"><span className="br-footer-logo">DR</span><span>{t.footerRights}</span></div>
            <div className="br-footer-right"><span>{t.footerCreated}</span><span className="br-footer-version">v3.0.0</span></div>
          </div>
        </footer>
      </div>
    </LangContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
