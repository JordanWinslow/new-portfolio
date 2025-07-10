import { ArrowUpRight, Github } from 'lucide-react'
import type { IPortfolioItem } from '@/assets/data/portfolioItems'
import { useResizeObserver } from '@/lib/utils'
import { Button } from '../ui/Button'

export const ProjectCard = ({
  variant,
  imageSrc,
  title,
  description,
  techItems,
  githubLink,
  demoLink,
}: IPortfolioItem & {
  variant: 'hoverToDisplay' | 'alwaysDisplay'
}) => {
  const [cardRef, isWideEnough] = useResizeObserver<HTMLDivElement>(
    500,
    'width',
    'gt',
  )

  return (
    <div
      ref={cardRef}
      className="group relative gradient-border enhanced-shadow rounded-xl overflow-hidden bg-black backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.02] hover-lift"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/90 ${variant === 'hoverToDisplay' ? 'to-black/90 sm:via-black/80 sm:to-black/10' : 'via-black/50 to-transparent'}  opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          {variant === 'hoverToDisplay' && (
            <>
              <h3 className="font-mohave text-xl font-bold text-white mb-2">
                {title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {description}
              </p>

              {isWideEnough && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {techItems.map((tech) => (
                    <span
                      key={tech}
                      className="cursor-pointer px-3 py-1 text-xs font-mono bg-white/10 text-white/90 rounded-full border border-white/20 hover:border-purple-400/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </>
          )}
          <div className="flex gap-3">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" Icon={<Github size={14} />}>
                  CODE
                </Button>
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
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
            {techItems.map((tech) => (
              <span
                key={tech}
                className="cursor-pointer px-3 py-1 text-xs font-mono bg-white/10 text-white/90 rounded-full border border-white/20 hover:border-purple-400/50 transition-all duration-300"
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
