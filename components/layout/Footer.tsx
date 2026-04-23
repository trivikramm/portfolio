"use client"
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#fbfbfb] dark:bg-background pt-16 pb-10 border-t border-elevated overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Top Row: AI21 Style 5-Column Grid */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          
          {/* Logo Section */}
          <div className="lg:w-1/5">
            <Link href="/" className="font-bold text-4xl tracking-tight text-primary flex flex-col gap-6">
              <span>TM<span className="text-brand-normal">.</span></span>
              <div className="w-12 h-12 bg-primary text-background flex items-center justify-center font-bold text-2xl rounded-sm mt-2">
                T
              </div>
            </Link>
          </div>

          {/* Links Section */}
          <div className="lg:w-4/5 grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="space-y-6">
              <h3 className="font-semibold text-primary text-[15px]">Products</h3>
              <ul className="space-y-4 text-[14px] text-secondary font-light">
                <li><Link href="/projects" className="hover:text-brand-normal transition-colors">Custom AI Solutions</Link></li>
                <li><Link href="/projects" className="hover:text-brand-normal transition-colors">Maestro</Link></li>
                <li><Link href="/projects" className="hover:text-brand-normal transition-colors">Jamba</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold text-primary text-[15px]">Solutions</h3>
              <ul className="space-y-4 text-[14px] text-secondary font-light">
                <li><Link href="/projects" className="hover:text-brand-normal transition-colors">Finance</Link></li>
                <li><Link href="/projects" className="hover:text-brand-normal transition-colors">Healthcare</Link></li>
                <li><Link href="/projects" className="hover:text-brand-normal transition-colors">Tech</Link></li>
                <li><Link href="/projects" className="hover:text-brand-normal transition-colors">Defense</Link></li>
                <li><Link href="/projects" className="hover:text-brand-normal transition-colors">Manufacturing</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold text-primary text-[15px]">Labs</h3>
              <ul className="space-y-4 text-[14px] text-secondary font-light">
                <li><Link href="/projects" className="hover:text-brand-normal transition-colors">Research</Link></li>
                <li><Link href="/projects" className="hover:text-brand-normal transition-colors">Developers Hub</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold text-primary text-[15px]">Resources</h3>
              <ul className="space-y-4 text-[14px] text-secondary font-light">
                <li><Link href="#" className="hover:text-brand-normal transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-brand-normal transition-colors">Events & Webinars</Link></li>
                <li><Link href="#" className="hover:text-brand-normal transition-colors">Podcast</Link></li>
                <li><Link href="#" className="hover:text-brand-normal transition-colors">Glossary</Link></li>
                <li><Link href="#" className="hover:text-brand-normal transition-colors">Knowledge Hub</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold text-primary text-[15px]">Company</h3>
              <ul className="space-y-4 text-[14px] text-secondary font-light">
                <li><Link href="/about" className="hover:text-brand-normal transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-brand-normal transition-colors">Newsroom</Link></li>
                <li><Link href="#" className="hover:text-brand-normal transition-colors">Careers</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Massive Faded Text Effect */}
        <div className="w-full text-center select-none pointer-events-none mb-10 overflow-hidden relative z-0">
          <h2 className="text-[7.5vw] font-bold text-elevated dark:text-elevated/40 tracking-tighter whitespace-nowrap leading-none">
            Building Timeless Intelligence
          </h2>
        </div>

        {/* Bottom Row: Policies & Socials */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-8 border-t border-elevated text-[13px] text-secondary font-light relative z-10">
          
          <div className="flex-shrink-0">
            © All Rights Reserved
          </div>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 w-full lg:px-8">
            <Link href="#" className="hover:text-primary transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Acceptable Use</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookie Settings</Link>
            <Link href="#" className="hover:text-primary transition-colors">Trust Center</Link>
            <Link href="#" className="hover:text-primary transition-colors">Report a Vulnerability</Link>
          </div>

          <div className="flex gap-5 text-primary flex-shrink-0">
            {/* Native SVGs bypass the Lucide bundler crash */}
            <a href="https://linkedin.com/in/trivikram-majjari" target="_blank" rel="noopener noreferrer" className="hover:text-brand-normal transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-normal transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-normal transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M15 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M8.5 16.5c1.5 1 3.5 1 5 0"/><path d="M18.16 6.843a15.706 15.706 0 0 0-3.87-1.161.037.037 0 0 0-.038.018 11.233 11.233 0 0 0-1.22 2.451 16.29 16.29 0 0 0-5.876 0 11.026 11.026 0 0 0-1.22-2.451.041.041 0 0 0-.039-.018 15.71 15.71 0 0 0-3.87 1.161.038.038 0 0 0-.017.014C.603 12.062-.236 17.18 1.05 22.25a.041.041 0 0 0 .016.026 15.783 15.783 0 0 0 4.764 2.417.04.04 0 0 0 .043-.013 11.272 11.272 0 0 0 1.018-1.657.04.04 0 0 0-.022-.056 10.35 10.35 0 0 1-1.492-.716.04.04 0 0 1 .004-.067c.1-.074.201-.151.298-.228a.038.038 0 0 1 .04-.005 11.336 11.336 0 0 0 10.638 0 .039.039 0 0 1 .04.005c.097.077.198.154.3.228a.04.04 0 0 1 .004.067 10.457 10.457 0 0 1-1.494.716.04.04 0 0 0-.022.056 11.366 11.366 0 0 0 1.018 1.657.04.04 0 0 0 .043.013 15.762 15.762 0 0 0 4.766-2.417.042.042 0 0 0 .016-.026c1.442-5.788.196-10.9-2.316-15.393a.043.043 0 0 0-.018-.014z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-normal transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-normal transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}