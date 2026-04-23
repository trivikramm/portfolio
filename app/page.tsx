import { ProjectGrid } from "@/components/sections/ProjectGrid"
import { projects } from "@/lib/data"
import Link from "next/link"

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <div className="min-h-screen bg-background">
      {/* AI21 Style Warm Gradient Hero */}
      <section className="bg-hero-gradient pt-32 pb-24 px-6 rounded-b-[40px] mb-24 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-light text-primary tracking-tight" style={{ letterSpacing: '-0.03em' }}>
            Engineering <span className="font-serif italic text-brand-normal">scalable</span> systems
          </h1>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto font-light leading-relaxed">
            I'm Trivikram Majjari, a Full Stack Developer. Engineering scalable web applications, cloud infrastructure, and integrating AI solutions for enterprise environments.
          </p>
          <div className="pt-8">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium bg-brand-dark text-white rounded-full hover:bg-opacity-90 transition-all uppercase tracking-wider"
            >
              Explore My Lab
            </Link>
          </div>
        </div>
      </section>

      {/* AI21 Style Content Section */}
      <section className="max-w-6xl mx-auto px-6 space-y-16 pb-32">
        <div className="flex justify-between items-end border-b border-elevated pb-6">
          <div>
            <h2 className="text-3xl font-medium text-primary mb-2">Featured Solutions</h2>
          </div>
          <Link href="/projects" className="hidden md:flex items-center gap-2 text-primary hover:text-brand-dark transition-colors font-medium">
            View all <span className="text-xl">↗</span>
          </Link>
        </div>

        <ProjectGrid projects={featuredProjects} />
      </section>
    </div>
  )
}