import React, { useState } from 'react';
import { faqItems } from '../data/translations';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Faq({ lang, t }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#090b0e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faqSection.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-['Playfair_Display']">
            {t.faqSection.title}
          </h2>
          <p className="mt-4 text-base text-slate-400">
            {t.faqSection.subtitle}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-white text-base sm:text-lg font-['Playfair_Display']">
                    {item.q[lang]}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/15 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-amber-400 text-black border-amber-400' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed font-light border-t border-white/5 pt-4">
                    {item.a[lang]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
