import { useNavigate } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { createContext, useCallback, useContext, useState } from 'react'

interface FadeTransitionContextType {
  isFadingOut: boolean
  triggerFadeTransition: (to: string) => void
  fadeInDuration: number
  fadeOutDuration: number
  fadeInDelay: number
}

const FadeTransitionContext = createContext<FadeTransitionContextType>({
  isFadingOut: false,
  triggerFadeTransition: () => {},
  fadeInDuration: 800,
  fadeOutDuration: 1000,
  fadeInDelay: 200,
})

export function FadeTransitionProvider({ children }: { children: ReactNode }) {
  const [isFadingOut, setIsFadingOut] = useState(false)
  const navigate = useNavigate()

  const fadeInDuration = 800
  const fadeOutDuration = 1000
  // safety buffer in case setTimeout is delayed for some reason
  const fadeInDelay = 200

  const triggerFadeTransition = useCallback(
    (to: string) => {
      setIsFadingOut(true)

      // Wait for fade out to complete, then navigate
      setTimeout(() => {
        navigate({
          to: to as `/` | `/about` | `/contact` | `/portfolio` | `/resume`,
        })
        setIsFadingOut(false)
      }, fadeOutDuration)
    },
    [navigate],
  )

  return (
    <FadeTransitionContext
      value={{
        isFadingOut,
        triggerFadeTransition,
        fadeInDuration,
        fadeOutDuration,
        fadeInDelay,
      }}
    >
      {children}
    </FadeTransitionContext>
  )
}

export function useFadeTransition() {
  return useContext(FadeTransitionContext)
}
