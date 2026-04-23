import { HeroSection } from "@/components/sections/HeroSection"
import { ProjectGrid } from "@/components/sections/ProjectGrid"
import { projects } from "@/lib/data"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  // Filter for featured projects on the home page
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <div className="space-y-32">
      <HeroSection />

      <section id="work" className="space-y-12">
        <div className="flex justify-between items-end border-b border-surface pb-4">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Selected Work</h2>
            <p className="text-secondary">Highlighted enterprise solutions and applications.</p>
          </div>
          <Link href="/projects" className="hidden md:block">
            <Button variant="ghost">View All Work →</Button>
          </Link>
        </div>
        
        <ProjectGrid projects={featuredProjects} />
        
        <div className="md:hidden mt-8 text-center">
          <Link href="/projects">
            <Button variant="outline" className="w-full">View All Work</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}