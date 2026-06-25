export interface Skill {
  name: string;
  icon?: string; // String identifier for lucide or custom icon rendering
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "SQL" }
    ]
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "NLP" },
      { name: "LLMs" },
      { name: "RAG" },
      { name: "Vector Databases" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "Scikit-Learn" },
      { name: "FastAPI" },
      { name: "LangChain" }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" }
    ]
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker" },
      { name: "GitHub Actions" },
      { name: "AWS" }
    ]
  },
  {
    category: "Development Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" }
    ]
  }
];
