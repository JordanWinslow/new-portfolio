import { ArrowUpRight, Code2, Github } from 'lucide-react'
import {
  type IPortfolioItem,
  portfolioItems,
} from '@/assets/data/portfolioItems'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/Tooltip'
import type { LayoutType } from '@/types/portfolio/LayoutType'
import { ProjectAccordionItem } from './PortfolioAccordionItem'
import { ProjectCard } from './ProjectCard'
import { ProjectListItem } from './ProjectListItem'
import { ProjectTableRow } from './ProjectTableRow'

interface IPortfolioGridProps {
  layout: LayoutType
}

export function PortfolioGrid({ layout }: IPortfolioGridProps) {
  switch (layout) {
    case 'grid':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <ProjectCard
              key={item.id}
              variant="alwaysDisplay"
              title={item.title}
              description={item.description}
              imageSrc={item.image}
              techItems={item.tech}
              githubLink={item.github}
              demoLink={item.demo}
            />
          ))}
        </div>
      )

    case 'columns':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <ProjectCard
              key={item.id}
              variant="hoverToDisplay"
              title={item.title}
              description={item.description}
              imageSrc={item.image}
              techItems={item.tech}
              githubLink={item.github}
              demoLink={item.demo}
            />
          ))}
        </div>
      )

    case 'list':
      return (
        <div className="space-y-8">
          {portfolioItems.map((item) => (
            <ProjectListItem
              key={item.id}
              title={item.title}
              description={item.description}
              imageSrc={item.image}
              techItems={item.tech}
              githubLink={item.github}
              demoLink={item.demo}
            />
          ))}
        </div>
      )

    case 'table':
      return (
        <div className="gradient-border rounded-xl overflow-hidden bg-black">
          {/* On Desktop view as a table */}
          <div className="hidden sm:block overflow-x-auto">
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
                  <ProjectTableRow
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    imageSrc={item.image}
                    techItems={item.tech}
                    githubLink={item.github}
                    demoLink={item.demo}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* On small screens, convert table to accordion*/}
          <div className="sm:hidden">
            <Accordion type="single" collapsible className="w-full">
              {portfolioItems.map((item) => (
                <ProjectAccordionItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  imageSrc={item.image}
                  techItems={item.tech}
                  githubLink={item.github}
                  demoLink={item.demo}
                />
              ))}
            </Accordion>
          </div>
        </div>
      )
    default:
      return <div>Error - Invalid layout type</div>
  }
}
