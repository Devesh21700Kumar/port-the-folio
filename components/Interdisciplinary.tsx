'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code, Users, TrendingUp, Palette, Globe, BookOpen, Zap } from 'lucide-react'

interface InterdisciplinaryProps {
  onSectionChange: (section: string) => void
}

export default function Interdisciplinary({ onSectionChange }: InterdisciplinaryProps) {
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null)

  const domains = [
    {
      id: 'tech',
      title: 'Tech & Development',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-500/30',
      skills: ['Full Stack Development', 'React/Next.js', 'TypeScript', 'Node.js', 'Python', 'AI/NLP']
    },
    {
      id: 'leadership',
      title: 'Leadership & Management',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30',
      skills: ['Team Leadership', 'Project Management', 'Agile/Scrum', 'Cross-functional Teams', 'Strategic Planning']
    },
    {
      id: 'product',
      title: 'Product Strategy',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      skills: ['Product Management', 'Business Analysis', 'Market Research', 'User Experience', 'Growth Strategy']
    },
    {
      id: 'creative',
      title: 'Creative & Design',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30',
      skills: ['UI/UX Design', 'Graphic Design', 'Content Creation', 'Gamification', 'Visual Storytelling']
    },
    {
      id: 'business',
      title: 'Business & Finance',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/20',
      borderColor: 'border-indigo-500/30',
      skills: ['Financial Markets', 'Investment Strategy', 'Business Development', 'Sales & Marketing', 'Entrepreneurship']
    },
    {
      id: 'academic',
      title: 'Academic Foundation',
      icon: BookOpen,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-500/30',
      skills: ['Computer Science', 'AI & Machine Learning', 'Management Studies', 'Research & Analysis', 'Strategic Thinking']
    }
  ]

  const intersections = [
    { domains: ['tech', 'product'], title: 'Technical Product Management' },
    { domains: ['leadership', 'business'], title: 'Business Leadership' },
    { domains: ['creative', 'tech'], title: 'Technical Design' },
    { domains: ['product', 'business'], title: 'Strategic Product Planning' },
    { domains: ['academic', 'tech'], title: 'Research-Driven Development' },
    { domains: ['leadership', 'product'], title: 'Product Leadership' }
  ]

  return (
    <section id="interdisciplinary" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Interdisciplinary</span> Approach
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            I bridge the gap between technology, business, and creativity. My diverse background allows me to approach problems 
            from multiple angles, creating innovative solutions that drive both technical excellence and business value.
          </p>
        </motion.div>

        {/* Central Hub */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-32 h-32 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20"
            >
              <div className="text-center">
                <Zap className="text-white mx-auto mb-2" size={32} />
                <p className="text-white font-bold text-sm">PRODUCT MANAGER</p>
                <p className="text-white/80 text-xs">(Me)</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Domain Circles */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredDomain(domain.id)}
              onHoverEnd={() => setHoveredDomain(null)}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${domain.bgColor} ${domain.borderColor} hover:shadow-2xl`}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${domain.color} flex items-center justify-center mb-4 mx-auto`}>
                  <domain.icon className="text-white" size={28} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3 text-center">{domain.title}</h3>
                
                {hoveredDomain === domain.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    {domain.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="text-gray-300 text-sm flex items-center gap-2"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${domain.color}`} />
                        {skill}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Intersection Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Where Domains Intersect</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {intersections.map((intersection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <p className="text-blue-400 font-semibold text-sm">{intersection.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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
            See My Experience
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
