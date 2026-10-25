/**
 * Business details for Inspire Electrical. This is the single place to edit them.
 *
 * `null` means "not yet verified". Unverified fields are:
 *  - left out of structured data,
 *  - hidden on the production build,
 *  - shown as a dashed "to verify" marker on the preview build.
 * The full list is in docs/verification-checklist.md.
 */

export interface Phone { display: string; e164: string }
export interface Address { street: string; locality: string; region: string; postcode: string; country: 'GB' }

export const company = {
  name: 'Inspire Electrical',
  /** Registered company name and number, e.g. "Inspire Electrical Ltd", "12345678". */
  legalName: null as string | null,
  companyNumber: null as string | null,

  domain: 'inspire-electrical.com',
  tagline: 'Professional electrical work. Thoughtfully designed. Properly installed.',
  description:
    'Electrical installation, design, testing and maintenance for homes, businesses and developments across Harrogate, York, Wetherby and North Yorkshire.',

  phone: null as Phone | null,
  email: null as string | null,

  /**
   * Only set this if customers can visit or it is the registered trading address you want public.
   * Otherwise leave null and run Google Business Profile as a service-area business.
   */
  address: null as Address | null,

  /** e.g. [{ days: 'Mo-Fr', opens: '08:00', closes: '17:30' }] */
  openingHours: null as { days: string; opens: string; closes: string }[] | null,

  /** e.g. { name: 'NICEIC Approved Contractor', id: '...', url: '...' }. Do not assume NICEIC or NAPIT. */
  competentPersonScheme: null as { name: string; id?: string; url?: string } | null,
  /** e.g. { publicLiability: '£5m', insurer: '...' } */
  insurance: null as { publicLiability?: string; professionalIndemnity?: string; insurer?: string } | null,
  /** e.g. ['City & Guilds 2365 Level 3', 'AM2', 'City & Guilds 2391 Inspection and Testing'] */
  qualifications: null as string[] | null,
  /** Wiring regulations edition you certify to, once confirmed, e.g. 'BS 7671:2018+A3:2024'. */
  standard: null as string | null,

  /** Confirmed only when the business can take EV charger work (and is approved by the grant scheme if relevant). */
  evCharging: false,

  /** Public review profile (Google, Checkatrade...). Reviews themselves live in src/content/testimonials. */
  reviewProfiles: [] as { name: string; url: string }[],

  /** Inspire group facts that are verified (from trustinspire.com). */
  group: {
    name: 'Inspire',
    url: 'https://trustinspire.com/',
    since: 2009,
    studio: 'Thorp Arch Estate, Wetherby',
    siblings: [
      { name: 'Inspire Audio Visual', url: 'https://www.inspire-av.com/', what: 'Smart home, lighting control and home cinema' },
      { name: 'Care Home WiFi', url: 'https://carehomewifi.com/', what: 'WiFi and network infrastructure for care homes' },
    ],
  },

  social: [] as { name: string; url: string }[],
} as const;

export type Company = typeof company;
