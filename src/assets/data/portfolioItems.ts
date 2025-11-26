import containmentBreachImage from '@/assets/images/portfolio/containment-breach.gif'
import ecosystemSimImage from '@/assets/images/portfolio/ecosystem.gif'
//import gitFinderImage from '@/assets/images/portfolio/Gitfinder.jpg'
import horrorRPG2Image from '@/assets/images/portfolio/horrorRPG2.webp'
import pokeTeamImage from '@/assets/images/portfolio/poketeamdemo.gif'
import theWatchersImage from '@/assets/images/portfolio/thewatchers.webp'
import voteOnAnythingImage from '@/assets/images/portfolio/voteonanythingdemo.gif'

export interface IPortfolioItem {
  id: number
  image: string
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  videoLink?: string
  yearCreated: number
}

export const portfolioItems = [
  {
    id: 0,
    title: 'Vote On Anything',
    description:
      'A full-stack opinion polling platform built from scratch. Features Twitter SSO, Cloudflare Turnstile bot protection, type-safe APIs with tRPC, real-time data visualization and complex relational data models.',
    image: voteOnAnythingImage,
    demo: 'https://voteonanything.com',
    tech: [
      'Next.js 15',
      'TypeScript',
      'tRPC',
      'Drizzle ORM',
      'Cloudflare Workers',
      'OAuth',
    ],
    yearCreated: 2025,
  },
  {
    id: 1,
    title: 'Modern UI Horror RPG',
    description:
      'A sophisticated game engine built from the ground up featuring advanced systems design, custom animation frameworks, and performance-optimized rendering. This project demonstrates deep technical expertise in game development architecture.',
    image: containmentBreachImage,
    videoLink: 'https://youtu.be/ckLU5tGdlTM?si=yBGFAIl2cy6taF_O',
    tech: [
      'GML',
      'Systems Design',
      'Engine Building',
      'Desktop Applications',
      'Performance Optimization',
    ],
    yearCreated: 2025,
  },
  {
    id: 2,
    title: 'Ecosystem Simulator',
    description:
      'A comprehensive TypeScript framework designed to teach object-oriented programming principles and web development fundamentals. Features modular architecture and real-time simulation capabilities.',
    image: ecosystemSimImage,
    github: 'https://github.com/JordanWinslow/TypeScript-Ecosystem-Game',
    demo: 'https://typescript-ecosystem-simulator.netlify.app/',
    tech: ['TypeScript', 'HTML', 'CSS', 'OOP', 'Performance Optimization'],
    yearCreated: 2023,
  },
  {
    id: 3,
    title: 'PokeTeam',
    description:
      'A modern, responsive web application featuring infinite scroll, intelligent caching strategies, and seamless mobile-first user experience. Demonstrates expertise in state management and API integration.',
    image: pokeTeamImage,
    github: 'https://github.com/JordanWinslow/poke-team',
    demo: 'https://poke-team.netlify.app/',
    tech: ['JavaScript', 'React', 'Redux', 'MaterialUI'],
    yearCreated: 2019,
  },
  // {
  //   id: 4,
  //   title: 'Git Finder',
  //   description:
  //     'A streamlined GitHub user search application showcasing clean React architecture and efficient API integration patterns.',
  //   image: gitFinderImage,
  //   github:
  //     'https://github.com/JordanWinslow/functional-react-github-user-finder',
  //   demo: 'https://functional-react-gitfinder.netlify.app/',
  //   tech: ['React', 'JavaScript', 'React Router', 'CSS'],
  //   yearCreated: 2019,
  // },
  {
    id: 5,
    title: 'Horror RPG Game',
    description:
      'A browser-based role-playing game featuring custom JavaScript tooling, immersive audio design, and interactive storytelling elements.',
    image: horrorRPG2Image,
    demo: 'https://demo.com',
    videoLink: 'https://youtu.be/Rf9wsKJSeII',
    tech: ['JavaScript', 'HTML', 'CSS'],
    yearCreated: 2018,
  },
  {
    id: 6,
    title: 'Browser Based Visual Novel Game',
    description:
      'An interactive visual novel featuring custom JavaScript frameworks, dynamic storytelling, and immersive audio-visual experiences.',
    image: theWatchersImage,
    demo: 'https://jordanwinslow.itch.io/the-watchers-browser',
    tech: ['JavaScript', 'HTML', 'CSS'],
    yearCreated: 2017,
  },
]
