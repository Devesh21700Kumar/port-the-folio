'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Interdisciplinary from '@/components/Interdisciplinary'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState('home')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleSectionChange = (section: string) => {
    setCurrentSection(section)
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen">
      <Navigation currentSection={currentSection} onSectionChange={handleSectionChange} />
      
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero onSectionChange={handleSectionChange} />
          <About onSectionChange={handleSectionChange} />
          <Interdisciplinary onSectionChange={handleSectionChange} />
          <Experience onSectionChange={handleSectionChange} />
          <Skills onSectionChange={handleSectionChange} />
          <Contact onSectionChange={handleSectionChange} />
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
