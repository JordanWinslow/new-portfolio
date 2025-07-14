import { AnimatePresence, motion } from 'framer-motion'
import { Star, StarHalf, StarOff } from 'lucide-react'
import type React from 'react'
import { memo } from 'react'
import { Badge } from '../ui/Badge'
import type { TechItem } from './TechGrid'

interface TechGridGridProps {
  filteredTechnologies: TechItem[]
  getLucideIcon: (
    iconName: string,
  ) => React.ComponentType<{ className?: string }>
  experienceColors: Record<string, string>
}

export const TechGridGrid = memo(function TechGridGrid({
  filteredTechnologies,
  getLucideIcon,
  experienceColors,
}: TechGridGridProps) {
  return (
    <motion.div
      layout
      className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full"
    >
      <AnimatePresence mode="popLayout">
        {filteredTechnologies.map((item, index) => {
          const IconComponent = getLucideIcon(item.name)

          return (
            <motion.div
              key={item.id}
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
              className="group relative w-full h-32 flex-shrink-0"
            >
              <div className="relative flex flex-col items-center justify-center p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 transition-all duration-300 cursor-pointer w-full h-full">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-orange-500/10 transition-all duration-300 pointer-events-none" />

                {/* Tech Icon */}
                <div className="relative z-10 mb-2 flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Tech Name */}
                <div className="relative z-10 text-center mb-2 flex-shrink-0">
                  <div className="font-medium text-white text-xs group-hover:text-white/90 transition-colors truncate max-w-full">
                    {item.name}
                  </div>
                </div>

                {/* Experience Badge - Always visible and centered at bottom */}
                <div className="relative z-10 flex-shrink-0 mt-auto">
                  <Badge
                    variant="outline"
                    className={`text-xs px-2 py-1 ${experienceColors[item.experience]} border-opacity-50 font-medium`}
                  >
                    {item.experience === 'expert' ? (
                      <Star className="w-3 h-3 mr-1" />
                    ) : item.experience === 'intermediate' ? (
                      <StarHalf className="w-3 h-3 mr-1" />
                    ) : (
                      <StarOff className="w-3 h-3 mr-1" />
                    )}
                    {item.experience}
                  </Badge>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 right-2 flex-shrink-0">
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
  )
})
