---
title: "Evaluation Metrics Comprehensive Guide"
date: 2026-07-18
tags: ["Machine Learning", "Statistics", "Metrics", "Cheatsheet"]
categories: ["Coding Notes"]
description: "Comprehensive reference covering classification, regression, ranking, computer vision, NLP, and more evaluation metrics with formulas."
---

## 1. Core Concepts and Classification Framework

### Prediction vs Ground Truth Variable Types

| Format | Description |
|---|---|
| Hard label / Discrete decision | Final classification output, e.g., 0/1, "cat"/"dog" |
| Soft score / Continuous value | Probability, confidence, logit, distance, ranking score |

| Format | Description |
|---|---|
| Binary classification (discrete) | 0/1, most common |
| Multiclass classification (discrete) | 3+ mutually exclusive classes |
| Continuous real values | e.g., temperature, price, rating exact values |
| Ordinal / Graded | Between binary and continuous, e.g., relevance scoring 0-5 |
| Structured labels | Segmentation mask, bounding box, ranked list |
| Probability distribution / Soft labels | GT itself is a probability distribution, e.g., knowledge distillation |

> **Important**: Almost all "hard label metrics" (Accuracy, Precision, Recall, F1...) can accept continuous scores as input in code — but that's because the code performs an implicit thresholding behind the scenes (usually threshold=0.5). This does not mean these metrics "support" continuous predictions. **If your prediction is continuous, you must first choose a threshold to convert it to a hard label before computing these metrics.** Threshold selection directly affects results, which is why threshold-free metrics like AUROC / AUPRC are more favored in papers.

**Basic symbols**: TP=True Positive, FP=False Positive, TN=True Negative, FN=False Negative, N=total samples, P=Precision, R=Recall, $p_i$=predicted probability of sample $i$, $y_i$=true label of sample $i$, $\hat{y}_i$=regression prediction

---

## 2. Overview Matrix

| GT \ Pred | Pred = Hard label / Discrete | Pred = Continuous score / Probability |
|---|---|---|
| **GT=Binary** | Accuracy, Precision, Recall, F1, MCC, Kappa, Specificity, G-mean, IoU | **AUROC, AUPRC/AP**, Log Loss, Brier Score, KS statistic, Gini coefficient |
| **GT=Multiclass** | Multiclass Accuracy, Macro/Micro/Weighted-F1, Confusion Matrix | Multiclass AUROC(OvR/OvO), Top-k Accuracy, Cross-Entropy(NLL) |
| **GT=Continuous** | (rare, requires discretizing GT first) | **MSE, RMSE, MAE, MAPE, R², Pearson r, Spearman ρ, Kendall τ, CCC, ICC** |
| **GT=Ordinal** | Weighted Kappa | **NDCG, Kendall τ, Spearman ρ** |
| **GT=Structured(mask/box/sequence)** | IoU, Dice, Pixel Accuracy | mAP(detection), Panoptic Quality, MAP/MRR/NDCG(retrieval) |
| **GT=Probability distribution** | — | KL divergence, JS divergence, Cross-entropy, Wasserstein distance, **CRPS**, Perplexity |

---

## 3. Binary Classification · Hard Label Metrics

**Requirement: GT = binary discrete(0/1); Pred = discrete hard label(0/1)**

### 3.1 Confusion Matrix

```
              GT=1    GT=0
Pred=1   TP    FP
Pred=0   FN    TN
```

