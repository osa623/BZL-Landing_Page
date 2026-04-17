import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrainCircuit, LineChart, Target, Workflow, Database, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const containerRef = useRef(null);
  const { language } = useLanguage();

  useEffect(() => {
    const el = containerRef.current;
    
    gsap.fromTo('.feature-card',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
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
      title: 'Core Research Engine',
      subtitle: '',
      description: 'A clean interface hiding a complex, highly configured suite of tools to scale your ideas properly.',
      features: [
        {
          id: '01',
          title: 'Semantic Intelligence',
          desc: 'Understand market reports the way leading experts do. Not just keyword searching.',
          icon: <BrainCircuit size={24} className="text-gray-900 dark:text-white" />
        },
        {
          id: '02',
          title: 'Automated Workflows',
          desc: 'Map out complex business ideas and convert them into executed data strategies.',
          icon: <Workflow size={24} className="text-gray-900 dark:text-white" />
        },
        {
          id: '03',
          title: 'Actionable Forecasting',
          desc: 'Unearth trends and potential trajectories visually with generated dashboards.',
          icon: <LineChart size={24} className="text-gray-900 dark:text-white" />
        },
        {
          id: '04',
          title: 'Precision Extraction',
          desc: 'Pull exact figures, sentiments, and notes from long-form PDFs easily.',
          icon: <Target size={24} className="text-gray-900 dark:text-white" />
        },
        {
          id: '05',
          title: 'Structured Databases',
          desc: 'Every insight is formatted, categorized, and ready to export or query.',
          icon: <Database size={24} className="text-gray-900 dark:text-white" />
        },
        {
          id: '06',
          title: 'Reliable Architectures',
          desc: 'Built on rigorous and highly verified financial algorithms assuring zero hallucination.',
          icon: <ShieldCheck size={24} className="text-gray-900 dark:text-white" />
        },
      ]
    },
    si: {
      title: 'ප්‍රධාන පර්යේෂණ එන්ජිම',
      subtitle: 'සංකීර්ණ දත්ත සරල කරමින්.',
      description: 'ඔබේ අදහස් නිසියාකාරව වර්ධනය කිරීම සඳහා සංකීර්ණ, ඉහළින් වින්‍යාස කරන ලද මෙවලම් කට්ටලයක් සඟවන පිරිසිදු අතුරු මුහුණතක්.',
      features: [
        {
          id: '01',
          title: 'අර්ථකථන බුද්ධිය',
          desc: 'ප්‍රමුඛ පෙළේ විශේෂඥයින් කරන ආකාරයට වෙළඳපල වාර්තා තේරුම් ගන්න. මූල පද සෙවීම පමණක් නොවේ.',
          icon: <BrainCircuit size={24} className="text-gray-900 dark:text-white" />
        },
        {
          id: '02',
          title: 'ස්වයංක්‍රීය කාර්ය ප්‍රවාහයන්',
          desc: 'සංකීර්ණ ව්‍යාපාර අදහස් සැලසුම් කර ඒවා ක්‍රියාත්මක කරන දත්ත උපාය මාර්ග බවට පරිවර්තනය කරන්න.',
          icon: <Workflow size={24} className="text-gray-900 dark:text-white" />
        },
        {
          id: '03',
          title: 'ක්‍රියාකාරී පුරෝකථනය',
          desc: 'උත්පාදනය කරන ලද උපකරණ පුවරු සමඟ ප්‍රවණතා සහ අනාගත මාර්ග දෘශ්‍යමය ලෙස සොයා ගන්න.',
          icon: <LineChart size={24} className="text-gray-900 dark:text-white" />
        },
        {
          id: '04',
          title: 'නිරවද්‍ය උකහා ගැනීම',
          desc: 'දීර්ඝ PDF වලින් නිශ්චිත සංඛ්‍යා, හැඟීම්, සහ සටහන් පහසුවෙන් ලබා ගන්න.',
          icon: <Target size={24} className="text-gray-900 dark:text-white" />
        },
        {
          id: '05',
          title: 'ව්‍යුහගත දත්ත සමුදායන්',
          desc: 'සෑම අවබෝධයක්ම හැඩතල ගන්වා, වර්ගීකරණය කර ඇති අතර අපනයනය කිරීමට හෝ සෙවීමට සූදානම්ය.',
          icon: <Database size={24} className="text-gray-900 dark:text-white" />
        },
        {
          id: '06',
          title: 'විශ්වාසදායක ගෘහ නිර්මාණ',
          desc: 'දෝෂ නොමැති බව සහතික කරන දැඩි සහ ඉහළින් තහවුරු කරන ලද මූල්‍ය ඇල්ගොරිතම මත ගොඩනගා ඇත.',
          icon: <ShieldCheck size={24} className="text-gray-900 dark:text-white" />
        },
      ]
    }
  };

  const t = content[language];

  return (
    <section id="features" className="py-24 md:py-32 bg-[#F9FAFB] dark:bg-[#020a1c] px-6 relative border-b border-gray-200 dark:border-[#041a4a]">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 z-0 bg-noise-pattern opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      <div ref={containerRef} className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#4B5563] dark:text-gray-400 uppercase mb-4">
            Platform Capability
          </h2>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">
            {t.title}
          </h2>
          {t.subtitle && (
            <p className="text-md text-bzl-gold dark:text-bzl-gold font-semibold mb-6">
              {t.subtitle}
            </p>
          )}
          <p className="text-lg text-[#4B5563] dark:text-gray-400 font-medium">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.map((feat, idx) => (
            <div 
              key={idx} 
              className="feature-card group bg-white dark:bg-[#03143a] border border-gray-200 dark:border-[#041a4a] rounded-2xl p-8 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all duration-300 flex flex-col items-start gap-4 relative"
            >
              <div className="absolute top-8 right-8 text-3xl font-bold text-gray-100 dark:text-gray-800 pointer-events-none select-none group-hover:text-gray-200 dark:group-hover:text-gray-700 transition-colors">
                {feat.id}
              </div>
              <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center shadow-sm z-10">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white z-10">{feat.title}</h3>
              <p className="text-[#4B5563] dark:text-gray-400 leading-relaxed font-medium z-10">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
