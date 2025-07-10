import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@radix-ui/react-tooltip'
import { ArrowUpRight, Code2 } from 'lucide-react'
import type { IPortfolioItem } from '@/assets/data/portfolioItems'

export function ProjectTableRow({
  imageSrc,
  title,
  description,
  techItems,
  githubLink,
  demoLink,
}: IPortfolioItem) {
  return (
    <tr className="border-t border-white/10 hover:bg-white/5 transition-colors duration-300">
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          <img
            src={imageSrc}
            alt={title}
            className="w-12 h-12 rounded object-cover"
            loading="lazy"
          />

          <span className="font-mohave font-semibold text-white">{title}</span>
        </div>
      </td>

      <td className="px-6 py-4 text-gray-400 max-w-xs">
        <Tooltip delayDuration={1000}>
          <TooltipTrigger asChild>
            <p className="line-clamp-2 cursor-help overflow-hidden text-ellipsis whitespace-nowrap">
              {description}
            </p>
          </TooltipTrigger>
          <TooltipContent>{description}</TooltipContent>
        </Tooltip>
      </td>

      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-1">
          {techItems.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono bg-white/10 text-white/90 rounded-full border border-white/20"
            >
              {tech}
            </span>
          ))}

          {techItems.length > 3 && (
            <span className="px-2 py-1 text-xs text-gray-400">
              +{techItems.length - 3}
            </span>
          )}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          {githubLink && (
            <a
              href={githubLink}
              className="gradient-border-icon"
              title="View Code"
            >
              <Code2 size={16} />
            </a>
          )}

          {demoLink && (
            <a
              href={demoLink}
              className="gradient-border-icon"
              title="Live Demo"
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </td>
    </tr>
  )
}
