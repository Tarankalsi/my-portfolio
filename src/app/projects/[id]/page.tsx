

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Github, Sparkles, CheckCircle2 } from 'lucide-react';
import { getProjectById,projects } from '@/src/lib/project';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise< { id: string }> }) {

const {id} = await params;
  const project = getProjectById(id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Anginat`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {

    const {id} = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen px-6 lg:px-12 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-12 group transition-colors"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-yellow-400" size={24} />
            <span className="text-slate-400 font-mono text-sm">CASE STUDY</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient animate-gradient">
            {project.title}
          </h1>
          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-xl font-semibold text-white hover:bg-slate-800/60 transition-all border border-slate-700 hover:border-purple-500/50"
              >
                <Github size={20} />
                View Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-glow rounded-xl font-semibold text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className="mb-16 relative h-96 rounded-2xl overflow-hidden glass-card border border-slate-700/50">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-linear-glow flex items-center justify-center animate-float">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <p className="text-slate-400 font-mono">Project Screenshot</p>
              </div>
            </div>
          )}
        </div>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="h-1 w-8 bg-linear-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            About This Project
          </h2>
          <div className="glass-card rounded-2xl p-8 border border-slate-700/50">
            <p className="text-slate-300 leading-relaxed text-lg">
              {project.longDescription}
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="h-1 w-8 bg-linear-to-r from-cyan-500 to-purple-500 rounded-full"></div>
            Key Features
          </h2>
          <div className="glass-card rounded-2xl p-8 border border-slate-700/50">
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="text-green-400 shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-slate-300 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="h-1 w-8 bg-linear-to-r from-pink-500 to-purple-500 rounded-full"></div>
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass-card rounded-xl text-slate-300 font-mono border border-slate-700/50 hover:border-purple-500/50 hover:bg-slate-800/60 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-12 border-t border-slate-800">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
            All Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-glow rounded-xl font-semibold text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Let's Talk
            <ArrowLeft className="rotate-180" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}