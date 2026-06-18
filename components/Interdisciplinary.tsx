'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Code, TrendingUp, Briefcase, Sparkles, BookOpen, Compass } from 'lucide-react'

interface InterdisciplinaryProps {
  onSectionChange: (section: string) => void
}

export default function Interdisciplinary({ onSectionChange }: InterdisciplinaryProps) {
  const [selectedPillar, setSelectedPillar] = useState<number>(0)

  const pillars = [
    {
      title: 'Technical Foundation',
      subtitle: 'Deep Engineering Competency',
      icon: Code,
      badge: 'Systems & Architecture',
      description: 'Building high-performance client dashboards, custom Web SDKs, and enterprise microservices. Focus on Next.js/React, TypeScript, Python, and SQL.',
      color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400',
      highlights: ['Enterprise System Integration', 'Robust SDK Development', 'Centralized UI Lib Architectures']
    },
    {
      title: 'Product & Data Strategy',
      subtitle: 'Data-driven Decision Making',
      icon: TrendingUp,
      badge: 'BI & Product Analytics',
      description: 'Defining user personas, conducting capacity analytics, and translating data trends into actionable insights for operational managers and leadership.',
      color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400',
      highlights: ['GenAI Analytics Dashboards', '11+ Operations Metrics Delivered', 'EU Logistics Anomalies Investigation']
    },
    {
      title: 'Business & Leadership',
      subtitle: 'Enterprise Management Focus',
      icon: Briefcase,
      badge: 'MiM HEC Paris',
      description: 'Aligning multi-disciplinary engineering teams with strategic business objectives. Competitive case challenger at global business games.',
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
      highlights: ['2nd Place Schneider Strategy Challenge', '3rd Place EY-Parthenon Case Challenge', 'Agile & Scrum Orchestration']
    }
  ]

  return (
    <section id="interdisciplinary" className="py-16 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-10 w-56 h-56 bg-purple-500/5 rounded-full blur-3xl [animation-delay:3s] animate-float" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            The <span className="gradient-text">T-Shaped</span> Profile
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I bridge the gap between technical complexity and business growth, combining a deep software engineering foundation with high-level corporate strategy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          
          {/* Pillar Selector (Interactive List) */}
          <div className="md:col-span-5 space-y-4 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wider text-slate-500 text-xs flex items-center gap-2">
              <Compass size={14} />
              Core Competency Pillars
            </h3>
            
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon
              const isSelected = selectedPillar === idx
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedPillar(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                    isSelected
                      ? 'bg-slate-900 border-blue-500/40 shadow-lg shadow-blue-500/5'
                      : 'bg-slate-900/40 border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 ${
                    isSelected ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-slate-400'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className={`text-sm sm:text-base font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-500">{pillar.subtitle}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Interactive Showcase Card */}
          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPillar}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`h-full bg-gradient-to-br ${pillars[selectedPillar].color} backdrop-blur-md rounded-2xl p-6 md:p-8 border flex flex-col justify-between`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] uppercase font-extrabold tracking-wider bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-300">
                      {pillars[selectedPillar].badge}
                    </span>
                    <Sparkles size={18} className="text-yellow-400 animate-pulse" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                    {pillars[selectedPillar].title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-6">
                    {pillars[selectedPillar].description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <BookOpen size={12} />
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {pillars[selectedPillar].highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="text-slate-200 text-xs sm:text-sm flex items-start gap-2.5 leading-relaxed">
                          <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 text-xs text-slate-500 italic flex items-center gap-2">
                  <Compass size={12} className="text-slate-600 animate-spin-[20s]" />
                  Combined to deliver technical excellence and product value.
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
                onSectionChange('contact')
              }
            }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 text-sm"
          >
            Get in touch
          </motion.button>
        </div>

      </div>
    </section>
  )
}
