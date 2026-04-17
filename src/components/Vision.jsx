import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Vision() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    
    gsap.fromTo(el,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
        }
      }
    );
  }, []);

  return (
    <section id="vision" className="py-24 md:py-40 bg-bzl-blue dark:bg-[#020B22] text-white px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/5 dark:bg-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)] pointer-events-none"></div>
      <div ref={containerRef} className="max-w-4xl mx-auto text-center space-y-10 relative z-10 px-4 md:px-0">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.15]">
          Financial intelligence should be accessible, structured, and actionable.
        </h2>
        
        <div className="w-24 h-2 bg-white/20 mx-auto rounded-full"></div>
        
        <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed">
          At Buyzonlabs, we replace endless hours of manual research with precision-engineered software that speaks the language of the market and guides intelligent decisions.
        </p>
      </div>
    </section>
  );
}
