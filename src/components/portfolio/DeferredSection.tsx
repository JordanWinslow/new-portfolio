import { type ReactNode, Suspense } from 'react'
import { useViewportVisibility } from './useViewportVisibility'

/** Load on first entry, then retain component state when scrolling away. */
export function DeferredSection({
  children,
  label,
  placeholderClassName,
}: {
  children: ReactNode
  label: string
  placeholderClassName: string
}) {
  const { ref, visible } = useViewportVisibility<HTMLDivElement>(true)
  const placeholder = (
    <div className={placeholderClassName} aria-hidden="true">
      {visible && label !== 'Star field' && (
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="font-mohave text-2xl text-gray-200">{label}</p>
          <p className="mt-3 text-gray-400">Loading…</p>
        </div>
      )}
    </div>
  )
  return (
    <div ref={ref} data-deferred-section={label} data-loaded={visible}>
      {visible ? (
        <Suspense fallback={placeholder}>{children}</Suspense>
      ) : (
        placeholder
      )}
    </div>
  )
}
