import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GamingWidget } from './components/GamingWidget';
import { VolleyballWidget } from './components/VolleyballWidget';
import { MusicWidget } from './components/MusicWidget';
import { TechStackWidget } from './components/TechStackWidget';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-100 relative selection:bg-purple-500 selection:text-white pb-12">
      {/* Background Ambient Grid & Radial Gradients */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-40"></div>
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Navigation Bar */}
        <Navbar />

        {/* Bento Grid Layout Container */}
        <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* 1. Hero Section (Spans all columns) */}
          <HeroSection />

          {/* 2. Gaming Widget (Spans 2 columns on lg) */}
          <GamingWidget />

          {/* 3. Volleyball Widget (Spans 2 columns on lg) */}
          <VolleyballWidget />

          {/* 4. Spotify Music Player Widget (Spans 2 columns on lg) */}
          <MusicWidget />

          {/* 5. Tech Stack & Engineering Skills Widget (Spans 2 columns on lg) */}
          <TechStackWidget />

          {/* 6. Contact & Social Media Section (Spans all columns) */}
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
