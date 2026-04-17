import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Purpose from './components/Purpose';
import Features from './components/Features';
import Pipeline from './components/Pipeline';
import Audience from './components/Audience';
import Vision from './components/Vision';
import FAQ from './components/FAQ';
import EarlyAccessForm from './components/EarlyAccessForm';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageContext';

function LandingPage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Purpose />
      <Features />
      <Pipeline />
      <Audience />
      <Vision />
      <FAQ />
    </main>
  );
}

function App() {
  return (
    <LanguageProvider>
      <div className="font-sans antialiased text-gray-900 selection:bg-bzl-gold selection:text-bzl-blue scroll-smooth">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/early-access" element={<EarlyAccessForm />} />
        </Routes>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
