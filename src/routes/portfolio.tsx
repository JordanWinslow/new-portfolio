import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { AchievementId } from '@/assets/data/achievements'
import { useAchievements } from '@/components/achievements/AchievementsContext'
import { CallToAction } from '@/components/contact/CallToAction'
import { BackgroundDecorations } from '@/components/decorative/BackgroundDecorations'
import { StarField } from '@/components/decorative/StarField'
import { InternalLink } from '@/components/navigation/InternalLink'
import type { LayoutType } from '@/components/portfolio/LayoutType'
import PhoneStackShowcase from '@/components/portfolio/PhoneStackShowcase'
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid'
import { PortfolioLayoutControls } from '@/components/portfolio/PortfolioLayoutControls'
import { TechGridSection } from '@/components/techgrid/TechGridSection'
import { useIntersectionObserver, useScrollToRef } from '@/lib/utils'

export const Route = createFileRoute('/portfolio')({
  head: () => ({
    title: "Portfolio - Jordan Winslow's Software Engineering Projects",
    meta: [
      {
        name: 'description',
        content:
          "Explore Jordan Winslow's portfolio of innovative software projects. From React applications to full-stack solutions, discover cutting-edge web development projects with live demos and source code.",
      },
      {
        name: 'keywords',
        content:
          'portfolio, software projects, React applications, web development, Jordan Winslow projects, frontend development, full-stack development',
      },
      {
        name: 'author',
        content: 'Jordan Winslow',
      },
      // Open Graph tags
      {
        property: 'og:title',
        content: "Portfolio - Jordan Winslow's Software Engineering Projects",
      },
      {
        property: 'og:description',
        content:
          "Explore Jordan Winslow's portfolio of innovative software projects. From React applications to full-stack solutions, discover cutting-edge web development projects with live demos and source code.",
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://jordanwinslow.dev/portfolio',
      },
      {
        property: 'og:image',
        content: '/og-portfolio.png',
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
        content: "Portfolio - Jordan Winslow's Software Engineering Projects",
      },
      {
        name: 'twitter:description',
        content:
          "Explore Jordan Winslow's portfolio of innovative software projects. From React applications to full-stack solutions, discover cutting-edge web development projects with live demos and source code.",
      },
      {
        name: 'twitter:image',
        content: '/og-portfolio.png',
      },
    ],
  }),
  component: Portfolio,
})

