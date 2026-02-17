'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Share2, Download, Sparkles, Sun, Moon, Star, Heart, Users, TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';
import { use } from 'react';

interface ProfileData {
  name: string;
  westernZodiac: {
    sign: string;
    element: string;
    quality: string;
    ruler: string;
  };
  chineseZodiac: {
    animal: string;
    element: string;
    year: number;
  };
  humanDesign: {
    type: string;
    strategy: string;
    authority: string;
    profile: string;
  };
  personality: {
    overview: string;
    traits: string[];
  };
  strengths: string[];
  weaknesses: string[];
  dailyInsight: {
    title: string;
    content: string;
    energy: string;
  };
}

// Mock data generator based on profile ID
function generateProfileData(id: string): ProfileData {
  const westernSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
  const chineseAnimals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
  const elements = ['Fire', 'Earth', 'Air', 'Water'];
  const hdTypes = ['Generator', 'Manifesting Generator', 'Projector', 'Manifestor', 'Reflector'];
  
  const hash = id.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  const name = id.split('-')[0] || 'User';
  
  return {
    name: name.charAt(0).toUpperCase() + name.slice(1),
    westernZodiac: {
      sign: westernSigns[Math.abs(hash) % westernSigns.length],
      element: elements[Math.abs(hash * 2) % elements.length],
      quality: ['Cardinal', 'Fixed', 'Mutable'][Math.abs(hash * 3) % 3],
      ruler: ['Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Jupiter', 'Saturn'][Math.abs(hash * 4) % 7]
    },
    chineseZodiac: {
      animal: chineseAnimals[Math.abs(hash * 5) % chineseAnimals.length],
      element: elements[Math.abs(hash * 6) % elements.length],
      year: 1990 + (Math.abs(hash * 7) % 30)
    },
    humanDesign: {
      type: hdTypes[Math.abs(hash * 8) % hdTypes.length],
      strategy: 'To respond',
      authority: 'Sacral Authority',
      profile: '3/5'
    },
    personality: {
      overview: 'A natural leader with strong intuitive abilities and a passion for helping others achieve their potential.',
      traits: ['Intuitive', 'Ambitious', 'Compassionate', 'Creative', 'Analytical']
    },
    strengths: [
      'Strong leadership qualities',
      'Excellent communication skills',
      'High emotional intelligence',
      'Creative problem solving',
      'Natural ability to inspire others'
    ],
    weaknesses: [
      'Can be overly critical of self',
      'Tendency to overthink decisions',
      'May struggle with delegation',
      'Sensitive to criticism',
      'Sometimes impatient with slower progress'
    ],
    dailyInsight: {
      title: "Today's Energy Forecast",
      content: "Your intuitive abilities are heightened today. Trust your instincts when making important decisions, especially in collaborative settings.",
      energy: "High"
    }
  };
}

export default function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const profileData = generateProfileData(resolvedParams.id);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-8">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
          <div>
            <Link href="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <motion.h1 
              className="text-4xl font-bold text-white mb-2"
              {...fadeInUp}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {profileData.name}'s Identity Map
            </motion.h1>
            <motion.p 
              className="text-white/70"
              {...fadeInUp}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Your personalized insights combining astrology, human design, and personality science
            </motion.p>
          </div>
          
          <div className="flex gap-3 mt-4 sm:mt-0">
            <button className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Zodiac Signs */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <Sun className="w-6 h-6 text-yellow-400" />
                Astrological Profile
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Western Zodiac */}
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4 text-purple-400" />
                    Western Zodiac
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">Sign:</span>
                      <span className="text-white font-medium">{profileData.westernZodiac.sign}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Element:</span>
                      <span className="text-white font-medium">{profileData.westernZodiac.element}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Quality:</span>
                      <span className="text-white font-medium">{profileData.westernZodiac.quality}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Ruler:</span>
                      <span className="text-white font-medium">{profileData.westernZodiac.ruler}</span>
                    </div>
                  </div>
                </div>

                {/* Chinese Zodiac */}
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-4 border border-blue-500/20">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Moon className="w-4 h-4 text-blue-400" />
                    Chinese Zodiac
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">Animal:</span>
                      <span className="text-white font-medium">{profileData.chineseZodiac.animal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Element:</span>
                      <span className="text-white font-medium">{profileData.chineseZodiac.element}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Year:</span>
                      <span className="text-white font-medium">{profileData.chineseZodiac.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Human Design */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-400" />
                Human Design
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-white mb-3">Type & Strategy</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">Type:</span>
                      <span className="text-white font-medium">{profileData.humanDesign.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Strategy:</span>
                      <span className="text-white font-medium">{profileData.humanDesign.strategy}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-3">Authority & Profile</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">Authority:</span>
                      <span className="text-white font-medium">{profileData.humanDesign.authority}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Profile:</span>
                      <span className="text-white font-medium">{profileData.humanDesign.profile}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Personality Overview */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-green-400" />
                Personality Overview
              </h2>
              
              <p className="text-white/80 mb-6 leading-relaxed">{profileData.personality.overview}</p>
              
              <div>
                <h3 className="font-semibold text-white mb-3">Core Traits</h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.personality.traits.map((trait, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full text-sm text-white border border-green-500/20"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Strengths & Weaknesses */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Strengths */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  Strengths
                </h3>
                <ul className="space-y-3">
                  {profileData.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2 text-white/80 text-sm">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  Growth Areas
                </h3>
                <ul className="space-y-3">
                  {profileData.weaknesses.map((weakness, index) => (
                    <li key={index} className="flex items-start gap-2 text-white/80 text-sm">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      {weakness}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Daily Insight */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                {profileData.dailyInsight.title}
              </h3>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white/70 text-sm">Energy Level:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    profileData.dailyInsight.energy === 'High' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {profileData.dailyInsight.energy}
                  </span>
                </div>
              </div>
              
              <p className="text-white/80 text-sm leading-relaxed">{profileData.dailyInsight.content}</p>
            </motion.div>

            {/* Quick Actions */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  href="/couple"
                  className="block w-full p-3 rounded-xl bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-500/20 text-white hover:from-pink-500/30 hover:to-red-500/30 transition-all text-center"
                >
                  <Heart className="w-4 h-4 inline mr-2" />
                  Compare with Partner
                </Link>
                <button className="block w-full p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20 text-white hover:from-blue-500/30 hover:to-purple-500/30 transition-all text-center">
                  <Users className="w-4 h-4 inline mr-2" />
                  Team Analysis
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}