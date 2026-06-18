'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react'

interface ExperienceProps {
  onSectionChange: (section: string) => void
}

export default function Experience({ onSectionChange }: ExperienceProps) {
  const experiences = [
    {
      title: 'Business Intelligence & Product',
      company: 'Amazon',
      location: 'Luxembourg',
      period: 'May 2026 – Present',
      metrics: ['GenAI Analytics', '11 Production Metrics', 'EU Supply Chain'],
      bullets: [
        'Owned product development for a core Generative AI-driven predictive analytics platform for EU operations, defining enterprise user personas, business usage requirements, and integrating native AI features.',
        'Delivered 11 production safety metrics for EU’s On Road Safety Dashboard, serving operations managers across the EU.',
        'Drove data investigations into regional logistics compliance and supply chain capacity infrastructure, isolating core operational anomalies to deliver strategic optimization walkthroughs for leadership.'
      ],
      technologies: ['GenAI', 'SQL', 'Python', 'Product Strategy', 'Data Analytics'],
      current: true
    },
    {
      title: 'Software Development Engineer – 2 (Product & Core Platform)',
      company: 'Adster',
      location: 'Bangalore, India',
      period: 'June 2024 – July 2025',
      metrics: ['30% Client Scale', '75%+ Avg Revenue Uplift (145% Max)'],
      bullets: [
        'Spearheaded optimization for Demand and Supply Side ad-server platforms, directly scaling client engagement by 30%.',
        'Engineered a custom Web SDK from proof-of-concept (POC) to deployment, generating an average 75%+ revenue uplift (and up to 145% maximum) for partner app publishers.'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'Golang', 'AdTech SDKs'],
      current: false
    },
    {
      title: 'Front-end Engineering Lead',
      company: 'Arrowhead (Generative AI Startup)',
      location: 'Bangalore, India',
      period: 'Nov 2023 – May 2024',
      metrics: ['Component Library POCs', 'High-Performance Dashboards'],
      bullets: [
        'Orchestrated the development of high-performance client-facing analytical dashboards using React, TypeScript, and PostgreSQL; built analytical views to provide stakeholders with critical product performance transparency.',
        'Designed and deployed a centralized, modular frontend component library to eliminate cross-application friction; engineered target proof-of-concepts (POCs) and custom browser extensions to rapidly validate new features.'
      ],
      technologies: ['React', 'TypeScript', 'PostgreSQL', 'Centralized UI Lib', 'Browser Extensions'],
      current: false
    },
    {
      title: 'Mobile Premier League (MPL)',
      company: 'SDE (Full-Time) & Intern',
      location: 'Bangalore, India',
      period: 'Jan 2022 – Sept 2023',
      metrics: ['100% Efficiency Gain', 'SEO Next.js SSR', 'Selective PPO Return Offer'],
      isDualRole: true,
      roles: [
        {
          title: 'Software Development Engineer (Full-Time)',
          period: 'Aug 2022 – Sept 2023',
          bullets: [
            'Sole web developer on a 31-person cross-functional team building and deploying a high-traffic consumer web app. Owned the SEO architecture (Next.js SSR) and automated user-acquisition tracking dashboards, driving organic search visibility and acquisition tracking.',
            'Handled the development of core operational infrastructure and analytical dashboards; designed and launched high-engagement features including real-time gamified leaderboards improving efficiency by 100%.'
          ]
        },
        {
          title: 'Software Engineering Intern',
          period: 'Jan 2022 – July 2022',
          bullets: [
            'Architected a centralized administration dashboard for an enterprise Zookeeper orchestration system using Next.js and Prisma; implemented role-based access controls and robust data validation pipelines to secure a selective Full-Time Return Offer (PPO).'
          ]
        }
      ],
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'gRPC', 'Zookeeper', 'Node.js'],
      current: false
    },
    {
      title: 'Software Engineering Intern',
      company: 'Glance / Shop101 (InMobi Group)',
      location: 'Bangalore, India',
      period: 'July 2022 – Dec 2022',
      metrics: ['30% CDN Speed Boost', 'MSFT SSO & RSA Encryption'],
      bullets: [
        'Hardened internal e-commerce administration networks using secure MSFT Single Sign-On (SSO) and RSA encryption algorithms while engineering automated daily financial remittance workflows.',
        'Migrated legacy cloud storage links to high-velocity Content Delivery Networks (CDNs), driving an immediate 30% boost in asset delivery performance across webpage operations.'
      ],
      technologies: ['MSFT SSO', 'RSA Encryption', 'AWS CDN', 'Vue.js', 'Express'],
      current: false
    }
  ]

  return (
    <section id="experience" className="py-16 px-4 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A track record of engineering scale and driving product results in top-tier tech startups and enterprise platforms.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[16px] md:left-1/2 transform md:-translate-x-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-slate-900 opacity-30"></div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                } items-start w-full`}
              >
                {/* Timeline Node Dot */}
                <div className="absolute left-[12px] md:left-1/2 transform md:-translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-slate-900 z-10 top-6"></div>

                {/* Card Container */}
                <div className={`ml-8 md:ml-0 w-[calc(100%-2rem)] md:w-[46%] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'
                }`}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className={`bg-slate-900/40 backdrop-blur-md rounded-xl p-5 border border-white/5 hover:border-blue-500/20 transition-all duration-300 ${
                      exp.current ? 'ring-1 ring-blue-500/30 border-blue-500/20' : ''
                    }`}
                  >
                    {/* Metrics/Impact Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {exp.current && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-green-400 bg-green-400/10 px-2 py-0.5 rounded border border-green-400/20">
                          Current
                        </span>
                      )}
                      {exp.metrics.map((metric, mIdx) => (
                        <span
                          key={mIdx}
                          className="text-[9px] sm:text-[10px] font-semibold text-blue-300 bg-blue-500/5 px-2 py-0.5 rounded border border-blue-500/10 flex items-center gap-1 shrink-0"
                        >
                          <Sparkles size={10} className="text-blue-400" />
                          {metric}
                        </span>
                      ))}
                    </div>

                    {/* Job Title & Company */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-3">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white leading-tight">{exp.title}</h3>
                        <p className="text-sm font-semibold text-blue-400 mt-0.5">{exp.company}</p>
                      </div>
                      
                      <div className="flex flex-col text-xs text-slate-500 shrink-0">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} className="text-slate-600" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 sm:justify-end mt-0.5">
                          <MapPin size={12} className="text-slate-600" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description Bullets */}
                    {!exp.isDualRole ? (
                      <ul className="space-y-2 mb-4">
                        {exp.bullets?.map((bullet, bIdx) => (
                          <li key={bIdx} className="text-slate-400 text-xs sm:text-sm flex items-start gap-2 leading-relaxed">
                            <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="space-y-4 mb-4 border-l border-white/5 pl-3 ml-1">
                        {exp.roles?.map((role, rIdx) => (
                          <div key={rIdx} className="relative">
                            <div className="absolute -left-[16px] top-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 ring-2 ring-slate-900" />
                            <h4 className="text-xs sm:text-sm font-bold text-slate-200">{role.title}</h4>
                            <span className="text-[10px] text-slate-500 block mb-1.5">{role.period}</span>
                            <ul className="space-y-1.5">
                              {role.bullets.map((b, bIdx) => (
                                <li key={bIdx} className="text-slate-400 text-[11px] sm:text-xs flex items-start gap-1.5 leading-relaxed">
                                  <span className="text-purple-400 mt-0.5 flex-shrink-0">•</span>
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-[9px] sm:text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-white/5 hover:text-white transition-colors duration-200"
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
        <div className="text-center mt-16">
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
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 text-sm"
          >
            View Skills & Certifications
          </motion.button>
        </div>

      </div>
    </section>
  )
}
