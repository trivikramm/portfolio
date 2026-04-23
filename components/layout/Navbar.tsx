"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-surface">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl tracking-tight text-primary">
          TM<span className="text-brand-start">.</span>
        </Link>
        <div className="flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === item.path ? "text-primary" : "text-secondary"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/resume.pdf" 
            target="_blank"
            className="text-gold hover:text-gold-hover transition-colors"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  )
}