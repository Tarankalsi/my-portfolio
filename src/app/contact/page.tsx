'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Github, Linkedin, MapPin, Terminal } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'taranjitsinghdelhi@gmail.com',
      href: 'mailto:taranjitsinghdelhi@gmail.com',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Australia',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: '@Tarankalsi',
      href: 'https://github.com/Tarankalsi',
      color: 'from-pink-500 to-purple-500',
    },
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
            <span className="text-slate-400 font-mono text-sm">GET IN TOUCH</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient animate-gradient">Let's Connect</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Have a project in mind or just want to chat? Drop me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={info.href ? 'cursor-pointer' : ''}
              onClick={() => info.href && window.open(info.href, '_blank')}
            >
              <div className="glass-card rounded-2xl p-6 border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-300 group h-full">
                <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${info.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <info.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                <p className="text-slate-400 font-mono text-sm">{info.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 lg:p-12 border border-slate-700/50"
        >
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="text-purple-400" size={32} />
            <h2 className="text-3xl font-bold text-white">Send a Message</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2 font-mono">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-card rounded-xl border border-slate-700/50 focus:border-purple-500/50 focus:outline-none transition-all text-white placeholder-slate-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2 font-mono">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-card rounded-xl border border-slate-700/50 focus:border-purple-500/50 focus:outline-none transition-all text-white placeholder-slate-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2 font-mono">
                SUBJECT
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 glass-card rounded-xl border border-slate-700/50 focus:border-purple-500/50 focus:outline-none transition-all text-white placeholder-slate-500"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2 font-mono">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 glass-card rounded-xl border border-slate-700/50 focus:border-purple-500/50 focus:outline-none transition-all resize-none text-white placeholder-slate-500"
                placeholder="Tell me about your project..."
              />
            </div>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 flex items-center gap-2"
              >
                <MessageSquare size={20} />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-glow rounded-xl font-semibold text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed animate-glow"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={20} />
                </>
              )}
            </button>
          </form>
        </motion.div> */}

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-6 font-mono text-sm">OR CONNECT WITH ME ON</p>
          <div className="flex justify-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/tarankalsi', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/kalsitaran', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:taranjitsinghdelhi@gmail.com', label: 'Email' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-4 glass-card rounded-xl hover:bg-slate-800/60 transition-all border border-slate-700/50 hover:border-purple-500/50 group"
                aria-label={social.label}
              >
                <social.icon size={24} className="text-slate-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}