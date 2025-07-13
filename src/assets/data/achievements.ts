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
  Settings,
  Smartphone,
  Sparkles,
  Target,
  Timer,
  User,
  Users,
} from 'lucide-react'

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
      id: 'first-steps',
      title: 'First Steps',
      description:
        "Welcome to the portfolio! You've taken your first step into a larger world.",
      icon: Home,
      unlocked: false,
      category: 'navigation',
      rarity: 'common',
      unlockCondition: 'Visit the homepage',
      points: 10,
    },
    portfolioExplorer: {
      id: 'portfolio-explorer',
      title: 'Portfolio Explorer',
      description:
        "You've discovered the showcase of my work. Time to dive deep!",
      icon: Palette,
      unlocked: false,
      category: 'navigation',
      rarity: 'common',
      unlockCondition: 'Navigate to the portfolio page',
      points: 15,
    },
    aboutDiscoverer: {
      id: 'about-discoverer',
      title: 'About Discoverer',
      description: 'Getting to know me better? I appreciate the interest!',
      icon: User,
      unlocked: false,
      category: 'navigation',
      rarity: 'common',
      unlockCondition: 'Navigate to the about page',
      points: 15,
    },
    contactReacher: {
      id: 'contact-reacher',
      title: 'Contact Reacher',
      description: "Ready to connect? I'm excited to hear from you!",
      icon: Mail,
      unlocked: false,
      category: 'navigation',
      rarity: 'common',
      unlockCondition: 'Navigate to the contact page',
      points: 15,
    },
    resumeReader: {
      id: 'resume-reader',
      title: 'Resume Reader',
      description:
        'Taking a look at my credentials. Professional curiosity is always welcome!',
      icon: FileText,
      unlocked: false,
      category: 'navigation',
      rarity: 'common',
      unlockCondition: 'Navigate to the resume page',
      points: 15,
    },
    worldTraveler: {
      id: 'world-traveler',
      title: 'World Traveler',
      description:
        "You've explored every corner of this portfolio. A true digital nomad!",
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
      id: 'layout-explorer',
      title: 'Layout Explorer',
      description:
        "You've tried all the different ways to view my projects. Variety is the spice of life!",
      icon: Grid3X3,
      unlocked: false,
      category: 'interaction',
      rarity: 'rare',
      unlockCondition: 'Switch between all portfolio layout options',
      points: 60,
    },
    scrollMaster: {
      id: 'scroll-master',
      title: 'Scroll Master',
      description:
        "You've scrolled through the entire portfolio. That's some serious dedication!",
      icon: ArrowDown,
      unlocked: false,
      category: 'interaction',
      rarity: 'common',
      unlockCondition: 'Scroll to the bottom of the portfolio page',
      points: 25,
    },
    resumeDownloader: {
      id: 'resume-downloader',
      title: 'Resume Downloader',
      description:
        "You've downloaded my resume. I must have caught your attention!",
      icon: Download,
      unlocked: false,
      category: 'interaction',
      rarity: 'common',
      unlockCondition: 'Download the resume PDF',
      points: 40,
    },
    emailSender: {
      id: 'email-sender',
      title: 'Email Sender',
      description:
        "You've opened your email client. Let's start a conversation!",
      icon: Mail,
      unlocked: false,
      category: 'interaction',
      rarity: 'common',
      unlockCondition: 'Click on email contact link',
      points: 25,
    },
    projectExplorer: {
      id: 'project-explorer',
      title: 'Project Explorer',
      description:
        "You've viewed multiple projects. I hope you like what you see!",
      icon: Eye,
      unlocked: false,
      category: 'interaction',
      rarity: 'rare',
      unlockCondition: 'View 3 different projects',
      points: 75,
    },
    phoneFlicker: {
      id: 'phone-flicker',
      title: 'Phone Flicker',
      description:
        "You've discovered the interactive phone stack! Physics is fun, isn't it?",
      icon: Smartphone,
      unlocked: false,
      category: 'interaction',
      rarity: 'common',
      unlockCondition: 'Flick a phone in the interactive stack',
      points: 30,
    },
    phoneMaster: {
      id: 'phone-master',
      title: 'Phone Master',
      description:
        "You've flicked all the phones! The stack reassembles just like magic.",
      icon: Sparkles,
      unlocked: false,
      category: 'interaction',
      rarity: 'rare',
      unlockCondition: 'Flick all phones in the stack',
      points: 80,
    },
    physicsTinkerer: {
      id: 'physics-tinkerer',
      title: 'Physics Tinkerer',
      description:
        "You've adjusted the phone stack settings. Experimentation leads to discovery!",
      icon: Settings,
      unlocked: false,
      category: 'interaction',
      rarity: 'rare',
      unlockCondition: 'Adjust both flick speed and spin degrees',
      points: 60,
    },
  },
  exploration: {
    techExplorer: {
      id: 'tech-explorer',
      title: 'Tech Explorer',
      description:
        "You've explored the technology section. Knowledge is power!",
      icon: Code2,
      unlocked: false,
      category: 'exploration',
      rarity: 'common',
      unlockCondition: 'Read through the technology information',
      points: 35,
    },
    techSearcher: {
      id: 'tech-searcher',
      title: 'Tech Searcher',
      description:
        "You've searched for specific technologies. Looking for something particular?",
      icon: Search,
      unlocked: false,
      category: 'exploration',
      rarity: 'rare',
      unlockCondition: 'Search for a technology in the tech grid',
      points: 45,
    },
    techFilterer: {
      id: 'tech-filterer',
      title: 'Tech Filterer',
      description: "You've filtered the technology grid. Organization is key!",
      icon: Target,
      unlocked: false,
      category: 'exploration',
      rarity: 'rare',
      unlockCondition: 'Use filters in the technology section',
      points: 55,
    },
    hoverExplorer: {
      id: 'hover-explorer',
      title: 'Hover Explorer',
      description:
        "You've hovered over many interactive elements. Attention to detail!",
      icon: MousePointer,
      unlocked: false,
      category: 'exploration',
      rarity: 'rare',
      unlockCondition: 'Hover over 10 different interactive elements',
      points: 80,
    },
  },
  social: {
    socialButterfly: {
      id: 'social-butterfly',
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
      id: 'networker',
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
      id: 'code-explorer',
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
      id: 'detail-seeker',
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
      id: 'completionist',
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
      id: 'deep-diver',
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
      id: 'coffee-break',
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
      id: 'gamer-spirit',
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
      id: 'heart-finder',
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
      id: 'lightbulb-moment',
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
      id: 'rocket-launcher',
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
