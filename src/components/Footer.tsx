import React from 'react';
import { Heart, Github, Linkedin, Stars, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: "https://github.com/wowgeekyboy",
      color: "hover:text-purple-400"
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left section - Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative inline-block"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-50 blur-lg"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="relative w-12 h-12 flex items-center justify-center bg-black rounded-lg border border-purple-500/30"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold text-xl">
                  SA
                </span>
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-purple-400" />
                <Stars className="absolute -bottom-1 -left-1 w-3 h-3 text-pink-400" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Center section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div 
              className="text-gray-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <span>Created and Designed by Sarvesh</span>
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                <Heart className="w-4 h-4 text-red-500 inline" />
              </motion.span>
            </motion.div>
            <p className="text-gray-400 text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </motion.div>

          {/* Right section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end space-x-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  boxShadow: "0 0 20px currentColor"
                }}
                className={`text-gray-400 ${link.color} p-2 rounded-full transition-colors duration-300 relative group`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.5, opacity: 0.4 }}
                  transition={{ duration: 0.3 }}
                />
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"></div>
    </footer>
  );
};

export default Footer;