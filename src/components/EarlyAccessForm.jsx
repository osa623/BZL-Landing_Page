import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function EarlyAccessForm() {
  const containerRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const { language } = useLanguage();

  useEffect(() => {
    const el = containerRef.current;

    gsap.fromTo(
      el,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
        },
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
      gsap.fromTo(
        '.success-wrapper',
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
      badge: 'EARLY ACCESS RESEARCH',
      title: 'Help Shape Buyzonlabs',
      desc: 'Your answers directly influence how the platform is being built.',
      sectionContext: 'Context',
      sectionWorkflow: 'Workflow',
      sectionPain: 'Pain Points',
      sectionValue: 'Value',
      sectionUsage: 'Usage',
      sectionFit: 'Decision Fit',
      sectionContact: 'Early Access',
      whyTitle: 'Why this matters',
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
      qNameP: 'Ajith Perera',
      qEmailP: 'you@company.com',
      s1: 'Only used to notify when the platform launches.',
      s2: 'This survey collects product research insights only. No personal or financial data is requested.',
      sub: 'Submitting...',
      subJoin: 'Submit & Join Early Access',
      thx: 'Thank you for contributing',
      thxDesc: "Your input is helping shape the first release of Buyzonlabs. We'll be in touch soon.",
      roles: [
        'Select an option',
        'Individual investor',
        'Professional investor',
        'Market researcher / analyst',
        'Student / academic',
        'Business decision maker',
        'Other',
      ],
      levels: ['Beginner', 'Intermediate', 'Advanced', 'Professional'],
      markets: ['Colombo Stock Exchange (CSE)', 'US markets', 'Crypto markets', 'Forex', 'Other'],
      frustrations: [
        'Reading reports',
        'Extracting data',
        'Comparing companies',
        'Understanding financials',
        'Doing calculations and valuations',
        'Making decisions',
      ],
      capabilities: [
        'Automatic annual report analysis',
        'Instant company summaries',
        'Financial trend detection',
        'Cross-company comparison',
        'Research organization workspace',
        'Decision-support insights',
      ],
      frequencies: ['Daily', 'Weekly', 'Occasionally', 'Only when researching a company'],
      purposes: [
        'Investment decisions',
        'Academic research',
        'Market monitoring',
        'Business strategy',
        'Learning and education',
      ],
      timeSpentOptions: ['<30 minutes', '30-60 minutes', '1-3 hours', '3+ hours'],
      urgencyOptions: ['Very urgent', 'Somewhat urgent', 'Just exploring'],
      payOptions: ['Yes', 'Maybe', 'No'],
    },
    si: {
      badge: 'මුල් ප්‍රවේශ පර්යේෂණය',
      title: 'Buyzonlabs හැඩගැස්වීමට උදවු වන්න',
      desc: 'ඔබගේ පිළිතුරු වේදිකාව ගොඩනැගෙමින් පවතින ආකාරයට සෘජුවම බලපායි.',
      sectionContext: 'පසුබිම',
      sectionWorkflow: 'ක්‍රියාවලිය',
      sectionPain: 'අභියෝග',
      sectionValue: 'අගය',
      sectionUsage: 'භාවිතය',
      sectionFit: 'ගැළපීම',
      sectionContact: 'මුල් ප්‍රවේශය',
      whyTitle: 'මෙය වැදගත් වන්නේ ඇයි',
      qRole: 'ප්‍රධාන භූමිකාව',
      qExp: 'පළපුරුද්දේ මට්ටම',
      qMarkets: 'ඔබ අනුගමනය කරන වෙළඳපොළ',
      qCurrentWorkflow: 'ඔබ සාමාන්‍යයෙන් පර්යේෂණ කරන්නේ කෙසේද?',
      qCurrentWorkflowP: 'ඔබ සාමාන්‍යයෙන් භාවිතා කරන ක්‍රම හෝ මෙවලම් සඳහන් කරන්න.',
      qTools: 'දැනට භාවිතා කරන මෙවලම්',
      qToolsP: 'උදා: Spreadsheet, brokerage tools, financial websites, PDF, research papers',
      qChallenges: 'විශාලතම අභියෝග',
      qChallengesP: 'මූල්‍ය පර්යේෂණයේදී වැඩිම කාලය හෝ උත්සාහය වැය වන්නේ කුමක් සඳහාද?',
      qFrustration: 'වඩාත් අපහසු කාර්යයන්',
      qCaps: 'වඩාත්ම වටිනා හැකියාවන්',
      qGoal: 'ප්‍රධාන ප්‍රතිඵල ඉලක්කය',
      qGoalP: 'මෙවැනි මෙවලමක් ඔබට අත්‍යවශ්‍ය කරන ප්‍රතිඵලය කුමක්ද?',
      qFreq: 'අපේක්ෂිත භාවිත වාරතාව',
      qPur: 'භාවිතයේ අරමුණ',
      qTimeSpent: 'එක් සමාගමක් විශ්ලේෂණයට ගතවන කාලය',
      qUrgency: 'වඩා හොඳ විසඳුමක් ඔබට කොපමණ ඉක්මනින් අවශ්‍යද?',
      qPay: 'මෙවැනි මෙවලමක් සඳහා ඔබ ගෙවීමට කැමතිද?',
      qJoin: 'මුල් ප්‍රවේශ යාවත්කාලීන සඳහා එක්වන්න',
      qNameP: 'උදා: අජිත් පෙරේරා',
      qEmailP: 'oba@samagama.com',
      s1: 'වේදිකාව දියත් කරන විට දැනුම් දීමට පමණක් භාවිතා කරයි.',
      s2: 'මෙම සමීක්ෂණය නිෂ්පාදන පර්යේෂණ තොරතුරු පමණක් රැස් කරයි. පෞද්ගලික හෝ මූල්‍ය දත්ත කිසිවක් ඉල්ලන්නේ නැත.',
      sub: 'ඉදිරිපත් කරමින්...',
      subJoin: 'ඉදිරිපත් කර මුල් ප්‍රවේශයට එක්වන්න',
      thx: 'ඔබගේ දායකත්වයට ස්තූතියි',
      thxDesc: 'ඔබගේ අදහස් Buyzonlabs හි පළමු නිකුතුව හැඩගස්වයි. අපි ඉක්මනින් සම්බන්ධ වන්නෙමු.',
      roles: [
        'විකල්පයක් තෝරන්න',
        'තනි ආයෝජකයෙක්',
        'වෘත්තීය ආයෝජකයෙක්',
        'වෙළඳපොළ පර්යේෂක / විශ්ලේෂක',
        'ශිෂ්‍ය / ශාස්ත්‍රීය',
        'ව්‍යාපාරික තීරණ ගන්නා අයෙක්',
        'වෙනත්',
      ],
      levels: ['ආරම්භක', 'මධ්‍යම', 'උසස්', 'වෘත්තීය'],
      markets: ['කොළඹ කොටස් වෙළඳපොළ (CSE)', 'එක්සත් ජනපද වෙළඳපොළ', 'ක්‍රිප්ටෝ වෙළඳපොළ', 'Forex', 'වෙනත්'],
      frustrations: [
        'වාර්තා කියවීම',
        'දත්ත උකහා ගැනීම',
        'සමාගම් සැසඳීම',
        'මූල්‍ය තත්ත්වය තේරුම් ගැනීම',
        'ගණනයන් සහ වටිනාකරණය කිරීම',
        'තීරණ ගැනීම',
      ],
      capabilities: [
        'ස්වයංක්‍රීය වාර්ෂික වාර්තා විශ්ලේෂණය',
        'ක්ෂණික සමාගම් සාරාංශ',
        'මූල්‍ය ප්‍රවණතා හඳුනා ගැනීම',
        'සමාගම් අතර සැසඳීම්',
        'පර්යේෂණ සංවිධාන වැඩබිම',
        'තීරණ සහාය අවබෝධයන්',
      ],
      frequencies: ['දිනපතා', 'සතිපතා', 'කලාතුරකින්', 'සමාගමක් ගැන පර්යේෂණ කරන විට පමණක්'],
      purposes: ['ආයෝජන තීරණ', 'ශාස්ත්‍රීය පර්යේෂණ', 'වෙළඳපොළ නිරීක්ෂණය', 'ව්‍යාපාර උපායමාර්ග', 'ඉගෙනීම සහ අධ්‍යාපනය'],
      timeSpentOptions: ['මිනිත්තු 30ට අඩු', 'මිනිත්තු 30-60', 'පැය 1-3', 'පැය 3ට වැඩි'],
      urgencyOptions: ['ඉතා හදිසි', 'තරමක් හදිසි', 'දැනගැනීමට පමණයි'],
      payOptions: ['ඔව්', 'සමහරවිට', 'නැහැ'],
    },
  };

  const t = content[language] || content.en;

  const inputClassName =
    'w-full rounded-2xl border border-gray-200/85 bg-white/85 px-4 py-3.5 text-sm text-bzl-blue shadow-[0_10px_30px_rgba(2,14,41,0.05)] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-bzl-gold/70 focus:bg-white focus:ring-4 focus:ring-bzl-gold/10 dark:border-[#12306a] dark:bg-[#03143a]/88 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-bzl-gold dark:focus:bg-[#071a45]';
  const optionCardClassName =
    'flex items-start gap-3 rounded-2xl border border-gray-200/90 bg-white/82 px-4 py-3 text-sm font-medium text-slate-600 shadow-[0_10px_26px_rgba(2,14,41,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-bzl-gold/45 hover:bg-white dark:border-[#102a60] dark:bg-[#041735]/72 dark:text-slate-200 dark:hover:border-bzl-gold/55 dark:hover:bg-[#08204b]';
  const sectionCardClassName =
    'rounded-[1.75rem] border border-white/75 bg-white/72 p-6 shadow-[0_22px_60px_rgba(2,14,41,0.08)] backdrop-blur-sm dark:border-white/8 dark:bg-[#02112d]/72 dark:shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:p-7';

  const renderChoiceGrid = (items, inputType, namePrefix, englishItems, fieldName, required = false, columns = 'md:grid-cols-2') => (
    <div className={`grid grid-cols-1 gap-3 ${columns}`}>
      {items.map((item, i) => (
        <label key={`${fieldName}-${i}`} className={`${optionCardClassName} cursor-pointer`}>
          <input
            type={inputType}
            name={inputType === 'checkbox' ? `${namePrefix}: ${englishItems[i]}` : fieldName}
            value={inputType === 'checkbox' ? 'Yes' : englishItems[i]}
            required={required}
            className={`${inputType === 'checkbox' ? 'rounded' : ''} mt-0.5 border-gray-300 text-bzl-gold focus:ring-bzl-gold`}
          />
          <span>{item}</span>
        </label>
      ))}
    </div>
  );

  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center justify-center overflow-hidden border-y border-gray-200 bg-[linear-gradient(180deg,#f7f9fc_0%,#eef3fa_52%,#f8fafc_100%)] px-6 py-28 dark:border-[#041a4a] dark:bg-[linear-gradient(180deg,#03142f_0%,#020b22_52%,#041735_100%)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-noise-pattern opacity-15 dark:opacity-35" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(242,201,76,0.12),transparent_24%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(242,201,76,0.10),transparent_24%)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-[#00E5FF]/10 blur-3xl dark:bg-[#00E5FF]/14" />
      <div className="pointer-events-none absolute bottom-[-6rem] right-[-4rem] h-80 w-80 rounded-full bg-bzl-gold/10 blur-3xl dark:bg-bzl-gold/12" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-white/55 blur-3xl dark:bg-white/6" />

      <div
        ref={containerRef}
        className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/65 p-8 shadow-[0_30px_100px_rgba(2,14,41,0.12)] backdrop-blur-md dark:border-white/10 dark:bg-[#020e29]/78 dark:shadow-[0_30px_100px_rgba(0,0,0,0.34)] md:p-12"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#00E5FF]/10 via-bzl-gold/5 to-transparent dark:from-[#00E5FF]/8 dark:via-bzl-gold/4" />
        <div className="pointer-events-none absolute right-10 top-10 h-28 w-28 rounded-full border border-white/40 bg-white/25 blur-2xl dark:border-white/8 dark:bg-white/4" />
        <div className="pointer-events-none absolute bottom-8 left-10 h-24 w-24 rounded-full border border-bzl-gold/20 bg-bzl-gold/10 blur-2xl" />

        <div className="relative z-10 mb-12 text-center">

          <div className="inline-flex items-center justify-center rounded-[1.25rem] border border-white/70 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-[#03143a]/55">
            <img src="/src/assets/new_logo.png" alt="Buyzonlabs Logo" className="h-10 w-auto object-contain md:h-12" />
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-bzl-blue dark:text-white md:text-4xl">{t.title}</h2>
          <p className="mx-auto max-w-2xl text-base font-medium text-slate-500 dark:text-slate-300">{t.desc}</p>
          <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#00D5EE] via-bzl-gold/50 to-transparent dark:from-[#00E5FF] dark:via-bzl-gold" />
        </div>

        <div className="form-wrapper relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="_subject" value="BuyzonlabsEarly Access Submission" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className={sectionCardClassName}>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#00A8BE] dark:text-[#56EFFF]">{t.sectionContext}</p>
              <div className="grid gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-bzl-blue dark:text-white">
                    {t.qRole} <span className="text-red-500">*</span>
                  </label>
                  <select name="Role" required className={inputClassName}>
                    {t.roles.map((role, i) => (
                      <option key={i} value={i === 0 ? '' : content.en.roles[i]}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-bzl-blue dark:text-white">
                    {t.qExp} <span className="text-red-500">*</span>
                  </label>
                  {renderChoiceGrid(t.levels, 'radio', '', content.en.levels, 'Experience', true)}
                </div>
              </div>
            </div>

            <div className={sectionCardClassName}>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#00A8BE] dark:text-[#56EFFF]">{t.sectionWorkflow}</p>
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qMarkets}</label>
                  {renderChoiceGrid(t.markets, 'checkbox', 'Market', content.en.markets, 'markets', false, 'md:grid-cols-2 xl:grid-cols-3')}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qCurrentWorkflow}</label>
                  <textarea name="Current Workflow" rows="4" placeholder={t.qCurrentWorkflowP} className={`${inputClassName} resize-none`} />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qTools}</label>
                  <input type="text" name="Tools Used" placeholder={t.qToolsP} className={inputClassName} />
                </div>
              </div>
            </div>

            <div className={sectionCardClassName}>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#00A8BE] dark:text-[#56EFFF]">{t.sectionPain}</p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qChallenges}</label>
                  <textarea name="Biggest Challenges" rows="4" placeholder={t.qChallengesP} className={`${inputClassName} resize-none`} />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qFrustration}</label>
                  {renderChoiceGrid(t.frustrations, 'checkbox', 'Frustrating Task', content.en.frustrations, 'frustrations')}
                </div>
              </div>
            </div>

            <div className={sectionCardClassName}>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#00A8BE] dark:text-[#56EFFF]">{t.sectionValue}</p>
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qCaps}</label>
                  {renderChoiceGrid(t.capabilities, 'checkbox', 'Capability', content.en.capabilities, 'capabilities')}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qGoal}</label>
                  <input type="text" name="Primary Goal" placeholder={t.qGoalP} className={inputClassName} />
                </div>
              </div>
            </div>

            <div className={sectionCardClassName}>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#00A8BE] dark:text-[#56EFFF]">{t.sectionUsage}</p>
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qFreq}</label>
                  {renderChoiceGrid(t.frequencies, 'radio', '', content.en.frequencies, 'Usage Frequency')}
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qPur}</label>
                  {renderChoiceGrid(t.purposes, 'checkbox', 'Purpose', content.en.purposes, 'purposes')}
                </div>
              </div>
            </div>

            <div className={sectionCardClassName}>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#00A8BE] dark:text-[#56EFFF]">{t.sectionFit}</p>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qTimeSpent}</label>
                  {renderChoiceGrid(t.timeSpentOptions, 'radio', '', content.en.timeSpentOptions, 'TimeSpent', false, '')}
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qUrgency}</label>
                  {renderChoiceGrid(t.urgencyOptions, 'radio', '', content.en.urgencyOptions, 'Urgency', false, '')}
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-bzl-blue dark:text-white">{t.qPay}</label>
                  {renderChoiceGrid(t.payOptions, 'radio', '', content.en.payOptions, 'WillingToPay', false, '')}
                </div>
              </div>
            </div>

            <div className={sectionCardClassName}>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#00A8BE] dark:text-[#56EFFF]">{t.sectionContact}</p>
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-bzl-blue dark:text-white">
                      {t.qJoin} <span className="text-red-500">*</span>
                    </label>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{t.s1}</p>
                  </div>
                  <input type="text" name="name" required placeholder={t.qNameP} className={inputClassName} />
                  <input type="email" name="email" required placeholder={t.qEmailP} className={inputClassName} />
                </div>

                <div className="rounded-[1.5rem] border border-bzl-gold/20 bg-gradient-to-br from-[#00E5FF]/10 via-white/70 to-bzl-gold/10 p-5 shadow-[0_16px_40px_rgba(2,14,41,0.06)] dark:border-bzl-gold/15 dark:from-[#00E5FF]/8 dark:via-[#061a40]/80 dark:to-bzl-gold/8">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f6f84] dark:text-[#7BEFFF]">{t.whyTitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{t.s2}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center border-t border-white/60 pt-6 dark:border-white/10">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full rounded-full bg-bzl-blue px-10 py-4 text-sm font-bold text-white shadow-[0_18px_40px_rgba(2,14,41,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-bzl-blue/92 hover:shadow-[0_22px_48px_rgba(2,14,41,0.24)] disabled:opacity-50 dark:bg-bzl-gold dark:text-bzl-blue dark:hover:bg-bzl-gold/92 sm:w-auto"
              >
                {status === 'submitting' ? t.sub : t.subJoin}
              </button>
            </div>
          </form>
        </div>

        <div className="success-wrapper relative z-10 hidden py-20 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-bzl-gold/10 shadow-sm">
            <svg className="h-10 w-10 text-bzl-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="mb-4 text-3xl font-bold text-bzl-blue dark:text-white">{t.thx}</h3>
          <p className="mx-auto max-w-md text-lg font-medium text-gray-500 dark:text-gray-400">{t.thxDesc}</p>
        </div>
      </div>
    </section>
  );
}
