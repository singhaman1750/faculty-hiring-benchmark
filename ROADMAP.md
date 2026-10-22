# Roadmap

## MVP v0.1 — current
- [x] searchable dashboard
- [x] eight institutes
- [x] recent/near-window faculty dataset
- [x] publication/citation/postdoc fields
- [x] institute-level mean ± SD
- [x] filters
- [x] CSV / JSON export
- [x] methodology / uncertainty notes
- [x] retro-cartoon visual identity

## MVP v0.2 — next

### Better information architecture
- [ ] homepage
- [ ] explore faculty page
- [ ] compare institutes page
- [ ] faculty profile pages
- [ ] institute profile pages
- [ ] methodology page
- [ ] about / contribute page

### Better statistics
- [ ] median
- [ ] Q1 / Q3
- [ ] IQR
- [ ] distributions
- [ ] stats filtered by field
- [ ] stats filtered by department
- [ ] stats filtered by career route
- [ ] separate first-time hires from lateral hires

### Compare my profile
- [ ] enter papers / journals / RA-L / citations / postdoc years
- [ ] choose field and institute cohort
- [ ] show percentile position
- [ ] clearly state this is not a hiring prediction

### Research taxonomy
- [ ] robotics: locomotion, manipulation, SLAM, swarm, HRI, surgical, soft
- [ ] control: MPC, nonlinear, formal, multi-agent, learning-based
- [ ] mechanical: dynamics, mechanisms, mechatronics, manufacturing, solids, fluids, biomechanics, materials
- [ ] AI: robot learning, RL, vision, autonomous systems

### Data quality
- [ ] one source per metric
- [ ] source date
- [ ] last verified date
- [ ] exact / estimated / unavailable badges
- [ ] author disambiguation notes
- [ ] consistency checks

### Community
- [ ] suggest a faculty member
- [ ] report incorrect data
- [ ] submission form
- [ ] moderation/review queue

## MVP v0.3 — only after users appear
- [ ] backend database
- [ ] Supabase/Postgres
- [ ] contributor accounts
- [ ] admin moderation
- [ ] automated ingestion helpers
- [ ] public API
- [ ] more Indian and international institutes
- [ ] dataset releases / DOI

## Deployment plan

### First deployment
Use **GitHub Pages**:
- no backend
- free
- version control
- transparent data history
- issues and PRs can serve as contribution channels

### Later
If dynamic submissions/accounts become necessary:
- frontend: Next.js or Astro
- deployment: Vercel
- database/auth: Supabase/Postgres

## Product principle

The project should not claim to predict who gets hired.

Its value is to make recent faculty hiring profiles:
- transparent
- comparable
- sourced
- understandable to PhD students and postdocs
