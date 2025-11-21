import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Project', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'bg-slate-900/70 shadow-lg shadow-teal-500/10' : 'bg-slate-900/40'
    } backdrop-blur-xl border-b border-white/5`}> 
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="text-teal-400 font-semibold tracking-wide hover:text-teal-300 transition-colors">
            Nishanth K R
          </a>
          <div className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-full text-sm text-slate-200 hover:text-white hover:bg-teal-500/10 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-200 hover:bg-white/5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 grid gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-teal-500/10 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
