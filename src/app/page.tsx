'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { User, Heart, Users, ArrowRight, Sparkles, Zap, Shield, Star, Moon, Sun, Crown, Gem, Wand2 } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const features = [
    {
      icon: User,
      iconBg: Crown,
      title: "Individual Mastery",
      subtitle: "Discover Your Cosmic Blueprint",
      description: "Unlock the profound mysteries of your authentic self through our AI-powered synthesis of ancient wisdom and modern psychology.",
      color: "from-purple-500 via-violet-500 to-purple-600",
      accent: "purple",
      highlights: ["Astrological Chart Analysis", "Human Design Mapping", "Personality Insights", "Life Purpose Guidance"],
      href: "/assessment"
    },
    {
      icon: Heart,
      iconBg: Gem,
      title: "Sacred Union",
      subtitle: "Relationship Alchemy",
      description: "Transform your relationship through deep understanding of energetic compatibility and soul-level connection patterns.",
      color: "from-pink-500 via-rose-500 to-red-500",
      accent: "pink",
      highlights: ["Compatibility Analysis", "Relationship Dynamics", "Communication Patterns", "Growth Opportunities"],
      href: "/couple"
    },
    {
      icon: Users,
      iconBg: Wand2,
      title: "Collective Harmony",
      subtitle: "Team Consciousness",
      description: "Elevate team performance by understanding the unique energetic signature and gifts each member brings to the collective.",
      color: "from-blue-500 via-cyan-500 to-teal-500",
      accent: "blue",
      highlights: ["Team Dynamics", "Leadership Styles", "Collaboration Patterns", "Collective Purpose"],
      href: "/assessment"
    }
  ];

  const socialProof = [
    { icon: Star, label: "Trusted by 10,000+ souls", value: "10K+" },
    { icon: Sparkles, label: "Identity revelations delivered", value: "50K+" },
    { icon: Shield, label: "Privacy-first approach", value: "100%" },
  ];

  return (
    <div ref={ref} className="min-h-screen overflow-hidden">
      {/* Ethereal Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          style={{ y, opacity }}
          className="absolute top-10 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]), opacity }}
          className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]), opacity }}
          className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-gold-500/10 to-yellow-500/10 rounded-full blur-2xl"
        />
      </div>

      {/* Premium Navigation */}
      <motion.nav 
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="glass-card px-8 py-4 rounded-full backdrop-blur-2xl border-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-gold-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">ATLAS</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              <Link href="/assessment" className="text-white/80 hover:text-white transition-colors">Analysis</Link>
              <Link href="/couple" className="text-white/80 hover:text-white transition-colors">Couples</Link>
              <div className="w-px h-6 bg-white/20" />
              <Link href="/assessment" className="gradient-button px-6 py-2 rounded-full text-sm font-bold">
                Get Started
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Link href="/assessment" className="gradient-button px-4 py-2 rounded-full text-sm font-bold">
                Start
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-32 sm:py-40">
          {/* Hero Section */}
          <motion.div
            className="text-center max-w-6xl mx-auto mb-32"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Mystical Logo/Brand */}
            <motion.div
              variants={scaleIn}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex items-center justify-center mb-12"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-gold-500 rounded-3xl blur opacity-75"></div>
                <div className="relative glass-card p-6 rounded-3xl">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-12 h-12 text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-gold-400 bg-clip-text" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Epic Headline */}
            <motion.div variants={fadeInUp} className="mb-12">
              <motion.h1
                className="text-7xl sm:text-9xl lg:text-[12rem] font-black mb-8 leading-[0.8] tracking-tighter"
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="gradient-text block relative">
                  ATLAS
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-gold-400 to-yellow-300 rounded-full blur-sm opacity-60"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </span>
              </motion.h1>
              <motion.div 
                className="text-4xl sm:text-7xl lg:text-8xl font-extralight text-white/95 leading-[0.9] tracking-tight space-y-2"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="block"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                >
                  Know Yourself.
                </motion.div>
                <motion.div 
                  className="block"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  Understand Others.
                </motion.div>
                <motion.div 
                  className="block text-4xl sm:text-6xl lg:text-7xl text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-gold-400 bg-clip-text font-bold mt-4 tracking-tight"
                  animate={{ 
                    opacity: [0.8, 1, 0.8],
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ 
                    opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 },
                    backgroundPosition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Transform Everything.
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Luxury Subtitle */}
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl lg:text-4xl text-white/85 mb-20 max-w-5xl mx-auto font-light leading-relaxed tracking-wide"
            >
              <span className="block mb-2">Premium AI-powered identity mapping that combines</span>
              <span className="text-transparent bg-gradient-to-r from-purple-300 via-blue-300 to-gold-300 bg-clip-text font-medium">
                the mystical wisdom of astrology, the precision of human design,
              </span>
              <span className="block mt-2">and the depth of personality science.</span>
            </motion.p>

            {/* Premium CTA */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="mb-24"
            >
              <div className="relative inline-block">
                {/* Glowing background effect */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-blue-500 to-gold-500 rounded-full opacity-30 blur-xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                  }}
                />
                
                <Link
                  href="/assessment"
                  className="group relative inline-flex items-center px-16 py-8 text-2xl font-black text-white rounded-full gradient-button shadow-2xl hover:shadow-purple-500/60 transition-all duration-500 tracking-wide"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="mr-4"
                  >
                    <Sparkles className="w-8 h-8" />
                  </motion.div>
                  Begin Your Transformation
                  <motion.div
                    className="ml-4"
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-8 h-8" />
                  </motion.div>
                  
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
                    animate={{ x: [-100, 300] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </Link>
              </div>
              
              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.8 }}
                className="text-white/60 text-lg font-medium mt-6 tracking-wide"
              >
                <span className="text-gold-300">✨</span> No credit card required <span className="text-purple-300 mx-2">•</span> 
                <span className="text-gold-300">🔒</span> Privacy guaranteed <span className="text-purple-300 mx-2">•</span> 
                <span className="text-gold-300">⚡</span> Instant results
              </motion.p>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
            >
              {socialProof.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500/20 to-gold-500/20 border border-purple-500/30 mb-4">
                    <item.icon className="w-6 h-6 text-purple-300" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{item.value}</div>
                  <div className="text-white/60 text-sm font-medium">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-purple-400" />
                <span className="font-medium">Military-Grade Privacy</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="font-medium">Advanced AI Engine</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-gold-400" />
                <span className="font-medium">Mystical Precision</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Premium Feature Cards */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-32"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link href={feature.href} className="block h-full">
                <div className="glass-card p-12 h-full text-center relative overflow-hidden hover:scale-105 hover:-translate-y-2 transition-all duration-700 cursor-pointer group">
                  {/* Enhanced background decoration */}
                  <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${feature.color} opacity-15 rounded-full blur-3xl group-hover:opacity-25 group-hover:scale-110 transition-all duration-700`}></div>
                  <div className={`absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr ${feature.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 group-hover:scale-110 transition-all duration-700`}></div>
                  
                  {/* Premium Icon Stack */}
                  <div className="relative mb-10">
                    <motion.div 
                      className={`inline-flex p-8 rounded-3xl bg-gradient-to-br ${feature.color} bg-opacity-20 backdrop-blur-xl border border-${feature.accent}-500/30 relative shadow-2xl`}
                      whileHover={{ scale: 1.1, rotateY: 10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {/* Animated glow effect */}
                      <motion.div 
                        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{ 
                          background: [
                            'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                            'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                            'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      
                      {/* Decorative corner elements */}
                      <feature.iconBg className="absolute -top-1 -right-1 w-5 h-5 text-gold-400/60" />
                      <motion.div
                        className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-purple-400 to-gold-400 rounded-full"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      
                      <feature.icon className="w-16 h-16 text-white relative z-10 drop-shadow-2xl" />
                      
                      {/* Inner glow */}
                      <div className="absolute inset-2 rounded-3xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-2xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <h4 className={`text-lg font-semibold text-${feature.accent}-300`}>
                      {feature.subtitle}
                    </h4>
                    <p className="text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Feature Highlights */}
                  <div className="space-y-2 mb-6">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                        <div className={`w-1.5 h-1.5 bg-${feature.accent}-400 rounded-full`}></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More */}
                  <div className="mt-4">
                    <div className={`text-${feature.accent}-400 font-semibold flex items-center justify-center gap-2 cursor-pointer hover:gap-3 transition-all duration-300`}>
                      Explore Deep
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Final CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center glass-card p-12 rounded-3xl max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-gold-500/20 border border-purple-500/30 text-sm font-medium text-purple-300 mb-4">
                <Moon className="w-4 h-4" />
                Your Journey Begins Now
                <Sun className="w-4 h-4" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to unlock the mysteries of your true self?
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Join thousands who have discovered their authentic path through our premium platform.
            </p>
            <Link
              href="/assessment"
              className="inline-flex items-center gap-3 px-10 py-4 text-lg font-bold gradient-button rounded-2xl shadow-2xl hover:shadow-purple-500/40 transition-all duration-500 group"
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              Start Your Mystical Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
        
        {/* Premium Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 border-t border-white/10 py-16"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-gold-500 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-2xl font-black text-white tracking-tight">ATLAS</span>
                </div>
                <p className="text-white/70 text-lg leading-relaxed max-w-md">
                  Premium AI-powered identity mapping platform combining ancient wisdom with modern science.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-4">Platform</h3>
                <div className="space-y-3">
                  <Link href="/assessment" className="block text-white/60 hover:text-white transition-colors">Individual Analysis</Link>
                  <Link href="/couple" className="block text-white/60 hover:text-white transition-colors">Couple Compatibility</Link>
                  <Link href="#" className="block text-white/60 hover:text-white transition-colors">Team Dynamics</Link>
                  <Link href="#" className="block text-white/60 hover:text-white transition-colors">Premium Reports</Link>
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-4">Company</h3>
                <div className="space-y-3">
                  <Link href="#" className="block text-white/60 hover:text-white transition-colors">About</Link>
                  <Link href="#" className="block text-white/60 hover:text-white transition-colors">Privacy</Link>
                  <Link href="#" className="block text-white/60 hover:text-white transition-colors">Terms</Link>
                  <Link href="#" className="block text-white/60 hover:text-white transition-colors">Support</Link>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
              <p className="text-white/50 text-sm mb-4 md:mb-0">
                © 2024 ATLAS Identity Platform. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Privacy Protected</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Star className="w-4 h-4 text-gold-400" />
                  <span>Premium Quality</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span>AI Powered</span>
                </div>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}