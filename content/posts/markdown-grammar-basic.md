---
title: "Markdown Grammar Basic"
date: 2025-01-06
tags: ["Markdown", "Obsidian", "Writing"]
categories: ["Coding Notes"]
description: "Quick reference for high-frequency Markdown syntax, tested and working natively in Obsidian."
---

> **Purpose**: Quick reference for *high-frequency* Markdown syntax in Obsidian.  
> Tested and works natively in Obsidian (no extra plugins needed).
> Two important issues to remember: **01. Keep pure markdown style code as much as possible**, **02. Do not use spaces or any other weird characters in titles; Markdown obeys standard URL rules and uses %20 to replace spaces.**

---

## 1. Headings

```md
# H1
## H2
### H3
#### H4
```

> Use `#` + space + text. Avoid skipping levels (e.g., don't go from H1 to H3). You can use up to level 6 headings in markdown, but strongly recommend less than 4 levels.

---

## 2. Emphasis

```md
*italic* or _italic_
**bold** or __bold__
***bold italic***
~~strikethrough~~
==highlight==
<u>bottom line</u>
~subscript~
^superscript^
```

> Use `**` for bold (more common than `__`).  
> Use two space characters `[ ][ ]` at the end of a sentence to change line.

---

## 3. Lists

### Unordered

```md
- Item
- Item
  - Sub-item (indent with 2 spaces or tab)
```

### Ordered

```md
1. First
2. Second
   3. Nested (indent!)
```

> Use `- ` to start unordered list with bullet while use `number. ` to start ordered list with auto-numbers.

---

## 4. Links & Images

### Obsidian-specific

```wiki
[[Note Name]]                → link to note
[[Note Name|Custom Text]]    → alias
[[Note Name#title01]]        → link to specific title
[[Note Name#title01#title02]]→ link to lower level title
[[Note#^block]]              → link to specific block
![[image.png]]               → embed image/file

----------
<figure style="text-align: center;">
<img src="image path"  width=" " height=" ">
<figcaption> your annotation </figcaption>
</figure>                    → a very good way to embed one image

----------
<div style="text-align: center;"> 
    <p><strong> shared title </strong></p> 
    <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;"> 
        <figure style="margin: 0;"> 
            <img src="image path 01" width="300" height="200"> 
            <figcaption>image title 01</figcaption> 
        </figure> 
        
        <figure style="margin: 0;"> 
            <img src="image path 02" width="300" height="200"> 
            <figcaption>image title 02</figcaption> 
        </figure> 
    </div> 
</div>                       → a very good way to embed multiple images
```

> Strongly recommend **DO NOT use any of** Obsidian specific grammars while writing notes. Turn off WIKI style citation function to ensure portability and elegance. Please only use markdown style code.

### Markdown-general

```md
[Google](https://google.com "This is a searching engine")

<https://example.com>        → type standard URL to auto-link

[Google][id01]       → type standard URL to auto-link
                     → at least one blank line exists between two elements
[id01]: https://google.com "This is a searching engine"

![embed figure/file](figure/file address link "description")

[reference to title](#title01)   → title name must exist in file. No need to add space between '#' and 'title01', and no need to add more '#' even if the title01 is not level one title.
```

> Some external links formats are unsupported in Obsidian, but they are actually standard usage. But actually the first function will satisfy all work.

---

## 5. Code

### Inline

```md
Use ` ` to add inline code, e.g. `printf("hello world")`.
```

### Code Block

`````md
```js (should add language name after ``` sign to get better visualization)
function greet() {
  console.log("Hello!");
}
```

Besides, if you need to add code block within a block, you need to add more ` sign in its parent blocks. e.g.
```` this is start of parent block
``` this is start of inside block
``` this is end of inside block
```` this is end of parent block
`````

> Supported languages: `js`, `python`, `html`, `css`, `bash`, `json`, etc.

---

## 6. Blockquotes

```md
> This is a quote.
> 
> > Nested quote
```

> Great for notes, summaries, or highlights.
>> Suggest using less than three levels of quotes to keep notes clean.

---

## 7. Horizontal Rule

```md
---
```
(Three hyphens on their own line)

---

## 8. Tables

```md
|title01|title02|title03|
|:---:|:---|---:|        → layout method
|element01|element02|element03|
```

> Align columns with `:---` (left), `:---:` (center), `---:` (right)—but optional in Obsidian. For example:  

| title01|title02|title03|
|:---:|:---|---:|
|123|123|123|

---

## 9. Tasks

```md
- [ ] To-do
- [x] Done
```

> Renders as interactive checkboxes in Obsidian (click to toggle!).

---

## 10. Footnotes

```md
Here's a sentence with a footnote.[^1]

[^1]: This is the footnote content.
```

> Note that footnote explanation should be placed at the end of the article, and always examine names when trying to cite footnotes.

---

## 11. Math Functions

### Inline

```md
Use $ $ to start input math functions, within dollar signs you should input LaTeX functions.
```

> For example: $\frac{\partial f}{\partial x} = \sqrt{a}x$

### Function block

```
Use $$ $$ to give a function block. Inside also supports LaTeX functions.
```

> For example: $$\frac{\partial f}{\partial x} = \sqrt{a}x$$
