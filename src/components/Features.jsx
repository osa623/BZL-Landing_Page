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
      title: 'Powerful Platform Mechanics',
      description: 'A clean interface hiding a complex, highly configured suite of tools to scale your ideas properly.',
      features: [
        {
          title: 'Semantic Intelligence',
          desc: 'Understand market reports the way leading experts do. Not just keyword searching.',
          icon: <BrainCircuit size={24} className="text-bzl-blue dark:text-white" />
        },
        {
          title: 'Automated Workflows',
          desc: 'Map out complex business ideas and convert them into executed data strategies.',
          icon: <Workflow size={24} className="text-bzl-blue dark:text-white" />
        },
        {
          title: 'Actionable Forecasting',
          desc: 'Unearth trends and potential trajectories visually with generated dashboards.',
          icon: <LineChart size={24} className="text-bzl-blue dark:text-white" />
        },
        {
          title: 'Precision Extraction',
          desc: 'Pull exact figures, sentiments, and notes from long-form PDFs easily.',
          icon: <Target size={24} className="text-bzl-blue dark:text-white" />
        },
        {
          title: 'Structured Databases',
          desc: 'Every insight is formatted, categorized, and ready to export or query.',
          icon: <Database size={24} className="text-bzl-blue dark:text-white" />
        },
        {
          title: 'Reliable Architectures',
          desc: 'Built on rigorous and highly verified financial algorithms assuring zero hallucination.',
          icon: <ShieldCheck size={24} className="text-bzl-blue dark:text-white" />
        },
      ]
    },
    si: {
      title: 'ප්‍රබල වේදිකා යාන්ත්‍රණයන්',
      description: 'ඔබේ අදහස් නිසියාකාරව වර්ධනය කිරීම සඳහා සංකීර්ණ, ඉහළින් වින්‍යාස කරන ලද මෙවලම් කට්ටලයක් සඟවන පිරිසිදු අතුරු මුහුණතක්.',
      features: [
        {
          title: 'අර්ථකථන බුද්ධිය',
          desc: 'ප්‍රමුඛ පෙළේ විශේෂඥයින් කරන ආකාරයට වෙළඳපල වාර්තා තේරුම් ගන්න. මූල පද සෙවීම පමණක් නොවේ.',
          icon: <BrainCircuit size={24} className="text-bzl-blue dark:text-white" />
        },
        {
          title: 'ස්වයංක්‍රීය කාර්ය ප්‍රවාහයන්',
          desc: 'සංකීර්ණ ව්‍යාපාර අදහස් සැලසුම් කර ඒවා ක්‍රියාත්මක කරන දත්ත උපාය මාර්ග බවට පරිවර්තනය කරන්න.',
          icon: <Workflow size={24} className="text-bzl-blue dark:text-white" />
        },
        {
          title: 'ක්‍රියාකාරී පුරෝකථනය',
          desc: 'උත්පාදනය කරන ලද උපකරණ පුවරු සමඟ ප්‍රවණතා සහ අනාගත මාර්ග දෘශ්‍යමය ලෙස සොයා ගන්න.',
          icon: <LineChart size={24} className="text-bzl-blue dark:text-white" />
        },
        {
          title: 'නිරවද්‍ය උකහා ගැනීම',
          desc: 'දීර්ඝ PDF වලින් නිශ්චිත සංඛ්‍යා, හැඟීම්, සහ සටහන් පහසුවෙන් ලබා ගන්න.',
          icon: <Target size={24} className="text-bzl-blue dark:text-white" />
        },
        {
          title: 'ව්‍යුහගත දත්ත සමුදායන්',
          desc: 'සෑම අවබෝධයක්ම හැඩතල ගන්වා, වර්ගීකරණය කර ඇති අතර අපනයනය කිරීමට හෝ සෙවීමට සූදානම්ය.',
          icon: <Database size={24} className="text-bzl-blue dark:text-white" />
        },
        {
          title: 'විශ්වාසදායක ගෘහ නිර්මාණ',
          desc: 'දෝෂ නොමැති බව සහතික කරන දැඩි සහ ඉහළින් තහවුරු කරන ලද මූල්‍ය ඇල්ගොරිතම මත ගොඩනගා ඇත.',
          icon: <ShieldCheck size={24} className="text-bzl-blue dark:text-white" />
        },
      ]
    }
  };

  const t = content[language];

  return (
    <section id="features" className="py-24 md:py-32 bg-white dark:bg-bzl-blue px-6 relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none"></div>
      <div ref={containerRef} className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-bzl-blue dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.map((feat, idx) => (
            <div 
              key={idx} 
              className="feature-card group bg-white dark:bg-bzl-blue border border-gray-200 dark:border-[#041a4a] rounded-2xl p-8 hover:border-bzl-gold hover:shadow-lg transition-all duration-300 flex flex-col items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-bzl-gold-light border border-bzl-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-bzl-blue dark:text-white">{feat.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
