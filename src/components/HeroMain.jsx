import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "../LanguageContext";

/* ══════════════════════════════════════
   ICONS
══════════════════════════════════════ */
const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
  </svg>
);

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="3"    x2="12" y2="6.5"  strokeLinecap="round" />
    <line x1="12" y1="17.5" x2="12" y2="21"   strokeLinecap="round" />
    <line x1="3"   y1="12"  x2="6.5" y2="12"  strokeLinecap="round" />
    <line x1="17.5" y1="12" x2="21"  y2="12"  strokeLinecap="round" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const TrendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.281-2.281 5.941" />
  </svg>
);

const MarketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <circle cx="12" cy="12" r="9.5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const ResearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <rect x="4" y="3" width="13" height="16" rx="1.5" />
    <path strokeLinecap="round" d="M8 8h6M8 11.5h6M8 15h4" />
  </svg>
);

const FlashIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M12 3C12 3 5 6 5 12.5V18l7 3 7-3v-5.5C19 6 12 3 12 3Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m-5-5 5 5-5 5" />
  </svg>
);

/* ── Mini bar + sparkline ── */
const MiniChart = () => {
  const bars   = [35, 55, 42, 70, 58, 80, 62, 90, 74, 95];
  const points = bars
    .map((b, i) => `${(i / (bars.length - 1)) * 100},${100 - b}`)
    .join(" ");
  return (
    <div className="relative">
      <div className="flex items-end gap-0.5 h-10 mb-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background: i === bars.length - 1 ? "#F2C94C" : "rgba(242,201,76,0.22)",
            }}
          />
        ))}
      </div>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-10 pointer-events-none"
      >
        <polyline
          points={points}
          fill="none"
          stroke="#F2C94C"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

/* ── Dot grid ── */
const DotGrid = ({ cols = 7, rows = 6 }) => (
  <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
    {Array.from({ length: cols * rows }).map((_, i) => (
      <div key={i} className="w-1 h-1 rounded-full bg-white/25" />
    ))}
  </div>
);

/* ══════════════════════════════════════════════════════════════
   BILINGUAL CONTENT
══════════════════════════════════════════════════════════════ */
const content = {
  /* ─── English ─── */
  en: {
    badge:      "STOCK MARKET INTELLIGENCE",
    subtitle:   "Software for smarter investing and sharper business decisions",
    brand:      "BUYZONLABS",
    titlePre:   "We build",
    titleHL:    "financial research",
    titlePost:  " software that helps investors move with clarity.",
    desc:
      "Buyzonlabs creates market-focused software for investors, analysts, and business leaders who need structured insights, faster research workflows, and better decision support.",
    cta:        "Early Access",
    panelLabel: "BUYZONLABS",
    panelTitle: "Market Intelligence",
    panelBadge: "Live Vision",
    rows: [
      { label: "Built for",    value: "Investors & Businesses" },
      { label: "Focused on",   value: "Research, Signals & Strategy" },
      { label: "Core Mission", value: "Structured tools for research, confidence, and execution." },
    ],
    features: [
      { title: "Market Focused",      desc: "Actionable insights that help you stay ahead." },
      { title: "Structured Research", desc: "Save time with organized data and analysis." },
      { title: "Faster Workflows",    desc: "Streamlined tools for smarter decisions." },
      { title: "Decision Support",    desc: "Confidence to act on what truly matters." },
    ],
  },

  /* ─── Sinhala ─── */
  si: {
    badge:      "කොටස් වෙළඳපොළ බුද්ධිය",
    subtitle:   "වඩා හොඳ ආයෝජනය හා ව්‍යාපාරික තීරණ සඳහා මෘදුකාංග",
    brand:      "BUYZONLABS",
    titlePre:   "අපි නිර්මාණය කරන",
    titleHL:    "මූල්‍ය පර්යේෂණ මෘදුකාංගය",
    titlePost:  "— ආයෝජකයින්ට පැහැදිලිව ඉදිරියට යාමට.",
    desc:
      "Buyzonlabs ආයෝජකයින්, විශ්ලේෂකයින් සහ ව්‍යාපාරික නායකයින් සඳහා වෙළඳපොළ-කේන්ද්‍රිත මෘදුකාංග නිර්මාණය කරයි — ව්‍යුහගත අවබෝධය, වේගවත් පර්යේෂණ සහ ශක්තිමත් තීරණ ආධාරය.",
    cta:        "කල්තියා ප්‍රවේශය",
    panelLabel: "BUYZONLABS",
    panelTitle: "වෙළඳපොළ බුද්ධිය",
    panelBadge: "සජීවී දර්ශනය",
    rows: [
      { label: "සඳහා නිර්මිතයි",    value: "ආයෝජකයින් සහ ව්‍යාපාර" },
      { label: "අවධානය යොමු කරයි",  value: "පර්යේෂණ, සංඥා සහ උපාය" },
      { label: "මූල පරමාර්ථය",      value: "පර්යේෂණ, විශ්වාසය සහ ක්‍රියාත්මක කිරීම සඳහා ව්‍යුහගත මෙවලම්." },
    ],
    features: [
      { title: "වෙළඳපොළ-කේන්ද්‍රිත",  desc: "ඔබ සැමවිට ඉදිරියෙන් සිටීමට ක්‍රියාකාරී අදහස්." },
      { title: "ව්‍යුහගත පර්යේෂණ",    desc: "සංවිධිත දත්ත හා විශ්ලේෂණයෙන් කාලය ඉතිරි කරන්න." },
      { title: "වේගවත් කාර්යාවලි",    desc: "බුද්ධිමත් තීරණ සඳහා සරල කළ මෙවලම්." },
      { title: "තීරණ ආධාරය",          desc: "සැබවින්ම වැදගත් දේ සඳහා ක්‍රියා කිරීමට විශ්වාසය." },
    ],
  },
};

