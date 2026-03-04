# GitHub Token Permissions Guide

This guide explains the GitHub token permissions required for your deployment workflows.

## GitHub Pages Deployment Permissions

### Required Permissions

For GitHub Pages deployment, the workflow needs these permissions:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

### Permission Details

- **`contents: read`**: Allows the workflow to read repository contents, including source code and configuration files
- **`pages: write`**: Allows the workflow to deploy to GitHub Pages and manage Pages-related resources
- **`id-token: write`**: Allows the workflow to request OpenID Connect (OIDC) tokens for secure authentication

### Why These Permissions Are Needed

1. **`contents: read`**:
   - Read source code from the repository
   - Access package.json and other configuration files
   - Read build artifacts and deployment files

2. **`pages: write`**:
   - Upload built artifacts to GitHub Pages
   - Deploy the application to the GitHub Pages environment
   - Manage Pages deployment history and settings

3. **`id-token: write`**:
   - Request OIDC tokens for secure authentication
   - Authenticate with GitHub Pages services without storing secrets
   - Enable secure, token-based authentication

## Cloudflare Pages Deployment Permissions

### Required Permissions

For Cloudflare Pages deployment, the workflow needs:

```yaml
permissions:
  contents: read
```

### Permission Details

- **`contents: read`**: Allows the workflow to read repository contents for building and deployment

### Why Only Read Permission

Cloudflare Pages deployment uses:
- **Personal API tokens** stored as GitHub secrets (`CLOUDFLARE_API_TOKEN`)
- **Account ID** stored as GitHub secret (`CLOUDFLARE_ACCOUNT_ID`)
- **GitHub token** for repository access (`GITHUB_TOKEN`)

The workflow doesn't need write permissions to GitHub since it deploys to Cloudflare's infrastructure.

## Setting Up GitHub Secrets

### For Cloudflare Pages

You need to add these secrets to your GitHub repository:

1. **`CLOUDFLARE_API_TOKEN`**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to "My Profile" → "API Tokens"
   - Create a new token with these permissions:
     - **Account**: `Pages:Edit`
     - **Zone**: `Zone:Read` (if using custom domains)
   - Copy the token value and add it as a GitHub secret

2. **`CLOUDFLARE_ACCOUNT_ID`**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to "Overview"
   - Copy your Account ID
   - Add it as a GitHub secret

### Creating Cloudflare API Token

1. **Log in to Cloudflare Dashboard**
2. **Go to My Profile** → **API Tokens**
3. **Create Token** → **Custom Token**
4. **Token Name**: `GitHub Actions - Pages`
5. **Permissions**:
   ```
   Account
     Pages: Edit
   
   Zone
     Zone: Read (optional, for custom domains)
   ```
6. **Account Resources**: Include your account
7. **Zone Resources**: Include specific zones if needed
8. **Create Token** and copy the value

## GitHub Repository Settings

### GitHub Pages Configuration

1. **Go to Repository Settings**
2. **Navigate to "Pages" section**
3. **Source**: Set to "GitHub Actions"
4. **Branch**: Select your main branch (usually `main`)
5. **Save changes**

### Environment Protection (Optional)

For additional security, you can configure environment protection:

1. **Go to Repository Settings** → **Environments**
2. **Create environment**: `github-pages`
3. **Add protection rules**:
   - Required reviewers
   - Wait timer
   - Deployment branches

## Security Best Practices

### Minimal Permissions

- **Only grant necessary permissions** - Don't give write access to everything
- **Use specific permissions** - Grant only what each workflow needs
- **Regularly review permissions** - Audit and update as needed

### Secret Management

- **Use GitHub secrets** - Never hardcode tokens in workflow files
- **Rotate tokens regularly** - Update API tokens periodically
- **Limit token scope** - Create tokens with minimal required permissions

### Workflow Security

- **Pin action versions** - Use specific versions, not `@latest`
- **Validate inputs** - Sanitize any user inputs in workflows
- **Monitor workflow runs** - Review logs for suspicious activity

## Troubleshooting Permission Issues

### GitHub Pages Deployment Fails

**Error**: "Permission denied" or "Cannot deploy to Pages"
**Solution**:
1. Verify `pages: write` permission is set
2. Check that GitHub Pages is enabled in repository settings
3. Ensure the `github-pages` environment exists

**Error**: "ID token request failed"
**Solution**:
1. Verify `id-token: write` permission is set
2. Check that OIDC is enabled for the repository
3. Ensure the workflow uses the correct OIDC configuration

### Cloudflare Pages Deployment Fails

**Error**: "Invalid API token" or "Authentication failed"
**Solution**:
1. Verify `CLOUDFLARE_API_TOKEN` secret is correctly set
2. Check that the token has Pages:Edit permissions
3. Ensure `CLOUDFLARE_ACCOUNT_ID` is correct

**Error**: "Cannot read repository contents"
**Solution**:
1. Verify `contents: read` permission is set
2. Check that the workflow has access to the repository
3. Ensure the repository is not private (if using public workflows)

## Permission Verification

### Check Current Permissions

You can verify your workflow permissions by:

1. **Viewing workflow file**:
   ```yaml
   permissions:
     contents: read
     pages: write
     id-token: write
   ```

2. **Checking GitHub Actions logs** for permission-related errors

3. **Testing workflow manually** to see if permissions work correctly

### Testing Permissions

Create a test workflow to verify permissions:

```yaml
name: Test Permissions
on: workflow_dispatch
jobs:
  test:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      - name: Test Pages permission
        run: echo "Pages permission test"
```

## Common Permission Scenarios

### Scenario 1: Organization Repository

If your repository is in an organization:
- **Organization owner** must enable GitHub Pages for the organization
- **Repository admin** must enable Pages for the specific repository
- **Workflow permissions** must be explicitly granted

### Scenario 2: Private Repository

For private repositories:
- **Same permissions apply** as public repositories
- **Additional security**: Consider using environment protection rules
- **Access control**: Ensure only authorized users can trigger workflows

### Scenario 3: Multiple Environments

For staging and production environments:
- **Separate workflows** for each environment
- **Different permissions** based on environment requirements
- **Environment-specific secrets** for different deployment targets

## Additional Resources

- [GitHub Actions Permissions](https://docs.github.com/en/actions/security-guides/automatic-token-authentication)
- [GitHub Pages Workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site-with-actions)
- [Cloudflare Pages GitHub Integration](https://developers.cloudflare.com/pages/platform/github-integration/)
- [OpenID Connect for GitHub Actions](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)