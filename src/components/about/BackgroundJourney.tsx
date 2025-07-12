import { motion } from 'framer-motion'
import { BookOpen, Music } from 'lucide-react'

export function BackgroundJourney() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 1 }}
      className="space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="font-mohave text-3xl lg:text-4xl font-bold text-white mb-4">
          Background & Journey
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Teaching & Education */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="group p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-mohave text-xl font-bold text-white">
              Lifelong Educator
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            I've developed and delivered multiple courses in web development and
            music production, fueled by a genuine enthusiasm for sharing
            knowledge. Teaching has been a cornerstone of my career, from
            structured classroom settings to hands-on mentoring in professional
            teams—it's all about helping others level up their skills.
          </p>
        </motion.div>

        {/* Music Background */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="group p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Music className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-mohave text-xl font-bold text-white">
              From Music to Tech
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Starting out in electronic music production honed my skills in
            creativity, precision, and building engaging experiences from the
            ground up. That same meticulous mindset carried over perfectly into
            tech, where I now craft digital solutions with the rhythm and detail
            of a well-produced track.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
