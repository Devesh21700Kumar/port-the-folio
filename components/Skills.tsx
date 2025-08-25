'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Award } from 'lucide-react'

interface SkillsProps {
  onSectionChange: (section: string) => void
}

export default function Skills({ onSectionChange }: SkillsProps) {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'JavaScript/TypeScript', level: 95, color: 'from-yellow-400 to-orange-500' },
        { name: 'Python', level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'C++', level: 80, color: 'from-blue-600 to-purple-600' },
        { name: 'Java', level: 75, color: 'from-red-500 to-orange-500' },
        { name: 'C', level: 70, color: 'from-blue-400 to-blue-600' }
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
    },
    {
      title: 'Business & Strategy',
      icon: Award,
      skills: [
        { name: 'Product Strategy', level: 85, color: 'from-green-500 to-emerald-600' },
        { name: 'Business Analysis', level: 80, color: 'from-indigo-500 to-purple-600' },
        { name: 'Project Management', level: 75, color: 'from-blue-500 to-cyan-500' },
        { name: 'Agile/Scrum', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'Strategic Planning', level: 80, color: 'from-purple-500 to-pink-500' }
      ]
    }
  ]

  const certifications = [
    {
      name: 'Professional Scrum Master™ II',
      issuer: 'Scrum.org',
      year: '2024',
      link: 'https://www.scrum.org/certificates/1206327'
    },
    {
      name: 'McKinsey.org Forward Program',
      issuer: 'McKinsey & Company',
      year: '2024',
      link: 'https://www.credly.com/badges/83e7b516-ed31-403c-a913-0262c4c4435c/public_url'
    },
    {
      name: 'Français A1 & A2',
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

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <category.icon className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
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
              { lang: 'English', level: 'Proficient', color: 'from-blue-500 to-cyan-500' },
              { lang: 'Hindi', level: 'Native', color: 'from-green-500 to-green-600' },
              { lang: 'French', level: 'Elementary', color: 'from-purple-500 to-pink-500' }
            ].map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${language.color} flex items-center justify-center mb-3`}>
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
