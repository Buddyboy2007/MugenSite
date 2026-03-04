# GitHub Actions Workflows Configuration

This document explains the GitHub Actions workflows configured for the MugenSite project.

## Active Workflows

### Vue.js Deployment Workflow (`deploy.yml`)
**Purpose**: Builds and deploys the Vue.js application to GitHub Pages
**Triggers**:
- Push to `main` branch
- Manual execution via Actions tab

**Process**:
1. **Build Job**: 
   - Sets up Node.js environment
   - Installs dependencies from `src/package.json`
   - Builds Vue application (`npm run build`)
   - Uploads built files to GitHub Pages artifact

2. **Deploy Job**:
   - Deploys to GitHub Pages
   - Provides live site URL

**Environment**: `github-pages`

## Disabled Workflows

### Static Content Workflow (`static.yml.disabled`)
**Status**: Disabled
**Reason**: This was a generic static content deployment workflow that doesn't handle Vue.js builds properly
**Alternative**: Use the Vue-specific `deploy.yml` workflow instead

### Pages Configuration Workflow (`pages.yml.disabled`)
**Status**: Disabled
**Reason**: GitHub Pages configuration is now handled within the main `deploy.yml` workflow
**Alternative**: Configuration is integrated into the Vue deployment workflow

## Workflow Management

### Enabling/Disabling Workflows

To disable a workflow:
```bash
# Rename to disable
mv .github/workflows/workflow-name.yml .github/workflows/workflow-name.yml.disabled

# Or add a condition to skip
if: false  # This will skip the entire workflow
```

To re-enable a workflow:
```bash
# Rename back to enable
mv .github/workflows/workflow-name.yml.disabled .github/workflows/workflow-name.yml
```

### Workflow Best Practices

1. **Use descriptive names**: `deploy.yml` clearly indicates its purpose
2. **Include comments**: Document what each workflow does
3. **Proper permissions**: Only grant necessary permissions
4. **Concurrency control**: Prevent multiple deployments running simultaneously
5. **Error handling**: Ensure workflows fail gracefully with clear error messages

## Troubleshooting

### Workflow Not Running

1. **Check file extension**: Ensure workflow files end with `.yml` (not `.yml.disabled`)
2. **Check triggers**: Verify the workflow is triggered by the correct events
3. **Check permissions**: Ensure the repository has proper GitHub Pages permissions enabled

### Build Failures

1. **Check Node.js version**: Ensure the version matches your local development environment
2. **Check dependencies**: Verify all dependencies are in `package.json`
3. **Check build script**: Ensure `npm run build` works locally

### Deployment Issues

1. **Check base URL**: Verify `base` in `vite.config.ts` matches repository name
2. **Check GitHub Pages settings**: Ensure source is set to "GitHub Actions"
3. **Check environment**: Verify the `github-pages` environment is properly configured

## Security Considerations

- **Minimal permissions**: Workflows only have permissions needed for their specific tasks
- **Token security**: GitHub Pages deployment tokens are automatically managed
- **Dependency security**: npm dependencies are cached but verified on each run

## Monitoring

- **Actions tab**: Monitor workflow runs and view logs
- **Deployment status**: Check the `github-pages` environment for deployment status
- **Error notifications**: GitHub will notify of workflow failures via email or notifications