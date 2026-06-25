export interface PersonalInfo {
  name: string;
  titles: string[];
  statement: string;
  summary: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  specialties: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Chaitanya Nagpure",
  titles: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Full Stack AI Developer"
  ],
  statement: "Building production-grade AI systems that transform complex data into intelligent real-world solutions.",
  summary: "I am an AI Engineer passionate about developing production-grade AI applications that solve real-world challenges. My expertise includes Machine Learning, Deep Learning, Natural Language Processing, Large Language Models, Retrieval-Augmented Generation, and Full Stack AI development. I focus on building scalable AI solutions using clean architecture, APIs, databases, cloud technologies, and modern software engineering practices.",
  email: "chaitanyanagpure64791@gmail.com",
  location: "Maharashtra, India",
  github: "https://github.com/chaitanyanagpure",
  linkedin: "https://www.linkedin.com/in/chaitanyanagpure",
  resumeUrl: "https://drive.google.com/file/d/14U4Hr9f5KY8K2dengVnPO0hYUxamj_e9/view?usp=drive_link",
  specialties: [
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "LLM Applications",
    "RAG Systems",
    "Scalable AI Engineering"
  ]
};
