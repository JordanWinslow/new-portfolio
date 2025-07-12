import { motion } from 'framer-motion'
import { Sparkles, Users } from 'lucide-react'

export function LeadershipValues() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="font-mohave text-3xl lg:text-4xl font-bold text-white mb-4">
          Leadership & Values
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="group p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-mohave text-xl font-bold text-white">
              Natural Leader
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            With 5+ years of experience as a SCRUM master across 4 different
            teams, I excel at identifying individual strengths and fostering
            effective collaboration. Drawing from my studies in philosophy and
            spirituality, I approach leadership with empathy and insight.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="group p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-mohave text-xl font-bold text-white">
              What I'm Looking For
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            I'm seeking opportunities with companies working on innovative
            gaming projects, cutting-edge technology, or products that genuinely
            improve people's lives. I want to contribute to meaningful,
            impactful work, or at least make something fun!
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
