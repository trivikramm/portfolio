import { HeroSection } from "@/components/sections/HeroSection"
import { ProjectGrid } from "@/components/sections/ProjectGrid"
import { projects } from "@/lib/data"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  // Filter for featured projects on the home page
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <div className="space-y-[170px] pb-[170px]">
      <HeroSection />

      <section id="work" className="space-y-16">
        <div className="flex justify-between items-end border-b border-elevated pb-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">Selected Work</h2>
            <p className="text-secondary text-lg">Highlighted enterprise solutions and applications.</p>
          </div>
          <Link href="/projects" className="hidden md:block">
            <Button variant="ghost" className="text-accent-turquoise hover:text-accent-turquoise/80">View All Work →</Button>
          </Link>
        </div>
        
        <ProjectGrid projects={featuredProjects} />
        
        <div className="md:hidden mt-12 text-center">
          <Link href="/projects">
            <Button variant="outline" className="w-full border-elevated text-primary">View All Work</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}