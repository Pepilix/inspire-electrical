// Site-wide behaviour. No animation library: CSS transitions driven by a few classes,
// one IntersectionObserver and one rAF-throttled scroll handler.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

declare global {
  interface Window { dataLayer?: unknown[]; __loadGtm?: () => void }
}

/** Push an analytics event. Harmless when GTM is not configured or consent is not given. */
export function track(event: string, params: Record<string, string> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

// Header: hairline once scrolled; hides on scroll down and returns on scroll up.
const header = document.querySelector<HTMLElement>('[data-header]');
const bar = document.querySelector<HTMLElement>('[data-mobile-bar]');
let lastY = window.scrollY;

// Services panel (desktop): the toggle button opens it for keyboard and touch users.
document.querySelectorAll<HTMLElement>('[data-panel-item]').forEach((item) => {
  const toggle = item.querySelector<HTMLButtonElement>('[data-panel-toggle]');
  if (!toggle) return;
  const set = (open: boolean) => { item.classList.toggle('is-open', open); toggle.setAttribute('aria-expanded', String(open)); };
  toggle.addEventListener('click', () => set(!item.classList.contains('is-open')));
  item.addEventListener('focusout', (e) => { if (!item.contains(e.relatedTarget as Node)) set(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && item.classList.contains('is-open')) { set(false); toggle.focus(); } });
  document.addEventListener('click', (e) => { if (!item.contains(e.target as Node)) set(false); });
});

// Mobile menu.
const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
if (menuToggle && menu) {
  const set = (open: boolean) => {
    menuToggle.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    menu.classList.toggle('is-open', open);
    document.documentElement.style.overflow = open ? 'hidden' : '';
    header?.classList.remove('is-hidden');
  };
  menuToggle.addEventListener('click', () => set(menu.hidden));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) { set(false); menuToggle.focus(); } });
  window.matchMedia('(min-width: 1081px)').addEventListener('change', (m) => { if (m.matches) set(false); });
}

// Scroll reveals.
const reveals = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (reduceMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-in'); io.unobserve(entry.target); }
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  reveals.forEach((el) => io.observe(el));
}

// Scroll-linked work: header state, mobile bar, parallax and the homepage circuit line.
const parallax = reduceMotion ? [] : Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
const circuit = document.querySelector<HTMLElement>('[data-circuit]');
const circuitNodes = circuit ? Array.from(document.querySelectorAll<HTMLElement>('[data-circuit-node]')) : [];
let ticking = false;

function update() {
  ticking = false;
  const y = window.scrollY;
  const vh = window.innerHeight;
  const goingDown = y > lastY + 4;
  const goingUp = y < lastY - 4;
  const menuOpen = menuToggle?.getAttribute('aria-expanded') === 'true';

  if (header) {
    header.classList.toggle('is-scrolled', y > 4);
    if (!menuOpen && !header.querySelector('.is-open')) {
      if (goingDown && y > 480) header.classList.add('is-hidden');
      else if (goingUp || y < 120) header.classList.remove('is-hidden');
    }
  }
  if (bar) {
    if (goingDown && y > 200) bar.classList.add('is-hidden');
    else if (goingUp) bar.classList.remove('is-hidden');
  }
  if (goingDown || goingUp) lastY = y;

  parallax.forEach((el) => {
    const r = el.parentElement!.getBoundingClientRect();
    if (r.bottom < 0 || r.top > vh) return;
    // capped so the image never moves further than its 6% overscan
    const max = r.height * 0.05;
    const offset = Math.max(-max, Math.min(max, (r.top + r.height / 2 - vh / 2) * parseFloat(el.dataset.parallax || '0')));
    el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
  });

  if (circuit) {
    const r = circuit.getBoundingClientRect();
    const marker = vh * 0.55;
    const progress = Math.min(1, Math.max(0, (marker - r.top) / r.height));
    circuit.style.setProperty('--progress', reduceMotion ? '1' : progress.toFixed(4));
    circuitNodes.forEach((n) => n.classList.toggle('is-live', reduceMotion || n.getBoundingClientRect().top < marker));
  }
}
const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
update();

// Conversion events: phone, email and CTA clicks.
document.addEventListener('click', (e) => {
  const el = (e.target as Element).closest<HTMLElement>('[data-track]');
  if (!el) return;
  track(el.dataset.track!, { cta_location: el.dataset.cta || '', link_url: el.getAttribute('href') || '', page_path: location.pathname });
});

// Analytics consent banner (present only when GTM is configured).
const consent = document.querySelector<HTMLElement>('[data-consent]');
if (consent) {
  let stored: string | null = null;
  try { stored = localStorage.getItem('ie-consent'); } catch { /* storage unavailable */ }
  if (!stored) consent.hidden = false;
  consent.querySelectorAll<HTMLButtonElement>('[data-consent-choice]').forEach((b) => b.addEventListener('click', () => {
    const choice = b.dataset.consentChoice!;
    try { localStorage.setItem('ie-consent', choice); } catch { /* storage unavailable */ }
    if (choice === 'granted') {
      (window as unknown as { gtag: (...a: unknown[]) => void }).gtag('consent', 'update', { analytics_storage: 'granted' });
      window.__loadGtm?.();
    }
    consent.hidden = true;
  }));
}
