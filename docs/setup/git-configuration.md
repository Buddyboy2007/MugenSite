# Git Line Ending Configuration Guide

This guide explains how to configure Git to handle line endings properly across different operating systems.

## Why Line Ending Configuration Matters

Different operating systems use different line ending characters:
- **Windows**: CRLF (Carriage Return + Line Feed) - `\r\n`
- **Linux/macOS**: LF (Line Feed) - `\n`

Without proper configuration, this can cause:
- Files appearing as modified when they haven't changed
- Merge conflicts due to line ending differences
- Inconsistent formatting across the team

## Configuration Methods

### Method 1: Using .gitattributes (Recommended)

The `.gitattributes` file in your repository root handles line endings automatically:

```bash
# View current .gitattributes
cat .gitattributes
```

**Key settings in your .gitattributes:**
- `* text=auto eol=lf` - Default to LF for all text files
- `*.bat text eol=crlf` - Keep CRLF for Windows batch files
- `*.png binary` - Mark binary files to prevent modification

### Method 2: Global Git Configuration

Configure Git globally on your machine:

```bash
# Set Git to automatically convert line endings
git config --global core.autocrlf input    # Linux/macOS
git config --global core.autocrlf true     # Windows
git config --global core.autocrlf false    # Disable (not recommended)

# Enable file mode checking
git config --global core.filemode false
```

### Method 3: Repository-Specific Configuration

Configure line endings for this specific repository:

```bash
# Navigate to your project
cd MugenSite

# Set repository-specific line ending handling
git config core.autocrlf input    # Linux/macOS
git config core.autocrlf true     # Windows
```

## Recommended Settings by OS

### Windows Users
```bash
git config --global core.autocrlf true
git config --global core.safecrlf true
```

### Linux/macOS Users
```bash
git config --global core.autocrlf input
git config --global core.safecrlf true
```

## Verification

Check your current Git configuration:

```bash
# Check global settings
git config --global --list | grep autocrlf
git config --global --list | grep safecrlf

# Check repository settings
git config --list | grep autocrlf
git config --list | grep safecrlf

# Check if .gitattributes is being used
git check-attr -a -- your-file.js
```

## Troubleshooting

### Files Appearing as Modified

If files appear modified due to line endings:

```bash
# Reset all files to their correct line endings
git add --renormalize .

# Or for a specific file
git add --renormalize path/to/file.js
```

### Line Ending Conflicts

If you encounter line ending conflicts:

```bash
# Remove all files from index
git rm --cached -r .

# Re-add all files with correct line endings
git add .

# Commit the changes
git commit -m "Normalize line endings"
```

### Checking Line Endings

View line endings in a file:

```bash
# Show line endings (Linux/macOS)
cat -A filename

# Show line endings (Windows PowerShell)
Get-Content filename | Format-Hex

# Show line endings (cross-platform)
hexdump -C filename | head
```

## Best Practices

1. **Use .gitattributes** - This is the most reliable method
2. **Set global configuration** - Configure your Git client once
3. **Team consistency** - Ensure all team members use the same settings
4. **Binary files** - Always mark binary files as binary in .gitattributes
5. **Regular normalization** - Periodically run `git add --renormalize .`

## Common Issues

### Issue: "No newline at end of file"
**Solution:** This is normal and expected. Git tracks this as a difference.

### Issue: "CRLF will be replaced by LF"
**Solution:** This is Git doing its job. Your .gitattributes should handle this automatically.

### Issue: Line ending differences in diffs
**Solution:** Ensure .gitattributes is properly configured and all team members have consistent Git settings.

## Additional Resources

- [Git Documentation: Line Ending Configuration](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)
- [GitHub: Dealing with line endings](https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings)