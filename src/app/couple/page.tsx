'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, Heart, Users, TrendingUp, AlertTriangle, Sparkles, Star, 
  RotateCcw, Crown, Gem, Wand2, Target, Brain, MessageCircle, Zap, 
  Sun, Moon, Fire, Calendar, Clock, MapPin, Download, Share2, Award,
  Shield, Eye, Coffee, Music, Gamepad2, Home
} from 'lucide-react';

interface PersonProfile {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  westernZodiac: string;
  chineseZodiac: string;
  humanDesignType: string;
  coreTraits: string[];
}

interface DetailedCompatibility {
  overallScore: number;
  soulMateIndicator: string;
  categories: {
    emotional: { score: number; description: string; };
    communication: { score: number; description: string; };
    intimacy: { score: number; description: string; };
    values: { score: number; description: string; };
    lifestyle: { score: number; description: string; };
    growth: { score: number; description: string; };
  };
  strengths: Array<{
    title: string;
    description: string;
    impact: 'high' | 'medium' | 'low';
  }>;
  challenges: Array<{
    title: string;
    description: string;
    solution: string;
    difficulty: 'easy' | 'moderate' | 'challenging';
  }>;
  advice: {
    shortTerm: string[];
    longTerm: string[];
    overall: string;
  };
  astrologicalInsights: {
    elementCompatibility: string;
    modalityHarmony: string;
    planetaryAspects: string;
  };
  lifePath: {
    sharedPurpose: string;
    individualGrowth: string[];
    relationshipGoals: string[];
  };
}

export default function CouplePage() {
  const [step, setStep] = useState<'input' | 'analyzing' | 'results'>('input');
  const [person1, setPerson1] = useState<PersonProfile>({
    name: '', birthDate: '', birthTime: '', birthPlace: '',
    westernZodiac: '', chineseZodiac: '', humanDesignType: '', coreTraits: []
  });
  const [person2, setPerson2] = useState<PersonProfile>({
    name: '', birthDate: '', birthTime: '', birthPlace: '',
    westernZodiac: '', chineseZodiac: '', humanDesignType: '', coreTraits: []
  });
  const [compatibility, setCompatibility] = useState<DetailedCompatibility | null>(null);

  const generateDetailedCompatibility = (): DetailedCompatibility => {
    const baseScore = 75 + Math.random() * 20; // 75-95% for premium feel
    
    return {
      overallScore: Math.round(baseScore),
      soulMateIndicator: baseScore > 85 ? 'Soul Mate Connection' : baseScore > 75 ? 'Deep Compatibility' : 'Growing Partnership',
      categories: {
        emotional: {
          score: Math.round(80 + Math.random() * 15),
          description: 'You share profound emotional understanding and create a safe space for vulnerability and authentic expression.'
        },
        communication: {
          score: Math.round(75 + Math.random() * 20),
          description: 'Your communication styles complement each other beautifully, with natural flow and mutual respect.'
        },
        intimacy: {
          score: Math.round(70 + Math.random() * 25),
          description: 'Physical and emotional intimacy flows naturally, with magnetic attraction and deepening connection.'
        },
        values: {
          score: Math.round(85 + Math.random() * 10),
          description: 'Your core values align powerfully, creating a solid foundation for long-term partnership.'
        },
        lifestyle: {
          score: Math.round(65 + Math.random() * 25),
          description: 'While your lifestyle preferences differ slightly, these differences can create beautiful balance and growth.'
        },
        growth: {
          score: Math.round(80 + Math.random() * 15),
          description: 'Together, you inspire each other to become the highest versions of yourselves.'
        }
      },
      strengths: [
        {
          title: 'Magnetic Soul Connection',
          description: 'Your souls recognize each other on a deep, mystical level that transcends ordinary attraction.',
          impact: 'high'
        },
        {
          title: 'Complementary Energy Dynamics',
          description: 'Where one is strong, the other provides support, creating a perfectly balanced energetic exchange.',
          impact: 'high'
        },
        {
          title: 'Shared Visionary Dreams',
          description: 'You both dream big and inspire each other to manifest extraordinary realities together.',
          impact: 'high'
        },
        {
          title: 'Intuitive Understanding',
          description: 'You often know what the other needs without words, creating effortless harmony.',
          impact: 'medium'
        },
        {
          title: 'Growth-Oriented Partnership',
          description: 'Both partners are committed to personal evolution and supporting each other\'s journey.',
          impact: 'medium'
        }
      ],
      challenges: [
        {
          title: 'Intensity Management',
          description: 'Your connection is so powerful that sometimes you need space to process the energy.',
          solution: 'Create regular solo time for integration and maintain individual identities.',
          difficulty: 'moderate'
        },
        {
          title: 'Decision-Making Styles',
          description: 'You approach major decisions from different perspectives, which can create temporary tension.',
          solution: 'Develop a structured decision-making process that honors both styles.',
          difficulty: 'easy'
        },
        {
          title: 'Social Energy Differences',
          description: 'One partner may be more social while the other prefers intimate settings.',
          solution: 'Alternate between social and intimate activities, respecting both needs.',
          difficulty: 'easy'
        }
      ],
      advice: {
        shortTerm: [
          'Practice daily appreciation rituals to strengthen your bond',
          'Create sacred space for deep conversations without distractions',
          'Establish regular date nights that honor both your love languages'
        ],
        longTerm: [
          'Develop shared spiritual practices or meaningful traditions',
          'Support each other\'s individual dreams while building shared goals',
          'Consider couples counseling as a proactive investment in your relationship'
        ],
        overall: 'Your relationship has extraordinary potential for depth, growth, and lasting happiness. The key is maintaining individual authenticity while growing together as partners. Trust the process and allow your love to evolve naturally.'
      },
      astrologicalInsights: {
        elementCompatibility: 'Your elemental blend creates passionate chemistry with grounding stability - a rare and powerful combination.',
        modalityHarmony: 'The interplay between your cardinal, fixed, and mutable energies creates perfect relationship dynamics.',
        planetaryAspects: 'Venus and Mars form harmonious aspects between your charts, indicating deep romantic and sexual compatibility.'
      },
      lifePath: {
        sharedPurpose: 'To create a relationship that serves as a beacon of authentic love and conscious partnership for others.',
        individualGrowth: [
          'Learning to maintain individual identity while deepening intimacy',
          'Developing greater emotional intelligence and communication skills',
          'Balancing personal ambitions with relationship priorities'
        ],
        relationshipGoals: [
          'Build a home that feels like a sacred sanctuary',
          'Travel and explore the world together while growing spiritually',
          'Create positive impact in your community through your united strengths'
        ]
      }
    };
  };

  const handleAnalyze = () => {
    setStep('analyzing');
    
    // Premium analysis simulation
    setTimeout(() => {
      const result = generateDetailedCompatibility();
      setCompatibility(result);
      setStep('results');
    }, 3500);
  };

  const handleReset = () => {
    setStep('input');
    setPerson1({ name: '', birthDate: '', birthTime: '', birthPlace: '', westernZodiac: '', chineseZodiac: '', humanDesignType: '', coreTraits: [] });
    setPerson2({ name: '', birthDate: '', birthTime: '', birthPlace: '', westernZodiac: '', chineseZodiac: '', humanDesignType: '', coreTraits: [] });
    setCompatibility(null);
  };

  const isFormValid = () => {
    return person1.name.trim() && person1.birthDate && person2.name.trim() && person2.birthDate;
  };

  const fadeInUp = { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } };
  const scaleIn = { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 } };
  const staggerContainer = { animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'from-emerald-500 to-green-500';
    if (score >= 70) return 'from-blue-500 to-cyan-500';
    if (score >= 55) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const CircularProgress = ({ score, size = 120, strokeWidth = 8 }: { score: number; size?: number; strokeWidth?: number }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#ffc107" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{score}%</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Premium Header */}
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
          
          <div className="mb-8">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-10 h-10 text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text" />
            </motion.div>
            <h1 className="text-5xl sm:text-6xl font-black gradient-text mb-4">
              Sacred Union Analysis
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
              Discover the cosmic blueprint of your relationship through advanced astrological and spiritual compatibility analysis
            </p>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {step === 'input' && (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: -40 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Person 1 */}
                <motion.div variants={fadeInUp} className="glass-card p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-lg font-bold">
                        1
                      </div>
                      <h2 className="text-2xl font-bold text-white">First Soul</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="input-group">
                        <input
                          type="text"
                          value={person1.name}
                          onChange={(e) => setPerson1({ ...person1, name: e.target.value })}
                          placeholder=" "
                          className="luxury-input peer"
                        />
                        <label className="floating-label">Sacred Name</label>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="input-group">
                          <input
                            type="date"
                            value={person1.birthDate}
                            onChange={(e) => setPerson1({ ...person1, birthDate: e.target.value })}
                            placeholder=" "
                            className="luxury-input peer"
                          />
                          <label className="floating-label">
                            <Calendar className="w-4 h-4 inline mr-1" />
                            Birth Date
                          </label>
                        </div>
                        <div className="input-group">
                          <input
                            type="time"
                            value={person1.birthTime}
                            onChange={(e) => setPerson1({ ...person1, birthTime: e.target.value })}
                            placeholder=" "
                            className="luxury-input peer"
                          />
                          <label className="floating-label">
                            <Clock className="w-4 h-4 inline mr-1" />
                            Birth Time
                          </label>
                        </div>
                      </div>
                      
                      <div className="input-group">
                        <input
                          type="text"
                          value={person1.birthPlace}
                          onChange={(e) => setPerson1({ ...person1, birthPlace: e.target.value })}
                          placeholder=" "
                          className="luxury-input peer"
                        />
                        <label className="floating-label">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          Birth Location
                        </label>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Person 2 */}
                <motion.div variants={fadeInUp} className="glass-card p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-lg font-bold">
                        2
                      </div>
                      <h2 className="text-2xl font-bold text-white">Second Soul</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="input-group">
                        <input
                          type="text"
                          value={person2.name}
                          onChange={(e) => setPerson2({ ...person2, name: e.target.value })}
                          placeholder=" "
                          className="luxury-input peer"
                        />
                        <label className="floating-label">Sacred Name</label>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="input-group">
                          <input
                            type="date"
                            value={person2.birthDate}
                            onChange={(e) => setPerson2({ ...person2, birthDate: e.target.value })}
                            placeholder=" "
                            className="luxury-input peer"
                          />
                          <label className="floating-label">
                            <Calendar className="w-4 h-4 inline mr-1" />
                            Birth Date
                          </label>
                        </div>
                        <div className="input-group">
                          <input
                            type="time"
                            value={person2.birthTime}
                            onChange={(e) => setPerson2({ ...person2, birthTime: e.target.value })}
                            placeholder=" "
                            className="luxury-input peer"
                          />
                          <label className="floating-label">
                            <Clock className="w-4 h-4 inline mr-1" />
                            Birth Time
                          </label>
                        </div>
                      </div>
                      
                      <div className="input-group">
                        <input
                          type="text"
                          value={person2.birthPlace}
                          onChange={(e) => setPerson2({ ...person2, birthPlace: e.target.value })}
                          placeholder=" "
                          className="luxury-input peer"
                        />
                        <label className="floating-label">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          Birth Location
                        </label>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Analyze Button */}
              <motion.div variants={fadeInUp} className="text-center">
                <button
                  onClick={handleAnalyze}
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
                    Reveal Your Sacred Union
                    <Heart className="w-6 h-6" />
                  </span>
                </button>
                
                {!isFormValid() && (
                  <p className="text-white/50 text-sm mt-4">
                    Complete both profiles to discover your cosmic connection
                  </p>
                )}
              </motion.div>
            </motion.div>
          )}

          {step === 'analyzing' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="glass-card p-12 rounded-3xl">
                <div className="relative inline-flex items-center justify-center w-32 h-32 mb-8">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="relative w-28 h-28 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Heart className="w-12 h-12 text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text" />
                    </motion.div>
                  </div>
                </div>
                
                <h2 className="text-4xl font-black gradient-text mb-6">
                  Weaving Your Love Story
                </h2>
                <p className="text-xl text-white/80 font-light mb-8">
                  Our cosmic intelligence is analyzing the sacred geometry of your souls...
                </p>
                
                <div className="magical-loading">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'results' && compatibility && (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: 40 }}
              className="space-y-12"
            >
              {/* Header with Overall Score */}
              <motion.div variants={scaleIn} className="text-center">
                <div className="glass-card p-10 rounded-3xl">
                  <div className="flex items-center justify-center gap-6 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-2xl">
                      {person1.name.charAt(0)}
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Heart className="w-12 h-12 text-pink-400" />
                    </motion.div>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-2xl">
                      {person2.name.charAt(0)}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
                    {person1.name} & {person2.name}
                  </h2>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 font-semibold mb-8">
                    <Crown className="w-4 h-4" />
                    {compatibility.soulMateIndicator}
                  </div>
                  
                  <div className="flex items-center justify-center mb-6">
                    <CircularProgress score={compatibility.overallScore} size={160} strokeWidth={12} />
                  </div>
                  
                  <p className="text-white/70 text-lg font-light">Sacred Union Compatibility</p>
                </div>
              </motion.div>

              {/* Detailed Category Scores */}
              <motion.div variants={fadeInUp} className="glass-card p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
                  <Gem className="w-6 h-6 text-purple-400" />
                  Relationship Dimensions
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(compatibility.categories).map(([category, data]) => (
                    <div key={category} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-white capitalize">{category}</h4>
                        <span className="text-2xl font-bold text-white">{data.score}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full mb-4">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${getScoreColor(data.score)}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${data.score}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed">{data.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Strengths and Challenges */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Strengths */}
                <motion.div variants={fadeInUp} className="glass-card p-8 rounded-3xl">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                    Sacred Strengths
                  </h3>
                  <div className="space-y-6">
                    {compatibility.strengths.map((strength, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-start gap-4">
                          <div className={`w-8 h-8 rounded-xl bg-gradient-to-r ${
                            strength.impact === 'high' ? 'from-green-500 to-emerald-500' :
                            strength.impact === 'medium' ? 'from-blue-500 to-cyan-500' :
                            'from-purple-500 to-pink-500'
                          } flex items-center justify-center flex-shrink-0`}>
                            <Star className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-2">{strength.title}</h4>
                            <p className="text-white/80 text-sm leading-relaxed">{strength.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Challenges */}
                <motion.div variants={fadeInUp} className="glass-card p-8 rounded-3xl">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Target className="w-6 h-6 text-yellow-400" />
                    Growth Opportunities
                  </h3>
                  <div className="space-y-6">
                    {compatibility.challenges.map((challenge, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-start gap-4">
                          <div className={`w-8 h-8 rounded-xl bg-gradient-to-r ${
                            challenge.difficulty === 'easy' ? 'from-green-500 to-blue-500' :
                            challenge.difficulty === 'moderate' ? 'from-yellow-500 to-orange-500' :
                            'from-orange-500 to-red-500'
                          } flex items-center justify-center flex-shrink-0`}>
                            <AlertTriangle className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-2">{challenge.title}</h4>
                            <p className="text-white/80 text-sm leading-relaxed mb-2">{challenge.description}</p>
                            <p className="text-yellow-300 text-sm font-medium">💡 {challenge.solution}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sacred Advice */}
              <motion.div variants={fadeInUp} className="glass-card p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Wand2 className="w-6 h-6 text-purple-400" />
                  Sacred Guidance
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-blue-400" />
                      Immediate Actions
                    </h4>
                    <ul className="space-y-3">
                      {compatibility.advice.shortTerm.map((advice, index) => (
                        <li key={index} className="flex items-start gap-2 text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          {advice}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                      <Crown className="w-5 h-5 text-gold-400" />
                      Long-term Vision
                    </h4>
                    <ul className="space-y-3">
                      {compatibility.advice.longTerm.map((advice, index) => (
                        <li key={index} className="flex items-start gap-2 text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 bg-gold-400 rounded-full mt-2 flex-shrink-0" />
                          {advice}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500/10 to-gold-500/10 rounded-2xl p-6 border border-purple-500/20">
                  <p className="text-white/90 text-lg leading-relaxed italic text-center">{compatibility.advice.overall}</p>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleReset}
                  className="glass-card px-8 py-4 font-semibold hover:scale-105 transition-all flex items-center gap-2 justify-center"
                >
                  <RotateCcw className="w-5 h-5" />
                  New Analysis
                </button>
                <button className="glass-card px-8 py-4 font-semibold hover:scale-105 transition-all flex items-center gap-2 justify-center">
                  <Share2 className="w-5 h-5" />
                  Share Results
                </button>
                <button className="gradient-button px-8 py-4 font-semibold rounded-2xl hover:scale-105 transition-all flex items-center gap-2 justify-center">
                  <Download className="w-5 h-5" />
                  Premium PDF Report
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}