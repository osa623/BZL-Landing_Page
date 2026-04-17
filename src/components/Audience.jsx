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
      subtitle: 'BUILT FOR',
      title: 'Who We Are Building For',
      subheading: 'Tools designed for serious decision makers.',
      audiences: [
        { title: 'Investors', text: 'Make confident decisions faster with extracted insights.' },
        { title: 'Market Researchers', text: 'Analyze multi-year intelligence in seconds.' },
        { title: 'Students & Educators', text: 'Access clean, structured data for academic analysis.' },
        { title: 'Business Owners', text: 'Benchmark against competitors effortlessly.' },
      ]
    },
    si: {
      subtitle: 'කා සඳහාද',
      title: 'මෙය කා සඳහාද?',
      subheading: 'බැරෑරුම් තීරණ ගන්නන් සඳහා නිර්මාණය කර ඇති මෙවලම්.',
      audiences: [
        { title: 'ආයෝජකයින්', text: 'උකහා ගත් තොරතුරු සමඟ වේගවත්ව විශ්වාසදායක තීරණ ගන්න.' },
        { title: 'වෙළෙඳපොළ පර්යේෂකයින්', text: 'තත්පර කිහිපයකින් වසර ගණනාවක තොරතුරු විශ්ලේෂණය කරන්න.' },
        { title: 'සිසුන් සහ අධ්‍යාපනඥයින්', text: 'ශාස්ත්‍රීය විශ්ලේෂණය සඳහා පිරිසිදු, ව්‍යුහගත දත්ත වෙත ප්‍රවේශ වන්න.' },
        { title: 'ව්‍යාපාරිකයින්', text: 'වෙහෙසකින් තොරව තරඟකරුවන් සමඟ සසඳන්න.' },
      ]
    }
  };

  const t = content[language];

  return (
    <section id="audience" className="py-24 md:py-32 bg-white dark:bg-bzl-blue px-6 relative bg-noise-pattern">
      <div ref={containerRef} className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest text-[#00E5FF] uppercase mb-3">{t.subtitle}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-bzl-blue dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-medium">{t.subheading}</p>
        </div>

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
