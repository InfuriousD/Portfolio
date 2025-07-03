import '../styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div key="loader" className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50 text-xl font-bold"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          Loading Mayank's Portfolio...
        </motion.div>
      ) : (
        <Component {...pageProps} key={router.route} />
      )}
    </AnimatePresence>
  )
}
