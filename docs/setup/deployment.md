# Deployment Guide (Cloudflare Pages)

This guide explains how to deploy your Vue.js application to **Cloudflare Pages** using GitHub Actions.

## Prerequisites

1. **GitHub Repository**: Your project must be pushed to a GitHub repository
2. **Cloudflare Pages Project**: Create a Cloudflare Pages project named `lanceromugen`
3. **Cloudflare API Token**: Create an API token with permission to deploy Pages projects
4. **Cloudflare Account ID**: Retrieve your Cloudflare account ID
3. **Main Branch**: Your main development branch should be named `main`

## Automatic Deployment

The deployment is handled automatically by GitHub Actions when you push to the `main` branch.

### Workflow Files

- `.github/workflows/deploy.yml` - Main Cloudflare Pages deployment workflow

### Deployment Process

1. **Push to main branch** triggers the deployment workflow
2. **Build job** runs:
   - Sets up Node.js environment
   - Installs dependencies from `src/package.json`
   - Builds the Vue application (`npm run build`)
   - Deploys `src/dist` directly to Cloudflare Pages project `lanceromugen`

## Manual Deployment

You can also trigger deployment manually:

1. Go to your repository on GitHub
2. Navigate to the "Actions" tab
3. Find the "Deploy Vue App to Cloudflare Pages" workflow
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

### GitHub Secrets Required

Add these repository secrets in GitHub (**Settings → Secrets and variables → Actions**):

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Accessing Your Site

After successful deployment, your site will be available at your Cloudflare Pages URL for project `lanceromugen`.

## Troubleshooting

### Build Failures

Check the Actions tab for detailed error messages. Common issues:

- **Missing dependencies**: Ensure all dependencies are in `package.json`
- **Build errors**: Check your Vue code for syntax errors
- **Node version**: The workflow uses Node.js 18

### Authentication/Deploy Failures

If deployment fails:

1. Verify `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets are set correctly
2. Confirm the Cloudflare Pages project exists and is named `lanceromugen`
3. Ensure the API token has Pages deployment permissions

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

To use a custom domain, configure it in the Cloudflare Pages project settings and update DNS in Cloudflare.