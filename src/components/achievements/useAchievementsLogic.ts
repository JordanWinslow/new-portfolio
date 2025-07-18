import { useCallback, useEffect, useRef, useState } from 'react'
import type { Achievement, AchievementIdType } from '@/assets/data/achievements'
import { AchievementId, getAchievementsArray } from '@/assets/data/achievements'
import { showAchievementNotification } from './AchievementNotification'

// Track which achievements have been counted to prevent double incrementing due to strict mode or unforseen rendering issues
const countedAchievements = new Set<string>()

export function useAchievementsLogic() {
  const [achievements, setAchievements] = useState<Record<string, Achievement>>(
    {},
  )
  const [isInitialized, setIsInitialized] = useState(false)
  const [newAchievementsVisible, setNewAchievementsVisible] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const explorationTimeRef = useRef(0)
  const unlockAchievementRef = useRef<((id: AchievementIdType) => void) | null>(
    null,
  )

  // Check for complex achievements that depend on other achievements
  const checkComplexAchievements = useCallback(
    (currentAchievements: Record<string, Achievement>) => {
      const achievementsToUnlock: AchievementIdType[] = []

      // Check World Traveler - unlock when all navigation achievements are unlocked
      // Note: firstSteps (The Cube) is excluded since users will naturally see that page
      const navigationAchievements = [
        AchievementId.portfolioExplorer,
        AchievementId.aboutDiscoverer,
        AchievementId.contactReacher,
        AchievementId.resumeReader,
      ]

      const allNavigationUnlocked = navigationAchievements.every(
        (id) => currentAchievements[id]?.unlocked,
      )

      if (
        allNavigationUnlocked &&
        !currentAchievements[AchievementId.worldTraveler]?.unlocked
      ) {
        achievementsToUnlock.push(AchievementId.worldTraveler)
      }

      // Check Detail Seeker - unlock when all easter egg achievements are unlocked
      const easterEggAchievements = [
        AchievementId.gamerSpirit,
        AchievementId.heartFinder,
      ]

      const allEasterEggsUnlocked = easterEggAchievements.every(
        (id) => currentAchievements[id]?.unlocked,
      )

      if (
        allEasterEggsUnlocked &&
        !currentAchievements[AchievementId.detailSeeker]?.unlocked
      ) {
        achievementsToUnlock.push(AchievementId.detailSeeker)
      }

      // Check Completionist - unlock when all other achievements are unlocked
      const allAchievementIds = Object.values(AchievementId)
      const otherAchievements = allAchievementIds.filter(
        (id) => id !== AchievementId.completionist,
      )

      const allOtherAchievementsUnlocked = otherAchievements.every(
        (id) => currentAchievements[id]?.unlocked,
      )

      if (
        allOtherAchievementsUnlocked &&
        !currentAchievements[AchievementId.completionist]?.unlocked
      ) {
        achievementsToUnlock.push(AchievementId.completionist)
      }

      return achievementsToUnlock
    },
    [],
  )

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

  // Timer for deepDiver achievement - track exploration time
  useEffect(() => {
    if (!isInitialized) return

    // Start the timer interval
    intervalRef.current = setInterval(() => {
      explorationTimeRef.current += 1

      // Check if deepDiver achievement should be unlocked (300 seconds = 5 minutes)
      if (explorationTimeRef.current >= 300) {
        const deepDiverAchievement = achievements[AchievementId.deepDiver]
        if (deepDiverAchievement && !deepDiverAchievement.unlocked) {
          // Clear the interval first to prevent multiple unlocks
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
          }
          // Use setTimeout to avoid calling unlockAchievement during render
          setTimeout(() => {
            unlockAchievementRef.current?.(AchievementId.deepDiver)
          }, 0)
        }
      }
    }, 1000)

    // Cleanup function to prevent memory leaks
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isInitialized, achievements])

  const unlockAchievement = useCallback(
    (id: AchievementIdType) => {
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

          // Check for complex achievements that should be unlocked
          const complexAchievementsToUnlock = checkComplexAchievements(updated)

          // Unlock any complex achievements that were triggered
          let finalUpdated = updated
          complexAchievementsToUnlock.forEach((complexId) => {
            const complexAchievement = finalUpdated[complexId]
            if (complexAchievement && !complexAchievement.unlocked) {
              finalUpdated = {
                ...finalUpdated,
                [complexId]: {
                  ...complexAchievement,
                  unlocked: true,
                  unlockedAt: new Date(),
                },
              }

              // Show notification for complex achievement
              if (!countedAchievements.has(complexId)) {
                const complexAchievement = finalUpdated[complexId]
                if (complexAchievement) {
                  showAchievementNotification(complexAchievement)
                  setNewAchievementsVisible((count) => count + 1)
                  countedAchievements.add(complexId)
                }
              }
            }
          })

          return finalUpdated
        }
        return prev
      })
    },
    [checkComplexAchievements],
  )

  // Store the unlockAchievement function in a ref for use in the timer
  useEffect(() => {
    unlockAchievementRef.current = unlockAchievement
  }, [unlockAchievement])

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
