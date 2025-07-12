import { motion } from 'framer-motion'
import { useState } from 'react'

interface FloatingEmploymentStatusProps {
  isEmployed?: boolean
}

export function FloatingEmploymentStatus({
  isEmployed = false,
}: FloatingEmploymentStatusProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const statusConfig = isEmployed
    ? {
        title: 'Happily Employed',
        description: 'I am no longer seeking a new role.',
        color: 'from-green-400 to-emerald-500',
        pulseColor: 'bg-green-400',
        icon: '💼',
      }
    : {
        title: 'Open to Opportunities',
        description: 'I am actively seeking a new, exciting role!',
        color: 'from-orange-400 to-red-500',
        pulseColor: 'bg-orange-400',
        icon: '🚀',
      }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="fixed top-24 right-6 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulsing notification light */}
        <div className="absolute -top-1 -right-1 w-3 h-3 z-10">
          <motion.div
            className={`w-full h-full rounded-full ${statusConfig.pulseColor} shadow-lg`}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <motion.div
          className="relative bg-black/40 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden"
          animate={{
            width: isExpanded ? 200 : 50,
            height: isExpanded ? 80 : 50,
            borderRadius: isExpanded ? 16 : 25,
          }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              opacity: isExpanded ? 0 : 1,
              scale: isExpanded ? 0.8 : 1,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              className={`w-10 h-10 rounded-full bg-gradient-to-r ${statusConfig.color} flex items-center justify-center text-lg shadow-lg`}
              animate={isHovered ? { rotate: 5 } : { rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              {statusConfig.icon}
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute inset-0 p-3 flex items-center"
            animate={{
              opacity: isExpanded ? 1 : 0,
              scale: isExpanded ? 1 : 0.8,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
              delay: isExpanded ? 0.1 : 0,
            }}
          >
            <div className="flex items-center space-x-2 w-full">
              <motion.div
                className={`w-8 h-8 rounded-full bg-gradient-to-r ${statusConfig.color} flex items-center justify-center text-sm shadow-lg flex-shrink-0`}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                {statusConfig.icon}
              </motion.div>

              <div className="flex-1 min-w-0">
                <motion.h3
                  className={`font-mohave text-sm font-bold bg-gradient-to-r ${statusConfig.color} bg-clip-text text-transparent leading-tight`}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    x: isExpanded ? 0 : 10,
                  }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  {statusConfig.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 text-xs leading-tight mt-1"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    x: isExpanded ? 0 : 10,
                  }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  {statusConfig.description}
                </motion.p>
              </div>

              <motion.div
                className="w-1.5 h-1.5 bg-white/30 rounded-full flex-shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: isExpanded ? 1 : 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-xl opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0,
            borderRadius: isExpanded ? 16 : 25,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}
