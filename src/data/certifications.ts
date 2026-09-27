export interface CertificationItem {
  issuer: string;
  title: string;
  achievement?: string;
  score?: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    issuer: "NPTEL",
    title: "The Joy of Computing Using Python",
    achievement: "Elite + Gold",
    score: "93%",
  },
  {
    issuer: "Infosys Springboard",
    title: "Java Foundation Certification",
  },
];
