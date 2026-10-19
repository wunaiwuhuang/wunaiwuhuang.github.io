---
title: "From Linear Regression to Deep Neural Networks"
date: 2026-10-18
tags: ["Machine Learning", "Neural Networks", "Gradient Descent", "Activation Functions", "Backpropagation"]
categories: ["Machine learning"]
description: "Study notes bridging linear regression, loss formulations, gradient descent, activation functions and multi-layer networks — with full derivations, figures and a model-diagnostics decision tree."
---

## Linear Models & Loss Formulations

### From Simple to Multiple Linear Regression

A simple linear model maps a single scalar feature $x_1$ via an affine transformation:

$$ y = b + w x_1 $$

When scaling from a single input to $D$ distinct input features $\mathbf{x} = [x_1, x_2, \dots, x_D]^T$, the model generalizes to **Multiple Linear Regression**:

$$ y = b + \sum_{j=1}^D w_j x_j = \mathbf{w}^T \mathbf{x} + b $$

- $w_j$ **(Weight):** Slope / partial derivative governing target response with respect to feature $x_j$.
- $b$ **(Bias):** Intercept / baseline offset.
- **Geometric Interpretation:** The model defines a flat, non-curving **hyperplane** in $\mathbb{R}^{D+1}$. It cannot capture interactions or non-linear behaviors without explicit transformations.

### Loss Function Formulations: Regression and Classification

Given $M$ training samples $\{(\mathbf{x}^{(m)}, \hat{y}^{(m)})\}_{m=1}^M$, the loss function acts as a measurable metric evaluated over empirical errors.

**1. Mean Squared Error (MSE / $L_2$ Loss) — Regression**

$$ L_{\text{MSE}} = \frac{1}{M} \sum_{m=1}^M \left( \hat{y}_{\text{pred}}^{(m)} - \hat{y}^{(m)} \right)^2 $$

Smooth and differentiable everywhere, but sensitive to extreme outliers due to quadratic penalization.

**2. Mean Absolute Error (MAE / $L_1$ Loss) — Regression**

$$ L_{\text{MAE}} = \frac{1}{M} \sum_{m=1}^M \left| \hat{y}_{\text{pred}}^{(m)} - \hat{y}^{(m)} \right| $$

Robust to outliers, but features a discontinuous subgradient at zero residual ($e = 0$).

**3. Binary Cross-Entropy (BCE) — Binary Classification**

For binary labels $\hat{y} \in \{0, 1\}$ paired with a sigmoid probability output $p \in (0, 1)$:

$$ L_{\text{BCE}} = - \frac{1}{M} \sum_{m=1}^M \left[ \hat{y}^{(m)} \ln(p^{(m)}) + (1 - \hat{y}^{(m)}) \ln(1 - p^{(m)}) \right] $$

Acts as an algebraic switch: activates $-\ln(p)$ if $\hat{y}=1$, and $-\ln(1-p)$ if $\hat{y}=0$.

**4. Categorical Cross-Entropy (CCE) — Multiclass Classification**

For mutually exclusive classification across $C > 2$ classes, targets are one-hot encoded $\hat{\mathbf{y}}^{(m)} \in \{0, 1\}^C$. Raw logits are converted to normalized class probabilities using the **Softmax function**:

$$ p_c^{(m)} = \frac{e^{z_c^{(m)}}}{\sum_{k=1}^C e^{z_k^{(m)}}}, \quad \text{where } \sum_{c=1}^C p_c^{(m)} = 1 $$

The loss computes empirical cross-entropy over all classes:

$$ L_{\text{CCE}} = - \frac{1}{M} \sum_{m=1}^M \sum_{c=1}^C \hat{y}_c^{(m)} \ln\left( p_c^{(m)} \right) $$

Because only the true ground-truth class has $\hat{y}_c = 1$ while all others equal $0$, the inner summation isolates and penalizes solely the negative log probability of the correct class: $-\ln(p_{\text{correct}})$.

## Optimization: Analytical Solution vs. Gradient Descent

### Analytical Solution via Partial Derivatives (Normal Equation)

To find the minimum of an unconstrained convex loss surface, calculus dictates setting all directional slopes to zero simultaneously.

