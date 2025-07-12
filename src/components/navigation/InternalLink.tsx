import type { ReactNode } from 'react'
import { useCallback } from 'react'
import { useFadeTransition } from '@/contexts/FadeTransitionContext'

interface InternalLinkProps {
  to: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

/**
 * Custom component for client-side navigation within the app.
 * It uses the FadeTransitionContext to trigger a fade-out animation before navigating
 * to the specified route. This provides a smooth transition effect between pages.
 *
 * Props:
 * - to: string - The target route path.
 * - children: ReactNode - The content to display inside the link.
 * - className?: string - Optional CSS classes for styling.
 * - onClick?: () => void - Optional callback to run on click before navigation.
 *
 * Usage:
 * <InternalLink to="/about" className="my-link">About</InternalLink>
 */

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

      if (onClick) {
        onClick()
      }

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
