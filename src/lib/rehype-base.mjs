// Prefixes root-relative links in Markdown content with the deploy base path,
// so the same content works on the GitHub Pages preview and on the live domain.
export default function rehypeBase({ base = '/' } = {}) {
  const prefix = base.replace(/\/$/, '');
  return (tree) => {
    if (!prefix) return;
    const walk = (node) => {
      if (node.type === 'element' && node.tagName === 'a') {
        const h = node.properties?.href;
        if (typeof h === 'string' && h.startsWith('/') && !h.startsWith('//')) node.properties.href = prefix + h;
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}
