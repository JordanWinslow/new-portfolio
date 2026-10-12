import { Pause, Play } from 'lucide-react'
import type { ImgHTMLAttributes } from 'react'
import { ProjectImage } from './ProjectImage'
import { useProjectAnimation } from './useProjectAnimation'

type ProjectPreviewProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  stillSrc?: string
  projectTitle: string
}

export function ProjectPreview({
  stillSrc,
  projectTitle,
  ...props
}: ProjectPreviewProps) {
  if (!stillSrc) return <ProjectImage {...props} />
  return (
    <AnimatedPreview
      {...props}
      stillSrc={stillSrc}
      projectTitle={projectTitle}
    />
  )
}

function AnimatedPreview({
  src,
  stillSrc,
  projectTitle,
  onError,
  ...props
}: ProjectPreviewProps & { stillSrc: string }) {
  const { paused, respectReducedMotion, toggle, pause } =
    useProjectAnimation(src)

  return (
    <>
      <ProjectImage
        key={paused ? stillSrc : src}
        {...props}
        src={paused ? stillSrc : src}
        stillSrc={stillSrc}
        respectReducedMotion={respectReducedMotion}
        onError={(event) => {
          if (!paused) pause()
          onError?.(event)
        }}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={`${paused ? 'Play' : 'Pause'} ${projectTitle} animation`}
        className="absolute top-3 left-3 z-30 inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/30 bg-black/80 px-3 text-sm font-semibold text-white hover:border-orange-400 hover:text-orange-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
      >
        {paused ? (
          <Play size={14} aria-hidden="true" />
        ) : (
          <Pause size={14} aria-hidden="true" />
        )}
        {paused ? 'Play' : 'Pause'}
      </button>
    </>
  )
}
