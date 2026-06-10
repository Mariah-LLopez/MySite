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

  // Data constellation hero canvas
  const canvas = document.getElementById('constellation-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const labels = ['UX', 'Research', 'Accessibility', 'Analytics', 'Documentation', 'Development', 'Strategy'];
    let pointer = { x: -999, y: -999 };
    let nodes = [];

    const resize = () => {
      const hero = canvas.parentElement;
      canvas.width = hero.clientWidth;
      canvas.height = hero.clientHeight;
      nodes = labels.map((label) => ({
        label,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 20 || n.x > canvas.width - 20) n.vx *= -1;
        if (n.y < 20 || n.y > canvas.height - 20) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 170 || Math.hypot(pointer.x - a.x, pointer.y - a.y) < 100) {
            ctx.strokeStyle = 'rgba(88,80,236,0.25)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        ctx.fillStyle = 'rgba(255,115,0,0.9)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fill();
        const themeText = getComputedStyle(document.body).getPropertyValue('--text').trim() || '#111827';
        ctx.fillStyle = themeText;
        ctx.font = '600 12px Inter';
        ctx.fillText(node.label, node.x + 8, node.y - 8);
      });

      requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    });
    canvas.addEventListener('mouseleave', () => { pointer = { x: -999, y: -999 }; });

    resize();
    draw();
  }

  // Footer year
  document.querySelectorAll('#year').forEach((year) => {
    year.textContent = String(new Date().getFullYear());
  });
})();
