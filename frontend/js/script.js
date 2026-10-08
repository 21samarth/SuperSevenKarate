// ── Navbar scroll ──
(function () {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  function updateNav() { navbar.classList.toggle('scrolled', window.scrollY > 50); }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
})();

// ── Mobile menu ──
(function () {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();

// ── Scroll reveal (safe) ──
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length || !window.IntersectionObserver) return;
  els.forEach(el => el.classList.add('animate-ready'));
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  els.forEach(el => obs.observe(el));
  setTimeout(() => { els.forEach(el => el.classList.add('visible')); }, 2000);
})();

// ── Active nav ──
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// ── Event filter ──
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
  const cards = document.querySelectorAll('.event-full-card[data-type]');
  if (!filterBtns.length) return;
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.type === filter) ? '' : 'none';
      });
    });
  });
})();

// ── Gallery filter ──
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn[data-gallery-filter]');
  const items = document.querySelectorAll('.gallery-item[data-category]');
  if (!filterBtns.length) return;
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.galleryFilter;
      items.forEach(item => {
        item.style.display = (filter === 'all' || item.dataset.category === filter) ? '' : 'none';
      });
    });
  });
})();

// ── Gallery lightbox ──
(function () {
  const items = document.querySelectorAll('.gallery-item');
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const lbImg = document.getElementById('lbImg');
  const close = lb.querySelector('.lightbox-close');
  const caption = lb.querySelector('.lightbox-caption');
  let current = 0;
  function open(i) {
    current = i;
    const img = items[i].querySelector('img');
    if (img && lbImg) { lbImg.src = img.src; lbImg.alt = img.alt || ''; }
    if (caption) caption.textContent = items[i].dataset.caption || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLb() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    if (lbImg) lbImg.src = '';
  }
  items.forEach((item, i) => item.addEventListener('click', () => open(i)));
  if (close) close.addEventListener('click', closeLb);
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  const prev = lb.querySelector('.lightbox-prev');
  const next = lb.querySelector('.lightbox-next');
  if (prev) prev.addEventListener('click', e => { e.stopPropagation(); open((current-1+items.length)%items.length); });
  if (next) next.addEventListener('click', e => { e.stopPropagation(); open((current+1)%items.length); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key==='Escape') closeLb();
    if (e.key==='ArrowLeft' && prev) prev.click();
    if (e.key==='ArrowRight' && next) next.click();
  });
})();

// ── Animated counters ──
(function () {
  const counters = document.querySelectorAll('.ach-num, .stat-num');
  if (!counters.length || !window.IntersectionObserver) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      obs.unobserve(e.target);
      const el = e.target;
      const raw = el.textContent.replace(/[^0-9]/g, '');
      const target = parseInt(raw, 10);
      if (isNaN(target)) return;
      const suffix = el.textContent.replace(/[0-9]/g, '').replace(/,/g, '');
      let start = null;
      const step = ts => {
        if (!start) start = ts;
        const prog = Math.min((ts - start) / 1600, 1);
        const ease = 1 - Math.pow(1 - prog, 3);
        el.textContent = Math.floor(ease * target) + suffix;
        if (prog < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
})();

// ── Contact form — WhatsApp + Email integration ──
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const fields = {
    name:    { el: form.querySelector('#name'),    msg: form.querySelector('#nameError'),    rule: v => v.trim().length >= 2,                     errMsg: 'Please enter your full name.' },
    email:   { el: form.querySelector('#email'),   msg: form.querySelector('#emailError'),   rule: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),    errMsg: 'Enter a valid email.' },
    phone:   { el: form.querySelector('#phone'),   msg: form.querySelector('#phoneError'),   rule: v => /^[\d\s+\-()]{8,15}$/.test(v.trim()),    errMsg: 'Enter a valid phone number.' },
    message: { el: form.querySelector('#message'), msg: form.querySelector('#messageError'), rule: v => v.trim().length >= 10,                    errMsg: 'Message must be at least 10 characters.' },
  };

  function validateField(key) {
    const f = fields[key]; if (!f.el) return true;
    const valid = f.rule(f.el.value);
    f.el.classList.toggle('error', !valid);
    if (f.msg) { f.msg.textContent = valid ? '' : f.errMsg; f.msg.classList.toggle('show', !valid); }
    return valid;
  }

  Object.keys(fields).forEach(key => {
    if (fields[key].el) {
      fields[key].el.addEventListener('blur',  () => validateField(key));
      fields[key].el.addEventListener('input', () => { if (fields[key].el.classList.contains('error')) validateField(key); });
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!Object.keys(fields).map(k => validateField(k)).every(Boolean)) return;

    // Collect values
    const name     = fields.name.el.value.trim();
    const email    = fields.email.el.value.trim();
    const phone    = fields.phone.el.value.trim();
    const interestEl = form.querySelector('#interest');
    const interest = (interestEl && interestEl.value) ? interestEl.value : 'Not specified';
    const message  = fields.message.el.value.trim();

    // ── 1. WhatsApp — opens in new tab with pre-filled message ──
    const OWNER_WA = '919074486679'; // owner number: +91 9074486679
    const waText = encodeURIComponent(
      '*New Enquiry — Wellness Karate Academy*\n\n' +
      '*Name:* '          + name     + '\n' +
      '*Phone:* '         + phone    + '\n' +
      '*Email:* '         + email    + '\n' +
      '*Interested In:* ' + interest + '\n\n' +
      '*Message:*\n'      + message
    );
    window.open('https://wa.me/' + OWNER_WA + '?text=' + waText, '_blank');

    // ── 2. Email via mailto — desktop only (mobile gets WhatsApp only) ──
    var isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
    if (!isMobile) {
      const OWNER_EMAIL = 'vkvishal994@gmail.com';
      const subject = encodeURIComponent('New Enquiry from ' + name + ' — Wellness Karate Academy');
      const body    = encodeURIComponent(
        'New enquiry received from the website contact form.\n\n' +
        'Name:          ' + name     + '\n' +
        'Phone:         ' + phone    + '\n' +
        'Email:         ' + email    + '\n' +
        'Interested In: ' + interest + '\n\n' +
        'Message:\n'      + message
      );
      setTimeout(function () {
        window.location.href = 'mailto:' + OWNER_EMAIL + '?subject=' + subject + '&body=' + body;
      }, 800);
    }

    // ── 3. UI feedback ──
    const btn = form.querySelector('[type="submit"]');
    btn.textContent = '✓ Enquiry Sent!';
    btn.style.background = '#1EB464';
    btn.disabled = true;
    setTimeout(function () {
      btn.textContent = 'Send Message ›';
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 4000);
  });
})();
