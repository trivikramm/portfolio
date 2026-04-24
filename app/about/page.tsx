import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline"
import { personalInfo, education } from "@/lib/data"
import { Card } from "@/components/ui/card"

export default function About() {
  return (
    // Enterprise Fix: Added 'px-6 md:px-8' for structural gutters.
    // Made the massive Y-spacing responsive: 96px (24) on mobile, 170px on md screens.
    <div className="max-w-4xl mx-auto px-6 md:px-8 space-y-24 md:space-y-[170px] pt-32 pb-24 md:pb-[170px]">
      
      {/* About Me Intro */}
      <section className="space-y-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">About Me</h1>
          <p className="text-secondary text-xl max-w-2xl leading-relaxed font-light">
            {personalInfo.tagline}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 pt-6">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Mission</h3>
            <p className="text-secondary font-light leading-relaxed">
              To engineer intelligent, scalable systems that bridge the gap between complex AI capabilities and practical business solutions.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Philosophy</h3>
            <p className="text-secondary font-light leading-relaxed">
              Clean code, thoughtful architecture, and user-centric design are the foundations of every project I deliver.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-primary tracking-tight">Experience</h2>
        <p className="text-secondary text-lg max-w-2xl leading-relaxed font-light">
          My professional journey focused on building scalable web applications, optimizing cloud infrastructure, and integrating AI into enterprise software.
        </p>
      </section>

      <section>
        <ExperienceTimeline />
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-primary border-b border-elevated pb-6">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <Card key={edu.id} className="flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">{edu.degree}</h3>
                <p className="text-brand-normal mb-6 text-sm font-medium">{edu.institution}</p>
              </div>
              <div className="flex justify-between items-center text-sm text-secondary font-mono border-t border-elevated pt-4 mt-4">
                <span>{edu.period}</span>
                <span className="text-primary font-medium">{edu.details}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

    </div>
  )
}
