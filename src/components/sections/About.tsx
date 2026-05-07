import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden glass-panel p-2">
            <img 
              src="https://picsum.photos/seed/dev-portrait/600/800" 
              alt="Developer" 
              className="rounded-xl w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative shapes */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 blur-2xl rounded-full z-0" />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 blur-xl rounded-full z-0" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Transformando ideias em <br />
            <span className="text-gradient">Realidade Digital</span>
          </h2>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Olá! Sou o Davi Finatte, um jovem desenvolvedor Full Stack apaixonado por criar experiências digitais que combinam funcionalidade robusta com design intuitivo. Meu foco está no ecossistema JavaScript moderno, mas estou constantemente explorando novas formas de resolver problemas através da tecnologia.
            </p>
            <p>
              Minha jornada começou na escola, onde desenvolvi a maior parte dos projetos que você vê no meu arquivo. Acredito que o código é uma ferramenta para transformar ideias em realidade, e cada projeto escolar foi um degrau para alcançar o nível de entrega que apresento nos meus destaques atuais.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <h4 className="text-white font-bold text-2xl">Jovem</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-mono">Talento</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-2xl">Constante</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-mono">Aprendizado</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
