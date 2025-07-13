import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Dialog, DialogContent } from '@/components/ui/Dialog'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title?: string
}

export function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title,
}: VideoModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match?.[2] && match[2].length === 11 ? match[2] : null
  }

  const videoId = getYouTubeVideoId(videoUrl)
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`
    : ''

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  // Don't render on server side to avoid SSR issues
  if (typeof window === 'undefined') {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] h-[80vh] p-0 bg-black/95 border border-white/20 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full h-full"
        >
          {/* Header */}
          {title && (
            <div className="absolute top-4 left-4 z-10">
              <h2 className="font-mohave text-xl font-bold text-white bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                {title}
              </h2>
            </div>
          )}

          {/* Video Container */}
          <div className="w-full h-full flex items-center justify-center p-4">
            {embedUrl ? (
              <div className="relative w-full h-full max-w-4xl">
                <iframe
                  ref={iframeRef}
                  src={embedUrl}
                  title={title || 'Video Player'}
                  className="w-full h-full rounded-lg border border-white/20"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-lg">Invalid video URL</p>
              </div>
            )}
          </div>

          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-lg pointer-events-none" />
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
