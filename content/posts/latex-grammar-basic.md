---
title: "LaTeX Grammar Basic"
date: 2026-07-18
tags: ["LaTeX", "Math", "Typesetting", "Cheatsheet"]
categories: ["Coding Notes"]
description: "Comprehensive LaTeX reference covering arithmetic, fractions, Greek letters, matrices, equations, and mathematical notation."
---

## 1. LaTeX in Markdown

| Function | Code | Annotation |
|---|---|---|
| Inline math: $E = mc^2$ | `$E = mc^2$` | Use for math within text |
| Display math: $$E = mc^2$$ | `$$E = mc^2$$` | Centered, on its own line |

> In Markdown: Use `$...$` for inline math, `$$...$$` for display math. LaTeX commands will be `\[ ... \]`.

---

## 2. Basic Arithmetic Operations

### Addition and Subtraction

| Function | Code | Annotation |
|---|---|---|
| $a + b - c$ | `$a + b - c$` | Addition and subtraction |

### Multiplication

| Function | Code | Annotation |
|---|---|---|
| $a \times b$ | `$a \times b$` | × symbol |
| $a \cdot b$ | `$a \cdot b$` | · symbol (preferred for numbers) |
| $ab$ | `$ab$` | Implicit (for variables) |

### Division

| Function | Code | Annotation |
|---|---|---|
| $a \div b$ | `$a \div b$` | ÷ symbol |
| $a / b$ | `$a / b$` | / slash |
| $\frac{a}{b}$ | `$\frac{a}{b}$` | Fraction (preferred) |

### Plus-Minus

| Function | Code | Annotation |
|---|---|---|
| $\pm$ | `$\pm$` | ± symbol |
| $\mp$ | `$\mp$` | ∓ symbol |

### Exponents

| Function | Code | Annotation |
|---|---|---|
| $x^2$ | `$x^2$` | x squared |
| $x^{10}$ | `$x^{10}$` | Use braces for multi-character |
| $e^{-x}$ | `$e^{-x}$` | Negative exponent |

### Roots

| Function | Code | Annotation |
|---|---|---|
| $\sqrt{x}$ | `$\sqrt{x}$` | Square root |
| $\sqrt[3]{x}$ | `$\sqrt[3]{x}$` | Cube root |
| $\sqrt[n]{x}$ | `$\sqrt[n]{x}$` | nth root |

> Use `^` for superscript (powers), `_` for subscript. Use braces `{}` for multi-character super/subscripts.

---

## 3. Fractions and Binomials

### Fractions

| Function | Code | Annotation |
|---|---|---|
| $\frac{a}{b}$ | `$\frac{a}{b}$` | Standard fraction |
| $\frac{1}{2}$ | `$\frac{1}{2}$` | One half |
| $\frac{x + y}{2}$ | `$\frac{x + y}{2}$` | Complex numerator |
| $\frac{1}{1 + \frac{1}{2}}$ | `$\frac{1}{1 + \frac{1}{2}}$` | Nested fractions |
| $\tfrac{1}{2}$ | `$\tfrac{1}{2}$` | Text style (smaller) |

### Binomial Coefficients

| Function | Code | Annotation |
|---|---|---|
| $\binom{n}{k}$ | `$\binom{n}{k}$` | "n choose k" |

> `\frac{numerator}{denominator}` for fractions. `\binom{n}{k}` for binomial coefficients.

---

## 4. Subscripts and Superscripts

### Subscripts

| Function | Code | Annotation |
|---|---|---|
| $x_1$ | `$x_1$` | x sub 1 |
| $x_{10}$ | `$x_{10}$` | Multi-character subscript |
| $x_i$ | `$x_i$` | x sub i |
| $a_{ij}$ | `$a_{ij}$` | Double subscript |

### Superscripts

| Function | Code | Annotation |
|---|---|---|
| $x^2$ | `$x^2$` | x squared |
| $x^{2n}$ | `$x^{2n}$` | Multi-character superscript |
| $2^{10}$ | `$2^{10}$` | 2 to the 10th |

### Combined

| Function | Code | Annotation |
|---|---|---|
| $x_i^2$ | `$x_i^2$` | x_i squared |
| $x_{i,j}^{(n)}$ | `$x_{i,j}^{(n)}$` | Complex notation |

