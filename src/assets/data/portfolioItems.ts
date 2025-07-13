import containmentBreachImage from '@/assets/images/portfolio/containment-breach.gif'
import ecosystemSimImage from '@/assets/images/portfolio/ecosystem.gif'
import gitFinderImage from '@/assets/images/portfolio/Gitfinder.jpg'
import horrorRPG2Image from '@/assets/images/portfolio/horrorRPG2.webp'
import pokeTeamImage from '@/assets/images/portfolio/poketeamdemo.gif'
import theWatchersImage from '@/assets/images/portfolio/thewatchers.webp'

export interface IPortfolioItem {
  imageSrc: string
  title: string
  description: string
  techItems: string[]
  githubLink?: string
  demoLink?: string
  videoLink?: string
}

export const portfolioItems = [
  {
    id: 1,
    title: 'Modern UI Horror RPG',
    description:
      'Extremely complex project designed, programmed and animated from scratch. Please see the demo video!',
    image: containmentBreachImage,
    videoLink: 'https://youtu.be/ckLU5tGdlTM?si=yBGFAIl2cy6taF_O',
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
    title: 'Git Finder',
    description: 'Search application for github users I built 6 years ago',
    image: gitFinderImage,
    github:
      'https://github.com/JordanWinslow/functional-react-github-user-finder',
    demo: 'https://functional-react-gitfinder.netlify.app/',
    tech: ['React', 'JavaScript', 'React Router', 'CSS'],
  },
  {
    id: 5,
    title: 'Horror RPG Game',
    description:
      'Short RPG I programmed & scored a long time ago with JavaScript tooling',
    image: horrorRPG2Image,
    demo: 'https://demo.com',
    videoLink: 'https://youtu.be/Rf9wsKJSeII',
    tech: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 6,
    title: 'Browser Based Visual Novel Game',
    description:
      'Short VN I programmed & scored a long time ago with JavaScript tooling',
    image: theWatchersImage,
    demo: 'https://jordanwinslow.itch.io/the-watchers-browser',
    tech: ['JavaScript', 'HTML', 'CSS'],
  },
]
