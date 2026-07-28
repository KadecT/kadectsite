import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Cpu, Activity, Award, ArrowUpRight, Zap, Terminal } from 'lucide-react';

export const HeroSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="col-span-1 md:col-span-3 lg:col-span-4 glass-card glass-card-hover rounded-3xl p-6 sm:p-8 relative overflow-hidden group border border-white/10"
    >
      {/* Dynamic Background Glow Effect */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/25 transition-all duration-700"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-600/25 transition-all duration-700"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Bio & Intro */}
        <div className="lg:col-span-8 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-xs font-mono text-cyan-400 backdrop-blur-md">
            <Terminal className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>sys.init("whoiskadect")</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Merhaba, ben <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">Metin</span> 👋
          </h1>

          <p className="text-lg sm:text-xl font-medium text-zinc-300 flex items-center flex-wrap gap-2">
            <span className="text-purple-400 font-bold">Computer Engineering Student</span> & <span className="text-cyan-400 font-bold">Licensed Athlete</span>
          </p>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
            <strong className="text-zinc-200">Selçuk Üniversitesi Bilgisayar Mühendisliği</strong> öğrencisiyim. Modern web mimarileri, yüksek performanslı yazılımlar ve <span className="text-purple-400 font-semibold">Antigravity AI</span> agent ekosistemleri üzerinde çalışıyorum. Aynı zamanda lisanslı bir voleybolcu ve tutkulu bir oyuncuyum.
          </p>

          {/* Key Tag Badges */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-950/40 border border-purple-800/50 text-purple-300 text-xs font-medium">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              Selçuk Üniversitesi
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/40 border border-cyan-800/50 text-cyan-300 text-xs font-medium">
              <Code2 className="w-4 h-4 text-cyan-400" />
              Bilgisayar Mühendisliği
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 text-xs font-medium">
              <Zap className="w-4 h-4 text-emerald-400" />
              Antigravity Stack
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-950/40 border border-amber-800/50 text-amber-300 text-xs font-medium">
              <Award className="w-4 h-4 text-amber-400" />
              Lisanslı Voleybolcu
            </div>
          </div>
        </div>

        {/* Right Column: Quick Stats Grid */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-3 sm:gap-4">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="p-4 rounded-2xl bg-zinc-900/80 border border-white/5 flex flex-col justify-between hover:border-purple-500/40 transition-all"
          >
            <div className="text-zinc-500 text-xs font-medium mb-1">Mühendislik</div>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">2. Sınıf</div>
            <div className="text-[11px] text-purple-400 mt-1 flex items-center gap-1">
              <GraduationCap className="w-3 h-3" /> Selçuk Üni
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="p-4 rounded-2xl bg-zinc-900/80 border border-white/5 flex flex-col justify-between hover:border-cyan-500/40 transition-all"
          >
            <div className="text-zinc-500 text-xs font-medium mb-1">Spor</div>
            <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">50+</div>
            <div className="text-[11px] text-zinc-400 mt-1 flex items-center gap-1">
              <Activity className="w-3 h-3 text-cyan-400" /> Profesyonel Maç
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="p-4 rounded-2xl bg-zinc-900/80 border border-white/5 flex flex-col justify-between hover:border-emerald-500/40 transition-all"
          >
            <div className="text-zinc-500 text-xs font-medium mb-1">Gaming</div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">Top %5</div>
            <div className="text-[11px] text-zinc-400 mt-1 flex items-center gap-1">
              <Cpu className="w-3 h-3 text-emerald-400" /> Valorant / R6
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="p-4 rounded-2xl bg-zinc-900/80 border border-white/5 flex flex-col justify-between hover:border-indigo-500/40 transition-all"
          >
            <div className="text-zinc-500 text-xs font-medium mb-1">Kod Saati</div>
            <div className="text-2xl sm:text-3xl font-black text-indigo-400 font-mono">2,400+</div>
            <div className="text-[11px] text-zinc-400 mt-1 flex items-center gap-1">
              <Terminal className="w-3 h-3 text-indigo-400" /> Git Commit
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
