import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const containerRef = useRef(null);
  const { language } = useLanguage();

  useEffect(() => {
    const el = containerRef.current;
    
    gsap.fromTo(el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',
        }
      }
    );
  }, []);

  return (
    <footer ref={containerRef} className="py-12 border-t border-gray-100 dark:border-[#041a4a] bg-white dark:bg-bzl-blue bg-noise-pattern">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-8">
        
        {/* Sri Lankan Trust Anchor */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 bg-gray-100 dark:bg-[#0a1e4a] rounded-full flex items-center justify-center text-xl shadow-sm border border-gray-200 dark:border-gray-800">
            🇱🇰
          </div>
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 dark:text-gray-500 uppercase">
            Built & Researched in Sri Lanka
          </p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent my-4"></div>

        <div className="w-full flex w-full flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-bzl-blue dark:bg-black text-white rounded-lg flex items-center justify-center font-black shadow-md border border-gray-200 dark:border-gray-800">
                B
             </div>
             <span className="text-xl font-bold tracking-tight text-bzl-blue dark:text-white">Buyzonlabs</span>
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400 font-medium flex flex-col md:flex-row items-center gap-6">
            <a href="mailto:hello@buyzonlabs.com" className="hover:text-bzl-gold transition-colors font-mono">
              hello@buyzonlabs.com
            </a>
            <span className="opacity-50 hidden md:block">|</span>
            <span>&copy; {new Date().getFullYear()} Buyzonlabs. {language === 'en' ? 'All rights reserved.' : 'සියලුම හිමිකම් ඇවිරිණි.'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
