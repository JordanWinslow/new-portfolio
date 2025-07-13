import { ArrowUpRight, Github, Play } from 'lucide-react'
import { useState } from 'react'
import type { IPortfolioItem } from '@/assets/data/portfolioItems'
import { useResizeObserver } from '@/lib/utils'
import { Button } from '../ui/Button'

export const ProjectCard = ({
  variant,
  yearCreated,
  image,
  title,
  description,
  tech,
  github,
  demo,
  videoLink,
  onVideoClick,
  onLinkClick,
}: IPortfolioItem & {
  variant: 'hoverToDisplay' | 'alwaysDisplay'
  onVideoClick?: (videoUrl: string, title: string) => void
  onLinkClick?: (link: string) => void
}) => {
  // Simple touch state management
  const [isTouched, setIsTouched] = useState(false)

  const handleTouchStart = () => {
    setIsTouched(true)
  }

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsTouched(false)
    }, 2000)
  }

  // Not enough room to display title, description and tech badges under 500px so I have decided to hide the
  // tech badges under 500px as this was the simplest solution.
  const [cardRef, showTechBadges] = useResizeObserver<HTMLDivElement>(
    500,
    'width',
    'gt',
  )

  return (
    <div
      ref={cardRef}
      className={`group relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm transform transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.02] hover:-translate-y-2 hover:border-white/20 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 active:scale-[0.98] touch-manipulation ${isTouched ? 'touch-active' : ''}`}
      style={{ touchAction: 'manipulation' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Year indicator */}
      <div className="absolute top-3 right-3 z-20">
        <div className="px-2 py-1 bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg">
          <span className="text-xs font-mono text-white/90">{yearCreated}</span>
        </div>
      </div>

      {/* Background gradient on hover */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-br from-pink-400/0 via-rose-400/0 to-pink-300/0 ${isTouched ? 'from-pink-400/5 via-rose-400/5 to-pink-300/5' : 'group-hover:from-pink-400/5 group-hover:via-rose-400/5 group-hover:to-pink-300/5'} transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] pointer-events-none`}
      />

      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isTouched ? 'scale-110' : 'group-hover:scale-110'}`}
          loading="lazy"
        />
        {/* Black gradient overlay for text readability */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 via-black/60 to-black/20 sm:from-black/90 sm:via-black/70 sm:to-black/30 transition-opacity duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isTouched ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
        />
        <div
          className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${isTouched ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}
        >
          {variant === 'hoverToDisplay' && (
            <>
              <h3 className="font-mohave text-xl font-bold text-white mb-2">
                {title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {description}
              </p>

              {showTechBadges && tech && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {tech?.map((tech) => (
                    <span
                      key={tech}
                      className="cursor-pointer px-3 py-1 text-xs font-mono bg-white/10 text-white/90 rounded-full border border-white/20 hover:border-purple-400/50 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] touch-manipulation"
                      style={{ touchAction: 'manipulation' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </>
          )}
          <div className="flex gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onLinkClick?.(github)}
                className="touch-manipulation"
                style={{ touchAction: 'manipulation' }}
              >
                <Button variant="secondary" Icon={<Github size={14} />}>
                  CODE
                </Button>
              </a>
            )}
            {videoLink && onVideoClick && (
              <Button
                variant="secondary"
                Icon={<Play size={14} />}
                onClick={() => {
                  onVideoClick(videoLink, title)
                  onLinkClick?.(videoLink)
                }}
                className="touch-manipulation"
                style={{ touchAction: 'manipulation' }}
              >
                VIDEO
              </Button>
            )}
            {demo && !videoLink && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onLinkClick?.(demo)}
                className="touch-manipulation"
                style={{ touchAction: 'manipulation' }}
              >
                <Button variant="secondary" Icon={<ArrowUpRight size={14} />}>
                  DEMO
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
      {variant === 'alwaysDisplay' && (
        <div className="p-6">
          <h3 className="font-mohave text-xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-400 text-md mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech?.map((tech) => (
              <span
                key={tech}
                className="cursor-pointer px-3 py-1 text-xs font-mono bg-white/10 text-white/90 rounded-full border border-white/20 hover:border-purple-400/50 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] touch-manipulation"
                style={{ touchAction: 'manipulation' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
