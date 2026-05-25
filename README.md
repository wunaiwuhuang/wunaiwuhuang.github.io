# Guojia Wu — Academic Homepage

Built with [Hugo](https://gohugo.io) (Stack theme) and deployed via GitHub Actions to GitHub Pages.

**Live site:** <https://wunaiwuhuang.github.io/>

## Directory Structure

```
.
├── .github/workflows/gh-pages.yml   # CI/CD: auto-deploy to gh-pages branch
├── hugo.toml                         # Hugo site configuration
├── archetypes/                       # Content templates (hugo new)
├── assets/                           # SASS/JS overrides
├── content/                          # All site content (Markdown)
│   ├── _index.md                     # Homepage
│   ├── about/index.md                # About page
│   ├── projects/
│   │   ├── _index.md                 # Project list page
│   │   └── <name>.md                 # Individual project pages
│   ├── publications/index.md         # Publication list
│   └── contact/index.md              # Contact information
├── layouts/                          # Custom layout overrides
├── static/                           # Static files served as-is
│   └── images/
├── themes/stack/                     # Hugo theme (git submodule)
└── README.md
```

## Adding Content

### New project

```bash
hugo new projects/my-project.md
```

Edit `content/projects/my-project.md` with the relevant front matter (`date`, `tags`, `categories`) and description.

### New publication

Edit `content/publications/index.md` directly — format follows the existing list style.

### New blog post

```bash
hugo new posts/my-article.md
```

## Local Development

```bash
# Install Hugo Extended >= v0.157.0
# Clone with submodules
git clone --recurse-submodules https://github.com/wunaiwuhuang/wunaiwuhuang.github.io.git

# Start dev server
hugo server -D
```

Open <http://localhost:1313/> — changes to Markdown files trigger live reload.

## Deployment

Push to `main`. GitHub Actions compiles the site with `hugo --minify` and publishes the output to the `gh-pages` branch, which GitHub Pages serves.

No manual build step required.
