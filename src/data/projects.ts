export interface ProjectItem {
  id: string;
  title: string;
  conceptName?: string;
  description: string;
  coreConcept?: string;
  category: ("Full Stack" | "Backend" | "Frontend" | "AI / ML")[];
  technologies: string[];
  features: string[];
  problem?: string;
  solution?: string;
  architectureNodes?: string[];
  isFeatured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "healthcare-platform",
    title: "Healthcare Management Platform",
    conceptName: "MediSphere Concept",
    description:
      "An AI-enabled healthcare management platform focused on clinical operations and preventive healthcare. The platform brings together patient information, clinical records, health trends, wearable/IoT data and AI-assisted risk analysis to help healthcare professionals identify meaningful patterns and make informed decisions.",
    coreConcept: "Prevent before it becomes serious.",
    category: ["Full Stack", "Backend", "AI / ML"],
    isFeatured: true,
    technologies: [
      "Java",
      "Spring Boot",
      "Microservices",
      "React",
      "MongoDB",
      "Apache Kafka",
      "Keycloak",
      "Docker",
      "FHIR",
      "TensorFlow Federated",
    ],
    features: [
      "Patient management & clinical data management",
      "Comprehensive patient history & health trends tracking",
      "Wearable & IoT health data ingestion",
      "AI-assisted risk analysis & patient-specific baseline analysis",
      "Intuitive Doctor Dashboard for decision support",
      "Role-based access control & secure authentication via Keycloak",
      "Scalable microservice architecture",
      "FHIR-based patient data interoperability",
    ],
    problem:
      "Clinical operations often suffer from fragmented patient data across disparate systems, making early risk detection and holistic patient tracking difficult for healthcare providers.",
    solution:
      "Unified clinical operations into a microservice-driven platform integrating wearable/IoT data streaming, FHIR standards, and AI-assisted risk analysis to empower preventive care.",
    architectureNodes: [
      "Patient / Wearable Data",
      "Data Processing",
      "Apache Kafka",
      "Microservices",
      "AI / Risk Analysis",
      "Doctor Dashboard",
    ],
  },
  {
    id: "financial-risk-platform",
    title: "Smart Financial Risk & Fraud Intelligence Platform",
    description:
      "A software platform focused on analyzing financial information, identifying potential risk patterns, and supporting fraud intelligence through data-driven analysis.",
    category: ["Backend"],
    isFeatured: false,
    technologies: [
      "Java",
      "Spring Boot",
      "SQL",
      "Database Integration",
      "Backend Architecture",
    ],
    features: [
      "Financial risk analysis",
      "Fraud intelligence pattern identification",
      "Data-driven financial insights",
      "Backend development & database integration",
      "Scalable backend architecture",
    ],
    problem:
      "Detecting fraudulent financial transactions and evaluating risk patterns requires efficient data analysis and structured backend architecture.",
    solution:
      "Engineered a scalable backend system for evaluating financial datasets, flagging suspicious patterns, and generating actionable risk intelligence.",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website designed to showcase technical skills, projects, experience and professional background.",
    category: ["Frontend"],
    isFeatured: false,
    technologies: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Responsive, recruiter-friendly design",
      "Interactive dark-first UI & glassmorphic aesthetics",
      "Centralized configuration & modular components",
      "Filtered project showcase & deep-dive modals",
    ],
    problem:
      "Presenting a comprehensive technical identity, academic performance, and engineering experience in a clean, high-performance web interface.",
    solution:
      "Designed and developed a production-ready developer portfolio with dynamic layout transitions, dark theme, and structured technical data.",
  },
  {
    id: "temperature-converter",
    title: "Temperature Converter",
    description:
      "A responsive web application that converts temperatures between Celsius, Fahrenheit and Kelvin.",
    category: ["Frontend"],
    isFeatured: false,
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Celsius conversion",
      "Fahrenheit conversion",
      "Kelvin conversion",
      "Interactive user interface",
      "JavaScript conversion logic",
    ],
    problem:
      "Users need quick and reliable multi-unit temperature conversions with immediate visual feedback.",
    solution:
      "Built a lightweight, responsive web application featuring real-time input event listeners and dynamic DOM updates.",
  },
];
