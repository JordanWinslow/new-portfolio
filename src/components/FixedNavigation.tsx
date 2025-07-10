import { useEffect, useState } from 'react'
import { Navigation } from './Navigation'

export function FixedNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={cn(
        'fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'top-0 left-0' : 'top-8 left-8',
      )}
    >
      <Navigation isScrolled={isScrolled} />
    </div>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}
