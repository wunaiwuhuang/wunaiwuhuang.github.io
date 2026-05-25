# Guojia Wu — Academic Homepage

Built with [Hugo](https://gohugo.io) (Stack theme), deployed via GitHub Actions to GitHub Pages.

**Live:** <https://wunaiwuhuang.github.io/>

---

## Tech Stack

| Layer | Technology |
|---|---|
| Static Site Generator | Hugo Extended (>= v0.157.0) |
| Theme | [Stack](https://github.com/CaiJimmy/hugo-theme-stack) (git submodule) |
| CI/CD | GitHub Actions — `peaceiris/actions-hugo` + `peaceiris/actions-gh-pages` |
| Hosting | GitHub Pages (`gh-pages` branch) |
| Content Format | Markdown + Hugo front matter |

## Directory Structure

```
.
├── .github/workflows/gh-pages.yml   # CI: build & deploy on push to master
├── hugo.toml                         # Site config (theme, menus, widgets, params)
├── archetypes/                       # `hugo new` templates
├── assets/                           # SASS/JS overrides (Hugo Pipes)
├── content/
│   ├── _index.md                     # Homepage
│   ├── about/index.md                # About (education, research, skills, awards)
│   ├── posts/                        # Blog posts (Coding Notes)
│   │   └── <slug>.md
│   ├── projects/                     # Research projects
│   │   ├── _index.md                 # Project listing
│   │   └── <slug>.md                 # Individual project
│   ├── publications/index.md         # Publication list
│   ├── contact/index.md              # Contact info
│   ├── search/index.md               # Search page (layout: search)
│   └── archives/index.md             # Archives page (layout: archives)
├── layouts/                          # Custom template overrides
├── static/                           # Static files (images, files, favicon)
│   └── images/                       # Put all images here
├── themes/stack/                     # Theme (git submodule, do not edit directly)
└── README.md
```

---

## Content Management Guide

### Write a New Blog Post

```bash
hugo new posts/my-title.md
```

Edit `content/posts/my-title.md`. The front matter must include:

```yaml
---
title: "Post Title"
date: 2026-05-25
tags: ["tag1", "tag2"]
categories: ["Category"]
description: "Short summary for SEO and card preview"
---
```

Posts appear on the homepage automatically, sorted by `date`.

### Add a New Project

```bash
hugo new projects/my-project.md
```

```yaml
---
title: "Project Name"
date: 2026-05-25
tags: ["keyword1", "keyword2"]
categories: ["Project"]
github: "https://github.com/user/repo"   # optional, omit if none
period: "Mar. 2025 — Present"            # custom, shown on card
---
```

### Edit the About / Publications / Contact Pages

These are single-page documents. Edit directly:

| Page | File |
|---|---|
| About | `content/about/index.md` |
| Publications | `content/publications/index.md` |
| Contact | `content/contact/index.md` |

### Add Static Files

Put images, PDFs, or any static assets in `static/`. Reference them in Markdown with root-absolute paths:

```markdown
![alt](/images/photo.jpg)
[Download CV](/files/cv.pdf)
```

### Draft Mode

Set `draft: true` in front matter to hide a page from production builds. Preview locally with:

```bash
hugo server -D    # -D includes drafts
```

---

## Site Configuration Reference (`hugo.toml`)

### Sidebar & Profile

```toml
[params.sidebar]
  subtitle = "Your subtitle"
  avatar = "/images/avatar.jpg"   # static/images/avatar.jpg
```

### Navigation Menu

```toml
[[menu.main]]
  identifier = "about"
  name = "About"
  url = "/about/"
  weight = 1   # lower = first
```

### Right-Sidebar Widgets

```toml
[params.widgets]
  homepage = [
    { type = "search" },
    { type = "archives", params = { limit = 5 } },
    { type = "categories", params = { limit = 10 } },
    { type = "tag-cloud", params = { limit = 10 } },
  ]
  page = [{ type = "toc" }]
```

- `search` — sidebar search bar (requires `content/search/index.md` with `layout: search`)
- `archives` — posts grouped by year
- `categories` — category cloud
- `tag-cloud` — tag cloud
- `toc` — table of contents on single pages

### Math Rendering (KaTeX)

```toml
[params.article.math]
  enable = true
```

Use `$...$` for inline, `$$...$$` for block equations.

### Dark Mode Toggle

```toml
[params.colorScheme]
  toggle = true
```

### Social Icons

```toml
[[menu.social]]
  identifier = "github"
  name = "GitHub"
  url = "https://github.com/username"
  params = { icon = "brand-github", newTab = true }

[[menu.social]]
  identifier = "email"
  name = "Email"
  url = "mailto:user@example.com"
  params = { icon = "link", newTab = true }
```

Available icons in Stack: `brand-github`, `brand-twitter`, `link`, `rss`, `messages`, `user`, `home`.

---

## Local Development

### Prerequisites

- Hugo Extended >= v0.157.0 (check with `hugo version`)
- Git

### First-Time Setup

```bash
git clone --recurse-submodules https://github.com/wunaiwuhuang/wunaiwuhuang.github.io.git
cd wunaiwuhuang.github.io
hugo server -D
```

If the theme is missing:
```bash
git submodule update --init --recursive
```

### Daily Workflow

```bash
hugo server -D        # Start dev server at http://localhost:1313
# ... edit Markdown files ...
# Changes auto-reload in browser
git add -A
git commit -m "description"
git push origin master
```

Hugo watches file changes. The browser refreshes automatically.

---

## Deployment Pipeline

```
git push master
  → GitHub Actions triggers
    → Checkout source (with submodules)
    → Install Hugo Extended
    → hugo --minify
    → Push public/ to gh-pages branch
  → GitHub Pages serves gh-pages branch
```

- **Source branch:** `master` (Markdown + config + theme submodule)
- **Deploy branch:** `gh-pages` (compiled HTML/CSS/JS, auto-generated)
- **Never edit `gh-pages` directly.** It is overwritten by CI.
- **Never commit `public/` to `master`.** It is excluded by `.gitignore`.

### Manual Trigger

If auto-deploy fails, go to `https://github.com/wunaiwuhuang/wunaiwuhuang.github.io/actions` → click the workflow → "Run workflow".

---

## Common Tasks

### Update the Hugo Theme

```bash
git submodule update --remote themes/stack
git add themes/stack
git commit -m "chore: update Stack theme"
git push
```

### Change Theme

```bash
# Remove old theme
git submodule deinit themes/stack
git rm themes/stack

# Add new theme
git submodule add <theme-url> themes/<new-theme>
# Edit hugo.toml: theme = "<new-theme>"
git add -A && git commit -m "chore: switch to <new-theme>"
```

### Add a Custom CSS Override

Create `assets/scss/custom.scss` — Hugo Pipes will compile it and Stack will include it automatically.

### Troubleshooting Build Failures

1. Run `hugo` locally — errors are more detailed than CI logs
2. Check `hugo version` >= 0.157.0 and includes `+extended`
3. Verify submodule: `git submodule status`
4. Check `hugo.toml` syntax — especially TOML indentation
5. Check front matter in recently-edited Markdown files
