'use client'

import { createFileRoute } from '@tanstack/react-router'
import { Columns, ExternalLink, Github, Grid, List, Table } from 'lucide-react'
import type React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/portfolio')({
  component: Portfolio,
})

const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with cart, checkout, and payment integration built with React and Node.js.',
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
  },
  {
    id: 2,
    title: 'AI Dashboard',
    description:
      'Interactive dashboard for monitoring and visualizing AI model performance with real-time analytics.',
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tech: ['Next.js', 'Python', 'TensorFlow', 'D3.js'],
  },
  {
    id: 3,
    title: 'Social Media App',
    description:
      'Feature-rich social platform with real-time messaging and content sharing capabilities.',
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tech: ['React Native', 'Firebase', 'WebRTC', 'Redux'],
  },
  {
    id: 4,
    title: '3D Portfolio Visualizer',
    description:
      'Three.js powered 3D visualization of projects and skills with interactive elements.',
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tech: ['Three.js', 'WebGL', 'React', 'GSAP'],
  },
  {
    id: 5,
    title: 'Blockchain Explorer',
    description:
      'Real-time blockchain data visualization and transaction tracking with advanced analytics.',
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tech: ['Vue.js', 'Web3.js', 'Ethereum', 'Chart.js'],
  },
  {
    id: 6,
    title: 'AR Product Viewer',
    description:
      'Augmented reality application for interactive product visualization and virtual try-on.',
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tech: ['AR.js', 'WebXR', 'Three.js', 'React'],
  },
]

type LayoutType = 'grid' | 'columns' | 'list' | 'table'

