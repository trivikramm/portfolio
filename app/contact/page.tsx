"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulating API call for the demo request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Enterprise Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10 lg:pr-10"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-light text-primary tracking-tight" style={{ letterSpacing: '-0.03em' }}>
                Request a <span className="font-serif italic text-brand-normal">Demo</span>
              </h1>
              <p className="text-xl text-secondary font-light leading-relaxed">
                Discover how custom AI integrations, serverless cloud architectures, and scalable full-stack applications can accelerate your business operations.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-elevated">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">What you can expect:</h3>
              
              <ul className="space-y-5">
                {[
                  "Deep dive into production-grade AI Apps (Jamba & Agentic AI).",
                  "Architectural review of highly-available AWS/GCP infrastructures.",
                  "Live walkthrough of Enterprise React & Next.js applications.",
                  "Direct consultation on integrating AI into your existing workflows."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-secondary font-light">
                    <span className="text-brand-normal mt-1">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-10">
              <p className="text-sm text-secondary font-light">
                Prefer to email directly? <br />
                <a href={`mailto:${personalInfo.email}`} className="text-brand-normal font-medium hover:text-brand-dark transition-colors">
                  {personalInfo.email}
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right Column: The Lead Capture Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-surface border border-elevated rounded-2xl p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-medium text-primary mb-8">Get in touch</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-secondary">First Name *</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      className="w-full bg-background border border-elevated rounded-md px-4 py-3 text-primary focus:outline-none focus:border-brand-normal focus:ring-1 focus:ring-brand-normal transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-secondary">Last Name *</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      required
                      className="w-full bg-background border border-elevated rounded-md px-4 py-3 text-primary focus:outline-none focus:border-brand-normal focus:ring-1 focus:ring-brand-normal transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-secondary">Work Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-background border border-elevated rounded-md px-4 py-3 text-primary focus:outline-none focus:border-brand-normal focus:ring-1 focus:ring-brand-normal transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-secondary">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full bg-background border border-elevated rounded-md px-4 py-3 text-primary focus:outline-none focus:border-brand-normal focus:ring-1 focus:ring-brand-normal transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-secondary">How can I help you? *</label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    className="w-full bg-background border border-elevated rounded-md px-4 py-3 text-primary focus:outline-none focus:border-brand-normal focus:ring-1 focus:ring-brand-normal transition-all resize-none"
                  />
                </div>

                <p className="text-xs text-secondary font-light leading-relaxed">
                  By submitting this form, you agree to receive communications regarding your inquiry. Your information will be handled securely.
                </p>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-dark text-white rounded-md hover:bg-opacity-90 transition-all font-medium uppercase tracking-wider text-sm disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Demo'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-brand-normal text-sm text-center font-medium pt-2">Request sent successfully! I will be in touch shortly.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-sm text-center font-medium pt-2">Something went wrong. Please email directly.</p>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
