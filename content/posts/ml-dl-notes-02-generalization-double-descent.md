---
title: "Generalization Theory, Model Complexity, and the Double Descent Mechanism"
date: 2026-10-19
tags: ["Machine Learning", "Generalization", "VC Dimension", "Double Descent", "Regularization"]
categories: ["Machine learning"]
description: "Study notes on generalization: hypothesis spaces, expected vs. empirical risk, Hoeffding, VC-dimension and the modern double descent phenomenon — plus why over-parameterization still generalizes."
---

## Foundations of Generalization: Hypothesis Space & Risk Formulations

Supervised machine learning seeks a predictive mapping $h: \mathcal{X} \to \mathcal{Y}$ within a predefined function family that minimizes discrepancy on unobserved data.

### Demystifying $h$ and $\mathcal{H}$: Connecting Parameters to Functions

In neural networks and regression, model architectures are defined by parameter collections (weights and biases) $\boldsymbol{\theta} = (\mathbf{w}, b) \in \mathbb{R}^P$, where $P$ denotes the total count of scalar parameters:

$$ h_{\boldsymbol{\theta}}(\mathbf{x}) = \sigma(\mathbf{w}^T \mathbf{x} + b) \quad \text{or} \quad h_{\boldsymbol{\theta}}(\mathbf{x}) = \mathbf{W}^{(L)} \dots \sigma(\mathbf{W}^{(1)}\mathbf{x} + \mathbf{b}^{(1)}) $$

- **A Concrete Hypothesis ($h \in \mathcal{H}$):** An instantiated function where all weights $\boldsymbol{\theta}$ are fixed to **concrete numerical constants**. For example, $h_1(\mathbf{x}) = 2x_1 - 3$ and $h_2(\mathbf{x}) = -0.5x_1 + 4$ represent two distinct hypotheses.

- **The Hypothesis Space ($\mathcal{H}$):** The set of all possible candidate functions expressible by the given model architecture across all permissible parameter values:

$$ \mathcal{H} \triangleq \{ h_{\boldsymbol{\theta}} \mid \boldsymbol{\theta} \in \Theta \subseteq \mathbb{R}^P \} $$

**Notation Breakdown:**

- $\triangleq$ denotes "defined as" (definitional equality, not an algebraically derived equality).
- $\{ \text{output} \mid \text{condition} \}$ is standard set-builder notation ("the set of all $h_{\boldsymbol{\theta}}$ such that $\boldsymbol{\theta}$ satisfies the condition").
- $\Theta \subseteq \mathbb{R}^P$ specifies that the parameter vector $\boldsymbol{\theta}$ is chosen from a $P$-dimensional continuous real vector space ($P$ is the total number of tunable weights).

**Pedagogical Simplification in Introductory Lectures:** In elementary examples (e.g., classifying Pokemon via simple thresholds), the hypothesis space is artificially discretized into a finite set (e.g., $|\mathcal{H}| = 10\,000$) purely to illustrate basic counting before introducing continuous calculus.

### Empirical Risk vs. Expected (True) Risk

Let $\mathcal{D}$ denote the unknown true distribution of the underlying physical phenomenon generating pairs $(\mathbf{x}, y) \in \mathcal{X} \times \mathcal{Y}$.

- **Expected Risk (True Loss over Unseen Reality):** The theoretical average error evaluated across all potential samples that nature could ever generate:

$$ L(h, \mathcal{D}_{\text{all}}) \triangleq \mathbb{E}_{(\mathbf{x}, y) \sim \mathcal{D}} [\ell(h(\mathbf{x}), y)] $$

**Notation Breakdown:**

- $\mathbb{E}$ denotes the mathematical **Expectation** (the true statistical population average).
- $(\mathbf{x}, y) \sim \mathcal{D}$ denotes that instances are randomly drawn according to the underlying natural probability distribution $\mathcal{D}$.
- $\ell(h(\mathbf{x}), y)$ (lowercase script $\ell$) denotes the **single-sample loss** (e.g., the squared error $(h(\mathbf{x}) - y)^2$ evaluated on one specific observation).

- **Empirical Risk (Training Loss over Observed Data):** The computable arithmetic mean evaluated over a finite training dataset $\mathcal{D}_{\text{train}} = \{(\mathbf{x}^{(n)}, y^{(n)})\}_{n=1}^N$:

$$ L(h, \mathcal{D}_{\text{train}}) \triangleq \frac{1}{N} \sum_{n=1}^N \ell(h(\mathbf{x}^{(n)}), y^{(n)}) $$

