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
  featured?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string;
}