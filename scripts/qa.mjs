// Static QA over the built site in dist/.
// Usage: npm run build && npm test   (set BASE_PATH if the build used one)
// Checks: one <h1>, title/description present, unique and within length, canonical,
// robots, valid JSON-LD, internal links resolve, images have alt, and on production
// builds no unverified-content markers.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const base = (process.env.BASE_PATH ?? '/').replace(/\/$/, '');
const production = process.env.PRODUCTION === 'true';

const files = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.html')) files.push(p);
  }
})(dist);

const problems = [];
const warn = [];
const titles = new Map();
const descs = new Map();
const pick = (html, re) => (html.match(re) || [])[1];
const decode = (s) => s?.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"');

for (const file of files) {
  const page = '/' + relative(dist, file).replace(/index\.html$/, '');
  const html = readFileSync(file, 'utf8');
  const is404 = page === '/404.html';
  const noindex = /<meta name="robots" content="noindex/.test(html);

  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) problems.push(`${page}: ${h1s} <h1> elements`);

  const title = decode(pick(html, /<title>([^<]*)<\/title>/));
  const desc = decode(pick(html, /<meta name="description" content="([^"]*)"/));
  if (!title) problems.push(`${page}: missing <title>`);
  else {
    if (title.length > 60) warn.push(`${page}: title ${title.length} chars`);
    titles.set(title, [...(titles.get(title) || []), page]);
  }
  if (!desc) problems.push(`${page}: missing meta description`);
  else {
    if (desc.length > 160 || desc.length < 70) warn.push(`${page}: description ${desc.length} chars`);
    descs.set(desc, [...(descs.get(desc) || []), page]);
  }
  if (!/<link rel="canonical" href="https?:\/\//.test(html)) problems.push(`${page}: missing absolute canonical`);

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { problems.push(`${page}: invalid JSON-LD (${e.message})`); }
  }

  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="/.test(m[0])) problems.push(`${page}: <img> without alt: ${m[0].slice(0, 80)}`);
  }

  for (const m of html.matchAll(/\shref="([^"#?]+)(?:[?#][^"]*)?"/g)) {
    const h = m[1];
    if (!h.startsWith('/') || h.startsWith('//')) continue;
    if (base && !h.startsWith(base + '/')) { problems.push(`${page}: link missing base path: ${h}`); continue; }
    const rel = h.slice(base.length).replace(/^\//, '');
    const target = join(dist, rel);
    const ok = existsSync(target) && (statSync(target).isFile() || existsSync(join(target, 'index.html')));
    if (!ok) problems.push(`${page}: broken internal link ${h}`);
  }

  if (production && /class="verify"/.test(html)) problems.push(`${page}: unverified placeholder published`);
  if (production && noindex && !is404 && !page.startsWith('/thank-you')) problems.push(`${page}: noindex on production`);
}

for (const [t, pages] of titles) if (pages.length > 1) problems.push(`duplicate title "${t}": ${pages.join(', ')}`);
for (const [, pages] of descs) if (pages.length > 1) problems.push(`duplicate description: ${pages.join(', ')}`);

console.log(`Checked ${files.length} pages (${production ? 'production' : 'preview'} build, base "${base || '/'}")`);
warn.forEach((w) => console.log('  warn', w));
if (problems.length) {
  problems.forEach((p) => console.log('  FAIL', p));
  console.log(`${problems.length} problem(s)`);
  process.exit(1);
}
console.log('All checks passed');
