import type React from 'react'
import { useEffect, useState } from 'react'

interface FadeTransitionProps {
  children: React.ReactNode
  fadeInDuration?: number // ms
  fadeOutDuration?: number // ms
  fadeInDelay?: number // ms
  isFadingOut?: boolean
  className?: string
}

export const FadeTransition: React.FC<FadeTransitionProps> = ({
  children,
  fadeInDuration = 3000,
  fadeOutDuration = 1000,
  fadeInDelay = 0,
  isFadingOut = false,
  className = '',
}) => {
  const [visible, setVisible] = useState(true)

  // Handle fade out
  useEffect(() => {
    if (isFadingOut) {
      setVisible(false)
    } else {
      // When not fading out, fade in after delay
      const timer = setTimeout(() => setVisible(true), fadeInDelay)
      return () => clearTimeout(timer)
    }
  }, [isFadingOut, fadeInDelay])

  return (
    <div
      className={`transition-opacity ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transitionProperty: 'opacity',
        transitionDuration: `${isFadingOut ? fadeOutDuration : fadeInDuration}ms`,
        transitionDelay: isFadingOut ? '0ms' : `${fadeInDelay}ms`,
      }}
    >
      {children}
    </div>
  )
}
