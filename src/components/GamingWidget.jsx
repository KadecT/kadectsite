import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Crosshair, Shield, Zap, RefreshCw, Trophy, Target, Flame, Activity } from 'lucide-react';

const gamesData = [
  {
    id: 'valorant',
    name: 'Valorant',
    icon: Crosshair,
    color: 'from-red-600 via-rose-600 to-purple-800',
    accentColor: 'text-red-400',
    borderColor: 'border-red-500/40',
    glowColor: 'shadow-red-600/30',
    rank: 'Radiant / Immortal 2',
    role: 'Duelist / Initiator',
    mainChar: 'Jett / Fade',
    hsRate: 2.4,
    kdRatio: '1.96',
    winRate: 66.2,
    hoursPlayed: '1,563 hrs',
    feed: 'KADECT CLUTCHED THE LAST ROUND EZ WIN'
  },
  {
    id: 'r6',
    name: 'Rainbow Six Siege',
    icon: Shield,
    color: 'from-amber-600 via-red-600 to-purple-900',
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-500/40',
    glowColor: 'shadow-amber-500/30',
    rank: 'Champion / Champ 2',
    role: 'Entry Fragger / Anchor',
    mainChar: 'Ash / Vigil',
    hsRate: 3.1,
    kdRatio: '2.33',
    winRate: 62.8,
    hoursPlayed: '1300+ hrs',
    feed: 'WP KADECT NICE ONE'
  },
  {
    id: 'rocket',
    name: 'Rocket League',
    icon: Zap,
    color: 'from-purple-600 via-rose-600 to-red-600',
    accentColor: 'text-purple-400',
    borderColor: 'border-purple-500/40',
    glowColor: 'shadow-purple-500/30',
    rank: 'Grand Champion II',
    role: 'First Striker',
    mainChar: 'Octane / Fennec',
    kdRatio: '1,680 MMR',
    winRate: 68.5,
    hoursPlayed: '740 hrs',
    feed: 'KADECT OVERTIME GOAL HE WON THE TOURNAMENT'
  }
];

export const GamingWidget = () => {
  const [selectedGame, setSelectedGame] = useState(gamesData[0]);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 900);
  };

  const IconComponent = selectedGame.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="col-span-1 md:col-span-3 lg:col-span-2 glass-card-dark glass-card-dark-hover rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between border border-red-950/60 shadow-xl"
    >
      {/* Red/Purple Glow */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-950/80 border border-red-500/30 flex items-center justify-center shadow-lg shadow-red-950">
              <Gamepad2 className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <h2 className="font-extrabold text-lg text-white flex items-center gap-2">
                Gaming HQ <span className="text-xs px-2 py-0.5 rounded bg-red-950 text-red-400 border border-red-800 font-mono">RANKED</span>
              </h2>
              <p className="text-xs text-zinc-400">Favori Oyunlar & Canlı Stat Telemetrisi</p>
            </div>
          </div>

          {/* Radar Scan graphic */}
          <div className="relative w-8 h-8 rounded-full border border-red-500/40 bg-black flex items-center justify-center overflow-hidden shadow-inner">
            <div className="absolute inset-0 border border-dashed border-red-500/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="w-1 h-1 bg-red-500 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Game selector tabs */}
        <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-black/90 border border-purple-900/30 mb-4">
          {gamesData.map((game) => {
            const GameIcon = game.icon;
            const isSelected = selectedGame.id === game.id;
            return (
              <button
                key={game.id}
                onClick={() => setSelectedGame(game)}
                className={`py-2 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  isSelected 
                    ? `bg-gradient-to-r ${game.color} text-white shadow-lg ${game.glowColor}` 
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                }`}
              >
                <GameIcon className="w-3.5 h-3.5" />
                <span className="truncate">{game.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Selected Game Info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedGame.id}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25 }}
            className="space-y-3"
          >
            {/* Rank Card Banner */}
            <div className={`p-4 rounded-2xl bg-gradient-to-r from-black via-zinc-950 to-[#120817] border ${selectedGame.borderColor} relative overflow-hidden shadow-xl`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-tr ${selectedGame.color} text-white shadow-lg`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base">{selectedGame.name}</h3>
                    <p className={`text-xs font-bold ${selectedGame.accentColor}`}>{selectedGame.rank}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-950/80 border border-red-500/30 text-red-400 text-[11px] font-mono font-bold">
                    <Flame className="w-3 h-3 text-red-500 animate-pulse" /> LIVE
                  </span>
                </div>
              </div>

              {/* Ticker marquee */}
              <div className="mt-3 pt-2 border-t border-white/5 text-[11px] font-mono text-zinc-300 flex items-center gap-2">
                <span className="text-red-500 font-bold">FEED:</span>
                <span className="text-zinc-300 truncate">{selectedGame.feed}</span>
              </div>
            </div>

            {/* Animated Stat Progress Bars */}
            <div className="p-3.5 rounded-2xl bg-black/80 border border-white/5 space-y-2.5">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-zinc-400">Win Rate</span>
                  <span className="text-emerald-400 font-bold">%{selectedGame.winRate}</span>
                </div>
                <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedGame.winRate}%` }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-red-600 to-rose-500 rounded-full"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-zinc-400">HS % / Performans</span>
                  <span className="text-purple-400 font-bold">{selectedGame.hsRate}%</span>
                </div>
                <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedGame.hsRate}%` }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Gamer Tag */}
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
        <span>Tag: Metin#TURK</span>
        <span className="text-red-400 font-bold flex items-center gap-1">
          <Trophy className="w-3.5 h-3.5 text-red-500" /> Top Regional Elo
        </span>
      </div>
    </motion.div>
  );
};
