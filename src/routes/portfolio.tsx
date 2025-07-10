import { createFileRoute, Link } from '@tanstack/react-router'
import { useRef, useState } from 'react'
import { BackgroundDecorations } from '@/components/decorative/BackgroundDecorations'
import { StarField } from '@/components/decorative/StarField'
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid'
import { PortfolioLayoutControls } from '@/components/portfolio/PortfolioLayoutControls'
import { Button } from '@/components/ui/Button'
import { useIntersectionObserver } from '@/lib/utils'
import type { LayoutType } from '@/types/portfolio/LayoutType'
import { Route as homeRoute } from '../routes/index'

export const Route = createFileRoute('/portfolio')({
  component: Portfolio,
})

function Portfolio() {
  const [layout, setLayout] = useState<LayoutType>('grid')
  const portfolioRef = useRef<HTMLDivElement>(null)
  const featuredWorkRef = useRef<HTMLElement>(null)
  const starfieldRef = useRef<HTMLElement>(null)

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

  // Show scroll button when either featured work or starfield is visible
  const shouldShowScrollButton = isFeaturedWorkVisible || isStarfieldVisible

  const handleLayoutChange = (updatedLayout: LayoutType) => {
    setLayout(updatedLayout)
  }

  const handleScrollToPortfolio = () => {
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
      <header className="relative z-20 p-8">
        <div className="flex justify-between items-center">
          <Link to={homeRoute.to}>
            <Button variant="secondary">HOME</Button>
          </Link>

          <h1 className="font-mohave text-3xl font-bold uppercase tracking-wide">
            PORTFOLIO
          </h1>
        </div>
      </header>

      <section
        ref={featuredWorkRef}
        className="px-8 py-16 max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="font-mohave text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wide">
          FEATURED WORK
        </h2>

        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          A collection of projects showcasing expertise in modern web
          technologies, from interactive frontends to scalable backend
          solutions.
        </p>
        <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 rounded-full mx-auto animate-pulse"></div>
      </section>

      <section ref={starfieldRef} className="h-1500 relative overflow-hidden">
        <StarField />
      </section>

      {/* Floating scroll button */}
      {shouldShowScrollButton && (
        <div className="fixed bottom-16 right-1/2 translate-x-1/2 z-50 transition-opacity duration-300 ease-in-out">
          <button
            type="button"
            onClick={handleScrollToPortfolio}
            className="w-14 h-14 rounded-full flex items-center justify-center border-[3px] border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-padding animate-bounce hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer"
            style={{
              background:
                'linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b, #10b981, #8b5cf6) border-box',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 3s ease infinite, bounce 1s infinite',
            }}
            aria-label="Scroll to portfolio"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      )}

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

      <section className="py-32 relative overflow-hidden">
        <div className="relative z-10 text-center px-8">
          <h2 className="font-mohave text-3xl md:text-4xl font-bold mb-6 text-white uppercase tracking-wide">
            READY TO COLLABORATE?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Let's build something amazing together. I'm always open to
            discussing new projects and opportunities.
          </p>
          <Button className="gradient-cta-button font-mohave font-semibold text-lg px-8 py-4 rounded-xl uppercase tracking-wide hover-lift">
            GET IN TOUCH
          </Button>
        </div>
      </section>

      <BackgroundDecorations />
    </div>
  )
}