| Metric | Formula | Description |
|---|---|---|
| Accuracy | $\frac{TP+TN}{TP+TN+FP+FN}$ | Distorts under class imbalance, not recommended as sole metric |
| Precision (PPV) | $\frac{TP}{TP+FP}$ | Proportion of predicted positives that are truly positive |
| Recall / Sensitivity / TPR | $\frac{TP}{TP+FN}$ | Proportion of true positives correctly identified |
| Specificity / TNR | $\frac{TN}{TN+FP}$ | Proportion of true negatives correctly identified |
| F1-score | $\frac{2PR}{P+R} = \frac{2TP}{2TP+FP+FN}$ | Harmonic mean of Precision and Recall |
| F-$\beta$ score | $\frac{(1+\beta^2)PR}{\beta^2P+R}$ | $\beta>1$ weights Recall more, $\beta<1$ weights Precision more |
| F$_{0.5}$-score | $\beta=0.5$ | More emphasis on Precision |
| F$_2$-score | $\beta=2$ | More emphasis on Recall |
| Matthews Correlation Coefficient (MCC) | $\frac{TP\cdot TN-FP\cdot FN}{\sqrt{(TP+FP)(TP+FN)(TN+FP)(TN+FN)}}$ | More robust than F1 under imbalance, range [-1,1] |
| Cohen's Kappa | $\frac{p_o-p_e}{1-p_e}$ | Agreement corrected for chance, -1~1 |
| Balanced Accuracy | $\frac{\text{Sensitivity}+\text{Specificity}}{2}$ | Improved Accuracy for imbalanced data |
| G-mean | $\sqrt{\text{Sensitivity} \times \text{Specificity}}$ | Also for imbalanced data |
| Jaccard index / IoU | $\frac{\|A \cap B\|}{\|A \cup B\|} = \frac{TP}{TP+FP+FN}$ | Also used in image segmentation |
| Youden's J (Informedness) | $\text{Sensitivity}+\text{Specificity}-1$ | Often used to find optimal ROC threshold, -1~1 |
| Markedness | $\text{PPV}+\text{NPV}-1$ | Dual to Informedness (prediction perspective) |
| NPV | $\frac{TN}{TN+FN}$ | Proportion of predicted negatives that are truly negative |
| FPR | $\frac{FP}{FP+TN} = 1-\text{Specificity}$ | False positive rate |
| FNR | $\frac{FN}{FN+TP} = 1-\text{Recall}$ | False negative rate |
| Fall-out | $\frac{FP}{FP+TN}$ | Same as FPR |
| Miss rate | $\frac{FN}{FN+TP}$ | Same as FNR |
| FDR | $\frac{FP}{TP+FP} = 1-\text{Precision}$ | False discovery rate |
| Hamming Loss | $\frac{1}{N}\sum_{i=1}^{N}\frac{1}{M}\mathbb{I}(y_i \neq \hat{y}_i)$ | 0~1, smaller is better, M=number of labels |

> **F1 and harmonic mean**: Harmonic mean is more sensitive to extreme values, so F1 requires both Precision and Recall to be high for a high score. If they differ greatly, F1 will be significantly lower than the arithmetic mean.

---

## 4. Binary Classification · Continuous Score (Threshold-Free) Metrics

**Requirement: GT = binary discrete(0/1); Pred = continuous score / probability**

### 4.1 ROC and AUC Series

| Metric | Definition | Description |
|---|---|---|
| **AUROC / ROC-AUC** | Area under ROC curve (TPR vs FPR) | Insensitive to class imbalance, but may be overly optimistic in extreme imbalance |
| **AUPRC / PR-AUC / Average Precision (AP)** | Area under PR curve (Precision vs Recall) | More reflective of true performance than AUROC in extreme imbalance (e.g., rare disease detection) |
| Gini coefficient | $2 \times \text{AUROC} - 1$ | Commonly used in credit scoring, equivalent information to AUROC |
| Partial AUC | AUC within a specified FPR or TPR range | Used when only a specific operating range matters |
| tAUC (truncated AUC) | Truncated AUC | Focus on high TPR or high FPR regions |
| Lift | Proportion of positives captured in top k% vs random | Common in marketing / risk control |

