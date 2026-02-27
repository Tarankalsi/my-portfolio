'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Home, User, FolderGit2, Mail, Menu, X, Github, Linkedin, Terminal } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Projects', href: '/projects', icon: FolderGit2 },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 left-6 z-50 p-3 glass-card rounded-xl hover:bg-slate-800/60 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-screen w-72 z-40
        bg-slate-900/95 backdrop-blur-xl border-r border-slate-800
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="flex flex-col h-full p-6">
          {/* Logo / Brand */}
          <div className="mb-12">
            <Link href="/" className="block group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-glow flex items-center justify-center">
                  <Terminal size={20} className="text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gradient animate-gradient">
                    Taran
                  </h1>
                  <p className="text-xs text-slate-400 font-mono">Full-Stack Dev</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    group flex items-center gap-3 px-4 py-3 rounded-xl
                    transition-all duration-300 relative overflow-hidden
                    ${isActive 
                      ? 'bg-gradient-glow text-white shadow-lg shadow-purple-500/30' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }
                  `}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-glow opacity-20 blur-xl"></div>
                  )}
                  <Icon size={20} className="relative z-10" />
                  <span className="relative z-10 font-medium">{item.name}</span>
                  {isActive && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-l-full"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="h-px bg-slate-800"></div>
            <div className="flex items-center gap-2">
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
                  className="p-3 glass-card rounded-lg hover:bg-slate-800/60 transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-slate-400" />
                </a>
              ))}
            </div>
            
            {/* Theme Toggle */}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-mono">THEME</span>
              <ThemeToggle />
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 px-3 py-2 glass-card rounded-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs text-slate-400 font-mono">Available for work</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}