const { useState, useEffect, useRef, createContext, useContext } = React;

// ===== TRANSLATIONS =====
const translations = {
  ru: {
    heroLabel: 'ПОРТФОЛИО // 2026',
    heroSub: 'Backend + Frontend. Java, Spring, React, Vue, TypeScript. Микросервисы, event-driven, pixel-perfect верстка.',
    heroBtnWorks: 'Смотреть работы',
    heroBtnContact: 'Связаться',
    statJava: 'лет Java',
    statBackend: 'backend проектов',
    statFrontend: 'frontend проектов',
    aboutLabel: '02 // ABOUT',
    aboutTitle: 'Рыбьяков',
    aboutName: 'Даниил',
    aboutText1: 'Fullstack-разработчик. 4+ года коммерческого опыта в Java-backend (финтех, e-commerce). Специализация — микросервисы, event-driven архитектура, интеграции. Путь от legacy-монолита до production-ready микросервисов.',
    aboutText2: 'Параллельно развиваю frontend: React, Vue, TypeScript, Next.js. Верю в pixel-perfect верстку, плавные анимации и чистый код. Каждый проект — это попытка создать что-то, что переживёт своего создателя.',
    aboutQuote: 'Все эти моменты затеряются во времени, как слёзы в дожде.',
    skillsBackend: 'BACKEND // SKILLS',
    skillsFrontend: 'FRONTEND // SKILLS',
    terminalWhoami: 'daniil-rybiyakov',
    terminalStack: 'Java Spring React Vue TypeScript Kafka Docker',
    terminalEdu: 'DSTU 2023 | Astrakhan College 2019',
    terminalUptime: 'coding for 4+ years',
    backendLabel: '03 // BACKEND PROJECTS',
    backendTitle: 'Java',
    backendSubtitle: 'Backend',
    backendDesc: 'Микросервисы, Spring Boot, Kafka, PostgreSQL. Enterprise-level код.',
    frontendLabel: '04 // FRONTEND LAYOUT',
    frontendTitle: 'Верстка',
    frontendSubtitle: 'сайтов',
    frontendDesc: 'Чистая вёрстка. Адаптив. Анимации. Vue 3 и React 18.',
    apiLabel: '05 // API PROJECTS',
    apiTitle: 'Работа с',
    apiSubtitle: 'API',
    apiDesc: 'Реальные данные. Реальные запросы. Реальные приложения.',
    contactLabel: '06 // CONTACT',
    contactTitle: 'Начнём',
    contactSubtitle: 'сотрудничество',
    contactText: 'Открыт к предложениям о работе, фриланс-проектам и интересным идеям. Backend, frontend, fullstack — готов к любым вызовам.',
    formName: 'ИМЯ // NAME',
    formNamePlaceholder: 'Введите имя',
    formEmail: 'EMAIL // EMAIL',
    formEmailPlaceholder: 'Введите email',
    formMessage: 'СООБЩЕНИЕ // MESSAGE',
    formMessagePlaceholder: 'Опишите проект...',
    formSubmit: 'Отправить сообщение',
    footerRights: '© 2026 // ALL RIGHTS RESERVED',
    footerCreated: 'СОЗДАНО В 2026',
    navHero: '01 // HERO',
    navAbout: '02 // ABOUT',
    navBackend: '03 // BACKEND',
    navFrontend: '04 // FRONTEND',
    navApi: '05 // API',
    navContact: '06 // CONTACT',
    scrollHint: 'ПРОКРУТИТЕ ВНИЗ',
    langRu: 'RU',
    langEn: 'EN'
  },
  en: {
    heroLabel: 'PORTFOLIO // 2026',
    heroSub: 'Backend + Frontend. Java, Spring, React, Vue, TypeScript. Microservices, event-driven, pixel-perfect markup.',
    heroBtnWorks: 'View works',
    heroBtnContact: 'Get in touch',
    statJava: 'years Java',
    statBackend: 'backend projects',
    statFrontend: 'frontend projects',
    aboutLabel: '02 // ABOUT',
    aboutTitle: 'Rybiyakov',
    aboutName: 'Daniil',
    aboutText1: 'Fullstack developer. 4+ years of commercial experience in Java backend (fintech, e-commerce). Specialization — microservices, event-driven architecture, integrations. Path from legacy monolith to production-ready microservices.',
    aboutText2: 'Parallel frontend development: React, Vue, TypeScript, Next.js. Believe in pixel-perfect markup, smooth animations and clean code. Every project is an attempt to create something that outlives its creator.',
    aboutQuote: 'All those moments will be lost in time, like tears in rain.',
    skillsBackend: 'BACKEND // SKILLS',
    skillsFrontend: 'FRONTEND // SKILLS',
    terminalWhoami: 'daniil-rybiyakov',
    terminalStack: 'Java Spring React Vue TypeScript Kafka Docker',
    terminalEdu: 'DSTU 2023 | Astrakhan College 2019',
    terminalUptime: 'coding for 4+ years',
    backendLabel: '03 // BACKEND PROJECTS',
    backendTitle: 'Java',
    backendSubtitle: 'Backend',
    backendDesc: 'Microservices, Spring Boot, Kafka, PostgreSQL. Enterprise-level code.',
    frontendLabel: '04 // FRONTEND LAYOUT',
    frontendTitle: 'Layout',
    frontendSubtitle: 'sites',
    frontendDesc: 'Clean markup. Responsive. Animations. Vue 3 and React 18.',
    apiLabel: '05 // API PROJECTS',
    apiTitle: 'Working with',
    apiSubtitle: 'API',
    apiDesc: 'Real data. Real requests. Real applications.',
    contactLabel: '06 // CONTACT',
    contactTitle: 'Let\'s start',
    contactSubtitle: 'collaboration',
    contactText: 'Open to job offers, freelance projects and interesting ideas. Backend, frontend, fullstack — ready for any challenges.',
    formName: 'NAME // NAME',
    formNamePlaceholder: 'Enter name',
    formEmail: 'EMAIL // EMAIL',
    formEmailPlaceholder: 'Enter email',
    formMessage: 'MESSAGE // MESSAGE',
    formMessagePlaceholder: 'Describe the project...',
    formSubmit: 'Send message',
    footerRights: '© 2026 // ALL RIGHTS RESERVED',
    footerCreated: 'CREATED IN 2026',
    navHero: '01 // HERO',
    navAbout: '02 // ABOUT',
    navBackend: '03 // BACKEND',
    navFrontend: '04 // FRONTEND',
    navApi: '05 // API',
    navContact: '06 // CONTACT',
    scrollHint: 'SCROLL DOWN',
    langRu: 'RU',
    langEn: 'EN'
  }
};

