---
title: "Essential Trigonometry for Higher Mathematics and Engineering"
date: 2026-10-18
tags: ["Trigonometry", "Mathematics", "Calculus", "Fourier Analysis", "Identities"]
categories: ["Math note"]
description: "A compact but rigorous reference on trigonometry: radians and the unit circle, the addition/double-angle chain, auxiliary-angle synthesis, product-to-sum and Weierstrass substitutions, and triangle geometry."
---

## Foundations: Radians, Unit Circle, and Triangle Core

### Radian Definition and Infinitesimal Foundation

In calculus and physics, the angle $\theta$ is defined purely as the ratio of arc length $s$ to radius $r$:

$$ \theta = \frac{s}{r} \quad \Longleftrightarrow \quad s = r\theta $$

![Unit circle definition of sine, cosine and tangent](/images/notes/trigonometry-essentials/fig-unit-circle.png)

*Figure 1 — The unit circle definition showing $\cos\theta$, $\sin\theta$, and $\tan\theta$ geometrically.*

**Key Calculus Limit (The Small-Angle Approximation).** Comparing the area of the inner triangle, the circular sector, and the outer tangent triangle for $0 < \theta < \frac{\pi}{2}$:

$$ \frac{1}{2}\sin\theta < \frac{1}{2}\theta < \frac{1}{2}\tan\theta \implies \cos\theta < \frac{\sin\theta}{\theta} < 1 $$

Taking $\theta \to 0$ yields the cornerstone of trigonometric derivatives:

$$ \lim_{\theta \to 0} \frac{\sin\theta}{\theta} = 1 \quad \implies \quad \sin\theta \approx \theta, \quad \cos\theta \approx 1 - \frac{1}{2}\theta^2 $$

### Pythagorean Identities

Directly from $x^2 + y^2 = 1$ on the unit circle:

$$
\begin{aligned}
\sin^2\theta + \cos^2\theta &= 1 \\
1 + \tan^2\theta &= \sec^2\theta \quad (\div \cos^2\theta) \\
1 + \cot^2\theta &= \csc^2\theta \quad (\div \sin^2\theta)
\end{aligned}
$$

## The Core Chain: Addition, Double-Angle, and Power-Reduction

All compound trigonometric formulas derive from a single geometric identity: the cosine difference formula.

### Rigorous Proof: Cosine Difference Formula

