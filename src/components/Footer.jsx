import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const containerRef = useRef(null);

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
    <footer ref={containerRef} className="py-12 border-t border-gray-100 dark:border-[#041a4a] bg-white dark:bg-bzl-blue">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold text-bzl-blue dark:text-white tracking-tight flex items-center gap-2">
          <div className="w-5 h-5 bg-bzl-blue text-white dark:bg-[#0a1e4a] dark:text-white rounded text-bzl-gold flex items-center justify-center text-[10px] font-black">B</div>
          Buyzonlabs 
        </div>
        
        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium flex flex-col md:flex-row items-center justify-between gap-6 w-full md:w-auto">
          <a href="mailto:hello@buyzonlabs.com" className="hover:text-bzl-gold transition-colors">
            hello@buyzonlabs.com
          </a>
          <span>&copy; {new Date().getFullYear()} Buyzonlabs . All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
