'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
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
    if (!isFormValid()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      const profileId = generateProfileId();
      router.push(`/profile/${profileId}`);
    }, 3000);
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

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Creating Your Profile
          </h2>
          <p className="text-gray-600">
            Analyzing your birth data and generating insights...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors mb-8">
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Calculate Your Identity Map
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Enter your birth details to generate your personalized analysis
          </p>
        </div>

        {/* Clean Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
        >
          <div className="space-y-8">
            
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                placeholder="Enter your full name"
                autoFocus
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Birth Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Birth Date
                </label>
                <input
                  type="date"
                  value={data.birthDate}
                  onChange={(e) => setData({ ...data, birthDate: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                />
              </div>

              {/* Birth Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Birth Time
                </label>
                <input
                  type="time"
                  value={data.birthTime}
                  onChange={(e) => setData({ ...data, birthTime: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                />
              </div>
              
            </div>

            {/* Birth Place */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Birth Place
              </label>
              <input
                type="text"
                value={data.birthPlace}
                onChange={(e) => setData({ ...data, birthPlace: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                placeholder="City, Country"
              />
              <p className="text-sm text-gray-500 mt-1">
                Enter the city where you were born
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={startAnalysis}
                disabled={!isFormValid()}
                className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-all duration-300 ${
                  isFormValid()
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.02]'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                Generate My Analysis
              </button>
              
              {!isFormValid() && (
                <p className="text-sm text-gray-500 text-center mt-3">
                  Please fill in all fields to continue
                </p>
              )}
            </div>

          </div>
        </motion.div>

        {/* Info Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 text-sm text-gray-500">
            <span>🔒 Your data is private</span>
            <span>⚡ Results in seconds</span>
            <span>✨ Detailed insights</span>
          </div>
        </div>

      </div>
    </div>
  );
}