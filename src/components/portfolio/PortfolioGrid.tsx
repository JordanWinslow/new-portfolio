import { ArrowUpRight, Code2, Github } from 'lucide-react'
import { portfolioItems } from '@/assets/data/portfolioItems'
import type { LayoutType } from '@/types/portfolio/LayoutType'
import { ProjectCard } from './ProjectCard'

interface IPortfolioGridProps {
  layout: LayoutType
}

export function PortfolioGrid({ layout }: IPortfolioGridProps) {
  switch (layout) {
    case 'grid':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      )

    case 'columns':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      )

    case 'list':
      return (
        <div className="space-y-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="gradient-border enhanced-shadow rounded-xl bg-black p-6 flex flex-col md:flex-row gap-6 hover:bg-black transition-all duration-300 hover-lift"
            >
              <div className="w-full md:w-64 h-48 md:h-auto relative overflow-hidden rounded-lg flex-shrink-0">
                <img
                  src={item.image || '/placeholder.svg'}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
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
                    className="gradient-border-button flex items-center gap-2"
                  >
                    <Github size={16} />
                    GITHUB
                  </a>
                  <a
                    href={item.demo}
                    className="gradient-border-button flex items-center gap-2"
                  >
                    <ArrowUpRight size={16} />
                    LIVE DEMO
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )

    case 'table':
      return (
        <div className="gradient-border rounded-xl overflow-hidden bg-black">
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
                {portfolioItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t border-white/10 hover:bg-white/5 transition-colors duration-300"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image || '/placeholder.svg'}
                          alt={item.title}
                          className="w-12 h-12 rounded object-cover"
                          loading="lazy"
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
                            className="px-2 py-1 text-xs font-mono bg-white/10 text-white/90 rounded-full border border-white/20"
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
                          className="gradient-border-icon"
                          title="View Code"
                        >
                          <Code2 size={16} />
                        </a>
                        <a
                          href={item.demo}
                          className="gradient-border-icon"
                          title="Live Demo"
                        >
                          <ArrowUpRight size={16} />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    default:
      return <div>Error - Invalid layout type</div>
  }
}
