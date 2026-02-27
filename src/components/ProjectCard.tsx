'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/src/lib/project';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/projects/${project.id}`} className="block">
        <div className="glass-card rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-300">
          {/* Simple Preview Area */}
          <div className="relative h-56 bg-linear-to-br from-slate-800 to-slate-900 overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20"></div>
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent"></div>
            
            {/* Minimal Icon */}
            <div className="absolute bottom-4 right-4">
              <div className="w-12 h-12 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-400 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tech Stack - Minimal */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech:any) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-slate-800 border border-slate-700 rounded text-slate-400"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs px-2 py-1 text-slate-500">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Simple Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-sm text-purple-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                View Project <ArrowRight size={14} />
              </span>
              
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={16} className="text-slate-500 hover:text-slate-300" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={16} className="text-slate-500 hover:text-slate-300" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}