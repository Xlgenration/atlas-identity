'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, User, Calendar, Clock, MapPin, Sparkles, Loader2 } from 'lucide-react';
import Link from 'next/link';

interface AssessmentData {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
}

export default function Assessment() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [data, setData] = useState<AssessmentData>({
    name: '',
    birthDate: '',
    birthTime: '',
    birthPlace: ''
  });

  const router = useRouter();

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 3) {
      startAnalysis();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const startAnalysis = () => {
    setCurrentStep(4);
    setIsAnalyzing(true);
    
    // Simulate analysis time
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

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1: return data.name.trim().length > 0;
      case 2: return data.birthDate.length > 0;
      case 3: return data.birthTime.length > 0 && data.birthPlace.trim().length > 0;
      default: return true;
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-8">
      <div className="container mx-auto px-6 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold gradient-text mb-4">Your Identity Assessment</h1>
          <p className="text-white/70">We need a few details to create your personalized identity map</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-white/60">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-white/60">{Math.round((currentStep / totalSteps) * 100)}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="glass-card p-8 mb-8 min-h-[300px]">
          <AnimatePresence mode="wait">
            {/* Step 1: Name */}
            {currentStep === 1 && (
              <motion.div 
                {...fadeInUp} 
                key="step1" 
                className="space-y-6"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex p-3 rounded-2xl bg-purple-500/20 mb-4">
                    <User className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white mb-2">What's your name?</h2>
                  <p className="text-white/70">This will personalize your identity report</p>
                </div>
                
                <div className="space-y-4">
                  <label className="block text-white/80 font-medium">Full Name</label>
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                    autoFocus
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2: Birth Date */}
            {currentStep === 2 && (
              <motion.div 
                {...fadeInUp} 
                key="step2" 
                className="space-y-6"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex p-3 rounded-2xl bg-purple-500/20 mb-4">
                    <Calendar className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white mb-2">When were you born?</h2>
                  <p className="text-white/70">Your birth date is essential for astrological calculations</p>
                </div>
                
                <div className="space-y-4">
                  <label className="block text-white/80 font-medium">Birth Date</label>
                  <input
                    type="date"
                    value={data.birthDate}
                    onChange={(e) => setData({ ...data, birthDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500 focus:outline-none transition-colors"
                    autoFocus
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3: Time & Place */}
            {currentStep === 3 && (
              <motion.div 
                {...fadeInUp} 
                key="step3" 
                className="space-y-6"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex p-3 rounded-2xl bg-purple-500/20 mb-4">
                    <Clock className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white mb-2">Birth time & location</h2>
                  <p className="text-white/70">These details enable precise Human Design and astrological analysis</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-white/80 font-medium mb-2">Birth Time</label>
                    <input
                      type="time"
                      value={data.birthTime}
                      onChange={(e) => setData({ ...data, birthTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 font-medium mb-2">Birth Place</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="text"
                        value={data.birthPlace}
                        onChange={(e) => setData({ ...data, birthPlace: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="City, Country"
                        autoFocus
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Analysis */}
            {currentStep === 4 && (
              <motion.div 
                {...fadeInUp} 
                key="step4" 
                className="space-y-6"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-purple-500/20 mb-6">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-8 h-8 text-purple-400" />
                    </motion.div>
                  </div>
                  <h2 className="text-2xl font-semibold text-white mb-2">Analyzing your identity...</h2>
                  <p className="text-white/70 mb-8">Our AI is processing your astrological chart, human design, and personality profile</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <span className="text-white/80">Calculating astrological positions</span>
                      <Loader2 className="w-5 h-5 text-purple-400 animate-spin" />
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <span className="text-white/80">Generating Human Design chart</span>
                      <Loader2 className="w-5 h-5 text-purple-400 animate-spin" />
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <span className="text-white/80">Creating personality insights</span>
                      <Loader2 className="w-5 h-5 text-purple-400 animate-spin" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        {currentStep < 4 && (
          <div className="flex justify-between items-center">
            <button
              onClick={handleBack}
              className={`px-6 py-3 rounded-xl transition-all ${
                currentStep === 1
                  ? 'text-white/40 cursor-not-allowed'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
              disabled={currentStep === 1}
            >
              Back
            </button>
            
            <button
              onClick={handleNext}
              disabled={!isStepValid(currentStep)}
              className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                isStepValid(currentStep)
                  ? 'gradient-button text-white hover:scale-105'
                  : 'bg-white/10 text-white/40 cursor-not-allowed'
              }`}
            >
              {currentStep === 3 ? 'Start Analysis' : 'Next'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}