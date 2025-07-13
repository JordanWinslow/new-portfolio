import { ArrowUpRight, Github, Play } from 'lucide-react'
import type { IPortfolioItem } from '@/assets/data/portfolioItems'

export function ProjectListItem({
  imageSrc,
  title,
  description,
  techItems,
  githubLink,
  demoLink,
  videoLink,
  onVideoClick,
}: IPortfolioItem & {
  onVideoClick?: (videoUrl: string, title: string) => void
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-6 flex flex-col md:flex-row gap-6 hover:border-white/20 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 transition-all duration-300 hover-lift group relative">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-orange-500/10 transition-all duration-300 pointer-events-none" />

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300 pointer-events-none blur-xl" />
      <div className="w-full md:w-64 h-48 md:h-auto relative overflow-hidden rounded-lg flex-shrink-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1 relative z-10">
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
          {videoLink && onVideoClick && (
            <button
              type="button"
              onClick={() => onVideoClick(videoLink, title)}
              className="gradient-border-button flex items-center gap-2"
            >
              <Play size={16} />
              VIDEO
            </button>
          )}
          {demoLink && !videoLink && (
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
