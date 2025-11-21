import { motion } from 'framer-motion'

const groups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TailwindCSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js'],
  },
  {
    title: 'AI / Data',
    items: ['Python', 'Pandas', 'Model Creation', 'Annotation', 'AI Building'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
        <p className="mt-3 text-slate-400">A snapshot of my current stack</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 backdrop-blur-md shadow-lg hover:shadow-teal-500/20 hover:border-teal-500/30 transition-all"
            >
              <div className="text-teal-400 font-semibold">{g.title}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 text-slate-200 hover:border-teal-500/40 hover:bg-teal-500/5 transition-colors"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
