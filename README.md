# Faculty Hiring Benchmark

A transparent benchmark of recent faculty hiring profiles across leading Indian research institutes, initially focused on robotics, control, autonomy, mechanical engineering, dynamics, mechanics, design, and adjacent areas.

## Current institutes
- IIT Bombay
- IIT Kanpur
- IISc Bengaluru
- IIT Delhi
- IIT Madras
- IIT Gandhinagar
- IIT Roorkee
- IIT Kharagpur

Primary hiring window: **2022–2026**, with selected near-window references where useful.

## Current features
- searchable/filterable faculty table
- institute-level mean ± sample SD
- publication counts at hiring
- full journals vs RA-L/letters vs conferences
- citation-at-hiring estimates / availability notes
- postdoc duration
- hiring route
- research-area descriptions
- source links
- CSV / JSON export
- retro-cartoon dashboard UI

## Counting convention

```text
Journal-equivalent = full archival journals + 0.5 × RA-L / short letters
```

Conference papers are tracked separately.

## Important limitation

This project is **not a hiring-probability predictor**. Hiring also depends on department needs, fit, research independence, letters, teaching, interviews, funding potential, timing, and other factors.

## Repository structure

```text
faculty-hiring-benchmark/
├── index.html
├── README.md
├── ROADMAP.md
├── data/
│   ├── faculty.json
│   └── institute_summary.json
├── docs/
│   ├── METHODOLOGY.md
│   └── DATA_SCHEMA.md
└── src/
    └── README.md
```

## Quick deployment with GitHub Pages

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Deploy from the `main` branch and `/ (root)`.
4. The site will serve `index.html`.

## Current status

MVP research dataset. The next priorities are better cohort statistics, profile/institute pages, compare-my-profile, and community correction/submission workflows.
