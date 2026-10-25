# Image assets

## Rules

- Only photographs of **Inspire Electrical's own work** may be presented as Inspire Electrical work.
- Inspire Audio Visual photographs may be used only when labelled as Inspire AV / group work (as on the homepage, projects and about pages).
- No stock photographs of electricians.
- Get written permission from homeowners before publishing photographs of their homes; avoid house numbers, faces and anything identifying unless agreed.

## Where images go

```
src/assets/
  group/       Inspire Audio Visual photographs (labelled as group work)
  services/    One lead image per service:   services/<service-slug>.jpg
  projects/    One folder per project:       projects/<project-slug>/01.jpg ...
  hero/        Homepage hero photograph or video poster (future)
```

Images in `src/assets` are resized and converted to WebP automatically by Astro at build time. Supply the largest original you have (at least 2000px wide).

## Replacing a drawing with a photograph

Each service shows a technical drawing until a photograph exists. To replace it, add the file and set two fields in the service's frontmatter:

```yaml
image: services/consumer-unit-upgrades.jpg
imageAlt: Steel consumer unit with RCBOs and labelled circuits in a utility room
```

## Shot list (priority order)

| Service | What to photograph |
|---|---|
| Consumer unit upgrades | A finished board, cover off and on, neat labelling |
| House rewiring | First fix in an older house: cable runs, back boxes, protected routes |
| Lighting installation | Finished architectural lighting at dusk; LED detail in joinery |
| Outdoor lighting | Garden at dusk; path and uplighting |
| New builds and renovations | First fix across a room; second fix detail |
| Testing and EICRs | Test instrument in use on a board (no client details visible) |
| Commercial | Office or retail fit-out, containment, distribution board |
| Team | Engineers at work (with consent), vehicles |

## Hero

The homepage hero currently uses an animated single-line diagram. When strong photography or video exists:
- Photograph: landscape, at least 2400px wide, dark enough at left for the headline, under 250 KB after optimisation.
- Video: muted, looping, under 10 seconds, under 2 MB, with a poster image; respect reduced-motion by showing the poster only.
