'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, Share2, Download, Sparkles, Sun, Moon, Star, Heart, Users, TrendingUp, 
  AlertTriangle, Lightbulb, Crown, Gem, Wand2, Target, Brain, Compass, Shield, 
  Zap, Eye, MessageCircle, Flame, Waves, Mountain, Wind, Calendar, Clock, MapPin,
  Award, BookOpen, Crosshair, Coffee, Briefcase, Home, Gamepad2, Music
} from 'lucide-react';
import { use } from 'react';

interface ProfileData {
  name: string;
  birthDetails: {
    date: string;
    time: string;
    location: string;
  };
  westernZodiac: {
    sign: string;
    element: string;
    quality: string;
    ruler: string;
    house: string;
    degree: string;
    description: string;
  };
  chineseZodiac: {
    animal: string;
    element: string;
    year: number;
    traits: string[];
    compatibility: string[];
  };
  humanDesign: {
    type: string;
    strategy: string;
    authority: string;
    profile: string;
    definition: string;
    centers: string[];
    incarnationCross: string;
    description: string;
  };
  personality: {
    overview: string;
    coreTraits: string[];
    motivations: string[];
    fears: string[];
    desires: string[];
    archetype: string;
  };
  lifeAreas: {
    career: {
      ideal: string[];
      strengths: string[];
      challenges: string[];
      advice: string;
    };
    relationships: {
      style: string;
      needs: string[];
      gifts: string[];
      growth: string[];
    };
    health: {
      constitution: string;
      vulnerabilities: string[];
      recommendations: string[];
    };
    spirituality: {
      path: string;
      practices: string[];
      lessons: string[];
    };
  };
  strengths: string[];
  challenges: string[];
  lifePurpose: {
    mission: string;
    gifts: string[];
    path: string;
  };
  compatibility: {
    romantic: string[];
    friendship: string[];
    business: string[];
  };
  dailyGuidance: {
    energy: string;
    focus: string;
    avoid: string;
    affirmation: string;
  };
}

