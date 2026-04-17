import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Widgets() {
  const [isDark, setIsDark] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(prev => !prev);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
      {/* Language Toggle */}
      <button 
        onClick={toggleLanguage} 
        className="w-12 h-12 flex items-center justify-center text-sm font-bold text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-[#03143a]/80 backdrop-blur-md border border-gray-200 dark:border-[#041a4a] hover:border-bzl-gold dark:hover:border-bzl-gold transition-all duration-300 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1"
        aria-label="Toggle Language"
        title="Toggle Language"
      >
        {language === 'en' ? 'සිං' : 'EN'}
      </button>

      {/* Theme Toggle */}
      <button 
        onClick={toggleDark} 
        className="w-12 h-12 flex items-center justify-center text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-[#03143a]/80 backdrop-blur-md border border-gray-200 dark:border-[#041a4a] hover:border-bzl-gold dark:hover:border-bzl-gold transition-all duration-300 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1"
        aria-label="Toggle Dark Mode"
        title="Toggle Dark Mode"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}
