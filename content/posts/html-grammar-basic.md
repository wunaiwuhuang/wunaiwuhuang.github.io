---
title: "HTML Grammar Basic"
date: 2025-01-07
tags: ["HTML", "Web", "Frontend", "Cheatsheet"]
categories: ["Coding Notes"]
description: "Comprehensive HTML reference covering document structure, elements, forms, semantic tags, SEO, and accessibility."
---

## 1. HTML Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

> `<!DOCTYPE html>` declares HTML5. `<head>` contains metadata. `<body>` contains visible content. Always include charset and viewport meta tags.

---

## 2. Text Elements

```html
<!-- Headings (h1 is most important, h6 least) -->
<h1>Main Heading</h1>
<h2>Section Heading</h2>
<h3>Subsection</h3>
<h4>Sub-subsection</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>

<!-- Paragraphs and line breaks -->
<p>This is a paragraph.</p>
<br>  <!-- Line break (self-closing) -->
<hr>  <!-- Horizontal rule (self-closing) -->

<!-- Text formatting -->
<strong>Bold/important text</strong>
<b>Bold text (no semantic meaning)</b>
<em>Italic/emphasized text</em>
<i>Italic text (no semantic meaning)</i>
<mark>Highlighted text</mark>
<small>Smaller text</small>
<del>Deleted text</del>
<ins>Inserted text</ins>
<sub>Subscript</sub>
<sup>Superscript</sup>
<code>Inline code</code>
<pre>Preformatted text (preserves spaces/newlines)</pre>
```

> Use `<strong>` and `<em>` for semantic meaning, not just styling. Screen readers understand these.

---

## 3. Links and Navigation

```html
<!-- Links -->
<a href="https://example.com">External link</a>
<a href="page.html">Internal link</a>
<a href="#section-id">Link to section on same page</a>
<a href="mailto:email@example.com">Email link</a>
<a href="tel:+1234567890">Phone link</a>
<a href="file.pdf" download>Download link</a>
<a href="https://example.com" target="_blank">Open in new tab</a>
<a href="https://example.com" rel="noopener noreferrer" target="_blank">
    Secure external link
</a>

<!-- Navigation structure -->
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
```

> `target="_blank"` opens new tab. Always add `rel="noopener noreferrer"` for security.

---

## 4. Lists

```html
<!-- Unordered list (bullets) -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<!-- Ordered list (numbers) -->
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>

<!-- Nested lists -->
<ul>
    <li>Item 1
        <ul>
            <li>Sub-item 1.1</li>
            <li>Sub-item 1.2</li>
        </ul>
    </li>
    <li>Item 2</li>
</ul>

<!-- Description list (key-value pairs) -->
<dl>
    <dt>Term 1</dt>
    <dd>Definition 1</dd>
    <dt>Term 2</dt>
    <dd>Definition 2</dd>
</dl>
```

---

## 5. Images and Media

```html
<!-- Images -->
<img src="image.jpg" alt="Description of image">
<img src="image.jpg" alt="Description" loading="lazy">

<!-- Responsive image -->
<picture>
    <source media="(min-width: 800px)" srcset="large.jpg">
    <source media="(min-width: 400px)" srcset="medium.jpg">
    <img src="small.jpg" alt="Description">
</picture>

<!-- Figure with caption -->
<figure>
    <img src="image.jpg" alt="Description">
    <figcaption>Image caption goes here</figcaption>
</figure>

<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support audio.
</audio>

<!-- Video -->
<video controls width="640" height="360">
    <source src="video.mp4" type="video/mp4">
    Your browser does not support video.
</video>

<!-- YouTube embed (iframe) -->
<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    frameborder="0" allowfullscreen>
</iframe>
```

> Always include `alt` text for images (accessibility). Use `loading="lazy"` for images below the fold.

---

## 6. Tables

```html
<!-- Basic table -->
<table>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
        </tr>
    </tbody>
</table>

<!-- Table with merged cells -->
<table>
    <tr>
        <td rowspan="2">Spans 2 rows</td>
        <td>Normal cell</td>
    </tr>
    <tr>
        <td>Normal cell</td>
    </tr>
    <tr>
        <td colspan="2">Spans 2 columns</td>
    </tr>
</table>
```

> Use `<thead>`, `<tbody>`, `<tfoot>` for structure. Use `<th>` for headers. `colspan` and `rowspan` merge cells.

---

## 7. Forms

