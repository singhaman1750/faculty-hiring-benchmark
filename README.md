# Faculty Hiring Benchmark

A transparent benchmark of recent faculty hiring profiles across leading Indian research institutes, focused on robotics, control, autonomy, mechanical engineering, dynamics, mechanics, design, and adjacent areas.

## Current institutes
- IISc Bengaluru
- IIT Bombay
- IIT Delhi
- IIT Gandhinagar
- IIT Guwahati
- IIT Hyderabad
- IIT Jodhpur
- IIT Kanpur
- IIT Kharagpur
- IIT Madras
- IIT Roorkee
- IIT (BHU) Varanasi

Current verified/curated hiring window: **2016–2026**.

The dashboard includes a **Start year** selector, so users can compare windows such as 2016–2026, 2019–2026, or 2022–2026. Institute statistics are recalculated from the currently selected cohort.

## Current scope

The current repository contains **71 profile rows including the user benchmark row**, spanning 12 institutes. New institute additions are stored separately under `data/institutes/` so they can be audited and updated independently.

## Current features
- searchable/filterable faculty table
- selectable starting year from 2016 onward
- institute-level mean ± sample SD for the current filtered cohort
- three explicit publication buckets at hiring: **full journals, letters, conferences**
- derived total peer-reviewed papers and journal-equivalent score
- citation-at-hiring dated values or source-backed reconstructed ranges
- postdoc duration
- hiring route
- research-area descriptions
- publication-audit status and publication source
- profile source and audit notes
- filtered CSV / JSON export
- retro-cartoon dashboard UI

## Counting convention

```text
Total peer-reviewed = full archival journals + letters + conferences
Journal-equivalent = full archival journals + 0.5 × letters
```

RA-L, IEEE Control Systems Letters and comparable short-letter venues are kept in the **Letters** bucket rather than being counted as full archival journals.

## Data-quality policy

Every included profile must have usable values for the three publication buckets. Exact counts are used when a dated CV or sufficiently complete publication list exists. Otherwise, a conservative source-backed range is stored and labeled **Reconstructed**. A row is not allowed to enter the publication averages with an empty publication split.

Historical citations are treated separately because exact historical Google Scholar totals are rarely recoverable. The site therefore uses dated values when available and otherwise a conservative reconstructed range rather than silently substituting today's citation total.

## Important limitation

The 2016–2026 dataset is a **curated benchmark cohort**, not yet an exhaustive institute-wide census of every hire in every department.

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
│   ├── publication_audit.json
│   ├── verified_2016_2021_expansion.json
│   └── institutes/
│       ├── iit-guwahati.json
│       ├── iit-hyderabad.json
│       ├── iit-jodhpur.json
│       ├── iit-bhu-varanasi.json
│       └── ...
└── docs/
    ├── METHODOLOGY.md
    └── DATA_SCHEMA.md
```

## Quick deployment with GitHub Pages

1. Open **Settings → Pages**.
2. Deploy from the `main` branch and `/ (root)`.
3. GitHub Pages serves `index.html`.

## Current status

MVP research dataset with a source-backed publication audit. Next priorities are converting more reconstructed ranges into exact paper-by-paper counts, adding median/IQR statistics, profile/institute pages, compare-my-profile, and community correction/submission workflows.
