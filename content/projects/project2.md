---
title: "Comprehensive Benchmark of DNN-Based pMHC Predictors"
date: 2024-09-01
tags: ["Immunoinformatics", "Deep Learning", "pMHC", "XAI", "Benchmark"]
categories: ["Project"]
type: "Independent Project"
github: "https://github.com/wunaiwuhuang/MHCbenchmark"
period: "Sep. 2024 — Jan. 2025"
---

- **Conducted a comprehensive benchmark of deep learning models for peptide-HLA (pMHC) binding prediction.** Built an independent dataset of 290,000+ peptides across 44 alleles, carefully curated to avoid overlap with training sets, and used it as a gold-standard benchmark.
- **Systematically evaluated 17 state-of-the-art predictors,** including conventional DNNs, attention-based architectures, and capsule networks. Compared predictive accuracy, robustness across alleles, and computational efficiency, and applied SHAP/LIME to dissect residue-level feature contributions. Found that self-attention models (STMHCpan, BigMHC) delivered the best overall performance, while models trained on eluted ligand data showed superior generalizability.
- **Applied a range of computational and experimental techniques,** including dataset curation, deep learning model evaluation, and explainable AI analysis.
