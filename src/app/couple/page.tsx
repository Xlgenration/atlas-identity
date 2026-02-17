'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Heart, Users, TrendingUp, AlertTriangle, Sparkles, Star, Plus, RotateCcw } from 'lucide-react';

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

interface CompatibilityResult {
  overallScore: number;
  strengths: string[];
  challenges: string[];
  advice: string;
  categories: {
    communication: number;
    emotional: number;
    values: number;
    lifestyle: number;
  };
}

export default function CouplePage() {
  const [step, setStep] = useState<'input' | 'results'>('input');
  const [person1, setPerson1] = useState<PersonProfile>({
    name: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    westernZodiac: '',
    chineseZodiac: '',
    humanDesignType: '',
    coreTraits: []
  });
  const [person2, setPerson2] = useState<PersonProfile>({
    name: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    westernZodiac: '',
    chineseZodiac: '',
    humanDesignType: '',
    coreTraits: []
  });
  const [compatibility, setCompatibility] = useState<CompatibilityResult | null>(null);

  const generateCompatibility = (): CompatibilityResult => {
    // Mock compatibility calculation based on inputs
    const baseScore = 65 + Math.random() * 30; // 65-95%
    
    return {
      overallScore: Math.round(baseScore),
      strengths: [
        'Strong emotional connection and understanding',
        'Complementary communication styles',
        'Shared values and life goals',
        'Natural ability to support each other\'s growth',
        'Balance between independence and togetherness'
      ],
      challenges: [
        'Different approaches to decision-making may cause friction',
        'Need to work on expressing needs more directly',
        'Balancing social preferences - one more extroverted',
        'Different energy levels require compromise in activities',
        'Managing finances may require clear communication'
      ],
      advice: 'Your relationship has strong foundations with great potential for growth. Focus on open communication and celebrating your differences as strengths rather than obstacles.',
      categories: {
        communication: Math.round(70 + Math.random() * 25),
        emotional: Math.round(75 + Math.random() * 20),
        values: Math.round(80 + Math.random() * 15),
        lifestyle: Math.round(65 + Math.random() * 25)
      }
    };
  };

  const handleAnalyze = () => {
    const result = generateCompatibility();
    setCompatibility(result);
    setStep('results');
  };

  const handleReset = () => {
    setStep('input');
    setPerson1({
      name: '', birthDate: '', birthTime: '', birthPlace: '',
      westernZodiac: '', chineseZodiac: '', humanDesignType: '', coreTraits: []
    });
    setPerson2({
      name: '', birthDate: '', birthTime: '', birthPlace: '',
      westernZodiac: '', chineseZodiac: '', humanDesignType: '', coreTraits: []
    });
    setCompatibility(null);
  };

  const isFormValid = () => {
    return person1.name && person1.birthDate && person2.name && person2.birthDate;
  };

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
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <motion.h1 
            className="text-4xl font-bold mb-4"
            {...fadeInUp}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="gradient-text">Relationship Compatibility</span>
          </motion.h1>
          <motion.p 
            className="text-white/70 max-w-2xl mx-auto"
            {...fadeInUp}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Discover the dynamics between you and your partner through astrological and personality analysis
          </motion.p>
        </div>

        {step === 'input' && (
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Person 1 */}
              <motion.div variants={fadeInUp} className="glass-card p-6">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    1
                  </div>
                  First Person
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/80 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      value={person1.name}
                      onChange={(e) => setPerson1({ ...person1, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Enter name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 font-medium mb-2">Birth Date</label>
                      <input
                        type="date"
                        value={person1.birthDate}
                        onChange={(e) => setPerson1({ ...person1, birthDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 font-medium mb-2">Birth Time</label>
                      <input
                        type="time"
                        value={person1.birthTime}
                        onChange={(e) => setPerson1({ ...person1, birthTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 font-medium mb-2">Birth Place</label>
                    <input
                      type="text"
                      value={person1.birthPlace}
                      onChange={(e) => setPerson1({ ...person1, birthPlace: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="City, Country"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Person 2 */}
              <motion.div variants={fadeInUp} className="glass-card p-6">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    2
                  </div>
                  Second Person
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/80 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      value={person2.name}
                      onChange={(e) => setPerson2({ ...person2, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Enter name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 font-medium mb-2">Birth Date</label>
                      <input
                        type="date"
                        value={person2.birthDate}
                        onChange={(e) => setPerson2({ ...person2, birthDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 font-medium mb-2">Birth Time</label>
                      <input
                        type="time"
                        value={person2.birthTime}
                        onChange={(e) => setPerson2({ ...person2, birthTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 font-medium mb-2">Birth Place</label>
                    <input
                      type="text"
                      value={person2.birthPlace}
                      onChange={(e) => setPerson2({ ...person2, birthPlace: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="City, Country"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Analyze Button */}
            <motion.div variants={fadeInUp} className="text-center">
              <button
                onClick={handleAnalyze}
                disabled={!isFormValid()}
                className={`px-12 py-4 rounded-2xl font-semibold text-lg transition-all flex items-center gap-3 mx-auto ${
                  isFormValid()
                    ? 'gradient-button text-white hover:scale-105 shadow-2xl'
                    : 'bg-white/10 text-white/40 cursor-not-allowed'
                }`}
              >
                <Sparkles className="w-5 h-5" />
                Analyze Compatibility
              </button>
            </motion.div>
          </motion.div>
        )}

        {step === 'results' && compatibility && (
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            {/* Overall Score */}
            <motion.div variants={fadeInUp} className="text-center">
              <div className="glass-card p-8 mb-6">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {person1.name.charAt(0)}
                  </div>
                  <Heart className="w-8 h-8 text-pink-400" />
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    {person2.name.charAt(0)}
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-2">
                  {person1.name} & {person2.name}
                </h2>
                
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold gradient-text mb-2">
                    {compatibility.overallScore}%
                  </div>
                  <p className="text-white/70">Overall Compatibility</p>
                </div>

                {/* Category Scores */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(compatibility.categories).map(([category, score]) => (
                    <div key={category} className="text-center">
                      <div className="text-2xl font-semibold text-white mb-1">{score}%</div>
                      <div className="text-white/70 text-sm capitalize">{category}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Strengths */}
              <motion.div variants={fadeInUp} className="glass-card p-6">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  Relationship Strengths
                </h3>
                <ul className="space-y-4">
                  {compatibility.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Star className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-white/80 text-sm leading-relaxed">{strength}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Challenges */}
              <motion.div variants={fadeInUp} className="glass-card p-6">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                  Growth Opportunities
                </h3>
                <ul className="space-y-4">
                  {compatibility.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Plus className="w-3 h-3 text-yellow-400" />
                      </div>
                      <span className="text-white/80 text-sm leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Advice */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-400" />
                Relationship Advice
              </h3>
              <p className="text-white/80 leading-relaxed text-lg">{compatibility.advice}</p>
            </motion.div>

            {/* Actions */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 justify-center"
              >
                <RotateCcw className="w-4 h-4" />
                New Analysis
              </button>
              <button className="px-8 py-3 rounded-xl gradient-button text-white font-semibold hover:scale-105 transition-all flex items-center gap-2 justify-center">
                <Users className="w-4 h-4" />
                Save Report
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}