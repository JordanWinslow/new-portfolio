import { AnimatePresence, motion } from 'framer-motion'
import {
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
  Zap,
} from 'lucide-react'
import React, { useCallback } from 'react'
import { Badge } from '@/components/ui/Badge'

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
  items: TechItem[]
  title?: string
  compact?: boolean
  showExperience?: boolean
  interactive?: boolean
}

const experienceColors = {
  expert: 'border-emerald-500/50 text-emerald-300 bg-emerald-500/10',
  intermediate: 'border-blue-500/50 text-blue-300 bg-blue-500/10',
  limited: 'border-gray-500/50 text-gray-300 bg-gray-500/10',
}

const TechGridComponent = ({
  items,
  title,
  compact = false,
  showExperience = false,
}: TechGridProps) => {
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

  return (
    <div className="space-y-4">
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
          {items.map((item, index) => {
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
      {items.length === 0 && (
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

export const TechGrid = React.memo(TechGridComponent)
