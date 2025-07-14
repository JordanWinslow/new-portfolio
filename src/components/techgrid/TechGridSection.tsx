import { motion } from 'framer-motion'
import { TechGrid } from './TechGrid'

interface TechGridSectionProps {
  title?: string
  description?: string
  className?: string
}

export function TechGridSection({
  title = 'Technology Expertise',
  description = 'Below is a component I made to help you identify whether or not I am familiar with the particular technologies you use. Feel free to search for a specific technology or sort the grid with the filters.',
  className = '',
}: TechGridSectionProps) {
  return (
    <section className={`space-y-8 ${className}`}>
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mohave text-3xl lg:text-4xl font-bold text-white mb-6"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <TechGrid />
      </motion.div>
    </section>
  )
}
