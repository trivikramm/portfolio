"use client"
import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-[75vh] flex flex-col justify-center relative pt-12">
      {/* Background Glow using the new brand token */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-glow rounded-full blur-[120px] -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-primary">
          Engineering <br />
          {/* New vibrant Magenta to Purple gradient */}
          <span className="bg-gradient-to-r from-brand-start to-brand-end bg-clip-text text-transparent">
            Scalable Systems.
          </span>
        </h1>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xl text-secondary max-w-2xl mb-10 leading-relaxed"
      >
        I'm {personalInfo.name}, a {personalInfo.role}. {personalInfo.tagline}
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-4"
      >
        <Link href="/projects">
          {/* Using the new button variants inheriting the updated colors */}
          <Button variant="primary" className="bg-accent-turquoise text-background hover:bg-accent-turquoise/90">
            View Projects
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" className="border-elevated text-primary hover:bg-surface">Contact Me</Button>
        </Link>
      </motion.div>
    </section>
  )
}
