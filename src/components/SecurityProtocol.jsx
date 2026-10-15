import React from 'react';
import { ShieldCheck, Lock, AlertTriangle, Radio, Hospital, EyeOff, UserCheck, CheckCircle } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/contactConfig';

export default function SecurityProtocol({ t }) {
  return (
    <section id="security" className="py-24 relative bg-[#0d1017] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>{t.securitySection.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-['Playfair_Display']">
            {t.securitySection.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            {t.securitySection.subtitle}
          </p>
        </div>

        {/* 4 Pillars of Protection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {t.securitySection.protocols.map((protocol, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 font-['Playfair_Display']">
                  {protocol.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {protocol.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Highlight Banner */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-transparent to-emerald-500/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <EyeOff className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white font-['Playfair_Display']">
                Discreet Protection: Invisible Until You Need It
              </h4>
              <p className="text-sm text-slate-400 mt-1 max-w-xl">
                We prioritize discretion. Unmarked executive SUVs, civilian dressed certified agents, and private access points ensure you enjoy Medellín like a local dignitary, without attracting undue attention.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl(CONTACT_INFO.secondaryPhone, 'Hello Vanguard Medellín, I have questions regarding your security, armored fleet, and close-protection protocols.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/15 transition-all shrink-0"
          >
            Request Security Dossier
          </a>
        </div>

      </div>
    </section>
  );
}
