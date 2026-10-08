import { useEffect, useRef, useState } from 'react';
import { HomePage } from './pages/HomePage';
import { EventsPage } from './pages/EventsPage';
import { LegacyPage } from './pages/LegacyPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

const pages = {
  '/': { title: 'Super Seven Sports Academy Indore | Karate Training', Component: HomePage },
  '/events': { title: 'Karate Events & Tournaments | Super Seven Sports Academy Indore', Component: EventsPage },
  '/legacy': { title: 'Black Belt Legacy | Super Seven Sports Academy Indore', Component: LegacyPage },
  '/gallery': { title: 'Gallery | Super Seven Sports Academy Indore', Component: GalleryPage },
  '/contact': { title: 'Contact Us | Super Seven Sports Academy Indore', Component: ContactPage },
};

function pagePath(pathname) {
  const normalizedPath = pathname.split('#')[0].split('?')[0] || '/';
  const legacyPath = {
    '/index.html': '/',
    '/events.html': '/events',
    '/blackbelt.html': '/legacy',
    '/gallery.html': '/gallery',
    '/contact.html': '/contact',
  }[normalizedPath];
  return legacyPath || (normalizedPath in pages ? normalizedPath : '/');
}

function bodyOf(html) {
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html;
  return body
    .replace(/\s*<script[\s\S]*?<\/script>/gi, '')
    .replace(/<image\b/gi, '<img')
    .replace(/\b(href)=['"](index|events|blackbelt|gallery|contact)\.html['"]/gi, (_, key, name) => `${key}="${legacyLinks[`${name}.html`]}"`)
    .replace(/\b(src|href)=['"]images\//gi, '$1="/');
}

function useLegacyInteractions(root, route) {
  useEffect(() => {
    const element = root.current;
    if (!element) return undefined;
    const cleanups = [];
    const listen = (node, event, callback, options) => {
      node?.addEventListener(event, callback, options);
      if (node) cleanups.push(() => node.removeEventListener(event, callback, options));
    };

    const navbar = element.querySelector('.navbar');
    const updateNav = () => navbar?.classList.toggle('scrolled', window.scrollY > 50);
    updateNav(); listen(window, 'scroll', updateNav, { passive: true });

    const hamburger = element.querySelector('.hamburger');
    const mobileMenu = element.querySelector('.mobile-menu');
    const closeMenu = () => { hamburger?.classList.remove('open'); mobileMenu?.classList.remove('open'); document.body.style.overflow = ''; };
    listen(hamburger, 'click', () => {
      const open = hamburger.classList.toggle('open');
      mobileMenu?.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileMenu?.querySelectorAll('a').forEach((link) => listen(link, 'click', closeMenu));

    const revealObserver = 'IntersectionObserver' in window && new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => { if (isIntersecting) { target.classList.add('visible'); revealObserver.unobserve(target); } });
    }, { threshold: 0.08 });
    element.querySelectorAll('.reveal').forEach((item) => { item.classList.add('animate-ready'); revealObserver?.observe(item); });
    const revealFallback = window.setTimeout(() => element.querySelectorAll('.reveal').forEach((item) => item.classList.add('visible')), 2000);
    cleanups.push(() => { revealObserver?.disconnect(); window.clearTimeout(revealFallback); });

    const counterObserver = 'IntersectionObserver' in window && new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting || target.dataset.counted) return;
        target.dataset.counted = 'true'; counterObserver.unobserve(target);
        const targetValue = Number(target.dataset.count || target.textContent.replace(/[^0-9]/g, ''));
        const suffix = target.textContent.replace(/[0-9,]/g, ''); const started = performance.now();
        const tick = (now) => { const progress = Math.min((now - started) / 1200, 1); target.textContent = `${Math.floor(targetValue * (1 - (1 - progress) ** 3))}${suffix}`; if (progress < 1) requestAnimationFrame(tick); };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    element.querySelectorAll('.ach-num, .stat-num').forEach((item) => counterObserver?.observe(item));
    cleanups.push(() => counterObserver?.disconnect());

    const filter = (buttonSelector, itemSelector, key) => element.querySelectorAll(buttonSelector).forEach((button) => listen(button, 'click', () => {
      element.querySelectorAll(buttonSelector).forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      const value = button.dataset[key];
      element.querySelectorAll(itemSelector).forEach((item) => { item.style.display = value === 'all' || item.dataset.type === value || item.dataset.category === value ? '' : 'none'; });
    }));
    filter('.filter-btn[data-filter]', '.event-full-card[data-type]', 'filter');
    filter('.filter-btn[data-gallery-filter]', '.gallery-item[data-category]', 'galleryFilter');

    const items = [...element.querySelectorAll('.gallery-item')];
    const lightbox = element.querySelector('#lightbox');
    const image = lightbox?.querySelector('#lbImg');
    const caption = lightbox?.querySelector('.lightbox-caption');
    let current = 0;
    const closeLightbox = () => { lightbox?.classList.remove('open'); document.body.style.overflow = ''; if (image) image.src = ''; };
    const openLightbox = (index) => {
      current = index; const img = items[index]?.querySelector('img');
      if (img && image) { image.src = img.src; image.alt = img.alt; }
      if (caption) caption.textContent = items[index]?.dataset.caption || '';
      lightbox?.classList.add('open'); document.body.style.overflow = 'hidden';
    };
    items.forEach((item, index) => listen(item, 'click', () => openLightbox(index)));
    listen(lightbox?.querySelector('.lightbox-close'), 'click', closeLightbox);
    listen(lightbox, 'click', (event) => { if (event.target === lightbox) closeLightbox(); });
    listen(lightbox?.querySelector('.lightbox-prev'), 'click', (event) => { event.stopPropagation(); openLightbox((current - 1 + items.length) % items.length); });
    listen(lightbox?.querySelector('.lightbox-next'), 'click', (event) => { event.stopPropagation(); openLightbox((current + 1) % items.length); });
    listen(document, 'keydown', (event) => { if (!lightbox?.classList.contains('open')) return; if (event.key === 'Escape') closeLightbox(); if (event.key === 'ArrowLeft') openLightbox((current - 1 + items.length) % items.length); if (event.key === 'ArrowRight') openLightbox((current + 1) % items.length); });

    const form = element.querySelector('#contactForm');
    listen(form, 'submit', (event) => {
      event.preventDefault();
      const name = form.querySelector('#name')?.value.trim(); const email = form.querySelector('#email')?.value.trim();
      const phone = form.querySelector('#phone')?.value.trim(); const message = form.querySelector('#message')?.value.trim();
      const valid = name?.length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && /^[\d\s+\-()]{8,15}$/.test(phone) && message?.length >= 10;
      if (!valid) return;
      const interest = form.querySelector('#interest')?.value || 'Not specified';
      const text = encodeURIComponent(`*New Enquiry — Super Seven Sports Academy*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Interested In:* ${interest}\n\n*Message:*\n${message}`);
      window.open(`https://wa.me/919200991960?text=${text}`, '_blank', 'noopener');
      const button = form.querySelector('[type="submit"]'); if (button) { button.textContent = '✓ Enquiry Sent!'; button.disabled = true; window.setTimeout(() => { button.textContent = 'Send Message ›'; button.disabled = false; form.reset(); }, 4000); }
    });
    return () => { closeMenu(); closeLightbox(); cleanups.forEach((cleanup) => cleanup()); };
  }, [root, route]);
}

export function AcademyApp() {
  const [route, setRoute] = useState(() => pagePath(window.location.pathname));
  const root = useRef(null);
  const page = pages[route] || pages['/'];
  const Page = page.Component;
  useLegacyInteractions(root, route);
  useEffect(() => { document.title = page.title; }, [page]);
  useEffect(() => { const onPopState = () => setRoute(pagePath(window.location.pathname)); window.addEventListener('popstate', onPopState); return () => window.removeEventListener('popstate', onPopState); }, []);
  const navigate = (event) => {
    const link = event.target.closest('a[href]'); if (!link || link.target === '_blank' || event.defaultPrevented) return;
    const href = link.getAttribute('href'); if (!href || href.startsWith('#') || /^(https?:|mailto:|tel:)/.test(href)) return;
    const next = pagePath(href); if (!(next in pages)) return;
    event.preventDefault(); window.history.pushState({}, '', next); setRoute(next); window.scrollTo({ top: 0, behavior: 'instant' });
  };
  return <main ref={root} onClick={navigate}><Page /></main>;
}
