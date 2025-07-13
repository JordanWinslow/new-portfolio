import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Download, Sparkles } from 'lucide-react'
import { useEffect, useMemo } from 'react'
import { AchievementId } from '@/assets/data/achievements'
import ResumeDownload from '@/assets/data/Jordan_Winslow_Software_Engineer_Frontend_Resume.pdf'
import { useAchievements } from '@/components/achievements/AchievementsContext'

export const Route = createFileRoute('/resume')({
  head: () => ({
    title: 'Jordan Winslow - Software Engineer Resume & Experience',
    meta: [
      {
        name: 'description',
        content:
          "Download Jordan Winslow's professional resume showcasing software engineering experience, technical skills, and achievements. View detailed work history, education, and expertise in React, TypeScript, and modern web technologies.",
      },
      {
        name: 'keywords',
        content:
          'Jordan Winslow resume, software engineer resume, frontend developer CV, React developer experience, TypeScript skills, web development resume',
      },
      {
        name: 'author',
        content: 'Jordan Winslow',
      },
      // Open Graph tags
      {
        property: 'og:title',
        content: 'Jordan Winslow - Software Engineer Resume & Experience',
      },
      {
        property: 'og:description',
        content:
          "Download Jordan Winslow's professional resume showcasing software engineering experience, technical skills, and achievements. View detailed work history, education, and expertise in React, TypeScript, and modern web technologies.",
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://jordanwinslow.dev/resume',
      },
      {
        property: 'og:image',
        content: '/og-resume.png',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      // Twitter Card tags
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Jordan Winslow - Software Engineer Resume & Experience',
      },
      {
        name: 'twitter:description',
        content:
          "Download Jordan Winslow's professional resume showcasing software engineering experience, technical skills, and achievements. View detailed work history, education, and expertise in React, TypeScript, and modern web technologies.",
      },
      {
        name: 'twitter:image',
        content: '/og-resume.png',
      },
    ],
  }),
  component: Resume,
})

function Resume() {
  const { unlockAchievement } = useAchievements()

  useEffect(() => {
    unlockAchievement(AchievementId.resumeReader)
  }, [unlockAchievement])

  const handleDownloadResume = () => {
    unlockAchievement(AchievementId.resumeDownloader)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <PageBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 mt-[8vh]">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-mohave text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wider mb-6">
            Resume
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Download my professional resume to learn more about my experience,
            skills, and achievements in software engineering.
          </p>

          {/* Enhanced Download Button */}
          <motion.a
            href={ResumeDownload}
            download
            onClick={handleDownloadResume}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-orange-600/90 backdrop-blur-md text-white font-mohave font-semibold px-8 py-4 rounded-2xl uppercase tracking-wide hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 border border-white/20 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-orange-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Sparkle effect */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-white/60 rounded-full animate-ping" />
              <div
                className="absolute -top-1 -right-1 w-1 h-1 bg-white/40 rounded-full animate-ping"
                style={{ animationDelay: '0.5s' }}
              />
              <div
                className="absolute -bottom-1 -left-1 w-1 h-1 bg-white/40 rounded-full animate-ping"
                style={{ animationDelay: '1s' }}
              />
              <div
                className="absolute -bottom-1 -right-1 w-2 h-2 bg-white/60 rounded-full animate-ping"
                style={{ animationDelay: '1.5s' }}
              />
            </div>

            <Download className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Download PDF</span>
            <Sparkles className="w-4 h-4 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>

        {/* PDF Container with Glassmorphism */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Glassmorphism container */}
          <div className="relative bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 backdrop-blur-xl rounded-3xl p-1 shadow-2xl border border-white/20">
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden shadow-inner">
              <iframe
                src={ResumeDownload}
                className="w-full h-[calc(100vh-300px)] min-h-[700px] border-0"
                title="Jordan Winslow Resume"
              />
            </div>
          </div>

          {/* Enhanced glow effects */}
          <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-3xl blur-3xl -z-10 animate-pulse" />
          <div className="absolute -inset-3 bg-gradient-to-r from-purple-400/15 via-pink-400/15 to-orange-400/15 rounded-2xl blur-xl -z-5" />

          {/* Floating decorative elements around the PDF */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border border-purple-400/30 rounded-full animate-pulse" />
          <div
            className="absolute -top-6 -right-6 w-6 h-6 border border-pink-400/30 rounded-lg rotate-45 animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute -bottom-4 -left-6 w-4 h-4 border border-orange-400/30 rounded-full animate-pulse"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="absolute -bottom-6 -right-4 w-8 h-8 border border-purple-400/30 rounded-lg rotate-45 animate-pulse"
            style={{ animationDelay: '1.5s' }}
          />
        </motion.div>
      </div>
    </div>
  )
}

const PageBackground = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        key: `particle-${i}-${Math.random()}`,
        size: Math.random() * 3 + 1,
        duration: 4 + Math.random() * 4,
        delay: Math.random() * 3,
      })),
    [],
  )

  return (
    <div className="fixed inset-0 z-0">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(249,115,22,0.1),transparent_50%)]" />

      {/* Floating white orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.key}
            className="absolute bg-white/40 rounded-full backdrop-blur-sm"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-500/20 rounded-full animate-pulse" />
      <div
        className="absolute top-1/3 right-1/4 w-24 h-24 border border-pink-500/20 rounded-lg rotate-45 animate-pulse"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-20 h-20 border border-orange-500/20 rounded-full animate-pulse"
        style={{ animationDelay: '2s' }}
      />
    </div>
  )
}
