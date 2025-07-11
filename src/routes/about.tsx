import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Trophy, Zap as ZapIcon } from 'lucide-react'
import { useMemo, useRef } from 'react'
import { techItems } from '@/assets/data/techItems'
import { AboutHero } from '@/components/about/AboutHero'
import { AboutTechFilters } from '@/components/about/AboutTechFilters'
import { FixedNavigation } from '@/components/navigation/FixedNavigation'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  const techSectionRef = useRef<HTMLElement>(null)

  // Generate random positions for particles only once on the client
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        key: `particle-${i}-${Math.random()}`,
      })),
    [],
  )

  return (
    <div className="min-h-screen bg-black text-white font-inter relative overflow-x-hidden">
      <FixedNavigation />
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" />
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p, _i) => (
            <motion.div
              key={p.key}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <AboutHero />
        <section ref={techSectionRef} className="space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <h2 className="font-mohave text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wider">
                Technology Expertise
              </h2>
              <ZapIcon className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Explore my comprehensive technology stack. Filter and search to
              discover specific skills.
            </p>
          </div>
          <AboutTechFilters allTechnologies={techItems} />
        </section>
      </div>
    </div>
  )
}
