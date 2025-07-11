import containmentBreachImage from '@/assets/images/portfolio/containment-breach.gif'
import ecosystemSimImage from '@/assets/images/portfolio/ecosystem.gif'
import pokeTeamImage from '@/assets/images/portfolio/poketeamdemo.gif'

export interface IPortfolioItem {
  imageSrc: string
  title: string
  description: string
  techItems: string[]
  githubLink?: string
  demoLink?: string
}

export const portfolioItems = [
  {
    id: 1,
    title: 'Modern UI Horror RPG',
    description:
      'Extremely complex project designed, programmed and animated from scratch. Please see the demo video!',
    image: containmentBreachImage,
    demo: 'https://youtu.be/ckLU5tGdlTM?si=yBGFAIl2cy6taF_O',
    tech: [
      'GML',
      'Systems Design',
      'Engine Building',
      'Desktop Applications',
      'Performance Optimization',
    ],
  },
  {
    id: 2,
    title: 'Ecosystem Simulator',
    description:
      'Build-your-own-framework TypeScript project created to teach students web & object oriented programming fundamentals.',
    image: ecosystemSimImage,
    github: 'https://github.com/JordanWinslow/TypeScript-Ecosystem-Game',
    demo: 'https://typescript-ecosystem-simulator.netlify.app/',
    tech: ['TypeScript', 'HTML', 'CSS', 'OOP', 'Performance Optimization'],
  },
  {
    id: 3,
    title: 'PokeTeam',
    description:
      'Responsive, mobile-first web app with infinite loading, local storage, & query caching',
    image: pokeTeamImage,
    github: 'https://github.com/JordanWinslow/poke-team',
    demo: 'https://poke-team.netlify.app/',
    tech: ['JavaScript', 'React', 'Redux', 'MaterialUI'],
  },
  {
    id: 4,
    title: '3D Portfolio Visualizer',
    description:
      'Three.js powered 3D visualization of projects and skills with interactive elements.',
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tech: ['Three.js', 'WebGL', 'React', 'GSAP'],
  },
  {
    id: 5,
    title: 'Blockchain Explorer',
    description:
      'Real-time blockchain data visualization and transaction tracking with advanced analytics.',
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tech: ['Vue.js', 'Web3.js', 'Ethereum', 'Chart.js'],
  },
  {
    id: 6,
    title: 'AR Product Viewer',
    description:
      'Augmented reality application for interactive product visualization and virtual try-on.',
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tech: ['AR.js', 'WebXR', 'Three.js', 'React'],
  },
]
