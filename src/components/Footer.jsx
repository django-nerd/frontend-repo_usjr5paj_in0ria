import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">Designed & Built by <span className="text-teal-400">Nishanth K R</span></p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/your-username" className="text-slate-400 hover:text-teal-400" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://linkedin.com/in/your-username" className="text-slate-400 hover:text-teal-400" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="mailto:your-email@example.com" className="text-slate-400 hover:text-teal-400" aria-label="Email"><Mail size={18} /></a>
          <a href="tel:+910000000000" className="text-slate-400 hover:text-teal-400" aria-label="Phone"><Phone size={18} /></a>
        </div>
      </div>
    </footer>
  )
}
