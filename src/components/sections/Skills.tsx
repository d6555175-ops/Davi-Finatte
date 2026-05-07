import { motion } from 'motion/react';
import { SKILLS } from '@/src/data';

export default function Skills() {
  const categories = ['Frontend', 'Backend', 'Tools', 'Database'];

  return (
    <section id="skills" className="py-24 px-6 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Stack <span className="text-primary italic">Tecnológica</span>
          </motion.h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            As tecnologias e ferramentas que utilizo para dar vida a projetos complexos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <span className="text-6xl font-display font-bold">{catIndex + 1}</span>
              </div>
              
              <h3 className="text-xl font-display font-bold mb-6 text-primary">{category}</h3>
              
              <div className="flex flex-col gap-4">
                {SKILLS.filter(s => s.category === category).map((skill, sIndex) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center px-1">
                      <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                    </div>
                    {/* Simplified progress bar style for modern look */}
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.2 + (sIndex * 0.1) }}
                        className="h-full bg-gradient-to-r from-primary/80 to-secondary/80"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
