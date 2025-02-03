import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap, FileText } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Software Developer",
      company: "Turing",
      location: "Remote",
      date: "October 2024 - January 2025",
      description: [
        "Engineered Large Language Model (LLM) pipelines, fine-tuning outputs for enhanced accuracy (+35%) and contextual relevance by implementing rigorous validation frameworks and hybrid human-AI feedback loops.",
        "Architected scalable ML-integrated solutions using JavaScript/TypeScript, optimizing real-time model inference in Node.js and React-based applications.",
        "Collaborated cross-functionally to deploy LLM-driven features, adhering to MLOps best practices for monitoring, versioning, and iterative model improvement."
      ],
      skills: ["LLM", "TypeScript", "Node.js", "React", "MLOps"]
    },
    {
      title: "Technical Product Manager",
      company: "upGrad",
      location: "Mumbai, India",
      date: "September 2023 - April 2024",
      description: [
        "Product Leadership: Spearheaded OdinSculpt (Next.js/React) development, slashing deployment cycles by 40% and boosting platform scalability.",
        "Real-Time Collaboration: Architected WebSocket-driven features, cutting student-instructor response times by 60% and enabling live project collaboration.",
        "Data-Driven Growth: Integrated CleverTap analytics to refine user journeys, increasing retention by 25% and driving actionable product insights."
      ],
      skills: ["Next.js", "WebSocket", "Product Management", "Analytics"]
    },
    {
      title: "Full Stack Developer",
      company: "Chesa",
      location: "Mumbai, India",
      date: "July 2021 - September 2023",
      description: [
        "Healthcare Innovation: Engineered a HIPAA-compliant communication platform using React, Redux, and AWS, streamlining patient-provider interactions for 10K+ users.",
        "Distribution Platform: Built a performant PHP/MySQL system with Bootstrap/Tailwind, reducing load times by 30% and enhancing cross-device responsiveness.",
        "SEO-Driven Growth: Led end-to-end development of Chesa Academy, implementing SEO strategies that boosted organic traffic by 50% and generated 30% more leads."
      ],
      skills: ["React", "Redux", "AWS", "PHP", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
              Experience
            </span>
          </motion.h2>
        </motion.div>
        
        <VerticalTimeline lineColor="rgba(139, 92, 246, 0.3)">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                color: '#fff',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                boxShadow: '0 4px 20px rgba(139, 92, 246, 0.1)'
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(139, 92, 246, 0.2)' }}
              date={exp.date}
              iconStyle={{ 
                background: 'linear-gradient(135deg, #4c1d95, #7e22ce)',
                boxShadow: '0 0 0 4px #4c1d95, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)'
              }}
              icon={<Briefcase className="text-white" />}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  {exp.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-gray-300 mt-2">
                  {exp.company} • {exp.location}
                </h4>
                <ul className="mt-4 space-y-3">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300"
                    >
                      • {item}
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-sm bg-purple-900/30 text-purple-300 rounded-full border border-purple-500/30 hover:border-purple-500 hover:bg-purple-900/50 transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </VerticalTimelineElement>
          ))}

          <VerticalTimelineElement
            iconStyle={{ 
              background: 'linear-gradient(135deg, #4c1d95, #7e22ce)',
              boxShadow: '0 0 0 4px #4c1d95, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)'
            }}
            icon={<GraduationCap className="text-white" />}
          />
        </VerticalTimeline>

        {/* Resume Button at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="https://drive.google.com/file/d/1eKsUULStm794RUlGauRf5BRaWxkETsU_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
          >
            <FileText size={20} />
            <span>View Full Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;