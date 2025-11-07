import { useState } from 'react'
import Entrance from './components/Entrance'
import CuratorsIndex from './components/CuratorsIndex'
import Gallery from './components/Gallery'
import Philosophy from './components/Philosophy'
import Studio from './components/Studio'

const bg = '#0B1220' // Midnight Navy
const ivory = '#F5F0E6' // Warm Ivory

export default function App() {
  const [showEntrance, setShowEntrance] = useState(true)
  const [section, setSection] = useState('index') // index | work | philosophy | studio

  const handleEnter = () => setShowEntrance(false)
  const backToIndex = () => setSection('index')

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: bg, color: ivory }}>
      <Entrance open={showEntrance} onEnter={handleEnter} />

      {!showEntrance && section === 'index' && (
        <CuratorsIndex onSelect={setSection} />
      )}

      {!showEntrance && section === 'work' && <Gallery onBack={backToIndex} />}
      {!showEntrance && section === 'philosophy' && (
        <Philosophy onBack={backToIndex} />
      )}
      {!showEntrance && section === 'studio' && <Studio onBack={backToIndex} />}

      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-widest opacity-60">
        © {new Date().getFullYear()} Digital Atelier — Private Viewing
      </footer>
    </div>
  )
}
