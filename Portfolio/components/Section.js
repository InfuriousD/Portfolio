import { motion } from 'framer-motion'
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="min-h-[70vh] px-4 py-24 max-w-4xl mx-auto">
      <motion.h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {title}
      </motion.h2>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        {children}
      </motion.div>
    </section>
)}