### Multiple Levels

| Function | Code | Annotation |
|---|---|---|
| $x^{y^z}$ | `$x^{y^z}$` | Nested superscript |

> TeX parses `x_i^2` and `x^2_i` displayed the same way, but mathematically you should always write subscripts first: `(x_i)^2`. Use braces for multi-character.

---

## 5. Greek Letters

### Lowercase Greek

| Function | Code | Annotation |
|---|---|---|
| $\alpha$ | `$\alpha$` | alpha |
| $\beta$ | `$\beta$` | beta |
| $\gamma$ | `$\gamma$` | gamma |
| $\delta$ | `$\delta$` | delta |
| $\epsilon$ | `$\epsilon$` | epsilon |
| $\zeta$ | `$\zeta$` | zeta |
| $\eta$ | `$\eta$` | eta |
| $\theta$ | `$\theta$` | theta |
| $\iota$ | `$\iota$` | iota |
| $\kappa$ | `$\kappa$` | kappa |
| $\lambda$ | `$\lambda$` | lambda |
| $\mu$ | `$\mu$` | mu |
| $\nu$ | `$\nu$` | nu |
| $\xi$ | `$\xi$` | xi |
| $\pi$ | `$\pi$` | pi |
| $\rho$ | `$\rho$` | rho |
| $\sigma$ | `$\sigma$` | sigma |
| $\tau$ | `$\tau$` | tau |
| $\upsilon$ | `$\upsilon$` | upsilon |
| $\phi$ | `$\phi$` | phi |
| $\chi$ | `$\chi$` | chi |
| $\psi$ | `$\psi$` | psi |
| $\omega$ | `$\omega$` | omega |

### Uppercase Greek

| Function | Code | Annotation |
|---|---|---|
| $\Gamma$ | `$\Gamma$` | Gamma |
| $\Delta$ | `$\Delta$` | Delta |
| $\Theta$ | `$\Theta$` | Theta |
| $\Lambda$ | `$\Lambda$` | Lambda |
| $\Xi$ | `$\Xi$` | Xi |
| $\Pi$ | `$\Pi$` | Pi |
| $\Sigma$ | `$\Sigma$` | Sigma |
| $\Upsilon$ | `$\Upsilon$` | Upsilon |
| $\Phi$ | `$\Phi$` | Phi |
| $\Psi$ | `$\Psi$` | Psi |
| $\Omega$ | `$\Omega$` | Omega |

### Variants

| Function | Code | Annotation |
|---|---|---|
| $\varepsilon$ | `$\varepsilon$` | ε variant |
| $\vartheta$ | `$\vartheta$` | ϑ variant |
| $\varphi$ | `$\varphi$` | φ variant |
| $\varpi$ | `$\varpi$` | ϖ variant |
| $\varrho$ | `$\varrho$` | ϱ variant |
| $\varsigma$ | `$\varsigma$` | ς variant (final sigma) |

> Greek letters are essential in statistics and probability. Most uppercase Greek letters are identical to Latin letters and have no commands (A, B, E, etc.). Only special ones like `\Gamma`, `\Delta`, `\Theta`, ... have LaTeX commands. In practice, `\varepsilon` and `\varphi` are more commonly used than `\epsilon` and `\phi`.

---

## 6. Common Mathematical Symbols

### Comparison Operators

| Function | Code | Annotation |
|---|---|---|
| $=$ | `$=$` | Equals |
| $\neq$ | `$\neq$` | Not equal (≠) |
| $<$ | `$<$` | Less than |
| $>$ | `$>$` | Greater than |
| $\leq$ | `$\leq$` | Less than or equal (≤) |
| $\geq$ | `$\geq$` | Greater than or equal (≥) |
| $\ll$ | `$\ll$` | Much less than (≪) |
| $\gg$ | `$\gg$` | Much greater than (≫) |
| $\approx$ | `$\approx$` | Approximately equal (≈) |
| $\equiv$ | `$\equiv$` | Equivalent (≡) |
| $\propto$ | `$\propto$` | Proportional to (∝) |

### Set Notation

