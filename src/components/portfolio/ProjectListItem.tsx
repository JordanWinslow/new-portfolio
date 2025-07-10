import { ArrowUpRight, Github } from 'lucide-react'
import type { IPortfolioItem } from '@/assets/data/portfolioItems'

export function ProjectListItem({
  imageSrc,
  title,
  description,
  techItems,
  githubLink,
  demoLink,
}: IPortfolioItem) {
  return (
    <div className="gradient-border enhanced-shadow rounded-xl bg-black p-6 flex flex-col md:flex-row gap-6 hover:bg-black transition-all duration-300 hover-lift">
      <div className="w-full md:w-64 h-48 md:h-auto relative overflow-hidden rounded-lg flex-shrink-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-mohave text-xl font-bold text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techItems.map((tech) => (
            <span
              key={tech}
              className="cursor-pointer px-2 py-1 text-xs font-mono bg-white/10 text-white/80 rounded border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>
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
  )
}
