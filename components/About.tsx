'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Phone, Mail, Globe } from 'lucide-react'

interface AboutProps {
  onSectionChange: (section: string) => void
}

export default function About({ onSectionChange }: AboutProps) {
  const education = [
    {
      degree: 'Master in Management (Grande École) - Business Administration & Management',
      school: 'HEC Paris (Jouy-en-Josas, France)',
      period: 'Aug 2025 – July 2027',
      description: 'Pursuing advanced business education focusing on strategy, corporate finance, and technology management.',
      bullets: [
        'HEC Business Game 2026: Secured 2nd Place globally in the Schneider Electric Strategy Challenge and 3rd Place globally in the EY-Parthenon Strategic Case Challenge.',
        'Honors: Winner of the Generative AI for Business Consulting Academy organized by Capgemini Invent.'
      ]
    },
    {
      degree: 'Bachelor of Engineering in Electrical, Electronics & Communications Engineering',
      school: 'BITS Pilani, India',
      period: 'Aug 2019 – June 2023',
      description: 'Graduated with honors in Electrical, Electronics & Communications Engineering.',
      bullets: [
        'Leadership: Founder of the ACM Student Chapter; managed a multi-disciplinary team to scale campus tech culture.',
        'Appointed as Lead Software Developer to architect a comprehensive Learning Management System serving over 3,000 students annually across 3 national campuses.'
      ]
    },
    {
      degree: '10+2, CBSE Secondary Education',
      school: 'Lakshmipat Singhania Academy, Kolkata',
      period: 'May 2017 – May 2019',
      description: 'Completed with 94.2% marks.'
    }
  ]

  const personalInfo = [
    { icon: Mail, label: 'Email', value: 'deveshk2102@gmail.com', link: 'mailto:deveshk2102@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+33 7 49 03 48 61', link: 'tel:+33749034861' },
    { icon: MapPin, label: 'Location', value: 'Luxembourg / France', link: null },
    { icon: Globe, label: 'Languages', value: 'English (Native), Hindi (Native), French (Elementary CEFR A2)', link: null }
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate Software Engineer, Product Strategist, and Business Generalist with 4+ years of engineering and strategic experience. 
            Currently pursuing my Master's in Management at HEC Paris Grande École and interning in Business Intelligence & Product at Amazon Luxembourg, I bridge the gap between technical execution and business strategy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-400" size={28} />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <span className="text-sm text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full shrink-0 ml-4">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-blue-400 font-medium mb-2">{edu.school}</p>
                  <p className="text-gray-300 text-sm mb-3">{edu.description}</p>
                  {edu.bullets && (
                    <ul className="space-y-2 mt-3 pl-1">
                      {edu.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-gray-300 text-xs flex items-start gap-2">
                          <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Personal Information</h3>
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <info.icon className="text-blue-400" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white hover:text-blue-400 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-6 text-center border border-blue-500/30">
              <div className="text-3xl font-bold text-white mb-2">4+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6 text-center border border-purple-500/30">
              <div className="text-3xl font-bold text-white mb-2">6+</div>
              <div className="text-sm text-gray-300">Domains Mastered</div>
            </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
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
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            View My Experience
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