// Enhanced mock data generator
function generateEnhancedProfileData(id: string): ProfileData {
  const westernSigns = [
    { sign: 'Aries', element: 'Fire', quality: 'Cardinal', ruler: 'Mars' },
    { sign: 'Taurus', element: 'Earth', quality: 'Fixed', ruler: 'Venus' },
    { sign: 'Gemini', element: 'Air', quality: 'Mutable', ruler: 'Mercury' },
    { sign: 'Cancer', element: 'Water', quality: 'Cardinal', ruler: 'Moon' },
    { sign: 'Leo', element: 'Fire', quality: 'Fixed', ruler: 'Sun' },
    { sign: 'Virgo', element: 'Earth', quality: 'Mutable', ruler: 'Mercury' },
    { sign: 'Libra', element: 'Air', quality: 'Cardinal', ruler: 'Venus' },
    { sign: 'Scorpio', element: 'Water', quality: 'Fixed', ruler: 'Mars/Pluto' },
    { sign: 'Sagittarius', element: 'Fire', quality: 'Mutable', ruler: 'Jupiter' },
    { sign: 'Capricorn', element: 'Earth', quality: 'Cardinal', ruler: 'Saturn' },
    { sign: 'Aquarius', element: 'Air', quality: 'Fixed', ruler: 'Saturn/Uranus' },
    { sign: 'Pisces', element: 'Water', quality: 'Mutable', ruler: 'Jupiter/Neptune' }
  ];
  
  const chineseAnimals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
  const elements = ['Fire', 'Earth', 'Air', 'Water'];
  const hdTypes = ['Generator', 'Manifesting Generator', 'Projector', 'Manifestor', 'Reflector'];
  
  const hash = id.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  const name = id.split('-')[0] || 'User';
  const westernData = westernSigns[Math.abs(hash) % westernSigns.length];
  
  return {
    name: name.charAt(0).toUpperCase() + name.slice(1),
    birthDetails: {
      date: "March 21, 1990",
      time: "2:30 PM",
      location: "Los Angeles, CA, USA"
    },
    westernZodiac: {
      ...westernData,
      house: "5th House",
      degree: "15°42'",
      description: `As a ${westernData.sign}, you embody the dynamic energy of ${westernData.element} in its ${westernData.quality} expression. Your ruling planet ${westernData.ruler} bestows upon you a natural magnetism and drive that others find irresistible.`
    },
    chineseZodiac: {
      animal: chineseAnimals[Math.abs(hash * 5) % chineseAnimals.length],
      element: elements[Math.abs(hash * 6) % elements.length],
      year: 1990,
      traits: ['Ambitious', 'Loyal', 'Protective', 'Intuitive', 'Passionate'],
      compatibility: ['Dragon', 'Monkey', 'Rooster']
    },
    humanDesign: {
      type: hdTypes[Math.abs(hash * 8) % hdTypes.length],
      strategy: 'To respond',
      authority: 'Sacral Authority',
      profile: '3/5 Martyr/Heretic',
      definition: 'Split Definition',
      centers: ['Sacral', 'Solar Plexus', 'Spleen', 'G Center'],
      incarnationCross: 'Right Angle Cross of Service',
      description: 'Your Human Design reveals a powerful life force energy that thrives on meaningful work and authentic response to life\'s opportunities.'
    },
    personality: {
      overview: 'You are a natural born leader with profound intuitive abilities and an unwavering commitment to authenticity. Your soul carries the wisdom of ancient civilizations while your spirit burns with the fire of innovation and transformation.',
      coreTraits: ['Visionary', 'Intuitive', 'Magnetic', 'Transformative', 'Authentic', 'Passionate', 'Wise', 'Protective'],
      motivations: ['Self-actualization', 'Making a difference', 'Deep connections', 'Creative expression', 'Personal freedom'],
      fears: ['Losing authenticity', 'Being misunderstood', 'Stagnation', 'Betrayal', 'Mediocrity'],
      desires: ['Recognition', 'Love', 'Purpose', 'Adventure', 'Legacy'],
      archetype: 'The Mystic Leader'
    },
    lifeAreas: {
      career: {
        ideal: ['Creative Leadership', 'Healing Arts', 'Entrepreneurship', 'Consulting', 'Teaching/Mentoring', 'Technology Innovation'],
        strengths: ['Visionary thinking', 'Natural leadership', 'Intuitive decision-making', 'Inspirational communication', 'Strategic planning'],
        challenges: ['Impatience with details', 'Difficulty delegating', 'Perfectionist tendencies', 'Emotional decision-making'],
        advice: 'Trust your intuitive gifts while building practical systems. Your greatest success comes when you balance vision with execution.'
      },
      relationships: {
        style: 'Deep, transformative connections that honor authenticity and growth',
        needs: ['Emotional depth', 'Intellectual stimulation', 'Respect for independence', 'Shared values', 'Growth mindset'],
        gifts: ['Unwavering loyalty', 'Transformative love', 'Deep understanding', 'Healing presence', 'Inspiring support'],
        growth: ['Patience with others\' pace', 'Emotional regulation', 'Vulnerability', 'Clear communication']
      },
      health: {
        constitution: 'Strong vital force with sensitivity to environmental and emotional energies',
        vulnerabilities: ['Stress-related digestive issues', 'Emotional exhaustion', 'Sleep disruption', 'Tension headaches'],
        recommendations: ['Regular meditation', 'Nature immersion', 'Consistent sleep schedule', 'Emotional release practices', 'Nutrient-dense whole foods']
      },
      spirituality: {
        path: 'Mystical wisdom seeker with a calling to bridge ancient knowledge and modern understanding',
        practices: ['Meditation', 'Energy healing', 'Astrology study', 'Journaling', 'Sacred geometry'],
        lessons: ['Trust in divine timing', 'Balance of masculine/feminine energies', 'Service through authenticity', 'Power of vulnerability']
      }
    },
    strengths: [
      'Exceptional intuitive abilities and psychic sensitivity',
      'Natural leadership charisma that inspires others',
      'Deep capacity for transformation and reinvention',
      'Powerful manifestation abilities when aligned',
      'Authentic presence that creates safe spaces',
      'Strategic visionary thinking',
      'Emotional intelligence and empathy',
      'Creative problem-solving genius'
    ],
    challenges: [
      'Tendency to absorb others\' emotions and energies',
      'Perfectionist standards that create self-criticism',
      'Impatience with slower-paced individuals',
      'Difficulty maintaining work-life boundaries',
      'Resistance to authority and conventional systems',
      'Emotional intensity that can overwhelm others',
      'Need for control in uncertain situations'
    ],
    lifePurpose: {
      mission: 'To awaken others to their authentic power and guide collective transformation through wisdom, compassion, and innovative leadership.',
      gifts: ['Intuitive guidance', 'Transformational healing', 'Visionary leadership', 'Sacred wisdom keeper'],
      path: 'Your path involves mastering your own inner landscape first, then using your gifts to elevate others and contribute to positive global change.'
    },
    compatibility: {
      romantic: ['Scorpio', 'Pisces', 'Cancer', 'Virgo', 'Capricorn'],
      friendship: ['Aquarius', 'Gemini', 'Sagittarius', 'Leo', 'Aries'],
      business: ['Taurus', 'Virgo', 'Capricorn', 'Scorpio', 'Leo']
    },
    dailyGuidance: {
      energy: 'High creative and manifestation energy flowing through your solar plexus',
      focus: 'Trust your intuitive insights and take inspired action on creative projects',
      avoid: 'Overcommitting to others\' agendas or neglecting self-care practices',
      affirmation: 'I trust my inner wisdom and allow my authentic light to guide my path'
    }
  };
}

