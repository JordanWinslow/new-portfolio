import { ArrowUpRight, Pause, Play } from 'lucide-react'
import { useState, useSyncExternalStore } from 'react'
import danceImage from '@/assets/images/portfolio/johnny-castaway-dance.webp'
import posterImage from '@/assets/images/portfolio/johnny-castaway-poster.webp'
import gameplayImage from '@/assets/images/portfolio/johnny-castaway-scenes.gif'
import sharkImage from '@/assets/images/portfolio/johnny-castaway-shark.webp'
import shipImage from '@/assets/images/portfolio/johnny-castaway-ship.webp'
import stormImage from '@/assets/images/portfolio/johnny-castaway-storm.webp'
import { ProjectImage } from './ProjectImage'

const motionQuery = '(prefers-reduced-motion: reduce)'
const getMotionPreference = () => window.matchMedia(motionQuery).matches
// Server and initial hydration both show the still; autoplay starts after hydration.
const getServerMotionPreference = () => true
function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia(motionQuery)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

const scenes = [
  {
    image: danceImage,
    title: 'An evening with Mary',
    alt: 'Johnny and Mary together by the water during their evening date',
  },
  {
    image: sharkImage,
    title: 'Trouble in the lagoon',
    alt: 'Johnny encounters a shark in the water beside his island',
  },
  {
    image: stormImage,
    title: 'Weather worth watching',
    alt: 'Stormy weather over Johnny’s island and the surrounding sea',
  },
  {
    image: shipImage,
    title: 'A reason to wave',
    alt: 'An enormous ship passes Johnny’s tiny island',
  },
]

const engineeringNotes = [
  {
    title: 'A simulation that can be replayed',
    detail:
      'The deterministic TypeScript simulation runs independently of PixiJS. Seeded islands and headless soak runs make it possible to replay bugs and check how stories, needs, and weather interact.',
  },
  {
    title: 'Keeping the story and animation in sync',
    detail:
      'Each authored action connects thoughts and results to actual poses, props, and destinations. Dedicated scene tools help check that Johnny does what the caption says.',
  },
  {
    title: 'Local AI with a dependable fallback',
    detail:
      'Optional Qwen inference runs locally through wllama and WebAssembly. It adds personality through validated choices and thoughts; authored rules keep the island running when the model is unavailable.',
  },
  {
    title: 'An island that survives the next visit',
    detail:
      'Persistent islands, an IndexedDB journal, and recoverable backups give every camp a history. Offline caching keeps the island available after its first complete visit; local AI has a separate model download.',
  },
]

export default function JohnnyCastawayShowcase() {
  const reduceMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    getServerMotionPreference,
  )
  const [manuallyPaused, setManuallyPaused] = useState<boolean | null>(null)
  const paused = manuallyPaused ?? reduceMotion

  return (
    <section
      id="johnny-castaway-reborn"
      aria-labelledby="johnny-castaway-heading"
      className="gradient-border rounded-3xl p-6 md:p-12 bg-black/20 backdrop-blur-sm max-w-6xl mx-auto relative z-20 scroll-mt-24"
    >
      <div className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-sm font-mono text-orange-300 mb-3">
            2026 / Simulation, rendering, and on-device AI
          </p>
          <h2
            id="johnny-castaway-heading"
            className="font-mohave text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wide"
          >
            Johnny Castaway: Reborn
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            My love letter to the screensaver I grew up with. Johnny builds a
            camp, makes unlikely friends, and gets into trouble while you watch.
          </p>
          <a
            href="https://johnnycastaway.fyi/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 font-semibold text-white hover:bg-purple-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400"
          >
            Visit the island
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <figure className="overflow-hidden rounded-2xl border border-white/20 bg-black/40">
          <ProjectImage
            src={paused ? posterImage : gameplayImage}
            stillSrc={posterImage}
            respectReducedMotion={manuallyPaused !== false}
            alt="Animated gameplay from Johnny Castaway: Reborn, moving between island life and unexpected encounters"
            width={768}
            height={432}
            loading="lazy"
            className="w-full h-auto"
          />
          <figcaption className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 text-sm text-gray-300">
            <span>Six scenes captured directly from the screensaver.</span>
            <button
              type="button"
              onClick={() => setManuallyPaused(!paused)}
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-white hover:border-orange-400 hover:text-orange-300 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
              aria-label={
                paused ? 'Play gameplay animation' : 'Pause gameplay animation'
              }
            >
              {paused ? (
                <Play size={14} aria-hidden="true" />
              ) : (
                <Pause size={14} aria-hidden="true" />
              )}
              {paused ? 'Play animation' : 'Pause animation'}
            </button>
          </figcaption>
        </figure>

        <div className="grid gap-4 sm:grid-cols-2">
          {scenes.map(({ image, title, alt }) => (
            <figure
              key={title}
              className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
            >
              <img
                src={image}
                alt={alt}
                width={960}
                height={540}
                loading="lazy"
                decoding="async"
                className="w-full h-auto"
              />
              <figcaption className="px-4 py-3 font-mohave text-lg text-white">
                {title}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {engineeringNotes.map(({ title, detail }) => (
            <div key={title}>
              <h3 className="font-mohave text-2xl font-semibold text-white mb-3">
                {title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://johnnycastaway.fyi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 font-semibold text-white hover:bg-purple-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400"
          >
            Visit the island
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a
            href="https://liminalfoundationgames.com/games/johnny-castaway-reborn/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-semibold text-white hover:border-orange-400 hover:text-orange-300 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
          >
            Screenshots and project details
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
