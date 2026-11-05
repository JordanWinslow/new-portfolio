import { useEffect, useRef, useState } from 'react'

/** Zero preload margin: hidden media must not compete with the current view. */
export function useViewportVisibility<T extends HTMLElement>(once = false) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return
        const inView = entry.isIntersecting && entry.intersectionRatio > 0
        setVisible(inView)
        if (once && inView) observer.disconnect()
      },
      { threshold: 0.001 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [once])
  return { ref, visible }
}
