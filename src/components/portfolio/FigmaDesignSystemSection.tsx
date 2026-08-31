const FIGMA_EMBED_URL =
  'https://embed.figma.com/design/xcQsOsdVwSjXUrNleDwNoo/PROTOTYPES-AND-GRAPHIC-DESIGN?node-id=3-1435&embed-host=share'

export default function FigmaDesignSystemSection() {
  return (
    <section className="gradient-border rounded-3xl p-8 md:p-12 bg-black/20 backdrop-blur-sm max-w-6xl mx-auto relative z-20">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <h2 className="font-mohave text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wide">
            Figma Design Work
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            A few examples from one of my Figma files, covering some UI and
            graphic design work. Pan and zoom around below to take a closer
            look.
          </p>
        </div>

        <div className="w-full max-w-[800px] mx-auto">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/20 bg-black/40">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={FIGMA_EMBED_URL}
              title="Figma file with design and graphic design examples by Jordan Winslow"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
