import { motion } from 'framer-motion'
import { useMemo } from 'react'

export function ContactBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 35 }, (_, i) => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        key: `particle-${i}-${Math.random()}`,
        size: Math.random() * 2 + 1,
        duration: 4 + Math.random() * 4,
        delay: Math.random() * 3,
      })),
    [],
  )

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" />
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.key}
            className="absolute bg-white/30 rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  )
}
