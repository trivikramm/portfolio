import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline"
import { education } from "@/lib/data"
import { Card } from "@/components/ui/card"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-24 py-12">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Experience</h1>
        <p className="text-secondary text-lg max-w-2xl leading-relaxed">
          My professional journey focused on building scalable web applications, optimizing cloud infrastructure, and integrating AI into enterprise software.
        </p>
      </section>

      <section>
        <ExperienceTimeline />
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-primary border-b border-surface pb-4">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <Card key={edu.id}>
              <h3 className="text-lg font-bold text-primary mb-2">{edu.degree}</h3>
              <p className="text-gold mb-4 text-sm">{edu.institution}</p>
              <div className="flex justify-between text-sm text-secondary font-mono">
                <span>{edu.period}</span>
                <span>{edu.details}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}