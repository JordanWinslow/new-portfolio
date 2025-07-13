import { lazy, Suspense, useEffect, useState } from 'react'
import { AchievementId } from '@/assets/data/achievements'
import { portfolioItems } from '@/assets/data/portfolioItems'
import { useAchievements } from '@/components/achievements/AchievementsContext'
import type { LayoutType } from '@/components/portfolio/LayoutType'
import { Accordion } from '@/components/ui/Accordion'

const VideoModal = lazy(() =>
  import('../ui/VideoModal').then((mod) => ({ default: mod.VideoModal })),
)

import { ProjectAccordionItem } from './ProjectAccordionItem'
import { ProjectCard } from './ProjectCard'
import { ProjectListItem } from './ProjectListItem'
import { ProjectTableRow } from './ProjectTableRow'

interface IPortfolioGridProps {
  layout: LayoutType
}

export function PortfolioGrid({ layout }: IPortfolioGridProps) {
  const { unlockAchievement } = useAchievements()
  const [videoModalState, setVideoModalState] = useState<{
    isOpen: boolean
    videoUrl: string
    title: string
  }>({
    isOpen: false,
    videoUrl: '',
    title: '',
  })

  // Track unique project links clicked
  const [clickedLinks, setClickedLinks] = useState<Set<string>>(new Set())

  // Load clicked links from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-clicked-links')
    if (saved) {
      try {
        const links = JSON.parse(saved)
        setClickedLinks(new Set(links))
      } catch {
        setClickedLinks(new Set())
      }
    }
  }, [])

  // Save clicked links to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(
      'portfolio-clicked-links',
      JSON.stringify([...clickedLinks]),
    )
  }, [clickedLinks])

  const checkForAchievement = (link: string) => {
    if (!link) return

    setClickedLinks((prev) => {
      const newSet = new Set(prev)
      newSet.add(link)

      // Check if we have 4 unique links
      if (newSet.size >= 4) {
        unlockAchievement(AchievementId.projectExplorer)
      }

      return newSet
    })
  }

  const handleVideoClick = (videoUrl: string, title: string) => {
    checkForAchievement(videoUrl)
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
                onLinkClick={checkForAchievement}
              />
            ))}
          </div>
          <Suspense fallback={null}>
            <VideoModal
              isOpen={videoModalState.isOpen}
              onClose={handleVideoClose}
              videoUrl={videoModalState.videoUrl}
              title={videoModalState.title}
            />
          </Suspense>
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
                onLinkClick={checkForAchievement}
              />
            ))}
          </div>
          <Suspense fallback={null}>
            <VideoModal
              isOpen={videoModalState.isOpen}
              onClose={handleVideoClose}
              videoUrl={videoModalState.videoUrl}
              title={videoModalState.title}
            />
          </Suspense>
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
                onLinkClick={checkForAchievement}
              />
            ))}
          </div>
          <Suspense fallback={null}>
            <VideoModal
              isOpen={videoModalState.isOpen}
              onClose={handleVideoClose}
              videoUrl={videoModalState.videoUrl}
              title={videoModalState.title}
            />
          </Suspense>
        </>
      )

    case 'table':
      return (
        <>
          <div className="rounded-xl overflow-hidden bg-black border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm transform transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-white/20 ">
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
                      onLinkClick={checkForAchievement}
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
                    onLinkClick={checkForAchievement}
                  />
                ))}
              </Accordion>
            </div>
          </div>
          <Suspense fallback={null}>
            <VideoModal
              isOpen={videoModalState.isOpen}
              onClose={handleVideoClose}
              videoUrl={videoModalState.videoUrl}
              title={videoModalState.title}
            />
          </Suspense>
        </>
      )
    default:
      return <div>Error - Invalid layout type</div>
  }
}