| Function | Code | Annotation |
|---|---|---|
| $\in$ | `$\in$` | Element of (∈) |
| $\notin$ | `$\notin$` | Not element of (∉) |
| $\subseteq$ | `$\subseteq$` | Subset or equal (⊆) |
| $\subsetneq$ | `$\subsetneq$` | Proper subset (⊊) |
| $\supset$ | `$\supset$` | Superset (⊃) |
| $\cup$ | `$\cup$` | Union (∪) |
| $\cap$ | `$\cap$` | Intersection (∩) |
| $\emptyset$ | `$\emptyset$` | Empty set (∅) |
| $\forall$ | `$\forall$` | For all (∀) |
| $\exists$ | `$\exists$` | There exists (∃) |

### Logic

| Function | Code | Annotation |
|---|---|---|
| $\land$ | `$\land$` | Logical AND (∧) |
| $\lor$ | `$\lor$` | Logical OR (∨) |
| $\neg$ | `$\neg$` | Negation (¬) |
| $\implies$ | `$\implies$` | Logical implication |
| $\iff$ | `$\iff$` | Logical equivalence |

### Arrows

| Function | Code | Annotation |
|---|---|---|
| $\rightarrow$ | `$\rightarrow$` | → (or \to) |
| $\mapsto$ | `$\mapsto$` | Maps to (↦) |
| $\to$ | `$\to$` | Short arrow |
| $\leftarrow$ | `$\leftarrow$` | ← (or \gets) |
| $\leftrightarrow$ | `$\leftrightarrow$` | ↔ |
| $\Rightarrow$ | `$\Rightarrow$` | ⇒ |
| $\Leftarrow$ | `$\Leftarrow$` | ⇐ |
| $\Leftrightarrow$ | `$\Leftrightarrow$` | ⇔ |

### Infinity and Special

| Function | Code | Annotation |
|---|---|---|
| $\infty$ | `$\infty$` | Infinity (∞) |
| $\partial$ | `$\partial$` | Partial derivative (∂) |
| $\nabla$ | `$\nabla$` | Nabla/del (∇) |
| $\cdots$ | `$\cdots$` | Centered dots (⋯) |
| $\ldots$ | `$\ldots$` | Lower dots (…) |
| $\vdots$ | `$\vdots$` | Vertical dots (⋮) |
| $\ddots$ | `$\ddots$` | Diagonal dots (⋱) |

> Most symbols have intuitive names. Use `\neq` for ≠, `\leq` for ≤, etc. Use `\cdots` for multiplication/centered, `\ldots` for text or sequences.

---

## 7. Sums, Products, and Limits

### Summation

| Function | Code | Annotation |
|---|---|---|
| $\sum$ | `$\sum$` | Simple sum |
| $\sum_{i=1}^{n}$ | `$\sum_{i=1}^{n}$` | Sum from i=1 to n |
| $\sum_{i=1}^{n} x_i$ | `$\sum_{i=1}^{n} x_i$` | Sum of x_i |
| $\displaystyle \sum_{i=1}^{n} x_i$ | `$\displaystyle \sum_{i=1}^{n} x_i$` | Display-style sum in inline math |

### Product

| Function | Code | Annotation |
|---|---|---|
| $\prod_{i=1}^{n}$ | `$\prod_{i=1}^{n}$` | Product from i=1 to n |
| $\prod_{i=1}^{n} x_i$ | `$\prod_{i=1}^{n} x_i$` | Product of x_i |

### Limits

| Function | Code | Annotation |
|---|---|---|
| $\lim_{x \to 0}$ | `$\lim_{x \to 0}$` | Limit as x approaches 0 |
| $\lim_{n \to \infty}$ | `$\lim_{n \to \infty}$` | Limit as n approaches infinity |
| $\lim_{x \to 0^+}$ | `$\lim_{x \to 0^+}$` | Right-hand limit |
| $\lim_{x \to 0^-}$ | `$\lim_{x \to 0^-}$` | Left-hand limit |

### Integrals

| Function | Code | Annotation |
|---|---|---|
| $\int$ | `$\int$` | Integral |
| $\int_{0}^{1}$ | `$\int_{0}^{1}$` | Definite integral |
| $\int_{0}^{1} f(x) \, dx$ | `$\int_{0}^{1} f(x) \, dx$` | Integral with function |
| $\iint$ | `$\iint$` | Double integral |
| $\iiint$ | `$\iiint$` | Triple integral |
| $\oint$ | `$\oint$` | Contour integral |

