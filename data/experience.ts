export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  certificateUrl?: string;
  skills?: string[];
}

export const experiences: Experience[] = [
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
    certificateUrl: "https://drive.google.com/file/d/1JqjW_LGCsdYGmSqOuVKu1diqvNg-q_Cg/view?usp=drive_link",
    skills: ["Python", "SQL", "Power BI", "Advanced Excel", "Process Optimization", "Data Modeling", "Business Intelligence"]
  }
];
