import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline"
import { education } from "@/lib/data"
import { Card } from "@/components/ui/card"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-[170px] py-12 pb-[170px]">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">Experience</h1>
        <p className="text-secondary text-xl max-w-2xl leading-relaxed">
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
            <Card key={edu.id}>
              <h3 className="text-lg font-bold text-primary mb-2">{edu.degree}</h3>
              <p className="text-accent-yellow mb-6 text-sm font-medium">{edu.institution}</p>
              <div className="flex justify-between text-sm text-secondary font-mono border-t border-elevated pt-4">
                <span>{edu.period}</span>
                <span className="text-brand-start">{edu.details}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}