# Methodology

## FEPA — Faculty Entry Publication Audit

The publication-counting procedure used by this project is **FEPA (Faculty Entry Publication Audit)**. Its purpose is to reconstruct the publication record that a researcher had when entering a faculty position, using paper-level evidence rather than aggregate publication counts.

### Institute-by-institute batching

FEPA is run **one institute at a time**. A batch contains at most **6 faculty members**. If an institute contains more than 6 people in the benchmark cohort, it is split into consecutive batches of no more than 6. A batch is audited and checked before the next batch is started.

### Faculty-entry cutoff

For each person, FEPA first establishes the date of the relevant faculty appointment from an official institute record, CV, appointment announcement, archived institutional page, or other strong source. Exact dates are preferred. The project distinguishes faculty appointments from postdoctoral, research-scientist, visiting, and similar positions.

Unless a row explicitly says otherwise, the benchmark cutoff is the date the person joined the faculty position represented in the dataset. If the project later switches to a first-faculty-appointment-anywhere comparison, that change must be applied consistently and documented.

### Paper-level reconstruction

Only after the cutoff is established is the publication record reconstructed. Google Scholar and similar bibliographic profiles are discovery aids, **not authoritative aggregate counters**. Candidate papers are checked individually against publisher/DOI pages, author CV/publication pages, DBLP/ORCID/Scopus-style bibliographic records, or institutional repositories as appropriate.

For each counted candidate, the audit records or verifies:
- exact title
- published author order
- whether the faculty member is first author
- venue
- publication type
- publication date/year
- whether it falls before the faculty cutoff
- verification source

Counts are calculated **from the verified paper list**, never used as the starting point of the audit.

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
Every faculty profile is audited into exactly three mutually exclusive publication buckets at the time of hiring.

### 1. Full archival journals
Examples include T-RO, IJRR, Automatica, IEEE Transactions journals, Journal of Fluid Mechanics, JMPS, etc.

These count as **1.0** in the journal-equivalent score.

### 2. Letters
This bucket includes short/letter-style archival venues such as:
- IEEE Robotics and Automation Letters (RA-L)
- IEEE Control Systems Letters (L-CSS)
- other clearly short-letter-style archival venues when applicable

These count as **0.5** in the journal-equivalent score.

RA-L and L-CSS are **not** included again in the full-journal count. A letter that was also presented at ICRA/IROS is not counted a second time as a conference paper unless a genuinely separate proceedings paper exists.

### 3. Conference papers
Peer-reviewed conference proceedings are counted separately. Examples include ICRA, IROS, RSS, CoRL, CDC, ACC, HSCC, WAFR, etc.

Workshops, posters, theses, patents, invited talks, book chapters, preprints and non-peer-reviewed publication objects are excluded.

## Cutoff-date rule

The preferred rule is the official publisher publication date (including an official online-first publication date when that is the publisher's publication event). A paper published after the faculty start date is not counted merely because it was accepted or available as a preprint beforehand.

If only a year is recoverable and the paper shares the faculty-entry year, it is marked **cutoff-year ambiguous** rather than silently included. Borderline cases are documented.

## Authorship rule

A paper is marked first-author only when the faculty member is first in the published author order. Equal-first/contributed-equally status is separately flagged when the publication explicitly states it. Corresponding or senior authorship is not converted into first authorship.

## Publication audit status

### FEPA Verified
Used only when the cutoff and the relevant paper list have been checked paper-by-paper with sufficiently strong sources. Exact counts may be displayed.

### FEPA Ambiguous
Used when one or more cutoff-year items cannot be dated precisely enough. The confirmed count and ambiguous items should be separated.

### Legacy Reconstructed
Older rows that have not yet been re-audited under FEPA may retain conservative ranges. These values are provisional and must not be treated as exact FEPA counts.

## Derived publication metrics
The website does not independently enter a total-publication count for the audited view.

```text
Total peer-reviewed = Full journals + Letters + Conference papers
```

```text
Journal-equivalent (JE) = Full journals + 0.5 × Letters
```

## Source priority
1. official appointment record / official institutional CV for faculty-entry date
2. publisher or DOI record for publication date/type
3. complete personal CV or publication page
4. official institute/faculty publication page or repository
5. author-disambiguated bibliographic records
6. Google Scholar and similar profiles for discovery/cross-checking only

## Quality-control rule

Every FEPA batch is checked before moving to the next batch. The audit specifically checks for wrong-author matches, duplicate versions, journal/conference double counting, letters misclassified as full journals, post-cutoff papers, workshop/preprint contamination, and incorrect first-author labels.

## Citations
Historical citation values are labeled as:
- dated / near-date
- reconstructed estimate/range
- not publicly recoverable

Current citations must not silently replace historical values.

## Institute statistics
Statistics are computed dynamically from the current filtered cohort.

- publication ranges from legacy reconstructed rows use their midpoint only for aggregate statistics
- sample SD is used
- unavailable metrics are excluded from that metric's mean/SD
- N used is displayed per metric
- full journals, letters, and conferences are aggregated separately

Different metrics for the same institute can therefore have different N values.

## Postdoc duration
Counts formal postdoctoral or research-associate training after the PhD and before appointment. Industry R&D is not counted as postdoc time.

## Limitations
FEPA can substantially reduce counting errors but cannot make every historical record perfectly exact. Publisher dates, online-first dates, issue dates, conference presentation dates, and bibliographic years can disagree; old CVs can be incomplete; author names can be ambiguous; and appointment dates can be reported only to the month/year. Such cases must be exposed as ambiguity rather than hidden behind an exact-looking count.

The dataset also does not model department-specific strategic hiring, reference letters, interview/seminar performance, research independence, teaching, funding potential, timing, or internal institutional priorities. It should be used to understand observed historical profiles, not to infer a probability of being hired.
