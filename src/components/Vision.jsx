import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Vision() {
  const containerRef = useRef(null);
  const { language } = useLanguage();

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

  const content = {
    en: {
      subtitle: 'RESEARCH PHILOSOPHY',
      title: 'Financial intelligence should be accessible, structured, and actionable.',
      desc: 'At Buyzonlabs, we replace endless hours of manual research with precision-engineered software that speaks the language of the market and guides intelligent decisions.'
    },
    si: {
      subtitle: 'පර්යේෂණ දර්ශනය',
      title: 'මූල්‍ය හා ව්‍යාපාර විශ්ලේෂණ දැනුම පහසුවෙන්, පැහැදිලිව සහ ක්‍රියාකාරී ලෙස සෑම කෙනෙකුටම ලැබිය යුතුය.',
      desc: 'Buyzonlabs හිදී, අපි නිමක් නැති අතින් කරන ලද පර්යේෂණ පැය ගණන, වෙළඳපල භාෂාව කථා කරන සහ බුද්ධිමත් තීරණ සඳහා මඟ පෙන්වන නිරවද්‍ය-ඉංජිනේරු මෘදුකාංග මඟින් ප්‍රතිස්ථාපනය කරමු.'
    }
  };

  const t = content[language];

  return (
    <section id="vision" className="py-24 md:py-40 bg-bzl-blue dark:bg-[#020B22] text-white px-6 relative overflow-hidden bg-noise-pattern">
      <div className="absolute inset-0 bg-white/5 dark:bg-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)] pointer-events-none"></div>
      <div ref={containerRef} className="max-w-4xl mx-auto text-center space-y-10 relative z-10 px-4 md:px-0">
        <p className="text-sm font-bold tracking-widest text-[#00E5FF] uppercase">{t.subtitle}</p>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.15]">
          {t.title}
        </h2>
        
        <div className="w-24 h-2 bg-white/20 mx-auto rounded-full"></div>
        
        <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed">
          {t.desc}
        </p>
      </div>
    </section>
  );
}