### Union and Intersection (Big)

| Function | Code | Annotation |
|---|---|---|
| $\bigcup_{i=1}^{n} A_i$ | `$\bigcup_{i=1}^{n} A_i$` | Union of sets |
| $\bigcap_{i=1}^{n} A_i$ | `$\bigcap_{i=1}^{n} A_i$` | Intersection of sets |

> Limits appear below/above in display mode, beside in inline mode. Use `\,` for small space before dx. Use `\bigcup` / `\bigcap` in display equations `\displaystyle` for proper size.

---

## 8. Functions and Operators

### Trigonometric Functions

| Function | Code | Annotation |
|---|---|---|
| $\sin(x)$ | `$\sin(x)$` | Sine |
| $\cos(x)$ | `$\cos(x)$` | Cosine |
| $\tan(x)$ | `$\tan(x)$` | Tangent |
| $\arcsin(x)$ | `$\arcsin(x)$` | Arcsine |
| $\arccos(x)$ | `$\arccos(x)$` | Arccosine |
| $\arctan(x)$ | `$\arctan(x)$` | Arctangent |
| $\sinh(x)$ | `$\sinh(x)$` | Hyperbolic sine |
| $\cosh(x)$ | `$\cosh(x)$` | Hyperbolic cosine |
| $\tanh(x)$ | `$\tanh(x)$` | Hyperbolic tangent |

### Logarithmic Functions

| Function | Code | Annotation |
|---|---|---|
| $\log(x)$ | `$\log(x)$` | Logarithm (base depends on context) |
| $\ln(x)$ | `$\ln(x)$` | Natural logarithm |
| $\log_{10}(x)$ | `$\log_{10}(x)$` | Base-10 logarithm |
| $\exp(x)$ | `$\exp(x)$` | Exponential (preferred over e^x in operators) |

### Max, Min, and Special Functions

| Function | Code | Annotation |
|---|---|---|
| $\max\{x,y\}$ | `$\max\{x,y\}$` | Maximum |
| $\min\{x,y\}$ | `$\min\{x,y\}$` | Minimum |
| $\sup$ | `$\sup$` | Supremum |
| $\inf$ | `$\inf$` | Infimum |
| $\gcd(a,b)$ | `$\gcd(a,b)$` | Greatest common divisor |
| $\mathbb{E}[X]$ | `$\mathbb{E}[X]$` | Expectation |
| $\operatorname{Var}(X)$ | `$\operatorname{Var}(X)$` | Variance |
| $\operatorname{Cov}(X,Y)$ | `$\operatorname{Cov}(X,Y)$` | Covariance |

> Standard functions use `\sin`, `\log`, etc. (upright). For custom operators, use `\operatorname{name}`.

---

## 9. Parentheses and Brackets

### Regular Size

| Function | Code | Annotation |
|---|---|---|
| $(x + y)$ | `$(x + y)$` | Parentheses |
| $[x + y]$ | `$[x + y]$` | Brackets |
| $\{x + y\}$ | `$\{x + y\}$` | Braces (need backslash) |
| $\lvert x \rvert$ | `$\lvert x \rvert$` | Absolute value |
| $\lVert x \rVert$ | `$\lVert x \rVert$` | Norm |

### Auto-Sizing

| Function | Code | Annotation |
|---|---|---|
| $\left( \frac{a}{b} \right)$ | `$\left( \frac{a}{b} \right)$` | Auto-sized parentheses |
| $\left[ \frac{a}{b} \right]$ | `$\left[ \frac{a}{b} \right]$` | Auto-sized brackets |
| $\left\{ \frac{a}{b} \right\}$ | `$\left\{ \frac{a}{b} \right\}$` | Auto-sized braces |
| $\left\lvert \frac{a}{b} \right\rvert$ | `$\left\lvert \frac{a}{b} \right\rvert$` | Auto-sized absolute value |

### Floor and Ceiling

| Function | Code | Annotation |
|---|---|---|
| $\lfloor x \rfloor$ | `$\lfloor x \rfloor$` | Floor |
| $\lceil x \rceil$ | `$\lceil x \rceil$` | Ceiling |

### One-Sided

