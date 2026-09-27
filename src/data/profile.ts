export interface EducationItem {
  institution: string;
  degree: string;
  score: string;
  location?: string;
  period?: string;
}

export interface LeadershipRole {
  organization: string;
  role: string;
  description: string;
}

export interface LeadershipEvent {
  title: string;
  reach: string;
  description?: string;
}

export const PROFILE = {
  fullName: "Bondugula Varshith",
  displayName: "Varshith",
  degree: "B.Tech / B.E. Computer Science Engineering",
  institution: "Chaitanya Bharathi Institute of Technology (CBIT)",
  institutionShort: "CBIT",
  cgpa: "9.5 / 10",
  cgpaShort: "9.5",
  location: "Hyderabad, Telangana, India",
  locationShort: "Hyderabad, India",
  email: "bondugulavarshith0708@gmail.com",

  titles: [
    "Computer Science Engineering Student",
    "Software Developer",
    "Full-Stack Developer",
    "Backend Engineering Enthusiast",
    "AI/Technology Enthusiast",
  ],

  heroTagline: "Software Developer building practical digital solutions.",
  heroSupportingText:
    "Computer Science Engineering student at CBIT focused on software development, full-stack engineering, backend systems, AI, and problem solving.",

  aboutText: [
    "I'm a Computer Science Engineering student at Chaitanya Bharathi Institute of Technology with a strong academic foundation and a passion for software development, problem solving, and emerging technologies.",
    "I enjoy turning ideas into practical software solutions and continuously improving my skills through projects, internships, technical challenges, and collaborative experiences.",
    "My interests include full-stack development, backend engineering, microservices, artificial intelligence, databases, distributed systems, and data structures and algorithms.",
  ],

  aboutSidePanel: {
    education: "CBIT",
    cgpa: "9.5 / 10",
    location: "Hyderabad, India",
    focus: "Software Development",
    interests: "AI • Full Stack • Backend • DSA",
  },

  quickStats: [
    { value: "9.5/10", label: "CGPA", sublabel: "CBIT Academic Standing" },
    { value: "CBIT", label: "CSE", sublabel: "Computer Science Dept." },
    { value: "~500", label: "Students Reached", sublabel: "Girls' Safety Awareness Event" },
    { value: "~250", label: "Students Reached", sublabel: "Math Hunt Campus Event" },
  ],

  education: [
    {
      institution: "Chaitanya Bharathi Institute of Technology (CBIT)",
      degree: "B.Tech / B.E. Computer Science Engineering",
      score: "CGPA: 9.5/10",
      location: "Hyderabad, Telangana",
    },
    {
      institution: "Alphores Junior College",
      degree: "MPC (Mathematics, Physics, Chemistry)",
      score: "Score: 979/1000",
      location: "Telangana",
    },
  ] as EducationItem[],

  leadershipRoles: [
    {
      organization: "Chaitanya Srujana",
      role: "Treasurer",
      description: "Contributed to organizational coordination and student activities.",
    },
    {
      organization: "Ramanujan Math Club",
      role: "Events Team Head",
      description: "Contributed to event planning, coordination and student engagement.",
    },
  ] as LeadershipRole[],

  leadershipEvents: [
    {
      title: "Campus Self-Defense & Girls' Safety Awareness Event",
      reach: "Approximately 500 students reached",
    },
    {
      title: "Math Hunt Event",
      reach: "Approximately 250 students reached",
    },
  ] as LeadershipEvent[],

  currentlyExploring: [
    "AI & Machine Learning",
    "Full-Stack Development",
    "Backend Engineering",
    "Microservices",
    "Cloud & Distributed Systems",
    "Data Structures & Algorithms",
  ],

  howIBuildSteps: [
    {
      step: "01",
      title: "Understand",
      description: "Understand the problem, requirements and users.",
    },
    {
      step: "02",
      title: "Design",
      description: "Design the architecture, data flow and user experience.",
    },
    {
      step: "03",
      title: "Build",
      description: "Develop using appropriate frontend, backend, database and infrastructure technologies.",
    },
    {
      step: "04",
      title: "Improve",
      description: "Test, debug, optimize and continuously improve the solution.",
    },
  ],
};
