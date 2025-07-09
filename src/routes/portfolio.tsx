import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { BackgroundDecorations } from '@/components/decorative/BackgroundDecorations'
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid'
import { PortfolioLayoutControls } from '@/components/portfolio/PortfolioLayoutControls'
import { Button } from '@/components/ui/button'
import type { LayoutType } from '@/types/portfolio/LayoutType'
import { Route as homeRoute } from '../routes/index'

export const Route = createFileRoute('/portfolio')({
  component: Portfolio,
})

function Portfolio() {
  const [layout, setLayout] = useState<LayoutType>('grid')
  const [showControls, setShowControls] = useState(false)
  const portfolioRef = useRef<HTMLDivElement>(null)

  // Show and hide layout controls when portfolio grid is visible/not visible
  useEffect(() => {
    const handleScroll = () => {
      if (portfolioRef.current) {
        const rect = portfolioRef.current.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        setShowControls(isVisible)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLayoutChange = (updatedLayout: LayoutType) => {
    setLayout(updatedLayout)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <header className="relative z-20 p-8">
        <div className="flex justify-between items-center">
          <Link to={homeRoute.to}>
            <Button variant="secondary">HOME</Button>
          </Link>

          <h1 className="font-mohave text-3xl font-bold uppercase tracking-wide bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            PORTFOLIO
          </h1>
        </div>
      </header>

      <section className="px-8 py-16 max-w-4xl mx-auto text-center relative z-10 mb-200">
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

      <section ref={portfolioRef} className="px-8 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <PortfolioGrid layout={layout} />
        </div>
      </section>

      {showControls && (
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
