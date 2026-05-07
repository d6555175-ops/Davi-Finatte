import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-primary mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            DISPONÍVEL PARA NOVOS PROJETOS
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-tight">
            Davi <br />
            <span className="text-gradient">Finatte</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            Focado em criar interfaces modernas, produtos digitais de alta performance e experiências memoráveis com tecnologia de ponta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Ver projetos <ChevronRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 glass-panel text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
            >
              Entrar em contato
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          <div className="relative aspect-square w-full max-w-md mx-auto">
            {/* Abstract Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <div className="absolute inset-4 glass-panel rounded-3xl overflow-hidden p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-md bg-primary animate-pulse" />
                </div>
                <div className="space-y-1">
                  <div className="w-20 h-2 bg-white/20 rounded-full" />
                  <div className="w-12 h-2 bg-white/10 rounded-full" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="h-40 w-full bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                   <div className="w-full flex px-6 gap-2">
                      <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                      <div className="h-2 w-1/4 bg-white/10 rounded-full" />
                   </div>
                </div>
                <div className="flex gap-2">
                  <div className="h-8 flex-1 bg-primary/20 rounded-lg border border-primary/30" />
                  <div className="h-8 flex-1 bg-white/5 rounded-lg border border-white/10" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
