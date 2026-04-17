import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Audience() {
  const containerRef = useRef(null);
  const { language } = useLanguage();

  useEffect(() => {
    const el = containerRef.current;
    
    gsap.fromTo('.audience-card',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
        }
      }
    );
  }, []);

  const content = {
    en: {
      title: 'Who Is This For?',
      audiences: [
        { title: 'Investors', text: 'Uncover actionable patterns across complex financial disclosures.' },
        { title: 'Market Researchers', text: 'Extract multi-year intelligence instantly.' },
        { title: 'Students & Educators', text: 'Learn from structured, deep analytical datasets.' },
        { title: 'Business Owners', text: 'Benchmark against competitors with unparalleled clarity.' },
      ]
    },
    si: {
      title: 'මෙමඟින් ප්‍රතිලාභ ලබන්නේ කවුරුන්ද?',
      audiences: [
        { title: 'ආයෝජකයින්', text: 'සංකීර්ණ මූල්‍ය වාර්තා හරහා ක්‍රියාකාරී රටා අනාවරණය කරගන්න.' },
        { title: 'වෙළෙඳපොළ පර්යේෂකයින්', text: 'වසර ගණනාවක තොරතුරු ක්ෂණිකව උකහා ගන්න.' },
        { title: 'සිසුන් සහ අධ්‍යාපනඥයින්', text: 'ව්‍යුහගත, ගැඹුරු විශ්ලේෂණාත්මක දත්ත සමුදායන්ගෙන් ඉගෙන ගන්න.' },
        { title: 'ව්‍යාපාරිකයින්', text: 'අසමසම පැහැදිලිකමකින් යුතුව වෙළඳපල තරඟකරුවන් සමඟ සසඳන්න.' },
      ]
    }
  };

  const t = content[language];

  return (
    <section id="audience" className="py-24 md:py-32 bg-white dark:bg-bzl-blue px-6">
      <div ref={containerRef} className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-bzl-blue dark:text-white mb-16 text-center">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.audiences.map((audience, idx) => (
            <div 
              key={idx} 
              className="audience-card group relative p-8 bg-white dark:bg-bzl-blue border border-gray-100 dark:border-[#041a4a] rounded-2xl shadow-sm hover:shadow-xl hover:border-bzl-gold/40 hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-bzl-gold-light/50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 bg-bzl-gold text-bzl-blue dark:text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-sm">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-bzl-blue dark:text-white mb-4">{audience.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium">{audience.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
