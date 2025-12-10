import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { PainPoints } from './components/PainPoints';
import { ROI } from './components/ROI';
import { Features } from './components/Features';
import { ModelList } from './components/ModelList';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Menu, X, Send } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500 selection:text-white font-sans">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#050505]/95 backdrop-blur-lg border-b border-white/10 shadow-lg' : 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5'
      }`}>
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <a href="#top" className="text-xl md:text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-indigo-300 hover:to-purple-300 transition-all">
            AI Business
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium text-slate-300">
            <a href="#market" className="hover:text-white transition-colors relative group">
              Рынок
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#models" className="hover:text-white transition-colors relative group">
              Нейросети
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#investment" className="hover:text-white transition-colors relative group">
              Инвестиции
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="https://t.me/dmitriy_ferixdi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-medium transition-all transform hover:scale-105"
            >
              <Send className="w-4 h-4" />
              Связаться
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="container mx-auto px-4 py-4 space-y-3 border-t border-white/5">
            <a 
              href="#market" 
              onClick={closeMenu}
              className="block py-3 px-4 rounded-lg hover:bg-slate-900/50 transition-colors text-slate-300 hover:text-white"
            >
              Рынок
            </a>
            <a 
              href="#models" 
              onClick={closeMenu}
              className="block py-3 px-4 rounded-lg hover:bg-slate-900/50 transition-colors text-slate-300 hover:text-white"
            >
              Нейросети
            </a>
            <a 
              href="#investment" 
              onClick={closeMenu}
              className="block py-3 px-4 rounded-lg hover:bg-slate-900/50 transition-colors text-slate-300 hover:text-white"
            >
              Инвестиции
            </a>
            <a 
              href="https://t.me/dmitriy_ferixdi" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 py-3 px-4 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-medium transition-all"
            >
              <Send className="w-4 h-4" />
              Связаться в Telegram
            </a>
          </div>
        </div>
      </nav>

      <main id="top">
        <Hero />
        <SocialProof />
        <PainPoints />
        <ROI />
        <Features />
        <ModelList />
        <About />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;