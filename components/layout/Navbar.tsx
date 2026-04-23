"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { projects } from '@/lib/data'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const products = projects.filter(p => p.category === 'Products').slice(0, 3)
  const solutions = projects.filter(p => p.category === 'Solutions').slice(0, 3)
  const lab = projects.filter(p => p.category === 'Lab').slice(0, 3)

  const NavDropdown = ({ title, items }: { title: string, items: typeof projects }) => (
    <div className="group relative">
      <button className="flex items-center gap-1 text-secondary hover:text-primary transition-colors py-5">
        {title} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
      </button>
      
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[400px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
        <div className="bg-background border border-elevated rounded-xl shadow-xl p-4 mt-2">
          <div className="text-xs font-semibold text-brand-normal uppercase tracking-wider mb-3 px-3">
            Featured {title}
          </div>
          <div className="space-y-1">
            {items.map(item => (
              <Link 
                key={item.id} 
                href={`/projects#${item.id}`}
                className="block px-3 py-2.5 rounded-lg hover:bg-surface transition-colors"
              >
                <div className="font-medium text-primary text-sm">{item.title}</div>
                <div className="text-xs text-secondary truncate mt-0.5">{item.description}</div>
              </Link>
            ))}
          </div>
          <Link href="/projects" className="block mt-3 px-3 py-2 text-xs font-medium text-brand-dark hover:text-brand-normal transition-colors">
            View all {title.toLowerCase()} →
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <nav className="fixed top-0 w-full z-50 bg-background border-b border-elevated transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <Link href="/" className="font-bold text-2xl tracking-tight text-primary">
          TM<span className="text-brand-normal">.</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium h-full">
          <NavDropdown title="Products" items={products} />
          <NavDropdown title="Solutions" items={solutions} />
          <NavDropdown title="Lab" items={lab} />
          
          <Link 
            href="/about"
            className={cn(
              "transition-colors hover:text-primary py-5",
              pathname === '/about' ? "text-primary" : "text-secondary"
            )}
          >
            Experience
          </Link>
          
          <Link 
            href="/contact" 
            className="px-5 py-2.5 bg-brand-dark text-white rounded-md hover:bg-opacity-90 transition-all ml-4 text-sm font-medium"
          >
            Get a Demo
          </Link>
          <div className="pl-4 border-l border-elevated h-6 flex items-center">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-primary p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-elevated px-6 py-4 shadow-lg flex flex-col gap-4 text-sm font-medium h-screen overflow-y-auto pb-24">
          <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="text-primary py-2 border-b border-elevated">All Projects (Hub)</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-primary py-2 border-b border-elevated">Experience</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-primary py-2 border-b border-elevated">Get a Demo</Link>
        </div>
      )}
    </nav>
  )
}