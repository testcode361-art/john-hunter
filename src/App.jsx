import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Books from './components/Books'
import Ministry from './components/Ministry'
import Contact from './components/Contact'
import Footer from './components/Footer'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', update)
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gold z-[100] origin-left"
      style={{ scaleX: progress / 100 }}
    />
  )
}

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 bg-charcoal z-[200] flex items-center justify-center"
    >
      <div className="text-center flex flex-col items-center">
        <motion.img
          src="/logoName.png"
          alt="John F. Hunter logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="h-20 w-20 md:h-24 md:w-24 object-contain rounded-full ring-2 ring-gold/40 mb-6"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl font-bold text-ivory mb-4"
        >
          John <span className="text-gold">F. Hunter</span>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="w-48 h-0.5 bg-gold mx-auto origin-left"
        />
      </div>
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen key="loader" />}</AnimatePresence>

      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Books />
        <Ministry />
        <Contact />
      </main>
      <Footer />
    </>
  )
}