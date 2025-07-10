export function BackgroundDecorations() {
  return (
    <>
      {/* Geometric shapes */}
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

      {/* Large stars */}
      <div
        className="text-white absolute text-3xl text-purple-400 animate-spin"
        style={{
          top: '15%',
          left: '8%',
          animationDelay: '0s',
          animationDuration: '8s',
        }}
      >
        ✦
      </div>
      <div
        className="text-white absolute text-2xl text-pink-400 animate-spin"
        style={{
          top: '25%',
          right: '12%',
          animationDelay: '1.5s',
          animationDuration: '6s',
        }}
      >
        ✦
      </div>
      <div
        className="text-white absolute text-3xl text-orange-400 animate-spin"
        style={{
          top: '70%',
          left: '15%',
          animationDelay: '2.5s',
          animationDuration: '10s',
        }}
      >
        ✦
      </div>
      <div
        className="text-white absolute text-2xl text-purple-400 animate-spin"
        style={{
          top: '85%',
          right: '20%',
          animationDelay: '3s',
          animationDuration: '7s',
        }}
      >
        ✦
      </div>

      {/* Medium stars with sparkle animation */}
      <div
        className="sparkle text-xl text-pink-400"
        style={{ top: '35%', left: '75%', animationDelay: '0.5s' }}
      >
        ✕
      </div>
      <div
        className="sparkle text-lg text-purple-400"
        style={{ top: '45%', right: '30%', animationDelay: '1.2s' }}
      >
        ✕
      </div>
      <div
        className="sparkle text-xl text-orange-400"
        style={{ top: '55%', left: '85%', animationDelay: '2.1s' }}
      >
        ✕
      </div>
      <div
        className="sparkle text-lg text-pink-400"
        style={{ top: '65%', right: '8%', animationDelay: '0.8s' }}
      >
        ✕
      </div>

      {/* Small stars with ping animation */}
      <div
        className="text-white absolute text-lg text-purple-400 animate-ping"
        style={{
          top: '20%',
          left: '60%',
          animationDelay: '1s',
          animationDuration: '3s',
        }}
      >
        ✦
      </div>
      <div
        className="text-white absolute text-sm text-pink-400 animate-ping"
        style={{
          top: '40%',
          left: '25%',
          animationDelay: '2.3s',
          animationDuration: '4s',
        }}
      >
        ✦
      </div>
      <div
        className="text-white absolute text-lg text-orange-400 animate-ping"
        style={{
          top: '60%',
          right: '35%',
          animationDelay: '0.7s',
          animationDuration: '5s',
        }}
      >
        ✦
      </div>
      <div
        className="text-white absolute text-sm text-purple-400 animate-ping"
        style={{
          top: '80%',
          left: '45%',
          animationDelay: '1.8s',
          animationDuration: '3.5s',
        }}
      >
        ✦
      </div>

      {/* Diamond shapes */}
      <div
        className="sparkle text-lg text-pink-400"
        style={{ top: '30%', left: '80%', animationDelay: '1.5s' }}
      >
        ◆
      </div>
      <div
        className="sparkle text-sm text-purple-400"
        style={{ top: '50%', right: '25%', animationDelay: '0.3s' }}
      >
        ◆
      </div>
      <div
        className="sparkle text-lg text-orange-400"
        style={{ top: '75%', left: '90%', animationDelay: '2.7s' }}
      >
        ◆
      </div>

      {/* Additional small stars for more density with varied animations */}
      <div
        className="text-white absolute text-xs text-white"
        style={{
          top: '10%',
          left: '40%',
          animationDelay: '0.2s',
          animation: 'twinkle 3s ease-in-out infinite',
        }}
      >
        ✦
      </div>
      <div
        className="text-white absolute text-xs text-white"
        style={{
          top: '18%',
          right: '45%',
          animationDelay: '1.7s',
          animation: 'float 4s ease-in-out infinite',
        }}
      >
        ✦
      </div>
      <div
        className="text-white absolute text-xs text-purple-400"
        style={{
          top: '28%',
          left: '70%',
          animationDelay: '0.9s',
          animation: 'pulse-glow 2.5s ease-in-out infinite',
        }}
      >
        ✦
      </div>
      <div
        className="text-white absolute text-xs text-white"
        style={{
          top: '38%',
          right: '15%',
          animationDelay: '2.4s',
          animation: 'twinkle 3.5s ease-in-out infinite',
        }}
      >
        ✦
      </div>
      <div
        className="text-white absolute text-xs text-white"
        style={{
          top: '48%',
          left: '35%',
          animationDelay: '1.1s',
          animation: 'float 5s ease-in-out infinite',
        }}
      >
        ✦
      </div>
      <div
        className="text-white absolute text-xs text-pink-400"
        style={{
          top: '58%',
          right: '50%',
          animationDelay: '0.6s',
          animation: 'pulse-glow 3s ease-in-out infinite',
        }}
      >
        ✦
      </div>
      <div
        className="text-white absolute text-xs text-white"
        style={{
          top: '68%',
          left: '55%',
          animationDelay: '2.0s',
          animation: 'twinkle 2.8s ease-in-out infinite',
        }}
      >
        ✦
      </div>
      <div
        className="text-white absolute text-xs text-white"
        style={{
          top: '78%',
          right: '40%',
          animationDelay: '1.3s',
          animation: 'float 4.5s ease-in-out infinite',
        }}
      >
        ✦
      </div>
      <div
        className="text-white absolute text-xs text-orange-400"
        style={{
          top: '88%',
          left: '30%',
          animationDelay: '0.4s',
          animation: 'pulse-glow 2.2s ease-in-out infinite',
        }}
      >
        ✦
      </div>
      <div
        className="text-white absolute text-xs text-white"
        style={{
          top: '95%',
          right: '60%',
          animationDelay: '1.9s',
          animation: 'twinkle 3.2s ease-in-out infinite',
        }}
      >
        ✦
      </div>

      {/* Cross shapes for variety */}
      <div
        className="sparkle text-sm text-pink-400"
        style={{ top: '12%', left: '90%', animationDelay: '0.8s' }}
      >
        ✕
      </div>
      <div
        className="sparkle text-sm text-orange-400"
        style={{ top: '22%', right: '5%', animationDelay: '2.2s' }}
      >
        ✕
      </div>
      <div
        className="sparkle text-sm text-purple-400"
        style={{ top: '32%', left: '5%', animationDelay: '1.4s' }}
      >
        ✕
      </div>
      <div
        className="sparkle text-sm text-pink-400"
        style={{ top: '42%', right: '70%', animationDelay: '0.1s' }}
      >
        ✕
      </div>
      <div
        className="sparkle text-sm text-orange-400"
        style={{ top: '52%', left: '95%', animationDelay: '2.8s' }}
      >
        ✕
      </div>
      <div
        className="sparkle text-sm text-purple-400"
        style={{ top: '62%', right: '80%', animationDelay: '1.6s' }}
      >
        ✕
      </div>
      <div
        className="sparkle text-sm text-pink-400"
        style={{ top: '72%', left: '10%', animationDelay: '0.5s' }}
      >
        ✕
      </div>
      <div
        className="sparkle text-sm text-orange-400"
        style={{ top: '82%', right: '90%', animationDelay: '2.6s' }}
      >
        ✕
      </div>
      <div
        className="sparkle text-sm text-purple-400"
        style={{ top: '92%', left: '65%', animationDelay: '1.0s' }}
      >
        ✕
      </div>
    </>
  )
}
