export interface SkillCategory {
  category: string;
  skills: { name: string; iconName?: string }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "PROGRAMMING",
    skills: [
      { name: "C++" },
      { name: "C" },
      { name: "Python" },
      { name: "Java" },
      { name: "JavaScript" },
    ],
  },
  {
    category: "COMPUTER SCIENCE",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Object-Oriented Programming" },
      { name: "Operating Systems" },
      { name: "Database Management Systems" },
    ],
  },
  {
    category: "FRONTEND",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
    ],
  },
  {
    category: "BACKEND",
    skills: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Microservices" },
    ],
  },
  {
    category: "DATABASES",
    skills: [
      { name: "MongoDB" },
      { name: "SQL" },
    ],
  },
  {
    category: "MESSAGING / DISTRIBUTED SYSTEMS",
    skills: [
      { name: "Apache Kafka" },
    ],
  },
  {
    category: "SECURITY",
    skills: [
      { name: "Keycloak" },
      { name: "JWT" },
      { name: "Role-Based Access Control" },
    ],
  },
  {
    category: "TOOLS / DEPLOYMENT",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
    ],
  },
];
