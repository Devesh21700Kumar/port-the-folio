'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Database, Globe, Award } from 'lucide-react'

interface SkillsProps {
  onSectionChange: (section: string) => void
}

export default function Skills({ onSectionChange }: SkillsProps) {
  const [activeTechTab, setActiveTechTab] = useState(0)
  const [activeBusinessTab, setActiveBusinessTab] = useState(0)

  const techCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'JavaScript/TypeScript', level: 95, color: 'from-yellow-400 to-orange-500' },
        { name: 'Python', level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'Go', level: 85, color: 'from-cyan-500 to-blue-600' },
        { name: 'C/C++', level: 80, color: 'from-blue-600 to-purple-600' },
        { name: 'Java', level: 75, color: 'from-red-500 to-orange-500' }
      ]
    },
    {
      title: 'Frontend Technologies',
      icon: Globe,
      skills: [
        { name: 'React', level: 95, color: 'from-cyan-400 to-blue-500' },
        { name: 'Next.js', level: 90, color: 'from-gray-700 to-black' },
        { name: 'Vue.js', level: 80, color: 'from-green-400 to-green-600' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 90, color: 'from-cyan-500 to-blue-500' }
      ]
    },
    {
      title: 'Backend & Databases',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 90, color: 'from-green-500 to-green-700' },
        { name: 'Express.js', level: 85, color: 'from-gray-600 to-gray-800' },
        { name: 'PostgreSQL', level: 80, color: 'from-blue-500 to-blue-700' },
        { name: 'MongoDB', level: 75, color: 'from-green-400 to-green-600' },
        { name: 'Firebase', level: 70, color: 'from-yellow-500 to-orange-500' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: Award,
      skills: [
        { name: 'Git/GitHub', level: 95, color: 'from-gray-700 to-black' },
        { name: 'Docker', level: 80, color: 'from-blue-500 to-blue-700' },
        { name: 'AWS', level: 75, color: 'from-orange-500 to-yellow-500' },
        { name: 'Figma', level: 70, color: 'from-purple-500 to-pink-500' },
        { name: 'Postman', level: 85, color: 'from-orange-400 to-orange-600' }
      ]
    }
  ]

  const businessCategories = [
    {
      title: 'Strategy & Leadership',
      icon: Award,
      skills: [
        { name: 'Product Strategy & Roadmap', level: 90, color: 'from-green-500 to-emerald-600' },
        { name: 'Business Acumen & Case Analysis', level: 85, color: 'from-indigo-500 to-purple-600' },
        { name: 'Decision-Making Under Ambiguity', level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'Cross-Functional Team Management', level: 90, color: 'from-orange-500 to-red-500' }
      ]
    },
    {
      title: 'Marketing & Growth',
      icon: Globe,
      skills: [
        { name: 'Growth Hacking & Strategy', level: 85, color: 'from-pink-500 to-rose-600' },
        { name: 'User Acquisition & Funnel Analytics', level: 85, color: 'from-purple-500 to-pink-500' },
        { name: 'SEO & Distribution Analytics', level: 90, color: 'from-blue-500 to-indigo-500' },
        { name: 'Market Research & Brand Strategy', level: 80, color: 'from-green-400 to-teal-500' }
      ]
    },
    {
      title: 'Operations & Supply Chain',
      icon: Database,
      skills: [
        { name: 'Supply Chain Operations & Optimization', level: 85, color: 'from-orange-400 to-amber-600' },
        { name: 'Remittance Automation Workflows', level: 85, color: 'from-yellow-500 to-orange-600' },
        { name: 'Agile & Scrum Methodologies', level: 90, color: 'from-teal-500 to-emerald-600' },
        { name: 'Project & Operations Management', level: 85, color: 'from-red-500 to-orange-500' }
      ]
    }
  ]

  const certifications = [
    {
      name: 'Schneider Electric Strategy Challenge (2nd Place) & EY-Parthenon Strategic Case (3rd Place)',
      issuer: 'HEC Business Game 2026',
      year: '2026',
      link: null
    },
    {
      name: 'Winner: Generative AI for Business Consulting Academy',
      issuer: 'Capgemini Invent',
      year: '2025',
      link: null
    },
    {
      name: 'Professional Scrum Master™ II',
      issuer: 'Scrum.org',
      year: '2024',
      link: 'https://www.scrum.org/certificates/1206327'
    },
    {
      name: 'McKinsey & Co. Forward Program',
      issuer: 'McKinsey & Company',
      year: '2024',
      link: 'https://www.credly.com/badges/83e7b516-ed31-403c-a913-0262c4c4435c/public_url'
    },
    {
      name: 'Français CEFR A2',
      issuer: 'Inlingua',
      year: '2024',
      link: null
    },
    {
      name: 'Storytelling and influencing: Communicate with impact',
      issuer: 'Macquarie University (Coursera)',
      year: '2024',
      link: null
    },
    {
      name: 'Foundations of Project Management',
      issuer: 'Google (Coursera)',
      year: '2024',
      link: null
    },
    {
      name: 'Data Structures and Algorithms In C (DSA)',
      issuer: 'Udemy',
      year: '2020',
      link: null
    },
    {
      name: 'The Web Developer Bootcamp 2024',
      issuer: 'Udemy',
      year: '2020',
      link: null
    }
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, business acumen, and professional certifications across multiple domains.
          </p>
        </motion.div>

        {/* Side-by-side Skills Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-start">
          
          {/* Column 1: Technical Architecture (with animated tabs) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 flex flex-col min-h-[480px]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Code className="text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Technical Architecture</h3>
            </div>

            {/* Sub-tabs for Tech categories */}
            <div className="flex flex-wrap gap-1.5 mb-8 bg-slate-950/40 p-1.5 rounded-full border border-white/5 w-fit">
              {techCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTechTab(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 relative ${
                    activeTechTab === idx
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {activeTechTab === idx && (
                    <motion.div
                      layoutId="activeTechTabBubble"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {cat.title.replace(' Technologies', '').replace(' Databases', '').replace(' Languages', '').replace(' & Others', '')}
                </button>
              ))}
            </div>

            {/* Render selected Tech Category Skills */}
            <div className="space-y-5 flex-1 flex flex-col justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTechTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5 w-full"
                >
                  {techCategories[activeTechTab].skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Column 2: Business & Strategy (with animated tabs) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 flex flex-col min-h-[480px]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Award className="text-purple-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Business & Strategy</h3>
            </div>

            {/* Sub-tabs for Business categories */}
            <div className="flex flex-wrap gap-1.5 mb-8 bg-slate-950/40 p-1.5 rounded-full border border-white/5 w-fit">
              {businessCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveBusinessTab(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 relative ${
                    activeBusinessTab === idx
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {activeBusinessTab === idx && (
                    <motion.div
                      layoutId="activeBusinessTabBubble"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {cat.title.replace(' & Leadership', '').replace(' & Growth', '').replace(' & Supply Chain', '')}
                </button>
              ))}
            </div>

            {/* Render selected Business Category Skills */}
            <div className="space-y-5 flex-1 flex flex-col justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBusinessTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5 w-full"
                >
                  {businessCategories[activeBusinessTab].skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-purple-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3">
            <Award className="text-blue-400" size={32} />
            Certifications
          </h3>
          
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {certifications.map((cert, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 viewport={{ once: true }}
                 whileHover={{ scale: 1.05 }}
                 className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 ${cert.link ? 'cursor-pointer' : ''}`}
                 onClick={cert.link ? () => window.open(cert.link, '_blank') : undefined}
               >
                 <div className="flex justify-between items-start mb-3">
                   <h4 className="text-white font-semibold text-sm leading-relaxed">{cert.name}</h4>
                   <span className="text-blue-400 text-xs bg-blue-400/10 px-2 py-1 rounded-full">
                     {cert.year}
                   </span>
                 </div>
                 <p className="text-gray-400 text-xs">{cert.issuer}</p>
                 {cert.link && (
                   <p className="text-blue-400 text-xs mt-2">Click to verify →</p>
                 )}
               </motion.div>
             ))}
           </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Languages</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { lang: 'English', level: 'Native / Bilingual', color: 'from-blue-500 to-cyan-500' },
              { lang: 'Hindi', level: 'Native / Bilingual', color: 'from-green-500 to-green-600' },
              { lang: 'French', level: 'Elementary (CEFR A2)', color: 'from-purple-500 to-pink-500' }
            ].map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${language.color} flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-white font-bold text-lg">{language.lang[0]}</span>
                </div>
                <p className="text-white font-medium">{language.lang}</p>
                <p className="text-gray-400 text-sm">{language.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
                onSectionChange('contact')
              }
            }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