| Function | Code | Annotation |
|---|---|---|
| $\left. \frac{df}{dx} \right\lvert_{x=0}$ | `$\left. \frac{df}{dx} \right\lvert_{x=0}$` | Evaluated at |

> Use `\left(` and `\right)` for auto-sizing. They must be paired. Use `\left.` or `\right.` for invisible delimiter. Do not overuse `\left` and `\right`. Prefer normal-sized delimiters unless the content is tall. Besides, `\|` in LaTeX means Norm character, in markdown sometimes means `\`. To avoid issues, use `\lvert \rvert` and `\lVert \rVert` instead.

---

## 10. Matrices and Arrays

### Matrix Types

| Function | Code | Annotation |
|---|---|---|
| $$\begin{matrix} a & b \\ c & d \end{matrix}$$ | `$$\begin{matrix} a & b \\ c & d \end{matrix}$$` | Basic matrix (no delimiters) |
| $$\begin{pmatrix} a & b \\ c & d \end{pmatrix}$$ | `$$\begin{pmatrix} a & b \\ c & d \end{pmatrix}$$` | Parentheses matrix |
| $$\begin{bmatrix} a & b \\ c & d \end{bmatrix}$$ | `$$\begin{bmatrix} a & b \\ c & d \end{bmatrix}$$` | Brackets matrix |
| $$\begin{Bmatrix} a & b \\ c & d \end{Bmatrix}$$ | `$$\begin{Bmatrix} a & b \\ c & d \end{Bmatrix}$$` | Braces matrix |
| $$\begin{vmatrix} a & b \\ c & d \end{vmatrix}$$ | `$$\begin{vmatrix} a & b \\ c & d \end{vmatrix}$$` | Vertical-bar matrix (determinants) |
| $$\begin{Vmatrix} a & b \\ c & d \end{Vmatrix}$$ | `$$\begin{Vmatrix} a & b \\ c & d \end{Vmatrix}$$` | Double-bar matrix (norms) |

### General m×n Matrix

| Function | Code | Annotation |
|---|---|---|
| $$\begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{bmatrix}$$ | `$$\begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{bmatrix}$$` | General m×n matrix |

### Inline Small Matrix

| Function | Code | Annotation |
|---|---|---|
| $\bigl(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\bigr)$ | `$\bigl(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\bigr)$` | Small inline matrix |

> `&` separates columns, `\\` separates rows. Types: `matrix` (no delimiters), `pmatrix` (), `bmatrix` [], `Bmatrix` {}, `vmatrix` \|\|, `Vmatrix` \|\|\|.

---

## 11. Equations and Alignment

### Single Equation

| Function | Code | Annotation |
|---|---|---|
| $$E = mc^2$$ | `$$E = mc^2$$` | Display equation |

### Multiple Aligned Equations

| Function | Code | Annotation |
|---|---|---|
| $$\begin{align} x_{123} &= a + b \\ y_{12} &= c + d \\ z_{1} &= e + f \end{align}$$ | `$$\begin{align} x_{123} &= a + b \\ y_{12} &= c + d \\ z_{1} &= e + f \end{align}$$` | Basic alignment |

### Align at Equals Sign

| Function | Code | Annotation |
|---|---|---|
| $$\begin{align} f(x) &= x^2 + 2x + 1 \\ &= (x + 1)^2 \\ &= (x + 1)(x + 1) \end{align}$$ | Multi-step derivation aligned at `=` |

### Piecewise Functions

| Function | Code | Annotation |
|---|---|---|
| $$f(x) = \begin{cases} x^2 & \text{if } x \geq 0 \\ -x^2 & \text{if } x < 0 \end{cases}$$ | Cases environment |

> Use `aligned` environment for aligning equations. `&` marks alignment point, `\\` starts new line.

---

## 12. Text in Math Mode

### Text Styles in Math

| Function | Code | Annotation |
|---|---|---|
| $\mathrm{Roman}$ | `$\mathrm{Roman}$` | Upright (roman) |
| $\mathit{Italic}$ | `$\mathit{Italic}$` | Italic |
| $\mathbf{Bold}$ | `$\mathbf{Bold}$` | Bold |
| $\mathsf{Sans}$ | `$\mathsf{Sans}$` | Sans-serif |
| $\mathtt{Mono}$ | `$\mathtt{Mono}$` | Monospace |
| $\mathcal{CALLIGRAPHIC}$ | `$\mathcal{CALLIGRAPHIC}$` | Calligraphic (uppercase only) |
| $\mathbb{BLACKBOARD}$ | `$\mathbb{BLACKBOARD}$` | Blackboard bold |
| $\mathfrak{Fraktur}$ | `$\mathfrak{Fraktur}$` | Fraktur (gothic) |

### Number Sets

| Function | Code | Annotation |
|---|---|---|
| $\mathbb{N}$ | `$\mathbb{N}$` | Natural numbers |
| $\mathbb{Z}$ | `$\mathbb{Z}$` | Integers |
| $\mathbb{Q}$ | `$\mathbb{Q}$` | Rational numbers |
| $\mathbb{R}$ | `$\mathbb{R}$` | Real numbers |
| $\mathbb{C}$ | `$\mathbb{C}$` | Complex numbers |

> Use `\text{}` for words in equations. Use `\mathbb{}` for number sets (ℕ, ℤ, ℚ, ℝ, ℂ).

---

## 13. Accents and Decorations

### Hats and Bars

| Function | Code | Annotation |
|---|---|---|
| $\hat{x}$ | `$\hat{x}$` | Hat |
| $\bar{x}$ | `$\bar{x}$` | Bar (mean) |
| $\overline{x}$ | `$\overline{x}$` | Longer bar |
| $\tilde{x}$ | `$\tilde{x}$` | Tilde |
| $\vec{x}$ | `$\vec{x}$` | Vector arrow |
| $\dot{x}$ | `$\dot{x}$` | Dot (derivative) |
| $\ddot{x}$ | `$\ddot{x}$` | Double dot (second derivative) |

### Wide Accents

| Function | Code | Annotation |
|---|---|---|
| $\widehat{xyz}$ | `$\widehat{xyz}$` | Wide hat |
| $\overline{xyz}$ | `$\overline{xyz}$` | Overline |
| $\underline{xyz}$ | `$\underline{xyz}$` | Underline |
| $\widetilde{xyz}$ | `$\widetilde{xyz}$` | Wide tilde |

### Over/Under Braces

| Function | Code | Annotation |
|---|---|---|
| $\overbrace{a + b + c}^{\text{sum}}$ | `$\overbrace{a + b + c}^{\text{sum}}$` | Brace with label above |
| $\underbrace{a + b + c}_{\text{sum}}$ | `$\underbrace{a + b + c}_{\text{sum}}$` | Brace with label below |

### Primes

| Function | Code | Annotation |
|---|---|---|
| $x'$ | `$x'$` | Prime (derivative) |
| $x''$ | `$x''$` | Double prime |
| $x'''$ | `$x'''$` | Triple prime |

> Use `\bar{x}` for sample mean, `\hat{x}` for estimator. `\vec{x}` for vectors.

---

## 14. Spacing

### Spacing Commands

| Function | Code | Annotation |
|---|---|---|
| $a\!b$ | `$a\!b$` | Negative space (-3/18 em) |
| $ab$ | `$ab$` | Default math spacing |
| $a\,b$ | `$a\,b$` | Thin space (3/18 em) |
| $a\:b$ | `$a\:b$` | Medium space (4/18 em) |
| $a\;b$ | `$a\;b$` | Thick space (5/18 em) |
| $a\quad b$ | `$a\quad b$` | Quad (1 em) |
| $a\qquad b$ | `$a\qquad b$` | Double quad (2 em) |

### Common Uses

| Function | Code | Annotation |
|---|---|---|
| $\int_{0}^{1} f(x) \, dx$ | `$\int_{0}^{1} f(x) \, dx$` | Thin space before dx |
| $P(A \mid B)$ | `$P(A \mid B)$` | Conditional probability |

> Use `\,` for small space (common before dx). Use `\quad` for large space between elements.

---

## 15. Statistics and Probability Notation

### Probability

| Function | Code | Annotation |
|---|---|---|
| $P(A)$ | `$P(A)$` | Probability of A |
| $P(A \cap B)$ | `$P(A \cap B)$` | Probability of A and B |
| $P(A \cup B)$ | `$P(A \cup B)$` | Probability of A or B |
| $P(A \mid B)$ | `$P(A \mid B)$` | Conditional probability |

### Expectation and Variance

| Function | Code | Annotation |
|---|---|---|
| $\mathbb{E}[X]$ | `$\mathbb{E}[X]$` | Expectation |
| $\operatorname{Var}(X)$ | `$\operatorname{Var}(X)$` | Variance |
| $\operatorname{Cov}(X, Y)$ | `$\operatorname{Cov}(X, Y)$` | Covariance |
| $\operatorname{Corr}(X, Y)$ | `$\operatorname{Corr}(X, Y)$` | Correlation |

### Distributions

| Function | Code | Annotation |
|---|---|---|
| $X \sim N(\mu, \sigma^2)$ | `$X \sim N(\mu, \sigma^2)$` | Normal distribution |
| $X \sim \operatorname{Binomial}(n, p)$ | `$X \sim \operatorname{Binomial}(n, p)$` | Binomial distribution |
| $X \sim \operatorname{Poisson}(\lambda)$ | `$X \sim \operatorname{Poisson}(\lambda)$` | Poisson distribution |

### Statistical Notation

| Function | Code | Annotation |
|---|---|---|
| $\bar{x}$ | `$\bar{x}$` | Sample mean |
| $s^2$ | `$s^2$` | Sample variance |
| $\hat{\theta}$ | `$\hat{\theta}$` | Estimator of theta |
| $\mu$ | `$\mu$` | Population mean |
| $\sigma^2$ | `$\sigma^2$` | Population variance |

### Hypothesis Testing

| Function | Code | Annotation |
|---|---|---|
| $H_0$ | `$H_0$` | Null hypothesis |
| $H_1$ or $H_a$ | `$H_1$` or `$H_a$` | Alternative hypothesis |
| $\alpha$ | `$\alpha$` | Significance level |
| $\textit{p}\text{-}value$ | `$\textit{p}\text{-}value$` | p-value |

---

## 16. Calculus Notation

### Derivatives

| Function | Code | Annotation |
|---|---|---|
| $\frac{df}{dx}$ | `$\frac{df}{dx}$` | Derivative |
| $\frac{d^2f}{dx^2}$ | `$\frac{d^2f}{dx^2}$` | Second derivative |
| $\frac{\partial f}{\partial x}$ | `$\frac{\partial f}{\partial x}$` | Partial derivative |
| $\frac{\partial^2 f}{\partial x^2}$ | `$\frac{\partial^2 f}{\partial x^2}$` | Second partial |

### Prime Notation

| Function | Code | Annotation |
|---|---|---|
| $f'(x)$ | `$f'(x)$` | First derivative |
| $f''(x)$ | `$f''(x)$` | Second derivative |
| $f^{(n)}(x)$ | `$f^{(n)}(x)$` | nth derivative |

