"use client"
import { motion } from "framer-motion"
import { experience } from "@/lib/data"

export function ExperienceTimeline() {
  return (
    <div className="space-y-16 border-l-2 border-elevated ml-4 md:ml-6 py-4">
      {experience.map((exp, idx) => (
        <motion.div 
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="relative pl-8 md:pl-12"
        >
          {/* Timeline Marker - Vibrant Magenta */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-brand-end rounded-full ring-4 ring-background" />
          
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2">
            <h3 className="text-2xl font-bold text-primary">{exp.role}</h3>
            {/* Turquoise pill for dates */}
            <span className="text-sm font-mono text-accent-turquoise bg-accent-turquoise/10 px-3 py-1 rounded-full w-fit border border-accent-turquoise/20">
              {exp.period}
            </span>
          </div>
          
          <h4 className="text-lg text-secondary mb-6 font-medium">{exp.company}</h4>
          
          <ul className="space-y-4 text-secondary">
            {exp.description.map((item, i) => (
              <li key={i} className="flex gap-4 text-base leading-relaxed">
                <span className="text-brand-start mt-0.5">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}
