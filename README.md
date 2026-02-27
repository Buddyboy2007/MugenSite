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

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment
- Push to the `main` branch triggers automatic deployment
- The site will be available at `https://username.github.io/repository-name/`
- Check the "Actions" tab for deployment status

### Manual Deployment
1. Go to GitHub repository
2. Navigate to "Actions" tab
3. Run the "Deploy Vue App to GitHub Pages" workflow

### Configuration
- Update `base` in `src/vite.config.ts` to match your repository name
- Enable GitHub Pages in repository settings (source: GitHub Actions)

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