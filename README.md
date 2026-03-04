# MugenSite

This project has been reorganized with all code moved to the `src/` directory.

## Running the Project

### Linux/macOS
```bash
./start-dev.sh
```

### Windows
```cmd
start-dev.bat
```

### Manual
```bash
cd src
npm run dev
```

The development server will start on http://localhost:8080

## Deployment Options

This project supports deployment to both GitHub Pages and Cloudflare Pages.

### GitHub Pages Deployment
- **Workflow**: `.github/workflows/github-pages.yml`
- **URL**: `https://username.github.io/repository-name/`
- **Triggers**: Push to main branch
- **Setup**: Enable GitHub Pages in repository settings (source: GitHub Actions)

### Cloudflare Pages Deployment
- **Workflow**: `.github/workflows/cloudflare.yml`
- **URL**: `https://lanceromugen.pages.dev/`
- **Triggers**: Push to main branch
- **Setup**: Requires Cloudflare account and GitHub secrets

### Manual Deployment
1. Go to GitHub repository
2. Navigate to "Actions" tab
3. Run either "Deploy Vue App to GitHub Pages" or "Deploy Vue App to Cloudflare Pages"

### Configuration
- Update `base` in `src/vite.config.ts` to match your repository name for GitHub Pages
- For Cloudflare Pages, set up `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets

For detailed deployment instructions, see [docs/setup/deployment.md](docs/setup/deployment.md).

## Git Line Ending Configuration

This project includes a `.gitattributes` file to handle line endings consistently across different operating systems.

For detailed Git configuration, see [docs/setup/git-configuration.md](docs/setup/git-configuration.md).

**Quick setup by OS:**
- **Windows:** `git config --global core.autocrlf true`
- **Linux/macOS:** `git config --global core.autocrlf input`

## Project Structure

```
MugenSite/
├── src/                    # Main project directory
│   ├── index.html         # Entry point
│   ├── package.json       # Vue project configuration
│   ├── vite.config.ts     # Vite configuration
│   ├── main.ts           # Application entry
│   ├── App.vue           # Main component
│   ├── components/       # Vue components
│   └── services/         # Service files
├── start-dev.sh          # Linux/macOS startup script
├── start-dev.bat         # Windows startup script
├── lance v1/             # Legacy code (unchanged)
└── wwwroot/              # Static files (unchanged)