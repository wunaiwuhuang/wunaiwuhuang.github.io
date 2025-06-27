// projectsData.js
const projects = [
    {
      id: "project1",
      title: "Pan-Cancer Atlas of TCGA ipaQTM",
      type: "Independent project",
      start: "2025-03",
      end: "Present",
      github: "https://github.com/wunaiwuhuang/ipaQTM",
      description: "Investigated the relationship between DNA methylation and intronic pre-mRNA polyadenylation (IPA) across 23 cancer types using TCGA data, and further explored underlying mechanisms including trans effects from genes such as CCAR2, CPSF1, and ZC3H3, as well as cis effects involving DNA structure and transcription factor binding (e.g., CTCF). Constructed a pan-cancer ipaQTM map identifying over 500,000 cis-/trans- associations and discovered thousands of putative IPA regulators."
    },
    {
      id: "project2",
      title: "Comprehensive Benchmark of DNN-Based pMHC Predictors",
      type: "Independent project",
      start: "2024-09",
      end: "2025-01",
      github: "https://github.com/wunaiwuhuang/MHCbenchmark",
      description: "Benchmarked 17 state-of-the-art DNN-based tools for HLA-I peptide binding prediction using a self-curated dataset of 290,000+ peptides across 44 alleles. Assessed model accuracy, robustness, and interpretability; incorporated SHAP and LIME to reveal internal mechanisms and feature contributions. Found self-attention models achieved best overall performance, while capsule-based models showed strong generalizability. Provided actionable guidelines for model selection and clinical immunoinformatics tools."
    },
    {
      id: "project3",
      title: "The role of HADH Isoform 3 in Endometrial Cancer",
      type: "Independent project",
      start: "2023-03",
      end: "2024-08",
      github: null,
      description: "Identified the link between the fatty acid metabolism gene HADH and endometrial cancer (EC) using RNA-seq, genomics, and metabolomics data analysis. Discovered HADH isoform 3 is downregulated in EC through DDX3X suppression, leading to activation of the MEK-ERK signaling pathway and promotion of malignant EC phenotypes. Demonstrated the therapeutic potential of HADH as a biomarker for EC, and its role in tumor infiltration and microenvironment construction."
    },
    {
      id: "project4",
      title: "Glycolysis-Related Subtypes in Hepatocellular Carcinoma",
      type: "Collaborative project",
      start: "2025-03",
      end: "Present",
      github: null,
      description: "Identified key glycolysis-related genes (e.g., SMG1, SRRM2, STAG1) associated with hepatocellular carcinoma (HCC) progression through integrative analysis of RNA-seq, somatic mutation, and DNA methylation data. Constructed a glycolytic gene signature using PCA and CatBoost-based feature selection from 30 candidate genes, and developed a molecular subtyping model based on non-negative matrix factorization (NMF). This model stratified patients into clinically distinct subtypes with significant differences in survival, tumor stage, and metabolic activity."
    },
    {
      id: "project5",
      title: "The role of Raptor in Post-Ischemic Angiogenesis",
      type: "Collaborative project",
      start: "2022-04",
      end: "2023-08",
      github: null,
      description: "Investigated the role of Raptor, a core component of the mTORC1 complex, in post-ischemic angiogenesis using both in vivo and in vitro models. Explored the contribution of mTORC1 signaling in vascular regeneration, providing novel insights into the molecular regulation of ischemia-induced angiogenesis."
    },
    {
      id: "project6",
      title: "The role of Annexin A2 in Hepatocarcinogenesis",
      type: "Collaborative project",
      start: "2022-04",
      end: "2023-08",
      github: null,
      description: "Investigated the differential roles of ANXA2 in normal liver regeneration and hepatocellular carcinoma (HCC) development. Identified ANXA2 upregulates cholesterol biosynthesis, enhancing hepatocyte proliferation via increased intracellular cholesterol. Combined transcriptomic and metabolomic approaches to explore how ANXA2-mediated cholesterol regulation contributes to HCC progression."
    }
  ];
  