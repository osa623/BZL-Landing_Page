import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Purpose() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    
    gsap.fromTo(el.querySelectorAll('.purpose-anim'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section id="purpose" className="py-24 md:py-32 bg-white dark:bg-bzl-blue px-6">
      <div ref={containerRef} className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        <div className="flex-1">
          <h2 className="purpose-anim text-3xl md:text-5xl font-bold tracking-tight text-bzl-blue dark:text-white mb-6">
            Why BuyzonlabsExists
          </h2>
          <div className="w-16 h-2 bg-bzl-gold mb-8 purpose-anim rounded-full"></div>
          <p className="purpose-anim text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-6 font-medium">
            We believe that transforming business and investment ideas into intelligent software systems shouldn't require compromising on elegance or analytical depth.
          </p>
          <p className="purpose-anim text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
            By extracting actionable insights from unstructured annual reports, we generate decision-ready intelligence that speaks directly to your strategy.
          </p>
        </div>

        <div className="flex-1 space-y-6">
          <ul className="space-y-6">
            {[
              'Automated financial report analysis',
              'Research-ready structured insights',
              'Built for investors, academics, and businesses',
              'Designed for clarity and speed'
            ].map((item, idx) => (
              <li key={idx} className="purpose-anim flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:bg-[#03143a] transition-colors border border-transparent hover:border-gray-100 dark:border-[#041a4a]">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-bzl-gold-light text-bzl-blue dark:text-white flex items-center justify-center font-bold shadow-sm">
                  {idx + 1}
                </span>
                <span className="text-bzl-blue dark:text-white font-semibold pt-1 text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
