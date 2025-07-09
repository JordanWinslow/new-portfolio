import { ArrowUpRight, Github } from 'lucide-react'
import type { portfolioItems } from '@/assets/data/portfolioItems'

export const ProjectCard = ({ item }: { item: (typeof portfolioItems)[0] }) => {
  return (
    <div className="group relative gradient-border enhanced-shadow rounded-xl overflow-hidden bg-black backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.02] hover-lift">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={item.image || '/placeholder.svg'}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
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
              className="gradient-border-button flex items-center gap-2"
            >
              <Github size={14} />
              CODE
            </a>
            <a
              href={item.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border-button flex items-center gap-2"
            >
              <ArrowUpRight size={14} />
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
              className="px-3 py-1 text-xs font-mono bg-white/10 text-white/90 rounded-full border border-white/20 hover:border-purple-400/50 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