### Definition of a Representative Dataset

An empirical training sample $\mathcal{D}_{\text{train}}$ is defined as **$\varepsilon$-representative** (or simply "good") if the empirical training loss uniformly mirrors the expected true risk across **every single candidate** in $\mathcal{H}$:

$$ \mathcal{D}_{\text{train}} \text{ is good} \iff \forall h \in \mathcal{H}, \quad |L(h, \mathcal{D}_{\text{train}}) - L(h, \mathcal{D}_{\text{all}})| \le \varepsilon $$

**Theorem (Uniform Generalization Guarantee).** If $\mathcal{D}_{\text{train}}$ is $\varepsilon$-representative, then the empirical risk minimizer $h^{\text{train}} \triangleq \arg\min_{h \in \mathcal{H}} L(h, \mathcal{D}_{\text{train}})$ closely tracks the performance of the theoretical best-in-class hypothesis $h^{\text{all}} \triangleq \arg\min_{h \in \mathcal{H}} L(h, \mathcal{D}_{\text{all}})$:

$$ L(h^{\text{train}}, \mathcal{D}_{\text{all}}) - L(h^{\text{all}}, \mathcal{D}_{\text{all}}) \le 2\varepsilon $$

**Proof.** By the definition of uniform convergence:

$$
\begin{aligned}
L(h^{\text{train}}, \mathcal{D}_{\text{all}}) &\le L(h^{\text{train}}, \mathcal{D}_{\text{train}}) + \varepsilon \\
&\le L(h^{\text{all}}, \mathcal{D}_{\text{train}}) + \varepsilon \quad (\text{since } h^{\text{train}} \text{ minimizes empirical loss}) \\
&\le \left( L(h^{\text{all}}, \mathcal{D}_{\text{all}}) + \varepsilon \right) + \varepsilon = L(h^{\text{all}}, \mathcal{D}_{\text{all}}) + 2\varepsilon
\end{aligned}
$$

$\blacksquare$

## From Discrete Counting to Continuous Parameters

### The Discrete Setting: Hoeffding's Inequality & Union Bound

For a bounded loss $\ell \in [0, 1]$, Hoeffding's inequality guarantees that for any individual, frozen hypothesis $h$:

$$ P\left( |L(h, \mathcal{D}_{\text{train}}) - L(h, \mathcal{D}_{\text{all}})| > \varepsilon \right) \le 2\exp\left(-2N\varepsilon^2\right) $$

To ensure that **no** candidate model in a discrete space $\mathcal{H}$ fails, applying Boole's inequality (Union Bound) produces:

$$
\begin{aligned}
P(\mathcal{D}_{\text{train}} \text{ is bad}) &= P\left( \bigcup_{h \in \mathcal{H}} \left\{ |L(h, \mathcal{D}_{\text{train}}) - L(h, \mathcal{D}_{\text{all}})| > \varepsilon \right\} \right) \\
&\le \sum_{h \in \mathcal{H}} P\left( |L(h, \mathcal{D}_{\text{train}}) - L(h, \mathcal{D}_{\text{all}})| > \varepsilon \right) \\
&\le |\mathcal{H}| \cdot 2\exp(-2N\varepsilon^2)
\end{aligned}
$$

**Numerical Illustration ($|\mathcal{H}|=10\,000, \varepsilon=0.1$):**

- $N=100 \implies P(\mathcal{D}_{\text{train}} \text{ is bad}) \le 10\,000 \times 2\exp(-2) \approx 2707$. The bound is statistically trivial (vacuous) because true probability cannot exceed $1$. It signifies that statistical theory **cannot guarantee generalization** when sample volume $N$ is dwarfed by candidate capacity $|\mathcal{H}|$.
- $N=1000 \implies P(\mathcal{D}_{\text{train}} \text{ is bad}) \le 10\,000 \times 2\exp(-20) \le 0.00004$ (generalization is guaranteed with $99.996\%$ confidence).

### The Continuous Dilemma: Why Naive Counting Breaks ($|\mathcal{H}| = \infty$)

In real regression models and neural networks, parameters $\mathbf{w} \in \mathbb{R}^P$ are continuous real numbers. Consequently, the set of expressible hypotheses is uncountably infinite:

$$ |\mathcal{H}| = \infty \implies P(\mathcal{D}_{\text{train}} \text{ is bad}) \le \infty \cdot 2\exp(-2N\varepsilon^2) = \infty $$

The discrete Union Bound collapses in continuous parameter settings, necessitating an alternative way to measure functional capacity.

