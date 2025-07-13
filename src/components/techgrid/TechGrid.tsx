import { AnimatePresence, motion } from 'framer-motion'
import debounce from 'lodash.debounce'
import {
  ChevronDown,
  ChevronUp,
  Cloud,
  Code2,
  Database,
  Globe,
  Layers,
  Palette,
  Shield,
  Star,
  StarHalf,
  StarOff,
  X,
  Zap,
} from 'lucide-react'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { AchievementId } from '@/assets/data/achievements'
import { techItems } from '@/assets/data/techItems'
import { useAchievements } from '@/components/achievements/AchievementsContext'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export interface TechItem {
  name: string
  icon: string
  category:
    | 'Frontend'
    | 'Backend'
    | 'DevOps'
    | 'Design'
    | 'Database'
    | 'Cloud'
    | 'Tools'
    | 'Languages'
  experience: 'expert' | 'intermediate' | 'limited'
  lucideIcon?: string
}

interface TechGridProps {
  title?: string
  compact?: boolean
  showExperience?: boolean
  interactive?: boolean
  className?: string
}

const experienceColors = {
  expert: 'border-emerald-500/50 text-emerald-300 bg-emerald-500/10',
  intermediate: 'border-blue-500/50 text-blue-300 bg-blue-500/10',
  limited: 'border-gray-500/50 text-gray-300 bg-gray-500/10',
}

function useTechGridFilters() {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set(),
  )
  const [selectedExperiences, setSelectedExperiences] = useState<Set<string>>(
    new Set(),
  )
  const [showFilters, setShowFilters] = useState(false)
  const [_, setFilterChangeCount] = useState(0)
  const { unlockAchievement } = useAchievements()

  // Debounce search input
  const debouncedSetSearch = useMemo(
    () =>
      debounce((val: string) => {
        setDebouncedSearch(val)
        // Unlock techSearcher achievement when search is used
        if (val.trim().length > 0) {
          unlockAchievement(AchievementId.techSearcher)
        }
      }, 800),
    [unlockAchievement],
  )
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value)
      debouncedSetSearch(e.target.value)
    },
    [debouncedSetSearch],
  )

  // Initialize with all categories and experiences selected
  useEffect(() => {
    const allCategories = new Set(techItems.map((item) => item.category))
    const allExperiences = new Set(techItems.map((item) => item.experience))
    setSelectedCategories(allCategories)
    setSelectedExperiences(allExperiences)
  }, [])

  const filteredTechnologies = useMemo(
    () =>
      techItems.filter((item) => {
        const matchesSearch = item.name
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase())
        const matchesCategory = selectedCategories.has(item.category)
        const matchesExperience = selectedExperiences.has(item.experience)
        return matchesSearch && matchesCategory && matchesExperience
      }),
    [debouncedSearch, selectedCategories, selectedExperiences],
  )

  const handleCategoryToggle = useCallback(
    (category: string) => {
      setSelectedCategories((prev) => {
        const newSet = new Set(prev)
        if (newSet.has(category)) {
          newSet.delete(category)
        } else {
          newSet.add(category)
        }
        return newSet
      })
      // Increment filter change count and check for achievement
      setFilterChangeCount((prev) => {
        const newCount = prev + 1
        if (newCount >= 7) {
          unlockAchievement(AchievementId.techFilterer)
        }
        return newCount
      })
    },
    [unlockAchievement],
  )

  const handleExperienceToggle = useCallback(
    (experience: string) => {
      setSelectedExperiences((prev) => {
        const newSet = new Set(prev)
        if (newSet.has(experience)) {
          newSet.delete(experience)
        } else {
          newSet.add(experience)
        }
        return newSet
      })
      // Increment filter change count and check for achievement
      setFilterChangeCount((prev) => {
        const newCount = prev + 1
        if (newCount >= 7) {
          unlockAchievement(AchievementId.techFilterer)
        }
        return newCount
      })
    },
    [unlockAchievement],
  )

  const clearFilters = useCallback(() => {
    const allCategories = new Set(techItems.map((item) => item.category))
    const allExperiences = new Set(techItems.map((item) => item.experience))
    setSelectedCategories(allCategories)
    setSelectedExperiences(allExperiences)
    setSearchTerm('')
    setDebouncedSearch('')
    // Increment filter change count and check for achievement
    setFilterChangeCount((prev) => {
      const newCount = prev + 1
      if (newCount >= 7) {
        unlockAchievement(AchievementId.techFilterer)
      }
      return newCount
    })
  }, [unlockAchievement])

  const categories = useMemo(
    () => Array.from(new Set(techItems.map((item) => item.category))),
    [],
  )
  const experiences = useMemo(() => ['expert', 'intermediate', 'limited'], [])

  return {
    searchTerm,
    setSearchTerm,
    setDebouncedSearch,
    showFilters,
    setShowFilters,
    selectedCategories,
    setSelectedCategories,
    selectedExperiences,
    setSelectedExperiences,
    handleCategoryToggle,
    handleExperienceToggle,
    clearFilters,
    categories,
    experiences,
    filteredTechnologies,
    handleSearchChange,
  }
}

