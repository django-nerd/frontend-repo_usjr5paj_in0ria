import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-teal-500/20 to-cyan-500/20 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-slate-800/40 p-6 backdrop-blur-md shadow-xl">
              <div className="aspect-[4/3] rounded-2xl bg-slate-900/60 border border-white/10 flex items-center justify-center text-slate-500">
                Profile Image
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: 'Experience', value: '2+ yrs' },
                  { label: 'Focus', value: 'Full Stack & AI' },
                  { label: 'Location', value: 'India' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                    <div className="text-teal-400 font-semibold">{s.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I’m a software developer passionate about building modern web applications and intelligent systems. I enjoy working with React, Next.js, and Node.js on the frontend and backend, and I use Python and Pandas to analyze data and build AI models. I’ve worked on model creation, dataset annotation, and end-to-end AI features.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {['React','Next.js','Node.js','Python','Pandas','AI/ML'].map((tag) => (
                <div key={tag} className="rounded-xl border border-white/10 bg-slate-800/40 p-3 text-slate-200 hover:border-teal-500/30 hover:shadow-[0_0_0_1px_rgba(20,184,166,0.3)] transition-all">
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
