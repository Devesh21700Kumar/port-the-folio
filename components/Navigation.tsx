'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Home, User, Zap, Briefcase, Award, Mail } from 'lucide-react'

interface NavigationProps {
  currentSection: string
  onSectionChange: (section: string) => void
}

export default function Navigation({ currentSection, onSectionChange }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    
    // Setup intersection observer to highlight active section on scroll
    const sections = ['home', 'about', 'interdisciplinary', 'experience', 'skills', 'contact']
    const observers = sections.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          onSectionChange(id)
        }
      }, {
        rootMargin: '-30% 0px -60% 0px' // Trigger when section occupies the middle of screen
      })
      observer.observe(el)
      return { observer, el }
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observers.forEach(obs => {
        if (obs) obs.observer.unobserve(obs.el)
      })
    }
  }, [onSectionChange])

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'interdisciplinary', label: 'Approach', icon: Zap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      onSectionChange(sectionId)
    }
  }

  return (
    <>
      {/* Desktop Navigation (Top Bar) */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${
          scrolled ? 'bg-slate-950/60 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text"
            >
              Devesh.
            </motion.button>

            <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10">
              {navItems.map((item) => {
                const isActive = currentSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 relative ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeDesktopNav"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Floating Bottom Dock */}
      <motion.div
        initial={{ y: 100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed bottom-6 left-1/2 z-50 w-[90%] max-w-sm bg-slate-950/70 backdrop-blur-lg border border-white/10 rounded-full px-4 py-2 flex justify-between items-center md:hidden shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
      >
        {navItems.map((item) => {
          const isActive = currentSection === item.id
          const IconComponent = item.icon
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative p-3 rounded-full flex flex-col items-center justify-center transition-all duration-300"
            >
              {isActive && (
                <motion.div
                  layoutId="activeMobileNav"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full -z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <IconComponent
                size={20}
                className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400'}`}
              />
            </button>
          )
        })}
      </motion.div>
    </>
  )
}
