"use client"
import { motion } from "framer-motion"
import { Project } from "@/types"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, idx) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
        >
          <Card className="h-full flex flex-col justify-between group">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-brand-start transition-colors">
                {project.title}
              </h3>
              <p className="text-secondary text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
