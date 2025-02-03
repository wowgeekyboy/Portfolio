import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Rocket, Stars } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <motion.div 
              className="relative w-14 h-14 flex items-center justify-center group perspective"
              whileHover={{ scale: 1.1, rotateY: 180 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-xl"></div>
              <motion.div
                className="relative bg-black rounded-xl p-3 border border-purple-500/20 backdrop-blur-sm"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <motion.span
                  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                  animate={{
                    textShadow: [
                      "0 0 8px rgba(168,85,247,0.4)",
                      "0 0 16px rgba(168,85,247,0.6)",
                      "0 0 8px rgba(168,85,247,0.4)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  SA
                </motion.span>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute -top-1 -right-1"
                >
                  <Stars className="w-3 h-3 text-purple-400" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-gray-300 px-3 py-2 text-sm font-medium group"
                >
                  <span className="relative z-10 group-hover:text-purple-400 transition-colors duration-300">
                    {item.name}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                    layoutId="nav-hover"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {[
              { icon: <Github size={20} />, href: "https://github.com/wowgeekyboy", color: "hover:text-purple-400" },
              { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/sarveshatalkar/", color: "hover:text-purple-400" },
              { icon: <Mail size={20} />, href: "mailto:sarveshatalkar@gmail.com", color: "hover:text-purple-400" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className={`relative text-gray-300 ${social.color} p-2 rounded-full transition-all duration-300 group`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.5, opacity: 0.4 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">{social.icon}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            className="md:hidden relative text-gray-300 hover:text-white p-2 rounded-lg group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100"
            />
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-md"
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05, x: 10 }}
                className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;