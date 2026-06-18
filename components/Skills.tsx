'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Award, Globe, Database, Cpu, Compass, BookOpen } from 'lucide-react'

interface SkillsProps {
  onSectionChange: (section: string) => void
}

export default function Skills({ onSectionChange }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<'tech' | 'business'>('tech')

  const techSkills = [
    { name: 'System Design', level: 90, icon: Compass, color: 'from-blue-400 to-indigo-500' },
    { name: 'React & Next.js', level: 95, icon: Code, color: 'from-cyan-400 to-blue-500' },
    { name: 'TypeScript & JavaScript', level: 95, icon: Code, color: 'from-yellow-400 to-orange-500' },
    { name: 'Node.js & Backend', level: 90, icon: Database, color: 'from-green-400 to-emerald-500' },
    { name: 'Python', level: 85, icon: Cpu, color: 'from-blue-500 to-cyan-500' },
    { name: 'gRPC & Microservices', level: 80, icon: Cpu, color: 'from-purple-500 to-pink-500' },
    { name: 'PostgreSQL & Databases', level: 85, icon: Database, color: 'from-indigo-500 to-purple-600' },
    { name: 'AWS & Cloud Architecture', level: 80, icon: Globe, color: 'from-orange-500 to-yellow-500' },
    { name: 'GCP (Google Cloud)', level: 75, icon: Globe, color: 'from-blue-400 to-cyan-500' },
    { name: 'MCP (Model Context Protocol)', level: 85, icon: Cpu, color: 'from-emerald-400 to-teal-500' }
  ]

  const businessSkills = [
    { name: 'Data & Product Strategy', level: 95, icon: Compass, color: 'from-blue-400 to-indigo-500' },
    { name: 'Team Management', level: 90, icon: BookOpen, color: 'from-cyan-400 to-blue-500' },
    { name: 'Corporate Finance', level: 80, icon: BookOpen, color: 'from-emerald-400 to-teal-500' },
    { name: 'Supply Chain Optimization', level: 85, icon: Database, color: 'from-orange-500 to-yellow-500' },
    { name: 'Organizational Behavior', level: 85, icon: BookOpen, color: 'from-purple-500 to-pink-500' }
  ]

  const certifications = [
    {
      name: 'Professional Scrum Master™ II',
      issuer: 'Scrum.org',
      year: '2024',
      link: 'https://www.scrum.org/certificates/1206327',
      badge: 'PSM II'
    },
    {
      name: 'McKinsey & Co. Forward Program',
      issuer: 'McKinsey & Company',
      year: '2024',
      link: 'https://www.credly.com/badges/83e7b516-ed31-403c-a913-0262c4c4435c/public_url',
      badge: 'Forward'
    }
  ]

  const languages = [
    { name: 'English', level: 'Native / Bilingual Proficiency', code: 'EN', color: 'from-blue-500 to-indigo-600' },
    { name: 'Hindi', level: 'Native / Bilingual Proficiency', code: 'HI', color: 'from-orange-500 to-red-600' },
    { name: 'French', level: 'Elementary (CEFR A2)', code: 'FR', color: 'from-blue-600 via-white to-red-600' }
  ]

  return (
    <section id="skills" className="py-16 px-4 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Skills & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A breakdown of my technical core stack, business intelligence expertise, and global certifications.
          </p>
        </motion.div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-900/60 backdrop-blur-md p-1.5 rounded-full border border-white/5 flex gap-1">
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 relative ${
                activeTab === 'tech' ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {activeTab === 'tech' && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full -z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              Technical Architecture
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 relative ${
                activeTab === 'business' ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {activeTab === 'business' && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full -z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              Business & Strategy
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="min-h-[300px] mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {(activeTab === 'tech' ? techSkills : businessSkills).map((skill, idx) => {
                const Icon = skill.icon
                return (
                  <div
                    key={idx}
                    className="bg-slate-900/40 backdrop-blur-md rounded-xl p-4 border border-white/5 hover:border-blue-500/20 transition-all duration-300 flex items-center gap-4"
                  >
                    <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-400 shrink-0">
                      <Icon size={18} />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-white truncate pr-2">{skill.name}</span>
                        <span className="text-xs text-blue-400 font-bold shrink-0">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Certifications and Languages Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications Panel */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="text-yellow-400" size={20} />
              Professional Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-slate-900/40 backdrop-blur-md rounded-xl p-4 border border-white/5 hover:border-blue-500/20 transition-all duration-300"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">{cert.issuer}</p>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20 shrink-0">
                      {cert.badge}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5">
                    <span className="text-[11px] text-slate-600">Issued: {cert.year}</span>
                    <span className="text-[11px] text-blue-400 group-hover:underline flex items-center gap-1 font-semibold">
                      Verify Credential →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Languages Panel */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Globe className="text-blue-400" size={20} />
              Languages spoken
            </h3>
            
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="bg-slate-900/40 backdrop-blur-md rounded-xl p-4 border border-white/5 hover:border-purple-500/20 transition-all duration-300 flex items-center gap-4"
                >
                  {/* Flag-like Emblem */}
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${lang.color} flex items-center justify-center font-bold text-white shadow-md text-xs shrink-0`}>
                    {lang.code}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-base font-bold text-white">{lang.name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('interdisciplinary')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
                onSectionChange('interdisciplinary')
              }
            }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 text-sm"
          >
            Explore My Approach
          </motion.button>
        </div>

      </div>
    </section>
  )
}
