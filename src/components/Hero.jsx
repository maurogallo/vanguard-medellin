import React from 'react';
import { ShieldCheck, ArrowRight, MessageCircle, Lock, Compass, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/contactConfig';

export default function Hero({ t, onOpenContact }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background with luxury gradient & subtle texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/pueblito-paisa.jpg"
          alt="Medellin Valley Panorama"
          className="w-full h-full object-cover object-center opacity-30 filter brightness-75 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090b0e]/90 via-[#090b0e]/80 to-[#090b0e]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Trust Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-amber-500/10">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-['Playfair_Display'] leading-[1.15] max-w-5xl mx-auto">
          {t.hero.titleStart}{' '}
          <span className="gold-gradient-text italic font-serif">
            {t.hero.titleHighlight}
          </span>{' '}
          {t.hero.titleEnd}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#calculator"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-black font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-3 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <span>{t.hero.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={getWhatsAppUrl(CONTACT_INFO.primaryPhone, 'Hello Vanguard Medellín, I would like to consult with a VIP concierge host regarding a trip to Medellín.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-white font-semibold text-sm flex items-center justify-center gap-3 border border-white/15 hover:border-amber-400/50 hover:bg-white/10 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>{t.hero.ctaSecondary}</span>
          </a>
        </div>

        {/* Live Trust Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/10">
          {t.hero.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl glass-card text-left border border-white/5">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-['Playfair_Display']">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
