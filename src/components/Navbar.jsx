import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useLanguage } from '../LanguageContext';
import logo from '../assets/new_logo.png';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navOffset = 96;
    const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  useEffect(() => {
    gsap.fromTo(
      '#navbar',
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('navbar');
      if (!nav) return;

      if (window.scrollY > 50) {
        nav.classList.add(
          'bg-white/80',
          'dark:bg-[#020e29]/90',
          'backdrop-blur-lg',
          'shadow-sm',
          'dark:shadow-bzl-blue/20'
        );
        nav.classList.remove('border-transparent');
      } else {
        nav.classList.remove(
          'bg-white/80',
          'dark:bg-[#020e29]/90',
          'backdrop-blur-lg',
          'shadow-sm',
          'dark:shadow-bzl-blue/20'
        );
        nav.classList.add('border-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const pendingTarget = sessionStorage.getItem('pendingScrollTarget');
    if (!pendingTarget) return;

    sessionStorage.removeItem('pendingScrollTarget');
    requestAnimationFrame(() => scrollToSection(pendingTarget));
  }, [location.pathname]);

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      sessionStorage.setItem('pendingScrollTarget', id);
      navigate('/');
      return;
    }

    scrollToSection(id);
  };

  const content = {
    en: {
      hero: 'Home',
      features: 'Features',
      pipeline: 'Pipeline',
      vision: 'Vision',
      faq: 'FAQ',
      earlyAccess: 'Early Access',
    },
    si: {
      hero: 'මුල් පිටුව',
      features: 'විශේෂාංග',
      pipeline: 'ක්‍රියාවලිය',
      vision: 'දැක්ම',
      faq: 'ගැටළු',
      earlyAccess: 'ප්‍රවේශය',
    },
  };

  const t = content[language] || content.en;

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent px-6 py-4 transition-all duration-300"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-bzl-blue transition-transform hover:scale-105 dark:text-white md:text-2xl"
        >
          <img
            src={logo}
            alt="Buyzonlabs Logo"
            className="h-8 w-auto object-contain drop-shadow-sm md:h-10"
          />
          <span className="hidden sm:inline-block">Buyzonlabs</span>
        </Link>

        <div className="hidden gap-8 text-sm font-semibold text-gray-500 dark:text-gray-300 md:flex">
          <button
            onClick={() => scrollTo('hero')}
            className="transition-colors hover:text-bzl-blue dark:hover:text-white"
          >
            {t.hero}
          </button>
          <button
            onClick={() => scrollTo('features')}
            className="transition-colors hover:text-bzl-blue dark:hover:text-white"
          >
            {t.features}
          </button>
          <button
            onClick={() => scrollTo('pipeline')}
            className="transition-colors hover:text-bzl-blue dark:hover:text-white"
          >
            {t.pipeline}
          </button>
          <button
            onClick={() => scrollTo('vision')}
            className="transition-colors hover:text-bzl-blue dark:hover:text-white"
          >
            {t.vision}
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="transition-colors hover:text-bzl-blue dark:hover:text-white"
          >
            {t.faq}
          </button>
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          <Link
            to="/early-access"
            className="flex items-center justify-center rounded-full bg-bzl-blue px-4 py-2 text-xs font-bold text-white shadow-md transition-opacity hover:opacity-90 dark:bg-white dark:text-bzl-blue md:px-5 md:py-2.5 md:text-sm"
          >
            {t.earlyAccess}
          </Link>
        </div>
      </div>
    </nav>
  );
}



