import { createFileRoute } from '@tanstack/react-router'
import { Download } from 'lucide-react'
import { useEffect } from 'react'
import { AchievementId } from '@/assets/data/achievements'
import ResumeDownload from '@/assets/data/Jordan_Winslow_Software_Engineer_Frontend_Resume.pdf'
import { useAchievements } from '@/components/achievements/AchievementsContext'

export const Route = createFileRoute('/resume')({
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
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-mohave text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wider mb-4">
            Resume
          </h1>
          <a
            href={ResumeDownload}
            download
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white font-mohave font-semibold px-6 py-3 rounded-lg uppercase tracking-wide hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>

        {/* PDF Container */}
        <div className="relative">
          {/* Cool shadow container */}
          <div className="relative bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-2xl p-1 shadow-2xl">
            <div className="bg-black/95 backdrop-blur-xl rounded-xl overflow-hidden shadow-inner">
              <iframe
                src={ResumeDownload}
                className="w-full h-[calc(100vh-200px)] min-h-[600px] border-0"
                title="Jordan Winslow Resume"
              />
            </div>
          </div>

          {/* Decorative glow effects */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30 rounded-3xl blur-3xl -z-10 animate-pulse" />
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-orange-400/20 rounded-2xl blur-xl -z-5" />
        </div>
      </div>
    </div>
  )
}
