import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { PROJECTS, Project } from '@/src/data';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { cn } from '@/src/lib/utils';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'featured' | 'all'>('featured');

  const filteredProjects = activeTab === 'featured' 
    ? PROJECTS.filter(p => p.featured) 
    : PROJECTS;

  return (
    <section id="projects" className="py-24 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Projetos em <span className="text-primary italic">Destaque</span>
            </motion.h2>
            <p className="text-gray-400 max-w-xl">
              Uma seleção de produtos digitais que construí. <br />
              <span className="text-xs text-primary/60 font-mono mt-2 block">Nota: A seção 'Arquivo' contém projetos desenvolvidos para fins escolares e de estudo.</span>
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-1 flex gap-1 self-start md:self-end">
            <button 
              onClick={() => setActiveTab('featured')}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                activeTab === 'featured' ? "bg-primary text-white" : "text-gray-400 hover:text-white"
              )}
            >
              Destaques
            </button>
            <button 
              onClick={() => setActiveTab('all')}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                activeTab === 'all' ? "bg-primary text-white" : "text-gray-400 hover:text-white"
              )}
            >
              Arquivo
            </button>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard 
                  project={project} 
                  onClick={() => setSelectedProject(project)} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
