'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronDown, Github, Linkedin, Mail, FileText } from 'lucide-react'

interface HeroProps {
  onSectionChange: (section: string) => void
}

export default function Hero({ onSectionChange }: HeroProps) {
  const [text, setText] = useState('')
  const fullText = 'Business Intelligence & Product @ Amazon'
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 80)
    
    return () => clearInterval(timer)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      onSectionChange('about')
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 px-4">
      {/* Premium Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden bg-slate-950">
        <div className="absolute -inset-[10px] opacity-30">
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[80px] sm:blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-purple-600 rounded-full mix-blend-screen filter blur-[80px] sm:blur-[125px] [animation-delay:2s] animate-float" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-emerald-600 rounded-full mix-blend-screen filter blur-[85px] sm:blur-[110px] [animation-delay:4s] animate-float" />
        </div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 flex flex-col items-center">
        {/* Decorative Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-md"
        >
          <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase">Welcome to my space</span>
        </motion.div>

        {/* Profile Emblem / Monogram */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-white/10 bg-slate-900 flex items-center justify-center shadow-2xl">
              <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                DK
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Text */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-4"
        >
          Devesh Kumar
        </motion.h1>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-2xl md:text-3xl text-blue-400 font-semibold mb-6 h-8 sm:h-10"
        >
          {text}
          <span className="animate-pulse">|</span>
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed"
        >
          HEC Paris MiM Grande École Student & Amazon BI/Product Intern. Bridging the gap between engineering systems and business strategy.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center space-x-4 mb-8"
        >
          {[
            { href: 'https://github.com/Devesh21700Kumar', icon: Github, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/devesh-kumar-529982198/', icon: Linkedin, label: 'LinkedIn' },
            { href: 'mailto:deveshk2102@gmail.com', icon: Mail, label: 'Email' }
          ].map((soc, idx) => (
            <motion.a
              key={idx}
              href={soc.href}
              target={soc.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label={soc.label}
              className="p-3 bg-white/5 border border-white/10 hover:border-blue-500/40 rounded-full text-white hover:text-blue-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              <soc.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300"
          >
            Explore Portfolio
          </motion.button>
          
          <motion.a
            href="https://drive.google.com/drive/folders/1rwnG-zAmedQ49_Ue_kuQVVqYdaEHosit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-3.5 border border-slate-700 hover:border-blue-500/60 bg-slate-900/60 text-slate-300 hover:text-white font-semibold rounded-full backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FileText size={18} />
            View Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          onClick={scrollToAbout}
          className="text-slate-500 hover:text-white transition-colors duration-300"
          aria-label="Scroll Down"
        >
          <ChevronDown size={28} />
        </motion.button>
      </motion.div>
    </section>
  )
}
