import './App.css'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function Header({ index, setIndex, sections, isAnimating }) {
  const handleClick = (i) => {
    if (isAnimating.current || i === index) return
    isAnimating.current = true
    setIndex(i)
    setTimeout(() => { isAnimating.current = false }, 800)
  }

  return (
    <header className="fixed top-0 left-0 z-10 flex gap-4 p-6">
      {sections.map((s, i) => (
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={i === index ? 'font-bold' : 'opacity-60'}
        >
          {s}
        </button>
      ))}
    </header>
  )
}

const sections = ['Home', 'Destination', 'Crew', 'Technology']

function App() {
  const [index, setIndex] = useState(0)
  const indexRef = useRef(0)
  const isAnimating = useRef(false)

  useEffect(() => {
    indexRef.current = index
  }, [index])

  useEffect(() => {
    const handleWheel = (e) => {
      if (isAnimating.current) return

      const dir = e.deltaY > 0 ? 1 : -1
      const next = indexRef.current + dir

      if (next < 0 || next >= sections.length) return

      isAnimating.current = true
      setIndex(next)
      setTimeout(() => { isAnimating.current = false }, 800)
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden">
      <Header index={index} setIndex={setIndex} sections={sections} isAnimating={isAnimating} /> 
      <motion.div
        className="flex flex-row h-full"
        animate={{ x: `-${index * 100}%` }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      >
        {sections.map((s, i) => (
          <section key={i} className="h-screen w-full flex-shrink-0 flex items-center justify-center">
            {s}
          </section>
        ))}
      </motion.div>
    </div>
  )
}

export default App