export default function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const profileData = generateEnhancedProfileData(resolvedParams.id);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const getElementIcon = (element: string) => {
    switch (element) {
      case 'Fire': return Flame;
      case 'Water': return Waves;
      case 'Earth': return Mountain;
      case 'Air': return Wind;
      default: return Star;
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Premium Header */}
        <motion.div 
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 lg:mb-0">
            <Link href="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return Home
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="zodiac-icon">
                {profileData.westernZodiac.sign.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-black text-white mb-2">
                  {profileData.name}'s Cosmic Blueprint
                </h1>
                <p className="text-xl text-white/70 font-light">
                  Your complete identity constellation revealed
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{profileData.birthDetails.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{profileData.birthDetails.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{profileData.birthDetails.location}</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className="glass-card p-4 hover:scale-105 transition-all duration-300 group">
              <Share2 className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            </button>
            <button className="glass-card p-4 hover:scale-105 transition-all duration-300 group">
              <Download className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            </button>
            <button className="gradient-button px-6 py-4 rounded-2xl font-semibold">
              Upgrade to Premium
            </button>
          </div>
        </motion.div>

        {/* Main Grid Layout */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 xl:grid-cols-4 gap-8"
        >
          {/* Left Sidebar - Quick Overview */}
          <div className="xl:col-span-1 space-y-6">
            {/* Life Purpose */}
            <motion.div variants={fadeInUp} className="glass-card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-gold-500 flex items-center justify-center">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Life Archetype</h3>
              <p className="text-purple-300 font-semibold mb-3">{profileData.personality.archetype}</p>
              <p className="text-white/70 text-sm leading-relaxed">{profileData.lifePurpose.mission.slice(0, 100)}...</p>
            </motion.div>

            {/* Core Traits */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Gem className="w-5 h-5 text-purple-400" />
                Core Essence
              </h3>
              <div className="flex flex-wrap gap-2">
                {profileData.personality.coreTraits.slice(0, 6).map((trait, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm text-white border border-purple-500/30 font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Daily Guidance */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-gold-400" />
                Today's Guidance
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-white/60">Energy:</span>
                  <p className="text-white/90 font-medium">{profileData.dailyGuidance.energy}</p>
                </div>
                <div>
                  <span className="text-white/60">Focus:</span>
                  <p className="text-white/90 font-medium">{profileData.dailyGuidance.focus}</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-r from-gold-500/10 to-purple-500/10 border border-gold-500/20">
                  <p className="text-gold-300 font-medium italic">"{profileData.dailyGuidance.affirmation}"</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Content - 2 columns */}
          <div className="xl:col-span-2 space-y-8">
            {/* Personality Overview */}
            <motion.div variants={fadeInUp} className="glass-card p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Brain className="w-8 h-8 text-blue-400" />
                Soul Essence
              </h2>
              <p className="text-lg text-white/90 leading-relaxed mb-8">{profileData.personality.overview}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-400" />
                    Motivations
                  </h4>
                  <ul className="space-y-2">
                    {profileData.personality.motivations.map((item, index) => (
                      <li key={index} className="text-white/80 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-pink-400" />
                    Desires
                  </h4>
                  <ul className="space-y-2">
                    {profileData.personality.desires.map((item, index) => (
                      <li key={index} className="text-white/80 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-yellow-400" />
                    Fears to Transform
                  </h4>
                  <ul className="space-y-2">
                    {profileData.personality.fears.map((item, index) => (
                      <li key={index} className="text-white/80 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Astrological Profile */}
            <motion.div variants={fadeInUp} className="glass-card p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Star className="w-8 h-8 text-gold-400" />
                Celestial Signature
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Western Zodiac */}
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      {React.createElement(getElementIcon(profileData.westernZodiac.element), { className: "w-5 h-5 text-white" })}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{profileData.westernZodiac.sign}</h3>
                      <p className="text-purple-300 text-sm">{profileData.westernZodiac.degree} in {profileData.westernZodiac.house}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                    <div>
                      <span className="text-white/60">Element:</span>
                      <p className="text-white font-medium">{profileData.westernZodiac.element}</p>
                    </div>
                    <div>
                      <span className="text-white/60">Quality:</span>
                      <p className="text-white font-medium">{profileData.westernZodiac.quality}</p>
                    </div>
                    <div>
                      <span className="text-white/60">Ruler:</span>
                      <p className="text-white font-medium">{profileData.westernZodiac.ruler}</p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-sm leading-relaxed">{profileData.westernZodiac.description}</p>
                </div>

                {/* Chinese Zodiac */}
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                      {profileData.chineseZodiac.animal.slice(0, 2)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{profileData.chineseZodiac.element} {profileData.chineseZodiac.animal}</h3>
                      <p className="text-blue-300 text-sm">{profileData.chineseZodiac.year}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-white/80 text-sm mb-2">Compatible Signs:</h4>
                    <div className="flex flex-wrap gap-1">
                      {profileData.chineseZodiac.compatibility.map((sign, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-500/20 rounded-lg text-xs text-blue-300">
                          {sign}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white/80 text-sm mb-2">Key Traits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {profileData.chineseZodiac.traits.map((trait, index) => (
                        <span key={index} className="px-2 py-1 bg-cyan-500/20 rounded-lg text-xs text-cyan-300">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Human Design */}
            <motion.div variants={fadeInUp} className="glass-card p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Wand2 className="w-8 h-8 text-purple-400" />
                Human Design Blueprint
              </h2>
              
              <div className="bg-gradient-to-r from-purple-500/10 to-gold-500/10 rounded-2xl p-6 border border-purple-500/20 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <h4 className="text-purple-300 font-bold">{profileData.humanDesign.type}</h4>
                    <p className="text-white/60 text-sm">Type</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-blue-300 font-bold">{profileData.humanDesign.profile}</h4>
                    <p className="text-white/60 text-sm">Profile</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-gold-300 font-bold">{profileData.humanDesign.authority}</h4>
                    <p className="text-white/60 text-sm">Authority</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-pink-300 font-bold">{profileData.humanDesign.definition}</h4>
                    <p className="text-white/60 text-sm">Definition</p>
                  </div>
                </div>
                
                <p className="text-white/90 leading-relaxed mb-4">{profileData.humanDesign.description}</p>
                
                <div>
                  <h4 className="text-white font-bold mb-2">Defined Centers:</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.humanDesign.centers.map((center, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300 border border-purple-500/30">
                        {center}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Life Areas */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Career */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-green-400" />
                  Career & Purpose
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white/80 text-sm mb-2">Ideal Paths:</h4>
                    <div className="flex flex-wrap gap-1">
                      {profileData.lifeAreas.career.ideal.map((path, index) => (
                        <span key={index} className="px-2 py-1 bg-green-500/20 rounded-lg text-xs text-green-300">
                          {path}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">{profileData.lifeAreas.career.advice}</p>
                </div>
              </div>

              {/* Relationships */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-pink-400" />
                  Love & Connection
                </h3>
                <div className="space-y-4">
                  <p className="text-white/90 text-sm leading-relaxed">{profileData.lifeAreas.relationships.style}</p>
                  <div>
                    <h4 className="text-white/80 text-sm mb-2">Relationship Gifts:</h4>
                    <ul className="space-y-1">
                      {profileData.lifeAreas.relationships.gifts.slice(0, 3).map((gift, index) => (
                        <li key={index} className="text-white/80 text-sm flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                          {gift}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Strengths & Challenges */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Strengths */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  Superpowers
                </h3>
                <ul className="space-y-3">
                  {profileData.strengths.slice(0, 6).map((strength, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80 text-sm">
                      <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Star className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="leading-relaxed">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                  Growth Edges
                </h3>
                <ul className="space-y-3">
                  {profileData.challenges.slice(0, 6).map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80 text-sm">
                      <div className="w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Target className="w-3 h-3 text-yellow-400" />
                      </div>
                      <span className="leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="xl:col-span-1 space-y-6">
            {/* Compatibility */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-400" />
                Compatibility
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white/80 text-sm mb-2">💕 Romantic:</h4>
                  <div className="flex flex-wrap gap-1">
                    {profileData.compatibility.romantic.slice(0, 3).map((sign, index) => (
                      <span key={index} className="px-2 py-1 bg-pink-500/20 rounded-lg text-xs text-pink-300">
                        {sign}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white/80 text-sm mb-2">🤝 Business:</h4>
                  <div className="flex flex-wrap gap-1">
                    {profileData.compatibility.business.slice(0, 3).map((sign, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-500/20 rounded-lg text-xs text-blue-300">
                        {sign}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Health & Wellness */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-400" />
                Wellness Blueprint
              </h3>
              <div className="space-y-3">
                <p className="text-white/90 text-sm leading-relaxed">{profileData.lifeAreas.health.constitution}</p>
                <div>
                  <h4 className="text-white/80 text-sm mb-2">Recommendations:</h4>
                  <ul className="space-y-1">
                    {profileData.lifeAreas.health.recommendations.slice(0, 3).map((rec, index) => (
                      <li key={index} className="text-white/80 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Spiritual Path */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-purple-400" />
                Sacred Path
              </h3>
              <div className="space-y-3">
                <p className="text-white/90 text-sm leading-relaxed">{profileData.lifeAreas.spirituality.path}</p>
                <div>
                  <h4 className="text-white/80 text-sm mb-2">Practices:</h4>
                  <div className="flex flex-wrap gap-1">
                    {profileData.lifeAreas.spirituality.practices.map((practice, index) => (
                      <span key={index} className="px-2 py-1 bg-purple-500/20 rounded-lg text-xs text-purple-300">
                        {practice}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4">Explore Further</h3>
              <div className="space-y-3">
                <Link
                  href="/couple"
                  className="block w-full p-3 rounded-xl bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-500/20 text-white hover:from-pink-500/30 hover:to-red-500/30 transition-all text-center text-sm font-medium"
                >
                  <Heart className="w-4 h-4 inline mr-2" />
                  Find Your Soulmate Match
                </Link>
                <button className="block w-full p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20 text-white hover:from-blue-500/30 hover:to-purple-500/30 transition-all text-center text-sm font-medium">
                  <Users className="w-4 h-4 inline mr-2" />
                  Team Dynamics Analysis
                </button>
                <button className="block w-full p-3 rounded-xl bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/20 text-white hover:from-green-500/30 hover:to-blue-500/30 transition-all text-center text-sm font-medium">
                  <BookOpen className="w-4 h-4 inline mr-2" />
                  Detailed PDF Report
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}