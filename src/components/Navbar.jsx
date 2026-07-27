import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flame, ShieldAlert, Cpu } from 'lucide-react';

export const Navbar = () => {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-4 z-50 max-w-6xl mx-auto px-4 mb-8"
    >
      <nav className="glass-card-dark rounded-2xl px-5 py-3.5 flex items-center justify-between border border-purple-500/20 shadow-2xl bg-black/85 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 via-purple-600 to-rose-500 p-[1.5px] flex items-center justify-center shadow-lg shadow-rose-600/30">
            <div className="w-full h-full bg-[#09070f] rounded-[10px] flex items-center justify-center">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-purple-400 text-xl">M</span>
            </div>
          </div>
          <div>
            <h1 className="font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-2">
              Metin <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-950/60 text-red-400 border border-red-500/30 font-mono flex items-center gap-1">
                <Flame className="w-3 h-3 text-red-500 animate-pulse" /> AGY Dev & Athlete
              </span>
            </h1>
            <p className="text-xs text-purple-300/70 font-medium hidden sm:block">Selçuk Üniversitesi • Bilgisayar Mühendisliği</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-rose-300 text-xs font-mono font-medium shadow-inner shadow-red-950">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            SYS_ONLINE: Aktif & Açık
          </div>

          <a 
            href="#contact"
            className="px-4.5 py-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-purple-600 hover:from-red-500 hover:to-purple-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-red-600/30 hover:shadow-purple-600/50 hover:scale-[1.03] active:scale-[0.97] flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-rose-200 animate-spin" style={{ animationDuration: '6s' }} />
            İletişime Geç
          </a>
        </div>
      </nav>
    </motion.header>
  );
};
