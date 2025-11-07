import { motion } from 'framer-motion'

const ivory = '#F5F0E6'
const gold = '#C5A572'

export default function CuratorsIndex({ onSelect }) {
  const items = [
    { key: 'work', numeral: 'I.', label: 'The Work' },
    { key: 'philosophy', numeral: 'II.', label: 'The Philosophy' },
    { key: 'studio', numeral: 'III.', label: 'The Studio' },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0B1220' }}>
      <div className="max-w-3xl w-full px-6">
        <ul className="space-y-6">
          {items.map((it, i) => (
            <motion.li
              key={it.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="flex items-baseline justify-between border-b/10 border-b pb-4"
              style={{ borderColor: 'rgba(245,240,230,0.1)' }}
            >
              <button
                onClick={() => onSelect(it.key)}
                className="group flex items-baseline gap-6 w-full text-left"
                style={{ color: ivory }}
              >
                <span className="text-sm tracking-widest opacity-70">{it.numeral}</span>
                <span className="font-serif text-3xl md:text-4xl">{it.label}</span>
                <span
                  className="ml-auto h-2 w-2 rounded-full opacity-70 group-hover:opacity-100 group-hover:scale-125 transition"
                  style={{ backgroundColor: gold }}
                />
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