### The Geometric Resolution: Effective Dichotomies & VC-Dimension

The resolution lies in a geometric observation: **infinite continuous hypotheses exhibit strictly finite behavior when projected onto $N$ discrete data points.**

![Distinct labelings (dichotomies) on N points are bounded](/images/notes/ml-dl-notes-02/fig-dichotomy.png)

*Figure 1 — Although continuous parameters admit infinite candidate lines, the number of distinct binary label assignments (dichotomies) on $N$ points is strictly bounded.*

**Definition (Growth Function).** Let $\mathcal{H}$ act on $N$ inputs $S = \{\mathbf{x}_1, \dots, \mathbf{x}_N\}$. The **Growth Function** $m_{\mathcal{H}}(N)$ measures the maximum number of distinct binary labelings achievable across any $N$ points:

$$ m_{\mathcal{H}}(N) \triangleq \max_{\mathbf{x}_1, \dots, \mathbf{x}_N} |\{ (h(\mathbf{x}_1), \dots, h(\mathbf{x}_N)) \mid h \in \mathcal{H} \}| \le 2^N $$

**Definition (Vapnik-Chervonenkis Dimension).** The VC-dimension $d_{\text{VC}}$ is the maximum sample size $N$ for which the model can realize all $2^N$ possible binary label combinations (i.e., shatter the points). For a linear model in $\mathbb{R}^D$, $d_{\text{VC}} = D + 1$.

**Lemma (Sauer-Shelah).** Once sample volume $N$ exceeds the VC-dimension $d_{\text{VC}}$, the growth function stops expanding exponentially and becomes bounded by a polynomial:

$$ m_{\mathcal{H}}(N) \le \left( \frac{eN}{d_{\text{VC}}} \right)^{d_{\text{VC}}} = \mathcal{O}\left( N^{d_{\text{VC}}} \right) $$

**Theorem (Vapnik-Chervonenkis Generalization Bound).** Replacing $|\mathcal{H}|$ with the polynomial growth function gives the unified continuous guarantee:

$$ P(\mathcal{D}_{\text{train}} \text{ is bad}) \le 4 \underbrace{\left( \frac{2eN}{d_{\text{VC}}} \right)^{d_{\text{VC}}}}_{\text{Polynomial Growth } \mathcal{O}(N^d)} \cdot \underbrace{\exp\left( -\frac{1}{8} N \varepsilon^2 \right)}_{\text{Exponential Decay } \mathcal{O}(e^{-N})} $$

**Core Intuition:** Even though continuous parameters create an infinite number of candidate functions ($|\mathcal{H}| = \infty$), their ability to generate distinct outputs on $N$ points grows only polynomially ($\mathcal{O}(N^{d_{\text{VC}}})$). Because exponential decay asymptotically dominates any polynomial rate, **the error bound vanishes to zero as sample size $N \to \infty$.**

## The Modern Resolution: The Double Descent Phenomenon

Classical learning theory establishes that increasing capacity beyond sample size causes divergence in test error. However, modern deep neural networks operate with parameter counts orders of magnitude larger than training data ($P \gg N$), reaching exact interpolation ($L_{\text{train}} = 0$) while maintaining strong generalization.

![The double descent phenomenon](/images/notes/ml-dl-notes-02/fig-double-descent.png)

*Figure 2 — The double descent phenomenon: test error peaks at the interpolation threshold ($P \approx N$) where noise forced into minimal capacity causes erratic oscillation, but monotonically declines deep in the over-parameterized regime ($P \gg N$).*

## Why Over-parameterization Generalizes: Three Core Pillars

When $P \gg N$, there exist infinitely many parameter configurations that achieve zero empirical training error ($L_{\text{train}} = 0$). Why do neural networks pick a solution that generalizes well rather than an erratic, memorizing interpolant? Generalization is governed by three underlying physical and mathematical pillars.

### Pillar 1: Implicit Regularization of Gradient Descent ("Lazy Optimization")

When a parameter space has infinite zero-loss global minima, the optimization algorithm itself acts as a selector:

- **Minimal Euclidean Norm Preference:** For linear regression initialized at the origin $\mathbf{w}_0 = \mathbf{0}$, gradient descent provably converges to the **minimum $L_2$-norm solution**:

$$ \mathbf{w}^* = \arg\min_{\mathbf{w}} \|\mathbf{w}\|_2 \quad \text{subject to} \quad \mathbf{X}\mathbf{w} = \mathbf{y} $$

A smaller weight norm directly translates to smaller geometric slopes ($\nabla_{\mathbf{x}} f$), preventing extreme fluctuations between adjacent sample points.

