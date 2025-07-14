import debounce from 'lodash.debounce'
import {
  Cloud,
  Code2,
  Database,
  Globe,
  Layers,
  Palette,
  Shield,
  Zap,
} from 'lucide-react'
import React, { useCallback, useMemo, useState } from 'react'
import { AchievementId } from '@/assets/data/achievements'
import { techItems } from '@/assets/data/techItems'
import { useAchievements } from '@/components/achievements/AchievementsContext'
import { Input } from '@/components/ui/Input'
import {
  type FilterState,
  TechGridFilterControls,
  TechGridFilterDropdown,
} from './TechGridFilters'
import { TechGridGrid } from './TechGridGrid'

export interface TechItem {
  id: string
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
  className?: string
}

const experienceColors = {
  expert: 'border-emerald-500/50 text-emerald-300 bg-emerald-500/10',
  intermediate: 'border-blue-500/50 text-blue-300 bg-blue-500/10',
  limited: 'border-gray-500/50 text-gray-300 bg-gray-500/10',
}

// Icon mapping function - moved outside component for better performance
const getLucideIcon = (
  iconName: string,
): React.ComponentType<{ className?: string }> => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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
}

function useTechGridFilters() {
  const [filterState, setFilterState] = useState<FilterState>(() => {
    const allCategories = new Set(techItems.map((item) => item.category))
    const allExperiences = new Set(techItems.map((item) => item.experience))
    return {
      searchTerm: '',
      selectedCategories: allCategories,
      selectedExperiences: allExperiences,
      showFilters: false,
    }
  })

  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [_filterChangeCount, setFilterChangeCount] = useState(0)
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

  // Unified filter handlers
  const updateFilterState = useCallback(
    (updates: Partial<FilterState> | ((prev: FilterState) => FilterState)) => {
      setFilterState((prev) => {
        if (typeof updates === 'function') {
          return updates(prev)
        }
        return { ...prev, ...updates }
      })
    },
    [],
  )

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSearchTerm = e.target.value
      updateFilterState({ searchTerm: newSearchTerm })
      debouncedSetSearch(newSearchTerm)
    },
    [updateFilterState, debouncedSetSearch],
  )

  const handleCategoryToggle = useCallback(
    (category: string) => {
      updateFilterState((prev) => {
        const newCategories = new Set(prev.selectedCategories)
        if (newCategories.has(category)) {
          newCategories.delete(category)
        } else {
          newCategories.add(category)
        }
        return { ...prev, selectedCategories: newCategories }
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
    [updateFilterState, unlockAchievement],
  )

  const handleExperienceToggle = useCallback(
    (experience: string) => {
      updateFilterState((prev) => {
        const newExperiences = new Set(prev.selectedExperiences)
        if (newExperiences.has(experience)) {
          newExperiences.delete(experience)
        } else {
          newExperiences.add(experience)
        }
        return { ...prev, selectedExperiences: newExperiences }
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
    [updateFilterState, unlockAchievement],
  )

  const handleToggleFilters = useCallback(() => {
    updateFilterState((prev) => ({ ...prev, showFilters: !prev.showFilters }))
  }, [updateFilterState])

  const handleClearAll = useCallback(() => {
    const allExperiences = new Set(techItems.map((item) => item.experience))
    updateFilterState({
      selectedCategories: new Set(),
      selectedExperiences: allExperiences,
      searchTerm: '',
    })
    setDebouncedSearch('')
  }, [updateFilterState])

  const handleReset = useCallback(() => {
    const allCategories = new Set(techItems.map((item) => item.category))
    const allExperiences = new Set(techItems.map((item) => item.experience))
    updateFilterState({
      selectedCategories: allCategories,
      selectedExperiences: allExperiences,
      searchTerm: '',
    })
    setDebouncedSearch('')

    // Increment filter change count and check for achievement
    setFilterChangeCount((prev) => {
      const newCount = prev + 1
      if (newCount >= 7) {
        unlockAchievement(AchievementId.techFilterer)
      }
      return newCount
    })
  }, [updateFilterState, unlockAchievement])

  const filteredTechnologies = useMemo(
    () =>
      techItems.filter((item) => {
        const matchesSearch = item.name
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase())
        const matchesCategory = filterState.selectedCategories.has(
          item.category,
        )
        const matchesExperience = filterState.selectedExperiences.has(
          item.experience,
        )
        return matchesSearch && matchesCategory && matchesExperience
      }),
    [
      debouncedSearch,
      filterState.selectedCategories,
      filterState.selectedExperiences,
    ],
  )

  // Check if there are any active filters (any categories or experiences selected, or search term)
  const hasActiveFilters = useMemo(() => {
    return (
      filterState.searchTerm.trim() !== '' ||
      filterState.selectedCategories.size > 0 ||
      filterState.selectedExperiences.size > 0
    )
  }, [
    filterState.searchTerm,
    filterState.selectedCategories,
    filterState.selectedExperiences,
  ])

  // Check if filters have been changed from default state
  const hasNonDefaultFilters = useMemo(() => {
    const allCategories = new Set(techItems.map((item) => item.category))
    const allExperiences = new Set(techItems.map((item) => item.experience))
    return (
      filterState.searchTerm.trim() !== '' ||
      filterState.selectedCategories.size < allCategories.size ||
      filterState.selectedExperiences.size < allExperiences.size
    )
  }, [
    filterState.searchTerm,
    filterState.selectedCategories,
    filterState.selectedExperiences,
  ])

  const categories = useMemo(
    () => Array.from(new Set(techItems.map((item) => item.category))),
    [],
  )
  const experiences = useMemo(() => ['expert', 'intermediate', 'limited'], [])

  return {
    filterState,
    handleSearchChange,
    handleCategoryToggle,
    handleExperienceToggle,
    handleToggleFilters,
    handleClearAll,
    handleReset,
    categories,
    experiences,
    filteredTechnologies,
    hasActiveFilters,
    hasNonDefaultFilters,
  }
}

const TechGridComponent = ({ className = '' }: TechGridProps) => {
  const {
    filterState,
    handleSearchChange,
    handleCategoryToggle,
    handleExperienceToggle,
    handleToggleFilters,
    handleClearAll,
    handleReset,
    categories,
    experiences,
    filteredTechnologies,
    hasActiveFilters,
    hasNonDefaultFilters,
  } = useTechGridFilters()

  return (
    <div
      className={`relative w-full max-w-5xl mx-auto h-[70vh] min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 ${className}`}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/60 to-pink-900/40" />
      </div>

      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          boxShadow:
            '0 40px 80px 0 rgba(139,92,246,0.18), 0 0 120px 0 rgba(236,72,153,0.10)',
        }}
      />
      <div className="relative z-20 flex flex-col h-full">
        <div className="sticky top-0 z-30 flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/60 to-pink-900/40 rounded-t-2xl" />

          <div
            className="relative glass-pane-filter px-6 py-4 bg-white/10 backdrop-blur-xl border-b border-white/10 rounded-t-2xl shadow-lg"
            style={{ boxShadow: '0 8px 32px 0 rgba(139,92,246,0.10)' }}
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Input
                  type="text"
                  placeholder="Search technologies..."
                  value={filterState.searchTerm}
                  onChange={handleSearchChange}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-500"
                />
              </div>

              <TechGridFilterControls
                filterState={filterState}
                onToggleFilters={handleToggleFilters}
                onClearAll={handleClearAll}
                onReset={handleReset}
                hasActiveFilters={hasActiveFilters}
                hasNonDefaultFilters={hasNonDefaultFilters}
              />

              <div className="text-sm text-gray-400 flex-shrink-0">
                {filteredTechnologies.length} of {techItems.length} technologies
              </div>
            </div>

            <TechGridFilterDropdown
              filterState={filterState}
              onCategoryToggle={handleCategoryToggle}
              onExperienceToggle={handleExperienceToggle}
              categories={categories}
              experiences={experiences}
            />
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-purple-500/40 scrollbar-track-transparent px-6 py-8 relative z-10">
          <div className="w-full">
            <TechGridGrid
              filteredTechnologies={filteredTechnologies}
              getLucideIcon={getLucideIcon}
              experienceColors={experienceColors}
            />

            {filteredTechnologies.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-2">
                  No technologies match your filters
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export const TechGrid = React.memo(TechGridComponent)
