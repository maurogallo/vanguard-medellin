import React from 'react';
import { MessageCircle, Mail, ShieldAlert, Phone } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/contactConfig';

export default function CtaBanner({ t, onOpenContact }) {
  return (
    <section className="py-20 relative bg-[#090b0e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-amber-500/30 bg-gradient-to-br from-[#121722] via-[#0e1219] to-[#1a150b] text-center glow-gold relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold mb-6">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct WhatsApp Concierge Dispatch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white font-['Playfair_Display'] max-w-3xl mx-auto leading-tight">
            {t.ctaBanner.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.ctaBanner.subtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(CONTACT_INFO.primaryPhone, 'Hello Vanguard Medellín, I am ready to plan my visit.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/25 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>{t.ctaBanner.btnWhatsapp}</span>
            </a>

            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 hover:border-amber-400/50 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-3 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>{t.ctaBanner.btnEmail}</span>
            </button>
          </div>

          <div className="mt-8 text-xs text-slate-400 flex items-center justify-center gap-2">
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
            <span>Average concierge response time: &lt; 5 minutes</span>
          </div>

        </div>

      </div>
    </section>
  );
}
