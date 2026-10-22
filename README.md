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
├── styles.css
├── app.js
├── README.md
├── ROADMAP.md
├── data/
│   ├── manifest.json
│   ├── institute_summary.json
│   └── institutes/
│       ├── iit-bombay.json
│       ├── iisc-bengaluru.json
│       ├── iit-delhi.json
│       └── ...
└── docs/
    ├── METHODOLOGY.md
    └── DATA_SCHEMA.md
```

The faculty dataset is split by institute so individual colleges can be updated without editing a large monolithic file. `data/manifest.json` tells the frontend which institute files to load.

## Quick deployment with GitHub Pages

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select `main` and `/ (root)`.
4. Save.
5. GitHub Pages will serve `index.html`.

## Current status

MVP research dataset. The next priorities are better cohort statistics, profile/institute pages, compare-my-profile, and community correction/submission workflows.
