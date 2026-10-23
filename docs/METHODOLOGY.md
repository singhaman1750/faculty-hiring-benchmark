# Methodology

## Scope
Current curated window: **2016–2026**.

Users can select any starting year from 2016 onward. All visible records and institute-level statistics are recalculated for the selected cohort.

Current emphasis:
- robotics
- autonomy
- control
- mechanical engineering
- mechatronics
- dynamics
- mechanics
- design / optimization
- selected adjacent areas

This is a curated benchmark cohort, **not yet an exhaustive census of every faculty hire in every department**.

## Publication categories
Every faculty profile is audited into exactly three publication buckets at the time of hiring.

### 1. Full archival journals
Examples include T-RO, IJRR, Automatica, IEEE Transactions journals, Journal of Fluid Mechanics, JMPS, etc.

These count as **1.0** in the journal-equivalent score.

### 2. Letters
This bucket includes short/letter-style archival venues such as:
- IEEE Robotics and Automation Letters (RA-L)
- IEEE Control Systems Letters (L-CSS)
- other clearly short-letter-style archival venues when applicable

These count as **0.5** in the journal-equivalent score.

RA-L and L-CSS are **not** included again in the full-journal count.

### 3. Conference papers
Peer-reviewed conference proceedings are counted separately. Examples include ICRA, IROS, RSS, CoRL, CDC, ACC, HSCC, WAFR, etc.

Workshops, posters, theses, patents, invited talks, book chapters, preprints and non-peer-reviewed publication objects are not silently mixed into the conference count.

## Publication audit status
Every row has a separate publication-audit source and status.

### Verified
Used only when a sufficiently complete, dated publication list/CV allows the hiring-time split to be counted directly with high confidence.

### Reconstructed
Used when the hiring-time split is supported by dated publication chronology but the public record is incomplete or the appointment cutoff requires reconstruction. These values are shown as ranges where appropriate.

A reconstructed range is intentionally **not presented as an exact count**.

## Derived publication metrics
The website does not independently enter a total-publication count for the audited view.

Instead:

```text
Total peer-reviewed = Full journals + Letters + Conference papers
```

and

```text
Journal-equivalent (JE) = Full journals + 0.5 × Letters
```

This prevents internal contradictions between separate manually entered totals.

## Time-of-hiring reconstruction
The target is the profile that existed approximately when the person joined the institution, not their current profile.

Source priority:
1. complete personal CV / publication page with dates
2. official institute/faculty publication page
3. archived or dated institutional profile / annual report
4. author-disambiguated bibliographic records
5. current bibliographic profile used only to help reconstruct older chronology, never silently substituted for historical counts

## Citations
Historical citation values are labeled as:
- dated / near-date
- reconstructed estimate/range
- not publicly recoverable

Current citations must not silently replace historical values.

## Institute statistics
Statistics are computed dynamically from the current filtered cohort.

- publication ranges use their midpoint only for aggregate statistics
- sample SD is used
- unavailable metrics are excluded from that metric's mean/SD
- N used is displayed per metric
- full journals, letters, and conferences are aggregated separately

This means different metrics for the same institute can have different N values.

## Postdoc duration
Counts formal postdoctoral or research-associate training after the PhD and before appointment.

Industry R&D is not counted as postdoc time.

## Limitations
The dataset does not model:
- department-specific strategic hiring
- reference letters
- interview/seminar performance
- research independence
- teaching
- funding potential
- timing
- internal institutional priorities

The dataset should be used to understand observed historical profiles, not to infer a probability of being hired.
