import { ArrowUpRight } from 'lucide-react'
import johnnyCastawayImage from '@/assets/images/portfolio/johnny-castaway-island.webp'

const engineeringNotes = [
  {
    title: 'A simulation that can be replayed',
    detail:
      'I separated the deterministic TypeScript simulation from the PixiJS renderer. Seeded islands, needs, weather, day/night cycles, and story state can run without a canvas, making long headless soak runs useful for checking balance and investigating edge cases.',
  },
  {
    title: 'Keeping the story and animation in sync',
    detail:
      'A caption only works if Johnny actually performs it. Authored actions connect each thought, attempt, and result to a pose, hand prop, and target. Staged story arcs and dedicated sprite review tools help keep the narration, object placement, and illustrated scene coherent.',
  },
  {
    title: 'Local AI with a dependable fallback',
    detail:
      'Optional Qwen inference runs on the device through wllama and WebAssembly. Model choices are validated against supported actions and story branches; authored rules keep the island running when AI is unavailable or slow. The model adds personality without replacing the simulation.',
  },
  {
    title: 'An island that survives the next visit',
    detail:
      'Saved islands, an IndexedDB journal, recoverable backups, and offline web caching let a small browser experience build history over time. After the first complete online visit, the island can run offline. Optional AI needs a separate model download before it can run locally.',
  },
]

export default function JohnnyCastawayShowcase() {
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
            My love letter to the screensaver I grew up watching. I created this
            unofficial browser reimagining at Liminal Foundation Games, turning
            a tiny island into an ongoing illustrated life: Johnny forages,
            builds a camp, weathers storms, and stumbles into strange
            encounters. The challenge was making that life feel spontaneous
            while keeping its many systems consistent.
          </p>
        </div>

        <figure>
          <img
            src={johnnyCastawayImage}
            alt="Johnny on his illustrated island beneath storm clouds, with a thought bubble and browser controls for settings, journal, and fullscreen"
            width={1264}
            height={735}
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-xl border border-white/20"
          />
          <figcaption className="mt-3 text-sm text-gray-400 leading-relaxed">
            A real in-app screenshot. Risograph-style artwork supports a living
            island with changing weather, lighting, wildlife, and camp layouts.
          </figcaption>
        </figure>

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

        <p className="text-gray-300 leading-relaxed border-t border-white/10 pt-8">
          Familiar inspirations include a mermaid visit, messages in bottles,
          Suzy's letter and reunion, a dinner dance, and the office dream with a
          parachute return. New systems add editable personalities, seeded
          camps, branching stories, a persistent journal, and optional local AI
          thoughts.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://johnnycastaway.fyi"
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