- **Flat Minima in Deep Networks:** In non-linear deep models, stochastic gradient descent (SGD) paired with mini-batch noise inherently avoids narrow, steep valleys and gravitates toward **wide, flat minima**. A flat basin ensures that small perturbations or distribution shifts between training and test sets produce minimal changes in prediction.

### Pillar 2: Structural Inductive Bias ("Architectural Constraints")

Counting raw parameters vastly overstates a network's true functional flexibility. Model architectures impose physical structural priors on what functions are reachable:

- **Spatial Locality (CNNs):** Convolutional filters operate only over small local patches ($3 \times 3$) and tie weights across the entire image. This architectural constraint makes it structurally impossible for a CNN to represent chaotic functions that treat pixels independently.
- **Relational Permutation Equivariance (Transformers):** Self-attention matrices constrain interactions to pairwise relational affinities, enforcing symmetry over token sets.
- **Hierarchical Modularity (Deep Composition):** A deep composition $f(\mathbf{x}) = f_L(\dots f_1(\mathbf{x}))$ constrains representations to low-dimensional smooth manifolds, strictly ruling out high-entropy random memorizers from the reachable hypothesis search space.

### Pillar 3: Spectral Bias & The Frequency Principle ("Coarse-to-Fine")

Neural networks do not learn all patterns at equal speed; they learn frequencies hierarchically:

$$ \text{Global, low-frequency patterns} \xrightarrow{\text{Learned First}} \text{High-frequency localized variations} \xrightarrow{\text{Learned Late}} $$

- **The Frequency Principle:** Under gradient descent, the lower Fourier frequency components of the target function are fitted rapidly, whereas high-frequency variations (including random label noise) take exponentially more gradient steps to learn.
- **Benign Overfitting:** Even when a massive network is trained until it perfectly interpolates noisy observations, the over-parameterized weights accommodate those points with localized, minimal-energy adjustments, leaving the global smooth landscape intact.

## Summary: Paradigm Comparison

| Dimension | Classical Learning Theory | Modern Deep Learning Paradigm |
|---|---|---|
| Capacity Metric | Raw Parameter Count ($P$), VC-dimension | Effective Capacity constrained by Inductive Bias |
| Continuous Space | Handled via VC-dichotomy | Handled via Implicit Geometric Regularization |
| Optimization View | Passive solver of fixed convex objective | Active implicit regularizer (Minimum-norm bias) |
| Target Regime | Under-parameterized ($P < N$) | Heavily over-parameterized ($P \gg N$) |
| Overfitting Behavior | Capacity growth leads to noise fitting | Benign overfitting via smooth interpolators |
| Generalization Curve | Monotonic U-curve | Double Descent curve with second descent phase |

---

## Appendix: Step-by-Step Rigorous Proof of Hoeffding's Inequality

Hoeffding's Inequality bounds the probability that the empirical mean of independent, bounded random variables deviates from its expected value.

### Step 1: The Chernoff Bound Technique (Markov's Inequality)

Let $S_N = \sum_{n=1}^N (X_n - \mathbb{E}[X_n])$, where $X_n \in [a_n, b_n]$ are independent random variables. For any strictly positive real parameter $s > 0$:

$$ P\left( \frac{1}{N} S_N \ge \varepsilon \right) = P(S_N \ge N\varepsilon) = P\left( e^{s S_N} \ge e^{s N \varepsilon} \right) $$

Applying Markov's inequality ($P(Y \ge c) \le \frac{\mathbb{E}[Y]}{c}$ for non-negative $Y$):

$$ P(S_N \ge N\varepsilon) \le e^{-s N \varepsilon} \mathbb{E}\left[ e^{s S_N} \right] $$

Since all variables $X_n$ are mutually independent, the expectation of their exponentiated sum factorizes into the product of their individual moment-generating functions:

$$ \mathbb{E}\left[ e^{s S_N} \right] = \mathbb{E}\left[ \exp\left( \sum_{n=1}^N s(X_n - \mathbb{E}[X_n]) \right) \right] = \prod_{n=1}^N \mathbb{E}\left[ e^{s(X_n - \mathbb{E}[X_n])} \right] $$

### Step 2: Hoeffding's Lemma (Bounding the MGF of a Zero-Mean Variable)

