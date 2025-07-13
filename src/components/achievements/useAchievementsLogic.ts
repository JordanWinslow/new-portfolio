import { useCallback, useEffect, useState } from 'react'
import type { Achievement } from '@/assets/data/achievements'
import { getAchievementsArray } from '@/assets/data/achievements'
import { showAchievementNotification } from './AchievementNotification'

// Track which achievements have been counted to prevent double incrementing due to strict mode or unforseen rendering issues
const countedAchievements = new Set<string>()

export function useAchievementsLogic() {
  const [achievements, setAchievements] = useState<Record<string, Achievement>>(
    {},
  )
  const [isInitialized, setIsInitialized] = useState(false)
  const [newAchievementsVisible, setNewAchievementsVisible] = useState(0)

  useEffect(() => {
    if (isInitialized) return

    // Get default achievements structure
    const defaultAchievements = getAchievementsArray().reduce(
      (acc, achievement) => {
        acc[achievement.id] = achievement
        return acc
      },
      {} as Record<string, Achievement>,
    )

    // Load unlocked state from localStorage
    const saved = localStorage.getItem('portfolio-achievements-unlocked')
    if (saved) {
      try {
        const unlockedState: Record<
          string,
          { unlocked: boolean; unlockedAt?: string }
        > = JSON.parse(saved)

        // Merge default structure with saved unlocked state
        const restoredAchievements: Record<string, Achievement> = {}
        Object.keys(defaultAchievements).forEach((id) => {
          const defaultAchievement = defaultAchievements[id]
          const savedState = unlockedState[id]

          if (defaultAchievement) {
            restoredAchievements[id] = {
              ...defaultAchievement,
              unlocked: savedState?.unlocked || false,
              unlockedAt: savedState?.unlockedAt
                ? new Date(savedState.unlockedAt)
                : undefined,
            }
          }
        })

        setAchievements(restoredAchievements)
      } catch {
        // If parsing fails, use default achievements
        setAchievements(defaultAchievements)
      }
    } else {
      // No saved data, use default achievements
      setAchievements(defaultAchievements)
    }

    // Load new achievements visible count
    const savedCount = localStorage.getItem('portfolio-achievements-new-count')
    if (savedCount) {
      try {
        setNewAchievementsVisible(parseInt(savedCount, 10))
      } catch {
        setNewAchievementsVisible(0)
      }
    }

    setIsInitialized(true)
  }, [isInitialized])

  // Save unlocked achievements state to localStorage whenever achievements change
  useEffect(() => {
    if (!isInitialized || Object.keys(achievements).length === 0) return

    // Extract only the unlocked state for storage
    const unlockedState: Record<
      string,
      { unlocked: boolean; unlockedAt?: string }
    > = {}
    Object.keys(achievements).forEach((id) => {
      const achievement = achievements[id]
      if (achievement) {
        unlockedState[id] = {
          unlocked: achievement.unlocked,
          unlockedAt: achievement.unlockedAt?.toISOString(),
        }
      }
    })

    localStorage.setItem(
      'portfolio-achievements-unlocked',
      JSON.stringify(unlockedState),
    )
  }, [achievements, isInitialized])

  // Save new achievements visible count to localStorage
  useEffect(() => {
    if (!isInitialized) return
    localStorage.setItem(
      'portfolio-achievements-new-count',
      newAchievementsVisible.toString(),
    )
  }, [newAchievementsVisible, isInitialized])

  const unlockAchievement = useCallback((id: string) => {
    setAchievements((prev) => {
      const achievement = prev[id]

      // Only proceed if achievement exists and is not already unlocked
      if (achievement && !achievement.unlocked) {
        const updated = {
          ...prev,
          [id]: {
            ...achievement,
            unlocked: true,
            unlockedAt: new Date(),
          },
        }

        // Show notification and increment counter (only if not already counted)
        if (!countedAchievements.has(id)) {
          showAchievementNotification(achievement)
          setNewAchievementsVisible((count) => count + 1)
          countedAchievements.add(id)
        }

        return updated
      }
      return prev
    })
  }, [])

  const markAchievementsAsViewed = useCallback(() => {
    setNewAchievementsVisible(0)
  }, [])

  const unlockedCount = Object.values(achievements).filter(
    (a) => a.unlocked,
  ).length

  const totalPoints = Object.values(achievements)
    .filter((a) => a.unlocked)
    .reduce((sum, a) => sum + a.points, 0)

  return {
    achievements,
    unlockAchievement,
    unlockedCount,
    totalPoints,
    newAchievementsVisible,
    markAchievementsAsViewed,
  }
}
