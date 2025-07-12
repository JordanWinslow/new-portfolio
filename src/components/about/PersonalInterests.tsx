import { motion } from 'framer-motion'
import { Gamepad2, Heart, Zap } from 'lucide-react'

export function PersonalInterests() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="font-mohave text-3xl lg:text-4xl font-bold text-white mb-4">
          Personal Interests
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="group p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <Gamepad2 className="w-6 h-6 text-blue-400" />
            <h3 className="font-semibold text-white">Gaming & Entertainment</h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            I am a horror movie encyclopedia and avid gamer who loves immersive
            storytelling. I also enjoy bringing people together for board game
            night and creating memorable experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="group p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <Heart className="w-6 h-6 text-green-400" />
            <h3 className="font-semibold text-white">Nature & Adventure</h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            I have a deep love and reverence for nature and the outdoors,
            whether it's exploring the local trails or camping under the stars.
            At home, I'm a committed cat dad to a pair of furry sidekicks who
            add just the right mix of chaos and calm to daily life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="group p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <Zap className="w-6 h-6 text-orange-400" />
            <h3 className="font-semibold text-white">Audio Enthusiast</h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            I've customized my car with two hidden subwoofers and amplifiers
            behind the seats. Bass-heavy tracks are my go-to, naturally, with
            drum & bass, hip-hop, and electronic rock topping the list. I'm also
            hooked on video game soundtracks, especially the epic vibes of Final
            Fantasy X.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
