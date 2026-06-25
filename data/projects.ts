export interface Project {
  id: string;
  title: string;
  category: string;
  filterCategories: string[]; // ['Generative AI', 'Full Stack AI', 'Computer Vision', 'MLOps', 'Data Engineering']
  description: string;
  problemStatement?: string;
  proposedSolution?: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  imageUrl: string; // Banner image
  architectureUrl: string; // Architecture preview image
  architectureDescription?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: "multi-doc-rag",
    title: "Multi-Document RAG Chatbot",
    category: "Generative AI | LLM Engineering",
    filterCategories: ["Generative AI"],
    description: "An enterprise-grade Retrieval-Augmented Generation platform that enables users to interact with multiple uploaded documents using intelligent semantic search.",
    problemStatement: "Organizations struggle to search and extract precise information from massive repositories of unstructured PDFs and manuals, leading to wasted operational hours and information silos.",
    proposedSolution: "Built an automated document parsing and vector ingestion pipeline using FastAPI, LangChain, and ChromaDB. Utilized hierarchical chunking to retain document context and implemented semantically guided context assembly, feeding clean prompt parameters to Gemini LLM for generating exact context-aware responses with source document citations.",
    features: [
      "Multi-document ingestion and pipeline management",
      "Robust PDF parsing, metadata extraction, and hierarchical chunking",
      "Vector embeddings generation and semantic search retrieval",
      "Intelligent contextual prompt assembly and response generation",
      "Multi-user authentication, secure workspaces, and chat history persistence",
      "Knowledge base management panel with document upload/deletion",
      "Containerized deployment using Docker and Docker Compose"
    ],
    technologies: ["Python", "FastAPI", "LangChain", "Gemini API", "ChromaDB", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/chaitanyanagpure/multi-document-rag-chatbot.git",
    liveDemoUrl: "https://rag.chaitanyanagpure.com",
    imageUrl: "/images/projects/rag-banner.png",
    architectureUrl: "https://drive.google.com/file/d/1Y6HtBZsBFNYeA3u702pED70yjYOdlyrM/view?usp=drive_link",
    architectureDescription: "Documents are parsed, chunked, and embedded into ChromaDB vector database. User queries invoke similarity searches; matching chunks are fed into Gemini LLM for synthesising context-aware answers, backed by history from PostgreSQL.",
    screenshots: [
      "https://drive.google.com/file/d/1SDNR2de5RjPV9Zamw0U_Dpsjs2TcHZEO/view?usp=drive_link",
      "https://drive.google.com/file/d/1jRyJDt0Pj0JMCsMxIsZVQKM4k6PgeGi9/view?usp=drive_link",
      "https://drive.google.com/file/d/1Jqj5r3rRPRw3JTHAF6EZks3Z9Z6iQ9MF/view?usp=drive_link",
      "https://drive.google.com/file/d/1YMjlqR3ttvbTSxeXcd4zHzqmopF6spdH/view?usp=drive_link",
      "https://drive.google.com/file/d/1Rn63C4DmWdYAdiv3ssbQlyT_2zlyJrrx/view?usp=drive_link",
      "https://drive.google.com/file/d/1uhrQz7jvGX-nQxhjH2KmTe-Xe5e7uVTb/view?usp=drive_link"
    ]
  },
  {
    id: "career-intelligence",
    title: "AI Powered Career Intelligence Platform",
    category: "Generative AI | Full Stack AI",
    filterCategories: ["Generative AI", "Full Stack AI"],
    description: "A modern AI-powered career assistant providing personalized career guidance, skill gap analysis, ATS resume evaluation, and customized learning roadmaps.",
    problemStatement: "Job seekers lack actionable, customized roadmaps to bridge skill gaps, often failing applicant tracking systems (ATS) because of misaligned resume structures.",
    proposedSolution: "Constructed a React and FastAPI full-stack architecture that uses Python-based document parsers to scan uploaded CVs, matches resume skill matrices against target job descriptions using advanced LLM models, and generates custom learning pathways and ATS alignment scores stored in PostgreSQL.",
    features: [
      "AI-driven career path recommendations based on skills and interests",
      "Automated ATS resume parsing and scoring against target job descriptions",
      "Detailed skill gap analysis with recommended learning resources",
      "Personalized learning roadmaps with step-by-step milestone tracking",
      "LLM-powered chat assistant for career guidance and interview prep",
      "Secure user authentication and custom profiles",
      "Interactive analytics dashboard highlighting skill progression"
    ],
    technologies: ["React.js", "FastAPI", "PostgreSQL", "Python", "LLM APIs", "REST APIs"],
    githubUrl: "https://github.com/chaitanyanagpure/AI-Powered-Career-Intelligence-Platform.git",
    liveDemoUrl: "https://careerai.chaitanyanagpure.com",
    imageUrl: "/images/projects/career-banner.png",
    architectureUrl: "https://drive.google.com/file/d/1s87MkwZ-5A160gyPOqqXNJUjqeT0jY_G/view?usp=drive_link",
    architectureDescription: "The React frontend communicates with a FastAPI gateway. Resume documents are parsed via Python backend, analyzed using Gemini/LLM APIs for gap identification, and stored alongside progress in PostgreSQL.",
    screenshots: [
      "https://drive.google.com/file/d/1JRWRdv5sq-u-RXhBe8Eq-Zfk4O67yoni/view?usp=drive_link",
      "https://drive.google.com/file/d/1ZBLZx8msNgow_qClOPyaltyJF4uF504i/view?usp=drive_link",
      "https://drive.google.com/file/d/1fFegRtGhhZ5wfF2__44EHR70ov9vyrnE/view?usp=drive_link",
      "https://drive.google.com/file/d/1Ted1CcQau2hSsfH-r2Vj8GYsBToC4_L2/view?usp=drive_link",
      "https://drive.google.com/file/d/1qk7nQz0r_H6jp42kEcO3Sr8_XCahqOpj/view?usp=drive_link",
      "https://drive.google.com/file/d/1mch0VlLSaJhtYs6P9jATEUE_q4vMS4p-/view?usp=drive_link",
      "https://drive.google.com/file/d/1awI9knKcDh22Z1BJx_c_-ODOkw1LWxby/view?usp=drive_link",
      "https://drive.google.com/file/d/1LXgN6gafYo5lVeYznTZylRuLh_Vv3pTr/view?usp=drive_link",
      "https://drive.google.com/file/d/1IV3FIe_RhpVBwV35iJlJq70kTscynLUI/view?usp=drive_link",
      "https://drive.google.com/file/d/1c2ZgoYncCme3NeuplSbcifbI2In95cmD/view?usp=drive_link",
      "https://drive.google.com/file/d/1Zd9YcWAMfLynoTUzdqo8HEIct3GtN69g/view?usp=drive_link",
    ]
  },
  {
    id: "predictwise-ai",
    title: "PredictWise AI – Customer Churn MLOps Platform",
    category: "MLOps | Machine Learning Engineering",
    filterCategories: ["MLOps"],
    description: "An end-to-end customer churn prediction platform integrating automated ML pipelines, model explainability, drift monitoring, and CI/CD deployment.",
    problemStatement: "ML models in production degrade due to data drift, and businesses struggle to trust predictive scores without clear model explainability.",
    proposedSolution: "Developed an end-to-end Machine Learning environment leveraging Scikit-Learn classifiers optimized with Optuna. Integrated MLflow for experiment logging and model registry, utilized SHAP values to explain predictive reasoning, and deployed Evidently AI drift checkers to trigger automated training cycles.",
    features: [
      "Automated training and evaluation pipelines for churn prediction",
      "Hyperparameter optimization using Optuna to select top classifiers",
      "MLflow integration for experiment tracking, parameter logs, and model registry",
      "SHAP explainability plots providing global and local feature importance",
      "Continuous data drift monitoring using Evidently AI to detect schema shifts",
      "Real-time inference API exposing predictive model scoring",
      "Automated CI/CD workflows for testing and model redeployment",
      "Dockerized container execution for portable development and scaling"
    ],
    technologies: ["Python", "Scikit-Learn", "Optuna", "MLflow", "SHAP", "Evidently AI", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/chaitanyanagpure/End-to-End-Customer-Churn-MLOps-Platform.git",
    liveDemoUrl: "https://predictwise.chaitanyanagpure.com",
    imageUrl: "/images/projects/predictwise-banner.png",
    architectureUrl: "https://drive.google.com/file/d/1OMlO02eTO3hTYc_u752JnRGxBOhSiRrI/view?usp=drive_link",
    architectureDescription: "Data enters the training pipeline tracked by MLflow. Model predictions are queried via FastAPI. Predictions are explained locally using SHAP values. Evidently AI monitors production data drift, triggering retraining cycles.",
    screenshots: [
      "https://drive.google.com/file/d/19JuI7g8bnLP8yFGapIChMqSJqOC2JT5q/view?usp=drive_link",
      "https://drive.google.com/file/d/1s5luCW8Jwtv8WbZp5lZlfpZinVAbks_-/view?usp=drive_link",
      "https://drive.google.com/file/d/1_bwzeOcgoYESHVZsNvxE6wxQTzGbl7_8/view?usp=drive_link",
      "https://drive.google.com/file/d/1lsPnyJWmkYU5LaceHnoWvezE4kOwgSfJ/view?usp=drive_link",
      "https://drive.google.com/file/d/1iTRFo5lY-njuMspF4th-JZmgH8ESg0u2/view?usp=drive_link",
      "https://drive.google.com/file/d/1k8Mtkfh3ZkM4LvCbFbf6D3o8EJxMxlqH/view?usp=drive_link",
      "https://drive.google.com/file/d/1ZwASwnAyVsxys5LMRFOQ4XTkdTkUBI0z/view?usp=drive_link",
      "https://drive.google.com/file/d/1mhhgyndg3CdkHuUE5LkO17Kw5Q7uh0OD/view?usp=drive_link",
      "https://drive.google.com/file/d/1JRrlJ-kNv_fSvSXECsptOsPmY8rjpQbo/view?usp=drive_link",
      "https://drive.google.com/file/d/1B5MVyaQrSZXC76oIsQHYtyxY_wlDiZFT/view?usp=drive_link",
      "https://drive.google.com/file/d/1s4jP9ElZ0k_BTFWn49VPArFVae_67zix/view?usp=drive_link",
      "https://drive.google.com/file/d/1MM0vXWY5WwrTOGA5djtZwNVMcNm5eFmI/view?usp=drive_link",
      "https://drive.google.com/file/d/1H-QSju1_homFPC3YSNv2T3JT4yFzn2ZK/view?usp=drive_link",
      "https://drive.google.com/file/d/1nWtgr6TUpUjgZ6p1DBuHf8hnVlbe-5e8/view?usp=drive_link",
    ]
  },
  {
    id: "medvision-ai",
    title: "MedVision AI – Medical Image Diagnosis Platform",
    category: "Computer Vision | Healthcare AI",
    filterCategories: ["Computer Vision"],
    description: "A deep learning-powered medical imaging diagnostics tool capable of detecting anomalies in X-rays or CT scans with explainable Grad-CAM overlays.",
    problemStatement: "Radiologists face heavy caseloads, and medical diagnostics require high-accuracy ML systems with visible, explainable reasoning for clinical validation.",
    proposedSolution: "Trained deep neural network vision models (DenseNet/ResNet) optimized for chest X-ray features using PyTorch. Implemented Grad-CAM (Gradient-weighted Class Activation Mapping) pipelines to map model activation states, rendering high-contrast diagnostic heatmaps overlayed on raw DICOM/PNG images in real-time.",
    features: [
      "Medical image classification for multiple disease classifications (e.g., Pneumonia)",
      "Deep Learning models (DenseNet/ResNet) optimized for medical data structures",
      "Grad-CAM (Gradient-weighted Class Activation Mapping) for explainable AI overlays",
      "Model evaluation suite displaying ROC curves, confusion matrices, and precision-recall",
      "Fast API backend for rapid image parsing and low-latency predictions",
      "Responsive frontend showing pixel-level heatmap activation on images",
      "Secure API gateways packaged into Docker containers"
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenCV", "FastAPI", "Docker", "React.js"],
    githubUrl: "https://github.com/chaitanyanagpure/Enterprise-Medical-Image-Diagnosis-AI-Platform.git",
    liveDemoUrl: "https://medvision.chaitanyanagpure.com",
    imageUrl: "/images/projects/medvision-banner.png",
    architectureUrl: "https://drive.google.com/file/d/1hTYPDW8TkSEpxHMzkUewdlhIDUGb5R1u/view?usp=drive_link",
    architectureDescription: "X-ray/CT scan images are uploaded via the client. A FastAPI service decodes images via OpenCV, feeds tensors to a fine-tuned PyTorch/TensorFlow vision model, computes Grad-CAM heatmaps, and outputs predictions with diagnostic overlays.",
    screenshots: [
      "https://drive.google.com/file/d/1Sxv9d5RpCehe1eyKHSKeCSAqi_Vp047O/view?usp=drive_link",
      "https://drive.google.com/file/d/1T0vleRunRFnFLFL36xZrnT5mULs_Fh7u/view?usp=drive_link",
      "https://drive.google.com/file/d/18vGxoHw6oFE_kmg82_CFVMfDmHv7ss1E/view?usp=drive_link",
      "https://drive.google.com/file/d/1wLS6dFqnGFFJTji227Wv8qSyKtflep4c/view?usp=drive_link",
      "https://drive.google.com/file/d/1hQfa2ppXUAIIZMBjmOEEl0fG9-wSRbrS/view?usp=drive_link",
      "https://drive.google.com/file/d/1FUyI5CQT1e1vu6H_HJC_51GuFs6ZRYW_/view?usp=drive_link",
      "https://drive.google.com/file/d/1g5KX0hQEYLOF_5HmuL9Klmwn-PU4v18b/view?usp=drive_link",
      "https://drive.google.com/file/d/1B1lycRG3oXeAVgqNZ0ES43liMvCOBoIS/view?usp=drive_link",
      "https://drive.google.com/file/d/17giT7SfcfVE169fsJ17E5Z73s57BN0S7/view?usp=drive_link",
      "https://drive.google.com/file/d/1X2e7VlcIwwuEiTeI5-kyHUfoV1qtnrKZ/view?usp=drive_link",
      "https://drive.google.com/file/d/1SF0MeXEI3ZGgjxewp-R0W1jTI09M3bO5/view?usp=drive_link",
      "https://drive.google.com/file/d/1hZT9AGr4rci47c-HqT4Xgo_8kc96lKpO/view?usp=drive_link",
      "https://drive.google.com/file/d/1frDwkEJnd_p0haOcPM0gYh_UjTTE-A8d/view?usp=drive_link",
      "https://drive.google.com/file/d/10TJ2j5utdDUKUOT7_Q1HDUvlDGNdyeI2/view?usp=drive_link",
      "https://drive.google.com/file/d/1KT7vjZxNNNP50GhkvdGbIxR4Zp9QA2Vs/view?usp=drive_link",
    ]
  },
  {
    id: "dataforge",
    title: "DataForge – Enterprise Data Engineering Platform",
    category: "Data Engineering | AI Infrastructure",
    filterCategories: ["Data Engineering"],
    description: "A scalable, automated data pipeline orchestration system built to ingest, validate, and prepare raw data for downstream machine learning training workflows.",
    problemStatement: "Machine learning workflows fail repeatedly due to dirty, schema-violating datasets, and manual ingestion slows down model deployment times.",
    proposedSolution: "Architected scalable Apache Airflow DAGs that coordinate Dockerized extraction tasks from database servers. Integrated Great Expectations validations within the ETL pipeline to enforce schema layouts and constraints before loading cleaned data layers to PostgreSQL for downstream ML training.",
    features: [
      "Automated batch data ingestion from various database sources",
      "Flexible ETL workflows built to preprocess, clean, and enrich datasets",
      "Data validation using Great Expectations to enforce column types and schemas",
      "Optimized storage and metadata registration in PostgreSQL",
      "Continuous dataset preparation outputting train/test splits for AI models",
      "Real-time pipeline monitoring, task log tracing, and workflow orchestration"
    ],
    technologies: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "FastAPI", "React.js"],
    githubUrl: "https://github.com/chaitanyanagpure/DataForge-Enterprise-Data-Engineering-Platform.git",
    liveDemoUrl: "https://dataforge.chaitanyanagpure.com",
    imageUrl: "/images/projects/dataforge-banner.png",
    architectureUrl: "https://drive.google.com/file/d/1fGk99K3skoG8xfVHmVenIkkvE8wXrA2H/view?usp=drive_link",
    architectureDescription: "Airflow coordinates Dockerized tasks that ingest data, validate constraints via Great Expectations, and write outputs to a PostgreSQL data warehouse, making structured datasets available for downstream AI models.",
    screenshots: [
      "https://drive.google.com/file/d/1Y1KVexCZqWOWKYZSv3HtvESlccDycYP7/view?usp=drive_link",
      "https://drive.google.com/file/d/19q1WpN8FQqNySE-2nskRaveK3SaMLium/view?usp=drive_link",
      "https://drive.google.com/file/d/15z7kEHA1XYbYxO1SCcqJQ5nev6mjcQAU/view?usp=drive_link",
      "https://drive.google.com/file/d/1NYlpW6ya9jxcCaTNhYsaEE1Cmvr_gPKq/view?usp=drive_link",
      "https://drive.google.com/file/d/1N1MCqHVwDA9bBw0s3QTbu9bq2FWFNf9s/view?usp=drive_link",
      "https://drive.google.com/file/d/1ueqTLO7iXhepl9xq-HJN4wJVhcgkIru4/view?usp=drive_link",
      "https://drive.google.com/file/d/1nfo9tfwxCtaIc_g_rXrct1MyDfituKqI/view?usp=drive_link",
      "https://drive.google.com/file/d/16EweF9L-36HiQ4ClLa9ZTaLu12OQdvff/view?usp=drive_link",
      "https://drive.google.com/file/d/1x41NJl28ObmsZS3qv43FaNRamPmGwAVw/view?usp=drive_link",
      "https://drive.google.com/file/d/1v12GBmt8VCs9dk4rojLJqyNsBEb7A9Qw/view?usp=drive_link",
      "https://drive.google.com/file/d/12n8HZtKhnLwCsoHz5GLk31OGKPlAQPJk/view?usp=drive_link",
      "https://drive.google.com/file/d/1RVam-Sbdnc_xSpWYhXxq3Bg4JWr9J6v0/view?usp=drive_link",
      "https://drive.google.com/file/d/1jgp8iov42_UzOTS7EP8MPesvnawZI_V3/view?usp=drive_link",
      "https://drive.google.com/file/d/1HI6wPz-4o21BCFjIDE-3KV4gW3f-vX62/view?usp=drive_link",
      "https://drive.google.com/file/d/1mKOKx7keqj4ajfcpr91TU97Xx5q3B5yn/view?usp=drive_link",
      "https://drive.google.com/file/d/1ShMfqracxKcqOv8jkhIkE0I6uyVMOhVv/view?usp=drive_link",
    ]
  }
];
