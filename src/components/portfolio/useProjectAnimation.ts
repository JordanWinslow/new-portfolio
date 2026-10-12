import { useCallback, useSyncExternalStore } from 'react'

const motionQuery = '(prefers-reduced-motion: reduce)'
const getMotionPreference = () => window.matchMedia(motionQuery).matches
// Keep server output and initial hydration static, including the button label.
const getServerMotionPreference = () => true
function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia(motionQuery)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

const playback = new Map<string, boolean>()
const listeners = new Set<() => void>()
const getServerPlayback = () => null
function subscribeToPlayback(onChange: () => void) {
  listeners.add(onChange)
  return () => listeners.delete(onChange)
}

/** A pause applies to every preview of the same animation on the page. */
export function useProjectAnimation(src: string) {
  const reduceMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    getServerMotionPreference,
  )
  const getPlayback = useCallback(() => playback.get(src) ?? null, [src])
  const manuallyPaused = useSyncExternalStore(
    subscribeToPlayback,
    getPlayback,
    getServerPlayback,
  )
  const paused = manuallyPaused ?? reduceMotion
  const setPaused = (value: boolean) => {
    if (playback.get(src) === value) return
    playback.set(src, value)
    for (const listener of listeners) listener()
  }

  return {
    paused,
    respectReducedMotion: manuallyPaused !== false,
    toggle: () => setPaused(!paused),
    pause: () => setPaused(true),
  }
}
