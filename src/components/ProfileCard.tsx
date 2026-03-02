import { motion } from 'motion/react';
import { Github, Twitter, Mail, Linkedin, Globe, Code, Terminal, Cpu } from 'lucide-react';

export default function ProfileCard() {
  return (
    <motion.div 
      className="relative flex flex-col items-center w-full max-w-3xl mx-auto mb-16 pt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[12rem] md:text-[16rem] font-display font-bold text-slate-200/40 tracking-tighter leading-none whitespace-nowrap blur-[2px]">
          DEV
        </span>
      </div>

      {/* Main Card Container */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        
        {/* Avatar Section */}
        <div className="relative flex justify-center mb-8">
          {/* Rotating Rings Layer 1 */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-slate-200 rounded-full opacity-60"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-300 rounded-full" />
          </motion.div>

          {/* Rotating Rings Layer 2 (Dashed) */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 border border-dashed border-slate-300 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Avatar Image */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10 group">
             <div className="absolute inset-0 bg-blue-500/10 z-20 group-hover:bg-transparent transition-colors duration-300" />
             <img 
               src="https://picsum.photos/seed/architect/400/400" 
               alt="Profile" 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
             />
             
             {/* Glitch Overlay Effect (Optional visual flair) */}
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
          </div>

          {/* Tech Badges */}
          <div className="absolute -right-4 top-10 bg-white p-2 rounded-lg shadow-md border border-slate-100 animate-bounce delay-700">
            <Code size={20} className="text-blue-500" />
          </div>
          <div className="absolute -left-4 bottom-10 bg-white p-2 rounded-lg shadow-md border border-slate-100 animate-bounce delay-1000">
            <Terminal size={20} className="text-slate-700" />
          </div>
        </div>

        {/* Name & Title */}
        <div className="text-center mb-10 relative">
          <div className="inline-block relative">
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-slate-800 mb-2 relative z-10">
              ALEX_DEV
            </h1>
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200/50 -skew-x-12 z-0" />
          </div>
          
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-[1px] w-12 bg-slate-300" />
            <p className="font-mono text-slate-500 text-sm tracking-[0.2em] uppercase">Full Stack Engineer</p>
            <div className="h-[1px] w-12 bg-slate-300" />
          </div>
        </div>

        {/* Social Links - Glassmorphism */}
        <div className="flex justify-center gap-4">
          <SocialLink href="https://github.com" icon={<Github size={22} />} label="GITHUB" />
          <SocialLink href="https://twitter.com" icon={<Twitter size={22} />} label="TWITTER" />
          <SocialLink href="mailto:example@example.com" icon={<Mail size={22} />} label="EMAIL" />
          <SocialLink href="https://linkedin.com" icon={<Linkedin size={22} />} label="LINKEDIN" />
        </div>
      </div>
    </motion.div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-blue-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      <div className="relative z-10 text-slate-600 group-hover:text-blue-600 transition-colors">
        {icon}
      </div>
      
      {/* Tooltip */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold text-slate-500 opacity-0 group-hover:opacity-100 group-hover:-bottom-6 transition-all duration-300 whitespace-nowrap">
        {label}
      </span>
    </a>
  );
}
