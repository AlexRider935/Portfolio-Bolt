'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Shield, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe,
  Lock,
  Zap,
  Brain,
  Layers
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('development');

  const skillCategories = {
    development: {
      icon: Code,
      title: 'Development',
      skills: [
        { name: 'React/Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'Node.js', level: 90, color: 'from-green-500 to-emerald-500' },
        { name: 'Python', level: 88, color: 'from-yellow-500 to-orange-500' },
        { name: 'Go', level: 85, color: 'from-cyan-500 to-blue-500' },
        { name: 'TypeScript', level: 92, color: 'from-blue-600 to-purple-600' },
        { name: 'Rust', level: 75, color: 'from-orange-500 to-red-500' }
      ]
    },
    security: {
      icon: Shield,
      title: 'Security',
      skills: [
        { name: 'Penetration Testing', level: 90, color: 'from-red-500 to-pink-500' },
        { name: 'Vulnerability Assessment', level: 95, color: 'from-purple-500 to-indigo-500' },
        { name: 'Code Review', level: 88, color: 'from-indigo-500 to-blue-500' },
        { name: 'Threat Modeling', level: 85, color: 'from-teal-500 to-green-500' },
        { name: 'OWASP Top 10', level: 92, color: 'from-green-500 to-cyan-500' },
        { name: 'Security Automation', level: 80, color: 'from-cyan-500 to-blue-500' }
      ]
    },
    infrastructure: {
      icon: Cloud,
      title: 'Infrastructure',
      skills: [
        { name: 'AWS', level: 88, color: 'from-orange-500 to-yellow-500' },
        { name: 'Docker', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'Kubernetes', level: 85, color: 'from-purple-500 to-blue-500' },
        { name: 'Terraform', level: 82, color: 'from-violet-500 to-purple-500' },
        { name: 'CI/CD', level: 87, color: 'from-green-500 to-teal-500' },
        { name: 'Monitoring', level: 85, color: 'from-red-500 to-orange-500' }
      ]
    }
  };

  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Burp Suite', icon: '🔍' },
    { name: 'Wireshark', icon: '🦈' },
    { name: 'Metasploit', icon: '💀' },
    { name: 'Nmap', icon: '🎯' },
    { name: 'Git', icon: '🔀' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Redis', icon: '🔴' }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="neon-text">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building secure, scalable applications
          </p>
        </motion.div>

        {/* Category selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass rounded-full p-2 flex space-x-2">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-mono">{category.title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass hover:glow transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-white">{skill.name}</h3>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">
            Tools & <span className="neon-text">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Badge 
                  variant="outline" 
                  className="glass hover:glow transition-all duration-300 p-3 text-base"
                >
                  <span className="mr-2">{tool.icon}</span>
                  {tool.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;