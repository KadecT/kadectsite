import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Disc, Radio, Heart, Music, Flame } from 'lucide-react';

const trackList = [
  {
    id: 1,
    title: 'Starboy',
    artist: 'The Weeknd, Daft Punk',
    album: 'Starboy Album',
    duration: 230,
    coverColor: 'from-red-600 via-purple-700 to-black',
    accentColor: 'text-red-500',
    barColor: 'bg-red-500',
    lyrics: '♪ I\'m tryna put you in the worst mood, ah...'
  },
  {
    id: 2,
    title: 'Midnight City',
    artist: 'M83',
    album: 'Hurry Up, We\'re Dreaming',
    duration: 243,
    coverColor: 'from-purple-600 via-rose-700 to-black',
    accentColor: 'text-purple-400',
    barColor: 'bg-purple-400',
    lyrics: '♪ Waiting in a car, waiting for a ride in the dark...'
  },
  {
    id: 3,
    title: 'Can\'t Hold Us',
    artist: 'Macklemore & Ryan Lewis',
    album: 'The Heist',
    duration: 258,
    coverColor: 'from-rose-600 via-red-700 to-black',
    accentColor: 'text-rose-400',
    barColor: 'bg-rose-500',
    lyrics: '♪ Return of the Mack, get up, what it is...'
  }
];

export const MusicWidget = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(72);
  const [isLiked, setIsLiked] = useState(true);

  const currentTrack = trackList[currentTrackIndex];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= currentTrack.duration ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrack.duration]);

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % trackList.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev === 0 ? trackList.length - 1 : prev - 1));
    setProgress(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="col-span-1 md:col-span-3 lg:col-span-2 glass-card-dark glass-card-dark-hover rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between border border-red-950/60 shadow-xl"
    >
      {/* Red/Purple Glow */}
      <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-tr ${currentTrack.coverColor} opacity-25 rounded-full blur-3xl transition-all duration-700 pointer-events-none`}></div>

      <div>
        {/* Header Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-red-950/80 border border-red-500/30 flex items-center justify-center shadow-lg">
              <Radio className="w-4 h-4 text-red-500" />
            </div>
            <div>
              <span className="text-xs font-extrabold text-white flex items-center gap-1.5">
                Spotify <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              </span>
              <p className="text-[11px] text-zinc-400">Şu An Dinleniyor</p>
            </div>
          </div>

          {/* 10-Bar Soundwave frequency visualizer */}
          <div className="flex items-end gap-1 h-6 px-2.5 py-1 rounded-lg bg-black border border-red-900/40">
            {[0.6, 1, 0.4, 0.9, 0.3, 0.8, 0.5, 0.9, 0.4, 0.7].map((height, idx) => (
              <motion.div
                key={idx}
                animate={isPlaying ? { height: ['15%', '100%', '30%', '90%', '40%'] } : { height: '15%' }}
                transition={{
                  duration: 0.7 + (idx % 4) * 0.15,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
                className={`w-1 rounded-full ${idx % 2 === 0 ? 'bg-red-500' : 'bg-purple-500'}`}
              />
            ))}
          </div>
        </div>

        {/* Track Display Card */}
        <div className="p-4 rounded-2xl bg-black/90 border border-purple-900/30 relative overflow-hidden flex items-center gap-4 mb-3 shadow-inner">
          <div className="relative group shrink-0">
            <motion.div 
              animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${currentTrack.coverColor} p-1 shadow-xl flex items-center justify-center border border-red-500/30`}
            >
              <div className="w-full h-full rounded-xl bg-black/90 flex items-center justify-center">
                <Disc className={`w-8 h-8 ${currentTrack.accentColor}`} />
              </div>
            </motion.div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-white text-base truncate">{currentTrack.title}</h3>
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className="text-zinc-400 hover:text-red-500 transition-colors p-1"
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
              </button>
            </div>
            <p className="text-xs text-zinc-400 truncate">{currentTrack.artist}</p>
            <p className="text-[11px] text-zinc-500 truncate mt-0.5">{currentTrack.album}</p>
          </div>
        </div>

        {/* Lyrics Marquee Ticker */}
        <div className="p-2 px-3 rounded-xl bg-red-950/40 border border-red-900/30 mb-3 text-xs font-mono text-red-300 truncate">
          {currentTrack.lyrics}
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5 mb-4 font-mono">
          <div className="relative w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-purple-500 transition-all duration-300 rounded-full" 
              style={{ width: `${(progress / currentTrack.duration) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-zinc-500">
            <span>{formatTime(progress)}</span>
            <span>{formatTime(currentTrack.duration)}</span>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex items-center justify-between px-4">
          <button onClick={handlePrev} className="p-2 rounded-xl text-zinc-400 hover:text-white transition-all">
            <SkipBack className="w-5 h-5" />
          </button>

          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600 via-rose-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-red-600/30 hover:scale-105 active:scale-95 transition-all"
          >
            {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white ml-0.5" />}
          </button>

          <button onClick={handleNext} className="p-2 rounded-xl text-zinc-400 hover:text-white transition-all">
            <SkipForward className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
        <span className="flex items-center gap-1.5">
          <Music className="w-3.5 h-3.5 text-zinc-400" /> Metin's Crimson Favorites
        </span>
        <span className="text-red-400 font-bold">FLAC 24-bit / 96kHz</span>
      </div>
    </motion.div>
  );
};
