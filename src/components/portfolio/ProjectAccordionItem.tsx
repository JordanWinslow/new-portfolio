import { ArrowUpRight, Github, Play } from 'lucide-react'
import type { IPortfolioItem } from '@/assets/data/portfolioItems'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/Accordion'

export function ProjectAccordionItem({
  image,
  title,
  description,
  tech,
  github,
  demo,
  videoLink,
  yearCreated,
  onVideoClick,
  onLinkClick,
}: IPortfolioItem & {
  onVideoClick?: (videoUrl: string, title: string) => void
  onLinkClick?: (link: string) => void
}) {
  return (
    <AccordionItem
      value={title}
      className="border-b border-white/10 last:border-b-0"
    >
      <AccordionTrigger className="px-6 py-4 hover:bg-gradient-to-r hover:from-white/5 hover:to-white/10 transition-all duration-300 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-white/5 [&[data-state=open]]:to-white/10 group relative">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-orange-500/5 transition-all duration-300 pointer-events-none" />
        <div className="flex items-center gap-4 w-full relative z-10">
          <img
            src={image}
            alt={title}
            className="w-12 h-12 rounded object-cover flex-shrink-0"
            loading="lazy"
          />
          <div className="flex flex-col">
            <span className="font-mohave font-semibold text-white text-left">
              {title}
            </span>
            <span className="text-xs text-gray-400 font-mono">
              {yearCreated}
            </span>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-6 bg-gradient-to-br from-white/2 to-white/5">
        <div className="space-y-6">
          <div className="w-full h-48 relative overflow-hidden rounded-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <p className="text-gray-400 leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          <div>
            <h4 className="font-mohave font-semibold text-white mb-3 text-sm uppercase tracking-wide">
              Tech Stack
            </h4>
            {tech && (
              <div className="flex flex-wrap gap-2">
                {tech.map((techItem: string) => (
                  <span
                    key={techItem}
                    className="px-3 py-1 text-xs font-mono bg-white/10 text-white/90 rounded-full border border-white/20"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div>
            <h4 className="font-mohave font-semibold text-white mb-3 text-sm uppercase tracking-wide">
              Links
            </h4>
            <div className="flex gap-4">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onLinkClick?.(github)}
                  className="gradient-border-button flex items-center gap-2"
                >
                  <Github size={16} />
                  GITHUB
                </a>
              )}

              {videoLink && onVideoClick && (
                <button
                  type="button"
                  onClick={() => {
                    onVideoClick(videoLink, title)
                    onLinkClick?.(videoLink)
                  }}
                  className="gradient-border-button flex items-center gap-2"
                >
                  <Play size={16} />
                  VIDEO
                </button>
              )}

              {demo && !videoLink && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onLinkClick?.(demo)}
                  className="gradient-border-button flex items-center gap-2"
                >
                  <ArrowUpRight size={16} />
                  LIVE DEMO
                </a>
              )}
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
