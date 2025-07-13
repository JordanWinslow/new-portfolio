import { AnimatePresence, motion } from 'framer-motion'
import { Play, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Button } from './button'
import { Dialog, DialogContent } from './dialog'

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
    return match && match[2] && match[2].length === 11 ? match[2] : null
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
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Don't render on server side to avoid SSR issues
  if (typeof window === 'undefined') {
    return null
  }

  return (
    <AnimatePresence>
      {isOpen && (
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
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                {title && (
                  <h2 className="font-mohave text-xl font-bold text-white bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                    {title}
                  </h2>
                )}
                <Button
                  onClick={onClose}
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 bg-black/50 hover:bg-black/70 border border-white/20 text-white hover:text-red-400 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

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
      )}
    </AnimatePresence>
  )
}
