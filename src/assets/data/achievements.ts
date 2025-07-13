import {
  ArrowDown,
  Code2,
  Coffee,
  Crown,
  Download,
  Eye,
  FileText,
  Gamepad2,
  Github,
  Globe,
  Grid3X3,
  Heart,
  Home,
  Lightbulb,
  Linkedin,
  Mail,
  MousePointer,
  Palette,
  Rocket,
  Search,
  Smartphone,
  Target,
  Timer,
  User,
  Users,
} from 'lucide-react'

// Type-safe achievement IDs enum - keys match the achievement structure exactly
export const AchievementId = {
  // Navigation achievements
  firstSteps: 'first-steps',
  portfolioExplorer: 'portfolio-explorer',
  aboutDiscoverer: 'about-discoverer',
  contactReacher: 'contact-reacher',
  resumeReader: 'resume-reader',
  worldTraveler: 'world-traveler',

  // Interaction achievements
  layoutExplorer: 'layout-explorer',
  scrollMaster: 'scroll-master',
  resumeDownloader: 'resume-downloader',
  emailSender: 'email-sender',
  projectExplorer: 'project-explorer',
  phoneMaster: 'phone-master',

  // Exploration achievements
  techExplorer: 'tech-explorer',
  techSearcher: 'tech-searcher',
  techFilterer: 'tech-filterer',
  hoverExplorer: 'hover-explorer',

  // Social achievements
  socialButterfly: 'social-butterfly',
  networker: 'networker',
  codeExplorer: 'code-explorer',

  // Mastery achievements
  detailSeeker: 'detail-seeker',
  completionist: 'completionist',
  deepDiver: 'deep-diver',

  // Easter egg achievements
  coffeeBreak: 'coffee-break',
  gamerSpirit: 'gamer-spirit',
  heartFinder: 'heart-finder',
  lightbulbMoment: 'lightbulb-moment',
  rocketLauncher: 'rocket-launcher',
} as const

// Type for achievement IDs
export type AchievementIdType =
  (typeof AchievementId)[keyof typeof AchievementId]

export interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  unlocked: boolean
  category:
    | 'navigation'
    | 'interaction'
    | 'exploration'
    | 'mastery'
    | 'social'
    | 'easter-eggs'
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  unlockCondition: string
  points: number
  unlockedAt?: Date
  secret?: boolean
}

