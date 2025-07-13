import { motion } from 'framer-motion'
import { Facebook, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { AchievementId } from '@/assets/data/achievements'
import { useAchievements } from '@/components/achievements/AchievementsContext'

const contactMethods = [
  {
    title: 'Email',
    description: 'Primary contact method',
    icon: Mail,
    href: 'mailto:jwinsemail@gmail.com',
  },
  {
    title: 'GitHub',
    description: 'View my code and projects',
    icon: Github,
    href: 'https://github.com/JordanWinslow',
  },
  {
    title: 'LinkedIn',
    description: 'Connect professionally',
    icon: Linkedin,
    href: 'https://linkedin.com/in/jordanwinslow',
  },
  {
    title: 'Facebook',
    description: 'Connect socially',
    icon: Facebook,
    href: 'https://www.facebook.com/profile.php?id=61573754030578',
  },
  {
    title: 'Twitter',
    description: 'Follow for updates',
    icon: Twitter,
    href: 'https://x.com/LiminalFDN',
  },
]

export function ContactMethodsGrid() {
  const { unlockAchievement } = useAchievements()

  const handleEmailClick = () => {
    unlockAchievement(AchievementId.emailSender)
  }

  const handleSocialLinkClick = (platform: string) => {
    unlockAchievement(AchievementId.socialButterfly)
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="text-center"
      >
        <h2 className="font-mohave text-3xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or
          just having a chat about technology and innovation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-5xl mx-auto">
        {contactMethods.map((method, index) => {
          const Icon = method.icon
          return (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <motion.a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={
                  method.title === 'Email'
                    ? handleEmailClick
                    : () => handleSocialLinkClick(method.title)
                }
                className="block relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:bg-black/30 transition-all duration-500 h-full overflow-hidden cursor-pointer touch-manipulation"
                style={{ touchAction: 'manipulation' }}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  initial={false}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-sm group-hover:text-white/90 transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1">
                      {method.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