function Portfolio() {
  const { unlockAchievement } = useAchievements()
  const [layout, setLayout] = useState<LayoutType>('grid')
  const [_usedLayouts, setUsedLayouts] = useState<Set<LayoutType>>(
    new Set(['grid']),
  )
  const portfolioRef = useRef<HTMLDivElement>(null)
  const featuredWorkRef = useRef<HTMLElement>(null)
  const starfieldRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLElement>(null)
  const ndaTextRef = useRef<HTMLParagraphElement>(null)

  const scrollToRef = useScrollToRef()

  useEffect(() => {
    unlockAchievement(AchievementId.portfolioExplorer)
  }, [unlockAchievement])

  const isPortfolioVisible = useIntersectionObserver(portfolioRef, {
    threshold: 0,
    rootMargin: '-60% 0px -40% 0px',
  })

  const isFeaturedWorkVisible = useIntersectionObserver(featuredWorkRef, {
    threshold: 0,
    rootMargin: '0px 0px -100px 0px',
  })

  const isStarfieldVisible = useIntersectionObserver(starfieldRef, {
    threshold: 0,
    rootMargin: '-500px 0px 0px 0px',
  })

  const isBottomVisible = useIntersectionObserver(bottomRef, {
    threshold: 0,
    rootMargin: '0px 0px -100px 0px',
  })

  if (isBottomVisible) {
    unlockAchievement(AchievementId.scrollMaster)
  }

  const shouldShowScrollButton = isFeaturedWorkVisible || isStarfieldVisible

  const handleLayoutChange = (updatedLayout: LayoutType) => {
    setLayout(updatedLayout)
    // For achievements
    setUsedLayouts((prev) => {
      const newUsed = new Set(prev)
      newUsed.add(updatedLayout)

      if (newUsed.size >= 4) {
        unlockAchievement(AchievementId.layoutExplorer)
      }

      return newUsed
    })

    scrollToRef(portfolioRef)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Animated Background (covers entire portfolio page) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      {/* Full-width title section with animated background */}
      <section
        ref={featuredWorkRef}
        className="min-h-screen flex items-center justify-center w-full relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="pt-24 pb-16 px-8 relative z-10 max-w-4xl w-full mx-auto space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-2xl mx-auto font-mohave text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wide"
          >
            PORTFOLIO
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              This application, it's design, and all components herein were
              created from scratch in 5 days in July 2025 to showcase emerging
              Frontend technologies and demonstrate my expertise. You can view
              the code{' '}
              <motion.a
                href="https://github.com/JordanWinslow/new-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => unlockAchievement(AchievementId.codeExplorer)}
                className="text-orange-400 hover:text-orange-300 transition-colors underline decoration-orange-400/30 hover:decoration-orange-300/50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                here
              </motion.a>
            </p>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Below, you can see 6 side-projects I have worked on and see demos
              or view source code. There are also easter eggs hidden in this
              application that you can unlock by experimenting with the UI!
            </p>

            <p className="text-md italic text-gray-300 max-w-2xl mx-auto">
              Click the down arrow below to begin your journey!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 rounded-full animate-pulse" />
          </motion.div>
        </motion.div>
      </section>

      {shouldShowScrollButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-16 right-1/2 translate-x-1/2 z-50"
        >
          <motion.button
            type="button"
            onClick={() => scrollToRef(ndaTextRef)}
            className="w-14 h-14 rounded-full flex items-center justify-center border-[3px] border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-padding hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer"
            style={{
              background:
                'linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b, #10b981, #8b5cf6) border-box',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 3s ease infinite',
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to portfolio"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown />
            </motion.div>
          </motion.button>
        </motion.div>
      )}

      <div ref={starfieldRef} className="h-[3000px] relative">
        <StarField />
      </div>

      <p
        ref={ndaTextRef}
        className="text-lg text-gray-300 max-w-3xl mx-auto relative z-50 px-8 py-12 text-center leading-relaxed"
      >
        While my most recent projects are under NDA, you can read about the
        innovative features and technical solutions I've developed in my{' '}
        <InternalLink
          to="/resume"
          className="text-orange-400 hover:text-orange-300 transition-colors underline decoration-orange-400/30 hover:decoration-orange-300/50"
        >
          resume
        </InternalLink>
        . Below you'll find a collection of side projects I created for fun that
        demonstrate my expertise in modern frontend development and creative
        problem-solving.
      </p>

      <section ref={portfolioRef} className="px-2 sm:px-8 py-16 relative z-10">
        <div className="max-w-7xl sm:mx-auto">
          <PortfolioGrid layout={layout} />
        </div>
      </section>

      {isPortfolioVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        >
          <PortfolioLayoutControls
            layout={layout}
            handleLayoutChange={handleLayoutChange}
          />
        </motion.div>
      )}

      <section className="my-40">
        <PhoneStackShowcase />
      </section>

      <section className="my-40">
        <div className="px-6 py-16 relative z-10">
          <div className="max-w-6xl mx-auto">
            <TechGridSection
              title="Technologies I Work With"
              description="Here are the technologies I'm proficient in. Feel free to explore and filter by category or experience level."
              interactive={true}
            />
          </div>
        </div>
      </section>

      <section ref={bottomRef} className="px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <CallToAction
            title="Ready to Start Your Next Project?"
            description="I'm passionate about creating exceptional digital experiences. Let's discuss how we can bring your vision to life with cutting-edge technology and innovative design."
            primaryButtonText="Get In Touch"
            secondaryButtonText="Learn More About Me"
            secondaryButtonHref="/about"
          />
        </div>
      </section>

      <BackgroundDecorations />
    </div>
  )
}