**Theorem.** $\cos(\alpha - \beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta$.

**Proof.** Let points $P$ and $Q$ lie on the unit circle at angles $\alpha$ and $\beta$:

$$ P = (\cos\alpha, \sin\alpha), \quad Q = (\cos\beta, \sin\beta) $$

The Euclidean distance squared between $P$ and $Q$ is:

$$
\begin{aligned}
d(P, Q)^2 &= (\cos\alpha - \cos\beta)^2 + (\sin\alpha - \sin\beta)^2 \\
&= (\cos^2\alpha + \sin^2\alpha) + (\cos^2\beta + \sin^2\beta) - 2(\cos\alpha\cos\beta + \sin\alpha\sin\beta) \\
&= 2 - 2(\cos\alpha\cos\beta + \sin\alpha\sin\beta)
\end{aligned}
$$

Now rotate the coordinate frame so that $Q$ rests on the $x$-axis at $(1, 0)$ and $P$ moves to angle $(\alpha - \beta)$ at $(\cos(\alpha - \beta), \sin(\alpha - \beta))$. Because distance is invariant under rotation:

$$ d^2 = (\cos(\alpha - \beta) - 1)^2 + (\sin(\alpha - \beta) - 0)^2 = 2 - 2\cos(\alpha - \beta) $$

Equating the two expressions for $d^2$ immediately yields:

$$ \cos(\alpha - \beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta $$

$\blacksquare$

### Addition and Subtraction Formulas

From the cosine difference, the entire family follows by substitution and cofunction shifts:

$$
\begin{aligned}
\cos(\alpha \pm \beta) &= \cos\alpha\cos\beta \mp \sin\alpha\sin\beta \\
\sin(\alpha \pm \beta) &= \sin\alpha\cos\beta \pm \cos\alpha\sin\beta \\
\tan(\alpha \pm \beta) &= \frac{\tan\alpha \pm \tan\beta}{1 \mp \tan\alpha\tan\beta}
\end{aligned}
$$

### Double-Angle and Power-Reduction Formulas (Essential for Integration)

Setting $\alpha = \beta = \theta$ gives:

$$
\begin{aligned}
\sin 2\theta &= 2\sin\theta\cos\theta \\
\cos 2\theta &= \cos^2\theta - \sin^2\theta = 2\cos^2\theta - 1 = 1 - 2\sin^2\theta
\end{aligned}
$$

Solving for $\sin^2\theta$ and $\cos^2\theta$ yields the **Power-Reduction Formulas**, indispensable for calculating integrals such as $\int \cos^2\theta \, d\theta$:

$$ \cos^2\theta = \frac{1 + \cos 2\theta}{2}, \qquad \sin^2\theta = \frac{1 - \cos 2\theta}{2} $$

## Wave Mechanics and Harmonic Motion: The Auxiliary Angle

In differential equations and circuit theory, linear combinations of out-of-phase sinusoids frequently arise: $a\sin\theta + b\cos\theta$.

### Formula and Geometric Conversion

$$ a\sin\theta + b\cos\theta = R\sin(\theta + \varphi) $$

where:

$$ R = \sqrt{a^2 + b^2}, \qquad \cos\varphi = \frac{a}{R}, \quad \sin\varphi = \frac{b}{R} \implies \varphi = \operatorname{atan2}(b, a) $$

![Vector synthesis of the auxiliary phase angle](/images/notes/trigonometry-essentials/fig-auxiliary-angle.png)

*Figure 2 — Vector synthesis of the auxiliary phase angle $\varphi$.*

**Standard High-Frequency Cases:**

$$
\begin{aligned}
\sin\theta + \cos\theta &= \sqrt{2}\sin\left(\theta + \frac{\pi}{4}\right) \\
\sqrt{3}\sin\theta + \cos\theta &= 2\sin\left(\theta + \frac{\pi}{6}\right)
\end{aligned}
$$

## Signal Processing: Product-to-Sum and Sum-to-Product

Crucial in Fourier analysis, AM modulation, and heterodyne systems.

### Product-to-Sum Formulas

Adding and subtracting the expansion formulas:

$$
\begin{aligned}
\sin\alpha\cos\beta &= \frac{1}{2}\big[\sin(\alpha + \beta) + \sin(\alpha - \beta)\big] \\
\cos\alpha\cos\beta &= \frac{1}{2}\big[\cos(\alpha + \beta) + \cos(\alpha - \beta)\big] \\
\sin\alpha\sin\beta &= \frac{1}{2}\big[\cos(\alpha - \beta) - \cos(\alpha + \beta)\big]
\end{aligned}
$$

### Sum-to-Product Formulas (Beat Frequency)

Substituting $\alpha = \frac{u+v}{2}$ and $\beta = \frac{u-v}{2}$ describes the acoustic/electromagnetic *beat* phenomenon:

$$
\begin{aligned}
\sin u + \sin v &= 2\sin\left(\frac{u+v}{2}\right)\cos\left(\frac{u-v}{2}\right) \\
\cos u + \cos v &= 2\cos\left(\frac{u+v}{2}\right)\cos\left(\frac{u-v}{2}\right) \\
\cos u - \cos v &= -2\sin\left(\frac{u+v}{2}\right)\sin\left(\frac{u-v}{2}\right)
\end{aligned}
$$

## The Universal Substitution: Weierstrass Substitution

In calculus, rational functions of $\sin\theta$ and $\cos\theta$ are converted into standard algebraic rational functions using $t = \tan\frac{\theta}{2}$.

### Formulas

$$ \sin\theta = \frac{2t}{1 + t^2}, \qquad \cos\theta = \frac{1 - t^2}{1 + t^2}, \qquad d\theta = \frac{2}{1 + t^2}dt $$

**Proof.** Using double-angle expansions with $\theta = 2(\theta/2)$:

$$ \cos\theta = \cos^2\frac{\theta}{2} - \sin^2\frac{\theta}{2} = \frac{\cos^2\frac{\theta}{2} - \sin^2\frac{\theta}{2}}{\cos^2\frac{\theta}{2} + \sin^2\frac{\theta}{2}} = \frac{1 - \tan^2\frac{\theta}{2}}{1 + \tan^2\frac{\theta}{2}} = \frac{1 - t^2}{1 + t^2} $$

Similarly, $\sin\theta = 2\sin\frac{\theta}{2}\cos\frac{\theta}{2} = \frac{2\tan(\theta/2)}{1 + \tan^2(\theta/2)} = \frac{2t}{1+t^2}$. Differentiating $t = \tan\frac{\theta}{2}$ yields $dt = \frac{1}{2}\sec^2\frac{\theta}{2}\,d\theta = \frac{1+t^2}{2}d\theta$, so $d\theta = \frac{2}{1+t^2}dt$. $\blacksquare$

## Triangle Geometry Essentials

For an arbitrary triangle $ABC$ with opposite side lengths $a, b, c$:

### Law of Sines

Relates sides to the diameter of the circumcircle ($R$ is the circumradius):

$$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R $$

### Law of Cosines (Vector Dot Product Generalization)

From the vector definition $\vec{c} = \vec{a} - \vec{b}$, taking the dot product with itself:

$$ |\vec{c}|^2 = |\vec{a}|^2 + |\vec{b}|^2 - 2|\vec{a}||\vec{b}|\cos C $$

$$ c^2 = a^2 + b^2 - 2ab\cos C \quad \Longleftrightarrow \quad \cos C = \frac{a^2 + b^2 - c^2}{2ab} $$

## Summary Reference Card

| Category | Core Identity | Primary Application |
|---|---|---|
| Pythagorean | $\sin^2\theta + \cos^2\theta = 1$ | Fundamental trigonometric normalization |
| Angle Addition | $\cos(\alpha \pm \beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta$ | Foundation of all compound angle formulas |
| Power Reduction | $\cos^2\theta = \frac{1+\cos 2\theta}{2}, \quad \sin^2\theta = \frac{1-\cos 2\theta}{2}$ | Calculus integration of even powers |
| Auxiliary Angle | $a\sin\theta + b\cos\theta = \sqrt{a^2+b^2}\sin(\theta + \varphi)$ | Phase synthesis, amplitude-phase conversion |
| Weierstrass | $t = \tan(\theta/2) \implies \sin\theta = \frac{2t}{1+t^2}, \cos\theta = \frac{1-t^2}{1+t^2}$ | Rationalizing trigonometric integrals |
