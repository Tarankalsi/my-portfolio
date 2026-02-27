'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Database,
  Lock,
  Mail,
  Upload,
  QrCode,
  FileText,
  Users,
  BarChart3,
  Globe,
  Smartphone,
  Search,
  Bell,
  Shield,
  Cloud,
  Code2,
  Layers,
  Activity
} from 'lucide-react';
import { Project, projects } from '@/src/lib/project';
import ProjectCard from '@/src/components/ProjectCard';

export default function ProjectsPage() {
  const featuresImplemented = [
    {
      category: 'Authentication & Security',
      icon: Lock,
      color: 'from-purple-500 to-pink-500',
      features: [
        'JWT-based authentication with refresh tokens',
        'Role-Based Access Control (RBAC) for multiple user types',
        'OAuth integration (Google, GitHub)',
        'Password encryption with Bcrypt',
        'Email verification and password reset flows',
        'Session management and timeout handling',
        'Two-factor authentication (2FA) implementation',
      ]
    },

    {
      category: 'File Management',
      icon: Upload,
      color: 'from-pink-500 to-purple-500',
      features: [
        'Multi-file upload with drag-and-drop',
        'Large file support (up to 500MB)',
        'Image compression and optimization',
        'AWS S3 integration for scalable storage',
        'Presigned URLs for secure file access',
      ]
    },
    {
      category: 'Email Services',
      icon: Mail,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Dynamic email templating system',
        'Bulk email sending with queue management',
        'Template variable injection',
        'Email delivery tracking',
      ]
    },
    {
      category: 'QR Code & Badge System',
      icon: QrCode,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'QR code generation API',
        'Real-time QR scanning and validation',
        'Automated badge printing with KonvaCanvas',
        'Camera-based photo capture',
        'Handheld scanner support',
        'Batch QR generation for events',
        'QR code expiration and revocation',
      ]
    },
    {
      category: 'Data Processing',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Excel/CSV import with validation',
        'Bulk data processing (1000+ records)',
        'Data export in multiple formats',
        'Database query optimization',
      ]
    },
    {
      category: 'API Development',
      icon: Code2,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'RESTful API architecture',
        'Request validation with Zod/Joi',
        'Error handling and logging',
        'API documentation with Swagger',
        'Rate limiting',
      ]
    },
    {
      category: 'Search & Filtering',
      icon: Search,
      color: 'from-teal-500 to-cyan-500',
      features: [
        'Full-text search with ElasticSearch',
        'Advanced filtering systems',
        'Pagination and infinite scroll',
        'Auto-complete and suggestions',
        'Search result highlighting',
      ]
    },
    {
      category: 'User Management',
      icon: Users,
      color: 'from-rose-500 to-pink-500',
      features: [
        'User profile management',
        'Dynamic form generation',
        'Multi-role user systems',
        'User activity tracking',
        'Bulk user operations',
        'User import/export',
        'Account suspension and recovery',
      ]
    },
    {
      category: 'Payment Integration',
      icon: Shield,
      color: 'from-amber-500 to-yellow-500',
      features: [
        'Stripe payment gateway integration',
        'Razorpay integration',
        'Payment receipt generation',
        'Subscription management',
        'Invoice generation',
      ]
    },
    {
      category: 'DevOps & Infrastructure',
      icon: Cloud,
      color: 'from-sky-500 to-blue-500',
      features: [
        'Docker containerization',
        'AWS deployment (EC2, S3)',
        'Nginx configuration and optimization',
        'Monitoring and logging (CloudWatch)',
      ]
    },
  ];

  const technicalHighlights = [
    { label: 'Total Features', value: '80+', icon: Layers },
    { label: 'APIs Built', value: '30+', icon: Code2 },
    { label: 'Database Schemas', value: '20+', icon: Database },
    { label: 'Integrations', value: '15+', icon: Globe },
  ];

  return (
    <div className="min-h-screen px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-linear-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            <span className="text-slate-400 font-mono text-sm">PORTFOLIO</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient animate-gradient">Featured Work</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            A showcase of projects demonstrating my expertise in building scalable,
            production-ready applications with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Technical Highlights */}
        {/* <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technicalHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-slate-700/50 text-center group hover:border-slate-600 transition-all"
              >
                <highlight.icon className="w-8 h-8 mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-gradient mb-2">{highlight.value}</div>
                <div className="text-sm text-slate-400">{highlight.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section> */}

        {/* Features Showcase */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-12">
            <Zap className="text-yellow-400" size={32} />
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Features & Capabilities</h2>
          </div>
          <p className="text-slate-400 mb-12 max-w-3xl">
            Here's a comprehensive list of features and functionalities I've implemented across various projects,
            showcasing my technical expertise and problem-solving abilities.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresImplemented.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-linear-to-br ${category.color} group-hover:scale-110 transition-transform`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="text-purple-400 mt-1 flex-shrink-0">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Layers className="text-cyan-400" size={32} />
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Project Showcase</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {projects.map((project: Project, index: number) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Tech Stack Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="glass-card rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Technologies Used Across Projects</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'JavaScript',
                'TypeScript',
                'React.js',
                'Next.js',
                'Node.js',
                'Express.js',
                'REST APIs',
                'PostgreSQL',
                'MongoDB',
                'Prisma ORM',
                'Mongoose',
                'AWS EC2',
                'AWS S3',
                'AWS SES',
                'AWS IAM',
                'AWS CloudFront',
                'Amazon Rekognition',
                'Docker',
                'Nginx',
                'JWT',
                'Role-Based Access Control (RBAC)',
                'SendGrid',
                'Razorpay',
                'Git',
                'GitHub',
                'Postman',
                'Tailwind CSS',
                'HTML',
                'CSS',
                'Mantine UI'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass-card rounded-lg text-sm text-slate-300 font-mono border border-slate-700/50 hover:border-purple-500/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card rounded-2xl p-12 border border-slate-700/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-cyan-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Interested in Working Together?
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how I can bring these capabilities to your next project.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-linear-glow rounded-xl font-bold text-lg text-white shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 animate-glow"
              >
                Start a Conversation
                <Smartphone size={24} />
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}