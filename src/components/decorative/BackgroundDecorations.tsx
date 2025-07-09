export function BackgroundDecorations() {
  return (
    <>
      <div
        className="absolute top-1/30 left-1/4 w-20 h-20 border-2 border-purple-500/40 rounded-full animate-pulse"
        style={{ animationDelay: '.5s' }}
      />
      <div
        className="absolute top-1/10 right-1/4 w-16 h-16 border-2 border-pink-500/40 rounded-lg rotate-45 animate-pulse"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute top-1/10 left-1/5 w-12 h-12 border-2 border-orange-500/40 rounded-full animate-pulse"
        style={{ animationDelay: '2s' }}
      />

      <div
        className="text-white absolute text-2xl text-purple-400 animate-spin"
        style={{
          top: '20%',
          left: '10%',
          animationDelay: '0s',
          animationDuration: '7s',
        }}
      >
        ✦
      </div>
      <div
        className="sparkle text-lg text-pink-400"
        style={{ top: '40%', right: '15%', animationDelay: '1s' }}
      >
        ✕
      </div>
      <div
        className="text-white absolute text-xl text-orange-400 animate-ping"
        style={{
          top: '80%',
          left: '20%',
          animationDelay: '2s',
          animationDuration: '7s',
        }}
      >
        ✦
      </div>
      <div
        className="sparkle text-sm text-purple-400"
        style={{ top: '60%', right: '25%', animationDelay: '0.5s' }}
      >
        ✕
      </div>
      <div
        className="sparkle text-lg text-pink-400"
        style={{ top: '30%', left: '80%', animationDelay: '1.5s' }}
      >
        ◆
      </div>
    </>
  )
}
