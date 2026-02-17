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

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-20 sm:py-32">
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
            <motion.div variants={fadeInUp} className="mb-8">
              <motion.h1
                className="text-6xl sm:text-8xl lg:text-9xl font-black mb-6 leading-[0.85]"
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="gradient-text block">ATLAS</span>
              </motion.h1>
              <motion.div 
                className="text-4xl sm:text-6xl lg:text-7xl font-light text-white/90 leading-tight"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <div className="block">Know Yourself.</div>
                <div className="block">Understand Others.</div>
                <div className="block text-3xl sm:text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-purple-400 to-gold-400 bg-clip-text font-medium mt-2">
                  Transform Everything.
                </div>
              </motion.div>
            </motion.div>

            {/* Luxury Subtitle */}
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl text-white/80 mb-16 max-w-4xl mx-auto font-light leading-relaxed"
            >
              Premium AI-powered identity mapping that combines the mystical wisdom of astrology, 
              the precision of human design, and the depth of personality science.
            </motion.p>

            {/* Premium CTA */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="mb-20"
            >
              <Link
                href="/assessment"
                className="group inline-flex items-center px-12 py-6 text-xl font-bold text-white rounded-3xl gradient-button shadow-2xl hover:shadow-purple-500/50 transition-all duration-500"
              >
                Begin Your Transformation
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </Link>
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
                <div className="glass-card p-10 h-full text-center relative overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer">
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Icon Stack */}
                  <div className="relative mb-8">
                    <div className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${feature.color} bg-opacity-20 backdrop-blur-sm border border-${feature.accent}-500/30 relative`}>
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <feature.iconBg className="absolute top-2 right-2 w-4 h-4 text-gold-400/50" />
                      <feature.icon className="w-12 h-12 text-white relative z-10" />
                    </div>
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
      </div>
    </div>
  );
}