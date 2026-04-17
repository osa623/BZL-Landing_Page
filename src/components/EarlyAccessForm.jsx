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
      await fetch('https://formsubmit.co/ajax/your_email@example.com', {
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
      qCurrentWorkflow: 'Current research workflow',
      qCurrentWorkflowP: 'Describe how you currently research companies or investments from start to decision.',
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
      qJoin: 'Join early access updates',
      qEmailP: 'you@company.com',
      s1: 'Only used to notify when the platform launches.',
      s2: 'This survey collects product research insights only. No personal or financial data is requested.',
      sub: 'Submitting...',
      subJoin: 'Submit & Join Early Access',
      thx: 'Thank you for contributing',
      thxDesc: 'Your input is helping shape the first release of Buyzonlabs. We\'ll be in touch soon.'
    },
    si: {
      title: 'Buyzonlabs හැඩගැස්වීමට උදවු වන්න',
      desc: 'ඔබගේ පිළිතුරු වේදිකාව ගොඩනැගෙමින් පවතින ආකාරය කෙරෙහි සෘජුවම බලපායි.',
      qRole: 'මූලික භූමිකාව',
      qExp: 'පළපුරුද්දේ මට්ටම',
      qMarkets: 'අනුගමනය කරන වෙළඳපොළ',
      qCurrentWorkflow: 'වත්මන් පර්යේෂණ කාර්ය ප්‍රවාහය',
      qCurrentWorkflowP: 'ඔබ දැනට සමාගම් හෝ ආයෝජන තීරණය කිරීමේ සිට පර්යේෂණ කරන ආකාරය විස්තර කරන්න.',
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
      qJoin: 'මූලික ප්‍රවේශ යාවත්කාලීනවලට එක්වන්න',
      qEmailP: 'ඔබ@සමාගම.com',
      s1: 'වේදිකාව දියත් කරන විට දැනුම් දීමට පමණක් යොදා ගනී.',
      s2: 'මෙම සමීක්ෂණය නිෂ්පාදන පර්යේෂණ තොරතුරු පමණක් රැස් කරයි. කිසිදු පුද්ගලික හෝ මූල්‍ය දත්තයක් ඉල්ලා නැත.',
      sub: 'ඉදිරිපත් කරමින් පවතී...',
      subJoin: 'ඉදිරිපත් කර මූලික ප්‍රවේශයට එක්වන්න',
      thx: 'ඔබගේ දායකත්වයට ස්තූතියි',
      thxDesc: 'ඔබගේ ආදානය Buyzonlabs හි පළමු නිකුතුව හැඩගස්වයි. අපි ඉක්මනින් සම්බන්ධ වන්නෙමු.'
    }
  };

  const t = content[language];

  return (
    <section id="contact" className="min-h-screen py-32 bg-gray-50 dark:bg-[#03143a]/50 px-6 flex items-center justify-center">
      <div ref={containerRef} className="w-full max-w-3xl bg-white dark:bg-bzl-blue p-8 md:p-12 rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-bzl-blue-hover relative overflow-hidden">
        
        <div className="text-center mb-10">
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
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">Primary role <span className="text-red-500">*</span></label>
              <select name="Role" required className="w-full p-3 rounded-lg border border-gray-200 dark:border-[#041a4a] focus:border-bzl-gold focus:ring-1 focus:ring-bzl-gold bg-gray-50 dark:bg-[#03143a] transition-all outline-none">
                <option value="">Select an option</option>
                <option value="Individual investor">Individual investor</option>
                <option value="Professional investor">Professional investor</option>
                <option value="Market researcher / analyst">Market researcher / analyst</option>
                <option value="Student / academic">Student / academic</option>
                <option value="Business decision maker">Business decision maker</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">Experience level <span className="text-red-500">*</span></label>
              <div className="flex flex-wrap gap-4">
                {['Beginner', 'Intermediate', 'Advanced', 'Professional'].map(level => (
                  <label key={level} className="flex items-center gap-2 cursor-pointer text-sm font-medium">
                    <input type="radio" name="Experience" value={level} required className="text-bzl-gold focus:ring-bzl-gold border-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 2 — Current workflow */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">Markets followed</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm font-medium">
                {['Colombo Stock Exchange (CSE)', 'US markets', 'Crypto markets', 'Forex', 'Other'].map(market => (
                  <label key={market} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name={`Market: ${market}`} value="Yes" className="rounded text-bzl-gold focus:ring-bzl-gold border-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">{market}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">Current research workflow</label>
              <textarea name="Current Workflow" rows="3" placeholder="Describe how you currently research companies or investments from start to decision." className="w-full p-3 rounded-lg border border-gray-200 dark:border-[#041a4a] focus:border-bzl-gold focus:ring-1 focus:ring-bzl-gold bg-gray-50 dark:bg-[#03143a] transition-all outline-none resize-none"></textarea>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">Tools currently used</label>
              <input type="text" name="Tools Used" placeholder="e.g. Spreadsheets, brokerage tools, financial websites, PDFs, research papers" className="w-full p-3 rounded-lg border border-gray-200 dark:border-[#041a4a] focus:border-bzl-gold focus:ring-1 focus:ring-bzl-gold bg-gray-50 dark:bg-[#03143a] transition-all outline-none" />
            </div>

            {/* Section 3 — Pain points (critical) */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">Biggest challenges</label>
              <textarea name="Biggest Challenges" rows="3" placeholder="What consumes the most time or effort during financial research?" className="w-full p-3 rounded-lg border border-gray-200 dark:border-[#041a4a] focus:border-bzl-gold focus:ring-1 focus:ring-bzl-gold bg-gray-50 dark:bg-[#03143a] transition-all outline-none resize-none"></textarea>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">Most frustrating tasks</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium">
                {[
                  'Reading annual reports manually',
                  'Extracting financial metrics',
                  'Comparing companies',
                  'Tracking trends over time',
                  'Organizing research notes',
                  'Turning research into decisions'
                ].map(task => (
                  <label key={task} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name={`Frustrating Task: ${task}`} value="Yes" className="rounded text-bzl-gold focus:ring-bzl-gold border-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">{task}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 4 — Desired capabilities */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">Most valuable capabilities</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium">
                {[
                  'Automatic annual report analysis',
                  'Instant company summaries',
                  'Financial trend detection',
                  'Cross-company comparison',
                  'Research organization workspace',
                  'Decision-support insights'
                ].map(cap => (
                  <label key={cap} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name={`Capability: ${cap}`} value="Yes" className="rounded text-bzl-gold focus:ring-bzl-gold border-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">{cap}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">Primary outcome goal</label>
              <input type="text" name="Primary Goal" placeholder="What result would make a tool like this essential for you?" className="w-full p-3 rounded-lg border border-gray-200 dark:border-[#041a4a] focus:border-bzl-gold focus:ring-1 focus:ring-bzl-gold bg-gray-50 dark:bg-[#03143a] transition-all outline-none" />
            </div>

            {/* Section 5 — Usage intent */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">Intended usage frequency</label>
              <div className="flex flex-wrap gap-4">
                {['Daily', 'Weekly', 'Occasionally', 'Only when researching a company'].map(freq => (
                  <label key={freq} className="flex items-center gap-2 cursor-pointer text-sm font-medium">
                    <input type="radio" name="Usage Frequency" value={freq} className="text-bzl-gold focus:ring-bzl-gold border-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">{freq}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">Usage purpose</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium">
                {[
                  'Investment decisions',
                  'Academic research',
                  'Market monitoring',
                  'Business strategy',
                  'Learning and education'
                ].map(purpose => (
                  <label key={purpose} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name={`Purpose: ${purpose}`} value="Yes" className="rounded text-bzl-gold focus:ring-bzl-gold border-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">{purpose}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 6 — Optional early access */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">
                Join early access updates <span className="text-gray-400 font-normal text-xs ml-2">(Optional)</span>
              </label>
              <input type="email" name="email" placeholder="you@company.com" className="w-full p-3 rounded-lg border border-gray-200 dark:border-[#041a4a] focus:border-bzl-gold focus:ring-1 focus:ring-bzl-gold bg-gray-50 dark:bg-[#03143a] transition-all outline-none" />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Only used to notify when the platform launches.</p>
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-[#041a4a] flex flex-col items-center">
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full sm:w-auto px-10 py-4 bg-bzl-blue dark:bg-bzl-gold text-white dark:text-bzl-blue rounded-xl hover:bg-bzl-blue/90 dark:hover:bg-bzl-gold/90 transition-all font-bold shadow-md hover:shadow-xl disabled:opacity-50"
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit & Join Early Access'}
              </button>
              <p className="mt-4 text-xs max-w-sm text-center font-semibold text-gray-400">
                This survey collects product research insights only. No personal or financial data is requested.
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
          <h3 className="text-3xl font-bold text-bzl-blue dark:text-white mb-4">Thank you for contributing</h3>
          <p className="text-gray-500 dark:text-gray-400 font-medium text-lg max-w-md mx-auto">
            Your input is helping shape the first release of Buyzonlabs . We'll be in touch soon.
          </p>
        </div>

      </div>
    </section>
  );
}
