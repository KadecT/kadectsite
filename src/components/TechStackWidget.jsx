import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Cpu, Sparkles, Flame, Layers } from 'lucide-react';

const techSkills = [
  { name: 'React.js', category: 'Frontend', level: 'Ileri Level', color: 'from-purple-600 to-rose-600', icon: '⚛️', percent: 90 },
  { name: 'Tailwind CSS', category: 'Styling', level: 'Ileri Level', color: 'from-red-600 to-rose-500', icon: '🎨', percent: 95 },
  { name: 'JavaScript / ES6+', category: 'Core', level: 'Ileri Level', color: 'from-amber-500 to-red-600', icon: '⚡', percent: 92 },
  { name: 'C / C++', category: 'Computer Science', level: 'Orta-Ileri', color: 'from-purple-700 to-indigo-700', icon: '💻', percent: 85 },
  { name: 'Python', category: 'Algorithms', level: 'Orta Level', color: 'from-rose-600 to-purple-600', icon: '🐍', percent: 80 },
  { name: 'Antigravity AI', category: 'Agentic SDK', level: 'Specialist', color: 'from-red-600 via-rose-600 to-purple-600', icon: '🚀', percent: 98 },
  { name: 'Git & GitHub', category: 'DevOps', level: 'Pratik', color: 'from-red-700 to-rose-600', icon: '🐙', percent: 88 },
  { name: 'HTML5 & CSS3', category: 'Web Standards', level: 'Uzman', color: 'from-amber-600 to-red-600', icon: '🌐', percent: 96 }
];

export const TechStackWidget = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="col-span-1 md:col-span-3 lg:col-span-2 glass-card-dark glass-card-dark-hover rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between border border-red-950/60 shadow-xl"
    >
      <div className="absolute -top-16 -right-16 w-60 h-60 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center shadow-lg">
              <Code className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h2 className="font-extrabold text-lg text-white">Yetenekler & Stack</h2>
              <p className="text-xs text-zinc-400">Yazılım Mühendisliği Araçları</p>
            </div>
          </div>

          <div className="px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-mono font-bold flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" /> Antigravity AI
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {techSkills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.03, x: 2 }}
              className="p-3 rounded-2xl bg-black/90 border border-purple-900/30 hover:border-red-500/40 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg group-hover:scale-110 transition-transform">{skill.icon}</span>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-white text-xs truncate group-hover:text-red-300 transition-colors">
                    {skill.name}
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono">{skill.category}</div>
                </div>
              </div>

              {/* Skill meter bar */}
              <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percent}%` }}
                  transition={{ duration: 0.8 }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
        <span className="flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-zinc-400" /> Selçuk Üni Mühendislik
        </span>
        <span className="text-red-400 font-bold">Continuous Mastery</span>
      </div>
    </motion.div>
  );
};