```html
<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="">Select country</option>
        <option value="us">United States</option>
    </select>
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" cols="50"></textarea>
    
    <input type="file" id="file" name="file">
    <input type="checkbox" id="agree" name="agree">
    <label for="agree">I agree</label>
    
    <button type="submit">Submit</button>
</form>
```

> Always use `<label>` with `for` attribute matching input `id`. Use `required` for mandatory fields.

```html
<!-- HTML5 input types -->
<input type="color">
<input type="date">
<input type="email">
<input type="number" min="0" max="120">
<input type="range">
<input type="search">
<input type="tel">
<input type="url">

<!-- Input attributes -->
<input type="text" 
    placeholder="Enter text..."
    maxlength="50"
    pattern="[A-Za-z]{3,}"
    required
    disabled
    readonly
    autofocus>
```

---

## 8. Semantic HTML

```html
<header>
    <nav>Navigation menu</nav>
</header>

<main>
    <article>
        <h1>Article Title</h1>
        <p>By Author on <time datetime="2024-01-01">Jan 1, 2024</time></p>
        <section>
            <h2>Section Title</h2>
            <p>Content...</p>
        </section>
    </article>
</main>

<footer>
    <p>&copy; 2024 Company Name</p>
</footer>
```

```html
<!-- Semantic elements -->
<header>      <!-- Header of page or section -->
<nav>         <!-- Navigation links -->
<main>        <!-- Main content (one per page) -->
<article>     <!-- Independent content -->
<section>     <!-- Thematic grouping -->
<aside>       <!-- Related content -->
<footer>      <!-- Footer -->
<figure>      <!-- Self-contained content -->
<figcaption>  <!-- Caption for figure -->

<!-- Details/Summary (collapsible) -->
<details>
    <summary>Click to expand</summary>
    <p>Hidden content that can be toggled</p>
</details>
```

> Use semantic tags for meaning, not just styling. Helps accessibility and SEO.

---

## 9. Divisions and Spans

```html
<!-- Block-level container (takes full width) -->
<div class="container">
    <p>Content inside div</p>
</div>

<!-- Inline container (only wraps content) -->
<p>This is <span class="highlight">highlighted text</span> in a paragraph.</p>
```

> `<div>` is block-level (new line), `<span>` is inline (same line). Use for styling, prefer semantic elements when appropriate.

---

## 10. Attributes

```html
<element 
    id="unique-id"              <!-- Unique identifier -->
    class="class1 class2"       <!-- CSS classes -->
    style="color: red;"         <!-- Inline CSS (avoid) -->
    title="Tooltip text"        <!-- Tooltip on hover -->
    data-custom="value"         <!-- Custom data attributes -->
    hidden                      <!-- Hide element -->
    contenteditable="true"      <!-- Make editable -->
    lang="en"                   <!-- Language -->
    tabindex="1"                <!-- Tab order -->
>
```

> `id` must be unique per page. `class` can be reused. `data-*` attributes store custom data accessible via JavaScript.

---

## 11. Meta Tags

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Brief page description">
    <meta name="author" content="Author Name">
    
    <!-- Open Graph (social media) -->
    <meta property="og:title" content="Page Title">
    <meta property="og:description" content="Page description">
    <meta property="og:image" content="https://example.com/image.jpg">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="favicon.png">
</head>
```

> Meta tags go in `<head>`. Charset and viewport are essential. OG tags improve social media sharing.

---

## 12. Comments and Special Characters

```html
<!-- This is a comment -->

<!-- HTML entities -->
&lt;       <!-- < -->
&gt;       <!-- > -->
&amp;      <!-- & -->
&quot;     <!-- " -->
&nbsp;     <!-- Non-breaking space -->
&copy;     <!-- (c) -->
```

---

## 13. Embedding External Content

```html
<!-- External CSS -->
<link rel="stylesheet" href="styles.css">

<!-- External JavaScript -->
<script src="script.js" defer></script>

