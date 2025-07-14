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
import type React from 'react'
import { memo } from 'react'
import { Button } from '../ui/Button'

// Unified filter state interface
export interface FilterState {
  searchTerm: string
  selectedCategories: Set<string>
  selectedExperiences: Set<string>
  showFilters: boolean
}

interface TechGridFilterControlsProps {
  filterState: FilterState
  onToggleFilters: () => void
  onClearAll: () => void
  onReset: () => void
  hasActiveFilters: boolean
  hasNonDefaultFilters: boolean
}

// Static data moved outside components to prevent recreation
const categoryIcons = {
  Frontend: Globe,
  Backend: Shield,
  DevOps: Zap,
  Design: Palette,
  Database: Database,
  Cloud: Cloud,
  Tools: Layers,
  Languages: Code2,
} as const

const experienceIcons = {
  expert: Star,
  intermediate: StarHalf,
  limited: StarOff,
} as const

// Memoized checkbox component to reduce duplication
const FilterCheckbox = memo(function FilterCheckbox({
  checked,
  onChange,
  icon: Icon,
  label,
  className = '',
}: {
  checked: boolean
  onChange: () => void
  icon: React.ComponentType<{ className?: string }>
  label: string
  className?: string
}) {
  return (
    <label
      className={`flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-white/5 transition-all duration-200 ${className}`}
    >
      <div className="relative flex-shrink-0">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`w-5 h-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
            checked
              ? 'border-pink-400 bg-pink-400/20'
              : 'border-white/30 bg-white/5 group-hover:border-white/50'
          }`}
        >
          {checked && <div className="w-2 h-2 bg-pink-300 rounded-sm" />}
        </div>
      </div>
      <Icon className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-200 flex-shrink-0" />
      <span className="text-sm text-white/80 group-hover:text-white transition-colors duration-200 font-medium truncate">
        {label}
      </span>
    </label>
  )
})

// Memoized filter dropdown component
const TechGridFilterDropdown = memo(function TechGridFilterDropdown({
  filterState,
  onCategoryToggle,
  onExperienceToggle,
  categories,
  experiences,
}: {
  filterState: FilterState
  onCategoryToggle: (category: string) => void
  onExperienceToggle: (experience: string) => void
  categories: string[]
  experiences: string[]
}) {
  if (!filterState.showFilters) {
    return null
  }

  return (
    <div
      className="overflow-hidden absolute left-0 right-0 mt-2"
      style={{ zIndex: 40 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/60 to-pink-900/40 rounded-b-2xl" />

      <div className="relative mt-0 pt-6 border-t border-white/10 space-y-6 bg-black/80 rounded-b-2xl shadow-2xl px-6 pb-6 w-full backdrop-blur-sm">
        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            Categories
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {categories.map((category) => {
              const IconComponent =
                categoryIcons[category as keyof typeof categoryIcons] || Layers
              return (
                <FilterCheckbox
                  key={category}
                  checked={filterState.selectedCategories.has(category)}
                  onChange={() => onCategoryToggle(category)}
                  icon={IconComponent}
                  label={category}
                />
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
                experienceIcons[experience as keyof typeof experienceIcons] ||
                Star
              return (
                <FilterCheckbox
                  key={experience}
                  checked={filterState.selectedExperiences.has(experience)}
                  onChange={() => onExperienceToggle(experience)}
                  icon={IconComponent}
                  label={experience}
                  className="capitalize"
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
})

export const TechGridFilterControls = memo(function TechGridFilterControls({
  filterState,
  onToggleFilters,
  onClearAll,
  onReset,
  hasActiveFilters,
  hasNonDefaultFilters,
}: TechGridFilterControlsProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <Button
        variant="outline"
        size="sm"
        onClick={onToggleFilters}
        className="border-white/20 text-white hover:bg-white/10"
        Icon={
          filterState.showFilters ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )
        }
      >
        Filters
      </Button>
      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearAll}
          className="text-gray-400 hover:text-white"
          Icon={<X className="w-4 h-4" />}
        >
          <span className="hidden sm:inline">Clear All</span>
          <span className="sm:hidden">Clear</span>
        </Button>
      )}
      {hasNonDefaultFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onReset}
          className="text-gray-400 hover:text-white"
          Icon={<X className="w-4 h-4" />}
        >
          <span className="hidden sm:inline">Reset</span>
          <span className="sm:hidden">Reset</span>
        </Button>
      )}
    </div>
  )
})

export { TechGridFilterDropdown }
