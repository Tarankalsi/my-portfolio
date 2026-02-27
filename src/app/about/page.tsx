'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Rocket, Coffee, Zap, Heart, Download } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    const skills = [
        { category: 'Programming Languages', items: ['JavaScript', 'TypeScript'], color: 'from-blue-500 to-cyan-500' },
        { category: 'Frontend', items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Mantine UI"], color: 'from-purple-500 to-pink-500' },
        { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs'], color: 'from-cyan-500 to-blue-500' },
        { category: 'Database', items: ['PostgreSQL', 'Prisma', 'MongoDB', 'Mongoose'], color: 'from-pink-500 to-purple-500' },
        { category: 'Cloud Services', items: ['AWS', 'Hetzner', 'Vercel'], color: 'from-blue-500 to-cyan-500' },
        { category: 'Tools', items: ['VS Code', 'Docker', "Cursor", 'Nginx', 'Git', "Postman"], color: 'from-blue-500 to-cyan-500' },
    ];

    const experience = [
        {
            title: 'Full-Stack Developer',
            company: 'AnginatInnovations Pvt Ltd',
            period: 'June 2025 - Jan 2026',
            promotion: 'Promoted to Full Time',
            type: 'Hybrid',
            description: 'Build and manage Event Dashboard and Educational SaaS Platform',
            achievements: [
                'Built core modules including authentication, academic management, and staff/student/teacher management with role-based access control across dashboards.',
                'Developed a facial recognition–based personal gallery using Amazon Rekognition for automated photo matching.',
                'Implemented a multi-tenant architecture with institute-level data isolation, subscription tiers, usage limits, and role-based permissions.',
                'Built backend APIs for a QR-based digital business card system to automate networking and contact exchange.',
                'Developed a real-time check-in system with QR/email verification, auto-filled attendee data, live photo capture, and instant badge printing.'
            ],

        },
        {
            title: 'Full-Stack Developer Intern',
            company: 'AnginatInnovations Pvt Ltd',
            period: 'Dec 2024 - June 2025',
            type: 'Hybrid',
            description: 'Build Ed-tech Dashboard APIs and Features',
            achievements: [
                'Built and maintained full-stack features for a scalable educational SaaS platform using Next.js, Node.js, MongoDB, and AWS.',
                'Designed and deployed microservices on EC2 using Docker and Nginx, reducing manual deployment time by 80%.',
                'Integrated Razorpay payment gateway to enable automated transactions',
                'Designed and developed a robust backend system for an educational SaaS platform, implementing 24+ modular API services with scalable architecture.',
                'Contributed to daily stand-ups and sprint planning, directly impacting roadmap decisions and platform usability.'
            ],
        },

        // Add more experience items as needed
    ];

    const interests = [
        { icon: Code2, text: 'Clean Code', color: 'text-purple-400' },
        { icon: Rocket, text: 'Innovation', color: 'text-cyan-400' },
        { icon: Coffee, text: 'Coffee++', color: 'text-pink-400' },
        { icon: Zap, text: 'Performance', color: 'text-yellow-400' },
    ];

    return (
        <div className="min-h-screen px-6 lg:px-12 py-20">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-1 w-12 bg-linear-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                        <span className="text-slate-400 font-mono text-sm">ABOUT ME</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                        <span className="text-white">Hi, I'm </span>
                        <span className="text-gradient animate-gradient">Taran</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
                        A passionate full-stack developer who loves turning complex problems into elegant solutions.
                    </p>
                </motion.div>

                {/* Story Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="glass-card rounded-2xl p-8 lg:p-12 border border-slate-700/50">
                        <div className="flex items-center gap-3 mb-6">
                            <Code2 className="text-purple-400" size={32} />
                            <h2 className="text-3xl font-bold text-white">My Journey</h2>
                        </div>
                        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                            <p>
                                I’m a full-stack developer originally from India, with a journey into tech that started unexpectedly. I chose the science stream in school without knowing much about computer science, but once I was introduced to it, my curiosity quickly turned into passion.
                            </p>
                            <p>
                                This interest led me to pursue a Bachelor of Computer Applications (BCA), followed by over one year of professional experience as a full-stack developer, where I worked on building and maintaining real-world, scalable applications.
                            </p>
                            <p>
                                This year (2026), I'm about to start my <strong>Master’s degree at the Australian National University (ANU)</strong>, a member of Australia’s Group of Eight, to deepen my technical and problem-solving skills on a global level.
                            </p>
                            <p>
                                I’m known for my strong problem-solving ability and creative mindset. I can quickly deliver short-term solutions in urgent situations, while also planning and implementing long-term, sustainable fixes to prevent future issues. I enjoy breaking down complex problems and finding the most effective path forward.
                            </p>
                        </div>

                        {/* Interests */}
                        <div className="mt-8 pt-8 border-t border-slate-700/50">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {interests.map((interest, index) => (
                                    <motion.div
                                        key={interest.text}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-2 glass-card rounded-lg p-4 border border-slate-700/50"
                                    >
                                        <interest.icon className={interest.color} size={20} />
                                        <span className="text-sm text-slate-300 font-medium">{interest.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Skills Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="flex items-center gap-3 mb-12">
                        <Zap className="text-cyan-400" size={32} />
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">Technical Arsenal</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {skills.map((skillSet, index) => (
                            <motion.div
                                key={skillSet.category}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative glow-border"
                            >
                                <div className="glass-card rounded-2xl p-6 hover:bg-slate-800/60 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`h-1 w-8 bg-linear-to-r ${skillSet.color} rounded-full`}></div>
                                        <h3 className="text-xl font-bold text-white">{skillSet.category}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skillSet.items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1.5 glass-card rounded-lg text-sm text-slate-300 font-mono border border-slate-700/50 hover:border-purple-500/50 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Experience Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="flex items-center gap-3 mb-12">
                        <Briefcase className="text-purple-400" size={32} />
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">Experience</h2>
                    </div>

                    <div className="space-y-6">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card rounded-2xl p-8 border border-slate-700/50"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                    <div>
                                        <div className='flex justify-center items-center gap-4'>
                                             <h3 className="text-2xl font-bold text-gradient animate-gradient mb-1">
                                            {exp.title} 
                                        </h3><p className='text-slate-500'>{exp.promotion ? `(${exp.promotion})` : ''}</p>
                                      
                                        </div>
                                         <p className="text-slate-300 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="flex items-center gap-3 mt-2 lg:mt-0">
                                        <span className="px-3 py-1 glass-card rounded-full text-sm text-slate-400 font-mono border border-slate-700/50">
                                            {exp.type}
                                        </span>
                                        <span className="text-sm text-slate-500 font-mono">{exp.period}</span>
                                    </div>
                                </div>
                                <p className="text-slate-400 mb-4">{exp.description}</p>
                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Education Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="flex items-center gap-3 mb-12">
                        <GraduationCap className="text-cyan-400" size={32} />
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">Education</h2>
                    </div>

                    <div className="space-y-6">
                        <div className="glass-card rounded-2xl p-8 border border-slate-700/50">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-cyan-500 flex items-center justify-center shrink-0">
                                    <GraduationCap className="text-white" size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-1">Australian National University (ANU), Canberra ACT</h3>
                                    <p className="text-slate-400 mb-3">2026 – Present</p>
                                    <p className="text-slate-300 leading-relaxed">
                                        Master’s of Computing
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card rounded-2xl p-8 border border-slate-700/50">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-cyan-500 flex items-center justify-center shrink-0">
                                    <GraduationCap className="text-white" size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-1">Management Education and Research Institute (MERI), GGSIPU</h3>
                                    <p className="text-slate-400 mb-3">2021 – 2024</p>
                                    <p className="text-slate-300 leading-relaxed">
                                        Bachelor of Computer Applications (BCA) – CGPA 8.16
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.section
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="glass-card rounded-2xl p-12 border border-slate-700/50 relative overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-cyan-500/10"></div>
                        <div className="relative z-10">
                            <Heart className="w-16 h-16 mx-auto mb-6 text-pink-400" />
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                Let's Work Together
                            </h2>
                            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                                I'm always excited to take on new challenges and collaborate on interesting projects.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-linear-glow rounded-xl font-semibold text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 animate-glow"
                                >
                                    Get In Touch
                                </Link>
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="px-8 py-4 glass-card rounded-xl font-semibold text-white hover:bg-slate-800/60 transition-all duration-300 border border-slate-700 hover:border-purple-500/50 flex items-center justify-center gap-2"
                                >
                                    <Download size={20} />
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}