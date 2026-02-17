'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      
      {/* Main content - single screen */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 mb-8">
              <span className="text-2xl font-bold text-white">✦</span>
            </div>
          </motion.div>

          {/* Emotional headline - create DESIRE and CURIOSITY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9]">
              <span className="block text-white mb-4">Who Are You</span>
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Really?</span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto">
              Most people live their entire lives without truly knowing themselves. 
              <span className="block mt-2 text-white/90">You're about to change that.</span>
            </p>
          </motion.div>

          {/* What you'll discover - brief but compelling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center space-y-3">
                <div className="text-purple-400 text-sm font-medium">DISCOVER</div>
                <div className="text-white/80">Your true nature and hidden gifts</div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-blue-400 text-sm font-medium">UNDERSTAND</div>
                <div className="text-white/80">Why you think and act the way you do</div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-purple-400 text-sm font-medium">TRANSFORM</div>
                <div className="text-white/80">Your relationships and life path</div>
              </div>
            </div>
          </motion.div>

          {/* BIG Start Your Journey button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/assessment"
              className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white text-xl font-bold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <span>Start Your Journey</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            
            <p className="text-white/50 text-sm mt-6">
              Takes 2 minutes • Free to start • Profound results
            </p>
          </motion.div>

        </div>
      </div>
      
      {/* Minimal footer */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="text-center text-white/30 text-sm">
          © 2024 ATLAS
        </div>
      </div>
    </div>
  );
}