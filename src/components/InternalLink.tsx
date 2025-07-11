import type { ReactNode } from 'react'
import { useCallback } from 'react'
import { useFadeTransition } from '@/contexts/FadeTransitionContext'

interface InternalLinkProps {
  to: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export const InternalLink = ({
  to,
  children,
  className,
  onClick,
}: InternalLinkProps) => {
  const { triggerFadeTransition } = useFadeTransition()

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()

      // Call any custom onClick handler first
      if (onClick) {
        onClick()
      }

      // Trigger fade transition
      triggerFadeTransition(to)
    },
    [to, onClick, triggerFadeTransition],
  )

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
