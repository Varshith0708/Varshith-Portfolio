export interface ExperienceItem {
  company: string;
  role: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  projects?: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Infosys Springboard",
    role: "Virtual Internship 7.0",
    description: "Participated in a structured virtual internship focused on technical learning, software development concepts, and project-based implementation.",
    highlights: [
      "Software development",
      "Java",
      "Technical learning",
      "Project-based implementation",
      "Problem solving",
    ],
    technologies: ["Java", "Software Development Concepts", "OOP"],
  },
  {
    company: "Oasis Infobyte",
    role: "Web Development Intern",
    description: "Worked on practical web development projects focusing on responsive frontend design, interactive interfaces, and DOM manipulation.",
    projects: [
      "Responsive Landing Page",
      "Personal Portfolio Website",
      "Temperature Converter",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Responsive web development",
      "Frontend development",
      "JavaScript",
      "DOM manipulation",
      "Debugging",
      "User interface development",
    ],
  },
];
