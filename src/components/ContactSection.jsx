import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, MessageSquare, Copy, Check, Sparkles, Heart, Flame } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/KadecT',
    icon: Github,
    color: 'hover:bg-zinc-900 hover:border-red-500/50 text-zinc-300',
    description: 'Best ai dev in da world',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/metin-oktar-256892259/',
    icon: Linkedin,
    color: 'hover:bg-purple-950/60 hover:border-purple-500/50 text-purple-300',
    description: 'Yeni projelerimden haberdar olmak için hesabımı takip etmeyi unutmayın',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: Instagram,
    color: 'hover:bg-red-950/60 hover:border-red-500/50 text-red-300',
    description: '@metin_kt4r',
  },
  {
    name: 'Discord',
    url: 'https://discord.com',
    icon: MessageSquare,
    color: 'hover:bg-indigo-950/60 hover:border-indigo-500/50 text-indigo-300',
    description: 'KadecT',
  }
];

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "rmetinoktar@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.footer 
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="col-span-1 md:col-span-3 lg:col-span-4 glass-card-dark glass-card-dark-hover rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-red-950/60 shadow-2xl"
    >
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            İletişime Geçin <Sparkles className="w-5 h-5 text-red-500 animate-spin" style={{ animationDuration: '8s' }} />
          </h2>
          <p className="text-sm text-zinc-400 mt-1 max-w-md">
            Yazılım projeleri, voleybol organizasyonları veya oyun davetleri için benimle dilediğiniz zaman bağlantı kurabilirsiniz.
          </p>
        </div>

        <div className="w-full md:w-auto flex items-center gap-3">
          <button
            onClick={handleCopyEmail}
            className="w-full md:w-auto px-5 py-3 rounded-2xl bg-black hover:bg-zinc-900 border border-red-500/40 text-white font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg group hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="w-4 h-4 text-red-500 group-hover:rotate-12 transition-transform" />
            <span className="font-mono">{email}</span>
            {copied ? (
              <span className="flex items-center gap-1 text-emerald-400 text-xs font-bold pl-2 border-l border-white/10">
                <Check className="w-3.5 h-3.5" /> Kopyalandı!
              </span>
            ) : (
              <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors pl-1" />
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6">
        {socialLinks.map((social) => {
          const IconComp = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className={`p-4 rounded-2xl bg-black/80 border border-purple-900/30 ${social.color} transition-all duration-300 flex items-center gap-3 group shadow-md`}
            >
              <div className="p-2.5 rounded-xl bg-zinc-900 group-hover:bg-black text-white transition-colors">
                <IconComp className="w-5 h-5 text-red-500" />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-sm text-white">{social.name}</div>
                <div className="text-[11px] text-zinc-500 truncate">{social.description}</div>
              </div>
            </motion.a>
          );
        })}
      </div>

      <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-2 font-mono">
        <div className="flex items-center gap-1.5">
          <span>© {new Date().getFullYear()} Metin</span>
          <span>•</span>
          <span>Selçuk Üniversitesi Bilgisayar Mühendisliği</span>
        </div>
        <div className="flex items-center gap-1 text-[11px]">
          Crafted with React & <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for Metin
        </div>
      </div>
    </motion.footer>
  );
};
