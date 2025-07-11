import { motion } from 'framer-motion'
import { Code2, Star } from 'lucide-react'

export function AboutHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <div className="max-w-4xl mx-auto">
        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="font-mohave text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent uppercase tracking-wider mb-4">
            Jordan Winslow
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            <div className="text-lg text-gray-400 font-light">
              SOFTWARE ENGINEER
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full" />
          </div>
        </motion.div>
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
          className="relative inline-block mb-12"
        >
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-1">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <Code2 className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
              </div>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <Star className="w-4 h-4 text-black" />
          </div>
        </motion.div>
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Frontend focused software engineer and React expert with a 10+ year
            track record developing cutting-edge TypeScript and Node
            applications for high-stakes medical & defense contracts.
          </p>
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Proven leadership in architectural innovation and mentoring teams to
            success, with recognition from industry titans like Stanford
            Healthcare for delivering game-changing healthcare integrations.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
