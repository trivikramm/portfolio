export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  tagline: string;
  github?: string;
  linkedin?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: 'Products' | 'Solutions' | 'Lab';
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  // --- New fields for the Deep Dive Page ---
  longDescription?: string;
  features?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string;
}