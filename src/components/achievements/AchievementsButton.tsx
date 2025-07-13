import { Trophy } from 'lucide-react'
import { useState } from 'react'
import { useAchievements } from '@/components/achievements/AchievementsContext'
import { AchievementsDialog } from '@/components/achievements/AchievementsDialog'
import { Button } from '@/components/ui/Button'

export function AchievementsButton() {
  const [isOpen, setIsOpen] = useState(false)
  const {
    achievements,
    unlockedCount,
    totalPoints,
    newAchievementsVisible,
    markAchievementsAsViewed,
  } = useAchievements()

  // Mark achievements as viewed when modal opens
  const handleOpenModal = () => {
    setIsOpen(true)
    markAchievementsAsViewed()
  }

  // Check if there are unviewed achievements
  const unviewedCount = newAchievementsVisible

  return (
    <>
      <Button
        onClick={handleOpenModal}
        className="fixed top-4 right-4 z-50 w-14 h-14 p-0 rounded-full bg-black/20 backdrop-blur-xl border-2 border-transparent hover:scale-110 transition-all duration-300 group shadow-2xl"
        style={{
          background:
            'linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b, #10b981) border-box',
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center p-0">
          <Trophy className="text-white" style={{ height: 20, width: 20 }} />

          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {unviewedCount > 0 && (
            <div className="absolute -top-5 -right-4 w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse border-2 border-white/20 shadow-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">
                {unviewedCount}
              </span>
            </div>
          )}
        </div>
      </Button>

      <AchievementsDialog
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        achievements={achievements}
        unlockedCount={unlockedCount}
        totalPoints={totalPoints}
      />
    </>
  )
}
