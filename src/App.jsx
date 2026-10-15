import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import StaysGallery from './components/StaysGallery';
import Experiences from './components/Experiences';
import CityGallery from './components/CityGallery';
import SecurityProtocol from './components/SecurityProtocol';
import TripCalculator from './components/TripCalculator';
import Faq from './components/Faq';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { content } from './data/translations';
import { CONTACT_INFO, getWhatsAppUrl } from './data/contactConfig';
import { MessageCircle } from 'lucide-react';


export default function App() {
  const [lang, setLang] = useState('en');
  const [isContactOpen, setIsContactOpen] = useState(false);

  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#090b0e] text-slate-100 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-300">
      
      {/* Top Fixed Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <Pillars
          t={t}
        />

        <StaysGallery
          lang={lang}
          t={t}
        />

        <Experiences
          lang={lang}
          t={t}
        />

        <CityGallery
          lang={lang}
        />

        <SecurityProtocol
          t={t}
        />

        <TripCalculator
          lang={lang}
          t={t}
        />

        <Faq
          lang={lang}
          t={t}
        />

        <CtaBanner
          t={t}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        t={t}
      />

      {/* Booking / Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        lang={lang}
      />

      {/* Floating 24/7 WhatsApp Quick Button */}
      <a
        href={getWhatsAppUrl(CONTACT_INFO.primaryPhone, lang === 'en' ? 'Hello Vanguard Medellín, I am inquiring about private concierge and safe travel.' : 'Hola Vanguard Medellín, deseo cotizar servicios de concierge y viaje seguro.')}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 hover:bg-emerald-400 transition-all flex items-center justify-center group"
        title="24/7 WhatsApp Concierge"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out px-0 group-hover:px-2 text-xs font-bold uppercase tracking-wider">
          Chat 24/7
        </span>
      </a>

    </div>
  );
}
