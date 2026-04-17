import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(prev => !prev);
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

  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 border-b border-transparent">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-extrabold tracking-tight text-bzl-blue dark:text-white flex items-center gap-2.5 transition-transform hover:scale-105">
          <div className="w-8 h-8 bg-bzl-blue dark:bg-white rounded-lg flex items-center justify-center shadow-sm">
            <div className="w-3 h-3 bg-white dark:bg-bzl-blue rounded-sm" />
          </div>
          Buyzonlabs
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-500 dark:text-gray-300">
          <button onClick={() => scrollTo('features')} className="hover:text-bzl-blue dark:hover:text-white transition-colors">Features</button>
          <button onClick={() => scrollTo('pipeline')} className="hover:text-bzl-blue dark:hover:text-white transition-colors">Pipeline</button>
          <button onClick={() => scrollTo('vision')} className="hover:text-bzl-blue dark:hover:text-white transition-colors">Vision</button>
          <button onClick={() => scrollTo('faq')} className="hover:text-bzl-blue dark:hover:text-white transition-colors">FAQ</button>
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <button onClick={toggleDark} className="p-2 text-gray-500 dark:text-gray-400 hover:text-bzl-blue dark:hover:text-white transition-colors bg-gray-100 dark:bg-white/10 rounded-full">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link 
            to="/early-access"
            className="flex items-center justify-center px-4 py-2 md:px-5 md:py-2.5 bg-bzl-blue text-white dark:bg-white dark:text-bzl-blue text-xs md:text-sm font-bold rounded-full hover:opacity-90 transition-opacity shadow-md"
          >
            Early Access
          </Link>
        </div>
      </div>
    </nav>
  );
}
