import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Briefcase, Brain, Rocket, Cpu, Sparkles, GitBranch, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"]
    },
    {
      category: "Backend & AI",
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      technologies: ["Node.js", "Express", "LLM Integration", "ML Pipelines", "RESTful APIs", "Real-time Systems"]
    },
    {
      category: "DevOps & Cloud",
      icon: <GitBranch className="w-6 h-6 text-purple-400" />,
      technologies: ["AWS", "Docker", "MongoDB", "PostgreSQL", "CI/CD", "MLOps"]
    }
  ];

  const specializations = [
    {
      title: "LLM Engineering",
      icon: <Brain />,
      skills: [
        "LLM Pipeline Development",
        "Model Fine-tuning & Optimization",
        "Prompt Engineering",
        "AI Integration Architecture",
        "Real-time Inference",
        "Validation Frameworks"
      ]
    },
    {
      title: "Technical Product Management",
      icon: <Rocket />,
      skills: [
        "Product Strategy & Roadmap",
        "Agile Leadership",
        "Technical Architecture",
        "User Research & Analytics",
        "Cross-functional Collaboration",
        "Data-Driven Decision Making"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -1000],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
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
          <div className="relative inline-block mb-4">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-lg"
            />
            <h2 className="text-5xl font-bold gradient-text relative">
              About Me
              <Sparkles className="absolute -top-6 -right-6 text-purple-400 animate-pulse" size={24} />
            </h2>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Versatile Full Stack Developer and Technical Product Manager with expertise in LLM Engineering.
            Passionate about creating high-performance solutions that leverage cutting-edge AI technologies
            to drive business growth and enhance user experiences.
          </p>
        </motion.div>

        {/* Core Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-lg relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex items-center justify-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold ml-2 text-purple-400">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.technologies.map((tech) => (
                  <motion.li
                    key={tech}
                    className="text-gray-300 group-hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    • {tech}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Specializations in a more compact layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {specializations.map((spec, index) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass p-6 rounded-lg relative group hover:bg-purple-900/20"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-full mr-3"
                >
                  {spec.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-purple-400">
                  {spec.title}
                </h3>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Zap className="w-5 h-5 text-purple-400 ml-2" />
                </motion.div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {spec.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center space-x-2 p-2 rounded-lg group-hover:bg-purple-900/30 transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;