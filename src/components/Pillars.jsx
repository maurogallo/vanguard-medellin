import React from 'react';
import { Building2, ShieldCheck, UserCheck, Compass, Check } from 'lucide-react';

const iconMap = {
  Building2: Building2,
  ShieldCheck: ShieldCheck,
  UserCheck: UserCheck,
  Compass: Compass,
};

export default function Pillars({ t }) {
  return (
    <section id="services" className="py-24 relative bg-[#0d1017]/60 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold mb-3">
            {t.pillars.tag}
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-['Playfair_Display']">
            {t.pillars.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            {t.pillars.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.pillars.items.map((item) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col justify-between border border-white/10 group"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-colors">
                    <Icon className="w-7 h-7 text-amber-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 font-['Playfair_Display']">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
