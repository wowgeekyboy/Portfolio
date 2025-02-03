import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Rocket, Star } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  // Comet effect
  useEffect(() => {
    const createComet = () => {
      const comet = document.createElement('div');
      comet.className = 'absolute w-2 h-2 bg-purple-400 rounded-full';
      comet.style.left = `${Math.random() * 100}vw`;
      comet.style.top = '0';
      comet.style.transform = 'rotate(-45deg)';
      comet.style.boxShadow = '0 0 20px #a855f7, 0 0 40px #a855f7';
      
      const tail = document.createElement('div');
      tail.className = 'absolute h-20 w-1 bg-gradient-to-t from-transparent to-purple-400 -z-10';
      comet.appendChild(tail);

      document.getElementById('hero-section')?.appendChild(comet);

      const animation = comet.animate([
        { transform: 'translateY(0) translateX(0) rotate(-45deg)' },
        { transform: 'translateY(100vh) translateX(100vw) rotate(-45deg)' }
      ], {
        duration: 2000,
        easing: 'linear'
      });

      animation.onfinish = () => comet.remove();
    };

    const interval = setInterval(createComet, 2000);
    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div id="hero-section" className="absolute inset-0 overflow-hidden">
        <ParticlesBackground />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="space-y-6"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-gradient">
              Sarvesh
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center items-center space-x-2 text-purple-400"
          >
            <Terminal className="animate-pulse" size={24} />
            <h2 className="text-2xl md:text-3xl font-light tracking-wide">
              <span className="text-gradient animate-text">Full Stack Developer</span>
            </h2>
            <Rocket className="animate-bounce" size={24} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto text-gray-300 text-lg font-light"
          >
            Building scalable web applications with modern technologies.
            Turning complex problems into elegant solutions. 
            <Star className="inline-block animate-spin-slow ml-2" size={16} />
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center space-x-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-purple-600 text-purple-400 px-8 py-3 rounded-full font-medium hover:bg-purple-600/10 transition-all duration-300"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: 360
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-10 left-1/4 text-purple-400/30 text-4xl"
      >
        ⭐
      </motion.div>
      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: -360
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-1/4 text-pink-400/30 text-4xl"
      >
        ✨
      </motion.div>
    </section>
  );
};

export default Hero;