'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'

interface ExperienceProps {
  onSectionChange: (section: string) => void
}

export default function Experience({ onSectionChange }: ExperienceProps) {
  const experiences = [
    {
      title: 'Business Intelligence & Product Intern',
      company: 'Amazon',
      location: 'Luxembourg',
      period: 'May 2026 – Present',
      description: [
        'Drive data-backed product strategy for Amazon’s EU operations, translating complex data structures into actionable insights.',
        'Own key performance metrics across business units, designing analytical frameworks to optimize regional product growth.'
      ],
      technologies: ['SQL', 'Python', 'BI Tools', 'Data Strategy', 'Product Analytics'],
      current: true
    },
    {
      title: 'Software Development Engineer – 2 (Product & Core Platform)',
      company: 'Adster',
      location: 'Bangalore, India',
      period: 'June 2024 – July 2025',
      description: [
        'Spearheaded optimization for Demand and Supply Side ad-server platforms, directly scaling client engagement by 30%.',
        'Engineered a custom Web SDK from proof-of-concept (POC) to deployment, generating an average 75%+ revenue uplift (and up to 145% maximum) for partner app publishers.',
        'Owned the end-to-end launch of an open-source framework wrapper, successfully achieving over 500 weekly active rollouts.'
      ],
      technologies: ['React', 'Golang', 'TypeScript', 'Node.js', 'AdTech', 'Web SDK'],
      current: false
    },
    {
      title: 'Frontend Engineering Lead',
      company: 'Arrowhead',
      location: 'Bangalore, India',
      period: 'Nov 2023 – May 2024',
      description: [
        'Led architecture and development of multiple client-facing analytical dashboards, improving cross-functional data transparency.',
        'Created and standardized a modular component library, reducing development lifecycle friction and speeding up product iterations.'
      ],
      technologies: ['React', 'TypeScript', 'Vite', 'Chakra UI', 'Node.js', 'PostgreSQL'],
      current: false
    },
    {
      title: 'Software Development Engineer (Full-time & Intern)',
      company: 'Mobile Premier League (MPL)',
      location: 'Bangalore, India',
      period: 'Jan 2022 – Sept 2023',
      description: [
        'Solely managed the system integration for SEO and distribution analytics of a high-traffic consumer product (striker.club), scaling core web visibility metrics.',
        'Developed cross-functional operations and QE testing dashboards using gRPC and Node.js, enabling rapid product feature deployment.',
        'Received a Full-Time Return Offer (PPO) following a highly selective 6-month product engineering internship.'
      ],
      technologies: ['Next.js', 'TypeScript', 'React Native', 'gRPC', 'Node.js', 'Strapi CMS'],
      current: false
    },
    {
      title: 'Software Engineering Intern',
      company: 'Glance / Shop101 (InMobi Group)',
      location: 'Bangalore, India',
      period: 'July 2022 – Dec 2022',
      description: [
        'Audited and optimized internal product panels, integrating secure MSFT SSO encryption and automating supply chain remittance workflows.',
        'Designed an automated system asset compression pipeline to scale webpage performance across massive consumer-facing e-commerce operations.'
      ],
      technologies: ['Vue.js', 'Next.js', 'TypeScript', 'Python', 'Express', 'AWS', 'CDN'],
      current: false
    },
    {
      title: 'GitHub Engineering Extern',
      company: 'GitHub',
      location: 'Remote',
      period: 'Feb 2022 – May 2022',
      description: [
        'Handpicked out of 14,000+ applicants to build core developer solutions alongside the GitHub Education team using Ruby on Rails.',
        'Engaged in GitHub India Engineering, concentrating on developer scenarios involving GitHub Actions, Packages, Insights, and Education.',
        'Streamlined the process of obtaining Decision Review (DR) approvals, optimizing process efficiency by 200%.'
      ],
      technologies: ['Ruby on Rails', 'HTML/CSS', 'PostgreSQL', 'Docker'],
      current: false
    },
    {
      title: 'Lead Software Developer (Practice School)',
      company: 'Practice School Division (BITS Pilani)',
      location: 'India',
      period: 'July 2021 – Dec 2021',
      description: [
        'Appointed as Lead Software Developer to architect a comprehensive Learning Management System serving over 3,000 students annually across 3 national campuses.'
      ],
      technologies: ['Next.js', 'Node.js', 'System Design', 'Database Architecture'],
      current: false
    },
    {
      title: 'GSoC Developer',
      company: 'Google Summer of Code \'21 (at JBoss Community)',
      location: 'Remote',
      period: 'June 2021 – Aug 2021',
      description: [
        'Selected among 45,000+ global applicants to scale API architecture for JBoss Community backend infrastructure targeted at emerging market education platforms.',
        'Enhanced APIs, produced a backend mechanism, added role-based authentication, and ensured all APIs had comprehensive documentation and testing.'
      ],
      technologies: ['NestJS', 'TypeScript', 'Docker', 'MongoDB'],
      current: false
    }
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey through various companies, technologies, and challenges that have shaped me into the developer I am today.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[23px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    {/* Current badge */}
                    {exp.current && (
                      <div className="inline-block bg-green-500/20 text-green-400 text-xs font-medium px-3 py-1 rounded-full mb-4">
                        Current Position
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end text-left sm:text-right shrink-0">
                        <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-1">
                          <Calendar size={14} className="text-blue-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-gray-400">
                          <MapPin size={14} className="text-blue-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
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
              const element = document.getElementById('skills')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
                onSectionChange('skills')
              }
            }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            View My Skills
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
