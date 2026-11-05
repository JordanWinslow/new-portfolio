import containmentBreachImage from '@/assets/images/portfolio/containment-breach.gif'
import containmentBreachImagePoster from '@/assets/images/portfolio/containment-breach-still.webp'
import ecosystemSimImage from '@/assets/images/portfolio/ecosystem.gif'
import ecosystemSimImagePoster from '@/assets/images/portfolio/ecosystem-still.webp'
//import gitFinderImage from '@/assets/images/portfolio/Gitfinder.jpg'
import horrorRPG2Image from '@/assets/images/portfolio/horrorRPG2-animated.webp'
import horrorRPG2ImagePoster from '@/assets/images/portfolio/horrorRPG2-still.webp'
import johnnyCastawayImage from '@/assets/images/portfolio/johnny-castaway-scenes-animated.webp'
import johnnyCastawayPoster from '@/assets/images/portfolio/johnny-castaway-scenes-still.webp'
import pokeTeamImage from '@/assets/images/portfolio/poketeamdemo-animated.webp'
import pokeTeamImagePoster from '@/assets/images/portfolio/poketeamdemo-still.webp'
import theWatchersImage from '@/assets/images/portfolio/thewatchers-animated.webp'
import theWatchersImagePoster from '@/assets/images/portfolio/thewatchers-still.webp'
import voteOnAnythingImage from '@/assets/images/portfolio/voteonanythingdemo-animated.webp'
import voteOnAnythingImagePoster from '@/assets/images/portfolio/voteonanythingdemo-still.webp'

export interface IPortfolioItem {
  id: number
  image: string
  stillImage?: string
  imageAlt?: string
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  about?: string
  videoLink?: string
  // Opt-in override to show the DEMO button alongside VIDEO when both are set.
  // Defaults to false, preserving existing behavior for items where demo is
  // hidden while a videoLink is present.
  showDemoWithVideo?: boolean
  yearCreated: number
}

export const portfolioItems = [
  {
    id: 7,
    title: 'Johnny Castaway: Reborn',
    description:
      'An unofficial remake of the 1992 screensaver with a deterministic simulation engine, personality-driven behavior, branching stories, and dynamic weather and lighting. PixiJS rendering, persistent journals and optional WebAssembly AI run entirely on the client, including offline.',
    image: johnnyCastawayImage,
    stillImage: johnnyCastawayPoster,
    imageAlt:
      'Animated gameplay from Johnny Castaway: Reborn, showing life on the island and its unexpected encounters',
    demo: 'https://johnnycastaway.fyi/',
    about: 'https://johnnycastaway.fyi/about.html#technology',
    tech: [
      'TypeScript',
      'PixiJS',
      'WebAssembly',
      'wllama',
      'IndexedDB',
      'Vite',
    ],
    yearCreated: 2026,
  },
  {
    id: 0,
    title: 'Vote On Anything',
    description:
      'A full-stack opinion polling platform built from scratch. Features Twitter SSO, Cloudflare Turnstile bot protection, type-safe APIs with tRPC, real-time data visualization and complex relational data models.',
    image: voteOnAnythingImage,
    stillImage: voteOnAnythingImagePoster,
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
    stillImage: containmentBreachImagePoster,
    demo: 'https://LiminalFoundationGames.com',
    videoLink: 'https://youtu.be/iaC9YpJQjuM',
    showDemoWithVideo: true,
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
    stillImage: ecosystemSimImagePoster,
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
    stillImage: pokeTeamImagePoster,
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
    stillImage: horrorRPG2ImagePoster,
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
    stillImage: theWatchersImagePoster,
    demo: 'https://jordanwinslow.itch.io/the-watchers-browser',
    tech: ['JavaScript', 'HTML', 'CSS'],
    yearCreated: 2017,
  },
]
