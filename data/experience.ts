
export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  certificateUrl?: string;
  localImageUrl?: string;
  skills?: string[];
}

export const experiences: Experience[] = [
  {
    company: "Velox Solutions Pvt. Ltd.",
    role: "AI/ML Intern",
    duration: "November 2026 – Present",
    location: "Vashi, Navi Mumbai, Maharashtra",
    responsibilities: [
      "Working on the development of an AI-Driven Incident Response Automation System to enable intelligent security incident detection, analysis, and automated response.",

      "Researching and developing User and Entity Behavior Analytics (UEBA) capabilities to identify anomalous behavior, suspicious activities, and potential cybersecurity threats.",

      "Exploring machine learning algorithms for behavioral profiling, anomaly detection, risk scoring, and intelligent threat identification.",

      "Contributing to the design of AI-powered security workflows, data processing pipelines, and automated incident response mechanisms."
    ],
    skills: [
      "Python",
      "Artificial Intelligence",
      "Machine Learning",
      "UEBA",
      "Anomaly Detection",
      "Behavioral Analytics",
      "Cybersecurity",
      "Incident Response Automation",
      "Threat Detection"
    ]
  },
  {
    company: "Reliance Jio",
    role: "Business Analyst Intern",
    duration: "June 2025 – December 2025",
    location: "Navi Mumbai, Maharashtra",
    responsibilities: [
      "Analyzed complex business processes and datasets to uncover actionable insights for product optimization.",
      "Created dynamic reports, data dashboards, and detailed business documentation to support strategic decision-making.",
      "Collaborated with cross-functional product, development, and data teams to improve workflow efficiency and system accuracy.",
      "Designed and executed process optimization strategies that reduced manual data reconciliation times."
    ],
    certificateUrl: "https://drive.google.com/file/d/1_A-L7N50mFrLTW1sdH8n0oZiIzfA-3Q5/view?usp=drive_link",
    localImageUrl: "/images/certs/jio-certificate.png",
    skills: [
      "Python",
      "SQL",
      "Power BI",
      "Advanced Excel",
      "Process Optimization",
      "Data Modeling",
      "Business Intelligence"
    ]
  }
];
