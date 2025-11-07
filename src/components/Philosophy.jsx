import { motion } from 'framer-motion'

const bg = '#0B1220'
const ivory = '#F5F0E6'
const gold = '#C5A572'

export default function Philosophy({ onBack }) {
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
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-5xl md:text-7xl"
          style={{ color: ivory }}
        >
          Signal, Not Noise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 text-lg md:text-xl font-light leading-relaxed opacity-90"
          style={{ color: ivory }}
        >
          I design for clarity and consequence. Every gesture has intent, every
          frame a purpose. Quiet interfaces that reward attention; systems that
          stand up to time. Elegance is reduction—craft is commitment.
        </motion.p>
      </div>
    </section>
  )
}
