import { useState } from 'react'
import { portfolioItems } from '@/assets/data/portfolioItems'
import type { LayoutType } from '@/components/portfolio/LayoutType'
import { Accordion } from '@/components/ui/Accordion'
import { VideoModal } from '../ui/VideoModal'
import { ProjectAccordionItem } from './ProjectAccordionItem'
import { ProjectCard } from './ProjectCard'
import { ProjectListItem } from './ProjectListItem'
import { ProjectTableRow } from './ProjectTableRow'

interface IPortfolioGridProps {
  layout: LayoutType
}

export function PortfolioGrid({ layout }: IPortfolioGridProps) {
  const [videoModalState, setVideoModalState] = useState<{
    isOpen: boolean
    videoUrl: string
    title: string
  }>({
    isOpen: false,
    videoUrl: '',
    title: '',
  })

  const handleVideoClick = (videoUrl: string, title: string) => {
    setVideoModalState({
      isOpen: true,
      videoUrl,
      title,
    })
  }

  const handleVideoClose = () => {
    setVideoModalState({
      isOpen: false,
      videoUrl: '',
      title: '',
    })
  }

  switch (layout) {
    case 'grid':
      return (
        <>
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
                videoLink={item.videoLink}
                onVideoClick={handleVideoClick}
              />
            ))}
          </div>
          <VideoModal
            isOpen={videoModalState.isOpen}
            onClose={handleVideoClose}
            videoUrl={videoModalState.videoUrl}
            title={videoModalState.title}
          />
        </>
      )

    case 'columns':
      return (
        <>
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
                videoLink={item.videoLink}
                onVideoClick={handleVideoClick}
              />
            ))}
          </div>
          <VideoModal
            isOpen={videoModalState.isOpen}
            onClose={handleVideoClose}
            videoUrl={videoModalState.videoUrl}
            title={videoModalState.title}
          />
        </>
      )

    case 'list':
      return (
        <>
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
                videoLink={item.videoLink}
                onVideoClick={handleVideoClick}
              />
            ))}
          </div>
          <VideoModal
            isOpen={videoModalState.isOpen}
            onClose={handleVideoClose}
            videoUrl={videoModalState.videoUrl}
            title={videoModalState.title}
          />
        </>
      )

    case 'table':
      return (
        <>
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
                      videoLink={item.videoLink}
                      onVideoClick={handleVideoClick}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            {/* On small screens, convert table to accordion*/}
            <div className="sm:hidden">
              <Accordion
                type="single"
                defaultValue={portfolioItems[0]?.title || ''}
                collapsible
                className="w-full"
              >
                {portfolioItems.map((item) => (
                  <ProjectAccordionItem
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    imageSrc={item.image}
                    techItems={item.tech}
                    githubLink={item.github}
                    demoLink={item.demo}
                    videoLink={item.videoLink}
                    onVideoClick={handleVideoClick}
                  />
                ))}
              </Accordion>
            </div>
          </div>
          <VideoModal
            isOpen={videoModalState.isOpen}
            onClose={handleVideoClose}
            videoUrl={videoModalState.videoUrl}
            title={videoModalState.title}
          />
        </>
      )
    default:
      return <div>Error - Invalid layout type</div>
  }
}
