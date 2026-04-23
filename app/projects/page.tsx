import { ProjectGrid } from "@/components/sections/ProjectGrid"
import { projects } from "@/lib/data"

export default function Projects() {
  // Categorize the projects
  const labProjects = projects.filter(p => p.category === 'Lab')
  const solutionProjects = projects.filter(p => p.category === 'Solutions')
  const productProjects = projects.filter(p => p.category === 'Products')

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 space-y-32">
      {/* AI21 Style Page Header */}
      <section className="max-w-6xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-light text-primary tracking-tight" style={{ letterSpacing: '-0.03em' }}>
          My <span className="font-serif italic text-brand-normal">Developer</span> Hub
        </h1>
        <p className="text-xl text-secondary max-w-2xl mx-auto font-light">
          A comprehensive look at my technical portfolio, featuring cutting-edge AI integrations, scalable cloud architectures, and modern web interfaces.
        </p>
      </section>

      {/* Category: LAB */}
      <section className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="border-b border-elevated pb-4">
          <h2 className="text-3xl font-medium text-primary">Lab (AI & ML)</h2>
          <p className="text-secondary mt-2 font-light">Experimental and production-grade artificial intelligence applications.</p>
        </div>
        <ProjectGrid projects={labProjects} />
      </section>

      {/* Category: SOLUTIONS */}
      <section className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="border-b border-elevated pb-4">
          <h2 className="text-3xl font-medium text-primary">Solutions (Cloud & DevOps)</h2>
          <p className="text-secondary mt-2 font-light">Scalable infrastructure, serverless architectures, and deployment pipelines.</p>
        </div>
        <ProjectGrid projects={solutionProjects} />
      </section>

      {/* Category: PRODUCTS */}
      <section className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="border-b border-elevated pb-4">
          <h2 className="text-3xl font-medium text-primary">Products (Web & Apps)</h2>
          <p className="text-secondary mt-2 font-light">Full-stack web applications, dynamic interfaces, and user-centric platforms.</p>
        </div>
        <ProjectGrid projects={productProjects} />
      </section>
    </div>
  )
}
