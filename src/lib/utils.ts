import { type ClassValue, clsx } from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useIntersectionObserver(
  ref: React.RefObject<Element | null>,
  options: IntersectionObserverInit = {},
) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry) {
        setIsIntersecting(entry.isIntersecting)
      }
    }, options)

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [ref, options])

  return isIntersecting
}

/**
 * Hook to observe element size changes and check if it reaches a threshold
 * @param threshold - The size threshold to check against
 * @param dimension - Which dimension to observe ('width' or 'height')
 * @param operator - Comparison operator ('gt', 'gte', 'lt', 'lte', 'eq')
 * @returns [ref, isAboveThreshold] - ref to attach to element, boolean indicating if threshold is met
 */
export function useResizeObserver<T extends HTMLElement = HTMLDivElement>(
  threshold: number,
  dimension: 'width' | 'height' = 'width',
  operator: 'gt' | 'gte' | 'lt' | 'lte' | 'eq' = 'gt',
) {
  const ref = useRef<T>(null)
  const [isAboveThreshold, setIsAboveThreshold] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const checkSize = () => {
      const size =
        dimension === 'width' ? element.offsetWidth : element.offsetHeight

      let meetsThreshold = false
      switch (operator) {
        case 'gt':
          meetsThreshold = size > threshold
          break
        case 'gte':
          meetsThreshold = size >= threshold
          break
        case 'lt':
          meetsThreshold = size < threshold
          break
        case 'lte':
          meetsThreshold = size <= threshold
          break
        case 'eq':
          meetsThreshold = size === threshold
          break
      }

      setIsAboveThreshold(meetsThreshold)
    }

    // Check on mount
    checkSize()

    // Use ResizeObserver for accurate detection
    const resizeObserver = new ResizeObserver(checkSize)
    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
    }
  }, [threshold, dimension, operator])

  return [ref, isAboveThreshold] as const
}