<!-- Inline CSS -->
<style>
    body { background-color: #f0f0f0; }
</style>

<!-- Inline JavaScript -->
<script>
    console.log("Inline script");
</script>

<!-- External iframe -->
<iframe src="https://example.com" width="800" height="600"></iframe>
```

> Place CSS in `<head>`, JavaScript before `</body>` or use `defer`.

---

## 14. Accessibility (a11y)

```html
<!-- Alt text for images -->
<img src="chart.png" alt="Bar chart showing sales data 2020-2024">

<!-- Decorative images (empty alt) -->
<img src="decoration.png" alt="">

<!-- ARIA labels -->
<button aria-label="Close dialog">×</button>
<nav aria-label="Main navigation">...</nav>

<!-- Skip navigation link -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Form labels (critical) -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

> Accessibility is essential. Always use alt text, labels, semantic HTML. Test with keyboard navigation (Tab key).

---

## 15. HTML5 APIs (Data Attributes)

```html
<div 
    data-user-id="12345"
    data-user-name="John"
    data-user-role="admin">
    User card
</div>

<script>
    const div = document.querySelector('div');
    console.log(div.dataset.userId);      // "12345"
    console.log(div.dataset.userName);    // "John"
    console.log(div.dataset.userRole);    // "admin"
</script>
```

> `data-*` attributes store custom data. Access via `dataset` in JavaScript. Use kebab-case in HTML, camelCase in JS.

---

## HTML Template for Bioinformatics Tools

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bioinformatics Tool</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 1200px; margin: 0 auto; padding: 20px; }
        header { background: #2c3e50; color: white; padding: 20px; margin-bottom: 30px; border-radius: 5px; }
        .container { background: #f8f9fa; padding: 30px; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .form-group { margin-bottom: 20px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input[type="text"], input[type="file"], textarea, select { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; }
        textarea { resize: vertical; min-height: 150px; font-family: monospace; }
        button { background: #3498db; color: white; padding: 12px 30px; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; }
        button:hover { background: #2980b9; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background: #3498db; color: white; }
        tr:hover { background: #f5f5f5; }
    </style>
</head>
<body>
    <header>
        <h1>Bioinformatics Analysis Tool</h1>
        <p>Sequence Analysis and Visualization</p>
    </header>
    <main class="container">
        <form id="analysisForm">
            <div class="form-group">
                <label for="sequence">Input Sequence (FASTA format):</label>
                <textarea id="sequence" name="sequence" placeholder=">seq1
ATCGATCGATCG"></textarea>
            </div>
            <div class="form-group">
                <label for="fileUpload">Or upload file:</label>
                <input type="file" id="fileUpload" accept=".fasta,.fa,.txt">
            </div>
            <div class="form-group">
                <label for="analysisType">Analysis Type:</label>
                <select id="analysisType" name="analysisType">
                    <option value="gc">GC Content</option>
                    <option value="length">Sequence Length</option>
                    <option value="complement">Reverse Complement</option>
                    <option value="translate">Translation</option>
                </select>
            </div>
            <button type="submit">Run Analysis</button>
        </form>
    </main>
    <script>
        document.getElementById('analysisForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const sequence = document.getElementById('sequence').value;
            const analysisType = document.getElementById('analysisType').value;
            document.getElementById('results').style.display = 'block';
            document.getElementById('resultsContent').innerHTML = 
                `<p>Analysis type: <strong>${analysisType}</strong></p>
                 <p>Sequence length: ${sequence.length} characters</p>`;
        });
        document.getElementById('fileUpload').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    document.getElementById('sequence').value = event.target.result;
                };
                reader.readAsText(file);
            }
        });
    </script>
</body>
</html>
```

---

## Quick Reference

### Must-Have Elements

- `<!DOCTYPE html>` - Document type
- `<html>` - Root element
- `<head>` - Metadata
- `<title>` - Page title (required)
- `<body>` - Visible content
- `<meta charset="UTF-8">` - Character encoding
- `<meta name="viewport">` - Responsive design

### Block vs Inline Elements

**Block-level** (start on new line, take full width):
`<div>`, `<p>`, `<h1>`-`<h6>`, `<ul>`, `<ol>`, `<li>`, `<table>`, `<form>`, `<header>`, `<footer>`

**Inline** (stay on same line):
`<span>`, `<a>`, `<img>`, `<strong>`, `<em>`, `<code>`, `<input>`, `<label>`, `<button>`

### Common Mistakes to Avoid

```html
<!-- WRONG: Unclosed tags -->
<p>Paragraph text

<!-- CORRECT: Always close tags -->
<p>Paragraph text</p>

<!-- WRONG: Incorrect nesting -->
<p>Text <strong>bold</p></strong>

<!-- CORRECT: Proper nesting -->
<p>Text <strong>bold</strong></p>

<!-- WRONG: Missing alt on images -->
<img src="chart.jpg">

<!-- CORRECT: Always include alt -->
<img src="chart.jpg" alt="Bar chart showing Q4 results">
```

### vs [Markdown](/posts/markdown-grammar-basic/)

- **HTML**: Full control, styling, interactive elements
- **Markdown**: Simple, readable, converts to HTML
- **Use HTML when**: Building web apps, need forms/interactivity
- **Use Markdown when**: Writing documentation, blog posts
