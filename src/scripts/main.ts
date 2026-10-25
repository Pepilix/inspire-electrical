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
  };
  menuToggle.addEventListener('click', () => set(menu.hidden));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) { set(false); menuToggle.focus(); } });
  window.matchMedia('(min-width: 1081px)').addEventListener('change', (m) => { if (m.matches) set(false); });
}

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
