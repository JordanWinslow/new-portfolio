import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useMemo, useRef } from 'react'
import { techItems } from '@/assets/data/techItems'
import { AboutHero } from '@/components/about/AboutHero'
import { AboutTechFilters } from '@/components/about/AboutTechFilters'
import { BackgroundJourney } from '@/components/about/BackgroundJourney'
import { LeadershipValues } from '@/components/about/LeadershipValues'
import { PersonalInterests } from '@/components/about/PersonalInterests'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  const techSectionRef = useRef<HTMLElement>(null)

  return (
    <div className="min-h-screen bg-black text-white font-inter relative overflow-x-hidden">
      <PageBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 mt-[8vh]">
        <div className="max-w-5xl mx-auto space-y-20">
          <AboutHero techSectionRef={techSectionRef} />

          <BackgroundJourney />

          <PersonalInterests />

          <LeadershipValues />
        </div>

        <section
          id="tech-section"
          ref={techSectionRef}
          className="space-y-8 mt-20"
        >
          <div className="text-center">
            <h2 className="font-mohave text-3xl lg:text-4xl font-bold text-white mb-6">
              Technology Expertise
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Below is a component I made to help you identify whether or not I
              am familiar with the particular technologies you use. Feel free to
              search for a specific technology or sort the grid with the
              filters.
            </p>
          </div>
          <AboutTechFilters allTechnologies={techItems} />
        </section>
      </div>
    </div>
  )
}

const PageBackground = () => {
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
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" />
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, _i) => (
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
