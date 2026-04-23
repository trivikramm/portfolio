import { notFound } from 'next/navigation'
import { projects } from '@/lib/data'
import Link from 'next/link'

// This tells Next.js to generate the dynamic routes based on the ID
export default function ProjectCaseStudy({ params }: { params: { id: string } }) {
  // Find the exact project from your data based on the URL
  const project = projects.find((p) => p.id === params.id)

  // If someone types a wrong URL, show the 404 page
  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Navigation & Header */}
        <div className="space-y-8">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-brand-normal transition-colors font-medium">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Developer Hub
          </Link>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold tracking-wider text-brand-dark uppercase bg-elevated/30 px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-primary tracking-tight" style={{ letterSpacing: '-0.03em' }}>
              {project.title}
            </h1>
            <p className="text-xl text-secondary font-light leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-6 border-t border-elevated">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand-dark text-white rounded-md hover:bg-opacity-90 transition-all text-sm font-medium flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              View Live Application
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-surface border border-elevated text-primary rounded-md hover:border-brand-normal transition-all text-sm font-medium flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              View Source Code
            </a>
          )}
        </div>

        {/* Deep Dive Architecture / Description */}
        <div className="space-y-12 pt-12">
          {project.longDescription && (
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-primary">Architecture & Overview</h2>
              <p className="text-lg text-secondary font-light leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          )}

          {project.features && (
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-primary">Key Engineering Features</h2>
              <ul className="space-y-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-secondary font-light text-lg">
                    <span className="text-brand-normal mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Breakdown */}
          <div className="space-y-4 pt-8">
            <h2 className="text-2xl font-medium text-primary">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-surface border border-elevated rounded-lg text-sm text-primary font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
