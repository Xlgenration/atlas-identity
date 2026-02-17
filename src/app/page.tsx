'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { User, Heart, Users, ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: User,
      title: "Individual",
      description: "Discover your unique identity through AI-powered analysis of astrology, human design, and personality science.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Couple",
      description: "Understand your relationship dynamics and compatibility with deep insights into both personalities.",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Users,
      title: "Team",
      description: "Optimize team dynamics and collaboration by understanding each member's strengths and communication style.",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-16 sm:py-24">
          {/* Hero Section */}
          <motion.div
            className="text-center max-w-5xl mx-auto mb-20"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Logo/Brand */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center mb-8"
            >
              <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/20">
                <Sparkles className="w-8 h-8 text-purple-400" />
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text">ATLAS</span>
              <br />
              <span className="text-white/90">Know Yourself.</span>
              <br />
              <span className="text-white/90">Understand Others.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-white/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
            >
              AI-powered identity mapping combining astrology, human design, and personality science
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={fadeInUp}
              className="mb-16"
            >
              <Link
                href="/assessment"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-2xl gradient-button shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group"
              >
                Discover Your Identity
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-8 text-white/50 text-sm"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Privacy First</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Science-Based</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group"
              >
                <div className="glass-card p-8 h-full text-center hover:scale-105 transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} bg-opacity-20 backdrop-blur-sm`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-purple-400 text-sm font-medium flex items-center justify-center gap-1">
                      Learn More
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-center mt-20"
          >
            <p className="text-white/60 mb-6">Ready to begin your journey of self-discovery?</p>
            <Link
              href="/assessment"
              className="text-purple-400 hover:text-purple-300 font-medium flex items-center justify-center gap-2 transition-colors"
            >
              Start Your Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}