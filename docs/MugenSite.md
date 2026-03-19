# MugenSite

**Location:** `~/code/MugenSite`

**Purpose:** MUGEN fighting game character display/management website for Ikemen MUGEN fork. Hosts character downloads, stage downloads, and community resources.

## Tech Stack

- **Framework:** Vue.js 3 + Vite + TypeScript
- **State:** Pinia
- **Build:** Vite 5.4+

## Project Structure

```
MugenSite/
├── src/
│   ├── components/
│   │   ├── AmbientBubbles.vue
│   │   ├── CharacterList/
│   │   ├── FeaturedFighters.vue
│   │   └── HomeHeader/
│   ├── services/
│   │   ├── characterVm.ts
│   │   └── useCharacters.ts
│   ├── App.vue
│   ├── main.ts
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
├── start-dev.sh
├── start-dev.bat
└── docs/
```

## Entry Points

| File | Purpose |
|------|---------|
| `src/main.ts` | Application entry point |
| `src/App.vue` | Root Vue component |
| `src/index.html` | HTML entry |

## Key Dependencies

| Package | Version |
|---------|---------|
| vue | ^3.5.0 |
| pinia | ^3.0.4 |
| vite | ^5.4.0 |
| typescript | ^5.6.3 |

## Build & Run

```bash
# Development
cd src
npm run dev

# Production build
npm run build

# Preview build
npm run preview
```

**Dev server:** http://localhost:8080

## Deployment

- **GitHub Pages:** `.github/workflows/github-pages.yml`
- **Cloudflare Pages:** `.github/workflows/cloudflare.yml`

## Notes

- Vue 3 SPA with Pinia state management
- Legacy code in `lance v1/` and `wwwroot/` directories
- Deployment configured for both GitHub Pages and Cloudflare