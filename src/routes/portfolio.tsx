import { createFileRoute } from '@tanstack/react-router'
import { ArrowDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import CNBCRedesign from '@/assets/images/portfolio/CNBCRedesign.jpg'
import containmentBreach from '@/assets/images/portfolio/containment-breach.gif'
import ecosystem from '@/assets/images/portfolio/ecosystem.gif'
import PokeTeam from '@/assets/images/portfolio/PokeTeam.jpg'
import poketeamdemo from '@/assets/images/portfolio/poketeamdemo.gif'
import { useAchievements } from '@/components/achievements/AchievementsContext'
import { CollaborationSection } from '@/components/CollaborationSection'
import { BackgroundDecorations } from '@/components/decorative/BackgroundDecorations'
import { StarField } from '@/components/decorative/StarField'
import { FixedNavigation } from '@/components/navigation/FixedNavigation'
import type { LayoutType } from '@/components/portfolio/LayoutType'
import PhoneStackShowcase from '@/components/portfolio/PhoneStackShowcase'
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid'
import { PortfolioLayoutControls } from '@/components/portfolio/PortfolioLayoutControls'
import { useIntersectionObserver } from '@/lib/utils'

const phoneImages = [
  CNBCRedesign,
  PokeTeam,
  poketeamdemo,
  ecosystem,
  containmentBreach,
  CNBCRedesign,
  PokeTeam,
]

export const Route = createFileRoute('/portfolio')({
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
  const starfieldRef = useRef<HTMLElement>(null)
  const hasUnlockedPageAchievement = useRef(false)

  // Achievement triggers
  useEffect(() => {
    if (!hasUnlockedPageAchievement.current) {
      // Unlock achievement for visiting portfolio page
      unlockAchievement('portfolio_explorer')
      hasUnlockedPageAchievement.current = true
    }
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

  const shouldShowScrollButton = isFeaturedWorkVisible || isStarfieldVisible

  const handleLayoutChange = (updatedLayout: LayoutType) => {
    setLayout(updatedLayout)
    setUsedLayouts((prev) => {
      const newUsed = new Set(prev)
      newUsed.add(updatedLayout)

      // Check if all layouts have been used
      if (newUsed.size >= 3) {
        unlockAchievement('layout_explorer')
      }

      return newUsed
    })
    scrollToPortfolio()
  }

  const scrollToPortfolio = () => {
    if (portfolioRef.current) {
      const rect = portfolioRef.current.getBoundingClientRect()
      const scrollTop = window.scrollY + rect.top
      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Animated Background (covers entire portfolio page) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>
      <FixedNavigation />

      {/* Full-width title section with animated background */}
      <section
        ref={featuredWorkRef}
        className="min-h-screen flex items-center justify-center w-full relative"
      >
        <div className="pt-24 pb-16 px-8 relative z-10 max-w-4xl w-full mx-auto">
          <h2 className="max-w-2xl mx-auto font-mohave text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wide">
            PORTFOLIO
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-2">
            This application and all components therein was coded from scratch
            in July 2025 to showcase emerging Frontend technology and
            demonstrate my expertise. You can view the code{' '}
            <a
              href="https://github.com/JordanWinslow/new-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </p>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
            Below, you can see 6 projects I have worked on and see demos or view
            source code. There are also easter eggs hidden in this application
            that you can unlock by experimenting with the UI!
          </p>

          <p className="text-md italic text-gray-300 max-w-2xl mx-auto mb-8">
            Click the down arrow below to begin your journey!
          </p>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 rounded-full animate-pulse" />
        </div>
      </section>

      {shouldShowScrollButton && (
        <div className="fixed bottom-16 right-1/2 translate-x-1/2 z-50 transition-opacity duration-300 ease-in-out">
          <button
            type="button"
            onClick={scrollToPortfolio}
            className="w-14 h-14 rounded-full flex items-center justify-center border-[3px] border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-padding animate-bounce hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer"
            style={{
              background:
                'linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b, #10b981, #8b5cf6) border-box',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 3s ease infinite, bounce 1s infinite',
            }}
            aria-label="Scroll to portfolio"
          >
            <ArrowDown />
          </button>
        </div>
      )}

      <section ref={starfieldRef} className="h-1500 relative overflow-hidden">
        <StarField />
      </section>

      <section ref={portfolioRef} className="px-2 sm:px-8 py-16 relative z-10">
        <div className="max-w-7xl sm:mx-auto">
          <PortfolioGrid layout={layout} />
        </div>
      </section>

      {isPortfolioVisible && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <PortfolioLayoutControls
            layout={layout}
            handleLayoutChange={handleLayoutChange}
          />
        </div>
      )}

      <section className="my-40">
        <PhoneStackShowcase images={phoneImages} />
      </section>

      <CollaborationSection />

      <BackgroundDecorations />
    </div>
  )
}
