# Deployment Guide

This guide explains how to deploy your Vue.js application to both GitHub Pages and Cloudflare Pages.

## Deployment Options

You have two deployment options available:

### 1. GitHub Pages Deployment
- **Workflow**: `.github/workflows/github-pages.yml`
- **URL**: `https://username.github.io/repository-name/`
- **Best for**: Simple hosting, GitHub integration

### 2. Cloudflare Pages Deployment
- **Workflow**: `.github/workflows/cloudflare.yml`
- **URL**: `https://lanceromugen.pages.dev/`
- **Best for**: Performance, custom domains, advanced features

## GitHub Pages Deployment

### Prerequisites

1. **GitHub Repository**: Your project must be pushed to a GitHub repository
2. **GitHub Pages Enabled**: GitHub Pages must be enabled in your repository settings
3. **Main Branch**: Your main development branch should be named `main`

### Automatic Deployment

The deployment is handled automatically by GitHub Actions when you push to the `main` branch.

### Configuration

#### Vite Configuration

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

#### Repository Settings

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The deployment will automatically use the `github-pages` environment

### Accessing Your Site

After successful deployment, your site will be available at:

```
https://username.github.io/repository-name/
```

For example: `https://buddyboy2007.github.io/MugenSite/`

## Cloudflare Pages Deployment

### Prerequisites

1. **Cloudflare Account**: You need a Cloudflare account
2. **Cloudflare Project**: Create a Pages project in Cloudflare dashboard
3. **GitHub Integration**: Connect your GitHub repository to Cloudflare
4. **Environment Variables**: Set up required secrets in GitHub

### Setup Steps

1. **Create Cloudflare Pages Project**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Pages
   - Create a new project
   - Connect your GitHub repository
   - Set project name to `lanceromugen`

2. **Configure Build Settings**:
   - **Build command**: `cd src && npm run build`
   - **Build output directory**: `src/dist`
   - **Node.js version**: `18`

3. **Set GitHub Secrets**:
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token (requires Pages:Edit permission)
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

4. **GitHub Repository Permissions**:
   - Ensure your workflow has `contents: read` permission
   - GitHub Pages workflow needs `pages: write` and `id-token: write` permissions

### Automatic Deployment

The deployment is handled automatically by GitHub Actions when you push to the `main` branch.

### Accessing Your Site

After successful deployment, your site will be available at:

```
https://lanceromugen.pages.dev/
```

## Manual Deployment

### GitHub Pages

1. Go to your repository on GitHub
2. Navigate to the "Actions" tab
3. Find the "Deploy Vue App to GitHub Pages" workflow
4. Click "Run workflow"

### Cloudflare Pages

1. Go to your repository on GitHub
2. Navigate to the "Actions" tab
3. Find the "Deploy Vue App to Cloudflare Pages" workflow
4. Click "Run workflow"

## Environment Variables

### GitHub Pages
No special environment variables required.

### Cloudflare Pages
Add these secrets to your GitHub repository:

1. **CLOUDFLARE_API_TOKEN**:
   - Go to Cloudflare Dashboard
   - Navigate to "My Profile" → "API Tokens"
   - Create a token with Pages permissions
   - Copy the token value

2. **CLOUDFLARE_ACCOUNT_ID**:
   - Go to Cloudflare Dashboard
   - Navigate to "Overview"
   - Copy your Account ID

## Troubleshooting

### GitHub Pages Issues

#### Build Failures
Check the Actions tab for detailed error messages. Common issues:
- **Missing dependencies**: Ensure all dependencies are in `package.json`
- **Build errors**: Check your Vue code for syntax errors
- **Node version**: The workflow uses Node.js 18

#### 404 Errors
If you get 404 errors after deployment:
1. Verify the `base` configuration in `vite.config.ts` matches your repository name
2. Check that the deployment completed successfully
3. Wait a few minutes for GitHub Pages to update

#### Asset Loading Issues
If CSS/JS files don't load:
1. Check the `base` configuration
2. Verify the build process completed without errors
3. Clear your browser cache

### Cloudflare Pages Issues

#### Build Failures
Check the Actions tab for detailed error messages. Common issues:
- **Missing secrets**: Ensure `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` are set
- **Build command**: Verify the build command works locally
- **Node version**: The workflow uses Node.js 18

#### Deployment Failures
If deployment fails:
1. Check Cloudflare dashboard for error messages
2. Verify your project is properly connected to GitHub
3. Ensure your API token has the correct permissions

## Environment Variables

For environment-specific configurations, you can use:

- `.env.production` - Production environment variables
- `.env.development` - Development environment variables

These files should be in the `src/` directory.

## Custom Domain

### GitHub Pages
To use a custom domain:
1. Add a `CNAME` file in the `src/public/` directory
2. Add your domain name to the file
3. Configure your DNS settings to point to GitHub Pages

Example `CNAME` file content:
```
yourdomain.com
```

### Cloudflare Pages
To use a custom domain:
1. Go to Cloudflare Pages dashboard
2. Navigate to your project settings
3. Add your custom domain
4. Configure DNS settings in Cloudflare

## Performance Comparison

| Feature | GitHub Pages | Cloudflare Pages |
|---------|-------------|------------------|
| Build Time | Medium | Fast |
| Global CDN | Limited | Excellent |
| Custom Domains | Yes | Yes |
| SSL Certificates | Automatic | Automatic |
| Analytics | Basic | Advanced |
| Edge Functions | No | Yes |
| Free Tier | 100GB bandwidth | 100,000 requests/day |

## Choosing Between GitHub Pages and Cloudflare Pages

**Choose GitHub Pages if:**
- You want simple, free hosting
- You're already using GitHub
- You don't need advanced features
- Your traffic is moderate

**Choose Cloudflare Pages if:**
- You need better performance and global CDN
- You want advanced features like edge functions
- You expect high traffic
- You want better analytics and monitoring
- You need custom domains with advanced SSL options