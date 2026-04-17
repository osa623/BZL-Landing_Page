import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const containerRef = useRef(null);
  const [openIdx, setOpenIdx] = useState(null);

  useEffect(() => {
    const el = containerRef.current;
    
    gsap.fromTo('.faq-item',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        }
      }
    );
  }, []);

  const faqs = [
    { q: 'Is Buyzonlabs live yet?', a: 'We have completed the core extraction engine (Stage 1) and are actively developing the remainder of the platform. We are collecting early-access registrations right now.' },
    { q: 'Who is the platform best suited for?', a: 'Investors requiring deep insights, students conducting financial research, and businesses needing to map their strategies against complex metrics.' },
    { q: 'Will there be an API?', a: 'Yes. Our roadmap includes providing programmatic access to the data pipelines and intelligence layers.' },
    { q: "How are you different from other financial tools?", a: 'We bridge Apple-like simplicity with incredibly complex semantic analysis. We don\'t just summarize PDFs; we transform business ideas into structured data.' },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-gray-50 dark:bg-[#03143a] px-6 border-y border-gray-100 dark:border-[#041a4a]">
      <div ref={containerRef} className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-bzl-blue dark:text-white mb-12 text-center">
          Frequently Clarified
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="faq-item bg-white dark:bg-bzl-blue border border-gray-200 dark:border-[#041a4a] rounded-2xl overflow-hidden transition-colors hover:border-bzl-gold/40 shadow-sm"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-lg text-bzl-blue dark:text-white">{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-400 transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-bzl-gold' : ''}`}
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-500 dark:text-gray-400 font-medium">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
