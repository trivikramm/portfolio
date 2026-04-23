import { ProjectGrid } from "@/components/sections/ProjectGrid"
import { projects } from "@/lib/data"

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 py-12">
      <section className="space-y-6 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">All Projects</h1>
        <p className="text-secondary text-lg leading-relaxed">
          A comprehensive look at my technical portfolio, featuring AI integrations, scalable backend architectures, and modern web interfaces.
        </p>
      </section>

      <section>
        <ProjectGrid projects={projects} />
      </section>
    </div>
  )
}