#### Scalar Setting: Two-Variable System

For simple linear regression $L(w, b) = \frac{1}{M} \sum_{m=1}^M \left( b + w x^{(m)} - \hat{y}^{(m)} \right)^2$, we compute the explicit partial derivatives:

$$
\begin{aligned}
\frac{\partial L}{\partial w} &= \frac{2}{M} \sum_{m=1}^M \left( b + w x^{(m)} - \hat{y}^{(m)} \right) x^{(m)} = 0 \\
\frac{\partial L}{\partial b} &= \frac{2}{M} \sum_{m=1}^M \left( b + w x^{(m)} - \hat{y}^{(m)} \right) = 0
\end{aligned}
$$

Because this system is linear with respect to $w$ and $b$, it forms a standard solvable system of two linear equations.

#### Matrix Generalization: The Normal Equation

When generalized across $D$ features with unified vector $\mathbf{w} \in \mathbb{R}^{(D+1) \times 1}$, setting all simultaneous partial derivatives to zero yields the compact matrix formulation:

$$ \mathbf{X}^T \mathbf{X} \mathbf{w}^* = \mathbf{X}^T \mathbf{y} \implies \mathbf{w}^* = (\mathbf{X}^T \mathbf{X})^{-1} \mathbf{X}^T \mathbf{y} $$

- **Computational Bottleneck:** Inverting the Gram matrix $(\mathbf{X}^T \mathbf{X})$ requires $\mathcal{O}(d^3)$ runtime complexity, becoming computationally intractable when the parameter dimension $d \gg 10^5$.
- **Non-linear Incompatibility:** Once non-linear activation functions (e.g., Sigmoid, ReLU) are introduced, partial derivative equations turn into transcendental equations with no closed-form algebraic solutions.

### Gradient Descent (GD) & Mini-Batch SGD

#### The Gradient Operator $\nabla$ as Vectorized Partial Derivatives

When parameters scale to an arbitrary collection $\boldsymbol{\theta} = [\theta_1, \theta_2, \dots, \theta_P]^T$, writing separate partial derivative equations becomes unmanageable. The gradient operator $\nabla$ (*nabla*) serves as unified vector notation packaging all dimensional partial derivatives into a single column vector:

$$ \nabla L(\boldsymbol{\theta}) \triangleq \left[ \frac{\partial L}{\partial \theta_1}, \; \frac{\partial L}{\partial \theta_2}, \; \dots, \; \frac{\partial L}{\partial \theta_P} \right]^T $$

In standard Gradient Descent, parameters update iteratively in the direction of steepest descent:

$$ \boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_t - \eta \nabla L(\boldsymbol{\theta}_t) $$

where $\eta > 0$ denotes the learning rate.

#### Mini-Batch SGD & Iteration Step $k$

Computing gradients over the entire training set of $N$ instances simultaneously requires massive GPU memory. Modern training partitions the $N$ total samples into sequential mini-batches of size $B$.

Let the index $k \in \{1, 2, \dots\}$ denote the sequential iteration step consuming the $k$-th mini-batch:

$$ g = \nabla L^k(\boldsymbol{\theta}^{k-1}), \quad \boldsymbol{\theta}^k \leftarrow \boldsymbol{\theta}^{k-1} - \eta g $$

- $L^k$: The loss evaluated **only** on the data within the $k$-th mini-batch.
- $\boldsymbol{\theta}^{k-1}$: The model parameter vector obtained from the preceding step.
- $\boldsymbol{\theta}^k$: The updated parameter vector after consuming batch $k$.
- $1\text{ Epoch}$: Achieved when all batches covering the entire dataset $N$ have been processed once.

Stochastic mini-batch sampling bounds hardware memory footprints and introduces natural gradient noise, aiding escape from saddle points and shallow local traps.

## Introducing Non-Linearity: Sigmoid and ReLU

Linear models cannot fit curved geometries. Non-linear activation functions bend hyperplanes into piecewise continuous surfaces.

### The Logistic Sigmoid Function

$$ \sigma(z) = \frac{1}{1 + e^{-z}} $$

