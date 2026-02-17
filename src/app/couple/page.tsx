'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface PersonProfile {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
}

interface CompatibilityResult {
  overallScore: number;
  description: string;
  strengths: string[];
  challenges: string[];
  advice: string;
}

export default function CouplePage() {
  const [step, setStep] = useState<'input' | 'analyzing' | 'results'>('input');
  const [person1, setPerson1] = useState<PersonProfile>({
    name: '', birthDate: '', birthTime: '', birthPlace: ''
  });
  const [person2, setPerson2] = useState<PersonProfile>({
    name: '', birthDate: '', birthTime: '', birthPlace: ''
  });
  const [compatibility, setCompatibility] = useState<CompatibilityResult | null>(null);

  const generateCompatibility = (): CompatibilityResult => {
    const score = 75 + Math.random() * 20; // 75-95% range
    
    return {
      overallScore: Math.round(score),
      description: `${person1.name} and ${person2.name} share a deep, intuitive connection that transcends ordinary relationships. Your souls recognize each other on a fundamental level, creating a bond that feels both familiar and exciting.`,
      strengths: [
        'Natural emotional understanding and empathy',
        'Complementary personality traits that create balance',
        'Shared values and life vision that align beautifully',
        'Strong communication and conflict resolution potential',
        'Mutual support for personal growth and dreams'
      ],
      challenges: [
        'Different approaches to decision-making may create tension',
        'Need to maintain individual identities while growing together',
        'Balancing personal ambitions with relationship priorities'
      ],
      advice: 'Focus on open communication and celebrating your differences as strengths. Create regular rituals for connection and maintain your individual interests while building shared dreams together.'
    };
  };

  const handleAnalyze = () => {
    setStep('analyzing');
    
    setTimeout(() => {
      const result = generateCompatibility();
      setCompatibility(result);
      setStep('results');
    }, 3000);
  };

  const handleReset = () => {
    setStep('input');
    setPerson1({ name: '', birthDate: '', birthTime: '', birthPlace: '' });
    setPerson2({ name: '', birthDate: '', birthTime: '', birthPlace: '' });
    setCompatibility(null);
  };

  const isFormValid = () => {
    return person1.name.trim() && person1.birthDate && person2.name.trim() && person2.birthDate;
  };

  if (step === 'analyzing') {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold mb-4">
            Analyzing Your Connection
          </h2>
          <p className="text-white/70">
            Mapping the cosmic blueprint of your relationship...
          </p>
        </div>
      </div>
    );
  }

  if (step === 'results' && compatibility) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          
          {/* Header */}
          <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-8">
              ← Back to Home
            </Link>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold">
                  {person1.name.charAt(0)}
                </div>
                <span className="text-2xl">♥</span>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xl font-bold">
                  {person2.name.charAt(0)}
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold">
                {person1.name} & {person2.name}
              </h1>
              
              <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                {compatibility.overallScore}%
              </div>
              <p className="text-white/70">Compatibility Score</p>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-12">
            
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 rounded-2xl p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold mb-6">Your Connection</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                {compatibility.description}
              </p>
            </motion.section>

            {/* Strengths & Challenges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Strengths */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 rounded-2xl p-8 border border-white/10"
              >
                <h2 className="text-2xl font-bold mb-6 text-green-300">Relationship Strengths</h2>
                <ul className="space-y-4">
                  {compatibility.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-white/90 leading-relaxed">{strength}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>

              {/* Challenges */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 rounded-2xl p-8 border border-white/10"
              >
                <h2 className="text-2xl font-bold mb-6 text-yellow-300">Growth Opportunities</h2>
                <ul className="space-y-4">
                  {compatibility.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-white/90 leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
              
            </div>

            {/* Advice */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-500/20"
            >
              <h2 className="text-2xl font-bold mb-6">Relationship Guidance</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                {compatibility.advice}
              </p>
            </motion.section>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleReset}
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all"
              >
                New Analysis
              </button>
              <Link
                href="/"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all text-center"
              >
                Back to Home
              </Link>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // Input form (light theme like assessment)
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-8">
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Relationship Compatibility
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Discover the cosmic blueprint of your connection
          </p>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Person 1 */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6">First Person</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Name</label>
                  <input
                    type="text"
                    value={person1.name}
                    onChange={(e) => setPerson1({ ...person1, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    placeholder="Enter full name"
                    autoFocus
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Birth Date</label>
                    <input
                      type="date"
                      value={person1.birthDate}
                      onChange={(e) => setPerson1({ ...person1, birthDate: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Birth Time</label>
                    <input
                      type="time"
                      value={person1.birthTime}
                      onChange={(e) => setPerson1({ ...person1, birthTime: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Birth Place</label>
                  <input
                    type="text"
                    value={person1.birthPlace}
                    onChange={(e) => setPerson1({ ...person1, birthPlace: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    placeholder="City, Country"
                  />
                </div>
              </div>
            </div>

            {/* Person 2 */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Second Person</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Name</label>
                  <input
                    type="text"
                    value={person2.name}
                    onChange={(e) => setPerson2({ ...person2, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    placeholder="Enter full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Birth Date</label>
                    <input
                      type="date"
                      value={person2.birthDate}
                      onChange={(e) => setPerson2({ ...person2, birthDate: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Birth Time</label>
                    <input
                      type="time"
                      value={person2.birthTime}
                      onChange={(e) => setPerson2({ ...person2, birthTime: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Birth Place</label>
                  <input
                    type="text"
                    value={person2.birthPlace}
                    onChange={(e) => setPerson2({ ...person2, birthPlace: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    placeholder="City, Country"
                  />
                </div>
              </div>
            </div>
            
          </div>

          {/* Analyze Button */}
          <div className="text-center pt-8">
            <button
              onClick={handleAnalyze}
              disabled={!isFormValid()}
              className={`px-12 py-4 text-xl font-semibold rounded-lg transition-all ${
                isFormValid()
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg hover:scale-105'
                  : 'bg-white/10 text-white/40 cursor-not-allowed'
              }`}
            >
              Analyze Compatibility
            </button>
            
            {!isFormValid() && (
              <p className="text-white/50 text-sm mt-4">
                Please fill in names and birth dates for both people
              </p>
            )}
          </div>

        </motion.div>
      </div>
    </div>
  );
}