/** JSON-LD builders shared by page templates. Only verified facts go in here. */
import { absolute } from './site';

export interface Crumb { label: string; path: string }

export function breadcrumbSchema(crumbs: Crumb[], site: URL | undefined) {
  const all = [{ label: 'Home', path: '/' }, ...crumbs];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: all.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: absolute(c.path, site) })),
  };
}

export function webPageSchema(path: string, name: string, description: string, site: URL | undefined) {
  return {
    '@type': 'WebPage',
    '@id': `${absolute(path, site)}#webpage`,
    url: absolute(path, site),
    name,
    description,
    isPartOf: { '@id': absolute('/#website', site) },
    inLanguage: 'en-GB',
  };
}

export const businessRef = (site: URL | undefined) => ({ '@id': absolute('/#business', site) });
