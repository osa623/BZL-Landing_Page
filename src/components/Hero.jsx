import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
    
    tl.fromTo('.hero-anim', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 }
    );

    gsap.to('.hero-bg', {
      backgroundPosition: '100% 100%',
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden hero-bg bg-gradient-to-br from-white dark:from-bzl-blue via-gray-50 dark:via-[#03143a] to-gray-100 dark:to-[#041a4a] bg-[length:200%_200%] border-b border-gray-200 dark:border-[#041a4a]">
      
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 z-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none opacity-40"></div>

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-bzl-gold/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-[500px] h-[500px] bg-bzl-blue text-white dark:bg-[#0a1e4a] dark:text-white/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-1/2 w-[600px] h-[600px] bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto py-32 md:py-48 flex flex-col items-center">
        <div className="hero-anim mb-8 px-4 py-2 rounded-full border border-gray-200 dark:border-[#041a4a] bg-white dark:bg-bzl-blue/60 backdrop-blur-md text-xs md:text-sm font-medium text-bzl-blue dark:text-white shadow-sm flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-bzl-gold animate-pulse shadow-sm"></span>
          Platform in development — First stage completed
        </div>

        <h1 className="hero-anim text-5xl md:text-7xl font-extrabold tracking-tight text-bzl-blue dark:text-white mb-6 leading-[1.1] md:leading-[1.15]">
          Turn Business Ideas Into <br className="hidden md:block"/> Intelligent Software Machines
        </h1>

        <p className="hero-anim text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mb-12 leading-relaxed font-medium">
          Buyzonlabs is building a next-generation analytics and research platform for investors, stock market researchers, students, and business decision makers.
        </p>

        <div className="hero-anim flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link 
            to="/early-access"
            className="px-8 py-4 bg-bzl-blue dark:bg-bzl-gold text-white dark:text-bzl-blue rounded-2xl hover:bg-bzl-blue/90 dark:hover:bg-bzl-gold/90 transition-all font-semibold shadow-md hover:shadow-xl"
          >
            Join Early Access
          </Link>
          <button 
            onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white dark:bg-bzl-blue text-bzl-blue dark:text-white rounded-2xl border border-gray-200 dark:border-[#041a4a] hover:border-bzl-gold/50 transition-all font-semibold shadow-sm"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
