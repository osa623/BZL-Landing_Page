import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useLanguage } from '../LanguageContext';
import logo from '../assets/new_logo.png';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();

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
      if (window.scrollY > 50) {
        nav.classList.add('bg-white/80', 'dark:bg-[#020e29]/90', 'backdrop-blur-lg', 'shadow-sm', 'dark:shadow-bzl-blue/20');
        nav.classList.remove('border-transparent');
      } else {
        nav.classList.remove('bg-white/80', 'dark:bg-[#020e29]/90', 'backdrop-blur-lg', 'shadow-sm', 'dark:shadow-bzl-blue/20');
        nav.classList.add('border-transparent');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = {
    en: {
      features: 'Features',
      pipeline: 'Pipeline',
      vision: 'Vision',
      faq: 'FAQ',
      earlyAccess: 'Early Access'
    },
    si: {
      features: 'විශේෂාංග',
      pipeline: 'ක්‍රියාවලිය',
      vision: 'දැක්ම',
      faq: 'ගැටළු',
      earlyAccess: 'ප්‍රවේශය'
    }
  };

  const t = content[language];

  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 border-b border-transparent">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-extrabold tracking-tight text-bzl-blue dark:text-white flex items-center gap-2.5 transition-transform hover:scale-105">
          <img src={logo} alt="Buyzonlabs Logo" className="h-8 md:h-10 w-auto object-contain drop-shadow-sm" />
          <span className="hidden sm:inline-block">Buyzonlabs</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-500 dark:text-gray-300">
          <button onClick={() => scrollTo('features')} className="hover:text-bzl-blue dark:hover:text-white transition-colors">{t.features}</button>
          <button onClick={() => scrollTo('pipeline')} className="hover:text-bzl-blue dark:hover:text-white transition-colors">{t.pipeline}</button>
          <button onClick={() => scrollTo('vision')} className="hover:text-bzl-blue dark:hover:text-white transition-colors">{t.vision}</button>
          <button onClick={() => scrollTo('faq')} className="hover:text-bzl-blue dark:hover:text-white transition-colors">{t.faq}</button>
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <Link 
            to="/early-access"
            className="flex items-center justify-center px-4 py-2 md:px-5 md:py-2.5 bg-bzl-blue text-white dark:bg-white dark:text-bzl-blue text-xs md:text-sm font-bold rounded-full hover:opacity-90 transition-opacity shadow-md"
          >
            {t.earlyAccess}
          </Link>
        </div>
      </div>
    </nav>
  );
}
