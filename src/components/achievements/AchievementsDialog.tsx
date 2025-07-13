import { Crown, Diamond, Star, Trophy, Zap } from 'lucide-react'
import type { Achievement } from '@/assets/data/achievements'
import { Badge } from '@/components/ui/Badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog'

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'common':
      return 'border-gray-400 text-gray-300'
    case 'rare':
      return 'border-blue-400 text-blue-300'
    case 'epic':
      return 'border-purple-400 text-purple-300'
    case 'legendary':
      return 'border-yellow-400 text-yellow-300'
    default:
      return 'border-gray-400 text-gray-300'
  }
}

const getRarityIcon = (rarity: string) => {
  switch (rarity) {
    case 'common':
      return <Star className="w-4 h-4" />
    case 'rare':
      return <Zap className="w-4 h-4" />
    case 'epic':
      return <Crown className="w-4 h-4" />
    case 'legendary':
      return <Diamond className="w-4 h-4" />
    default:
      return <Star className="w-4 h-4" />
  }
}

const categories = [
  'navigation',
  'interaction',
  'exploration',
  'mastery',
  'social',
  'easter-eggs',
]

interface AchievementsDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  achievements: Record<string, Achievement>
  unlockedCount: number
  totalPoints: number
}

export function AchievementsDialog({
  isOpen,
  onOpenChange,
  achievements,
  unlockedCount,
  totalPoints,
}: AchievementsDialogProps) {
  // Convert achievements object to array for easier processing
  const achievementsArray = Object.values(achievements)

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] bg-black/95 backdrop-blur-md border-white/20 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[9999] isolate shadow-2xl flex flex-col w-[95vw] h-[90vh] md:w-auto md:h-auto md:max-h-[80vh] md:max-w-4xl">
        {/* Fixed Header */}
        <DialogHeader className="flex-shrink-0 bg-black/95 backdrop-blur-md p-4 md:p-0 border-b border-white/10 pb-4">
          <DialogTitle className="font-mohave text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wide">
            Achievements
          </DialogTitle>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1 md:gap-2">
              <Trophy className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
              <span className="text-white font-semibold text-sm md:text-base">
                {unlockedCount} / {achievementsArray.length} Unlocked
              </span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
              <span className="text-white font-semibold text-sm md:text-base">
                {totalPoints} Points
              </span>
            </div>
          </div>
        </DialogHeader>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 pt-4">
          <div className="space-y-6 md:space-y-8">
            {categories.map((category) => {
              const categoryAchievements = achievementsArray.filter(
                (a) => a.category === category,
              )
              const unlockedInCategory = categoryAchievements.filter(
                (a) => a.unlocked,
              ).length

              return (
                <div key={category} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mohave text-lg md:text-xl font-bold text-white uppercase tracking-wide">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>
                    <span className="text-gray-400 text-sm md:text-base">
                      {unlockedInCategory} / {categoryAchievements.length}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
                    {categoryAchievements.map((achievement) => (
                      <div
                        key={achievement.id}
                        className={`relative p-3 md:p-4 rounded-lg border transition-all duration-300 ${
                          achievement.unlocked
                            ? 'border-white/30 bg-white/5 hover:bg-white/10'
                            : 'border-white/10 bg-white/2 opacity-60'
                        }`}
                      >
                        <div className="flex items-start gap-2 md:gap-3">
                          <div
                            className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                              achievement.unlocked
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                                : 'bg-gray-600'
                            }`}
                          >
                            {achievement.unlocked ? (
                              <achievement.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            ) : (
                              <Trophy className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0 pr-8 md:pr-12">
                            <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2 flex-wrap">
                              <h4 className="font-semibold text-white text-xs md:text-sm">
                                {achievement.title}
                              </h4>
                              <Badge
                                variant="outline"
                                className={`text-xs ${getRarityColor(achievement.rarity)}`}
                              >
                                {getRarityIcon(achievement.rarity)}
                                <span className="ml-1 hidden sm:inline">
                                  {achievement.rarity}
                                </span>
                              </Badge>
                            </div>
                            <p className="text-xs md:text-sm text-gray-300 mb-2 md:mb-3 leading-relaxed">
                              {achievement.description}
                            </p>
                            <div className="text-xs text-gray-400 leading-relaxed">
                              {achievement.unlockCondition}
                            </div>
                            {achievement.unlocked && achievement.unlockedAt && (
                              <div className="mt-1 md:mt-2 text-xs text-green-400">
                                Unlocked:{' '}
                                {achievement.unlockedAt.toLocaleDateString()}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="absolute bottom-2 md:bottom-3 right-2 md:right-3">
                          <Badge className="bg-purple-500/20 border-purple-500/50 text-purple-300 text-xs px-1 md:px-2 py-0.5 md:py-1">
                            {achievement.points} pts
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