const LangContext = createContext();

function useLang() {
  return useContext(LangContext);
}

// ===== BACKEND PROJECTS =====
const backendProjects = [
  {
    id: 1, title: 'PaymentService', desc: 'Микросервис обработки платежей с асинхронной обработкой, кэшированием и enterprise-level security.',
    stack: ['Java 21', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Redis'],
    color: '#00ff88',
    github: 'https://github.com/Daniil2022Ri/PaymentService',
    preview: `<div style="background:#0a0a0f;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:60%;background:linear-gradient(90deg,#00ff88,#00cc6a);border-radius:4px"></div><div style="display:flex;gap:8px;flex:1;align-items:center;justify-content:center"><div style="background:rgba(0,255,136,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">💳</span></div><div style="background:rgba(0,255,136,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">🔒</span></div><div style="background:rgba(0,255,136,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">⚡</span></div></div></div>`
  },
  {
    id: 2, title: 'AIAssistantBackend', desc: 'Реактивный бэкенд для AI-ассистента с интеграцией OpenAI API. SSE, контекст в Redis, история в PostgreSQL.',
    stack: ['Java 21', 'Spring WebFlux', 'OpenAI API', 'Redis', 'PostgreSQL'],
    color: '#a855f7',
    github: 'https://github.com/Daniil2022Ri/AIAssistantBackend',
    preview: `<div style="background:#0a0a0f;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:50%;background:linear-gradient(90deg,#a855f7,#7c3aed);border-radius:4px"></div><div style="display:flex;gap:8px;flex:1;align-items:center;justify-content:center"><div style="background:rgba(168,85,247,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">🤖</span></div><div style="background:rgba(168,85,247,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">🧠</span></div></div></div>`
  },
  {
    id: 3, title: 'Bank Antifraud', desc: 'Прототип микросервисной архитектуры реального банка. Зона ответственности — Antifraud.',
    stack: ['Java 17', 'Spring Cloud', 'DDD', 'CQRS', 'Kafka'],
    color: '#f59e0b',
    github: 'https://github.com/Daniil2022Ri/Bank_DDD_Antifraund/tree/develop/antifraud',
    preview: `<div style="background:#0a0a0f;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:55%;background:linear-gradient(90deg,#f59e0b,#f97316);border-radius:4px"></div><div style="display:flex;gap:8px;flex:1;align-items:center;justify-content:center"><div style="background:rgba(245,158,11,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">🏦</span></div><div style="background:rgba(245,158,11,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">🛡️</span></div></div></div>`
  },
  {
    id: 4, title: 'Spring Security Demo', desc: 'Базовая демонстрация Spring Security с Frontend + Fetch. Аутентификация, авторизация, JWT.',
    stack: ['Java 17', 'Spring Security', 'JWT', 'HTML/CSS/JS'],
    color: '#ec4899',
    github: 'https://github.com/Daniil2022Ri/SpringSercutiry_V2/tree/main/src/main',
    preview: `<div style="background:#0a0a0f;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:45%;background:linear-gradient(90deg,#ec4899,#be185d);border-radius:4px"></div><div style="display:flex;gap:8px;flex:1;align-items:center;justify-content:center"><div style="background:rgba(236,72,153,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">🔐</span></div><div style="background:rgba(236,72,153,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">🔑</span></div></div></div>`
  },
  {
    id: 5, title: 'Hibernate Base', desc: 'Базовый проект Hibernate. CRUD, связи, HQL, кэширование второго уровня.',
    stack: ['Java 11', 'Hibernate', 'PostgreSQL', 'Maven'],
    color: '#06b6d4',
    github: 'https://github.com/Daniil2022Ri/MVC_Hibernate',
    preview: `<div style="background:#0a0a0f;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:40%;background:linear-gradient(90deg,#06b6d4,#0891b2);border-radius:4px"></div><div style="display:flex;gap:8px;flex:1;align-items:center;justify-content:center"><div style="background:rgba(6,182,212,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">🗄️</span></div></div></div>`
  },
  {
    id: 6, title: 'Spring MVC Base', desc: 'Базовый проект Spring MVC. Контроллеры, Thymeleaf, валидация, REST.',
    stack: ['Java 11', 'Spring MVC', 'Thymeleaf', 'Maven'],
    color: '#6366f1',
    github: 'https://github.com/Daniil2022Ri/PP_2_2_2_spring-mvc/tree/master/src',
    preview: `<div style="background:#0a0a0f;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:40%;background:linear-gradient(90deg,#6366f1,#4f46e5);border-radius:4px"></div><div style="display:flex;gap:8px;flex:1;align-items:center;justify-content:center"><div style="background:rgba(99,102,241,0.08);border-radius:8px;padding:15px"><span style="font-size:24px">🌐</span></div></div></div>`
  }
];

const layoutSites = [
  {
    id: 1, title: 'TechStore', desc: 'Магазин гаджетов на Vue 3. Тёмная тема, корзина, фильтрация, адаптив.',
    stack: ['Vue 3', 'CSS Grid', 'Composition API'],
    color: '#6366f1',
    github: 'https://github.com/Daniil2022Ri/Portfolio_FullStack/tree/main/Normal_verstka_Web/Site_Gadjet_Store/',
    preview: `<div style="background:#0a0a0f;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:60%;background:linear-gradient(90deg,#6366f1,#a855f7);border-radius:4px"></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;flex:1"><div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:10px"><div style="height:30px;font-size:20px">📱</div></div><div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:10px"><div style="height:30px;font-size:20px">🎧</div></div><div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:10px"><div style="height:30px;font-size:20px">⌚</div></div><div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:10px"><div style="height:30px;font-size:20px">🔌</div></div></div></div>`
  },
  {
    id: 2, title: 'KickStore', desc: 'Магазин кроссовок на React 18. Параллакс, лайки, бегущая строка.',
    stack: ['React 18', 'useMemo', 'CSS Animations'],
    color: '#ec4899',
    github: 'https://github.com/Daniil2022Ri/Portfolio_FullStack/tree/main/Normal_verstka_Web/Site_kick_Store/',
    preview: `<div style="background:#0c0c12;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:50%;background:#fff;border-radius:4px"></div><div style="display:flex;gap:8px;flex:1;align-items:center;justify-content:center"><div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:15px;transform:rotate(-8deg)"><span style="font-size:24px">👟</span></div><div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:15px;transform:rotate(6deg)"><span style="font-size:24px">⚽</span></div><div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:15px;transform:rotate(-4deg)"><span style="font-size:24px">🏀</span></div></div></div>`
  },
  {
    id: 3, title: 'Wanderlust', desc: 'Туристический сайт на React. Реальные фото, модальные окна, адаптив.',
    stack: ['React 18', 'Lazy Loading', 'CSS Grid'],
    color: '#06b6d4',
    github: 'https://github.com/Daniil2022Ri/Portfolio_FullStack/tree/main/Normal_verstka_Web/Site_shooth_Store/',
    preview: `<div style="background:#08080f;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="height:8px;width:70%;background:linear-gradient(90deg,#7c3aed,#06b6d4);border-radius:4px"></div><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;flex:1;overflow:hidden"><img src="https://th.bing.com/th/id/OIP.LxVwjrsXVYG0vT-cbfkUkAHaE7?w=234&h=180&c=7&r=0&o=7&pid=1.7&rm=3" style="width:100%;height:100%;object-fit:cover;border-radius:6px;opacity:0.85" alt="Санторини"/><img src="https://th.bing.com/th/id/OIP.KXKMwGm8J9BGupJYJK36_wHaE8?w=266&h=180&c=7&r=0&o=7&pid=1.7&rm=3" style="width:100%;height:100%;object-fit:cover;border-radius:6px;opacity:0.85" alt="Бали"/><img src="https://th.bing.com/th/id/OIP.FaraYcZ1xh91DWAiZvsAOgHaEK?w=299&h=180&c=7&r=0&o=7&pid=1.7&rm=3" style="width:100%;height:100%;object-fit:cover;border-radius:6px;opacity:0.85" alt="Альпы"/></div></div>`
  }
];

const apiProjects = [
  {
    id: 1, title: 'WeatherApp', desc: 'Погода в реальном времени. Open-Meteo API, 50+ городов, почасовой прогноз, 7 дней.',
    stack: ['React', 'Open-Meteo API', 'Fetch'],
    color: '#f59e0b',
    live: true,
    github: 'https://github.com/Daniil2022Ri/Portfolio_FullStack/tree/main/Web_API_sites/CurrencyHub/',
    preview: `<div style="background:#0c1222;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:28px">☀️</span><span style="font-size:32px;font-weight:800;color:#f59e0b">24°</span></div><div style="display:flex;gap:4px;margin-top:auto"><div style="flex:1;height:30px;background:rgba(245,158,11,0.2);border-radius:4px"></div><div style="flex:1;height:40px;background:rgba(245,158,11,0.3);border-radius:4px"></div><div style="flex:1;height:25px;background:rgba(245,158,11,0.15);border-radius:4px"></div><div style="flex:1;height:35px;background:rgba(245,158,11,0.25);border-radius:4px"></div></div></div>`
  },
  {
    id: 2, title: 'CurrencyHub', desc: 'Курсы валют в реальном времени. exchangerate-api, конвертер, графики.',
    stack: ['React', 'exchangerate-api', 'Charts'],
    color: '#22c55e',
    live: true,
    github: 'https://github.com/Daniil2022Ri/Portfolio_FullStack/tree/main/Web_API_sites/Weather_monitoring_site',
    preview: `<div style="background:#0a0f1a;padding:20px;border-radius:12px;height:100%;display:flex;flex-direction:column;gap:8px"><div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:20px">🇺🇸 → 🇷🇺</span><span style="font-size:24px;font-weight:800;color:#22c55e">91.45</span></div><div style="display:flex;align-items:flex-end;gap:3px;margin-top:auto;height:50px"><div style="flex:1;height:40%;background:rgba(34,197,94,0.3);border-radius:3px"></div><div style="flex:1;height:60%;background:rgba(34,197,94,0.4);border-radius:3px"></div><div style="flex:1;height:50%;background:rgba(34,197,94,0.35);border-radius:3px"></div><div style="flex:1;height:70%;background:rgba(34,197,94,0.5);border-radius:3px"></div><div style="flex:1;height:55%;background:rgba(34,197,94,0.38);border-radius:3px"></div><div style="flex:1;height:80%;background:rgba(34,197,94,0.55);border-radius:3px"></div><div style="flex:1;height:65%;background:rgba(34,197,94,0.45);border-radius:3px"></div></div></div>`
  }
];

const backendSkills = [
  { name: 'Java 8-21', level: 95 },
  { name: 'Spring Boot', level: 90 },
  { name: 'Spring Security', level: 85 },
  { name: 'Spring Cloud', level: 80 },
  { name: 'Spring AI', level: 70 },
  { name: 'Spring Batch', level: 75 },
  { name: 'Spring MVC', level: 88 },
  { name: 'PostgreSQL', level: 85 },
  { name: 'MySQL', level: 75 },
  { name: 'Oracle DB', level: 70 },
  { name: 'Redis', level: 80 },
  { name: 'Elasticsearch', level: 72 },
  { name: 'Apache Kafka', level: 82 },
  { name: 'RabbitMQ', level: 78 },
  { name: 'gRPC', level: 75 },
  { name: 'REST API', level: 92 },
  { name: 'Apache Camel', level: 70 },
  { name: 'Docker', level: 80 },
  { name: 'Kubernetes', level: 65 },
  { name: 'GitLab CI', level: 72 },
  { name: 'Jenkins', level: 68 },
  { name: 'Grafana', level: 70 },
  { name: 'ELK Stack', level: 65 },
  { name: 'JUnit 5', level: 85 },
  { name: 'Mockito', level: 88 },
  { name: 'Integration Tests', level: 80 },
  { name: 'DDD', level: 78 },
  { name: 'CQRS', level: 75 },
  { name: 'Microservices', level: 85 },
  { name: 'Event-Driven', level: 82 },
  { name: 'Kotlin', level: 60 },
  { name: 'Python', level: 55 },
  { name: 'C#', level: 50 },
  { name: 'Git', level: 90 },
  { name: 'Maven', level: 88 },
  { name: 'Gradle', level: 75 },
];

const frontendSkills = [
  { name: 'React 18', level: 90 },
  { name: 'Vue 3', level: 75 },
  { name: 'TypeScript', level: 70 },
  { name: 'Next.js', level: 65 },
  { name: 'JavaScript', level: 85 },
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 95 },
  { name: 'Tailwind CSS', level: 88 },
  { name: 'Node.js', level: 60 },
  { name: 'Webpack', level: 55 },
  { name: 'Vite', level: 65 },
  { name: 'Selenium', level: 50 },
  { name: 'Postman', level: 80 },
  { name: 'Figma', level: 45 },
  { name: 'Linux', level: 70 },
  { name: 'Nginx', level: 60 },
  { name: 'MongoDB', level: 55 },
  { name: 'GraphQL', level: 50 },
  { name: 'Testcontainers', level: 65 },
  { name: 'SAGA', level: 60 },
  { name: 'Circuit Breaker', level: 58 },
];

