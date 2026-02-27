# GitHub Pages Deployment Guide

This guide explains how to deploy your Vue.js application to GitHub Pages for self-hosting.

## Prerequisites

1. **GitHub Repository**: Your project must be pushed to a GitHub repository
2. **GitHub Pages Enabled**: GitHub Pages must be enabled in your repository settings
3. **Main Branch**: Your main development branch should be named `main`

## Automatic Deployment

The deployment is handled automatically by GitHub Actions when you push to the `main` branch.

### Workflow Files

- `.github/workflows/deploy.yml` - Main deployment workflow
- `.github/workflows/pages.yml` - GitHub Pages configuration

### Deployment Process

1. **Push to main branch** triggers the deployment workflow
2. **Build job** runs:
   - Sets up Node.js environment
   - Installs dependencies from `src/package.json`
   - Builds the Vue application (`npm run build`)
   - Uploads the built files to GitHub Pages artifact

3. **Deploy job** runs:
   - Deploys the built application to GitHub Pages
   - Provides a URL to your live site

## Manual Deployment

You can also trigger deployment manually:

1. Go to your repository on GitHub
2. Navigate to the "Actions" tab
3. Find the "Deploy Vue App to GitHub Pages" workflow
4. Click "Run workflow"

## Configuration

### Vite Configuration

The `src/vite.config.ts` file is configured for GitHub Pages deployment:

```typescript
export default defineConfig({
  // ... other config
  base: '/MugenSite/'  // Change this to your repository name
});
```

**Important**: Update the `base` property to match your repository name:
- For repository `MugenSite`: `base: '/MugenSite/'`
- For repository `my-vue-app`: `base: '/my-vue-app/'`
- For user pages (username.github.io): `base: '/'`

### Repository Settings

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The deployment will automatically use the `github-pages` environment

## Accessing Your Site

After successful deployment, your site will be available at:

```
https://username.github.io/repository-name/
```

For example: `https://buddyboy2007.github.io/MugenSite/`

## Troubleshooting

### Build Failures

Check the Actions tab for detailed error messages. Common issues:

- **Missing dependencies**: Ensure all dependencies are in `package.json`
- **Build errors**: Check your Vue code for syntax errors
- **Node version**: The workflow uses Node.js 18

### 404 Errors

If you get 404 errors after deployment:

1. Verify the `base` configuration in `vite.config.ts` matches your repository name
2. Check that the deployment completed successfully
3. Wait a few minutes for GitHub Pages to update

### Asset Loading Issues

If CSS/JS files don't load:

1. Check the `base` configuration
2. Verify the build process completed without errors
3. Clear your browser cache

## Environment Variables

For environment-specific configurations, you can use:

- `.env.production` - Production environment variables
- `.env.development` - Development environment variables

These files should be in the `src/` directory.

## Custom Domain

To use a custom domain:

1. Add a `CNAME` file in the `src/public/` directory
2. Add your domain name to the file
3. Configure your DNS settings to point to GitHub Pages

Example `CNAME` file content:
```
yourdomain.com