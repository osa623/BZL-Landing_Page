import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    
    gsap.fromTo('.stat-item',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        }
      }
    );
  }, []);

  const stats = [
    { value: '10x', label: 'Faster extraction' },
    { value: '100%', label: 'Data structuration' },
    { value: 'Multi', label: 'Market compatibility' },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#03143a] border-b border-gray-100 dark:border-[#041a4a] px-6">
      <div ref={containerRef} className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center divide-y md:divide-y-0 md:divide-x divide-gray-200 gap-8 md:gap-0">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-item flex-1 text-center py-4 flex flex-col items-center justify-center">
            <div className="text-4xl md:text-5xl font-extrabold text-bzl-blue dark:text-white mb-2 font-display">{stat.value}</div>
            <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
