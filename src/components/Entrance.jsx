import { motion, AnimatePresence } from 'framer-motion'

const bgColor = '#0B1220' // Midnight Navy
const ivory = '#F5F0E6' // Warm Ivory
const gold = '#C5A572' // Antique Gold accent

export default function Entrance({ open, onEnter }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.section
          key="entrance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="fixed inset-0 flex items-center justify-center"
          style={{ backgroundColor: bgColor }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-center px-6"
            >
              <div className="mb-10">
                <span
                  className="inline-block tracking-widest"
                  style={{ color: ivory, letterSpacing: '0.35em' }}
                >
                  THE DIGITAL ATELIER
                </span>
              </div>
              <h1
                className="text-5xl md:text-7xl font-serif leading-tight"
                style={{ color: ivory }}
              >
                {`A. C.`}
              </h1>
              <p className="mt-4 text-sm md:text-base font-light" style={{ color: ivory }}>
                Creative Designer — Digital Artisan
              </p>
              <div className="mt-16">
                <button
                  onClick={onEnter}
                  className="group inline-flex items-center gap-3 px-6 py-3 border rounded-full transition-colors"
                  style={{ borderColor: gold, color: ivory }}
                >
                  <span className="font-light">Enter the Atelier</span>
                  <span
                    className="h-2 w-2 rounded-full group-hover:scale-125 transition-transform"
                    style={{ backgroundColor: gold }}
                  />
                </button>
              </div>
            </motion.div>

            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute -inset-40 opacity-30 blur-3xl"
                style={{
                  background:
                    'radial-gradient(800px 800px at 50% 50%, rgba(197,165,114,0.15), transparent 60%)',
                }}
              />
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
