import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { memo } from 'react'
import type { Achievement } from '@/assets/data/achievements'
import { Dialog } from '@/components/ui/Dialog'
import { AchievementItem } from './AchievementItem'

interface AchievementsModalProps {
  isOpen: boolean
  onClose: () => void
  achievements: Record<string, Achievement>
  unlockedCount: number
  totalPoints: number
}

export const AchievementsModal = memo(function AchievementsModal({
  isOpen,
  onClose,
  achievements,
  unlockedCount,
  totalPoints,
}: AchievementsModalProps) {
  // Don't render on server side to avoid SSR issues
  if (typeof window === 'undefined') {
    return null
  }

  const achievementsArray = Object.values(achievements)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-900/95 to-black/95 border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div>
                  <h2 className="font-mohave text-2xl font-bold text-white uppercase tracking-wide">
                    ACHIEVEMENTS
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">
                    {unlockedCount} of {achievementsArray.length} unlocked •{' '}
                    {totalPoints} points earned
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="grid gap-4">
                  {achievementsArray.map((achievement) => (
                    <AchievementItem
                      key={achievement.id}
                      achievement={achievement}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Dialog>
  )
})