const TechGridComponent = ({
  title,
  compact = false,
  showExperience = false,
  interactive = true,
  className = '',
}: TechGridProps) => {
  const {
    searchTerm,
    setSearchTerm,
    setDebouncedSearch,
    showFilters,
    setShowFilters,
    selectedCategories,
    setSelectedCategories,
    selectedExperiences,
    setSelectedExperiences,
    handleCategoryToggle,
    handleExperienceToggle,
    clearFilters,
    categories,
    experiences,
    filteredTechnologies,
    handleSearchChange,
  } = useTechGridFilters()

  const getLucideIcon = useCallback((iconName: string) => {
    const iconMap: Record<string, React.ComponentType> = {
      typescript: Code2,
      javascript: Code2,
      react: Globe,
      node: Code2,
      nest: Shield,
      html: Globe,
      css: Palette,
      sql: Database,
      java: Code2,
      python: Code2,
      csharp: Code2,
      graphql: Globe,
      next: Globe,
      spring: Shield,
      tailwind: Palette,
      material: Palette,
      tanstack: Layers,
      router: Globe,
      redis: Database,
      vite: Zap,
      babel: Code2,
      figma: Palette,
      twilio: Zap,
      circleci: Zap,
      webpack: Layers,
      sentry: Shield,
      sendgrid: Zap,
      jenkins: Zap,
      maven: Layers,
      bitbucket: Code2,
      n8n: Zap,
      unity: Palette,
      angular: Globe,
      vue: Globe,
      aws: Cloud,
      gatsby: Globe,
    }
    return iconMap[iconName.toLowerCase()] || Code2
  }, [])

  // Add categoryIcons and experienceIcons
  const categoryIcons = {
    Frontend: Globe,
    Backend: Shield,
    DevOps: Zap,
    Design: Palette,
    Database: Database,
    Cloud: Cloud,
    Tools: Layers,
    Languages: Code2,
  }
  const experienceIcons = {
    expert: Star,
    intermediate: StarHalf,
    limited: StarOff,
  }

  // Add animated glowing orbs for background
  const orbs = useMemo<
    Array<{
      left: string
      top: string
      size: number
      delay: number
      duration: number
      color: string
    }>
  >(() => {
    const orbCount = 8
    const colors = [
      'rgba(139,92,246,0.18)', // purple
      'rgba(236,72,153,0.15)', // pink
      'rgba(245,158,11,0.13)', // orange
      'rgba(16,185,129,0.13)', // teal
    ]
    return Array.from({ length: orbCount }, (_, i) => ({
      left: `${10 + i * 10 + Math.random() * 10}%`,
      top: `${10 + Math.random() * 70}%`,
      size: 120 + Math.random() * 100,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 6,
      color: (colors[i % colors.length] ?? colors[0]) as string,
    }))
  }, [])

  if (!interactive) {
    // Simple grid without filters
    return (
      <div className={`space-y-4 ${className}`}>
        {title && (
          <h3 className="font-mohave text-xl font-bold text-white uppercase tracking-wide">
            {title}
          </h3>
        )}

        <motion.div
          layout
          className={`grid gap-4 ${
            compact
              ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'
              : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredTechnologies.map((item, index) => {
              const IconComponent = getLucideIcon(item.name)
              const ExperienceIcon =
                item.experience === 'expert'
                  ? Star
                  : item.experience === 'intermediate'
                    ? StarHalf
                    : StarOff

              return (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.02,
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="group relative"
                >
                  <div className="relative flex flex-col items-center justify-center p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 transition-all duration-300 cursor-pointer">
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-orange-500/10 transition-all duration-300 pointer-events-none" />

                    {/* Tech Icon */}
                    <div className="relative z-10 mb-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Tech Name */}
                    <div className="relative z-10 text-center mb-2">
                      <div className="font-medium text-white text-sm group-hover:text-white/90 transition-colors">
                        {item.name}
                      </div>
                    </div>

                    {/* Experience Badge */}
                    {showExperience && (
                      <div className="relative z-10">
                        <Badge
                          variant="outline"
                          className={`text-xs px-2 py-1 ${experienceColors[item.experience]} border-opacity-50`}
                        >
                          <ExperienceIcon className="w-3 h-3 mr-1" />
                          {item.experience}
                        </Badge>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-2 right-2">
                      <Badge
                        variant="outline"
                        className="text-xs px-1 py-0.5 border-white/20 text-white/60 bg-white/5"
                      >
                        {item.category}
                      </Badge>
                    </div>

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300 pointer-events-none blur-xl" />
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredTechnologies.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg mb-2">
              No technologies match your filters
            </div>
          </motion.div>
        )}
      </div>
    )
  }

  // Interactive version with filters
  return (
    <div
      className={`relative w-full max-w-5xl mx-auto h-[70vh] min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 ${className}`}
    >
      {/* Gradient shadow background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/60 to-pink-900/40" />
        {/* Animated glowing orbs */}
        {orbs.map((orb, i) => (
          <motion.div
            key={`orb-${i}-${orb.color}`}
            className="absolute rounded-full blur-2xl"
            style={{
              left: orb.left,
              top: orb.top,
              width: orb.size,
              height: orb.size,
              background: orb.color,
              zIndex: 1,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              repeatType: 'mirror',
              delay: orb.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      {/* Main content with gradient shadow and glassmorphism */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          boxShadow:
            '0 40px 80px 0 rgba(139,92,246,0.18), 0 0 120px 0 rgba(236,72,153,0.10)',
        }}
      />
      <div className="relative z-20 flex flex-col h-full">
        {/* Glassmorphic sticky filter header */}
        <div className="sticky top-0 z-30">
          <div
            className="glass-pane-filter px-6 py-4 bg-white/10 backdrop-blur-xl border-b border-white/10 rounded-t-2xl shadow-lg"
            style={{ boxShadow: '0 8px 32px 0 rgba(139,92,246,0.10)' }}
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Input
                  type="text"
                  placeholder="Search technologies..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-500"
                />
              </div>
              {/* Filter Toggle */}
              <div className="flex items-center gap-2 sm:gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="border-white/20 text-white hover:bg-white/10"
                  Icon={
                    showFilters ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )
                  }
                >
                  Filters
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedCategories(new Set())
                    setSearchTerm('')
                    setDebouncedSearch('')
                  }}
                  className="text-gray-400 hover:text-white"
                  Icon={<X className="w-4 h-4" />}
                >
                  <span className="hidden sm:inline">Clear All</span>
                  <span className="sm:hidden">Clear</span>
                </Button>
                {(searchTerm ||
                  selectedCategories.size < categories.length ||
                  selectedExperiences.size < 3) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-gray-400 hover:text-white"
                    Icon={<X className="w-4 h-4" />}
                  >
                    <span className="hidden sm:inline">Reset</span>
                    <span className="sm:hidden">Reset</span>
                  </Button>
                )}
              </div>
              {/* Results Count */}
              <div className="text-sm text-gray-400">
                {filteredTechnologies.length} of {techItems.length} technologies
              </div>
            </div>
            {/* Filter Panel overlays grid, does not push down */}
            <motion.div
              initial={false}
              animate={{
                height: showFilters ? 'auto' : 0,
                opacity: showFilters ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className={
                showFilters
                  ? 'overflow-visible absolute left-0 right-0 mt-2'
                  : 'hidden'
              }
              style={showFilters ? { zIndex: 40 } : {}}
            >
              <div className="mt-0 pt-6 border-t border-white/10 space-y-6 bg-black/80 rounded-b-2xl shadow-2xl px-6 pb-6">
                {/* Categories */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    Categories
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {categories.map((category) => {
                      const IconComponent =
                        categoryIcons[category as keyof typeof categoryIcons] ||
                        Layers
                      return (
                        <label
                          key={category}
                          className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                        >
                          <div className="relative">
                            <input
                              type="checkbox"
                              checked={selectedCategories.has(category)}
                              onChange={() => handleCategoryToggle(category)}
                              className="sr-only"
                            />
                            <div
                              className={`w-5 h-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
                                selectedCategories.has(category)
                                  ? 'border-pink-400 bg-pink-400/20'
                                  : 'border-white/30 bg-white/5 group-hover:border-white/50'
                              }`}
                            >
                              {selectedCategories.has(category) && (
                                <motion.div
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                  className="w-2 h-2 bg-pink-300 rounded-sm"
                                />
                              )}
                            </div>
                          </div>
                          <IconComponent className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-200" />
                          <span className="text-sm text-white/80 group-hover:text-white transition-colors duration-200 font-medium">
                            {category}
                          </span>
                        </label>
                      )
                    })}
                  </div>
                </div>
                {/* Experience Levels */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Experience Level
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {experiences.map((experience) => {
                      const IconComponent =
                        experienceIcons[
                          experience as keyof typeof experienceIcons
                        ]
                      return (
                        <label
                          key={experience}
                          className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                        >
                          <div className="relative">
                            <input
                              type="checkbox"
                              checked={selectedExperiences.has(experience)}
                              onChange={() =>
                                handleExperienceToggle(experience)
                              }
                              className="sr-only"
                            />
                            <div
                              className={`w-5 h-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
                                selectedExperiences.has(experience)
                                  ? 'border-pink-400 bg-pink-400/20'
                                  : 'border-white/30 bg-white/5 group-hover:border-white/50'
                              }`}
                            >
                              {selectedExperiences.has(experience) && (
                                <motion.div
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                  className="w-2 h-2 bg-pink-300 rounded-sm"
                                />
                              )}
                            </div>
                          </div>
                          <IconComponent className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-200" />
                          <span className="text-sm text-white/80 group-hover:text-white transition-colors duration-200 font-medium capitalize">
                            {experience}
                          </span>
                        </label>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Scrollable grid content */}
        <div className="flex-1 min-h-0 overflow-auto scrollbar-thin scrollbar-thumb-purple-500/40 scrollbar-track-transparent px-6 py-8 relative z-10">
          <div className="space-y-4">
            <motion.div
              layout
              className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredTechnologies.map((item, index) => {
                  const IconComponent = getLucideIcon(item.name)
                  const ExperienceIcon =
                    item.experience === 'expert'
                      ? Star
                      : item.experience === 'intermediate'
                        ? StarHalf
                        : StarOff

                  return (
                    <motion.div
                      key={item.name}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.02,
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                        transition: { duration: 0.2 },
                      }}
                      className="group relative"
                    >
                      <div className="relative flex flex-col items-center justify-center p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 transition-all duration-300 cursor-pointer">
                        {/* Background gradient on hover */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-orange-500/10 transition-all duration-300 pointer-events-none" />

                        {/* Tech Icon */}
                        <div className="relative z-10 mb-3">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Tech Name */}
                        <div className="relative z-10 text-center mb-2">
                          <div className="font-medium text-white text-sm group-hover:text-white/90 transition-colors">
                            {item.name}
                          </div>
                        </div>

                        {/* Experience Badge */}
                        <div className="relative z-10">
                          <Badge
                            variant="outline"
                            className={`text-xs px-2 py-1 ${experienceColors[item.experience]} border-opacity-50`}
                          >
                            <ExperienceIcon className="w-3 h-3 mr-1" />
                            {item.experience}
                          </Badge>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-2 right-2">
                          <Badge
                            variant="outline"
                            className="text-xs px-1 py-0.5 border-white/20 text-white/60 bg-white/5"
                          >
                            {item.category}
                          </Badge>
                        </div>

                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300 pointer-events-none blur-xl" />
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredTechnologies.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="text-gray-400 text-lg mb-2">
                  No technologies match your filters
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export const TechGrid = React.memo(TechGridComponent)
