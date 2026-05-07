import { motion } from 'motion/react';
import { Mail, Github, MessageSquare, Send, Phone } from 'lucide-react';
import { CONTACT } from '@/src/data';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Vamos construir algo <br />
              <span className="text-gradient italic">Extraordinário?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Estou sempre aberto a novas oportunidades, colaborações em projetos open source ou apenas para um café virtual.
            </p>

            <div className="space-y-6">
              <a 
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-4 p-4 rounded-xl glass-panel group hover:bg-white/5 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono">E-MAIL</p>
                  <p className="text-lg font-medium">{CONTACT.email}</p>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a 
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass-panel group hover:bg-white/5 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-all">
                    <Github size={20} />
                  </div>
                  <span className="font-medium">GitHub</span>
                </a>
                <a 
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass-panel group hover:bg-white/5 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-400 ml-1">NOME</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-400 ml-1">E-MAIL</label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors h-12"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-gray-400 ml-1">MENSAGEM</label>
                <textarea 
                  rows={4}
                  placeholder="Como posso te ajudar?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all"
              >
                Enviar Mensagem <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Footer minimal */}
      <footer className="mt-24 pt-8 border-t border-white/5 text-center text-gray-500 text-sm font-mono">
        &copy; {new Date().getFullYear()} DAVI FINATTE. FEITO COM DESIGN E CÓDIGO.
      </footer>
    </section>
  );
}
