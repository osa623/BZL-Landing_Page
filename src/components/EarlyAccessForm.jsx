import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EarlyAccessForm() {
  const containerRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle, submitting, success

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

  return (
    <section id="contact" className="min-h-screen py-32 bg-gray-50 dark:bg-[#03143a]/50 px-6 flex items-center justify-center">
      <div ref={containerRef} className="w-full max-w-3xl bg-white dark:bg-bzl-blue p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-[#041a4a] relative overflow-hidden">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-bzl-blue dark:text-white mb-4">
            Help Shape Buyzonlabs 
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            Your answers directly influence how the platform is being built.
          </p>
        </div>

        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="space-y-8">
            <input type="hidden" name="_subject" value="BuyzonlabsEarly Access Submission" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            {/* Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">Which best describes you?</label>
              <select name="Role" required className="w-full p-3 rounded-lg border border-gray-200 dark:border-[#041a4a] focus:border-bzl-gold focus:ring-1 focus:ring-bzl-gold bg-gray-50 dark:bg-[#03143a] transition-all outline-none">
                <option value="">Select an option</option>
                <option value="Individual Investor">Individual Investor</option>
                <option value="Institutional Investor">Institutional Investor</option>
                <option value="Stock Market Researcher">Stock Market Researcher</option>
                <option value="Undergraduate / Student">Undergraduate / Student</option>
                <option value="Lecturer / Educator">Lecturer / Educator</option>
                <option value="Business Owner / Executive">Business Owner / Executive</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Radio Group */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">Experience level</label>
              <div className="flex flex-wrap gap-4">
                {['Beginner', 'Intermediate', 'Advanced', 'Professional'].map(level => (
                  <label key={level} className="flex items-center gap-2 cursor-pointer text-sm font-medium">
                    <input type="radio" name="Experience" value={level} required className="text-bzl-gold focus:ring-bzl-gold border-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300 dark:text-gray-400">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Checkbox Group */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">Markets followed</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm font-medium">
                {['Colombo Stock Exchange (CSE)', 'US Markets', 'Crypto', 'Forex', 'Other'].map(market => (
                  <label key={market} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name={`Market: ${market}`} value="Yes" className="rounded text-bzl-gold focus:ring-bzl-gold border-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300 dark:text-gray-400">{market}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Textareas */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">Current workflow</label>
              <textarea name="Current Workflow" rows="3" placeholder="How do you currently analyze reports?" className="w-full p-3 rounded-lg border border-gray-200 dark:border-[#041a4a] focus:border-bzl-gold focus:ring-1 focus:ring-bzl-gold bg-gray-50 dark:bg-[#03143a] transition-all outline-none resize-none"></textarea>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">Biggest pain points</label>
              <textarea name="Pain Points" rows="3" placeholder="What frustrates you the most?" className="w-full p-3 rounded-lg border border-gray-200 dark:border-[#041a4a] focus:border-bzl-gold focus:ring-1 focus:ring-bzl-gold bg-gray-50 dark:bg-[#03143a] transition-all outline-none resize-none"></textarea>
            </div>

            {/* Checkbox Group - Capabilities */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">Desired capabilities</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium">
                {[
                  'Analyze annual reports automatically',
                  'Generate investment insights',
                  'Compare companies quickly',
                  'Track market trends',
                  'Academic/research usage',
                  'Portfolio decision support'
                ].map(cap => (
                  <label key={cap} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name={`Capability: ${cap}`} value="Yes" className="rounded text-bzl-gold focus:ring-bzl-gold border-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300 dark:text-gray-400">{cap}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Text Input */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">Primary goal</label>
              <input type="text" name="Primary Goal" placeholder="e.g. Save time researching" className="w-full p-3 rounded-lg border border-gray-200 dark:border-[#041a4a] focus:border-bzl-gold focus:ring-1 focus:ring-bzl-gold bg-gray-50 dark:bg-[#03143a] transition-all outline-none" />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-bzl-blue dark:text-white">Email Address</label>
              <input type="email" name="email" required placeholder="you@company.com" className="w-full p-3 rounded-lg border border-gray-200 dark:border-[#041a4a] focus:border-bzl-gold focus:ring-1 focus:ring-bzl-gold bg-gray-50 dark:bg-[#03143a] transition-all outline-none" />
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-[#041a4a] flex flex-col items-center">
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full sm:w-auto px-10 py-4 bg-bzl-blue dark:bg-bzl-gold text-white dark:text-bzl-blue rounded-xl hover:bg-bzl-blue/90 dark:hover:bg-bzl-gold/90 transition-all font-bold shadow-md hover:shadow-xl disabled:opacity-50"
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit & Join Early Access'}
              </button>
              <p className="mt-4 text-xs font-semibold text-gray-400">No spam. Research use only.</p>
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
