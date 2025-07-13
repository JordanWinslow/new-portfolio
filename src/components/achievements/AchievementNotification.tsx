import { toast } from 'sonner'
import type { Achievement } from '@/assets/data/achievements'

const rarityColors = {
  common: 'border-gray-400 bg-gray-900/90',
  rare: 'border-blue-400 bg-blue-900/90',
  epic: 'border-purple-400 bg-purple-900/90',
  legendary: 'border-yellow-400 bg-yellow-900/90',
}

const rarityIcons = {
  common: '⭐',
  rare: '⚡',
  epic: '👑',
  legendary: '💎',
}

// Track which notifications have been shown to prevent duplicates
const shownNotifications = new Set<string>()

export function showAchievementNotification(achievement: Achievement) {
  // Prevent duplicate notifications for the same achievement
  if (shownNotifications.has(achievement.id)) {
    return
  }

  // Mark as shown
  shownNotifications.add(achievement.id)

  const IconComponent = achievement.icon

  toast.success(
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0">
        <IconComponent className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-white text-sm">
          {achievement.title}
        </div>
        <div className="text-gray-300 text-xs">{achievement.description}</div>
        <div className="text-purple-300 text-xs mt-1">
          +{achievement.points} points
        </div>
      </div>
      <div className="text-2xl">{rarityIcons[achievement.rarity]}</div>
    </div>,
    {
      duration: 4000,
      className: `border-2 ${rarityColors[achievement.rarity]} backdrop-blur-md`,
      style: {
        background:
          'linear-gradient(135deg, rgba(0,0,0,0.9), rgba(20,20,20,0.9))',
        borderColor:
          achievement.rarity === 'common'
            ? '#9ca3af'
            : achievement.rarity === 'rare'
              ? '#60a5fa'
              : achievement.rarity === 'epic'
                ? '#a78bfa'
                : '#fbbf24',
      },
    },
  )
}
