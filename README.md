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

Current verified/curated hiring window: **2016–2026**.

The dashboard includes a **Start year** selector, so users can compare windows such as 2016–2026, 2019–2026, or 2022–2026. Institute statistics are recalculated from the currently selected cohort.

## Current features
- searchable/filterable faculty table
- selectable starting year from 2016 onward
- institute-level mean ± sample SD for the current filtered cohort
- publication counts at hiring where recoverable
- full journals vs RA-L/letters vs conferences
- citation-at-hiring estimates / availability notes
- postdoc duration
- hiring route
- research-area descriptions
- source links and audit notes
- filtered CSV / JSON export
- retro-cartoon dashboard UI

## Counting convention

```text
Journal-equivalent = full archival journals + 0.5 × RA-L / short letters
```

Conference papers are tracked separately.

## Historical-data policy

Older hiring-time bibliometrics are often difficult to reconstruct reliably. The dataset therefore distinguishes:

1. dated / near-date values
2. reconstructed ranges
3. conservative lower bounds such as `at least 5`
4. metrics that are not publicly recoverable

Current citation/publication totals are never silently substituted for hiring-time totals.

## Important limitation

The 2016–2026 dataset is a **curated, source-verified cohort**, not yet an exhaustive institute-wide census of every hire in every department.

This project is also **not a hiring-probability predictor**. Hiring depends on department needs, fit, research independence, letters, teaching, interviews, funding potential, timing, and other factors.

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
│   ├── verified_2016_2021_expansion.json
│   └── institutes/
│       └── *.json
└── docs/
    ├── METHODOLOGY.md
    └── DATA_SCHEMA.md
```

## Quick deployment with GitHub Pages

1. Open **Settings → Pages**.
2. Deploy from the `main` branch and `/ (root)`.
3. GitHub Pages serves `index.html`.

## Current status

MVP research dataset. Next priorities are median/IQR statistics, stronger historical bibliometric reconstruction, profile/institute pages, compare-my-profile, and community correction/submission workflows.
