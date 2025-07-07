'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Lock, Zap, Shield, Globe } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'SecureVault',
      description: 'End-to-end encrypted password manager with biometric authentication and zero-knowledge architecture.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'WebCrypto API', 'PostgreSQL'],
      category: 'Security',
      icon: Lock,
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'ThreatHunter',
      description: 'AI-powered threat detection system that analyzes network traffic patterns and identifies potential security breaches.',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'TensorFlow', 'Docker', 'Elasticsearch'],
      category: 'AI/Security',
      icon: Shield,
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'CloudGuard',
      description: 'Automated cloud security compliance checker with real-time monitoring and remediation suggestions.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Go', 'AWS SDK', 'Terraform', 'React'],
      category: 'Cloud Security',
      icon: Globe,
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 4,
      title: 'VulnScanner',
      description: 'High-performance vulnerability scanner with custom exploit detection and automated reporting.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Rust', 'PostgreSQL', 'Vue.js', 'Docker'],
      category: 'Security Tools',
      icon: Zap,
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="neon-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of security-focused applications and tools that demonstrate my expertise
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group"
            >
              <Card className="glass hover:glow transition-all duration-500 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="p-2 rounded-full bg-black/50 backdrop-blur-sm">
                      <project.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <Badge variant="outline" className="glass">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            Other <span className="neon-text">Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass hover:glow transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-green-500/20">
                          <project.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      </div>
                      <Badge variant="outline" className="glass text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-xs">Code</span>
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        className="flex items-center space-x-1 text-gray-400 hover:text-green-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-xs">Demo</span>
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;