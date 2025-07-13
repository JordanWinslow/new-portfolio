import { createContext, type ReactNode, useContext } from 'react'
import type { Achievement } from '@/assets/data/achievements'
import { useAchievementsLogic } from './useAchievementsLogic'

interface AchievementsContextType {
  achievements: Record<string, Achievement>
  unlockedCount: number
  totalPoints: number
  newAchievementsVisible: number
  unlockAchievement: (id: string) => void
  markAchievementsAsViewed: () => void
}

const AchievementsContext = createContext<AchievementsContextType | undefined>(
  undefined,
)

export function AchievementsProvider({ children }: { children: ReactNode }) {
  const achievementsLogic = useAchievementsLogic()

  return (
    <AchievementsContext value={achievementsLogic}>
      {children}
    </AchievementsContext>
  )
}

export function useAchievements() {
  const context = useContext(AchievementsContext)
  if (context === undefined) {
    throw new Error(
      'useAchievements must be used within an AchievementsProvider',
    )
  }
  return context
}
