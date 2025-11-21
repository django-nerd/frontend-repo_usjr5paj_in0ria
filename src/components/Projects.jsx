import { motion } from 'framer-motion'

const project = {
  title: 'AI-Powered Attendance Register',
  desc: 'Detects a person using AI and automatically marks attendance, logging entries without manual input.',
  tags: ['AI', 'Computer Vision', 'Python', 'React', 'Node'],
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Project</h2>
            <p className="mt-3 text-slate-400">A highlight of my work</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: -5 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid"
        >
          <div className="group relative rounded-3xl p-1 bg-gradient-to-br from-teal-500/30 via-cyan-500/20 to-transparent">
            <div className="rounded-2xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 text-slate-300">{project.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 text-slate-200">{t}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href="#" className="px-5 py-2.5 rounded-xl bg-teal-500 text-slate-900 font-semibold hover:shadow-[0_10px_40px_-10px_rgba(20,184,166,0.6)] transition-transform hover:-translate-y-0.5">View Details</a>
                    <a href="#" className="px-5 py-2.5 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10">GitHub</a>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative h-56 sm:h-72 lg:h-80 rounded-xl bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-white/10 overflow-hidden">
                    <div className="absolute inset-0 opacity-60 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(20,184,166,0.25),transparent)]" />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="w-56 h-36 bg-slate-700/60 border border-white/10 rounded-xl rotate-3 translate-y-1 group-hover:-translate-y-1.5 transition-transform" />
                      <div className="w-56 h-36 bg-slate-700/40 border border-white/10 rounded-xl -rotate-6 -translate-y-4 group-hover:-translate-y-6 transition-transform" />
                      <div className="w-56 h-36 bg-slate-700/30 border border-white/10 rounded-xl rotate-12 -translate-y-8 group-hover:-translate-y-10 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
