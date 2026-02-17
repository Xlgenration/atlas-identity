'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Sparkles, User, Calendar, Clock, MapPin, Star, Moon, Sun, Wand2, Crown, Gem, Loader2 } from 'lucide-react';
import Link from 'next/link';

interface AssessmentData {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
}

export default function Assessment() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [data, setData] = useState<AssessmentData>({
    name: '',
    birthDate: '',
    birthTime: '',
    birthPlace: ''
  });

  const router = useRouter();

  const startAnalysis = () => {
    setIsAnalyzing(true);
    
    // Enhanced analysis simulation with longer time for more "premium" feel
    setTimeout(() => {
      const profileId = generateProfileId();
      router.push(`/profile/${profileId}`);
    }, 4500);
  };

  const generateProfileId = (): string => {
    const namePart = data.name.toLowerCase().replace(/\s+/g, '');
    const datePart = data.birthDate.replace(/[^0-9]/g, '');
    const randomPart = Math.random().toString(36).substr(2, 5);
    return `${namePart}-${datePart}-${randomPart}`;
  };

  const isFormValid = (): boolean => {
    return data.name.trim().length > 0 && 
           data.birthDate.length > 0 && 
           data.birthTime.length > 0 && 
           data.birthPlace.trim().length > 0;
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const analysisSteps = [
    {
      icon: Star,
      text: "Calculating celestial positions at your birth moment",
      color: "text-purple-400",
      delay: 0
    },
    {
      icon: Moon,
      text: "Generating your complete astrological chart",
      color: "text-blue-400",
      delay: 1000
    },
    {
      icon: Sun,
      text: "Mapping your Human Design configuration",
      color: "text-gold-400",
      delay: 2000
    },
    {
      icon: Wand2,
      text: "Synthesizing personality patterns and insights",
      color: "text-pink-400",
      delay: 3000
    },
    {
      icon: Crown,
      text: "Creating your personalized cosmic blueprint",
      color: "text-purple-400",
      delay: 4000
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {!isAnalyzing ? (
          <>
            {/* Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return Home
              </Link>
              
              {/* Mystical Header */}
              <div className="mb-8">
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-500/20 to-gold-500/20 border border-purple-500/30 mb-6"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-10 h-10 text-transparent bg-gradient-to-r from-purple-400 to-gold-400 bg-clip-text" />
                </motion.div>
                <h1 className="text-5xl sm:text-6xl font-black gradient-text mb-4">
                  Your Cosmic Revelation
                </h1>
                <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                  Provide your birth details to unlock the profound mysteries of your authentic self
                </p>
              </div>
            </motion.div>

            {/* Single Form */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="glass-card p-10 sm:p-12 rounded-3xl max-w-3xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                {/* Name Field */}
                <motion.div variants={fadeInUp} className="lg:col-span-2">
                  <div className="input-group">
                    <input
                      type="text"
                      value={data.name}
                      onChange={(e) => setData({ ...data, name: e.target.value })}
                      placeholder=" "
                      className="luxury-input peer"
                      autoFocus
                    />
                    <label className="floating-label">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                  </div>
                  <p className="text-white/50 text-sm mt-2 ml-2">Your sacred name opens the gateway to your identity</p>
                </motion.div>

                {/* Birth Date */}
                <motion.div variants={fadeInUp}>
                  <div className="input-group">
                    <input
                      type="date"
                      value={data.birthDate}
                      onChange={(e) => setData({ ...data, birthDate: e.target.value })}
                      placeholder=" "
                      className="luxury-input peer"
                    />
                    <label className="floating-label">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Birth Date
                    </label>
                  </div>
                  <p className="text-white/50 text-sm mt-2 ml-2">The moment Earth received your soul</p>
                </motion.div>

                {/* Birth Time */}
                <motion.div variants={fadeInUp}>
                  <div className="input-group">
                    <input
                      type="time"
                      value={data.birthTime}
                      onChange={(e) => setData({ ...data, birthTime: e.target.value })}
                      placeholder=" "
                      className="luxury-input peer"
                    />
                    <label className="floating-label">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Birth Time
                    </label>
                  </div>
                  <p className="text-white/50 text-sm mt-2 ml-2">Precise timing shapes your cosmic blueprint</p>
                </motion.div>

                {/* Birth Place */}
                <motion.div variants={fadeInUp} className="lg:col-span-2">
                  <div className="input-group">
                    <input
                      type="text"
                      value={data.birthPlace}
                      onChange={(e) => setData({ ...data, birthPlace: e.target.value })}
                      placeholder=" "
                      className="luxury-input peer"
                    />
                    <label className="floating-label">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Birth Location
                    </label>
                  </div>
                  <p className="text-white/50 text-sm mt-2 ml-2">City, State/Province, Country - Your earthly coordinates matter</p>
                </motion.div>
              </div>

              {/* Mystical Details */}
              <motion.div 
                variants={fadeInUp}
                className="bg-gradient-to-r from-purple-500/10 to-gold-500/10 rounded-2xl p-8 border border-purple-500/20 mb-10"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Gem className="w-5 h-5 text-gold-400" />
                  What Your Analysis Reveals
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-purple-400" />
                    <span>Complete Astrological Profile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Moon className="w-4 h-4 text-blue-400" />
                    <span>Human Design Type & Strategy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-gold-400" />
                    <span>Life Purpose & Sacred Mission</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-purple-400" />
                    <span>Relationship Compatibility Patterns</span>
                  </div>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div 
                variants={fadeInUp}
                className="text-center"
              >
                <button
                  onClick={startAnalysis}
                  disabled={!isFormValid()}
                  className={`relative group px-12 py-6 text-xl font-bold rounded-3xl transition-all duration-500 ${
                    isFormValid()
                      ? 'gradient-button text-white hover:scale-105 shadow-2xl'
                      : 'bg-white/10 text-white/40 cursor-not-allowed'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <motion.div
                      animate={isFormValid() ? { rotate: 360 } : {}}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-6 h-6" />
                    </motion.div>
                    Unveil My Cosmic Identity
                    <motion.div
                      animate={isFormValid() ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Wand2 className="w-6 h-6" />
                    </motion.div>
                  </span>
                </button>
                
                {!isFormValid() && (
                  <p className="text-white/50 text-sm mt-4">
                    Complete all fields to begin your cosmic journey
                  </p>
                )}
              </motion.div>
            </motion.div>
          </>
        ) : (
          /* Analysis Phase */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center max-w-2xl mx-auto"
          >
            {/* Mystical Analysis Header */}
            <motion.div className="mb-12">
              <div className="relative inline-flex items-center justify-center w-32 h-32 mb-8">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-gold-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative w-28 h-28 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles className="w-12 h-12 text-transparent bg-gradient-to-r from-purple-400 to-gold-400 bg-clip-text" />
                  </motion.div>
                </div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-black gradient-text mb-4">
                Channeling Your Cosmic Blueprint
              </h2>
              <p className="text-xl text-white/80 font-light">
                Our AI is weaving together the threads of your destiny...
              </p>
            </motion.div>

            {/* Enhanced Analysis Steps */}
            <div className="glass-card p-8 rounded-3xl space-y-6">
              {analysisSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: step.delay / 1000, duration: 0.6 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500/20 to-gold-500/20 flex items-center justify-center ${step.color}`}>
                    <motion.div
                      animate={{ 
                        rotate: index % 2 === 0 ? 360 : -360,
                        scale: [1, 1.1, 1] 
                      }}
                      transition={{ 
                        rotate: { duration: 4, repeat: Infinity, ease: "linear", delay: step.delay / 1000 },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: step.delay / 1000 }
                      }}
                    >
                      <step.icon className="w-5 h-5" />
                    </motion.div>
                  </div>
                  <span className="text-white/90 font-medium text-left flex-1">{step.text}</span>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: (step.delay / 1000) + 0.5 }}
                    className="magical-loading"
                  >
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Progress indicator */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="text-white/60 text-sm mb-2">Analysis Progress</div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-gold-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}