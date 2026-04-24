"use client"
import { ProjectGrid } from "@/components/sections/ProjectGrid"
import { AnimatedWaves } from "@/components/ui/AnimatedWaves"
import { projects } from "@/lib/data"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <div className="min-h-screen bg-background">
      
      {/* HERO SECTION
        relative and overflow-hidden perfectly crop the moving 3D ribbons 
      */}
      <section className="relative bg-hero-gradient pt-40 pb-32 px-6 rounded-b-[40px] mb-24 transition-colors duration-300 overflow-hidden">
        
        {/* Background Ambient Ribbons */}
        <AnimatedWaves />

        {/* Foreground Content - The relative z-10 puts this text ABOVE the waves */}
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-light text-primary tracking-tight drop-shadow-sm" 
            style={{ letterSpacing: '-0.03em' }}
          >
            Engineering <span className="font-serif italic text-brand-normal">scalable</span> systems
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto font-light leading-relaxed drop-shadow-sm"
          >
            I'm Trivikram Majjari, a Full Stack Developer. Engineering scalable web applications, cloud infrastructure, and integrating AI solutions for enterprise environments.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="pt-8"
          >
            <Link 
              href="/projects" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium bg-brand-dark text-white rounded-full hover:bg-opacity-90 transition-all uppercase tracking-wider shadow-xl shadow-brand-dark/20"
            >
              Explore My Lab
            </Link>
          </motion.div>
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
