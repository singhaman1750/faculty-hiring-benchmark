# Data schema

Current record structure resembles:

```json
{
  "name": "Faculty name",
  "college": "Institute",
  "department": "Department",
  "joined": "YYYY-MM or year",
  "route": "PhD → Postdoc → Faculty",
  "previous": "Previous position",
  "phd": "Institution (year)",
  "years_after_phd": "~3",
  "papers": "~15–18",
  "full_journals": "~5–6",
  "letters": "2",
  "journal_equiv": "~6–7",
  "conferences": "~8–10",
  "citations": "~300–400 est.",
  "current_metrics": "Current public metrics",
  "area": "Research focus",
  "signals": "Strong venues/labs/signals",
  "category": "Core robotics",
  "confidence": "Medium",
  "source": "https://...",
  "audit_note": "Historical reconstruction note",
  "postdoc_years": 3.0
}
```

## Recommended future schema
Move from text ranges to structured numeric fields:

```text
papers_low
papers_high
journals_low
journals_high
letters_low
letters_high
conferences_low
conferences_high
citations_low
citations_high
metric_method
metric_source
metric_source_date
last_verified
```

Normalize:
- institutes
- departments
- research tags
- hiring routes
- sources
- appointments
- publications
