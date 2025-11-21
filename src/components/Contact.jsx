import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [subscribed, setSubscribed] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    console.log('Contact form submitted', form)
    alert('Thanks! Your message has been recorded locally (no backend).')
    setForm({ name: '', email: '', message: '' })
  }

  const onSubscribe = (ev) => {
    ev.preventDefault()
    const email = ev.target.elements.sub_email.value
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Enter a valid email to subscribe.')
      return
    }
    console.log('Subscribed to newsletter:', email)
    setSubscribed(true)
    ev.target.reset()
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-white/10 bg-slate-800/40 p-6 sm:p-8 backdrop-blur-md shadow-xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
            <p className="mt-2 text-slate-400">Let’s build something awesome together.</p>
            <form className="mt-6 grid gap-4" onSubmit={onSubmit} noValidate>
              <div>
                <label className="block text-sm text-slate-300">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/60"
                  placeholder="Your name"
                  required
                />
                {errors.name && <p className="mt-1 text-sm text-teal-400">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/60"
                  placeholder="you@example.com"
                  required
                />
                {errors.email && <p className="mt-1 text-sm text-teal-400">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm text-slate-300">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/60"
                  placeholder="Tell me a bit about your project"
                  required
                />
                {errors.message && <p className="mt-1 text-sm text-teal-400">{errors.message}</p>}
              </div>
              <button type="submit" className="mt-2 inline-flex justify-center px-5 py-2.5 rounded-xl bg-teal-500 text-slate-900 font-semibold hover:shadow-[0_10px_40px_-10px_rgba(20,184,166,0.6)]">
                Send Message
              </button>
          </form>
        </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-slate-800/40 p-6 sm:p-8 backdrop-blur-md shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white">Newsletter</h3>
            <p className="mt-2 text-slate-400">Get occasional updates about new posts and projects.</p>
            <form className="mt-4 flex gap-2" onSubmit={onSubscribe}>
              <input
                name="sub_email"
                type="email"
                className="flex-1 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/60"
                placeholder="Email address"
                required
              />
              <button className="px-4 py-2.5 rounded-xl bg-transparent text-teal-400 border border-teal-500/50 hover:bg-teal-500/10">Subscribe</button>
            </form>
            {subscribed && (
              <p className="mt-3 text-sm text-teal-400">Subscribed! (dummy handler)</p>
            )}
            <div className="mt-8 text-slate-300">
              <p className="font-semibold">Other ways to reach me</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  <a className="text-teal-400 hover:text-teal-300" href="mailto:your-email@example.com">your-email@example.com</a>
                </li>
                <li>
                  <a className="text-teal-400 hover:text-teal-300" href="tel:+910000000000">+91 00000 00000</a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
