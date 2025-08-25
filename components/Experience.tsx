'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'

interface ExperienceProps {
  onSectionChange: (section: string) => void
}

export default function Experience({ onSectionChange }: ExperienceProps) {
  const experiences = [
    {
      title: 'SDE - 2',
      company: 'Adster',
      location: 'Bengaluru',
      period: 'June 24 – July 25',
      description: [
        'Led frontend contributing to the focus of Hyperscale Ads Revenue; collaborated with cross-functional teams to design and implement web applications, improving system performance',
        'Developed and maintained APIs using Golang, ensuring data handling and seamless integration with front-end components',
        'Led the implementation of new features and resolved critical bugs, resulting in a 20% increase in user satisfaction & engagement'
      ],
      technologies: ['React', 'Golang', 'TypeScript', 'Node.js'],
      current: false
    },
    {
      title: 'Full Stack Engineer',
      company: 'Arrowhead',
      location: 'Bengaluru',
      period: 'Nov 23 – May 24',
      description: [
        'Worked on the Webapp (app.arrowhead.team) using React, Vite, and TypeScript with Chakra UI for the front and Node.js and PostgreSQL for the backend',
        'Created a frontend component library to streamline development and maintained consistency across the application',
        'Worked on various POCs (Proof of Concepts) and Chrome extensions to explore functionalities and enhance the product\'s capabilities'
      ],
      technologies: ['React', 'TypeScript', 'Vite', 'Chakra UI', 'Node.js', 'PostgreSQL'],
      current: false
    },
    {
      title: 'SDE – 1',
      company: 'Mobile Premier League',
      location: 'Bengaluru',
      period: 'Aug 22 – Sept 23',
      description: [
        'Developed striker Club with frontend in Nextjs and Typescript, integrating Google tag and headers for download and viewership metrics',
        'Handled SEO and analytics tools integration including i-frame development for the striker app; integrated strapi CMS with a dashboard',
        'Created an ops dashboard for the striker app, utilising GRPC, Typescript, and Nodejs for the backend',
        'Developed Bottom sheets for the Ultra Fantasy feature in the Mobile App using React Native'
      ],
      technologies: ['Next.js', 'TypeScript', 'React Native', 'GRPC', 'Strapi CMS'],
      current: false
    },
    {
      title: 'SDE - Intern',
      company: 'Glance (Inmobi)',
      location: 'Bengaluru',
      period: 'Jul 22 – Dec 22',
      description: [
        'Implemented MSFT SSO for all internal panels of Shop101 with RSA encryption for security purposes',
        'Made a daily remittance workflow and migrated all S3 links to CDN for improved performance by 30%',
        'Integrated product image compression using APIs and Python scripts on Shop101 web pages',
        'Contributed to Roposo\'s Grabter tool, adding country codes feature in Report Tool'
      ],
      technologies: ['Vue.js', 'Next.js', 'TypeScript', 'Python', 'Express', 'Amazon EC2'],
      current: false
    },
    {
      title: 'SDE - Intern',
      company: 'Mobile Premier League',
      location: 'Bengaluru',
      period: 'Jan 22 – Jul 22',
      description: [
        'Developed an admin dashboard for a zookeeper system using Next.js and Prisma',
        'Implemented role-based access, event logs, Joi validation for config files, and API documentation with Swagger'
      ],
      technologies: ['Next.js', 'Prisma', 'Joi', 'Swagger'],
      current: false
    },
    {
      title: 'GitHub Extern',
      company: 'GitHub',
      location: 'Remote',
      period: 'Feb 22 – May 22',
      description: [
        'Engaged in GitHub India Engineering, concentrating on developer scenarios involving GitHub Actions, GitHub Packages, GitHub Insights, and GitHub Education',
        'Streamlined the process of obtaining DR (Decision Review) approval, optimising efficiency by 200% by revamping the algorithms and logic'
      ],
      technologies: ['Ruby on Rails', 'HTML', 'CSS', 'PostgreSQL', 'Docker'],
      current: false
    },
    {
      title: 'Developer',
      company: 'Google Summer of Code \'21 (at JBOSS)',
      location: 'Remote',
      period: 'June 21 – August 21',
      description: [
        'Enhanced APIs and produced a backend mechanism for an education platform; each API had proper documentation and testing',
        'Added Role-based authentication to ensure the routes are secured'
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
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

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

                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm text-gray-400 mb-1">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <MapPin size={14} />
                          {exp.location}
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
