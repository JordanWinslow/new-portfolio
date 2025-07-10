import type React from 'react'
import { useEffect, useRef, useState } from 'react'

interface FadeTransitionProps {
  children: React.ReactNode
  fadeInDuration?: number // ms
  fadeOutDuration?: number // ms
  fadeInDelay?: number // ms
  isFadingOut?: boolean
  onFadeOutEnd?: () => void
  className?: string
}

export const FadeTransition: React.FC<FadeTransitionProps> = ({
  children,
  fadeInDuration = 3000,
  fadeOutDuration = 3000,
  fadeInDelay = 0,
  isFadingOut = false,
  onFadeOutEnd,
  className = '',
}) => {
  const [visible, setVisible] = useState(false)
  const [fadingOut, setFadingOut] = useState(false)
  const fadeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), fadeInDelay)
    return () => clearTimeout(timer)
  }, [fadeInDelay])

  useEffect(() => {
    if (isFadingOut) {
      setFadingOut(true)
      const timer = setTimeout(() => {
        if (onFadeOutEnd) onFadeOutEnd()
      }, fadeOutDuration)
      return () => clearTimeout(timer)
    }
  }, [isFadingOut, fadeOutDuration, onFadeOutEnd])

  return (
    <div
      ref={fadeRef}
      className={`transition-opacity ${className}`}
      style={{
        opacity: fadingOut ? 0 : visible ? 1 : 0,
        transitionProperty: 'opacity',
        transitionDuration: `${fadingOut ? fadeOutDuration : fadeInDuration}ms`,
        transitionDelay: fadingOut ? '0ms' : `${fadeInDelay}ms`,
      }}
    >
      {children}
    </div>
  )
}
