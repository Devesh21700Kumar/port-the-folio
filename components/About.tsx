'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Phone, Mail, Globe, Trophy, ExternalLink, Calendar } from 'lucide-react'

interface AboutProps {
  onSectionChange: (section: string) => void
}

export default function About({ onSectionChange }: AboutProps) {
  const education = [
    {
      degree: 'Master in Management (Grande École)',
      major: 'Business Administration & Management',
      school: 'HEC Paris (Jouy-en-Josas, France)',
      period: 'Aug 2025 – July 2027',
      bullets: [
        'HEC Business Game 2026: Secured 2nd Place globally in the Schneider Electric Strategy Challenge and 3rd Place globally in the EY-Parthenon Strategic Case Challenge.',
        'Winner of the Generative AI for Business Consulting Academy organized by Capgemini Invent.'
      ]
    },
    {
      degree: 'Bachelor of Engineering',
      major: 'Electronics & Communications Engineering',
      school: 'BITS Pilani (Birla Institute of Technology and Science), India',
      period: 'Aug 2019 – June 2023',
      bullets: [
        'Practice School Division (BITS Pilani): Appointed as Lead Developer to spearhead the end-to-end architecture of an enterprise Learning Management System serving 3,000+ students annually across 3 national campuses; directed a cross-functional squad of developers and aligned closely with faculty stakeholders to transform program delivery workflows.',
        'Founder of the ACM Student Chapter: Directed a multi-disciplinary team to secure partnerships, and execute technical events.'
      ]
    }
  ]

  const achievements = [
    {
      title: 'Google Summer of Code (GSoC \'21)',
      org: 'JBoss Community',
      selectivity: 'Selected among 45,000+ global applicants',
      description: 'Scaled API architecture for JBoss Community backend infrastructure targeted at an emerging market education platform.',
      color: 'from-orange-500/20 to-red-500/20 border-orange-500/30'
    },
    {
      title: 'GitHub India Engineering Externship',
      org: 'GitHub Education Team',
      selectivity: 'Handpicked out of 14,000+ applicants',
      description: 'Built core developer solutions alongside the GitHub Education team using Ruby on Rails.',
      color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/30'
    }
  ]

  const personalInfo = [
    { icon: Mail, label: 'Email', value: 'deveshk2102@gmail.com', link: 'mailto:deveshk2102@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Luxembourg', link: null },
    { icon: Globe, label: 'Languages', value: 'English (Native), Hindi (Native), French (CEFR A2)', link: null }
  ]

  return (
    <section id="about" className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I am a Software Developer and Product Strategist with a unique combination of deep engineering experience and strategic management studies at <span className="text-white font-semibold">HEC Paris</span>. Currently building data products at <span className="text-white font-semibold">Amazon Luxembourg</span>, I excel at building complex technical platforms and aligning them with enterprise needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="text-blue-400" size={24} />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-900/40 backdrop-blur-md rounded-xl p-6 border border-white/5 hover:border-blue-500/20 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <p className="text-sm text-blue-400 font-semibold">{edu.major}</p>
                    </div>
                    <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full w-fit shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-slate-300 font-medium text-sm mb-4">{edu.school}</p>
                  
                  <ul className="space-y-2.5">
                    {edu.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-slate-400 text-xs md:text-sm flex items-start gap-2.5 leading-relaxed">
                        <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Side Details Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Contact & Info</h3>
            
            <div className="bg-slate-900/40 backdrop-blur-md rounded-xl p-6 border border-white/5 space-y-4">
              {personalInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-lg transition-colors duration-200"
                >
                  <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-400">
                    <info.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white hover:text-blue-400 transition-colors duration-200 font-medium text-sm truncate block"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium text-sm truncate">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/40 backdrop-blur-md rounded-xl p-5 text-center border border-white/5 hover:border-blue-500/20 transition-all duration-300">
                <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">4+</p>
                <p className="text-xs text-slate-400 mt-1 font-medium">Years Dev Experience</p>
              </div>
              <div className="bg-slate-900/40 backdrop-blur-md rounded-xl p-5 text-center border border-white/5 hover:border-purple-500/20 transition-all duration-300">
                <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Top 3</p>
                <p className="text-xs text-slate-400 mt-1 font-medium">Global Strategy Finishes</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Selective Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-8 flex items-center gap-3 justify-center">
            <Trophy className="text-yellow-400" size={24} />
            Selective achievements & Open Source
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((ach, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className={`bg-gradient-to-br ${ach.color} backdrop-blur-md rounded-xl p-6 border transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h4 className="text-base md:text-lg font-bold text-white">{ach.title}</h4>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/20 shrink-0">
                      Selective
                    </span>
                  </div>
                  <p className="text-xs text-blue-400 font-semibold mb-3">{ach.org}</p>
                  <p className="text-xs text-slate-200 mb-1 font-medium italic">{ach.selectivity}</p>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed mt-2">{ach.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('experience')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
                onSectionChange('experience')
              }
            }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 text-sm"
          >
            View Work Experience
          </motion.button>
        </div>

      </div>
    </section>
  )
}
