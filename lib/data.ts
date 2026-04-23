import { PersonalInfo, Experience, Project, Education } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Trivikram Majjari",
  role: "Full Stack Developer",
  email: "trivikram100699@gmail.com",
  phone: "+91-8179048058",
  tagline: "Engineering scalable web applications, cloud infrastructure, and integrating AI solutions for enterprise environments.",
  github: "#", // Add your link here
  linkedin: "#", // Add your link here
};

export const experience: Experience[] = [
  {
    id: "exp-1",
    role: "Full Stack Developer",
    company: "Enterprise Software Solutions Provider",
    period: "Oct 2025 - Present",
    location: "Trivandrum, India",
    description: [
      "Engineered scalable web applications using TypeScript and PostgreSQL, focusing on type-safe architecture and optimized database performance for high-concurrency environments.",
      "Orchestrated end-to-end deployment lifecycle by configuring and managing GCP Virtual Machines (Compute Engine), achieving 99.9% uptime through proactive monitoring.",
      "Streamlined release management cycles using Git and Cloud Build CI/CD pipelines for rapid, error-free deployment."
    ]
  },
  {
    id: "exp-2",
    role: "Developer I - Software Engineering",
    company: "Global IT Services Firm",
    period: "Mar 2025 - July 2025",
    location: "Trivandrum, India",
    description: [
      "Developed a Personalized Learning Management System (LMS) as a Capstone Project, analyzing user requirements to significantly improve engagement.",
      "Collaborated with cross-functional teams to integrate an AI-powered chatbot using Google Cloud's Gemini API within the LMS for personalized student assistance.",
      "Performed root cause analysis of technical issues and authored comprehensive technical documentation and user guides."
    ]
  },
  {
    id: "exp-3",
    role: "Developer I - Software Engineering Trainee",
    company: "Global IT Services Firm",
    period: "Nov 2024 - Feb 2025",
    location: "Remote",
    description: [
      "Gained proficiency in full-stack Java development, mastering tools and frameworks including Spring Boot, Hibernate, REST APIs, microservices, and ReactJS."
    ]
  },
  {
    id: "exp-4",
    role: "Salesforce Developer Virtual Intern",
    company: "Virtual Tech Internship Platform",
    period: "May 2023 - July 2023",
    location: "Remote",
    description: [
      "Designed and implemented secure, scalable business logic using Apex (triggers and controllers) and created modern UIs with Lightning Web Components (LWC).",
      "Configured advanced Salesforce security settings, including sharing rules and permission sets."
    ]
  }
];

export const projects: Project[] = [
  // --- LAB (AI & ML) ---
  {
    id: "proj-jamba",
    title: "Long Context AI Apps with Jamba",
    description: "Built production-grade AI applications leveraging the Jamba model for extended context windows and complex reasoning.",
    tech: ["AI", "Jamba", "LLMs"],
    category: "Lab",
    featured: true,
  },
  {
    id: "proj-vet",
    title: "Voice-Powered AI Vet Assistant",
    description: "An interactive, voice-driven AI assistant designed to aid veterinary practices with preliminary diagnostics and workflow automation.",
    tech: ["TypeScript", "Voice AI", "Next.js"],
    category: "Lab",
    featured: true,
  },
  {
    id: "proj-agent",
    title: "AgentHire",
    description: "A JavaScript-based platform utilizing autonomous AI agents to streamline and automate recruitment workflows.",
    tech: ["JavaScript", "AI Agents"],
    category: "Lab",
  },
  {
    id: "proj-crisis",
    title: "Crisis Resource Finder",
    description: "A specialized platform built to quickly locate and allocate resources during critical emergency situations.",
    tech: ["TypeScript", "React"],
    category: "Lab",
  },

  // --- SOLUTIONS (Cloud & Infrastructure) ---
  {
    id: "proj-serverless-api",
    title: "Serverless REST API",
    description: "Highly scalable serverless architecture utilizing AWS DynamoDB and API Gateway for optimal performance.",
    tech: ["TypeScript", "AWS API Gateway", "DynamoDB"],
    category: "Solutions",
    featured: true,
  },
  {
    id: "proj-alb",
    title: "Scalable Web App with ALB",
    description: "Infrastructure as Code (IaC) deployment of a highly available web application using Application Load Balancers and Auto Scaling groups.",
    tech: ["HCL", "Terraform", "AWS EC2"],
    category: "Solutions",
    featured: true,
  },
  {
    id: "proj-azure",
    title: "Azure AI Projects",
    description: "A collection of machine learning and artificial intelligence solutions deployed directly on Microsoft Azure infrastructure.",
    tech: ["Python", "Azure AI"],
    category: "Solutions",
  },
  {
    id: "proj-img",
    title: "Serverless Image Processing",
    description: "Event-driven Python application that automatically processes and optimizes images upon cloud upload.",
    tech: ["Python", "AWS Lambda", "S3"],
    category: "Solutions",
  },

  // --- PRODUCTS (Web & Apps) ---
  {
    id: "proj-dynamic-form",
    title: "Dynamic Form Generator",
    description: "Engineered a user-friendly and responsive dynamic form generator that streamlines enterprise data collection.",
    tech: ["TypeScript", "React", "Next.js"],
    category: "Products",
    featured: true,
  },
  {
    id: "proj-freelance",
    title: "Freelance Jobs WebApp",
    description: "A sleek, responsive web application connecting freelancers with opportunities, featuring modern CSS architectures.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Products",
  },
  {
    id: "proj-auth",
    title: "JWT Auth & Axum REST API",
    description: "Secure authentication systems built with JSON Web Tokens and robust user management endpoints.",
    tech: ["JavaScript", "Axum", "Security"],
    category: "Products",
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Technology - CSE (Data Science)",
    institution: "Gandhi Institute of Technology and Management (GITAM)",
    period: "2020 - 2024",
    details: "CGPA: 8.81"
  }
];