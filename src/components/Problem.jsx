import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Problem() {
  const containerRef = useRef(null);
  const { language } = useLanguage();

  useEffect(() => {
    const el = containerRef.current;
    
    gsap.fromTo(el.querySelectorAll('.problem-anim'),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
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
      title: 'The Problem We Are Solving',
      subtitle: '',
      problems: [
        {
          id: '01',
          title: 'Financial research is slow',
          desc: 'Going through long financial reports is slow and time-consuming, making it hard to act quickly.'
        },
        {
          id: '02',
          title: 'Reports are unreadable for most people',
          desc: 'Complex terms and confusing tables make it difficult to see what’s really going on in a company.'
        },
        {
          id: '03',
          title: 'Decisions rely on scattered tools',
          desc: 'Using different platforms breaks your workflow and makes decision-making less clear.'
        }
      ]
    },
    si: {
      title: 'අප විසඳන ගැටලුව',
      subtitle: 'වර්ෂික වාර්තා කියවීම සෑම කෙනෙකුටම පහසු නොවේ.',
      problems: [
        {
          id: '01',
          title: 'මූල්‍ය පර්යේෂණ ඉතා මන්දගාමීය',
          desc: 'පිටු සිය ගණනක් අතින් පරීක්ෂා කිරීම කාලය කා දමන අතර නිවැරදි තීරණය ගැනීම ප්‍රමාද කරයි.'
        },
        {
          id: '02',
          title: 'බොහෝ දෙනෙකුට වාර්තා තේරුම් ගත නොහැක',
          desc: 'සංකීර්ණ මූල්‍ය වචන සහ වගු මගින් සමාගමක සැබෑ තත්ත්වය සහ අනාගතය සඟවයි.'
        },
        {
          id: '03',
          title: 'තීරණ රඳා පවතින්නේ විසිරුණු මෙවලම් මතය',
          desc: 'එකිනෙකට සම්බන්ධ නැති විවිධ වේදිකා භාවිතා කිරීමෙන් විශ්වාසනීය ආයෝජන සඳහා අවශ්‍ය පැහැදිලිකම නැති වී යයි.'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-24 md:py-32 bg-[#F9FAFB] dark:bg-[#020a1c] border-b border-gray-200 dark:border-[#041a4a] px-6 relative">
      {/* Texture Layer */}
      <div className="absolute inset-0 z-0 bg-noise-pattern opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div ref={containerRef} className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 problem-anim">
          <h2 className="text-sm font-bold tracking-widest text-[#4B5563] dark:text-gray-400 uppercase mb-4">
            Research Focus
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            {t.title}
          </h3>
          {t.subtitle && (
            <p className="text-lg text-bzl-gold dark:text-bzl-gold font-semibold">
              {t.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.problems.map((prob, idx) => (
            <div key={idx} className="problem-anim bg-white dark:bg-[#03143a] p-8 rounded-2xl border border-gray-200 dark:border-[#041a4a] shadow-sm flex flex-col gap-4">
              <span className="text-sm font-bold text-gray-400 dark:text-gray-500 tracking-wider">
                STAGE {prob.id}
              </span>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                {prob.title}
              </h4>
              <p className="text-[#4B5563] dark:text-gray-400 leading-relaxed">
                {prob.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}