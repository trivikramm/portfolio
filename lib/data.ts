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
  {
    id: "proj-1",
    title: "Personalized LMS",
    description: "An AI-integrated Learning Management System that provides personalized educational experiences. Includes a real-time AI chatbot for student support.",
    tech: ["React.js", "Spring Boot", "Gemini API", "GCP"],
    featured: true,
  },
  {
    id: "proj-2",
    title: "Dynamic Form Generator",
    description: "A responsive tool streamlining data collection and improving accuracy through adaptable form creation, validated via comprehensive E2E testing.",
    tech: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "proj-3",
    title: "Real-Time Weather App",
    description: "Application visualizing complex meteorological data from the OpenWeather API, featuring city search autocomplete and a 5-day forecast.",
    tech: ["JavaScript", "REST APIs", "CSS3"],
    featured: true,
  }
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