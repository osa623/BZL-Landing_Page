import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const containerRef = useRef(null);
  const [openIdx, setOpenIdx] = useState(null);
  const { language } = useLanguage();

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

  const content = {
    en: {
      subtitle: 'FAQ',
      title: 'Common Questions',
      faqs: [
        { 
          q: 'Is Buyzonlabs live yet?', 
          a: 'We’ve built the core extraction engine and are currently developing the full platform. Early access is now open.' 
        },
        { 
          q: 'Who is this platform for?', 
          a: 'Designed for investors, students, and professionals who need fast, accurate insights from financial reports.' 
        },
        { 
          q: 'What can I do with my PDFs?', 
          a: 'Upload financial reports to extract tables, analyze data, calculate key metrics, and generate clear summaries.' 
        },
        { 
          q: 'Can I export the data?', 
          a: 'Yes. Export your data in multiple formats including Excel, Word, text, and developer-friendly formats.' 
        },
        { 
          q: 'Will there be an API?', 
          a: 'Yes. We plan to offer API access so you can integrate data and insights into your own tools and workflows.' 
        },
        { 
          q: 'How is this different from other tools?', 
          a: 'Instead of just summarizing reports, we extract, structure, and analyze financial data to give you actionable insights.' 
        }
      ]
    },
    si: {
      subtitle: 'නිතර අසන ප්‍රශ්න',
      title: 'සාමාන්‍ය ප්‍රශ්න',
      faqs:[
            { 
              q: 'Buyzonlabs දැනටමත් භාවිතයට ගත හැකිද?', 
              a: 'අපි මූලික data extraction engine එක සාර්ථකව නිම කරලා තියෙනවා. සම්පූර්ණ platform එක දැනට සංවර්ධනය වෙමින් පවතින අතර early access සඳහා ලියාපදිංචි වීම දැන් විවෘතයි.' 
            },
            { 
              q: 'මෙම මෘදුකාංගය වඩාත් සුදුසු වන්නේ කාටද?', 
              a: 'ඉක්මන් සහ නිවැරදි මුල්‍ය අවබෝධ අවශ්‍ය කරන ආයෝජකයින්, සිසුන් සහ වෘත්තීයවේදීන් සඳහා මෙය නිර්මාණය කර ඇත.' 
            },
            { 
              q: 'මගේ කොටස් වාර්තා(PDF) වලින් මට මොනව කරන්න පුළුවන්?', 
              a: 'මුල්‍ය වාර්තා upload කරලා වගු උකහා ගන්න, දත්ත විශ්ලේෂණය කරන්න, වැදගත් මිනුම් ගණනය කරන්න සහ පැහැදිලි සාරාංශ ලබාගන්න පුළුවන්.' 
            },
            { 
              q: 'දත්ත export කරන්න පුළුවන්ද?', 
              a: 'ඔව්. Excel, Word, text සහ developer-friendly ආකෘති වලට ඔබගේ දත්ත පහසුවෙන් අපනයනය කළ හැක.' 
            },
            { 
              q: 'API එකක් ලබාදෙනවද?', 
              a: 'ඔව්. ඔබගේ systems සහ workflows සමඟ එකතු කරගැනීමට API පහසුකම් ඉදිරියේදී ලබාදීමට අපි සැලසුම් කරලා තියෙනවා.' 
            },
            { 
              q: 'මෙය වෙනත් මෙවලම් වලට වඩා වෙනස් වෙන්නේ කොහොමද?', 
              a: 'අපි වාර්තා සාරාංශ කිරීම පමණක් නොව, මුල්‍ය දත්ත උකහාගෙන, සකස් කරලා, විශ්ලේෂණය කරමින් ඔබට ක්‍රියාත්මක කළ හැකි අවබෝධ ලබාදෙමු.' 
            }
          ]
    }
  };

  const { subtitle, title, faqs } = content[language];

  return (
    <section id="faq" className="py-24 md:py-32 bg-gray-50 dark:bg-[#03143a] px-6 border-y border-gray-100 dark:border-[#041a4a] bg-noise-pattern">
      <div ref={containerRef} className="max-w-3xl mx-auto relative">
        <div className="flex flex-col items-center mb-12">
          <p className="text-sm font-bold tracking-widest text-[#00E5FF] uppercase mb-3">{subtitle}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-bzl-blue dark:text-white text-center">
            {title}
          </h2>
        </div>

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
