import type React from 'react'
import { useEffect, useState } from 'react'

interface IFadeProps {
  children: React.ReactNode
  fadeInDuration: number // ms
  fadeOutDuration?: number // ms
  fadeInDelay?: number // ms
  isFadingOut?: boolean
  className?: string
}

export const Fade: React.FC<IFadeProps> = ({
  children,
  fadeInDuration,
  fadeOutDuration = 0,
  fadeInDelay = 0,
  isFadingOut = false,
  className = '',
}) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isFadingOut) {
      setVisible(false)
    } else {
      if (fadeInDelay) {
        const timer = setTimeout(() => setVisible(true), fadeInDelay)
        return () => clearTimeout(timer)
      } else {
        setVisible(true)
      }
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
