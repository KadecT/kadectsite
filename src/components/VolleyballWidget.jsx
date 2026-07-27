import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Trophy, Flame, Zap, Activity } from 'lucide-react';

export const VolleyballWidget = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="col-span-1 md:col-span-3 lg:col-span-2 glass-card-dark glass-card-dark-hover rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between border border-red-950/60 shadow-xl"
    >
      {/* Background Red/Purple Gradient Light */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-red-900 to-purple-950 border border-red-500/30 flex items-center justify-center text-xl shadow-lg shadow-red-950">
              🏐
            </div>
            <div>
              <h2 className="font-extrabold text-lg text-white flex items-center gap-2">
                Voleybol & Spor
              </h2>
              <p className="text-xs text-zinc-400">Lisanslı Profesyonel Sporcu</p>
            </div>
          </div>

          <div className="px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-mono font-bold flex items-center gap-1 shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 text-red-500" /> Lisanslı Sporcu
          </div>
        </div>

        {/* Highlight Court Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/60 via-[#180a1d] to-black border border-red-500/30 mb-4 relative overflow-hidden shadow-inner">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-red-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1 font-mono">
                <Flame className="w-3.5 h-3.5 animate-bounce text-red-500" /> Pozisyon & Forma
              </div>
              <div className="text-xl font-black text-white">Smaçör/Pasör Çaprazı/Pasör</div>
              <div className="text-xs text-zinc-400 mt-0.5">Selçuk Üniversitesi & Kulüp Takımı</div>
            </div>
            <div className="text-right font-mono">
              <div className="text-xs text-zinc-500">Forma</div>
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">#6</div>
            </div>
          </div>

          {/* Live score simulation ticker */}
          <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-400">Son Maç Skoru:</span>
            <span className="text-red-400 font-bold bg-red-950/80 px-2 py-0.5 rounded border border-red-800">Teknoloji Fakültesi 3-2 Tıp Fakültesi</span>
          </div>
        </div>

        {/* Dynamic Physical Metric Gauges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
          <div className="p-3 rounded-2xl bg-black/80 border border-red-900/30 text-center hover:border-red-500/50 transition-all">
            <div className="text-[11px] text-zinc-500 mb-0.5 font-mono">Sıçrama</div>
            <div className="font-mono font-black text-red-500 text-base">300 cm</div>
            <div className="text-[10px] text-zinc-400 font-mono">Smaç Yüksekliği</div>
          </div>

          <div className="p-3 rounded-2xl bg-black/80 border border-purple-900/30 text-center hover:border-purple-500/50 transition-all">
            <div className="text-[11px] text-zinc-500 mb-0.5 font-mono">Blok Reach</div>
            <div className="font-mono font-black text-purple-400 text-base">290 cm</div>
            <div className="text-[10px] text-zinc-400 font-mono">Blok Yüksekliği</div>
          </div>

          <div className="p-3 rounded-2xl bg-black/80 border border-red-900/30 text-center hover:border-red-500/50 transition-all">
            <div className="text-[11px] text-zinc-500 mb-0.5 font-mono">Resmi Maç</div>
            <div className="font-mono font-black text-rose-400 text-base">50+</div>
            <div className="text-[10px] text-zinc-400 font-mono">Lig Karşılaşması</div>
          </div>

          <div className="p-3 rounded-2xl bg-black/80 border border-purple-900/30 text-center hover:border-purple-500/50 transition-all">
            <div className="text-[11px] text-zinc-500 mb-0.5 font-mono">Galibiyet</div>
            <div className="font-mono font-black text-purple-300 text-base">%64</div>
            <div className="text-[10px] text-zinc-400 font-mono">Win Rate</div>
          </div>
        </div>

        {/* Live Momentum Indicator */}
        <div className="p-3 rounded-2xl bg-black/90 border border-white/5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
            <span className="text-zinc-300 font-medium">Sezon Maçları & Antrenman Modu</span>
          </div>
          <span className="text-red-400 font-mono text-[11px] font-bold">2026 Sezonu</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
        <span>Branş: Erkek Voleybol</span>
        <span className="text-red-400 font-bold flex items-center gap-1">
          <Trophy className="w-3.5 h-3.5 text-red-500" /> Üniversite Ligi
        </span>
      </div>
    </motion.div>
  );
};
