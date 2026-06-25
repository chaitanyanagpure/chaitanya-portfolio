export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  verificationUrl: string;
  imageUrl: string; // Issuer logo image path
  certificateUrl?: string; // Actual certificate scan path
}

export const certifications: Certification[] = [
  {
    id: "microsoft-ai-ml-professional",
    title: "Microsoft AI & ML Engineering",
    issuer: "Microsoft",
    date: "December 4, 2025",
    skills: ["AI Foundations", "Machine Learning Algorithms", "Troubleshooting Agents", "Azure AI", "Model Optimization"],
    verificationUrl: "https://coursera.org/verify/professional-cert/QJFQKR5XM9SA",
    imageUrl: "/images/certs/microsoft-logo.png",
    certificateUrl: "https://drive.google.com/file/d/1IuFOUl6WEVaAD_rDFzYMbFTyr4fzmxJV/view?usp=drive_link"
  },
  {
    id: "microsoft-ai-ml-algorithms",
    title: "AI and Machine Learning Algorithms and Techniques",
    issuer: "Microsoft",
    date: "December 3, 2025",
    skills: ["Supervised Learning", "Unsupervised Learning", "Algorithms", "Model Evaluation", "ML Pipelines"],
    verificationUrl: "https://coursera.org/verify/FAR1F1U2JH84",
    imageUrl: "/images/certs/microsoft-logo.png",
    certificateUrl: "/images/certs/microsoft-ai-ml-algorithms.jpg"
  },
  {
    id: "ibm-python-ai-development",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "September 9, 2025",
    skills: ["Python Programming", "Data Structures", "APIs", "Web Scraping", "Data Analysis"],
    verificationUrl: "https://coursera.org/verify/AV2XSTYTLILW",
    imageUrl: "/images/certs/ibm-logo.png",
    certificateUrl: "/images/certs/ibm-python-ai.jpg"
  },
  {
    id: "google-data-analytics-professional",
    title: "Google Data Analytics",
    issuer: "Google",
    date: "December 15, 2025",
    skills: ["Data Analysis", "SQL", "Tableau", "Data Presentation", "Spreadsheets", "Problem Solving"],
    verificationUrl: "https://coursera.org/verify/professional-cert/ZHTEHK1YZXRL",
    imageUrl: "/images/certs/google-logo.png",
    certificateUrl: "/images/certs/google-data-analytics-professional.jpg"
  }
];