### Dot Notation (Physics)

| Function | Code | Annotation |
|---|---|---|
| $\dot{x}$ | `$\dot{x}$` | First time derivative |
| $\ddot{x}$ | `$\ddot{x}$` | Second time derivative |

### Integrals

| Function | Code | Annotation |
|---|---|---|
| $\int f(x) \, dx$ | `$\int f(x) \, dx$` | Indefinite integral |
| $\int_{a}^{b} f(x) \, dx$ | `$\int_{a}^{b} f(x) \, dx$` | Definite integral |
| $\int_{0}^{\infty} e^{-x} \, dx$ | `$\int_{0}^{\infty} e^{-x} \, dx$` | Improper integral |

### Limits

| Function | Code | Annotation |
|---|---|---|
| $\lim_{x \to 0} \frac{\sin x}{x} = 1$ | `$\lim_{x \to 0} \frac{\sin x}{x} = 1$` | Limit example |
| $\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e$ | `$\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e$` | Limit to infinity |

---

## 17. Linear Algebra Notation

### Vectors

| Function | Code | Annotation |
|---|---|---|
| $\mathbf{v}$ | `$\mathbf{v}$` | Bold vector |
| $\vec{v}$ | `$\vec{v}$` | Arrow vector |

### Matrices

| Function | Code | Annotation |
|---|---|---|
| $\mathbf{A}$ | `$\mathbf{A}$` | Bold matrix |
| $A^T$ | `$A^T$` | Transpose |
| $A^{-1}$ | `$A^{-1}$` | Inverse |
| $A^\dagger$ | `$A^\dagger$` | Conjugate transpose |

