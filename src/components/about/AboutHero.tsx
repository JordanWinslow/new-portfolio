import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import type { RefObject } from 'react'
import JordanWinslowAvatar from '@/assets/images/JordanWinslowAvatar.jpg'
import { useScrollToRef } from '@/lib/utils'

interface AboutHeroProps {
  techSectionRef: RefObject<HTMLElement | null>
}

export function AboutHero({ techSectionRef }: AboutHeroProps) {
  const scrollToRef = useScrollToRef()

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center space-y-10"
    >
      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="w-40 h-40 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 rounded-full bg-black/20 blur-xl transform scale-110"></div>
            <img
              src={JordanWinslowAvatar}
              alt="Jordan Winslow"
              className="w-full h-full object-cover relative z-10"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
        </div>
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-mohave text-3xl lg:text-5xl font-bold text-white"
          >
            Hello, I'm Jordan Winslow!
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />
            <span className="text-sm text-gray-300 font-medium uppercase tracking-wider">
              Software Engineer, Designer & Game Developer
            </span>
            <div className="w-8 h-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="max-w-2xl mx-auto space-y-4"
        >
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
            If you'd just like to know what technologies I have experience with,
            feel free to jump straight to my tech stack below. Otherwise keep
            scrolling to learn more about me and my values!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex justify-center"
          >
            <button
              type="button"
              onClick={() => scrollToRef(techSectionRef)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm text-white font-mohave font-semibold text-lg uppercase tracking-wide hover:border-white/40 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 group relative"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-orange-500/10 transition-all duration-300 pointer-events-none" />

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300 pointer-events-none blur-xl" />

              <span className="relative z-10">View My Tech Stack</span>
              <ChevronDown className="w-4 h-4 relative z-10" />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
