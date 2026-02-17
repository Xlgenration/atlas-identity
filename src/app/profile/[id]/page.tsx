'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { use } from 'react';

interface ProfileData {
  name: string;
  westernZodiac: {
    sign: string;
    element: string;
    description: string;
  };
  humanDesign: {
    type: string;
    strategy: string;
    authority: string;
    description: string;
  };
  personality: {
    overview: string;
    coreTraits: string[];
    strengths: string[];
    challenges: string[];
  };
  lifePurpose: {
    mission: string;
    path: string;
  };
}

function generateProfileData(id: string): ProfileData {
  const westernSigns = [
    { sign: 'Aries', element: 'Fire', description: 'Natural leader with pioneering spirit and endless enthusiasm for new beginnings.' },
    { sign: 'Taurus', element: 'Earth', description: 'Grounded and determined, you build lasting foundations with patience and reliability.' },
    { sign: 'Gemini', element: 'Air', description: 'Curious communicator with a gift for connecting ideas and people across different worlds.' },
    { sign: 'Cancer', element: 'Water', description: 'Intuitive caretaker who creates emotional safety and nurtures deep connections.' },
    { sign: 'Leo', element: 'Fire', description: 'Creative leader who inspires others through authentic self-expression and generous heart.' },
    { sign: 'Virgo', element: 'Earth', description: 'Practical perfectionist with a gift for healing and improving systems around you.' }
  ];
  
  const hdTypes = [
    { type: 'Generator', strategy: 'To respond', authority: 'Sacral Authority', description: 'You have sustainable life force energy that thrives when engaged in work you love.' },
    { type: 'Projector', strategy: 'Wait for invitation', authority: 'Splenic Authority', description: 'You are here to guide others efficiently and see the bigger picture.' },
    { type: 'Manifestor', strategy: 'To initiate', authority: 'Emotional Authority', description: 'You are designed to initiate new projects and inform others of your actions.' },
    { type: 'Reflector', strategy: 'Wait a lunar cycle', authority: 'Lunar Authority', description: 'You reflect the health of your community and need time for major decisions.' }
  ];
  
  const hash = id.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  const name = id.split('-')[0] || 'User';
  const westernData = westernSigns[Math.abs(hash) % westernSigns.length];
  const hdData = hdTypes[Math.abs(hash * 2) % hdTypes.length];
  
  return {
    name: name.charAt(0).toUpperCase() + name.slice(1),
    westernZodiac: westernData,
    humanDesign: hdData,
    personality: {
      overview: `You are a natural born leader with profound intuitive abilities and an unwavering commitment to authenticity. Your soul carries deep wisdom while your spirit drives innovation and transformation. You have the rare gift of seeing potential in others and situations that most people miss.`,
      coreTraits: ['Visionary', 'Intuitive', 'Authentic', 'Transformative', 'Magnetic', 'Wise'],
      strengths: [
        'Exceptional intuitive abilities and deep insight into people',
        'Natural leadership that inspires and motivates others',
        'Ability to transform challenges into opportunities',
        'Strong sense of authenticity and integrity',
        'Creative problem-solving and innovative thinking',
        'Deep capacity for meaningful relationships'
      ],
      challenges: [
        'Tendency to be overly critical of yourself and others',
        'Impatience with slower-paced individuals or processes',
        'Difficulty maintaining work-life boundaries',
        'Sensitivity to negative environments or energy',
        'Tendency to overthink or second-guess decisions',
        'Challenge with delegating and trusting others'
      ]
    },
    lifePurpose: {
      mission: 'To awaken others to their authentic power and guide transformation through wisdom, compassion, and innovative leadership.',
      path: 'Your path involves mastering your own inner landscape first, then using your gifts to elevate others and contribute to positive change in the world.'
    }
  };
}

export default function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const profileData = generateProfileData(resolvedParams.id);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-8">
            ← Back to Home
          </Link>
          
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold">
                {profileData.westernZodiac.sign.slice(0, 2)}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold">
              {profileData.name}'s Identity Map
            </h1>
            
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Your complete personality blueprint and life guidance
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          
          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-6">Your Essence</h2>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              {profileData.personality.overview}
            </p>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Core Traits</h3>
              <div className="flex flex-wrap gap-3">
                {profileData.personality.coreTraits.map((trait, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-white/90 font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Astrology & Human Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Western Zodiac */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 rounded-2xl p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold mb-6">Zodiac Profile</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-300">
                    {profileData.westernZodiac.sign}
                  </h3>
                  <p className="text-white/60">{profileData.westernZodiac.element} Sign</p>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {profileData.westernZodiac.description}
                </p>
              </div>
            </motion.section>

            {/* Human Design */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 rounded-2xl p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold mb-6">Human Design</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-300">
                    {profileData.humanDesign.type}
                  </h3>
                  <p className="text-white/60">{profileData.humanDesign.strategy}</p>
                  <p className="text-white/60">{profileData.humanDesign.authority}</p>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {profileData.humanDesign.description}
                </p>
              </div>
            </motion.section>
            
          </div>

          {/* Strengths & Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Strengths */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 rounded-2xl p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold mb-6 text-green-300">Your Strengths</h2>
              <ul className="space-y-4">
                {profileData.personality.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-white/90 leading-relaxed">{strength}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Growth Areas */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 rounded-2xl p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold mb-6 text-yellow-300">Growth Areas</h2>
              <ul className="space-y-4">
                {profileData.personality.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-white/90 leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
            
          </div>

          {/* Life Purpose */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-500/20 text-center"
          >
            <h2 className="text-2xl font-bold mb-6">Your Life Purpose</h2>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              {profileData.lifePurpose.mission}
            </p>
            <p className="text-white/80 leading-relaxed">
              {profileData.lifePurpose.path}
            </p>
          </motion.section>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/couple"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold rounded-lg transition-all hover:scale-105 text-center"
            >
              Find Your Match
            </Link>
            <Link
              href="/"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all text-center"
            >
              Create Another Profile
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}