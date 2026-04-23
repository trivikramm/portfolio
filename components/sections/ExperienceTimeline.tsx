"use client"
import { motion } from "framer-motion"
import { experience } from "@/lib/data"

export function ExperienceTimeline() {
  return (
    <div className="relative space-y-16 ml-4 md:ml-6 pb-8 pt-2">
      {/* Unbreakable Continuous Vertical Line 
        Positioned exactly in the center of the dots 
      */}
      <div className="absolute left-[4px] top-4 bottom-0 w-[2px] bg-elevated z-0" />
      
      {experience.map((exp, idx) => (
        <motion.div 
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="relative pl-10 md:pl-14"
        >
          {/* Perfectly aligned timeline dot */}
          <div className="absolute left-[-1px] top-2.5 w-3 h-3 bg-brand-normal rounded-full ring-[6px] ring-background z-10" />
          
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-4">
            <h3 className="text-2xl font-semibold text-primary tracking-tight">{exp.role}</h3>
            {/* Outline pill for dates to match AI21 clean aesthetic */}
            <span className="text-xs font-mono text-primary border border-elevated bg-surface px-4 py-1.5 rounded-full w-fit tracking-wider">
              {exp.period}
            </span>
          </div>
          
          <h4 className="text-lg text-secondary mb-6 font-medium">{exp.company}</h4>
          
          <ul className="space-y-4 text-secondary">
            {exp.description.map((item, i) => (
              <li key={i} className="flex gap-4 text-[15px] leading-relaxed font-light">
                <span className="text-brand-normal mt-0.5 opacity-70">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}