> **AUPRC computation pitfall**: Some people directly apply trapezoidal integration on PR curve points, but the PR curve is non-monotonic, yielding inflated/inaccurate values. The correct approach is the non-interpolated Average Precision definition (e.g., sklearn's `average_precision_score`), not computing `auc()` on a drawn PR curve.

### 4.2 Probability Quality and Calibration Metrics

| Metric | Formula | Description |
|---|---|---|
| **Log Loss / Binary Cross-Entropy** | $-\frac{1}{N}\sum_{i=1}^{N}[y_i \cdot \log(p_i) + (1-y_i) \cdot \log(1-p_i)]$ | Penalizes both wrong direction and overconfidence |
| **Brier Score** | $\frac{1}{N}\sum_{i=1}^{N}(p_i - y_i)^2$ | Mean squared error of probability predictions, lower is better |
| **ECE** (Expected Calibration Error) | $\sum_{m=1}^{M}\frac{|B_m|}{N}|\text{acc}(B_m)-\text{conf}(B_m)|$ | Compares predicted probability with actual frequency in bins |
| **MCE** (Maximum Calibration Error) | $\max_m|\text{acc}(B_m)-\text{conf}(B_m)|$ | Maximum calibration error |

### 4.3 Other Continuous Score Metrics

| Metric | Definition | Description |
|---|---|---|
| KS statistic | $\max_t |\text{CDF}_{\text{pos}}(t) - \text{CDF}_{\text{neg}}(t)|$ | Common in financial risk / credit scoring |

---

## 5. Multiclass Metrics

**Requirement: GT = multiclass discrete (K classes, K≥3)**

### 5.1 Per-Class and Aggregation

| Metric | Aggregation | Description |
|---|---|---|
| **Macro-Average Precision** | Arithmetic mean of per-class Precision | Treats each class equally, small and large classes have equal weight |
| **Macro-Average Recall** | Arithmetic mean of per-class Recall | |
| **Macro-F1** | Arithmetic mean of per-class F1 | |
| **Micro-Average Precision** | $\frac{\sum TP_c}{\sum TP_c + \sum FP_c}$ | Treats each sample equally, dominated by large classes |
| **Micro-Average Recall** | $\frac{\sum TP_c}{\sum TP_c + \sum FN_c}$ | |
| **Micro-F1** | F1 of Micro Precision and Micro Recall | In multiclass, Micro-F1 = Accuracy |
| **Weighted-Average** | Weighted by number of samples per class | |

### 5.2 Overall Metrics

| Metric | Description |
|---|---|
| **Accuracy** | Proportion of correctly predicted samples |
| **Cohen's Kappa (multiclass)** | Agreement corrected for chance |
| **Confusion Matrix** | K×K matrix, most informative but not a single scalar |
| **Top-k Accuracy** | True class falls within top-k predicted classes, common in ImageNet |
| **Log Loss / Cross-Entropy** | $-\frac{1}{N}\sum_{i=1}^{N}\sum_{c=1}^{K} y_{ic} \cdot \log(p_{ic})$ |

### 5.3 ROC Extensions in Multiclass

| Metric | Description |
|---|---|
| **One-vs-Rest ROC-AUC (OVRA)** | Binary classification per class, then macro/micro average |
| **One-vs-One ROC-AUC (OVOA)** | Binary classification between each pair of classes |

> Standard approach is One-vs-Rest (each class treated as "positive vs rest") or One-vs-One, then macro or weighted average.

---

## 6. Multilabel Classification Metrics

**Requirement: GT = vector of multiple binary labels (each sample can belong to multiple classes, labels are not mutually exclusive)**

| Metric | Pred requirement | Description |
|---|---|---|
| **Hamming Loss** | Discrete multilabel vector | Per-label error rate average |
| **Subset Accuracy** (Exact Match Ratio) | Discrete multilabel vector | All labels must match exactly, very strict |
| Macro/Micro-F1 (multilabel) | Discrete multilabel vector | Similar to multiclass but labels are not mutually exclusive |
| **Label Ranking AP (LRAP)** | Continuous score vector | Threshold-free version, evaluates whether relevant labels rank higher |

---

## 7. Regression / Continuous Value Prediction Metrics

**Requirement: GT = continuous real values; Pred = continuous real values**

### 7.1 Error-Based Metrics

| Metric | Formula | Description |
|---|---|---|
| **MSE** (Mean Squared Error) | $\frac{1}{N}\sum_{i=1}^{N}(y_i-\hat{y}_i)^2$ | Heavier penalty on large errors, unit is squared original unit |
| **RMSE** (Root Mean Squared Error) | $\sqrt{\text{MSE}}$ | Same unit as original variable, more intuitive |
| **MAE** (Mean Absolute Error) | $\frac{1}{N}\sum_{i=1}^{N}|y_i-\hat{y}_i|$ | More robust to outliers than MSE |
| **MAPE** (Mean Absolute Percentage Error) | $\frac{1}{N}\sum_{i=1}^{N}\left|\frac{y_i-\hat{y}_i}{y_i}\right| \times 100\%$ | Requires $y_i \neq 0$, unstable when $y_i$ is near 0 |
| **sMAPE** (symmetric MAPE) | $\frac{1}{N}\sum_{i=1}^{N}\frac{2|y_i-\hat{y}_i|}{|y_i|+|\hat{y}_i|}$ | Corrects MAPE's asymmetric penalty for over/under estimation |
| **RMSLE** (Root Mean Squared Log Error) | $\sqrt{\frac{1}{N}\sum_{i=1}^{N}(\log(y_i+1)-\log(\hat{y}_i+1))^2}$ | Log error, suitable for long-tail distributions |
| **Huber Loss ($\delta$)** | $\begin{cases} \frac{1}{2}(y-\hat{y})^2 & \text{if } |e| \leq \delta \\ \delta|e|-\frac{1}{2}\delta^2 & \text{otherwise} \end{cases}$ | MSE for small errors, MAE for large errors |

### 7.2 R²-Based Metrics

| Metric | Formula | Description |
|---|---|---|
| **R² (Coefficient of Determination)** | $1 - \frac{SS_{\text{res}}}{SS_{\text{tot}}} = 1 - \frac{\sum(y_i-\hat{y}_i)^2}{\sum(y_i-\bar{y})^2}$ | Proportion of variance explained by the model, closer to 1 is better, can be negative |
| **Adjusted R²** | $1 - (1-R^2)\frac{N-1}{N-p-1}$ | R² corrected for number of predictors |

### 7.3 Correlation Metrics

| Metric | Formula/Description | Description |
|---|---|---|
| **Pearson r** | $\frac{\text{Cov}(y,\hat{y})}{\sigma_y \cdot \sigma_{\hat{y}}}$ | Measures **linear correlation**, does not measure numerical agreement (scale/offset differences still yield r=1) |
| **Spearman ρ** | Pearson on ranks | Measures monotonic relationship, robust to outliers |
| **Kendall's Tau τ** | Based on concordant/discordant pairs | Also measures monotonic relationship, more robust for small samples |
| **CCC** (Concordance Correlation Coefficient) | $\frac{2\rho\sigma_y\sigma_{\hat{y}}}{\sigma_y^2+\sigma_{\hat{y}}^2+(\mu_y-\mu_{\hat{y}})^2}$ | **Measures both correlation and agreement** (corrects for offset and scale), common in medical/biostatistics |

> **Pearson r vs CCC**: Pearson r only measures linear correlation degree, not requiring predicted and true values to be numerically consistent (e.g., $\hat{y}=2y$ gives r=1). CCC considers both correlation and agreement (correction for offset and scale), thus stricter than r and more suitable for evaluating prediction accuracy.

### 7.4 Cross-Validation Related

| Metric | Description |
|---|---|
| CV Score (mean±std) | Cross-validation R²/MSE etc. |
| LOO-CV MSE | Leave-one-out |
| Paired t-test / Wilcoxon | Model comparison |

---

## 8. Survival Analysis / Risk Scoring

**Requirement: GT = (event time t, event indicator δ); Pred = continuous risk score / survival function S(t)**

| Metric | Description |
|---|---|
| **C-index / Concordance Index** | Proportion of comparable pairs where predicted risk order matches actual |
| **Time-dependent AUC** | AUC at specific time point t |
| **Integrated AUC** | Integral average of AUC across multiple time points |
| **Survival Brier Score** | Time-dependent Brier Score |
| **Integrated Brier Score** | Time integral average |

---

## 9. Probability Distribution / Density Estimation Metrics

**Requirement: GT can be probability distribution or soft labels; Pred is also probability distribution or sampled samples**

| Metric | Formula/Description | Description |
|---|---|---|
| **Log-Likelihood** | $\sum_{i=1}^{N}\log p(x_i)$ | Larger is better |
| **Negative Log-Likelihood (NLL)** | $-\frac{1}{N}\sum_{i=1}^{N}\log p(x_i)$ | Smaller is better |
| **KL Divergence** | $D_{\text{KL}}(q\|p) = \int q(x)\log\frac{q(x)}{p(x)}\,dx$ | Asymmetric, measures information loss when approximating GT with Pred |
| **JS Divergence** | $\sqrt{\frac{1}{2}D_{\text{KL}}(q\|m)+\frac{1}{2}D_{\text{KL}}(p\|m)},\ m=\frac{p+q}{2}$ | Symmetrized version of KL, has upper bound |
| **Wasserstein Distance** | $L_p$ Wasserstein distance | Commonly used to evaluate difference between generated and real distributions in GANs |
| **CRPS** (Continuous Ranked Probability Score) | **GT=single continuous value, Pred=full predictive distribution (CDF)** | Common in probabilistic weather forecasting / probabilistic regression |

---

## 10. Ranking / Recommender Systems / Information Retrieval Metrics

**Requirement: GT = relevance labels (binary or graded); Pred = ranked list (obtained by sorting continuous scores)**

| Metric | GT requirement | Description |
|---|---|---|
| **MAP** (Mean Average Precision) | Binary relevance (0/1) | Compute AP per query, then average across queries |
| **MRR** (Mean Reciprocal Rank) | Binary relevance | Only cares about position of first relevant result |
| **NDCG@K** | Graded relevance (e.g., 0-5) | The only classic ranking metric natively supporting graded GT |
| **DCG@K** | Graded relevance | Discounted Cumulative Gain |
| **Precision@K** | Binary relevance | Only look at top-k results |
| **Recall@K** | Binary relevance | |

> **NDCG formula**: $\text{DCG}@K = \sum_{i=1}^{K}\frac{2^{rel_i}-1}{\log_2(i+1)}$, $\text{NDCG}@K = \frac{\text{DCG}@K}{\text{IDCG}@K}$, where IDCG is the DCG under ideal ranking.

---

## 11. Computer Vision: Object Detection Metrics

**Requirement: GT = bounding box + class; Pred = box coordinates + class + continuous confidence score**

| Metric | Description |
|---|---|
| **IoU** | Intersection over Union |
| **AP (Average Precision)** | AUC of PR curve at various IoU thresholds |
| **AP@IoU=0.5** | COCO standard |
| **AP@IoU=0.75** | COCO standard |
| **mAP** | mean AP across classes |
| **mAP@0.5:0.95** | COCO standard, average of AP at IoU from 0.5 to 0.95 step 0.05 |

> **mAP@0.5:0.95** is the COCO detection benchmark standard, requiring AP computed at 10 different IoU thresholds (0.5, 0.55, ..., 0.95) and then averaged. This is stricter than a single AP@0.5.

---

## 12. Computer Vision: Image Segmentation Metrics

**Requirement: GT = pixel-level mask; Pred = pixel-level mask**

| Metric | Formula/Description | Description |
|---|---|---|
| **IoU / Jaccard** | $\frac{TP}{TP+FP+FN}$ | Most fundamental overlap measure for segmentation/detection |
| **Dice coefficient / F1** | $\frac{2TP}{2TP+FP+FN} = \frac{2\times\text{IoU}}{1+\text{IoU}}$ | Mathematically equivalent to F1, most common in medical image segmentation |
| **Pixel Accuracy** | Proportion of correctly classified pixels | Distorts under class imbalance (large background, small foreground) |
| **mIoU** | mean IoU across classes | Most common metric for semantic segmentation |
| **HAUSDOFF_95** | 95% Hausdorff distance | Measures maximum boundary error, often reported alongside Dice |

---

## 13. Generative Models (Images/Videos)

| Metric | Description |
|---|---|
| **FID** (Fréchet Inception Distance) | Lower is better |
| **IS** (Inception Score) | Higher is better |
| **LPIPS** (Learned Perceptual Image Patch Similarity) | Lower is better |
| **SSIM** (Structural Similarity Index) | Structural similarity, 0~1 |
| **PSNR** (Peak Signal-to-Noise Ratio) | Peak signal-to-noise ratio, dB |
| **FVD** (Fréchet Video Distance) | For video generation |

---

## 14. Natural Language Processing · Text Generation Metrics

**Requirement: GT = one or more reference texts (discrete token sequences); Pred = generated text (discrete token sequences)**

| Metric | Description |
|---|---|
| **BLEU** | n-gram precision, geometric mean + brevity penalty, classic for machine translation |
| **ROUGE-N** | n-gram recall, common for summarization tasks |
| **ROUGE-L** | Longest common subsequence |
| **METEOR** | Combines precision/recall + synonym/stem matching, correlates better with human judgment than BLEU |
| **WER** (Word Error Rate) | $\frac{S+D+I}{N}$, speech recognition |
| **CER** (Character Error Rate) | For character-level tasks like Chinese |
| **Perplexity (PPL)** | $\exp\left(-\frac{1}{N}\sum_{i=1}^{N}\log p(w_i|w_{<i})\right)$ = exp(cross-entropy), standard for language models |
| **BERTScore** | Uses pretrained model embeddings for precision/recall/F1, not surface n-gram matching |

> **BLEU vs ROUGE**: BLEU is precision-based, suitable for translation quality evaluation (limited reference translations); ROUGE is recall-based, suitable for summarization (may have multiple reference summaries). BLEU tends toward shorter outputs, ROUGE toward longer outputs.

---

## 15. Clustering Evaluation Metrics

### 15.1 With GT Labels (External)

| Metric | Description |
|---|---|
| **ARI** (Adjusted Rand Index) | Agreement corrected for random clustering, baseline is 0 |
| **NMI** (Normalized Mutual Information) | Based on mutual information, range [0,1] |
| **Silhouette Score** | Based on intra/inter-cluster distance, $(b-a)/\max(a,b)$ |
| **Calinski-Harabasz Index** | Inter/intra cluster variance ratio, higher is better |
| **Davies-Bouldin Index** | Lower is better |

### 15.2 Without GT Labels (Internal)

| Metric | Description |
|---|---|
| **Silhouette Score** | $(b-a)/\max(a,b)$ |
| **Calinski-Harabasz Index** | Inter/intra cluster variance ratio |
| **Davies-Bouldin Index** | Lower is better |

---

## 16. Representation Learning / Embedding Evaluation

| Metric | Formula/Description | Description |
|---|---|---|
| **Cosine Similarity** | $\cos(\theta) = \frac{u \cdot v}{\|u\| \|v\|}$ | |
| **Euclidean Distance** | L₂ distance | |
| **Manhattan Distance (L₁)** | L₁ distance | |

### 16.1 Retrieval / ANN (Approximate Nearest Neighbor)

| Metric | Description |
|---|---|
| **Precision@K** | |
| **Recall@K** | |
| **MRR** (Mean Reciprocal Rank) | |
| **NDCG@K** | |

---

## 17. Anomaly Detection / Novelty Detection

**Requirement: GT = normal/anomaly label; Pred = anomaly score**

| Metric | Description |
|---|---|
| **AUROC** | |
| **AUPRC** | More important in extreme imbalance |
| **F1-max** | Maximum F1 across all thresholds |
| **TPR @ FPR=x** | TPR at fixed FPR |

---

## 18. Common Pitfalls FAQ

> **Q1: My model outputs probabilities (continuous 0~1), but the paper requires F1-score. What to do?**

You must first select a decision threshold (not necessarily 0.5), convert probabilities to 0/1 hard labels, then compute F1. Be sure to note the threshold selection method in the paper (e.g., selected on validation set to maximize F1, or using Youden's J).

> **Q2: Ground truth is continuous scoring (e.g., 1-5 stars), can I directly compute AUROC?**

No. Common approaches: ① Manually threshold the GT to binary (e.g., ≥4 stars = "positive"), then compute AUROC/AUPRC, but results depend on the threshold and must be stated; ② Use metrics suitable for ordinal/continuous GT: Spearman/Kendall's tau, NDCG (ranking tasks), CCC/Pearson r (regression tasks).

> **Q3: Can Precision/Recall/F1 directly accept continuous predictions?**

In engineering, yes (libraries typically auto-binomialize at 0.5 threshold), but this is implicit thresholding, not the metric being "designed to support" continuous inputs. If you don't want to lose information due to a fixed threshold, prioritize threshold-free metrics like AUPRC/AUROC.

> **Q4: Is reporting a single metric in a paper sufficient?**

Usually not enough. Recommended combination:
- Imbalanced binary classification: AUPRC + F1 (at reasonable threshold) + AUROC, complementary
- Balanced binary classification: Accuracy + AUROC usually sufficient
- Regression: At least RMSE/MAE (interpretability) + R² or correlation coefficient (fit quality)
- Model comparison: Supplement with statistical significance tests and confidence intervals

---

## 19. Quick Reference Lookup Table

```
Prediction is {0,1}, GT is {0,1}
→ Accuracy, Precision, Recall, F1, MCC, AUROC, AUPRC, Brier Score, Kappa

Prediction is {0,1,...,K-1}, GT is {0,1,...,K-1}
→ Accuracy, Macro/Micro F1, Confusion Matrix, Log Loss, Top-k Accuracy

Prediction is multilabel, GT is multilabel
→ Exact Match, Hamming Loss, Subset F1

Prediction is continuous score, GT is survival data
→ C-index, Time-dependent AUC, Survival Brier Score

Prediction is continuous value, GT is continuous value
→ MSE, RMSE, MAE, R², Pearson r, Spearman ρ, CCC

Prediction is probability distribution, GT is sample
→ Log-Likelihood, KL Divergence, Wasserstein, MMD

Prediction is text sequence, GT is text sequence
→ BLEU, ROUGE, METEOR, TER, WER, CER, Perplexity

Prediction is image, GT is image
→ FID, IS, SSIM, PSNR, LPIPS

Prediction is box, GT is box
→ mAP, IoU, AP@0.5:0.95

Prediction is mask, GT is mask
→ mIoU, Dice, Hausdorff

Prediction is ranking, GT is relevance
→ NDCG, MRR, MAP

Prediction is embedding vector
→ Cosine Similarity, ANN Recall@K

Prediction is clustering result
→ ARI, NMI, Silhouette

Prediction is anomaly score
→ AUROC, AUPRC, F1-max

Efficiency only, not accuracy
→ FLOPs, Params, Latency, Throughput
```

---

## Appendix: Common Abbreviations

| Abbreviation | Full Name |
|---|---|
| TP | True Positive |
| TN | True Negative |
| FP | False Positive |
| FN | False Negative |
| TPR | True Positive Rate (Recall/Sensitivity) |
| TNR | True Negative Rate (Specificity) |
| FPR | False Positive Rate |
| FNR | False Negative Rate |
| PPV | Positive Predictive Value (Precision) |
| NPV | Negative Predictive Value |
| AUROC | Area Under ROC Curve |
| AUPRC | Area Under PR Curve |
| MCC | Matthews Correlation Coefficient |
| IoU | Intersection over Union |
| Dice | Dice Similarity Coefficient |
| mAP | mean Average Precision |
| NDCG | Normalized Discounted Cumulative Gain |
| MRR | Mean Reciprocal Rank |
| FID | Fréchet Inception Distance |
| IS | Inception Score |
| PPL | Perplexity |
| WER | Word Error Rate |
| CER | Character Error Rate |
| CCC | Concordance Correlation Coefficient |
| ICC | Intraclass Correlation Coefficient |
| ARI | Adjusted Rand Index |
| NMI | Normalized Mutual Information |
| SSIM | Structural Similarity Index |
| PSNR | Peak Signal-to-Noise Ratio |
| LPIPS | Learned Perceptual Image Patch Similarity |
| FVD | Fréchet Video Distance |
| PQ | Panoptic Quality |
| ECE | Expected Calibration Error |
| MCE | Maximum Calibration Error |
| Kappa | Cohen's Kappa |
| G-mean | Geometric Mean |
| KID | Kernel Inception Distance |
| AR | Average Recall |
| PCK | Percentage of Correct Keypoints |
| EPE | Endpoint Error |
| NLL | Negative Log-Likelihood |
| MMD | Maximum Mean Discrepancy |
| JSD | Jensen-Shannon Divergence |

---

*Last reviewed: 2026-07-18*  
*Editor: wuguojia*
