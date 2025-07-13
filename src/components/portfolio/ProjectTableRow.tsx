import { ArrowUpRight, Code2, Play } from 'lucide-react'
import type { IPortfolioItem } from '@/assets/data/portfolioItems'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/Tooltip'

export function ProjectTableRow({
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
    <tr className="border-t border-white/10 hover:bg-gradient-to-r hover:from-white/5 hover:to-white/10 transition-all duration-300 relative group">
      <td className="px-6 py-4 relative z-10">
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={title}
            className="w-12 h-12 rounded object-cover"
            loading="lazy"
          />

          <div className="flex flex-col">
            <span className="font-mohave font-semibold text-white">
              {title}
            </span>
            <span className="text-xs text-gray-400 font-mono">
              {yearCreated}
            </span>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 text-gray-400 max-w-xs relative z-10">
        <Tooltip delayDuration={1000}>
          <TooltipTrigger asChild>
            <p className="line-clamp-2 cursor-help overflow-hidden text-ellipsis whitespace-nowrap">
              {description}
            </p>
          </TooltipTrigger>
          <TooltipContent>{description}</TooltipContent>
        </Tooltip>
      </td>

      <td className="px-6 py-4 relative z-10">
        <div className="flex flex-wrap gap-1">
          {tech &&
            tech.slice(0, 3).map((techItem: string) => (
              <span
                key={techItem}
                className="px-2 py-1 text-xs font-mono bg-white/10 text-white/90 rounded-full border border-white/20"
              >
                {techItem}
              </span>
            ))}

          {tech && tech.length > 3 && (
            <span className="px-2 py-1 text-xs text-gray-400">
              +{tech.length - 3}
            </span>
          )}
        </div>
      </td>
      <td className="px-6 py-4 relative z-10">
        <div className="flex gap-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onLinkClick?.(github)}
              className="gradient-border-icon"
              title="View Code"
            >
              <Code2 size={16} />
            </a>
          )}

          {videoLink && onVideoClick && (
            <button
              type="button"
              onClick={() => {
                onVideoClick(videoLink, title)
                onLinkClick?.(videoLink)
              }}
              className="gradient-border-icon"
              title="Watch Video"
            >
              <Play size={16} />
            </button>
          )}

          {demo && !videoLink && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onLinkClick?.(demo)}
              className="gradient-border-icon"
              title="Live Demo"
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </td>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-orange-500/5 transition-all duration-300 pointer-events-none" />
    </tr>
  )
}
