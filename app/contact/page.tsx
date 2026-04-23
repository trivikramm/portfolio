"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto py-12 md:py-24 space-y-12">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Let's Collaborate</h1>
        <p className="text-secondary text-lg max-w-2xl mx-auto">
          Interested in working together on enterprise web applications or cloud infrastructure? Reach out below.
        </p>
      </motion.section>

      <div className="grid md:grid-cols-5 gap-12 items-start">
        {/* Contact Info Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 space-y-8"
        >
          <Card className="bg-surface/50 border-none">
            <h3 className="text-xl font-bold text-primary mb-6">Direct Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-secondary mb-1">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="text-primary hover:text-brand-start transition-colors font-medium">
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <p className="text-sm text-secondary mb-1">Phone</p>
                <a href={`tel:${personalInfo.phone}`} className="text-primary hover:text-brand-start transition-colors font-medium">
                  {personalInfo.phone}
                </a>
              </div>
              <div>
                <p className="text-sm text-secondary mb-1">Location</p>
                <p className="text-primary font-medium">India</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Form Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-3"
        >
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-secondary">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    className="w-full bg-background border border-surface rounded-md px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-brand-start/50 focus:border-brand-start transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-secondary">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    className="w-full bg-background border border-surface rounded-md px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-brand-start/50 focus:border-brand-start transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-secondary">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows={5}
                  className="w-full bg-background border border-surface rounded-md px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-brand-start/50 focus:border-brand-start transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {submitStatus === 'success' && (
                <p className="text-green-500 text-sm text-center">Message sent successfully! I'll get back to you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm text-center">Failed to send message. Please try emailing directly.</p>
              )}
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
