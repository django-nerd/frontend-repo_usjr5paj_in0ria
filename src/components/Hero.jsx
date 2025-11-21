import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90svh] flex items-center">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 bg-teal-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 h-80 w-80 bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 relative">
        <div className="py-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-teal-400 font-medium"
          >
            Hi, I’m
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Nishanth K R
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-3 text-lg sm:text-xl text-slate-300"
          >
            Software Developer | AI & Full Stack
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-6 max-w-xl text-slate-400"
          >
            I craft performant web apps and intelligent systems. I love building delightful UIs with React/Next.js and shipping AI-powered features using Python and modern tooling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-teal-500 text-slate-900 font-semibold shadow-[0_10px_40px_-10px_rgba(20,184,166,0.7)] hover:shadow-[0_10px_50px_-10px_rgba(20,184,166,0.9)] transition-transform hover:-translate-y-0.5"
            >
              View Project
            </a>
            <a
              href="#"
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Tech cards */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {['React','Node.js','Python + Pandas','AI / ML Model Building'].map((t) => (
              <motion.div
                key={t}
                whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
                className="rounded-xl border border-white/10 bg-slate-800/40 backdrop-blur-md p-3 text-center text-slate-200 shadow-sm hover:shadow-teal-500/20 hover:border-teal-500/30 transition-all"
              >
                {t}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Spline 3D scene */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-slate-800/30 shadow-2xl">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
