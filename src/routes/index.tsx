import { createFileRoute } from '@tanstack/react-router'
import { Code2 } from 'lucide-react'
import { lazy, Suspense, useEffect } from 'react'
import { AchievementId } from '@/assets/data/achievements'
import homeAnimation from '@/assets/spline/home-animation.splinecode'
import { useAchievements } from '@/components/achievements/AchievementsContext'
import { InternalLink } from '@/components/navigation/InternalLink'
import { Fade } from '@/components/ui/Fade'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

const InteractiveBackground = lazy(() => import('@splinetool/react-spline'))

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { unlockAchievement } = useAchievements()

  useEffect(() => {
    const timer = setTimeout(() => {
      unlockAchievement(AchievementId.firstSteps)
    }, 20000)

    return () => clearTimeout(timer)
  }, [unlockAchievement])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-mohave">
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
        <Suspense
          fallback={
            <div className="flex items-center justify-center w-full h-full">
              <LoadingSpinner size="lg" className="text-white" />
            </div>
          }
        >
          <InteractiveBackground scene={homeAnimation} />
        </Suspense>
      </div>

      <PageLayout />

      <Fade fadeInDelay={3000} fadeInDuration={3000}>
        <PortfolioButton />
      </Fade>
    </div>
  )
}

const PortfolioButton = () => (
  <div className="fixed inset-0 flex items-center justify-center z-20 w-full h-screen pointer-events-none">
    <div className="relative flex items-center justify-center pulse-fade-group">
      <div className="absolute w-40 h-40 rounded-full bg-white opacity-40 blur-3xl z-10" />
      <InternalLink
        to="/portfolio"
        className="cursor-pointer pointer-events-auto w-20 h-20 flex items-center justify-center rounded-full border-2 border-white/90 bg-black/80 shadow-2xl transition-all duration-300 focus:outline-none z-20"
        aria-label="View Portfolio"
      >
        <Code2 className="text-white w-10 h-10 drop-shadow-lg transition duration-200" />
      </InternalLink>
    </div>
  </div>
)

const PageLayout = () => (
  <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
    <div className="absolute top-[10vh] left-[4vw] text-white text-base sm:text-lg font-light tracking-wider">
      2025
    </div>
    <div className="absolute top-[10vh] right-[4vw] text-white text-base sm:text-lg font-light tracking-wider">
      20XX
    </div>

    <div className="absolute top-[8vh] right-1/2 text-white text-2xl">×</div>

    <div className="absolute top-[8vh] left-1/4 transform -translate-x-1/2 text-white text-xl">
      ♦
    </div>
    <div className="absolute top-[8vh] right-1/4 text-white text-xl">♦</div>

    <div className="absolute bottom-[8vh] left-[30vw] transform -translate-x-1/2 text-white text-xl">
      ♦
    </div>
    <div className="absolute bottom-[8vh] right-[30vw] text-white text-xl">
      ♦
    </div>

    <div className="absolute top-[20vh] right-[4vw] text-white text-2xl">×</div>
    <div className="absolute top-[23vh] right-[4vw] text-white text-2xl">×</div>
    <div className="absolute top-[26vh] right-[4vw] text-white text-2xl">×</div>

    <div className="absolute left-[4vw] top-[50vh] text-white text-2xl">×</div>
    <div className="absolute left-[4vw] top-[53vh] text-white text-2xl">×</div>
    <div className="absolute left-[4vw] top-[56vh] text-white text-2xl">×</div>

    <div className="absolute bottom-[8vh] left-[4vw]">
      <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">
        FRONTEND
      </div>
      <div className="text-white text-sm font-light tracking-wide">
        REACT | TANSTACK
      </div>
    </div>
    <div className="absolute bottom-[8vh] right-[4vw]">
      <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">
        BACKEND
      </div>
      <div className="text-white text-sm font-light tracking-wide">
        NESTJS | NODE
      </div>
    </div>
  </div>
)