function SkillBar({ skill, index, delayOffset = 0 }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setWidth(skill.level), 100 + index * 50 + delayOffset);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [skill.level, index, delayOffset]);
  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-header"><span className="skill-name">{skill.name}</span><span className="skill-percent">{skill.level}%</span></div>
      <div className="skill-track"><div className="skill-fill" style={{ width: `${width}%` }}></div></div>
    </div>
  );
}

function SkillsPanel({ title, skills, index }) {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState('0px');
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight + 'px');
    }
  }, [skills]);

  return (
    <div className="br-skills-panel">
      <div className="skills-panel-header" onClick={() => setExpanded(!expanded)}>
        <h3>{title}</h3>
        <span className={`skills-toggle ${expanded ? 'expanded' : ''}`}>▼</span>
      </div>
      <div 
        className="skills-panel-content" 
        ref={contentRef}
        style={{ 
          maxHeight: expanded ? contentHeight : '0px',
          opacity: expanded ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease'
        }}
      >
        {skills.map((s, i) => <SkillBar key={s.name} skill={s} index={i} delayOffset={index * 200} />)}
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
  const [hovered, setHovered] = useState(false);
  return (
    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card" style={{ '--delay': `${index * 0.15}s`, '--color': project.color }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="pc-glitch-border"></div>
      <div className="pc-preview" dangerouslySetInnerHTML={{ __html: project.preview }}></div>
      <div className="pc-info">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
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
      <button 
        className={`lang-btn ${lang === 'ru' ? 'active' : ''}`} 
        onClick={() => setLang('ru')}
      >
        <span className="lang-flag">🇷🇺</span>
        <span>RU</span>
      </button>
      <button 
        className={`lang-btn ${lang === 'en' ? 'active' : ''}`} 
        onClick={() => setLang('en')}
      >
        <span className="lang-flag">🇬🇧</span>
        <span>EN</span>
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
    const interval = setInterval(() => { if (i <= fullText.length) { setTypedText(fullText.slice(0, i)); i++; } else { clearInterval(interval); } }, 80);
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
            <button onClick={() => scrollTo('api')} className={activeSection === 'api' ? 'active' : ''}>{t.navApi}</button>
            <button onClick={() => scrollTo('contact')} className={activeSection === 'contact' ? 'active' : ''}>{t.navContact}</button>
          </div>
        </nav>

        <section id="hero" className="br-hero">
          <div className="br-hero-bg">
            <div className="br-orb br-orb-1"></div>
            <div className="br-orb br-orb-2"></div>
            <div className="br-orb br-orb-3"></div>
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
              <div><span className="br-stat-num">6+</span><span className="br-stat-label">{t.statBackend}</span></div>
              <div><span className="br-stat-num">5+</span><span className="br-stat-label">{t.statFrontend}</span></div>
            </div>
          </div>
          <div className="br-hero-visual">
            <div className="br-holo-card" style={{'--delay': '0s'}}><div className="br-holo-content"><span className="br-holo-icon">☕</span><span className="br-holo-text">JAVA</span></div></div>
            <div className="br-holo-card" style={{'--delay': '0.3s'}}><div className="br-holo-content"><span className="br-holo-icon">⚛️</span><span className="br-holo-text">REACT</span></div></div>
            <div className="br-holo-card" style={{'--delay': '0.6s'}}><div className="br-holo-content"><span className="br-holo-icon">🐳</span><span className="br-holo-text">DEVOPS</span></div></div>
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
              <div className="br-about-quote"><span className="br-quote-mark">"</span>{t.aboutQuote}<span className="br-quote-mark">"</span></div>
            </div>
            <div className="br-about-right">
              <SkillsPanel title={t.skillsBackend} skills={backendSkills} index={0} />
              <SkillsPanel title={t.skillsFrontend} skills={frontendSkills} index={1} />
              <div className="br-terminal" style={{marginTop: '1.5rem'}}>
                <div className="br-terminal-header"><span></span><span></span><span></span><span>terminal — bash</span></div>
                <div className="br-terminal-body">
                  <div><span className="br-prompt">$</span> whoami</div>
                  <div className="br-output">{t.terminalWhoami}</div>
                  <div><span className="br-prompt">$</span> cat stack.txt</div>
                  <div className="br-output">{t.terminalStack}</div>
                  <div><span className="br-prompt">$</span> cat education.txt</div>
                  <div className="br-output">{t.terminalEdu}</div>
                  <div><span className="br-prompt">$</span> uptime</div>
                  <div className="br-output">{t.terminalUptime}</div>
                  <div><span className="br-prompt">$</span> <span className="br-cursor-blink">_</span></div>
                </div>
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
          <div className="br-projects-grid">{layoutSites.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}</div>
        </section>

        <section id="api" className="br-projects br-api-section">
          <div className="br-section-label">{t.apiLabel}</div>
          <h2 className="br-section-title">{t.apiTitle}<br/><span className="br-orange">{t.apiSubtitle}</span></h2>
          <p className="br-section-desc">{t.apiDesc}</p>
          <div className="br-projects-grid br-api-grid">{apiProjects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}</div>
        </section>

        <section id="contact" className="br-contact">
          <div className="br-section-label">{t.contactLabel}</div>
          <div className="br-contact-grid">
            <div className="br-contact-left">
              <h2 className="br-section-title">{t.contactTitle}<br/><span className="br-orange">{t.contactSubtitle}</span></h2>
              <p className="br-contact-text">{t.contactText}</p>
              <div className="br-contact-links">
                <a href="https://github.com/Daniil2022Ri" target="_blank" rel="noopener noreferrer" className="br-contact-link"><span className="br-link-icon">💻</span><span>github.com/Daniil2022Ri</span></a>
                <a href="mailto:dryniakov@mail.ru" className="br-contact-link"><span className="br-link-icon">✉️</span><span>dryniakov@mail.ru</span></a>
                <a href="tel:+79284102669" className="br-contact-link"><span className="br-link-icon">📞</span><span>+7 (928) 410-26-69</span></a>
                <a href="https://t.me/danilRyDeveloper" target="_blank" rel="noopener noreferrer" className="br-contact-link"><span className="br-link-icon">💬</span><span>t.me/danilRyDeveloper</span></a>
              </div>
            </div>
            
          </div>
        </section>

        <footer className="br-footer">
          <div className="br-footer-content">
            <div className="br-footer-left"><span className="br-footer-logo">DR</span><span>{t.footerRights}</span></div>
            <div className="br-footer-right"><span>{t.footerCreated}</span><span className="br-footer-version">v2.0.49</span></div>
          </div>
        </footer>
      </div>
    </LangContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

