// Global interactions and motion system
(() => {
  const body = document.body;
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const themeToggle = document.querySelector('.theme-toggle');
  const langBtn = document.querySelector('.lang-btn');
  const backToTop = document.querySelector('.back-to-top');

  // Active navigation state
  const page = body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach((link) => {
    if (link.dataset.nav === page) link.setAttribute('aria-current', 'page');
  });

  // Mobile navigation
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('open');
    });
  }

  // Theme toggle
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') body.setAttribute('data-theme', 'dark');
  else if (savedTheme === 'light') body.removeAttribute('data-theme');
  if (themeToggle) {
    const syncThemeIcon = () => {
      themeToggle.textContent = body.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
    };
    syncThemeIcon();
    themeToggle.addEventListener('click', () => {
      const next = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      if (next === 'light') body.removeAttribute('data-theme');
      else body.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      syncThemeIcon();
    });
  }

  // Language toggle (placeholder)
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      langBtn.textContent = langBtn.textContent.trim() === 'EN' ? 'ES' : 'EN';
    });
  }

  // Scroll reveal animations
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  // Back to top button
  if (backToTop) {
    const toggleBackButton = () => backToTop.classList.toggle('visible', window.scrollY > 420);
    window.addEventListener('scroll', toggleBackButton);
    toggleBackButton();
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Footer easter egg
  const footerEgg = document.getElementById('footer-easter-egg');
  const hiddenMessage = document.querySelector('.hidden-message');
  if (footerEgg && hiddenMessage) {
    footerEgg.addEventListener('click', () => {
      hiddenMessage.textContent = '✨ You found a hidden interaction. Thanks for exploring!';
      setTimeout(() => { hiddenMessage.textContent = ''; }, 2600);
    });
  }

  // Generic filter groups
  document.querySelectorAll('[data-filter-group]').forEach((group) => {
    const target = document.querySelector(`[data-filter-target="${group.dataset.filterGroup}"]`) || document.getElementById(group.dataset.filterGroup);
    if (!target) return;

    const cards = target.querySelectorAll('[data-category]');
    group.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.filter-btn').forEach((node) => node.classList.remove('active'));
        btn.classList.add('active');
        const value = btn.dataset.filter.toLowerCase();
        cards.forEach((card) => {
          const categories = card.dataset.category.toLowerCase();
          const match = value === 'all' || categories.includes(value);
          card.style.display = match ? '' : 'none';
        });
      });
    });
  });

  // Search for projects and writing
  document.querySelectorAll('[data-search-input]').forEach((input) => {
    const target = document.querySelector(input.dataset.searchInput);
    if (!target) return;
    const cards = target.querySelectorAll('[data-category], .project-card, .writing-card');

    input.addEventListener('input', () => {
      const query = input.value.trim().toLowerCase();
      cards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? '' : 'none';
      });
    });
  });

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const item = question.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      item.classList.toggle('open');
      question.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  // Project card tilt and depth
  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.transform = `rotateX(${(0.5 - y) * 4}deg) rotateY(${(x - 0.5) * 6}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // Magnetic button hover
  document.querySelectorAll('.magnetic').forEach((button) => {
    button.addEventListener('mousemove', (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);
      button.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = '';
    });
  });

  // Cursor-reactive parallax blocks
  document.querySelectorAll('[data-parallax]').forEach((item) => {
    item.addEventListener('mousemove', (event) => {
      const rect = item.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
      item.style.transform = `translate3d(${x * 12}px, ${y * 12}px, 0)`;
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = '';
    });
  });

  // Keyboard playground effect
  const keyContainer = document.getElementById('keyboard-playground');
  document.addEventListener('keydown', (event) => {
    const tag = document.activeElement?.tagName;
    if (!keyContainer || tag === 'INPUT' || tag === 'TEXTAREA') return;
    const pop = document.createElement('span');
    pop.className = 'key-pop';
    pop.textContent = event.key.length === 1 ? event.key.toUpperCase() : event.key;
    pop.style.left = `${Math.random() * 90 + 5}%`;
    pop.style.top = `${Math.random() * 70 + 15}%`;
    keyContainer.appendChild(pop);
    setTimeout(() => pop.remove(), 1000);
  });

  // Octopus hero canvas
  const canvas = document.getElementById('octopus-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const OCTOPUS_COLORS = ['#F5A8BD', '#98B6EB', '#CDB7F3', '#F7BCD0', '#AAC4F1'];
    const COUNT = 10;
    const FLEE_RADIUS = 140;
    const MAX_SPEED = 3.8;
    let mouse = { x: -9999, y: -9999 };
    let octopuses = [];

    const initOctopuses = () => {
      octopuses = Array.from({ length: COUNT }, (_, i) => ({
        x: 80 + Math.random() * Math.max(1, canvas.width - 160),
        y: 80 + Math.random() * Math.max(1, canvas.height - 160),
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        color: OCTOPUS_COLORS[i % OCTOPUS_COLORS.length],
        r: 16 + Math.random() * 8,
        wobble: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const hero = canvas.parentElement;
      canvas.width = hero.clientWidth;
      canvas.height = hero.clientHeight;
      initOctopuses();
    };

    const drawOctopus = ({ x, y, r, color, wobble }) => {
      ctx.save();
      ctx.translate(x, y);

      ctx.shadowColor = 'rgba(95, 78, 133, 0.12)';
      ctx.shadowBlur = r * 0.45;
      ctx.shadowOffsetY = r * 0.12;

      for (let i = 0; i < 8; i++) {
        const spread = (i / 7 - 0.5) * Math.PI * 0.95;
        const baseAngle = Math.PI / 2 + spread;
        const bx = Math.cos(baseAngle) * r * 0.5;
        const by = r * 0.35 + Math.sin(baseAngle) * r * 0.18;
        const wave = Math.sin(wobble + i * 0.8) * r * 0.22;
        const len = r * (0.78 + (i % 2) * 0.18);
        const cpx = bx + Math.cos(baseAngle) * len * 0.28 + wave;
        const cpy = by + len * 0.45;
        const ex = bx + Math.cos(baseAngle) * len * 0.2 + wave * 0.85;
        const ey = by + len;

        ctx.globalAlpha = 0.96;
        ctx.strokeStyle = color;
        ctx.lineWidth = r * 0.24;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.quadraticCurveTo(cpx, cpy, ex, ey);
        ctx.stroke();
      }

      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowColor = 'transparent';

      ctx.globalAlpha = 0.98;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(-r * 0.82, r * 0.28);
      ctx.bezierCurveTo(-r * 0.98, -r * 0.3, -r * 0.48, -r * 0.95, 0, -r * 0.95);
      ctx.bezierCurveTo(r * 0.48, -r * 0.95, r * 0.98, -r * 0.3, r * 0.82, r * 0.28);
      ctx.quadraticCurveTo(0, r * 0.95, -r * 0.82, r * 0.28);
      ctx.fill();

      ctx.globalAlpha = 0.2;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.ellipse(-r * 0.24, -r * 0.42, r * 0.34, r * 0.2, -0.28, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = 1;
      ctx.strokeStyle = 'rgba(77, 62, 112, 0.9)';
      ctx.lineWidth = Math.max(2, r * 0.09);
      ctx.lineCap = 'round';

      ctx.beginPath();
      ctx.arc(-r * 0.25, -r * 0.02, r * 0.14, Math.PI, 0, false);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(r * 0.25, -r * 0.02, r * 0.14, Math.PI, 0, false);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, r * 0.12, r * 0.18, 0.15 * Math.PI, 0.85 * Math.PI, false);
      ctx.stroke();

      ctx.fillStyle = 'rgba(243, 122, 157, 0.55)';
      ctx.beginPath();
      ctx.arc(-r * 0.43, r * 0.12, r * 0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(r * 0.43, r * 0.12, r * 0.1, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      octopuses.forEach((oct) => {
        const dx = oct.x - mouse.x;
        const dy = oct.y - mouse.y;
        const dist = Math.hypot(dx, dy);

        if (dist < FLEE_RADIUS && dist > 0) {
          const force = ((FLEE_RADIUS - dist) / FLEE_RADIUS) * 0.42;
          oct.vx += (dx / dist) * force;
          oct.vy += (dy / dist) * force;
        }

        const speed = Math.hypot(oct.vx, oct.vy);
        if (speed > MAX_SPEED) {
          oct.vx = (oct.vx / speed) * MAX_SPEED;
          oct.vy = (oct.vy / speed) * MAX_SPEED;
        }

        oct.vx *= 0.97;
        oct.vy *= 0.97;
        oct.vx += (Math.random() - 0.5) * 0.04;
        oct.vy += (Math.random() - 0.5) * 0.04;

        oct.x += oct.vx;
        oct.y += oct.vy;
        oct.wobble += 0.05;

        const pad = oct.r * 2;
        if (oct.x < pad) { oct.x = pad; oct.vx = Math.abs(oct.vx); }
        if (oct.x > canvas.width - pad) { oct.x = canvas.width - pad; oct.vx = -Math.abs(oct.vx); }
        if (oct.y < pad) { oct.y = pad; oct.vy = Math.abs(oct.vy); }
        if (oct.y > canvas.height - pad) { oct.y = canvas.height - pad; oct.vy = -Math.abs(oct.vy); }

        drawOctopus(oct);
      });

      requestAnimationFrame(animate);
    };

    const hero = canvas.parentElement;
    window.addEventListener('resize', resize);
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    });
    hero.addEventListener('mouseleave', () => { mouse = { x: -9999, y: -9999 }; });

    resize();
    animate();
  }

  // Footer year
  document.querySelectorAll('#year').forEach((year) => {
    year.textContent = String(new Date().getFullYear());
  });
})();
