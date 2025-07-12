import { createFileRoute } from '@tanstack/react-router'
import { Download } from 'lucide-react'
import { useState } from 'react'
import { AppControlsHeader } from '@/components/navigation/AppControlsHeader'
import { Badge } from '@/components/ui/Badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function Resume() {
  const [_visitedTabs, _setVisitedTabs] = useState<Set<string>>(
    new Set(['experience']),
  )

  const profile = {
    name: 'Jordan Winslow',
    title: 'Software Engineer',
    email: 'jordan.winslow@example.com',
    location: 'San Francisco, CA',
    summary:
      'Passionate software engineer with expertise in modern web technologies, game development, and emerging technologies. Experienced in building scalable applications and leading development teams.',
    highlights: [
      'Full-stack development with React, Node.js, and TypeScript',
      'Game development with Unity and Unreal Engine',
      'Team leadership and project management',
      'Performance optimization and scalability',
    ],
  }

  const experience = [
    {
      company: 'TechCorp',
      title: 'Senior Software Engineer',
      period: '2023 - Present',
      description:
        'Lead development of high-performance web applications and mentor junior developers.',
      achievements: [
        'Led a team of 5 developers to deliver a major feature ahead of schedule',
        'Improved application performance by 40% through optimization',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
      ],
    },
    {
      company: 'StartupXYZ',
      title: 'Full Stack Developer',
      period: '2021 - 2023',
      description:
        'Built and maintained web applications using modern technologies.',
      achievements: [
        'Developed 3 major features from concept to production',
        'Reduced bug reports by 30% through improved testing',
        'Mentored 2 junior developers',
      ],
    },
  ]

  const freelance = [
    {
      company: 'Client A',
      title: 'E-commerce Platform',
      period: '2024',
      description:
        'Built a custom e-commerce solution with payment integration.',
      achievements: [
        'Integrated multiple payment gateways',
        'Implemented advanced search and filtering',
        'Achieved 99.9% uptime',
      ],
    },
    {
      company: 'Client B',
      title: 'Game Development',
      period: '2023',
      description: 'Developed a mobile game with Unity.',
      achievements: [
        'Created engaging gameplay mechanics',
        'Optimized for mobile performance',
        'Achieved 4.5+ star rating on app stores',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <AppControlsHeader />

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-mohave text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wider mb-6">
            Resume
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Professional experience and achievements in software development
          </p>
          <a
            href="/Jordan_Winslow_Software_Engineer_Frontend_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-cta-button font-mohave font-semibold text-lg px-8 py-4 rounded-xl uppercase tracking-wide hover-lift inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>
        </div>

        {/* Profile Section */}
        <Card className="border-white/20 bg-black/50 backdrop-blur-md mb-12">
          <CardHeader>
            <CardTitle className="font-mohave text-3xl font-bold text-white">
              {profile.name}
            </CardTitle>
            <CardDescription className="text-xl text-gray-300">
              {profile.title}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-mohave text-lg font-semibold text-white mb-2">
                  Contact
                </h3>
                <p className="text-gray-300">{profile.email}</p>
                <p className="text-gray-300">{profile.location}</p>
              </div>
              <div>
                <h3 className="font-mohave text-lg font-semibold text-white mb-2">
                  Summary
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {profile.summary}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-mohave text-lg font-semibold text-white mb-4">
                Key Highlights
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {profile.highlights.map((highlight) => (
                  <Card
                    key={highlight}
                    className="border-white/20 bg-black/50 backdrop-blur-md"
                  >
                    <CardContent className="p-4">
                      <p className="text-gray-300">{highlight}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <div className="mb-12">
          <h2 className="font-mohave text-3xl font-bold text-white mb-8 text-center">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job) => (
              <Card
                key={job.company + job.title}
                className="border-white/20 bg-black/50 backdrop-blur-md group hover:scale-105 transition-all duration-500"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-mohave text-2xl font-bold text-white">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="text-xl text-gray-300">
                        {job.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-gray-300">
                      {job.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  <div>
                    <h4 className="font-mohave text-lg font-semibold text-white mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="text-gray-300 flex items-start gap-2"
                        >
                          <span className="text-purple-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Freelance Section */}
        <div>
          <h2 className="font-mohave text-3xl font-bold text-white mb-8 text-center">
            Freelance Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {freelance.map((project) => (
              <Card
                key={project.company}
                className="border-white/20 bg-black/50 backdrop-blur-md group hover:scale-105 transition-all duration-500"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-mohave text-xl font-bold text-white">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {project.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-gray-300">
                      {project.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div>
                    <h4 className="font-mohave text-lg font-semibold text-white mb-3">
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="text-gray-300 flex items-start gap-2"
                        >
                          <span className="text-purple-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
