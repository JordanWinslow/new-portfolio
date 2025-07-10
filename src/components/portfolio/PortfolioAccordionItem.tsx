import { ArrowUpRight, Github } from 'lucide-react'
import type { IPortfolioItem } from '@/assets/data/portfolioItems'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/Accordion'

export function ProjectAccordionItem({
  imageSrc,
  title,
  description,
  techItems,
  githubLink,
  demoLink,
}: IPortfolioItem) {
  return (
    <AccordionItem
      value={title}
      className="border-b border-white/10 last:border-b-0"
    >
      <AccordionTrigger className="px-6 py-4 hover:bg-white/5 transition-colors duration-300 [&[data-state=open]]:bg-white/5">
        <div className="flex items-center gap-4 w-full">
          <img
            src={imageSrc}
            alt={title}
            className="w-12 h-12 rounded object-cover flex-shrink-0"
            loading="lazy"
          />
          <span className="font-mohave font-semibold text-white text-left">
            {title}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-6">
        <div className="space-y-6">
          <div className="w-full h-48 relative overflow-hidden rounded-lg">
            <img
              src={imageSrc}
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
            <div className="flex flex-wrap gap-2">
              {techItems.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-white/10 text-white/90 rounded-full border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mohave font-semibold text-white mb-3 text-sm uppercase tracking-wide">
              Links
            </h4>
            <div className="flex gap-4">
              {githubLink && (
                <a
                  href={githubLink}
                  className="gradient-border-button flex items-center gap-2"
                >
                  <Github size={16} />
                  GITHUB
                </a>
              )}

              {demoLink && (
                <a
                  href={demoLink}
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
