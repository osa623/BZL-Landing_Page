import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrainCircuit, LineChart, Target, Workflow, Database, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const containerRef = useRef(null);

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

  const features = [
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
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-white dark:bg-bzl-blue px-6 relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none"></div>
      <div ref={containerRef} className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-bzl-blue dark:text-white mb-4">
            Powerful Platform Mechanics
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
            A clean interface hiding a complex, highly configured suite of tools to scale your ideas properly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
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
