import { motion } from 'framer-motion'
import debounce from 'lodash.debounce'
import {
  ChevronDown,
  ChevronUp,
  Layers,
  Star,
  StarHalf,
  StarOff,
  X,
} from 'lucide-react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import type { TechItem } from '@/components/techgrid/TechGrid'
import { TechGrid } from '@/components/techgrid/TechGrid'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

interface AboutTechFiltersProps {
  allTechnologies: TechItem[]
}

function useAboutTechFilters(allTechnologies: TechItem[]) {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set(),
  )
  const [selectedExperiences, setSelectedExperiences] = useState<Set<string>>(
    new Set(),
  )
  const [showFilters, setShowFilters] = useState(false)

  // Debounce search input
  const debouncedSetSearch = useMemo(
    () => debounce((val: string) => setDebouncedSearch(val), 800),
    [],
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
    const allCategories = new Set(allTechnologies.map((item) => item.category))
    const allExperiences = new Set(
      allTechnologies.map((item) => item.experience),
    )
    setSelectedCategories(allCategories)
    setSelectedExperiences(allExperiences)
  }, [allTechnologies])

  const filteredTechnologies = useMemo(
    () =>
      allTechnologies.filter((item) => {
        const matchesSearch = item.name
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase())
        const matchesCategory = selectedCategories.has(item.category)
        const matchesExperience = selectedExperiences.has(item.experience)
        return matchesSearch && matchesCategory && matchesExperience
      }),
    [allTechnologies, debouncedSearch, selectedCategories, selectedExperiences],
  )

  const handleCategoryToggle = useCallback((category: string) => {
    setSelectedCategories((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(category)) {
        newSet.delete(category)
      } else {
        newSet.add(category)
      }
      return newSet
    })
  }, [])

  const handleExperienceToggle = useCallback((experience: string) => {
    setSelectedExperiences((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(experience)) {
        newSet.delete(experience)
      } else {
        newSet.add(experience)
      }
      return newSet
    })
  }, [])

  const clearFilters = useCallback(() => {
    const allCategories = new Set(allTechnologies.map((item) => item.category))
    const allExperiences = new Set(
      allTechnologies.map((item) => item.experience),
    )
    setSelectedCategories(allCategories)
    setSelectedExperiences(allExperiences)
    setSearchTerm('')
    setDebouncedSearch('')
  }, [allTechnologies])

  const categories = useMemo(
    () => Array.from(new Set(allTechnologies.map((item) => item.category))),
    [allTechnologies],
  )
  const experiences = useMemo(() => ['expert', 'intermediate', 'limited'], [])

  return {
    searchTerm,
    setSearchTerm,
    showFilters,
    setShowFilters,
    selectedCategories,
    selectedExperiences,
    handleCategoryToggle,
    handleExperienceToggle,
    clearFilters,
    categories,
    experiences,
    filteredTechnologies,
    handleSearchChange,
  }
}

export function AboutTechFilters({ allTechnologies }: AboutTechFiltersProps) {
  const {
    searchTerm,
    showFilters,
    setShowFilters,
    selectedCategories,
    selectedExperiences,
    handleCategoryToggle,
    handleExperienceToggle,
    clearFilters,
    categories,
    experiences,
    filteredTechnologies,
    handleSearchChange,
  } = useAboutTechFilters(allTechnologies)

  // Add categoryIcons and experienceIcons back
  const categoryIcons = {
    Frontend: Layers,
    Backend: Layers,
    DevOps: Layers,
    Design: Layers,
    Database: Layers,
    Cloud: Layers,
    Tools: Layers,
    Languages: Layers,
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

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[70vh] min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
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
              <div className="flex items-center gap-4">
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
                    Clear
                  </Button>
                )}
              </div>
              {/* Results Count */}
              <div className="text-sm text-gray-400">
                {filteredTechnologies.length} of {allTechnologies.length}{' '}
                technologies
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
                          className="flex items-center gap-2 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={selectedCategories.has(category)}
                            onChange={() => handleCategoryToggle(category)}
                            className="w-4 h-4 rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-500 focus:ring-offset-0"
                          />
                          <IconComponent className="w-4 h-4 text-white/60 group-hover:text-white" />
                          <span className="text-sm text-white/80 group-hover:text-white">
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
                          className="flex items-center gap-2 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={selectedExperiences.has(experience)}
                            onChange={() => handleExperienceToggle(experience)}
                            className="w-4 h-4 rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-500 focus:ring-offset-0"
                          />
                          <IconComponent className="w-4 h-4 text-white/60 group-hover:text-white" />
                          <span className="text-sm text-white/80 group-hover:text-white capitalize">
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
          <TechGrid
            items={filteredTechnologies}
            interactive={false}
            showExperience={true}
          />
        </div>
      </div>
    </div>
  )
}
