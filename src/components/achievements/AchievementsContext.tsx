import {
  ArrowDown,
  ArrowLeft,
  Code2,
  Crown,
  Download,
  Eye,
  FileText,
  Github,
  Globe,
  Grid3X3,
  Home,
  Linkedin,
  Mail,
  MousePointer,
  Palette,
  Play,
  User,
  Users,
  Zap,
} from 'lucide-react'
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

export interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  unlocked: boolean
  category: 'navigation' | 'interaction' | 'exploration' | 'mastery' | 'social'
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  unlockCondition: string
  points: number
  unlockedAt?: Date
}

interface AchievementsContextType {
  achievements: Achievement[]
  unlockedCount: number
  totalPoints: number
  unlockAchievement: (id: string) => void
  isUnlocked: (id: string) => boolean
  getAchievement: (id: string) => Achievement | undefined
}

const defaultAchievements: Achievement[] = [
  // Navigation Achievements
  {
    id: 'first-steps',
    title: 'First Steps',
    description: 'Visited the homepage',
    icon: Home,
    unlocked: false,
    category: 'navigation',
    rarity: 'common',
    unlockCondition: 'Navigate to the homepage',
    points: 10,
  },
  {
    id: 'portfolio-explorer',
    title: 'Portfolio Explorer',
    description: 'Visited the portfolio page',
    icon: Palette,
    unlocked: false,
    category: 'navigation',
    rarity: 'common',
    unlockCondition: 'Navigate to the portfolio page',
    points: 15,
  },
  {
    id: 'about-discoverer',
    title: 'About Discoverer',
    description: 'Visited the about page',
    icon: User,
    unlocked: false,
    category: 'navigation',
    rarity: 'common',
    unlockCondition: 'Navigate to the about page',
    points: 15,
  },
  {
    id: 'contact-reacher',
    title: 'Contact Reacher',
    description: 'Visited the contact page',
    icon: Mail,
    unlocked: false,
    category: 'navigation',
    rarity: 'common',
    unlockCondition: 'Navigate to the contact page',
    points: 15,
  },
  {
    id: 'resume-reader',
    title: 'Resume Reader',
    description: 'Visited the resume page',
    icon: FileText,
    unlocked: false,
    category: 'navigation',
    rarity: 'common',
    unlockCondition: 'Navigate to the resume page',
    points: 15,
  },
  {
    id: 'world-traveler',
    title: 'World Traveler',
    description: 'Visited all pages',
    icon: Globe,
    unlocked: false,
    category: 'navigation',
    rarity: 'rare',
    unlockCondition: 'Visit all pages in the portfolio',
    points: 50,
  },
  {
    id: 'homecoming',
    title: 'Homecoming',
    description: 'Returned to the homepage',
    icon: ArrowLeft,
    unlocked: false,
    category: 'navigation',
    rarity: 'common',
    unlockCondition: 'Navigate back to the homepage from another page',
    points: 20,
  },

  // Interaction Achievements
  {
    id: 'button-master',
    title: 'Button Master',
    description: 'Clicked every button on the portfolio page',
    icon: MousePointer,
    unlocked: false,
    category: 'interaction',
    rarity: 'rare',
    unlockCondition: 'Click all interactive buttons on the portfolio page',
    points: 75,
  },
  {
    id: 'layout-explorer',
    title: 'Layout Explorer',
    description: 'Tried all layout options',
    icon: Grid3X3,
    unlocked: false,
    category: 'interaction',
    rarity: 'rare',
    unlockCondition: 'Switch between all portfolio layout options',
    points: 60,
  },
  {
    id: 'scroll-master',
    title: 'Scroll Master',
    description: 'Scrolled through the entire portfolio',
    icon: ArrowDown,
    unlocked: false,
    category: 'interaction',
    rarity: 'common',
    unlockCondition: 'Scroll to the bottom of the portfolio page',
    points: 25,
  },
  {
    id: 'video-watcher',
    title: 'Video Watcher',
    description: 'Watched the demo video',
    icon: Play,
    unlocked: false,
    category: 'interaction',
    rarity: 'common',
    unlockCondition: 'Play the demo video on the about page',
    points: 30,
  },
  {
    id: 'resume-downloader',
    title: 'Resume Downloader',
    description: 'Downloaded the resume',
    icon: Download,
    unlocked: false,
    category: 'interaction',
    rarity: 'common',
    unlockCondition: 'Download the resume PDF',
    points: 40,
  },
  {
    id: 'email-sender',
    title: 'Email Sender',
    description: 'Opened email client',
    icon: Mail,
    unlocked: false,
    category: 'interaction',
    rarity: 'common',
    unlockCondition: 'Click on email contact link',
    points: 25,
  },

  // Exploration Achievements
  {
    id: 'detail-seeker',
    title: 'Detail Seeker',
    description: 'Found hidden elements',
    icon: Eye,
    unlocked: false,
    category: 'exploration',
    rarity: 'epic',
    unlockCondition: 'Discover hidden interactive elements',
    points: 100,
  },
  {
    id: 'hover-explorer',
    title: 'Hover Explorer',
    description: 'Hovered over all interactive elements',
    icon: MousePointer,
    unlocked: false,
    category: 'exploration',
    rarity: 'rare',
    unlockCondition: 'Hover over all hoverable elements',
    points: 80,
  },
  {
    id: 'tab-master',
    title: 'Tab Master',
    description: 'Explored all tabs on the resume page',
    icon: Grid3X3,
    unlocked: false,
    category: 'exploration',
    rarity: 'rare',
    unlockCondition: 'Click through all tabs on the resume page',
    points: 70,
  },

  // Mastery Achievements
  {
    id: 'speed-runner',
    title: 'Speed Runner',
    description: 'Navigated through all pages quickly',
    icon: Zap,
    unlocked: false,
    category: 'mastery',
    rarity: 'epic',
    unlockCondition: 'Visit all pages within 30 seconds',
    points: 150,
  },
  {
    id: 'completionist',
    title: 'Completionist',
    description: 'Unlocked all achievements',
    icon: Crown,
    unlocked: false,
    category: 'mastery',
    rarity: 'legendary',
    unlockCondition: 'Unlock every achievement in the portfolio',
    points: 500,
  },
  {
    id: 'tech-explorer',
    title: 'Tech Explorer',
    description: 'Explored the technology section',
    icon: Code2,
    unlocked: false,
    category: 'mastery',
    rarity: 'common',
    unlockCondition: 'Read through the technology information',
    points: 35,
  },

  // Social Achievements
  {
    id: 'social-butterfly',
    title: 'Social Butterfly',
    description: 'Clicked on all social links',
    icon: Users,
    unlocked: false,
    category: 'social',
    rarity: 'rare',
    unlockCondition: 'Click on all social media links',
    points: 90,
  },
  {
    id: 'networker',
    title: 'Networker',
    description: 'Connected on LinkedIn',
    icon: Linkedin,
    unlocked: false,
    category: 'social',
    rarity: 'common',
    unlockCondition: 'Click on the LinkedIn profile link',
    points: 45,
  },
  {
    id: 'code-explorer',
    title: 'Code Explorer',
    description: 'Visited the GitHub repository',
    icon: Github,
    unlocked: false,
    category: 'social',
    rarity: 'common',
    unlockCondition: 'Click on the GitHub repository link',
    points: 45,
  },
]

