import { motion } from 'framer-motion'
import { useState } from 'react'

interface EmploymentStatusProps {
  isEmployed?: boolean
}

export function EmploymentStatus({
  isEmployed = false,
}: EmploymentStatusProps) {
  const [isHovered, setIsHovered] = useState(false)

  const statusConfig = isEmployed
    ? {
        title: 'Happily Employed',
        description: 'Not currently seeking opportunities',
        color: 'from-green-400 to-emerald-500',
        pulseColor: 'bg-green-400',
        icon: '💼',
      }
    : {
        title: 'Actively Applying',
        description: 'Open to new opportunities',
        color: 'from-orange-400 to-red-500',
        pulseColor: 'bg-orange-400',
        icon: '🚀',
      }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-black/30 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-black/40 transition-all duration-300 group max-w-md mx-auto">
        {/* Pulsing notification light */}
        <div className="absolute -top-1 -right-1 w-3 h-3">
          <motion.div
            className={`w-full h-full rounded-full ${statusConfig.pulseColor} shadow-lg`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="flex items-center space-x-3">
          <motion.div
            className={`w-10 h-10 rounded-full bg-gradient-to-r ${statusConfig.color} flex items-center justify-center text-lg shadow-lg`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {statusConfig.icon}
          </motion.div>

          <div className="flex-1">
            <motion.h3
              className={`font-mohave text-lg font-bold bg-gradient-to-r ${statusConfig.color} bg-clip-text text-transparent`}
              animate={isHovered ? { x: 3 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            >
              {statusConfig.title}
            </motion.h3>
            <p className="text-gray-300 text-xs">{statusConfig.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
