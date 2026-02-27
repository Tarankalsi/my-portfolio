'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, Code2, Sparkles, Terminal as TerminalIcon, Zap, Globe } from 'lucide-react';
import Terminal from '../components/Terminal';


export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    'Full-Stack Developer',
    'React Specialist',
    'Problem Solver',
    'Creative Coder',
    'Tech Enthusiast',
  ];

  useEffect(() => {
    const role = roles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= role.length) {
        setDisplayText(role.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  // Terminal data - Easy to customize!
  const developerData = {
    name: "Taranjit Singh",
    role: "Full-Stack Developer",
    programming_languages: ["JavaScript", "TypeScript"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
    databases: ["PostgreSQL", "MongoDB"],
    ORMs : ["Prisma", "Mongoose"],
    cloud_services: ["AWS", "Hetzner", "Vercel"],
    tools: ["Git", "Docker", "Github", "Cursor", "VS Code" , "Postman"],
    experience: 1,
    passion: "Solving Problems with Code",
    contact: {
      email: "taranjitsinghdelhi@gmail.com",
      contact_number: "+61 478132139",
      github: "Tarankalsi"
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-12 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-mesh opacity-40"></div>
        <div className="absolute inset-0 grid-pattern"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-slate-400 font-mono text-sm">Hello, I'm</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl lg:text-8xl font-bold mb-4 leading-tight"
            >
              <span className="text-white">Taran</span>
            </motion.h1>

            {/* Typing Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8 h-20"
            >
              <div className="text-3xl lg:text-5xl font-bold text-gradient animate-gradient">
                {displayText}
                <span className="animate-terminal-blink">|</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed"
            >
              I build exceptional digital experiences. Specialized in Event & Education Management Systems 
              using modern web technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/projects"
                className="group px-8 py-4 bg-linear-glow rounded-xl font-semibold text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 animate-glow"
              >
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 glass-card rounded-xl font-semibold text-white hover:bg-slate-800/60 transition-all duration-300 border border-slate-700 hover:border-purple-500/50"
              >
                Let's Connect
              </Link>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-20 flex flex-wrap gap-3"
            >
              <span className="text-xs text-slate-500 font-mono">TECH STACK:</span>
              {['React', 'TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="px-3 py-1 glass-card rounded-lg text-sm text-slate-300 font-mono border border-slate-700/50"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-slate-700 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-purple-500 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Terminal Showcase - Now using dynamic component */}
      <Terminal 
        title="~/taran/portfolio"
        data={developerData}
      />

      {/* What I Do Section */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient animate-gradient">What I Do</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Transforming ideas into reality with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: 'Frontend Magic',
                description: 'Crafting pixel-perfect, responsive interfaces with React, Next.js, and modern CSS',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: Zap,
                title: 'Backend Power',
                description: 'Building scalable APIs and server architecture with Node.js, Python, and databases',
                color: 'from-cyan-500 to-blue-500',
              },
              {
                icon: Globe,
                title: 'Full-Stack Solutions',
                description: 'End-to-end development from concept to deployment with cloud integration',
                color: 'from-pink-500 to-purple-500',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative glow-border"
              >
                <div className="glass-card rounded-2xl p-8 hover:bg-slate-800/60 transition-all duration-300 h-full">
                  <div className={`inline-flex p-4 rounded-xl bg-linear-to-br ${service.color} text-white mb-6`}>
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-cyan-500/10"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's Build Something <span className="text-gradient animate-gradient">Epic</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Got a project in mind? Let's make it happen together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-linear-glow rounded-xl font-bold text-lg text-white shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 animate-glow"
            >
              <TerminalIcon size={24} />
              Start a Project
              <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}