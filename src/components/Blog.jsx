import { motion } from 'framer-motion'

const posts = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  title: `Sample Blog Post ${i + 1}`,
  date: '2025-01-01',
  excerpt:
    'A short excerpt introducing the topic and giving readers a quick taste of the content. Clean, concise, and informative.',
}))

export default function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Blog</h2>
        <p className="mt-3 text-slate-400">Recent writings and thoughts</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-slate-800/40 p-6 backdrop-blur-md shadow-lg hover:border-teal-500/30 hover:shadow-teal-500/20 transition-all"
            >
              <div className="text-xs text-teal-400">{p.date}</div>
              <h3 className="mt-2 text-xl font-semibold text-white group-hover:text-teal-300 transition-colors">{p.title}</h3>
              <p className="mt-2 text-slate-300">{p.excerpt}</p>
              <a href="#" className="mt-4 inline-block text-teal-400 hover:text-teal-300">Read more →</a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
