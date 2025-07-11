import { useNavigate } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { createContext, useCallback, useContext, useState } from 'react'

interface FadeTransitionContextType {
  isFadingOut: boolean
  triggerFadeTransition: (to: string) => void
}

const FadeTransitionContext = createContext<FadeTransitionContextType>({
  isFadingOut: false,
  triggerFadeTransition: () => {},
})

export function FadeTransitionProvider({
  children,
  fadeOutDuration = 1000,
}: {
  children: ReactNode
  fadeOutDuration?: number
}) {
  const [isFadingOut, setIsFadingOut] = useState(false)
  const navigate = useNavigate()

  const triggerFadeTransition = useCallback(
    (to: string) => {
      setIsFadingOut(true)

      // Navigate after fade out completes
      setTimeout(() => {
        navigate({
          to: to as `/` | `/about` | `/contact` | `/portfolio` | `/resume`,
        })
        setIsFadingOut(false)
      }, fadeOutDuration)
    },
    [navigate, fadeOutDuration],
  )

  return (
    <FadeTransitionContext.Provider
      value={{ isFadingOut, triggerFadeTransition }}
    >
      {children}
    </FadeTransitionContext.Provider>
  )
}

export function useFadeTransition() {
  return useContext(FadeTransitionContext)
}
