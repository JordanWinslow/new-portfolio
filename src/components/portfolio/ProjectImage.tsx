import { type ImgHTMLAttributes, useEffect, useState } from 'react'
import { useReducedMotionPreference } from './useProjectAnimation'
import { useViewportVisibility } from './useViewportVisibility'

type ProjectImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  stillSrc?: string
  respectReducedMotion?: boolean
}

/** Keep the poster visible until the animation loads; remove offscreen animations. */
export function ProjectImage({
  src,
  stillSrc,
  respectReducedMotion = true,
  alt,
  className,
  style,
  onError,
  onLoad,
  loading: _loading,
  ...props
}: ProjectImageProps) {
  const { ref, visible } = useViewportVisibility<HTMLSpanElement>()
  const reduceMotion = useReducedMotionPreference()
  const poster = stillSrc ?? src
  const [readyPoster, setReadyPoster] = useState<string | null>(null)
  const [loadedSource, setLoadedSource] = useState<string | null>(null)
  const [failedSource, setFailedSource] = useState<string | null>(null)
  useEffect(() => {
    setFailedSource((failed) => (failed === src ? failed : null))
  }, [src])
  const animate =
    visible &&
    readyPoster === poster &&
    src !== poster &&
    failedSource !== src &&
    !(respectReducedMotion && reduceMotion)
  const fit = 'h-full w-full [object-fit:inherit] [object-position:inherit]'

  return (
    <span
      ref={ref}
      className={`relative inline-grid overflow-hidden ${className ?? ''}`}
      style={style}
    >
      <img
        {...props}
        src={visible || readyPoster === poster ? poster : undefined}
        alt={alt}
        decoding="async"
        className={`${fit} col-start-1 row-start-1`}
        onLoad={(event) => {
          setReadyPoster(poster)
          if (src === poster) onLoad?.(event)
        }}
        onError={onError}
      />
      {animate && (
        <img
          {...props}
          src={src}
          alt=""
          aria-hidden="true"
          decoding="async"
          className={`${fit} absolute inset-0`}
          style={{ opacity: loadedSource === src ? 1 : 0 }}
          onLoad={(event) => {
            setLoadedSource(src)
            onLoad?.(event)
          }}
          onError={(event) => {
            setFailedSource(src)
            onError?.(event)
          }}
        />
      )}
    </span>
  )
}
