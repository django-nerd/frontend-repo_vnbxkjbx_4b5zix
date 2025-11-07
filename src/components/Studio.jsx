import { useState } from 'react'
import { motion } from 'framer-motion'

const bg = '#0B1220'
const ivory = '#F5F0E6'
const gold = '#C5A572'

export default function Studio({ onBack }) {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="min-h-screen flex items-center" style={{ backgroundColor: bg }}>
      <div className="absolute top-6 left-6">
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-full border text-sm"
          style={{ borderColor: gold, color: ivory }}
        >
          Back to Index
        </button>
      </div>

      <div className="max-w-xl mx-auto w-full px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl mb-8"
          style={{ color: ivory }}
        >
          Appointment Request
        </motion.h2>
        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm mb-2" style={{ color: ivory }}>
                Name
              </label>
              <input
                required
                type="text"
                className="w-full bg-transparent border px-4 py-3 rounded outline-none focus:ring-0"
                style={{ borderColor: 'rgba(245,240,230,0.25)', color: ivory }}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm mb-2" style={{ color: ivory }}>
                Email
              </label>
              <input
                required
                type="email"
                className="w-full bg-transparent border px-4 py-3 rounded outline-none focus:ring-0"
                style={{ borderColor: 'rgba(245,240,230,0.25)', color: ivory }}
                placeholder="you@domain.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-2" style={{ color: ivory }}>
                Intent
              </label>
              <textarea
                required
                rows={5}
                className="w-full bg-transparent border px-4 py-3 rounded outline-none focus:ring-0"
                style={{ borderColor: 'rgba(245,240,230,0.25)', color: ivory }}
                placeholder="A sentence on what you seek to build."
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="group inline-flex items-center gap-3 px-6 py-3 border rounded-full transition-colors"
                style={{ borderColor: gold, color: ivory }}
              >
                <span className="font-light">Book a Consultation</span>
                <span
                  className="h-2 w-2 rounded-full group-hover:scale-125 transition-transform"
                  style={{ backgroundColor: gold }}
                />
              </button>
            </div>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
            style={{ color: ivory }}
          >
            <p className="text-lg">Your request has been noted.</p>
            <p className="opacity-80 mt-2">Expect a considered reply within 48 hours.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
