# MugenSite portfolio roadmap

## 90-day evidence snapshot
- Commits (90 days): 8
- Files changed (90 days): 62
- Last signal: `a32a0e1` (4 days ago)
- Top modified areas: `src` (20), `docs` (13), `.github` (7), `00_agile` (6), `vue` (5), `plans` (5)
- Snapshot date: 2026-05-01

## Current posture
- Stack: Node
- Docs folder: yes
- Roadmap folder: no
- Features docs: yes
- Tests indexed: no
- Direction:
  - Source/asset churn is centered around deployment workflows and public UI.
  - Multiple deployment modes (`cloudflare`, `deploy.yml`, `github-pages`) are currently active.

## Discovery
- [x] Capture and timestamp recent change signal
- [x] Capture top-level area concentration
- [ ] Document owner intent for `src` rendering and deployment behavior
- [ ] Add explicit release gates for static build + publish paths
- [ ] Reconcile `vue` and repo root docs with planned delivery cadence

## V1 (stability)
- [ ] Convert recent docs churn (`docs/`, `plans/`, setup docs) into concrete update runbooks
- [ ] Add repeatable smoke checks for `vite` build, route generation, and Cloudflare/GitHub Pages deploy outputs
- [ ] Standardize deployment assumptions in one place (`docs/setup/deployment.md` + workflow comments)
- [ ] Verify all top touched source pages have implementation-to-doc linkage (`src`/`docs/features`)

## V2 (confidence)
- [ ] Add changelog entry process for behavior-impacting deploy or content changes
- [ ] Expand CI checks to include artifact checksum and route preview verification
- [ ] Split backlog signals into feature-level delivery notes for `docs/features/mugensite.md` and `sub-module-plans.md`
- [ ] Add contributor guidance for plan files, local run, and publish-mode selection

## V10 (scale)
- [ ] Introduce reusable checklist schema for roadmap/future features across all repos
- [ ] Create a deterministic release contract for config, branch, and deployment matrix
- [ ] Define long-range ownership model for content, UI, and deployment governance
- [ ] Add operational playbook for broken deploy recovery and rollback

## Feature-to-roadmap mapping
- [x] Core product scope: `docs/features/mugensite.md`
- [x] Site architecture/capabilities: `docs/features/core-capabilities.md`
- [x] Delivery planning signals: `docs/features/sub-module-plans.md`
- [x] Work-in-progress discipline: `docs/features/in-progress-work.md`
- [x] Feature index and discoverability: `docs/features/README.md`

## Release readiness checklist
- [ ] Build succeeds from a clean clone with `npm install` + `npm run build`
- [ ] All changed deployment workflows produce expected artifact for the same commit hash
- [ ] `src` and `plans` updates are reflected in docs before merge
- [ ] Deployment rollback plan captured for each workflow path

## Next move
Prioritize V1 by locking UI deploy behavior and doc links; then V2 by adding reproducible verification; then V10 by formalizing release governance.