const AchievementsContext = createContext<AchievementsContextType | undefined>(
  undefined,
)

export function AchievementsProvider({ children }: { children: ReactNode }) {
  const getInitialAchievements = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-achievements')
      return saved ? JSON.parse(saved) : defaultAchievements
    }
    return defaultAchievements
  }

  const [achievements, setAchievements] = useState<Achievement[]>(
    getInitialAchievements,
  )

  const unlockedCount = achievements.filter((a) => a.unlocked).length
  const totalPoints = achievements
    .filter((a) => a.unlocked)
    .reduce((sum, a) => sum + a.points, 0)

  const unlockAchievement = useCallback((id: string) => {
    setAchievements((prev) => {
      const achievement = prev.find((a) => a.id === id)
      if (achievement && !achievement.unlocked) {
        const updated = prev.map((a) =>
          a.id === id ? { ...a, unlocked: true, unlockedAt: new Date() } : a,
        )
        if (typeof window !== 'undefined') {
          localStorage.setItem(
            'portfolio-achievements',
            JSON.stringify(updated),
          )
        }
        return updated
      }
      return prev
    })
  }, [])

  const isUnlocked = useCallback(
    (id: string) => {
      return achievements.find((a) => a.id === id)?.unlocked || false
    },
    [achievements],
  )

  const getAchievement = useCallback(
    (id: string) => {
      return achievements.find((a) => a.id === id)
    },
    [achievements],
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'portfolio-achievements',
        JSON.stringify(achievements),
      )
    }
  }, [achievements])

  return (
    <AchievementsContext.Provider
      value={{
        achievements,
        unlockedCount,
        totalPoints,
        unlockAchievement,
        isUnlocked,
        getAchievement,
      }}
    >
      {children}
    </AchievementsContext.Provider>
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
