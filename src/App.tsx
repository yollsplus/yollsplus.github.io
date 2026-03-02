/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import ProfileCard from './components/ProfileCard';
import MarkdownViewer from './components/MarkdownViewer';
import ParticleBackground from './components/ParticleBackground';
import aboutContent from './content/about.md?raw'; // Vite allows importing md as raw string

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      <div className="min-h-screen bg-grid py-20 px-4 md:px-8 relative selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
        <ParticleBackground />
        
        {/* Background Technical Elements */}
        <div className="fixed top-0 left-0 w-full h-12 bg-gradient-to-b from-white to-transparent z-40 pointer-events-none" />
        
        {/* Top HUD */}
        <div className="fixed top-6 left-6 z-40 hidden md:block">
          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span>SYSTEM_ONLINE</span>
          </div>
          <div className="h-[1px] w-24 bg-slate-300 mt-1" />
        </div>

        <div className="fixed top-6 right-6 z-40 hidden md:block text-right">
          <div className="text-[10px] font-mono text-slate-400">SECURE_CONNECTION</div>
          <div className="flex justify-end gap-1 mt-1">
            <div className="w-1 h-3 bg-blue-500/80" />
            <div className="w-1 h-3 bg-blue-500/60" />
            <div className="w-1 h-3 bg-blue-500/40" />
            <div className="w-1 h-3 bg-blue-500/20" />
          </div>
        </div>

        {/* Side Decorations */}
        <div className="fixed left-8 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-slate-300 to-transparent hidden xl:block" />
        <div className="fixed right-8 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-slate-300 to-transparent hidden xl:block" />

        {/* Bottom HUD */}
        <div className="fixed bottom-6 left-6 z-40 hidden md:block font-mono text-[10px] text-slate-300">
          COORD: 34.0522° N, 118.2437° W
        </div>

        <main className="relative z-10 max-w-5xl mx-auto pt-12">
          <ProfileCard />
          <MarkdownViewer content={aboutContent} />
        </main>

        <footer className="mt-20 pb-10 text-center font-mono text-xs text-slate-400 opacity-60">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-[1px] w-8 bg-slate-300" />
            <div className="w-2 h-2 border border-slate-400 rotate-45" />
            <div className="h-[1px] w-8 bg-slate-300" />
          </div>
          <p>© {new Date().getFullYear()} // DESIGNED BY AI</p>
        </footer>
      </div>
    </>
  );
}

