import { personalInfo } from "@/lib/data"

export function Footer() {
  return (
    <footer className="border-t border-surface mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-secondary text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm">
          <a href={personalInfo.github} className="text-secondary hover:text-primary transition-colors">GitHub</a>
          <a href={personalInfo.linkedin} className="text-secondary hover:text-primary transition-colors">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`} className="text-secondary hover:text-primary transition-colors">Email</a>
        </div>
      </div>
    </footer>
  )
}