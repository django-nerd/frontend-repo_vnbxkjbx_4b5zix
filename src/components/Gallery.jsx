import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const bg = '#0B1220'
const ivory = '#F5F0E6'
const gold = '#C5A572'

const projects = [
  {
    title: 'The Kinetic Interface',
    subtitle: 'A study in motion and restraint',
  },
  {
    title: "The Alchemist's Mark",
    subtitle: 'Brand system distilled to its essence',
  },
  {
    title: 'Nocturne Grid',
    subtitle: 'Typographic rhythm after dark',
  },
]

export default function Gallery({ onBack }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    function onWheel(e) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollLeft += e.deltaY
        e.preventDefault()
      }
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <section className="relative min-h-screen" style={{ backgroundColor: bg }}>
      <button
        onClick={onBack}
        className="absolute top-6 left-6 z-10 px-4 py-2 rounded-full border text-sm"
        style={{ borderColor: gold, color: ivory }}
      >
        Back to Index
      </button>

      <div
        ref={containerRef}
        className="h-screen overflow-x-auto overflow-y-hidden whitespace-nowrap snap-x snap-mandatory"
      >
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="inline-block align-top w-screen h-screen snap-start relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8 }}
                className="text-center px-6"
              >
                <h3 className="font-serif text-4xl md:text-6xl" style={{ color: ivory }}>
                  {p.title}
                </h3>
                <p className="mt-4 text-base md:text-lg font-light opacity-80" style={{ color: ivory }}>
                  {p.subtitle}
                </p>
              </motion.div>
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    i % 2 === 0
                      ? 'linear-gradient(120deg, rgba(197,165,114,0.08), transparent 40%)'
                      : 'linear-gradient(300deg, rgba(197,165,114,0.08), transparent 40%)',
                }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
