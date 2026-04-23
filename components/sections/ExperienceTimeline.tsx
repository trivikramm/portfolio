"use client"
import { motion } from "framer-motion"
import { experience } from "@/lib/data"

export function ExperienceTimeline() {
  return (
    <div className="space-y-12 border-l-2 border-surface ml-4 md:ml-6 py-4">
      {experience.map((exp, idx) => (
        <motion.div 
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="relative pl-8 md:pl-12"
        >
          {/* Timeline Marker */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-brand-start rounded-full ring-4 ring-background" />
          
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2">
            <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
            <span className="text-sm font-mono text-brand-end bg-brand-start/10 px-3 py-1 rounded-full w-fit">
              {exp.period}
            </span>
          </div>
          
          <h4 className="text-md text-gold mb-4 font-medium">{exp.company}</h4>
          
          <ul className="space-y-3 text-secondary">
            {exp.description.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
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
