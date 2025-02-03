import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github, Rocket, Stars } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setError('');

    try {
      await emailjs.sendForm(
        'service_ntopxcd',  // Your EmailJS service ID
        'template_bzzxogo', // Your EmailJS template ID
        formRef.current,
        'rE1V8wrxX4LylJtcO'  // Your EmailJS public key
      );
      setIsSubmitted(true);
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Space background effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, -1000],
              opacity: [0.7, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="relative inline-block">
            {/* Rocket animation */}
            <motion.div
              className="absolute -top-12 right-0 text-purple-400"
              animate={{
                y: [-10, 10],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              <Rocket size={28} className="transform rotate-45" />
              <motion.div
                animate={{
                  opacity: [0, 0.5, 0],
                  y: [0, 15],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="absolute -bottom-2 left-1/2 w-1 h-6 bg-gradient-to-t from-transparent to-purple-400"
              />
            </motion.div>
            <h2 className="text-5xl font-bold mb-4 gradient-text relative">
              Get In Touch
              <Stars className="absolute -top-4 -right-8 text-purple-400 animate-pulse" size={20} />
            </h2>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-lg transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Contact Information</h3>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-3"
              >
                <Mail className="text-purple-400" />
                <a href="mailto:sarveshatalkar@gmail.com" className="text-gray-300 hover:text-white">
                  sarveshatalkar@gmail.com
                </a>
              </motion.div>
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-3"
              >
                <Linkedin className="text-purple-400" />
                <a href="https://www.linkedin.com/in/sarveshatalkar/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  LinkedIn
                </a>
              </motion.div>
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-3"
              >
                <Github className="text-purple-400" />
                <a href="https://github.com/wowgeekyboy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  GitHub
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="transform transition-all duration-300"
              >
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 bg-purple-900/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 glass"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="transform transition-all duration-300"
              >
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 bg-purple-900/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 glass"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="transform transition-all duration-300"
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full p-3 bg-purple-900/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 glass"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full p-3 rounded-lg flex items-center justify-center space-x-2 ${
                  isSubmitted
                    ? 'bg-green-600'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                } transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <span>{isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-center mt-4"
          >
            {error}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;