/* ══════════════════════════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════════════════════════ */
export default function HeroMain() {
  const containerRef = useRef(null);
  const panelRef     = useRef(null);
  const chartRef     = useRef(null);
  const { language } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* stagger left content */
      gsap.fromTo(
        gsap.utils.toArray(".reveal"),
        { y: 44, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.09, duration: 0.9, ease: "power3.out" }
      );

      /* panel slide-in + float */
      if (panelRef.current) {
        gsap.fromTo(
          panelRef.current,
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 0.35 }
        );
        gsap.to(panelRef.current, {
          y: -10, repeat: -1, yoyo: true, duration: 4, ease: "sine.inOut",
        });
      }

      /* chart card float (offset phase) */
      if (chartRef.current) {
        gsap.fromTo(
          chartRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.65 }
        );
        gsap.to(chartRef.current, {
          y: 10, repeat: -1, yoyo: true, duration: 4, ease: "sine.inOut", delay: 2,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [language]);

  const t = content[language] || content.en;

  const rowIcons     = [<UsersIcon />, <TargetIcon />, <TrendIcon />];
  const featureIcons = [<MarketIcon />, <ResearchIcon />, <FlashIcon />, <ShieldIcon />];
  const featureBgs   = [
    "bg-[#041a4a] dark:bg-[#1a3a7a] text-white",
    "bg-[#F2C94C] text-[#041a4a]",
    "bg-[#041a4a] dark:bg-[#1a3a7a] text-white",
    "bg-[#F2C94C] text-[#041a4a]",
  ];

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-white dark:bg-[#06101f] flex flex-col"
    >
      {/* ── RIGHT DARK SHAPE — desktop only ── */}
      <div className="hidden lg:block absolute right-0 top-0 h-full w-[52%] bg-[#041a4a] dark:bg-[#081629] rounded-l-[90px] pointer-events-none" />

      {/* ── Desktop decoratives ── */}
      <div className="hidden lg:block absolute right-[4%] top-[10%] opacity-50 pointer-events-none">
        <DotGrid cols={7} rows={6} />
      </div>
      <div className="hidden lg:block absolute right-[12%] top-[8%] w-28 h-28 rounded-full border-[3px] border-[#F2C94C]/50 pointer-events-none" />
      <div className="hidden lg:block absolute right-[10%] top-[6%]  w-14 h-14 rounded-full bg-[#F2C94C]/70 pointer-events-none" />
      <div className="hidden lg:block absolute right-[20%] top-[55%] w-52 h-52 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute left-[35%] top-0 w-72 h-72 rounded-full bg-[#F2C94C]/5 blur-3xl pointer-events-none" />

      {/* ══ MAIN GRID ══ */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-8 lg:pb-12 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* ───────── LEFT CONTENT ───────── */}
        <div className="flex flex-col items-start">

          {/* Badge */}
          <div className="reveal mb-5 sm:mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#041a4a]/20 dark:border-white/15 bg-white dark:bg-white/5 px-4 py-2 shadow-sm">
            <span className="w-4 h-4 rounded-full bg-[#041a4a] dark:bg-white flex items-center justify-center shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2C94C]" />
            </span>
            <span className="text-[9px] sm:text-[10px]   font-semibold text-[#041a4a] dark:text-white/80 uppercase leading-none">
              {t.badge}
            </span>
          </div>

          {/* Subtitle */}
          <p className="reveal text-[10px] sm:text-xs uppercase  text-[#041a4a]/55 dark:text-white/40 mb-4">
            {t.subtitle}
          </p>

          {/* Brand */}
          <h1 className="reveal font-black text-[#041a4a] dark:text-white leading-[0.88] tracking-tight text-[2.6rem] sm:text-[3.8rem] lg:text-[4.0rem] xl:text-[5.0rem]">
            {t.brand}
          </h1>

          {/* Headline */}
          <h2 className="reveal mt-3 sm:mt-4 font-bold leading-[1.15] text-[#041a4a] dark:text-white text-[1.5rem] sm:text-[2rem] lg:text-[2.3rem] xl:text-[2.75rem]">
            {t.titlePre}{" "}
            <span className="text-[#F2C94C]">{t.titleHL}</span>
            {t.titlePost}
          </h2>

          {/* Gold rule */}
          <div className="reveal mt-4 h-[3px] w-12 sm:w-14 rounded-full bg-[#F2C94C]" />

          {/* Description */}
          <p className="reveal mt-4 text-[0.875rem] sm:text-[0.95rem] leading-relaxed text-[#041a4a]/65 dark:text-white/55 max-w-[95%] sm:max-w-[480px]">
            {t.desc}
          </p>

          {/* CTA 
          <button className="reveal mt-7 sm:mt-9 inline-flex items-center gap-3 bg-[#041a4a] dark:bg-white text-white dark:text-[#041a4a] pl-6 sm:pl-7 pr-2 py-2 rounded-full font-semibold text-sm tracking-wide hover:scale-105 active:scale-100 transition-transform duration-200 shadow-lg shadow-[#041a4a]/20">
            {t.cta}
            <span className="w-8 h-8 sm:w-9 sm:h-9 bg-white/15 dark:bg-[#041a4a]/15 rounded-full flex items-center justify-center">
              <ArrowRight />
            </span>
          </button> */}
        </div> 

        {/* ───────── RIGHT — CARD AREA ───────── */}
        <div className="relative flex items-center justify-center pb-10 sm:pb-12 lg:pb-0">

          {/* Mobile-only: dark background behind card */}
          <div className="lg:hidden absolute inset-x-0 -inset-y-4 bg-[#041a4a] dark:bg-[#081629] rounded-3xl pointer-events-none" />

          {/* Mobile decoratives */}
          <div className="lg:hidden absolute top-2 right-3 opacity-40 pointer-events-none">
            <DotGrid cols={5} rows={4} />
          </div>
          <div className="lg:hidden absolute -top-1 right-2 w-10 h-10 rounded-full bg-[#F2C94C]/70 pointer-events-none" />

          {/* ── MAIN INTELLIGENCE CARD ── */}
          <div
            ref={panelRef}
            className="relative z-20 w-full sm:max-w-[440px] lg:max-w-none xl:max-w-[560px] bg-white dark:bg-[#0f1f3a] rounded-3xl p-5 sm:p-7 shadow-[0_30px_80px_rgba(4,26,74,0.28)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.55)] border border-white/80 dark:border-white/5 mt-6 lg:mt-0"
          >
            {/* Card header */}
            <div className="flex items-start justify-between mb-5 sm:mb-6">
              <div>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#041a4a]/45 dark:text-white/35 mb-1">
                  {t.panelLabel}
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-[#041a4a] dark:text-white">
                  {t.panelTitle}
                </h3>
              </div>
              <span className="flex items-center gap-1.5 shrink-0 ml-3 bg-[#F2C94C]/20 dark:bg-[#F2C94C]/15 text-[#041a4a] dark:text-[#F2C94C] px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wide uppercase whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {t.panelBadge}
              </span>
            </div>

            {/* Card rows */}
            <div className="space-y-3">
              {(t.rows || []).map((row, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-gray-50 dark:bg-white/5 hover:bg-[#fdf5df] dark:hover:bg-white/[0.07] transition-colors cursor-default"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-[#041a4a]/8 dark:bg-white/10 flex items-center justify-center text-[#041a4a] dark:text-white/70">
                    {rowIcons[i]}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-[#041a4a]/45 dark:text-white/35 mb-0.5">
                      {row.label}
                    </p>
                    <p className="text-sm sm:text-[0.9rem] font-semibold text-[#041a4a] dark:text-white leading-snug">
                      {row.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress bar accent */}
            <div className="mt-5 sm:mt-6 flex items-center gap-3">
              <div className="flex-1 h-1 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[78%] bg-gradient-to-r from-[#F2C94C] to-[#e2a800] rounded-full" />
              </div>
              <span className="text-xs font-bold text-[#041a4a] dark:text-white/70 shrink-0">78%</span>
              <span className="text-[10px] text-[#041a4a]/45 dark:text-white/35 shrink-0 hidden sm:inline">Research Score</span>
            </div>
          </div>

          {/* ── FLOATING MINI CHART CARD ── */}
          <div
            ref={chartRef}
            className="absolute -bottom-4 sm:-bottom-6 right-0 sm:-right-2 lg:right-0 z-30 w-38 sm:w-44 bg-[#041a4a] dark:bg-[#0a1a33] rounded-2xl p-3.5 sm:p-4 shadow-2xl border border-white/5"
            style={{ width: "clamp(140px, 35%, 176px)" }}
          >
            <MiniChart />
            <p className="text-[#F2C94C] text-base sm:text-lg font-black mt-1">+24.6%</p>
            <div className="flex items-center justify-between mt-0.5">
              <p className="text-white/45 text-[9px] uppercase tracking-widest font-medium">
                Market Trend
              </p>
              <div className="w-5 h-5 bg-[#F2C94C]/20 rounded-full flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="#F2C94C" className="w-3 h-3">
                  <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ FEATURES STRIP ══ */}
      <div className="relative z-10 bg-white dark:bg-[#06101f] border-t border-gray-100 dark:border-white/5 mt-6 lg:mt-0">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-6 sm:py-7 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {(t.features || []).map((f, i) => (
            <div key={i} className="flex items-start gap-3 sm:gap-3.5">
              <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 ${featureBgs[i]}`}>
                {featureIcons[i]}
              </div>
              <div className="min-w-0">
                <p className="font-bold text-[#041a4a] dark:text-white text-[0.78rem] sm:text-sm leading-tight">
                  {f.title}
                </p>
                <p className="text-[10px] sm:text-[11px] text-[#041a4a]/55 dark:text-white/45 mt-0.5 leading-snug">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}