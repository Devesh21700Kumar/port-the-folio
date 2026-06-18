'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

interface ContactProps {
  onSectionChange: (section: string) => void
}

export default function Contact({ onSectionChange }: ContactProps) {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'deveshk2102@gmail.com',
      link: 'mailto:deveshk2102@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+33 7 49 03 48 61',
      link: 'tel:+33749034861'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Luxembourg',
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/Devesh21700Kumar',
      color: 'hover:bg-slate-700'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/devesh-kumar-529982198/',
      color: 'hover:bg-blue-600'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's connect! Whether you want to collaborate on product strategy, discuss business opportunities, or just say hello, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto w-full">
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-5 sm:p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300 w-full min-w-0"
              >
                <div className="p-4 bg-blue-500/20 rounded-full mb-4">
                  <info.icon className="text-blue-400" size={28} />
                </div>
                <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-white hover:text-blue-400 transition-colors duration-300 font-medium break-all text-sm w-full"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-white font-medium text-sm break-words w-full">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-xl font-bold text-white mb-6">Follow Me</h4>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 bg-white/10 backdrop-blur-sm rounded-full text-white transition-all duration-300 ${social.color}`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-8 border-t border-white/10"
        >
          <p className="text-gray-400">
            © 2026 Devesh Kumar. All rights reserved. Made with ❤️ using Next.js & TypeScript
          </p>
        </motion.div>
      </div>
    </section>
  )
}
