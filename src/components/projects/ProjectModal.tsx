import { motion, AnimatePresence } from 'motion/react';
import { X, Github } from 'lucide-react';
import { Project } from '@/src/data';
import { cn } from '@/src/lib/utils';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="glass-panel w-full max-w-5xl h-[80vh] md:h-[70vh] rounded-2xl overflow-hidden relative flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 text-white transition-all underline-offset-4"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col lg:flex-row h-full overflow-hidden">
            <div className="lg:w-1/2 h-64 lg:h-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="lg:w-1/2 p-8 overflow-y-auto bg-zinc-900/50 flex flex-col">
              <div className="mb-6">
                <h2 className="text-3xl font-display font-bold mb-4">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 border border-primary/20 text-xs text-primary rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6 mb-8 flex-1">
                <div>
                  <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-3">CONCEITO</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 mt-auto">
                {project.githubUrl !== '#' && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                  >
                    <Github size={18} /> Ver Código
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