export const achievements: Record<string, Record<string, Achievement>> = {
  navigation: {
    firstSteps: {
      id: AchievementId.firstSteps,
      title: 'The Cube',
      description: 'Pretty cool huh?',
      icon: Home,
      unlocked: false,
      category: 'navigation',
      rarity: 'common',
      unlockCondition: 'Spend 20 seconds on the Intro Page',
      points: 10,
    },
    portfolioExplorer: {
      id: AchievementId.portfolioExplorer,
      title: 'Portfolio Explorer',
      description: 'Thanks for checking out my portfolio!',
      icon: Palette,
      unlocked: false,
      category: 'navigation',
      rarity: 'common',
      unlockCondition: 'Navigate to the portfolio page',
      points: 15,
    },
    aboutDiscoverer: {
      id: AchievementId.aboutDiscoverer,
      title: 'About Discoverer',
      description: 'Thanks for getting to know me a bit!',
      icon: User,
      unlocked: false,
      category: 'navigation',
      rarity: 'common',
      unlockCondition: 'Navigate to the about page',
      points: 15,
    },
    contactReacher: {
      id: AchievementId.contactReacher,
      title: 'Contact Reacher',
      description: "Let's get in touch!",
      icon: Mail,
      unlocked: false,
      category: 'navigation',
      rarity: 'common',
      unlockCondition: 'Navigate to the contact page',
      points: 15,
    },
    resumeReader: {
      id: AchievementId.resumeReader,
      title: 'Resume Reader',
      description: 'If you like what you see, feel free to get in touch!',
      icon: FileText,
      unlocked: false,
      category: 'navigation',
      rarity: 'common',
      unlockCondition: 'Navigate to the resume page',
      points: 15,
    },
    worldTraveler: {
      id: AchievementId.worldTraveler,
      title: 'World Traveler',
      description:
        'This application was not simple to develop, thanks so much for exploring every part of it!',
      icon: Globe,
      unlocked: false,
      category: 'navigation',
      rarity: 'rare',
      unlockCondition: 'Visit all pages in the portfolio',
      points: 50,
    },
  },
  interaction: {
    layoutExplorer: {
      id: AchievementId.layoutExplorer,
      title: 'Layout Explorer',
      description: 'Variety is the spice of life!',
      icon: Grid3X3,
      unlocked: false,
      category: 'interaction',
      rarity: 'rare',
      unlockCondition: 'Switch between all portfolio layout options',
      points: 60,
    },
    scrollMaster: {
      id: AchievementId.scrollMaster,
      title: 'Scroll Master',
      description: "You've scrolled through the entire portfolio.",
      icon: ArrowDown,
      unlocked: false,
      category: 'interaction',
      rarity: 'common',
      unlockCondition: 'Scroll to the bottom of the portfolio page',
      points: 25,
    },
    resumeDownloader: {
      id: AchievementId.resumeDownloader,
      title: 'Resume Downloader',
      description: 'Thanks for your interest! Feel free to get in touch.',
      icon: Download,
      unlocked: false,
      category: 'interaction',
      rarity: 'common',
      unlockCondition: 'Download the resume PDF',
      points: 40,
    },
    emailSender: {
      id: AchievementId.emailSender,
      title: 'Email Sender',
      description: "I'm excited to hear from you!",
      icon: Mail,
      unlocked: false,
      category: 'interaction',
      rarity: 'common',
      unlockCondition: 'Click on email contact link',
      points: 25,
    },
    projectExplorer: {
      id: AchievementId.projectExplorer,
      title: 'Project Explorer',
      description:
        'Thanks for checking out my side projects. I hope you like what you see!',
      icon: Eye,
      unlocked: false,
      category: 'interaction',
      rarity: 'rare',
      unlockCondition: 'Clicked 4 different project links',
      points: 75,
    },

    phoneMaster: {
      id: AchievementId.phoneMaster,
      title: 'Phone Master',
      description:
        "You've flicked all the phones! The stack reassembles just like magic.",
      icon: Smartphone,
      unlocked: false,
      category: 'interaction',
      rarity: 'rare',
      unlockCondition: 'Flick all phones in the interactive stack',
      points: 80,
    },
  },
  exploration: {
    techExplorer: {
      id: AchievementId.techExplorer,
      title: 'Tech Explorer',
      description:
        "You've explored the technology section. There's so much to discover!",
      icon: Code2,
      unlocked: false,
      category: 'exploration',
      rarity: 'common',
      unlockCondition: 'Navigate to the tech section',
      points: 20,
    },
    techSearcher: {
      id: AchievementId.techSearcher,
      title: 'Tech Searcher',
      description:
        "You've used the search functionality. Finding what you need is important!",
      icon: Search,
      unlocked: false,
      category: 'exploration',
      rarity: 'common',
      unlockCondition: 'Use the search feature',
      points: 25,
    },
    techFilterer: {
      id: AchievementId.techFilterer,
      title: 'Tech Filterer',
      description: "You've filtered the technology list. Organization is key!",
      icon: Target,
      unlocked: false,
      category: 'exploration',
      rarity: 'common',
      unlockCondition: 'Use the filter functionality',
      points: 25,
    },
    hoverExplorer: {
      id: AchievementId.hoverExplorer,
      title: 'Hover Explorer',
      description:
        "You've discovered hover effects throughout the site. Attention to detail!",
      icon: MousePointer,
      unlocked: false,
      category: 'exploration',
      rarity: 'rare',
      unlockCondition: 'Hover over 10 different interactive elements',
      points: 50,
    },
  },
  social: {
    socialButterfly: {
      id: AchievementId.socialButterfly,
      title: 'Social Butterfly',
      description:
        "You've clicked on all social links. Networking is everything!",
      icon: Users,
      unlocked: false,
      category: 'social',
      rarity: 'rare',
      unlockCondition: 'Click on all social media links',
      points: 90,
    },
    networker: {
      id: AchievementId.networker,
      title: 'Networker',
      description:
        "You've connected on LinkedIn. Let's grow our professional network!",
      icon: Linkedin,
      unlocked: false,
      category: 'social',
      rarity: 'common',
      unlockCondition: 'Click on the LinkedIn profile link',
      points: 45,
    },
    codeExplorer: {
      id: AchievementId.codeExplorer,
      title: 'Code Explorer',
      description:
        "You've visited the GitHub repository. The code is open for exploration!",
      icon: Github,
      unlocked: false,
      category: 'social',
      rarity: 'common',
      unlockCondition: 'Click on the GitHub repository link',
      points: 45,
    },
  },
  mastery: {
    detailSeeker: {
      id: AchievementId.detailSeeker,
      title: 'Detail Seeker',
      description:
        "You've found hidden elements! Your attention to detail is impressive.",
      icon: Eye,
      unlocked: false,
      category: 'mastery',
      rarity: 'epic',
      unlockCondition: 'Discover hidden interactive elements',
      points: 100,
      secret: true,
    },
    completionist: {
      id: AchievementId.completionist,
      title: 'Completionist',
      description:
        "You've unlocked all achievements! You're a true portfolio master.",
      icon: Crown,
      unlocked: false,
      category: 'mastery',
      rarity: 'legendary',
      unlockCondition: 'Unlock every achievement in the portfolio',
      points: 500,
    },
    deepDiver: {
      id: AchievementId.deepDiver,
      title: 'Deep Diver',
      description:
        "You've spent significant time exploring. I appreciate your thoroughness!",
      icon: Timer,
      unlocked: false,
      category: 'mastery',
      rarity: 'epic',
      unlockCondition: 'Spend 5 minutes exploring the portfolio',
      points: 120,
    },
  },
  easterEggs: {
    coffeeBreak: {
      id: AchievementId.coffeeBreak,
      title: 'Coffee Break',
      description:
        'You found the coffee easter egg! ☕ Sometimes the best code is written with a good cup of coffee.',
      icon: Coffee,
      unlocked: false,
      category: 'easter-eggs',
      rarity: 'epic',
      unlockCondition: 'Find the hidden coffee reference',
      points: 150,
      secret: true,
    },
    gamerSpirit: {
      id: AchievementId.gamerSpirit,
      title: 'Gamer Spirit',
      description:
        'You discovered the gaming easter egg! 🎮 Because coding and gaming go hand in hand.',
      icon: Gamepad2,
      unlocked: false,
      category: 'easter-eggs',
      rarity: 'epic',
      unlockCondition: 'Find the hidden gaming reference',
      points: 150,
      secret: true,
    },
    heartFinder: {
      id: AchievementId.heartFinder,
      title: 'Heart Finder',
      description:
        'You found the heart easter egg! ❤️ Because passion drives great code.',
      icon: Heart,
      unlocked: false,
      category: 'easter-eggs',
      rarity: 'epic',
      unlockCondition: 'Find the hidden heart reference',
      points: 150,
      secret: true,
    },
    lightbulbMoment: {
      id: AchievementId.lightbulbMoment,
      title: 'Lightbulb Moment',
      description:
        'You found the idea easter egg! 💡 Innovation starts with a single spark.',
      icon: Lightbulb,
      unlocked: false,
      category: 'easter-eggs',
      rarity: 'epic',
      unlockCondition: 'Find the hidden lightbulb reference',
      points: 150,
      secret: true,
    },
    rocketLauncher: {
      id: AchievementId.rocketLauncher,
      title: 'Rocket Launcher',
      description:
        'You found the rocket easter egg! 🚀 Ready to launch your next project?',
      icon: Rocket,
      unlocked: false,
      category: 'easter-eggs',
      rarity: 'epic',
      unlockCondition: 'Find the hidden rocket reference',
      points: 150,
      secret: true,
    },
  },
}

// Flatten achievements for easier access
export const allAchievements = Object.values(achievements).reduce(
  (acc, category) => {
    return { ...acc, ...category }
  },
  {} as Record<string, Achievement>,
)

// Get achievement by ID
export const getAchievement = (id: string): Achievement | undefined => {
  return allAchievements[id]
}

// Get all achievements as array
export const getAchievementsArray = (): Achievement[] => {
  return Object.values(allAchievements)
}

export const achievementCategories = [
  'navigation',
  'interaction',
  'exploration',
  'mastery',
  'social',
  'easter-eggs',
] as const