**Lemma (Hoeffding's Lemma).** If $Z$ is a real-valued random variable with $\mathbb{E}[Z] = 0$ and $Z \in [a, b]$, then for all $s \in \mathbb{R}$:

$$ \mathbb{E}\left[ e^{sZ} \right] \le \exp\left( \frac{s^2(b - a)^2}{8} \right) $$

**Proof.** Because $f(z) = e^{sz}$ is convex, its chord between $a$ and $b$ lies above the curve for all $z \in [a, b]$:

$$ e^{sz} \le \frac{b - z}{b - a} e^{sa} + \frac{z - a}{b - a} e^{sb} $$

Taking expectations on both sides, utilizing $\mathbb{E}[Z] = 0$:

$$ \mathbb{E}\left[ e^{sZ} \right] \le \frac{b}{b - a} e^{sa} - \frac{a}{b - a} e^{sb} = (1 - \theta + \theta e^{s(b-a)}) e^{-\theta s(b-a)} \triangleq e^{\phi(u)} $$

where $\theta = \frac{-a}{b - a}$, $u = s(b - a)$, and $\phi(u) = -\theta u + \ln(1 - \theta + \theta e^u)$. Evaluating derivatives of $\phi(u)$:

$$
\begin{aligned}
\phi(0) &= 0 \\
\phi'(u) &= -\theta + \frac{\theta e^u}{1 - \theta + \theta e^u} \implies \phi'(0) = 0 \\
\phi''(u) &= \frac{\theta e^u (1 - \theta)}{(1 - \theta + \theta e^u)^2} = p(1 - p) \le \frac{1}{4} \quad \left(\text{where } p = \frac{\theta e^u}{1 - \theta + \theta e^u}\right)
\end{aligned}
$$

By Taylor's theorem with Lagrange remainder around $u = 0$:

$$ \phi(u) = \phi(0) + \phi'(0)u + \frac{1}{2} \phi''(\xi) u^2 \le 0 + 0 + \frac{1}{8} u^2 = \frac{s^2 (b - a)^2}{8} $$

Exponentiating both sides yields $\mathbb{E}[e^{sZ}] \le \exp\left( \frac{s^2(b - a)^2}{8} \right)$. $\blacksquare$

### Step 3: Combining and Optimizing the Free Parameter $s$

Substituting Hoeffding's Lemma back into the Chernoff product:

$$ P(S_N \ge N\varepsilon) \le e^{-s N \varepsilon} \prod_{n=1}^N \exp\left( \frac{s^2 (b_n - a_n)^2}{8} \right) = \exp\left( -s N \varepsilon + \frac{s^2 \sum_{n=1}^N (b_n - a_n)^2}{8} \right) $$

To minimize this upper bound with respect to $s > 0$, we differentiate the quadratic exponent $g(s) = -s N \varepsilon + \frac{s^2 \sum_{n=1}^N (b_n - a_n)^2}{8}$ and set it to zero:

$$ g'(s) = -N\varepsilon + \frac{s \sum_{n=1}^N (b_n - a_n)^2}{4} = 0 \implies s^* = \frac{4 N \varepsilon}{\sum_{n=1}^N (b_n - a_n)^2} $$

Plugging this optimal $s^*$ back into the exponent:

$$ g(s^*) = -\frac{4 N^2 \varepsilon^2}{\sum_{n=1}^N (b_n - a_n)^2} + \frac{16 N^2 \varepsilon^2 \sum_{n=1}^N (b_n - a_n)^2}{8 \left( \sum_{n=1}^N (b_n - a_n)^2 \right)^2} = -\frac{2 N^2 \varepsilon^2}{\sum_{n=1}^N (b_n - a_n)^2} $$

### Step 4: Specialization to Normalized Losses in $[0, 1]$

In standard statistical learning, losses are normalized such that $\ell \in [0, 1]$. Thus, $b_n - a_n = 1 - 0 = 1$, giving $\sum_{n=1}^N (b_n - a_n)^2 = N$. The one-sided tail bound reduces to:

$$ P\left( \frac{1}{N}\sum_{n=1}^N X_n - \mathbb{E}[X] \ge \varepsilon \right) \le \exp(-2N\varepsilon^2) $$

By symmetry, the lower tail satisfies $P\left( \mathbb{E}[X] - \frac{1}{N}\sum_{n=1}^N X_n \ge \varepsilon \right) \le \exp(-2N\varepsilon^2)$. Applying the union bound across both tails produces the full two-sided Hoeffding's Inequality:

$$ P\left( \left| \frac{1}{N}\sum_{n=1}^N X_n - \mathbb{E}[X] \right| \ge \varepsilon \right) \le 2\exp(-2N\varepsilon^2) $$

$\blacksquare$
