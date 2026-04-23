"use client"
import { motion } from "framer-motion"
import { Project } from "@/types"
import { Card } from "@/components/ui/card"

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, idx) => (
        <motion.div
          key={project.id}
          id={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          className="scroll-mt-32"
        >
          <Card className="h-full flex flex-col justify-between group relative">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-medium text-primary group-hover:text-brand-dark transition-colors pr-4">
                  {project.title}
                </h3>
                <span className="text-secondary group-hover:text-brand-dark transition-colors text-xl font-light">
                  ↗
                </span>
              </div>
              <p className="text-secondary text-sm mb-8 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-secondary bg-elevated/50 px-2.5 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
