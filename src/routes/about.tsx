import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useEffect, useMemo, useRef } from 'react'
import { AchievementId } from '@/assets/data/achievements'
import { AboutHero } from '@/components/about/AboutHero'
import { BackgroundJourney } from '@/components/about/BackgroundJourney'
import { LeadershipValues } from '@/components/about/LeadershipValues'
import { PersonalInterests } from '@/components/about/PersonalInterests'
import { useAchievements } from '@/components/achievements/AchievementsContext'
import { CallToAction } from '@/components/contact/CallToAction'
import { TechGridSection } from '@/components/techgrid/TechGridSection'

export const Route = createFileRoute('/about')({
  head: () => ({
    title: 'About Jordan Winslow - Software Engineer Background & Journey',
    meta: [
      {
        name: 'description',
        content:
          "Learn about Jordan Winslow's journey as a software engineer, from early programming experiences to leadership roles. Discover my technical expertise, values, and passion for creating exceptional digital experiences.",
      },
      {
        name: 'keywords',
        content:
          'Jordan Winslow, software engineer background, programming journey, technical expertise, leadership, React developer, frontend engineer',
      },
      {
        name: 'author',
        content: 'Jordan Winslow',
      },
      // Open Graph tags
      {
        property: 'og:title',
        content:
          'About Jordan Winslow - Software Engineer Background & Journey',
      },
      {
        property: 'og:description',
        content:
          "Learn about Jordan Winslow's journey as a software engineer, from early programming experiences to leadership roles. Discover my technical expertise, values, and passion for creating exceptional digital experiences.",
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://jordanwinslow.dev/about',
      },
      {
        property: 'og:image',
        content: '/og-about.png',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      // Twitter Card tags
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content:
          'About Jordan Winslow - Software Engineer Background & Journey',
      },
      {
        name: 'twitter:description',
        content:
          "Learn about Jordan Winslow's journey as a software engineer, from early programming experiences to leadership roles. Discover my technical expertise, values, and passion for creating exceptional digital experiences.",
      },
      {
        name: 'twitter:image',
        content: '/og-about.png',
      },
    ],
  }),
  component: About,
})

function About() {
  const { unlockAchievement } = useAchievements()
  const techSectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    unlockAchievement(AchievementId.aboutDiscoverer)
  }, [unlockAchievement])

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

        <section id="tech-section" ref={techSectionRef} className="mt-20">
          <TechGridSection />
        </section>

        <section className="mt-20">
          <CallToAction
            title="Ready to See My Professional Experience?"
            description="I'm passionate about creating exceptional digital experiences and have worked on some incredible projects. View my detailed resume to see my technical expertise, achievements, and the innovative solutions I've delivered."
            primaryButtonText="Get In Touch"
            secondaryButtonText="View Resume"
            secondaryButtonHref="/resume"
          />
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
