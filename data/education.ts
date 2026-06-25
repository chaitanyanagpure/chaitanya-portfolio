export interface Education {
  institution: string;
  degree: string;
  duration: string;
  score: string;
  location: string;
  certificateUrl?: string;
  highlights?: string[];
  subjects?: string[];
}

export const educationHistory: Education[] = [
  {
    institution: "Smt. Indira Gandhi College of Engineering",
    degree: "Bachelor of Engineering in Artificial Intelligence and Machine Learning",
    duration: "2023 – 2026",
    score: "CGPA: 8.4",
    location: "Navi Mumbai, Maharashtra",
    certificateUrl: "https://drive.google.com/file/d/1DI74JiWkm4Ob3qglKHNIx1QC7JUbcF_C/view?usp=drive_link",
    highlights: [
      "Graduated with honors, focusing on artificial intelligence architectures, deep neural network training pipelines, and system configurations.",
      "Capstone Project: Developed and deployed a medical diagnostic assistance tool implementing CNNs and vision transformer architectures.",
      "Led the campus Artificial Intelligence Society, hosting workshops on PyTorch model optimization and cloud ML vertex architectures."
    ],
    subjects: ["Deep Learning", "Natural Language Processing", "Computer Vision", "Reinforcement Learning", "MLOps", "Big Data Analytics"]
  },
  {
    institution: "Sanjivani KBP Polytechnic",
    degree: "Diploma in Computer Science",
    duration: "2020 – 2023",
    score: "Percentage: 79.53%",
    location: "Kopargaon, Maharashtra",
    certificateUrl: "https://drive.google.com/file/d/1Ie7OyLmMhip1hs4hkyEutFlxgjuAGVAT/view?usp=drive_link",
    highlights: [
      "Acquired core fundamentals in computer science including OOP principles, database designs, hardware systems, and systems engineering.",
      "Developed a custom school admin database utility with secure role-based controls and transaction reporting tools.",
      "Awarded outstanding merit recognition for code optimization in local inter-college algorithm hacking sprints."
    ],
    subjects: ["Data Structures & Algorithms", "Object-Oriented Programming (C++/Java)", "Database Management Systems", "Software Engineering"]
  },
  {
    institution: "De Paul English Medium School, Yeola",
    degree: "Secondary School Certificate (SSC)",
    duration: "2010 – 2020",
    score: "Percentage: 89.90%",
    location: "Yeola, Maharashtra",
    certificateUrl: "https://drive.google.com/file/d/1MCGsgK2Kq_JpCzSB1jtyw9h_63FGSAIx/view?usp=drive_link",
    highlights: [
      "Graduated secondary school under State Board curriculum with high distinction.",
      "Acclaimed academic excellence awards in Mathematics and General Sciences.",
      "Participated actively in local science club exhibitions and computational reasoning tests."
    ],
    subjects: ["Mathematics", "Science", "Social Sciences", "English & Regional Languages"]
  }
];
