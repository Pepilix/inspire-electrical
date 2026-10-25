/**
 * Towns shown on the coverage map. Priority towns have their own page (src/content/locations).
 * Secondary towns are covered by sections on /areas-we-cover/ until there is enough genuinely
 * local content to justify a dedicated page. This is not a list of offices.
 */
export interface Town {
  id: string;
  name: string;
  lat: number;
  lng: number;
  priority: boolean;
  /** Short, factual description for the areas hub. */
  note?: string;
  /** Nearest priority page, used for links from secondary towns. */
  near?: string;
}

export const towns: Town[] = [
  { id: 'harrogate', name: 'Harrogate', lat: 53.9921, lng: -1.5418, priority: true },
  { id: 'york', name: 'York', lat: 53.9600, lng: -1.0873, priority: true },
  { id: 'wetherby', name: 'Wetherby', lat: 53.9280, lng: -1.3850, priority: true },
  {
    id: 'knaresborough', name: 'Knaresborough', lat: 54.0090, lng: -1.4670, priority: false, near: 'harrogate',
    note: 'The market town on the Nidd gorge, next door to Harrogate. Steep streets of stone cottages and townhouses in the old centre, with newer housing towards the A59 and Scriven.',
  },
  {
    id: 'ripon', name: 'Ripon', lat: 54.1380, lng: -1.5240, priority: false, near: 'harrogate',
    note: 'The cathedral city north of Harrogate, with a conservation-area centre around the Market Place and the cathedral, and surrounding villages towards Fountains Abbey and the Dales.',
  },
  {
    id: 'boroughbridge', name: 'Boroughbridge', lat: 54.0950, lng: -1.3990, priority: false, near: 'harrogate',
    note: 'A small town beside the A1(M) between Harrogate and York, with villages such as Roecliffe, Aldborough and Langthorpe close by.',
  },
  {
    id: 'tadcaster', name: 'Tadcaster', lat: 53.8840, lng: -1.2620, priority: false, near: 'wetherby',
    note: 'The brewing town on the Wharfe between Wetherby and York, in North Yorkshire, with villages along the A64 and A659.',
  },
  {
    id: 'thirsk', name: 'Thirsk', lat: 54.2320, lng: -1.3430, priority: false, near: 'harrogate',
    note: 'The market town at the northern edge of our area, between the A19 and the A1(M), with farmhouses and villages across the Vale of Mowbray.',
  },
];

/** The Inspire group studio. Shown on the map as the group's base, not as an Inspire Electrical office. */
export const studio = { name: 'Inspire studio, Thorp Arch', lat: 53.9090, lng: -1.3370 };
