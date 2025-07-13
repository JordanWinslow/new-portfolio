import { motion } from 'framer-motion'
import { Crown, Diamond, Star, Trophy, Zap } from 'lucide-react'
import { memo } from 'react'
import type { Achievement } from '@/assets/data/achievements'
import { Badge } from '@/components/ui/Badge'

interface AchievementItemProps {
  achievement: Achievement
}

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'common':
      return 'border-gray-400 text-gray-300 bg-gray-900/20'
    case 'rare':
      return 'border-blue-400 text-blue-300 bg-blue-900/20'
    case 'epic':
      return 'border-purple-400 text-purple-300 bg-purple-900/20'
    case 'legendary':
      return 'border-yellow-400 text-yellow-300 bg-yellow-900/20'
    default:
      return 'border-gray-400 text-gray-300 bg-gray-900/20'
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

export const AchievementItem = memo(function AchievementItem({
  achievement,
}: AchievementItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`relative p-4 rounded-lg border transition-all duration-300 group ${
        achievement.unlocked
          ? 'border-white/30 bg-white/5 hover:bg-white/10'
          : 'border-white/10 bg-white/2 opacity-60'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            achievement.unlocked
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-110'
              : 'bg-gray-600'
          }`}
        >
          {achievement.unlocked ? (
            (() => {
              const IconComponent = achievement.icon
              return <IconComponent className="w-5 h-5 text-white" />
            })()
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
              <span className="ml-1">{achievement.rarity}</span>
            </Badge>
            {achievement.secret && (
              <Badge className="text-xs bg-red-900/20 border-red-500/50 text-red-300">
                Secret
              </Badge>
            )}
          </div>
          <p className="text-sm text-gray-300 mb-3 leading-relaxed">
            {achievement.description}
          </p>
          <div className="text-xs text-gray-400 leading-relaxed">
            {achievement.unlockCondition}
          </div>
          {achievement.unlocked && achievement.unlockedAt && (
            <div className="mt-2 text-xs text-green-400">
              Unlocked: {(() => {
                try {
                  const date =
                    typeof achievement.unlockedAt === 'string'
                      ? new Date(achievement.unlockedAt)
                      : achievement.unlockedAt
                  return date.toLocaleDateString()
                } catch {
                  return 'Recently'
                }
              })()}
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

      {/* Glow effect for unlocked achievements */}
      {achievement.unlocked && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </motion.div>
  )
})
