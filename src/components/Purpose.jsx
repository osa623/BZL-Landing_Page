import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Purpose() {
  const containerRef = useRef(null);
  const { language } = useLanguage();

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

  const content = {
    en: {
      title: 'Why Buyzonlabs Exists',
      subtitle: '',
      desc1: 'Buyzonlabs focuses on transforming business and investment ideas into intelligent, elegant software systems.',
      desc2: 'The upcoming platform will analyze financial reports, extract structured insights, and generate decision-ready intelligence for investors, researchers, and organizations.',
      points: [
        'Automated financial report analysis',
        'Research-ready structured insights',
        'Built for investors, academics, and businesses',
        'Designed for clarity and speed'
      ]
    },
    si: {
      title: 'Buyzonlabs හි අරමුණ',
      subtitle: 'ව්‍යාපාරික අදහස් බුද්ධිමත් මෘදුකාංග බවට පරිවර්තනය කිරීම අපගේ අරමුණයි.',
      desc1: 'ව්‍යාපාර සහ ආයෝජන අදහස් බුද්ධිමත් මෘදුකාංග පද්ධති බවට පරිවර්තනය කිරීමට Buyzonlabs කටයුතු කරයි.',
      desc2: 'ඉදිරි වේදිකාව මගින් මූල්‍ය වාර්තා විශ්ලේෂණය කර, ව්‍යුහගත අවබෝධයන් උකහා ගෙන, ආයෝජකයින්ට සහ පර්යේෂකයින්ට තීරණ ගැනීමේ බුද්ධිය නිෂ්පාදනය කරනු ඇත.',
      points: [
        'ස්වයංක්‍රීය මූල්‍ය වාර්තා විශ්ලේෂණය',
        'පර්යේෂණ සඳහා සූදානම් ව්‍යුහගත අවබෝධයන්',
        'ආයෝජකයින්, විද්‍යාඥයින් සහ ව්‍යාපාර සඳහා නිර්මාණය කර ඇත',
        'පැහැදිලිකම සහ වේගය සඳහා නිර්මාණය කර ඇත'
      ]
    }
  };

  const t = content[language];

  return (
    <section id="purpose" className="py-24 md:py-32 bg-white dark:bg-[#03143a] px-6 relative">
      <div className="absolute inset-0 z-0 bg-noise-pattern opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      <div ref={containerRef} className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        <div className="flex-1">
          <h2 className="purpose-anim text-sm font-bold tracking-widest text-[#4B5563] dark:text-gray-400 uppercase mb-4">
            Our Purpose
          </h2>
          <h2 className="purpose-anim text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            {t.title}
          </h2>
          {t.subtitle && (
            <p className="purpose-anim text-md text-bzl-gold dark:text-bzl-gold font-semibold mb-8">
              {t.subtitle}
            </p>
          )}
          <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700 mb-8 purpose-anim rounded-full"></div>
          <p className="purpose-anim text-lg text-[#4B5563] dark:text-gray-300 leading-relaxed mb-6 font-medium">
            {t.desc1}
          </p>
          <p className="purpose-anim text-lg text-[#4B5563] dark:text-gray-300 leading-relaxed font-medium">
            {t.desc2}
          </p>
        </div>

        <div className="flex-1 space-y-6">
          <ul className="space-y-6">
            {t.points.map((item, idx) => (
              <li key={idx} className="purpose-anim flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  {`0${idx + 1}`}
                </span>
                <span className="text-gray-900 dark:text-white font-semibold pt-1 text-lg">
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
