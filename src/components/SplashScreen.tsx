import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 250); // Start grid (was 500)
    const timer2 = setTimeout(() => setStage(2), 750); // Start text (was 1500)
    const timer3 = setTimeout(() => setStage(3), 1500); // Exit start (was 3000)
    const timer4 = setTimeout(onComplete, 2000); // Complete (was 4000)

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* Left Curtain */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#f4f4f9] border-r border-slate-200 z-0"
        initial={{ x: 0 }}
        animate={stage === 3 ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // Was 0.8
      >
        <div className="absolute inset-0 bg-grid opacity-50" />
      </motion.div>

      {/* Right Curtain */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#f4f4f9] border-l border-slate-200 z-0"
        initial={{ x: 0 }}
        animate={stage === 3 ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // Was 0.8
      >
        <div className="absolute inset-0 bg-grid opacity-50" />
      </motion.div>

      {/* Center Content Container - Fades out during exit */}
      <motion.div 
        className="relative z-10 flex items-center justify-center w-full h-full"
        animate={stage === 3 ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }} // Was 0.5
      >
        {/* Grid Animation Lines (Center) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="absolute w-full h-[1px] bg-blue-500/30"
            initial={{ scaleX: 0 }}
            animate={stage >= 1 ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }} // Was 1.5
          />
          <motion.div
            className="absolute h-full w-[1px] bg-blue-500/30"
            initial={{ scaleY: 0 }}
            animate={stage >= 1 ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }} // Was 1.5
          />
        </div>

        {/* Rotating Geometrics */}
        <motion.div
          className="absolute"
          initial={{ opacity: 0, rotate: 0 }}
          animate={stage >= 1 ? { opacity: 1, rotate: 90 } : { opacity: 0 }}
          transition={{ duration: 1, ease: "circOut" }} // Was 2
        >
          <div className="w-64 h-64 border border-blue-500/20 rounded-full" />
        </motion.div>
         <motion.div
          className="absolute"
          initial={{ opacity: 0, rotate: 0 }}
          animate={stage >= 1 ? { opacity: 1, rotate: -90 } : { opacity: 0 }}
          transition={{ duration: 1, ease: "circOut", delay: 0.1 }} // Was 2, delay 0.2
        >
          <div className="w-48 h-48 border border-dashed border-blue-600/20" />
        </motion.div>

        {/* Text Reveal */}
        <div className="relative z-10 font-mono text-2xl md:text-4xl font-light tracking-widest text-slate-800 mix-blend-multiply bg-[#f4f4f9]/80 px-4 py-2 backdrop-blur-sm border border-slate-200/50">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={stage >= 2 ? { y: 0 } : { y: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }} // Was 0.8
            >
              INITIALIZING
            </motion.div>
          </div>
          <div className="overflow-hidden mt-2">
             <motion.div
              className="text-xs md:text-sm text-blue-600 text-center"
              initial={{ y: "-100%", opacity: 0 }}
              animate={stage >= 2 ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }} // Was 0.8, delay 0.2
            >
              SYSTEM_READY // 100%
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
