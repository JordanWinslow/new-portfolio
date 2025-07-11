import { Crown, Diamond, Star, Trophy, Zap } from 'lucide-react'
import { useState } from 'react'
import { useAchievements } from '@/components/achievements/AchievementsContext'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog'

export function AchievementsButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { achievements, unlockedCount, totalPoints } = useAchievements()

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
  ]

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 w-12 h-12 p-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/20 backdrop-blur-md hover:scale-110 transition-transform duration-300 group"
      >
        <Trophy className="w-6 h-6 text-white group-hover:text-yellow-400 transition-colors duration-300" />
        {unlockedCount > 0 && (
          <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 text-xs bg-gradient-to-r from-purple-500 to-pink-500 border-0">
            {unlockedCount}
          </Badge>
        )}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-black/95 backdrop-blur-md border-white/20 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[9999] isolate">
          <DialogHeader>
            <DialogTitle className="font-mohave text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wide">
              Achievements
            </DialogTitle>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">
                  {unlockedCount} / {achievements.length} Unlocked
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-purple-400" />
                <span className="text-white font-semibold">
                  {totalPoints} Points
                </span>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-8">
            {categories.map((category) => {
              const categoryAchievements = achievements.filter(
                (a) => a.category === category,
              )
              const unlockedInCategory = categoryAchievements.filter(
                (a) => a.unlocked,
              ).length

              return (
                <div key={category} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mohave text-xl font-bold text-white uppercase tracking-wide">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>
                    <span className="text-gray-400">
                      {unlockedInCategory} / {categoryAchievements.length}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categoryAchievements.map((achievement) => (
                      <div
                        key={achievement.id}
                        className={`relative p-4 rounded-lg border transition-all duration-300 ${
                          achievement.unlocked
                            ? 'border-white/30 bg-white/5 hover:bg-white/10'
                            : 'border-white/10 bg-white/2 opacity-60'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                              achievement.unlocked
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                                : 'bg-gray-600'
                            }`}
                          >
                            {achievement.unlocked ? (
                              <achievement.icon className="w-5 h-5 text-white" />
                            ) : (
                              <Trophy className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0 pr-12">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <h4 className="font-semibold text-white text-sm">
                                {achievement.title}
                              </h4>
                              <Badge
                                variant="outline"
                                className={`text-xs ${getRarityColor(achievement.rarity)}`}
                              >
                                {getRarityIcon(achievement.rarity)}
                                <span className="ml-1">
                                  {achievement.rarity}
                                </span>
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                              {achievement.description}
                            </p>
                            <div className="text-xs text-gray-400 leading-relaxed">
                              {achievement.unlockCondition}
                            </div>
                            {achievement.unlocked && achievement.unlockedAt && (
                              <div className="mt-2 text-xs text-green-400">
                                Unlocked:{' '}
                                {achievement.unlockedAt.toLocaleDateString()}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Points badge in bottom right */}
                        <div className="absolute bottom-3 right-3">
                          <Badge className="bg-purple-500/20 border-purple-500/50 text-purple-300 text-xs px-2 py-1">
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
        </DialogContent>
      </Dialog>
    </>
  )
}
