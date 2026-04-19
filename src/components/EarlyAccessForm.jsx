import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function EarlyAccessForm() {
  const containerRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle, submitting, success
  const { language } = useLanguage();

  useEffect(() => {
    const el = containerRef.current;
    
    gsap.fromTo(el,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
        }
      }
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.target);

    try {
      await fetch('https://formsubmit.co/ajax/osandam23@gmail.com', {
        method: 'POST',
        body: formData,
      });
      setStatus('success');
      
      gsap.to('.form-wrapper', { opacity: 0, duration: 0.5, display: 'none' });
      gsap.fromTo('.success-wrapper', 
        { scale: 0.9, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.8, ease: 'power3.out', display: 'block', delay: 0.5 }
      );
    } catch (error) {
      console.error(error);
      setStatus('idle');
      alert('Something went wrong. Please try again later.');
    }
  };

  const content = {
    en: {
      title: 'Help Shape Buyzonlabs',
      desc: 'Your answers directly influence how the platform is being built.',
      qRole: 'Primary role',
      qExp: 'Experience level',
      qMarkets: 'Markets followed',
      qCurrentWorkflow: 'How do you usually research?',
      qCurrentWorkflowP: 'Tell us the methods or tools you typically use.',
      qTools: 'Tools currently used',
      qToolsP: 'e.g. Spreadsheets, brokerage tools, financial websites, PDFs, research papers',
      qChallenges: 'Biggest challenges',
      qChallengesP: 'What consumes the most time or effort during financial research?',
      qFrustration: 'Most frustrating tasks',
      qCaps: 'Most valuable capabilities',
      qGoal: 'Primary outcome goal',
      qGoalP: 'What result would make a tool like this essential for you?',
      qFreq: 'Intended usage frequency',
      qPur: 'Usage purpose',
      qTimeSpent: 'Time spent analyzing one company',
      qUrgency: 'How urgently do you need a better solution?',
      qPay: 'Would you pay for a tool like this?',
      qJoin: 'Join early access updates',
      qName: 'Your name',
      qNameP: 'Henuka De Silva',
      qEmailP: 'you@company.com',
      s1: 'Only used to notify when the platform launches.',
      s2: 'This survey collects product research insights only. No personal or financial data is requested.',
      sub: 'Submitting...',
      subJoin: 'Submit & Join Early Access',
      thx: 'Thank you for contributing',
      thxDesc: 'Your input is helping shape the first release of Buyzonlabs. We\'ll be in touch soon.',
      roles: ['Select an option', 'Individual investor', 'Professional investor', 'Market researcher / analyst', 'Student / academic', 'Business decision maker', 'Other'],
      levels: ['Beginner', 'Intermediate', 'Advanced', 'Professional'],
      markets: ['Colombo Stock Exchange (CSE)', 'US markets', 'Crypto markets', 'Forex', 'Other'],
      frustrations: [
        'Reading reports',
        'Extracting data',
        'Comparing companies',
        'Understanding financials',
        'Doing calculations and valuations',
        'Making decisions'
      ],
      capabilities: [
        'Automatic annual report analysis',
        'Instant company summaries',
        'Financial trend detection',
        'Cross-company comparison',
        'Research organization workspace',
        'Decision-support insights'
      ],
      frequencies: ['Daily', 'Weekly', 'Occasionally', 'Only when researching a company'],
      purposes: [
        'Investment decisions',
        'Academic research',
        'Market monitoring',
        'Business strategy',
        'Learning and education'
      ],


      timeSpentOptions: [
        '<30 minutes',
        '30–60 minutes',
        '1–3 hours',
        '3+ hours'
      ],

      urgencyOptions: [
        'Very urgent',
        'Somewhat urgent',
        'Just exploring'
      ],

      payOptions: [
        'Yes',
        'Maybe',
        'No'
      ],

           

    },
    si: {
      title: 'Buyzonlabs හැඩගැස්වීමට උදවු වන්න',
      desc: 'ඔබගේ පිළිතුරු වේදිකාව ගොඩනැගෙමින් පවතින ආකාරය කෙරෙහි සෘජුවම බලපායි.',
      qRole: 'මූලික භූමිකාව',
      qExp: 'පළපුරුද්දේ මට්ටම',
      qMarkets: 'අනුගමනය කරන වෙළඳපොළ',
      qCurrentWorkflow: 'ඔබ සාමාන්‍යයෙන් පර්යේෂණය කරන ආකාරය කුමක්ද?',
      qCurrentWorkflowP: 'ඔබ සාමාන්‍යයෙන් භාවිතා කරන ක්‍රම හෝ මෙවලම් අපට කියන්න.',
      qTools: 'දැනට භාවිතා කරන මෙවලම්',
      qToolsP: 'උදා: පැතුරුම්පත්, තැරැව්කාර මෙවලම්, මූල්‍ය වෙබ් අඩවි, PDF, පර්යේෂණ පත්‍රිකා',
      qChallenges: 'ලොකුම අභියෝග',
      qChallengesP: 'මූල්‍ය පර්යේෂණ අතරතුර වැඩිපුරම කාලය හෝ ශ්‍රමය වැය වන්නේ කුමක් සඳහාද?',
      qFrustration: 'වඩාත් කලකිරවන කාර්යයන්',
      qCaps: 'වඩාත්ම වටිනා හැකියාවන්',
      qGoal: 'ප්‍රාථමික ප්‍රතිඵල ඉලක්කය',
      qGoalP: 'මෙවැනි මෙවලමක් ඔබට අත්‍යවශ්‍ය කරවන ප්‍රතිඵලය කුමක්ද?',
      qFreq: 'අපේක්ෂිත භාවිත සංඛ්‍යාතය',
      qPur: 'භාවිතයේ අරමුණ',
      qTimeSpent: 'එක් සමාගමක් විශ්ලේෂණය කිරීමට ගතවන කාලය',
      qUrgency: 'ඔබට වඩා හොඳ විසඳුමක් කොපමණ හදිසිව අවශ්‍යද?',
      qPay: 'මෙවැනි මෙවලමක් සඳහා ඔබ ගෙවීමට කැමතිද?',
      qJoin: 'මූලික ප්‍රවේශ යාවත්කාලීනවලට එක්වන්න',
      qName: 'ඔබගේ නම',
      qNameP: 'නිදසුන: හේනුක ඩී සිල්වා ',
      qEmailP: 'ඔබ@සමාගම.com',
      s1: 'වේදිකාව දියත් කරන විට දැනුම් දීමට පමණක් යොදා ගනී.',
      s2: 'මෙම සමීක්ෂණය නිෂ්පාදන පර්යේෂණ තොරතුරු පමණක් රැස් කරයි. කිසිදු පුද්ගලික හෝ මූල්‍ය දත්තයක් ඉල්ලා නැත.',
      sub: 'ඉදිරිපත් කරමින් පවතී...',
      subJoin: 'ඉදිරිපත් කර මූලික ප්‍රවේශයට එක්වන්න',
      thx: 'ඔබගේ දායකත්වයට ස්තූතියි',
      thxDesc: 'ඔබගේ ආදානය Buyzonlabs හි පළමු නිකුතුව හැඩගස්වයි. අපි ඉක්මනින් සම්බන්ධ වන්නෙමු.',
      roles: ['විකල්පයක් තෝරන්න', 'තනි ආයෝජකයෙකු', 'වෘත්තීය ආයෝජකයෙකු', 'වෙළඳපොළ පර්යේෂක/විශ්ලේෂක', 'ශිෂ්‍ය / ශාස්ත්‍රීය', 'ව්‍යාපාරික තීරණ ගන්නා', 'වෙනත්'],
      levels: ['ආධුනික', 'මධ්‍යම', 'උසස්', 'වෘත්තීය'],
      markets: ['කොළඹ කොටස් හුවමාරුව (CSE)', 'එක්සත් ජනපද වෙළඳපල', 'ක්‍රිප්ටෝ වෙළඳපල', 'විදේශ විනිමය (Forex)', 'වෙනත්'],
      frustrations: [
        'වාර්තා කියවීම',
        'දත්ත උකහා ගැනීම',
        'සමාගම් සසඳීම',
        'මුල්‍ය තත්ත්වය අවබෝධ කරගැනීම',
        'ගණනය කිරීම් සහ වටිනාකරණ කිරීම',
        'තීරණ ගැනීම'
      ],
      capabilities: [
        'ස්වයංක්‍රීය වාර්ෂික වාර්තා විශ්ලේෂණය',
        'ක්ෂණික සමාගම් සාරාංශ',
        'මූල්‍ය ප්‍රවණතා හඳුනාගැනීම',
        'සමාගම් හරහා සංසන්දනය',
        'පර්යේෂණ සංවිධාන වැඩබිම',
        'තීරණ ආධාරක අවබෝධය'
      ],
      frequencies: ['දිනපතා', 'සතිපතා', 'ඉඳහිට', 'සමාගමක් ගැන පර්යේෂණ කරන විට පමණක්'],
      purposes: [
        'ආයෝජන තීරණ',
        'ශාස්ත්‍රීය පර්යේෂණ',
        'වෙළඳපොළ නිරීක්ෂණය',
        'ව්‍යාපාරික උපායමාර්ග',
        'ඉගෙනීම සහ අධ්‍යාපනය'
      ],

      timeSpentOptions: [
        'මිනිත්තු 30ට අඩු',
        'මිනිත්තු 30–60',
        'පැය 1–3',
        'පැය 3ට වැඩි'
      ],

      urgencyOptions: [
        'ඉතා හදිසි',
        'කොපමණ හෝ හදිසි',
        'වටහා බැලීම සඳහා පමණයි'
      ],

      payOptions: [
        'ඔව්',
        'සමහරවිට',
        'නැහැ'
      ],


    }
  };

  const t = content[language];

  return (
    <section id="contact" className="min-h-screen py-32 bg-gray-50 dark:bg-[#03143a]/50 px-6 flex items-center justify-center">
      <div ref={containerRef} className="w-full max-w-3xl bg-white dark:bg-bzl-blue p-8 md:p-12 rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-bzl-blue-hover relative overflow-hidden">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center bg-gray-50 dark:bg-[#03143a]/50 rounded-2xl mb-6 p-4 shadow-sm border border-gray-100 dark:border-gray-800">
             <img src="/src/assets/new_logo.png" alt="Buyzonlabs Logo" className="h-10 md:h-12 w-auto object-contain" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-bzl-blue dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            {t.desc}
          </p>
        </div>

        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="space-y-8">
            <input type="hidden" name="_subject" value="BuyzonlabsEarly Access Submission" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            {/* Section 1 — User context */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qRole} <span className="text-red-500">*</span></label>
              <select name="Role" required className="w-full p-3 rounded-lg border border-gray-200 dark:border-[#041a4a] focus:border-bzl-gold focus:ring-1 focus:ring-bzl-gold bg-gray-50 dark:bg-[#03143a] transition-all outline-none">
                {t.roles.map((role, i) => (
                  <option key={i} value={i === 0 ? "" : content.en.roles[i]}>{role}</option>
                ))}
              </select>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qExp} <span className="text-red-500">*</span></label>
              <div className="flex flex-wrap gap-4">
                {t.levels.map((level, i) => (
                  <label key={level} className="flex items-center gap-2 cursor-pointer text-sm font-medium">
                    <input type="radio" name="Experience" value={content.en.levels[i]} required className="text-bzl-gold focus:ring-bzl-gold border-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 2 — Current workflow */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qMarkets}</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm font-medium">
                {t.markets.map((market, i) => (
                  <label key={market} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name={`Market: ${content.en.markets[i]}`} value="Yes" className="rounded text-bzl-gold focus:ring-bzl-gold border-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">{market}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qCurrentWorkflow}</label>
              <textarea name="Current Workflow" rows="3" placeholder={t.qCurrentWorkflowP} className="w-full p-3 rounded-lg border border-gray-200 dark:border-[#041a4a] focus:border-bzl-gold focus:ring-1 focus:ring-bzl-gold bg-gray-50 dark:bg-[#03143a] transition-all outline-none resize-none"></textarea>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qTools}</label>
              <input type="text" name="Tools Used" placeholder={t.qToolsP} className="w-full p-3 rounded-lg border border-gray-200 dark:border-[#041a4a] focus:border-bzl-gold focus:ring-1 focus:ring-bzl-gold bg-gray-50 dark:bg-[#03143a] transition-all outline-none" />
            </div>

            {/* Section 3 — Pain points (critical) */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qChallenges}</label>
              <textarea name="Biggest Challenges" rows="3" placeholder={t.qChallengesP} className="w-full p-3 rounded-lg border border-gray-200 dark:border-[#041a4a] focus:border-bzl-gold focus:ring-1 focus:ring-bzl-gold bg-gray-50 dark:bg-[#03143a] transition-all outline-none resize-none"></textarea>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qFrustration}</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium">
                {t.frustrations.map((task, i) => (
                  <label key={task} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name={`Frustrating Task: ${content.en.frustrations[i]}`} value="Yes" className="rounded text-bzl-gold focus:ring-bzl-gold border-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">{task}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 4 — Desired capabilities */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qCaps}</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium">
                {t.capabilities.map((cap, i) => (
                  <label key={cap} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name={`Capability: ${content.en.capabilities[i]}`} value="Yes" className="rounded text-bzl-gold focus:ring-bzl-gold border-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">{cap}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qGoal}</label>
              <input type="text" name="Primary Goal" placeholder={t.qGoalP} className="w-full p-3 rounded-lg border border-gray-200 dark:border-[#041a4a] focus:border-bzl-gold focus:ring-1 focus:ring-bzl-gold bg-gray-50 dark:bg-[#03143a] transition-all outline-none" />
            </div>

            {/* Section 5 — Usage intent */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qFreq}</label>
              <div className="flex flex-wrap gap-4">
                {t.frequencies.map((freq, i) => (
                  <label key={freq} className="flex items-center gap-2 cursor-pointer text-sm font-medium">
                    <input type="radio" name="Usage Frequency" value={content.en.frequencies[i]} className="text-bzl-gold focus:ring-bzl-gold border-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">{freq}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qPur}</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium">
                {t.purposes.map((purpose, i) => (
                  <label key={purpose} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name={`Purpose: ${content.en.purposes[i]}`} value="Yes" className="rounded text-bzl-gold focus:ring-bzl-gold border-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">{purpose}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 6 — Time spent analyzing */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qTimeSpent}</label>
              <div className="flex flex-wrap gap-4">
                {t.timeSpentOptions.map((opt, i) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm font-medium">
                    <input type="radio" name="TimeSpent" value={content.en.timeSpentOptions[i]} className="text-bzl-gold focus:ring-bzl-gold border-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 7 — Urgency */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qUrgency}</label>
              <div className="flex flex-wrap gap-4">
                {t.urgencyOptions.map((opt, i) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm font-medium">
                    <input type="radio" name="Urgency" value={content.en.urgencyOptions[i]} className="text-bzl-gold focus:ring-bzl-gold border-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 8 — Willingness to pay */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qPay}</label>
              <div className="flex flex-wrap gap-4">
                {t.payOptions.map((opt, i) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm font-medium">
                    <input type="radio" name="WillingToPay" value={content.en.payOptions[i]} className="text-bzl-gold focus:ring-bzl-gold border-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 9 — Early access contact */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">
                {t.qJoin} <span className="text-red-500">*</span>
              </label>
              <input type="text" name="name" required placeholder={t.qNameP} className="w-full p-3 rounded-lg border border-gray-200 dark:border-bzl-blue-hover focus:border-bzl-gold focus:ring-1 focus:ring-bzl-gold bg-gray-50 dark:bg-[#03143a] transition-all outline-none" />
              <input type="email" name="email" required placeholder={t.qEmailP} className="w-full p-3 rounded-lg border border-gray-200 dark:border-bzl-blue-hover focus:border-bzl-gold focus:ring-1 focus:ring-bzl-gold bg-gray-50 dark:bg-[#03143a] transition-all outline-none" />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t.s1}</p>
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-[#041a4a] flex flex-col items-center">
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full sm:w-auto px-10 py-4 bg-bzl-blue dark:bg-bzl-gold text-white dark:text-bzl-blue rounded-xl hover:bg-bzl-blue/90 dark:hover:bg-bzl-gold/90 transition-all font-bold shadow-md hover:shadow-xl disabled:opacity-50"
              >
                {status === 'submitting' ? t.sub : t.subJoin}
              </button>
              <p className="mt-4 text-xs max-w-sm text-center font-semibold text-gray-400">
                {t.s2}
              </p>
            </div>
          </form>
        </div>

        {/* Success State */}
        <div className="success-wrapper hidden text-center py-20">
          <div className="w-20 h-20 bg-bzl-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <svg className="w-10 h-10 text-bzl-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-bzl-blue dark:text-white mb-4">{t.thx}</h3>
          <p className="text-gray-500 dark:text-gray-400 font-medium text-lg max-w-md mx-auto">
            {t.thxDesc}
          </p>
        </div>

      </div>
    </section>
  );
}