### Matrix Operations

| Function | Code | Annotation |
|---|---|---|
| $\det(A)$ | `$\det(A)$` | Determinant |
| $\operatorname{tr}(A)$ | `$\operatorname{tr}(A)$` | Trace |
| $\operatorname{rank}(A)$ | `$\operatorname{rank}(A)$` | Rank |

### Norms

| Function | Code | Annotation |
|---|---|---|
| $\lVert \mathbf{x} \rVert$ | `$\lVert \mathbf{x} \rVert$` | Norm |
| $\lVert \mathbf{x} \rVert_2$ | `$\lVert \mathbf{x} \rVert_2$` | L2 norm (Euclidean) |
| $\lVert \mathbf{x} \rVert_1$ | `$\lVert \mathbf{x} \rVert_1$` | L1 norm |
| $\lVert \mathbf{x} \rVert_\infty$ | `$\lVert \mathbf{x} \rVert_\infty$` | Infinity norm |

### Inner Product

| Function | Code | Annotation |
|---|---|---|
| $\langle \mathbf{x}, \mathbf{y} \rangle$ | `$\langle \mathbf{x}, \mathbf{y} \rangle$` | Inner product |
| $\mathbf{x} \cdot \mathbf{y}$ | `$\mathbf{x} \cdot \mathbf{y}$` | Dot product |

