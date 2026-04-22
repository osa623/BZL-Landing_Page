import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function HeroMain() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const panelRef = useRef(null);
  const { language } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current,
          { y: 48, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
          }
        );
      }

      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.15,
            ease: 'power2.out',
          }
        );
      }

      if (panelRef.current) {
        gsap.fromTo(
          panelRef.current,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.25,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: panelRef.current,
              start: 'top 82%',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const content = {
    en: {
      badge: 'STOCK MARKET INTELLIGENCE',
      subtitle: 'Software for smarter investing and sharper business decisions',
      brand:'BUYZONLABS',
      title: 'We build financial research software that helps investors move with clarity.',
      desc:
        'Buyzonlabs creates market-focused software for investors, analysts, and business leaders who need structured insights, faster research workflows, and better decision support.',
      primaryCta: 'Explore Vision',
      secondaryCta: 'See Platform',
      statOneLabel: 'Built for',
      statOneValue: 'Investors & Businesses',
      statTwoLabel: 'Focused on',
      statTwoValue: 'Research, Signals & Strategy',
    },
    si: {
      badge: 'කොටස් වෙළඳපොළ බුද්ධිමය විසඳුම්',
      subtitle: 'වඩා හොඳ ආයෝජන සහ ව්‍යාපාරික තීරණ සඳහා මෘදුකාංග',
      brand: 'BUYZONLABS',
      title: 'අපි ආයෝජකයන්ට පැහැදිලි තීරණ ගන්න උපකාරී වන මූල්‍ය පර්යේෂණ මෘදුකාංග නිර්මාණය කරමු.',
      desc:
        'Buyzonlabs විසින් ආයෝජකයන්, විශ්ලේෂකයන් සහ ව්‍යාපාර නායකයන් සඳහා වෙළඳපොළට අදාළ, ව්‍යුහගත දත්ත අවබෝධය, වේගවත් පර්යේෂණ ක්‍රියාවලිය සහ බුද්ධිමත් තීරණ සහාය ලබාදෙන මෘදුකාංග සංවර්ධනය කරයි.',
      primaryCta: 'දැක්ම බලන්න',
      secondaryCta: 'වේදිකාව බලන්න',
      statOneLabel: 'සඳහා නිර්මාණය කළේ',
      statOneValue: 'ආයෝජකයන් සහ ව්‍යාපාර',
      statTwoLabel: 'අවධානය යොමු කළේ',
      statTwoValue: 'පර්යේෂණ, සංඥා සහ උපායමාර්ග',
    },
  };

  const t = content[language] || content.en;

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-gray-200 bg-[#f7f9fc] px-6 py-24 text-bzl-blue dark:border-[#041a4a] dark:bg-[#020B22] dark:text-white md:py-32"
    >
      <div className="absolute inset-0 bg-noise-pattern opacity-15 dark:opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(2,14,41,0.08),transparent_32%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-transparent dark:from-white/5 dark:via-transparent" />

      <div
        ref={containerRef}
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="max-w-3xl">
          <div
            ref={badgeRef}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-bzl-blue/10 bg-white/75 px-4 py-2 backdrop-blur-sm dark:border-white/15 dark:bg-white/8"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#00E5FF]" />
            <span className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-[#00BFD8] dark:text-[#00E5FF]">
              {t.badge}
            </span>
          </div>

          <p className="mb-5 font-sans text-sm font-light uppercase tracking-[0.1em] text-bzl-blue/55 dark:text-white/65">
            {t.subtitle}
          </p>

           <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[1.02] tracking-[-0.045em] text-bzl-blue dark:text-white md:text-8xl lg:text-8xl">
            {t.brand}
          </h1>

          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-bzl-blue dark:text-white md:text-6xl lg:text-7xl">
            {t.title}
          </h1>

          <div className="my-8 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#00D5EE] via-bzl-blue/25 to-transparent dark:from-[#00E5FF] dark:via-white/80" />

          <p className="max-w-2xl font-sans text-lg font-light leading-relaxed text-slate-600 dark:text-slate-200 md:text-xl">
            {t.desc}
          </p>

        {/*  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#vision"
              className="inline-flex items-center justify-center rounded-full bg-[#00E5FF] px-7 py-3.5 text-sm font-bold text-[#02152D] transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t.primaryCta}
            </a>
            <a
              href="#platform"
              className="inline-flex items-center justify-center rounded-full border border-bzl-blue/10 bg-white/60 px-7 py-3.5 text-sm font-bold text-bzl-blue backdrop-blur-sm transition-colors duration-300 hover:bg-white/85 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              {t.secondaryCta}
            </a>
          </div> */}
        </div>

        <div ref={panelRef} className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-[#00E5FF]/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-bzl-blue/10 bg-white/72 p-6 shadow-[0_24px_80px_rgba(2,14,41,0.12)] backdrop-blur-md dark:border-white/10 dark:bg-white/6 dark:shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-[#00BFD8] dark:text-[#00E5FF]">
                  Buyzonlabs
                </p>
                <p className="mt-2 font-display text-2xl font-light text-bzl-blue dark:text-white">
                  Market Intelligence
                </p>
              </div>
              <div className="rounded-full border border-[#00BFD8]/20 bg-[#00E5FF]/10 px-3 py-1 text-xs font-semibold text-[#007C91] dark:border-[#00E5FF]/35 dark:text-[#7BEFFF]">
                Live Vision
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-bzl-blue/8 bg-[#edf3fb] p-5 dark:border-white/8 dark:bg-[#03142F]/85">
                <p className="font-sans text-sm text-bzl-blue/45 dark:text-white/55">{t.statOneLabel}</p>
                <p className="mt-2 font-display text-xl font-light text-bzl-blue dark:text-white">{t.statOneValue}</p>
              </div>

              <div className="rounded-2xl border border-bzl-blue/8 bg-white/85 p-5 dark:border-white/8 dark:bg-white/5">
                <p className="font-sans text-sm text-bzl-blue/45 dark:text-white/55">{t.statTwoLabel}</p>
                <p className="mt-2 font-display text-xl font-light text-bzl-blue dark:text-white">{t.statTwoValue}</p>
              </div>

              <div className="rounded-2xl border border-bzl-blue/8 bg-gradient-to-r from-[#00E5FF]/14 to-white/70 p-5 dark:border-white/8 dark:to-white/6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-sans text-sm text-bzl-blue/50 dark:text-white/60">Core Mission</p>
                    <p className="mt-2 font-display text-lg font-light text-bzl-blue dark:text-white">
                      Structured tools for research, confidence, and execution.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#00E5FF]" />
                    <span className="h-3 w-3 rounded-full bg-white/30" />
                    <span className="h-3 w-3 rounded-full bg-white/15" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
