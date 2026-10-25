# Project case study template

Create `src/content/projects/<slug>.md`. A project is not published until `draft: false`.

Only publish work Inspire Electrical carried out, with the client's permission.

```markdown
---
title: Victorian villa rewire, Harrogate
seoTitle: Victorian Villa Rewire in Harrogate | Inspire Electrical
description: Full rewire and lighting scheme for a Victorian stone villa in Harrogate, sequenced around a family living in the house.
draft: true
completed: 2027-05-01
location: Harrogate
area: harrogate
type: Renovation            # Residential | Renovation | Lighting | Commercial | Infrastructure
client: Private homeowner
requirements: What the client needed, in one or two sentences.
scope:
  - Full rewire across three floors
  - New consumer unit with RCBOs and surge protection
  - Layered lighting in living rooms and kitchen
challenges: What made the job difficult (solid walls, occupied house, listed features...).
solution: How it was designed and delivered.
services: [house-rewiring, consumer-unit-upgrades, lighting-installation]
schedule:
  - { label: Circuits, value: "18" }
  - { label: Programme, value: "Three weeks, phased" }
images:
  - { src: projects/harrogate-villa/01.jpg, alt: Describe the photograph }
---

Optional longer write-up in Markdown.
```

Once a project is published it appears automatically on `/projects/` (with category filters once there are two or more types) and in the homepage projects section, replacing the group-work examples.