function Portfolio() {
  const [layout, setLayout] = useState<LayoutType>('grid')
  const [showControls, setShowControls] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const portfolioRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  // Optimized mouse tracking with throttling
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY }

    // Throttle updates to reduce re-renders
    requestAnimationFrame(() => {
      setMousePosition({ x: mouseRef.current.x, y: mouseRef.current.y })
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (portfolioRef.current) {
        const rect = portfolioRef.current.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        setShowControls(isVisible)
      }
    }

    // Throttle mouse move events
    let ticking = false
    const throttledMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleMouseMove(e)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('mousemove', throttledMouseMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleMouseMove])

  const ProjectCard = ({
    item,
    index,
  }: {
    item: (typeof portfolioItems)[0]
    index: number
  }) => {
    const cardRef = useRef<HTMLDivElement>(null)

    const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget
      const rect = card.getBoundingClientRect()

      // Calculate distance from mouse to card center
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distance = Math.sqrt(
        (mousePosition.x - centerX) ** 2 + (mousePosition.y - centerY) ** 2,
      )

      // Calculate border brightness based on proximity (closer = brighter)
      const maxDistance = 300
      const proximity = Math.max(0, 1 - distance / maxDistance)
      const brightness = 0.3 + proximity * 0.7 // Base brightness + proximity boost

      card.style.setProperty('--border-brightness', brightness.toString())
    }

    return (
      <div
        ref={cardRef}
        className="group relative gradient-border-proximity enhanced-shadow rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.02]"
        style={
          {
            animationDelay: `${index * 0.1}s`,
            '--border-brightness': '0.3',
          } as React.CSSProperties
        }
        onMouseMove={handleCardMouseMove}
      >
        <div className="aspect-video relative overflow-hidden">
          <img
            src={item.image || '/placeholder.svg'}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="font-mohave text-xl font-bold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4 line-clamp-2">
              {item.description}
            </p>
            <div className="flex gap-3">
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border-proximity px-3 py-1.5 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2 uppercase tracking-wide"
              >
                <Github size={14} />
                CODE
              </a>
              <a
                href={item.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border-proximity px-3 py-1.5 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2 uppercase tracking-wide"
              >
                <ExternalLink size={14} />
                DEMO
              </a>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-mohave text-lg font-semibold text-white mb-2">
            {item.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80 rounded border border-white/20 hover:border-white/40 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Optimized animated background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-pink-900/5 to-orange-900/10 animate-pulse will-change-transform"></div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-20 p-8">
        <div className="flex justify-between items-center">
          <h1 className="font-mohave text-3xl font-bold uppercase tracking-wide">
            PORTFOLIO
          </h1>
          <Button
            variant="outline"
            className="gradient-border-proximity bg-black/50 text-white border-white/20 hover:bg-white/10 font-mohave font-semibold uppercase tracking-wide"
            onClick={() => window.history.back()}
          >
            ← BACK
          </Button>
        </div>
      </header>

      {/* Intro Section */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-mohave text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wide">
          FEATURED WORK
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          A collection of projects showcasing expertise in modern web
          technologies, from interactive frontends to scalable backend
          solutions.
        </p>
        <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 rounded-full mx-auto"></div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-purple-500/30 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-16 h-16 border border-pink-500/30 rounded-lg rotate-45 animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </section>

      {/* Portfolio Grid */}
      <section ref={portfolioRef} className="px-8 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {layout === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <ProjectCard key={item.id} item={item} index={index} />
              ))}
            </div>
          )}

          {layout === 'columns' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems.map((item, index) => (
                <ProjectCard key={item.id} item={item} index={index} />
              ))}
            </div>
          )}

          {layout === 'list' && (
            <div className="space-y-8">
              {portfolioItems.map((item, index) => (
                <div
                  key={item.id}
                  className="gradient-border-proximity enhanced-shadow rounded-lg bg-black/50 backdrop-blur-sm p-6 flex flex-col md:flex-row gap-6 hover:bg-black/60 transition-all duration-300"
                  style={
                    {
                      '--border-brightness': '0.3',
                    } as React.CSSProperties
                  }
                  onMouseMove={(e) => {
                    const card = e.currentTarget
                    const rect = card.getBoundingClientRect()
                    const centerX = rect.left + rect.width / 2
                    const centerY = rect.top + rect.height / 2
                    const distance = Math.sqrt(
                      (mousePosition.x - centerX) ** 2 +
                        (mousePosition.y - centerY) ** 2,
                    )
                    const maxDistance = 300
                    const proximity = Math.max(0, 1 - distance / maxDistance)
                    const brightness = 0.3 + proximity * 0.7
                    card.style.setProperty(
                      '--border-brightness',
                      brightness.toString(),
                    )
                  }}
                >
                  <div className="w-full md:w-64 h-48 md:h-auto relative overflow-hidden rounded-lg flex-shrink-0">
                    <img
                      src={item.image || '/placeholder.svg'}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mohave text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80 rounded border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={item.github}
                        className="gradient-border-proximity px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2 uppercase tracking-wide"
                      >
                        <Github size={16} />
                        GITHUB
                      </a>
                      <a
                        href={item.demo}
                        className="gradient-border-proximity px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2 uppercase tracking-wide"
                      >
                        <ExternalLink size={16} />
                        LIVE DEMO
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {layout === 'table' && (
            <div className="gradient-border-proximity rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-4 text-left font-mohave font-semibold text-white uppercase tracking-wide">
                        PROJECT
                      </th>
                      <th className="px-6 py-4 text-left font-mohave font-semibold text-white uppercase tracking-wide">
                        DESCRIPTION
                      </th>
                      <th className="px-6 py-4 text-left font-mohave font-semibold text-white uppercase tracking-wide">
                        TECH STACK
                      </th>
                      <th className="px-6 py-4 text-left font-mohave font-semibold text-white uppercase tracking-wide">
                        LINKS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolioItems.map((item, index) => (
                      <tr
                        key={item.id}
                        className="border-t border-white/10 hover:bg-white/5 transition-colors duration-200"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <img
                              src={item.image || '/placeholder.svg'}
                              alt={item.title}
                              className="w-12 h-12 rounded object-cover"
                            />
                            <span className="font-mohave font-semibold text-white">
                              {item.title}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-400 max-w-xs">
                          <p className="line-clamp-2">{item.description}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {item.tech.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                            {item.tech.length > 3 && (
                              <span className="px-2 py-1 text-xs text-gray-400">
                                +{item.tech.length - 3}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <a
                              href={item.github}
                              className="p-2 rounded hover:bg-white/10 transition-colors duration-200"
                            >
                              <Github size={16} className="text-white" />
                            </a>
                            <a
                              href={item.demo}
                              className="p-2 rounded hover:bg-white/10 transition-colors duration-200"
                            >
                              <ExternalLink size={16} className="text-white" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Layout Controls */}
      {showControls && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 p-3 gradient-border-proximity enhanced-shadow rounded-lg bg-black/80 backdrop-blur-md">
          {[
            { id: 'grid', icon: Grid, label: 'GRID' },
            { id: 'columns', icon: Columns, label: 'COLUMNS' },
            { id: 'list', icon: List, label: 'LIST' },
            { id: 'table', icon: Table, label: 'TABLE' },
          ].map((control) => {
            const Icon = control.icon
            return (
              <button
                key={control.id}
                onClick={() => setLayout(control.id as LayoutType)}
                className={`p-3 rounded-md transition-all duration-300 font-mohave font-semibold text-xs tracking-wide ${
                  layout === control.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                aria-label={`Switch to ${control.label} layout`}
              >
                <Icon size={20} />
              </button>
            )
          })}
        </div>
      )}

      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-orange-900/20"></div>
        <div className="relative z-10 text-center px-8">
          <h2 className="font-mohave text-3xl md:text-4xl font-bold mb-6 text-white uppercase tracking-wide">
            READY TO COLLABORATE?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Let's build something amazing together. I'm always open to
            discussing new projects and opportunities.
          </p>
          <Button className="gradient-border-proximity enhanced-shadow font-mohave font-semibold text-lg px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 rounded-lg uppercase tracking-wide">
            GET IN TOUCH
          </Button>
        </div>
      </section>

      {/* Sparkle decorations */}
      <div
        className="sparkle text-2xl"
        style={{ top: '20%', left: '10%', animationDelay: '0s' }}
      >
        ✦
      </div>
      <div
        className="sparkle text-lg"
        style={{ top: '40%', right: '15%', animationDelay: '1s' }}
      >
        ✕
      </div>
      <div
        className="sparkle text-xl"
        style={{ top: '80%', left: '20%', animationDelay: '2s' }}
      >
        ✦
      </div>
      <div
        className="sparkle text-sm"
        style={{ top: '60%', right: '25%', animationDelay: '0.5s' }}
      >
        ✕
      </div>
    </div>
  )
}
