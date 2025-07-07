'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Heart, Target, Zap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'Always pushing boundaries and exploring new technologies'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Deeply committed to crafting exceptional digital experiences'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Attention to detail in every line of code and security measure'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimized solutions that scale and perform under pressure'
    }
  ];

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '100+', label: 'Vulnerabilities Found' },
    { number: '24/7', label: 'Learning Mode' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="neon-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Bridging the gap between development and security, one line of code at a time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="terminal">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="font-mono text-green-400">
                  <p>$ whoami</p>
                  <p className="text-white mt-2">
                    Full Stack Developer with a passion for cybersecurity. 
                    I specialize in building robust applications while maintaining 
                    a security-first mindset.
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                My journey began with a curiosity about how things work under the hood. 
                This led me to explore both the creative side of development and the 
                analytical side of security research. I believe that the best applications 
                are not just functional and beautiful, but also secure and resilient.
              </p>

              <p className="text-gray-300 leading-relaxed">
                When I'm not coding or hunting for vulnerabilities, you'll find me 
                contributing to open-source projects, writing technical articles, 
                or mentoring aspiring developers in the cybersecurity community.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {['React', 'Node.js', 'Python', 'Go', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Badge variant="outline" className="glass hover:glow transition-all duration-300">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column - Stats and values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Card className="glass hover:glow transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold neon-text mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-400">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Card className="glass hover:glow transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-green-500/20">
                          <value.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">
                            {value.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;