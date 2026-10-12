import { type ImgHTMLAttributes, useState } from 'react'

type ProjectImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  stillSrc?: string
  respectReducedMotion?: boolean
}

/** Only projects with a still image opt into motion and loading fallbacks. */
export function ProjectImage({
  src,
  stillSrc,
  respectReducedMotion = true,
  alt,
  onError,
  ...props
}: ProjectImageProps) {
  const [failedSource, setFailedSource] = useState<string | null>(null)

  return (
    <picture className="contents">
      {stillSrc && respectReducedMotion && (
        <source media="(prefers-reduced-motion: reduce)" srcSet={stillSrc} />
      )}
      <img
        decoding="async"
        {...props}
        src={failedSource === src && stillSrc ? stillSrc : src}
        alt={alt}
        onError={(event) => {
          if (stillSrc && failedSource !== src) setFailedSource(src)
          onError?.(event)
        }}
      />
    </picture>
  )
}
