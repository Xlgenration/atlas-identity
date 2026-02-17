import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          
          {/* Logo */}
          <div className="animate-fadeIn">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 mb-6">
              <span className="text-xl font-bold text-white">✦</span>
            </div>
          </div>

          {/* Headline */}
          <div className="animate-fadeIn animation-delay-100">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.9] mb-6">
              <span className="block text-white mb-3">Who Are You</span>
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Really?</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
              Most people live their entire lives without truly knowing themselves. 
              <span className="block mt-2 text-white/80 font-normal">You&apos;re about to change that.</span>
            </p>
          </div>

          {/* Three pillars */}
          <div className="animate-fadeIn animation-delay-200 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
            <div>
              <div className="text-purple-400 text-xs font-semibold tracking-widest mb-2">DISCOVER</div>
              <div className="text-white/60 text-sm">Your true nature</div>
            </div>
            <div>
              <div className="text-blue-400 text-xs font-semibold tracking-widest mb-2">UNDERSTAND</div>
              <div className="text-white/60 text-sm">How you connect</div>
            </div>
            <div>
              <div className="text-purple-400 text-xs font-semibold tracking-widest mb-2">TRANSFORM</div>
              <div className="text-white/60 text-sm">Your life path</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fadeIn animation-delay-300 pt-4">
            <Link
              href="/assessment"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white text-lg font-bold rounded-full shadow-2xl shadow-purple-500/20 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Start Your Journey →
            </Link>
            
            <p className="text-white/40 text-xs mt-4 tracking-wide">
              2 minutes • Free • Instant results
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
