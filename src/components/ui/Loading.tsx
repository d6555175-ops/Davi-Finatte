import { motion } from 'motion/react';

export default function Loading() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-[#030303] flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl font-display font-bold tracking-tighter"
        >
          DAVI FINATTE<span className="text-primary">.</span>
        </motion.div>
        
        <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-primary"
          />
        </div>
      </div>
    </motion.div>
  );
}