Produces an S-shaped smooth threshold. Arbitrary 1D non-linear curves can be approximated by summing multiple shifted and scaled sigmoids:

$$ y = b + \sum_{i} c_i \, \sigma(b_i + w_i x_1) $$

![Effect of varying sigmoid hyperparameters and piecewise curve assembly](/images/notes/ml-dl-notes-01/fig-sigmoid.png)

*Figure 1 — **Left:** Effect of varying hyperparameters $w_i, b_i, c_i$ on a single sigmoid. **Right:** Piecewise non-linear curve assembly formed by summing multiple translated sigmoid units.*

### The Rectified Linear Unit (ReLU)

As shown by Prof. Hung-yi Lee, a continuous sigmoid can be approximated by two rectified piecewise linear ramps. In modern deep learning, the **ReLU** function is widely preferred:

$$ \text{ReLU}(z) = \max(0, z) $$

- **Computational Efficiency:** Avoids costly exponential operations; evaluates via simple thresholding.
- **Mitigating Vanishing Gradients:** For $z > 0$, the derivative is strictly constant ($\frac{d}{dz}\text{ReLU}(z) = 1$), avoiding the vanishing gradient saturation inherent to sigmoid tails ($\sigma'(z) \to 0$ for $|z| \gg 0$).

## Multi-Feature Input & The Artificial Neuron

By bridging Multiple Linear Regression ($\sum_j w_j x_j$) with non-linear activation functions ($\sigma$), we establish the foundational **Artificial Neuron**.

### Forward Computation of a Neuron

Each individual neuron $i$ accepts all $D$ input features, computes an affine inner product, and passes the result through an activation function:

$$ z_i = b_i + \sum_{j=1}^D w_{ij} x_j = \mathbf{w}_i^T \mathbf{x} + b_i, \quad a_i = \sigma(z_i) \text{ (or } \text{ReLU}(z_i)\text{)} $$

![Fully connected single-hidden-layer neural network](/images/notes/ml-dl-notes-01/fig-neuron.png)

*Figure 2 — Architecture of a fully connected single-hidden-layer neural network illustrating synaptic weight intersections ($w_{ij}$) and output aggregation weights ($c_i$).*

### Single-Hidden-Layer Network

Aggregating $K$ hidden units together with an output layer produces:

$$ y = b + \sum_{i=1}^K c_i \, \sigma\left( b_i + \sum_{j=1}^D w_{ij} x_j \right) $$

- $w_{ij}$: Synaptic weight connecting input feature $j$ to hidden neuron $i$.
- $c_i$: Weight scaling the contribution of neuron $i$ to the final output.
- **Universal Approximation Theorem:** A single hidden layer with a sufficient finite number of non-linear neurons can approximate any continuous function on compact subsets of $\mathbb{R}^D$ to arbitrary precision.

## Linear Algebra Formulation (Vectorized Representation)

For parallelized batch inference across $M$ samples:

- Input data matrix: $\mathbf{X} \in \mathbb{R}^{M \times D}$
- Hidden weight matrix: $\mathbf{W} \in \mathbb{R}^{D \times K}$
- Hidden bias vector: $\mathbf{b}_h^T \in \mathbb{R}^{1 \times K}$
- Output weight vector: $\mathbf{c} \in \mathbb{R}^{K \times 1}$
- Output bias scalar: $b \in \mathbb{R}$

Vectorized execution pipeline:

$$
\begin{aligned}
\mathbf{Z} &= \mathbf{X} \mathbf{W} + \mathbf{1}_M \mathbf{b}_h^T \quad \in \mathbb{R}^{M \times K} \\
\mathbf{A} &= \sigma(\mathbf{Z}) \quad (\text{or } \max(\mathbf{0}, \mathbf{Z})) \quad \in \mathbb{R}^{M \times K} \\
\hat{\mathbf{y}} &= \mathbf{A} \mathbf{c} + b \mathbf{1}_M \quad \in \mathbb{R}^{M \times 1}
\end{aligned}
$$

## Deep Neural Networks (Hierarchical Representation)

Rather than expanding width $K$ in a single layer, deep learning constructs functional compositions across $L$ stacked layers:

$$
\begin{aligned}
\mathbf{h}^{(1)} &= \sigma(\mathbf{W}^{(1)} \mathbf{x} + \mathbf{b}^{(1)}) \\
\mathbf{h}^{(2)} &= \sigma(\mathbf{W}^{(2)} \mathbf{h}^{(1)} + \mathbf{b}^{(2)}) \\
&\;\;\vdots \\
\hat{y} &= \mathbf{W}^{(L)} \mathbf{h}^{(L-1)} + b^{(L)}
\end{aligned}
$$

### Architectural Advantages & Multi-Layer Diagram

![Deep multi-layer neural network with hierarchical representations](/images/notes/ml-dl-notes-01/fig-deep-net.png)

*Figure 3 — Architecture of a deep multi-layer neural network cascading through hierarchical intermediate representations.*

- **Hierarchical Abstraction:** Early layers isolate localized low-level primitives; deep layers recursively compose these into complex global manifolds.
- **Parameter Efficiency:** Deep composition $f_L(\dots f_1(\mathbf{x}))$ achieves exponential expressivity with significantly fewer parameters than equivalent shallow wide architectures.
- **Backpropagation:** Gradients across all layers are calculated via systematic recurrence of the multivariate chain rule:

$$ \frac{\partial L}{\partial \mathbf{W}^{(l)}} = \frac{\partial L}{\partial \mathbf{z}^{(l)}} \frac{\partial \mathbf{z}^{(l)}}{\partial \mathbf{W}^{(l)}} $$

## Model Diagnostics & Troubleshooting Guide

When empirical model performance is suboptimal, diagnosing the root cause requires systematic examination of the discrepancy between **Training Loss** and **Testing/Validation Loss**.

![Decision-tree workflow for diagnosing model performance bottlenecks](/images/notes/ml-dl-notes-01/fig-diagnostics.png)

*Figure 4 — Systematic decision-tree workflow for diagnosing model performance bottlenecks.*

### Phase 1: Diagnosing Large Training Loss

If training loss remains high, the model has failed to fit even the observed data:

- **Model Bias (Underfitting):** The model family lacks the expressive capacity to fit the target surface. *Remedy:* Expand the hypothesis space by adding features, widening layers, or deepening the network.
- **Optimization Issue:** The model possesses sufficient capacity, but gradient descent is trapped in a bad local flat region or exhibits numerical divergence. *Remedy:* Switch to adaptive optimizers (e.g., Adam), apply learning rate warmup/scheduling, or incorporate residual shortcut connections.

### Phase 2: Diagnosing Large Testing Loss (Low Training Loss)

If training loss is low but testing loss diverges, the model lacks generalizability:

- **Overfitting:** The model memorized sample-specific noise rather than generalizable underlying patterns. *Remedy (The Fundamental Trade-off):*
    1. Acquire more real data or apply **Data Augmentation**.
    2. Constrain model complexity: reduce neuron counts, apply weight decay ($L_2$ regularization), or apply Dropout.
    3. Use **Cross-Validation** on split training/validation partitions for principled model selection.
- **Data Mismatch:** The training and testing sets originate from fundamentally different distributions (e.g., domain shift). Pure structural adjustments cannot resolve mismatch; domain adaptation or aligned data sampling is mandatory.

---

## Appendix: Step-by-Step Derivation of the Normal Equation

This appendix provides an intuitive mathematical bridge explaining how setting all directional gradients to zero directly transforms into the closed-form matrix solution $\mathbf{w}^* = (\mathbf{X}^T \mathbf{X})^{-1} \mathbf{X}^T \mathbf{y}$.

### Part 1. Unpacking the Matrix Notation

To absorb the bias term $b$ directly into $\mathbf{w}$, we augment the feature space by appending a dummy feature $x_0 = 1$ to each sample. For $M$ training samples and $D$ features:

$$
\mathbf{X} = \begin{bmatrix}
1 & x_{11} & \cdots & x_{1D} \\
1 & x_{21} & \cdots & x_{2D} \\
\vdots & \vdots & \ddots & \vdots \\
1 & x_{M1} & \cdots & x_{MD}
\end{bmatrix} \in \mathbb{R}^{M \times (D+1)}, \quad
\mathbf{w} = \begin{bmatrix}
b \\
w_1 \\
\vdots \\
w_D
\end{bmatrix} \in \mathbb{R}^{(D+1) \times 1}, \quad
\mathbf{y} = \begin{bmatrix}
\hat{y}^{(1)} \\
\hat{y}^{(2)} \\
\vdots \\
\hat{y}^{(M)}
\end{bmatrix} \in \mathbb{R}^{M \times 1}
$$

The residual error vector $\mathbf{e}$ representing sample-wise deviations is:

$$
\mathbf{e} = \mathbf{X}\mathbf{w} - \mathbf{y} = \begin{bmatrix}
(\mathbf{x}^{(1)}\mathbf{w} - \hat{y}^{(1)}) \\
\vdots \\
(\mathbf{x}^{(M)}\mathbf{w} - \hat{y}^{(M)})
\end{bmatrix}
$$

### Part 2. Expanding the Total Loss Function

The sum of squared errors is equivalent to the inner product of the residual vector with itself:

$$
\begin{aligned}
L(\mathbf{w}) &= \mathbf{e}^T \mathbf{e} \\
&= (\mathbf{X}\mathbf{w} - \mathbf{y})^T (\mathbf{X}\mathbf{w} - \mathbf{y}) \\
&= \left( (\mathbf{X}\mathbf{w})^T - \mathbf{y}^T \right) (\mathbf{X}\mathbf{w} - \mathbf{y}) \\
&= \mathbf{w}^T \mathbf{X}^T \mathbf{X} \mathbf{w} - \mathbf{w}^T \mathbf{X}^T \mathbf{y} - \mathbf{y}^T \mathbf{X}\mathbf{w} + \mathbf{y}^T \mathbf{y}
\end{aligned}
$$

Because the scalar term $\mathbf{w}^T \mathbf{X}^T \mathbf{y}$ equals its transpose $\mathbf{y}^T \mathbf{X} \mathbf{w}$, the two middle cross-terms merge:

$$ L(\mathbf{w}) = \mathbf{w}^T (\mathbf{X}^T \mathbf{X}) \mathbf{w} - 2 (\mathbf{X}^T \mathbf{y})^T \mathbf{w} + \mathbf{y}^T \mathbf{y} $$

### Part 3. Calculating the Gradient

To minimize $L(\mathbf{w})$, we differentiate with respect to the parameter vector $\mathbf{w}$ term by term:

1. **Constant Term:** $\frac{\partial}{\partial \mathbf{w}} (\mathbf{y}^T \mathbf{y}) = \mathbf{0}$
2. **Linear Term:** $\frac{\partial}{\partial \mathbf{w}} \left( 2 (\mathbf{X}^T \mathbf{y})^T \mathbf{w} \right) = 2 \mathbf{X}^T \mathbf{y}$
3. **Quadratic Term:** $\frac{\partial}{\partial \mathbf{w}} \left( \mathbf{w}^T (\mathbf{X}^T \mathbf{X}) \mathbf{w} \right) = 2 (\mathbf{X}^T \mathbf{X}) \mathbf{w}$

Combining these yields the complete gradient vector $\nabla_{\mathbf{w}} L$:

$$ \nabla_{\mathbf{w}} L = 2 \mathbf{X}^T \mathbf{X} \mathbf{w} - 2 \mathbf{X}^T \mathbf{y} $$

### Part 4. Setting Gradients to Zero and Solving

At the optimal parameter configuration $\mathbf{w}^*$, setting the gradient to zero:

$$ 2 \mathbf{X}^T \mathbf{X} \mathbf{w}^* - 2 \mathbf{X}^T \mathbf{y} = \mathbf{0} \implies (\mathbf{X}^T \mathbf{X}) \mathbf{w}^* = \mathbf{X}^T \mathbf{y} $$

Pre-multiplying both sides by the inverse matrix $(\mathbf{X}^T \mathbf{X})^{-1}$:

$$ \mathbf{w}^* = (\mathbf{X}^T \mathbf{X})^{-1} \mathbf{X}^T \mathbf{y} $$