### Special Matrices

| Function | Code | Annotation |
|---|---|---|
| $I$ or $\mathbf{I}$ | `$I$` or `$\mathbf{I}$` | Identity matrix |
| $\operatorname{diag}(a_1, \ldots, a_n)$ | `$\operatorname{diag}(a_1, \ldots, a_n)$` | Diagonal matrix |

---

## 18. Combinatorics and Number Theory

| Function | Code | Annotation |
|---|---|---|
| $\binom{n}{k}$ | `$\binom{n}{k}$` | n choose k |
| $n!$ | `$n!$` | Factorial |
| $P(n, k)$ | `$P(n, k)$` | Permutations |
| $\frac{n!}{(n-k)!}$ | `$\frac{n!}{(n-k)!}$` | Permutation formula |
| $\lfloor x \rfloor$ | `$\lfloor x \rfloor$` | Floor (round down) |
| $\lceil x \rceil$ | `$\lceil x \rceil$` | Ceiling (round up) |
| $a \equiv b \pmod{n}$ | `$a \equiv b \pmod{n}$` | a congruent to b mod n |
| $\gcd(a, b)$ | `$\gcd(a, b)$` | Greatest common divisor |
| $\operatorname{lcm}(a, b)$ | `$\operatorname{lcm}(a, b)$` | Least common multiple |
| $a \mid b$ | `$a \mid b$` | a divides b |

---

## 19. Logic and Set Theory

### Logical Operators

| Function | Code | Annotation |
|---|---|---|
| $\land$ | `$\land$` | AND (∧) |
| $\lor$ | `$\lor$` | OR (∨) |
| $\neg$ | `$\neg$` | NOT (¬) |
| $\implies$ | `$\implies$` | Implies |
| $\iff$ | `$\iff$` | If and only if |

### Quantifiers

| Function | Code | Annotation |
|---|---|---|
| $\forall$ | `$\forall$` | For all (∀) |
| $\exists$ | `$\exists$` | There exists (∃) |

### Set Operations

| Function | Code | Annotation |
|---|---|---|
| $A \cup B$ | `$A \cup B$` | Union |
| $A \cap B$ | `$A \cap B$` | Intersection |
| $A \setminus B$ | `$A \setminus B$` | Set difference |
| $A^c$ | `$A^c$` | Complement |
| $A \times B$ | `$A \times B$` | Cartesian product |

### Set Relations

| Function | Code | Annotation |
|---|---|---|
| $A \subseteq B$ | `$A \subseteq B$` | Subset or equal |
| $x \in A$ | `$x \in A$` | Element of |
| $x \notin A$ | `$x \notin A$` | Not element of |

> Use `\in` for membership, `\cup` and `\cap` for union/intersection.

---

*Last reviewed: 2026-07-18*  
*Editor: wuguojia*
