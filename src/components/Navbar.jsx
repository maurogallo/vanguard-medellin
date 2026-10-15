import React from 'react';
import { Shield, PhoneCall, Globe, Menu, X } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/contactConfig';

export default function Navbar({ lang, setLang, t, onOpenContact }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#090b0e]/85 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 text-black" strokeWidth={2.5} />
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider text-white font-['Playfair_Display']">
                VANGUARD
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-amber-400 uppercase font-medium">
                Medellín • Private Travel
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#services" className="text-sm text-slate-300 hover:text-amber-400 transition-colors">
              {t.nav.services}
            </a>
            <a href="#stays" className="text-sm text-slate-300 hover:text-amber-400 transition-colors">
              {t.nav.stays}
            </a>
            <a href="#experiences" className="text-sm text-slate-300 hover:text-amber-400 transition-colors">
              {t.nav.experiences}
            </a>
            <a href="#gallery" className="text-sm text-slate-300 hover:text-amber-400 transition-colors">
              {t.nav.gallery}
            </a>
            <a href="#security" className="text-sm text-slate-300 hover:text-amber-400 transition-colors">
              {t.nav.security}
            </a>
            <a href="#calculator" className="text-sm text-slate-300 hover:text-amber-400 transition-colors font-medium text-amber-300">
              {t.nav.calculator}
            </a>
            <a href="#faq" className="text-sm text-slate-300 hover:text-amber-400 transition-colors">
              {t.nav.faq}
            </a>
          </div>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-slate-300 hover:border-amber-500/50 hover:text-amber-400 transition-all bg-white/5"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'en' ? 'ESPAÑOL' : 'ENGLISH'}</span>
            </button>

            {/* 24/7 WhatsApp Emergency Hotline Button */}
            <a
              href={getWhatsAppUrl(CONTACT_INFO.secondaryPhone, lang === 'en' ? 'Hello Vanguard Medellín, emergency / operations inquiry.' : 'Hola Vanguard Medellín, consulta operativa y de seguridad 24/7.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/20 transition-all"
              title={CONTACT_INFO.secondaryPhoneDisplay}
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{t.nav.emergency}</span>
            </a>

            {/* Custom Contact CTA */}
            <button
              onClick={onOpenContact}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all cursor-pointer"
            >
              {t.nav.contact}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className="p-2 text-xs font-bold text-amber-400 border border-white/10 rounded bg-white/5"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-400 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#0e1219] border-b border-white/10 px-6 py-6 space-y-4">
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block text-base text-slate-200 hover:text-amber-400"
          >
            {t.nav.services}
          </a>
          <a
            href="#stays"
            onClick={() => setIsOpen(false)}
            className="block text-base text-slate-200 hover:text-amber-400"
          >
            {t.nav.stays}
          </a>
          <a
            href="#experiences"
            onClick={() => setIsOpen(false)}
            className="block text-base text-slate-200 hover:text-amber-400"
          >
            {t.nav.experiences}
          </a>
          <a
            href="#gallery"
            onClick={() => setIsOpen(false)}
            className="block text-base text-slate-200 hover:text-amber-400"
          >
            {t.nav.gallery}
          </a>
          <a
            href="#security"
            onClick={() => setIsOpen(false)}
            className="block text-base text-slate-200 hover:text-amber-400"
          >
            {t.nav.security}
          </a>
          <a
            href="#calculator"
            onClick={() => setIsOpen(false)}
            className="block text-base text-amber-400 font-semibold"
          >
            {t.nav.calculator}
          </a>
          <a
            href="#faq"
            onClick={() => setIsOpen(false)}
            className="block text-base text-slate-200 hover:text-amber-400"
          >
            {t.nav.faq}
          </a>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-lg bg-amber-500 text-black font-bold text-center"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
