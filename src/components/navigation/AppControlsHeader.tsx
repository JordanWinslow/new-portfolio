import { useRef } from 'react'
import { cn, useIntersectionObserver } from '@/lib/utils'
import { AchievementsButton } from '../achievements/AchievementsButton'
import { Navigation } from './Navigation'

export function AppControlsHeader() {
  const sentinelRef = useRef(null)

  // Use the intersection observer to detect when the header is no longer fully visible
  const isAtTop = useIntersectionObserver(sentinelRef, {
    rootMargin: '0px',
    threshold: 1.0,
  })

  const isScrolled = !isAtTop

  return (
    <>
      <div ref={sentinelRef} className="absolute top-0 left-0 w-full h-px" />
      <div
        className={cn(
          'fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out',
          isScrolled ? 'top-0 left-0' : 'top-8 left-8',
        )}
      >
        <Navigation isScrolled={isScrolled} />
      </div>
      <AchievementsButton />
    </>
  )
}
