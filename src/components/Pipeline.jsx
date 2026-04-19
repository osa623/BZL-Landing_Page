import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lock, Sparkles, Code2, Globe2, BarChart3, LineChart } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Pipeline() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const { language } = useLanguage();

  useEffect(() => {
    const el = containerRef.current;
    
    // Smooth fade up for the header
    gsap.fromTo('.pipeline-header',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 80%' } }
    );

    // Track line filling up
    gsap.fromTo(trackRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 2,
        ease: 'power3.inOut',
        transformOrigin: 'left center',
        scrollTrigger: {
          trigger: el,
          start: 'top 60%',
        }
      }
    );

    // Cards floating in like Apple product tiles
    gsap.fromTo('.pipeline-node',
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: el,
          start: 'top 65%',
        }
      }
    );
  }, []);

  const content = {
    en: {
      roadmap: 'The Roadmap',
      title: <>The future of finance.<br className="hidden md:block"/> Unfolding in stages.</>,
      desc: 'See how the architecture of Buyzonlabs is being engineered from the ground up to revolutionize market intelligence.',
      locked: 'Locked',
      stages: [
        /*{
          id: 1,
          title: 'Financial Report Extraction & Analysing Engine',
          description: 'The foundation is built. Complex 10-Ks and SEC filings are rapidly ingested and parsed with extreme precision.',
          status: 'Launching Soon',
          blur: false,
          icon: <Sparkles className="w-6 h-6 text-bzl-gold ml-0.5" />
        },*/
        
        {
          id: 1,
          title: 'PDF Data Extraction & Company Analysis Engine',
          description: 'Extracts financial data from reports and generates full company analysis with key metrics, ratios, valuations, and AI insights.',
          status: 'Launching Soon',
          blur: false,
          icon: <Sparkles className="w-6 h-6 text-bzl-gold ml-0.5" />
        },

        
        {
          id: 2,
          title: 'AI Financial Analysis Core',
          description: 'Advanced deep learning models process raw data into actionable long-term predictions.',
          status: 'Upcoming',
          blur: true,
          icon: <Code2 className="w-6 h-6" />
        },
        {
          id: 3,
          title: 'Investor Insight Dashboard',
          description: 'A beautiful, intuitive interface delivering real-time institutional-grade insights.',
          status: 'Upcoming',
          blur: true,
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          id: 4,
          title: 'Collaboration & Research Tools',
          description: 'Seamlessly build portfolios, share thesis, and track collaborative financial models.',
          status: 'Upcoming',
          blur: true,
          icon: <LineChart className="w-6 h-6" />
        },
        {
          id: 5,
          title: 'Public Platform Launch',
          description: 'The ultimate release bringing Buyzonlabs \'s full power to the global financial market.',
          status: 'Upcoming',
          blur: true,
          icon: <Globe2 className="w-6 h-6" />
        },
      ]
    },
    si: {
      roadmap: 'ඉදිරි දැක්ම',
      title: <>අනාගත මූල්‍ය ලෝකය.<br className="hidden md:block"/> අදියර වශයෙන් දිගහැරේ.</>,
      desc: 'වෙළෙඳපොළ බුද්ධිය විප්ලවීය කිරීම සඳහා Buyzonlabs හි ගෘහ නිර්මාණ ශිල්පය ගොඩනැගෙමින් පවතින ආකාරය බලන්න.',
      locked: 'අගුලු දමා ඇත',
      stages: [
        /*{
          id: 1,
          title: 'මූල්‍ය වාර්තා උකහා ගැනීමේ සහ විශ්ලේෂණය කිරීමේ යන්ත්‍රය',
          description: 'පදනම ගොඩනගා ඇත. සංකීර්ණ 10-Ks සහ SEC තැන්පතු අතිශය නිරවද්‍යතාවයෙන් ඉක්මනින් විශ්ලේෂණය කෙරේ.',
          status: 'ළඟදීම දියත් කෙරේ',
          blur: false,
          icon: <Sparkles className="w-6 h-6 text-bzl-gold ml-0.5" />
        },*/
       


         {
          id: 1,
          title: 'PDF දත්ත උපුටාගැනීම සහ සමාගම් විශ්ලේෂණ එන්ජිම',
          description: 'වාර්තා වලින් මූල්‍ය දත්ත උපුටාගෙන, ප්‍රධාන මිනුම්, අනුපාත, වටිනාකම් හා AI විග්‍රහයන් සමඟ සම්පූර්ණ සමාගම් විශ්ලේෂණයක් ලබාදෙයි.',
          status: 'ළඟදීම දියත් කෙරේ',
          blur: false,
          icon: <Sparkles className="w-6 h-6 text-bzl-gold ml-0.5" />
        },
        
         {
          id: 2,
          title: 'AI මූල්‍ය විශ්ලේෂණ හරය',
          description: 'උසස් ගැඹුරු ඉගෙනුම් ආකෘති මගින් අමු දත්ත ක්‍රියාකාරී දිගුකාලීන පුරෝකථනයන් බවට පත් කරයි.',
          status: 'ඉදිරියේදී',
          blur: true,
          icon: <Code2 className="w-6 h-6" />
        },


        {
          id: 3,
          title: 'ආයෝජක අවබෝධය සඳහා උපකරණ පුවරුව',
          description: 'ආයතනික මට්ටමේ අවබෝධයන් තත්‍ය කාලීනව ලබා දෙන අලංකාර, අවබෝධාත්මක අතුරු මුහුණතක්.',
          status: 'ඉදිරියේදී',
          blur: true,
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          id: 4,
          title: 'සහයෝගීතා සහ පර්යේෂණ මෙවලම්',
          description: 'පහසුවෙන් කළඹ ගොඩනඟන්න, නිබන්ධන බෙදාගන්න, සහ සහයෝගීතා මූල්‍ය ආකෘති නිරීක්ෂණය කරන්න.',
          status: 'ඉදිරියේදී',
          blur: true,
          icon: <LineChart className="w-6 h-6" />
        },
        {
          id: 5,
          title: 'පොදු වේදිකා දියත් කිරීම',
          description: 'ලෝක මූල්‍ය වෙළඳපොළට Buyzonlabs හි සම්පූර්ණ බලය ලබා දෙන අවසාන නිකුතුව.',
          status: 'ඉදිරියේදී',
          blur: true,
          icon: <Globe2 className="w-6 h-6" />
        },
      ]
    }
  };

  const t = content[language];

  return (
    <section id="pipeline" className="relative py-32 md:py-48 bg-[#F5F5F7] dark:bg-[#01081a] overflow-x-hidden border-y border-gray-200 dark:border-[#041a4a]">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="pipeline-header text-center mb-24 md:mb-32">
          <h2 className="text-sm font-bold tracking-widest text-[#86868b] dark:text-gray-400 uppercase mb-4">
            {t.roadmap}
          </h2>
          <h3 className="text-5xl md:text-7xl font-semibold tracking-[-0.03em] text-[#1d1d1f] dark:text-white mb-6">
            {t.title}
          </h3>
          <p className="text-xl md:text-2xl text-[#86868b] dark:text-gray-400 max-w-3xl mx-auto font-medium tracking-tight">
            {t.desc}
          </p>
        </div>

        {/* Pipeline Container */}
        <div className="relative">
          
          {/* Subtle Ambient Track Background */}
          <div className="absolute top-[45%] left-0 right-0 h-[2px] bg-[#d2d2d7]/50 dark:bg-white/10 -z-20 hidden lg:block"></div>
          
          {/* Animated Gold Track */}
          <div 
            ref={trackRef}
            className="absolute top-[45%] left-0 h-[3px] bg-gradient-to-r from-bzl-blue via-bzl-gold to-yellow-300 dark:from-[#0a1e4a] dark:via-bzl-gold dark:to-yellow-200 -z-10 hidden lg:block shadow-[0_0_15px_rgba(242,201,76,0.6)]"
            style={{ width: '40%' }} // Initial rough width, animated by GSAP
          ></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 gap-y-12">
            {t.stages.map((stage) => (
              <div 
                key={stage.id} 
                className="pipeline-node relative flex flex-col items-center group"
              >
                
                {/* Node Dot / Status */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center relative z-10 mb-6 transition-all duration-500
                  ${stage.blur 
                    ? 'bg-[#e5e5ea] dark:bg-[#1a1a1e] text-[#86868b] dark:text-gray-500 ring-4 ring-[#F5F5F7] dark:ring-[#01081a]' 
                    : 'bg-white dark:bg-[#0a1e4a] border-2 border-bzl-gold shadow-[0_0_30px_rgba(242,201,76,0.5)] ring-4 ring-[#F5F5F7] dark:ring-[#01081a]'
                  }
                `}>
                  {stage.blur ? (
                    <span className="font-bold text-xl">{stage.id}</span>
                  ) : (
                    stage.icon
                  )}
                </div>

                {/* Status Badge */}
                <span className={`text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6 relative z-10 whitespace-nowrap
                  ${stage.blur 
                    ? 'bg-transparent text-[#86868b] dark:text-gray-500' 
                    : 'bg-bzl-blue dark:bg-bzl-gold text-white dark:text-bzl-blue shadow-sm'
                  }
                `}>
                  {stage.status}
                </span>

                {/* Card Container - Apple Style Frosted Glass */}
                <div className={`relative w-full rounded-3xl overflow-hidden transition-all duration-500 will-change-transform shadow-[0_20px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.3)]
                  ${stage.blur 
                    ? 'bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/50 dark:border-white/10 hover:bg-white/50 dark:hover:bg-white/10' 
                    : 'bg-white dark:bg-[#06122d] border border-bzl-gold/30 hover:shadow-[0_20px_50px_rgba(242,201,76,0.15)] hover:-translate-y-2'
                  }
                `}>
                  
                  {/* Private Glass Overlay with Lock Content (ONLY for blurred items) */}
                  {stage.blur && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 bg-white/10 dark:bg-[#01081a]/20 backdrop-blur-[12px] group-hover:backdrop-blur-[8px] transition-all duration-500 border border-white/20 dark:border-[#041a4a] rounded-3xl">
                      <div className="w-16 h-16 rounded-full bg-white/80 dark:bg-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-none border border-black/5 dark:border-white/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                        <Lock className="w-7 h-7 text-[#1d1d1f] dark:text-white" strokeWidth={1.5} />
                      </div>
                      <span className="text-[13px] font-semibold tracking-widest text-[#1d1d1f] dark:text-white uppercase opacity-80 decoration-slice">
                        {t.locked}
                      </span>
                    </div>
                  )}

                  {/* Actual Card Content -> Extreme Blur applied if stage.blur is true */}
                  <div className={`px-6 py-10 flex flex-col items-center text-center h-full transition-all duration-300
                    ${stage.blur ? 'blur-[12px] opacity-20 pointer-events-none select-none grayscale' : 'opacity-100'}
                  `}>
                    <h4 className={`text-xl font-semibold tracking-tight mb-4 leading-snug
                      ${stage.blur ? 'text-black dark:text-white' : 'text-[#1d1d1f] dark:text-white'}
                    `}>
                      {stage.title}
                    </h4>
                    <p className={`text-sm leading-relaxed font-medium
                      ${stage.blur ? 'text-black dark:text-white' : 'text-[#86868b] dark:text-gray-400'}
                    `}>
                      {stage.description}
                    </p>
                  </div>
                  
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
