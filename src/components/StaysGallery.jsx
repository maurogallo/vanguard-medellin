import React from 'react';
import { staysItems } from '../data/translations';
import { MapPin, Bed, Maximize2, ShieldCheck, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/contactConfig';


export default function StaysGallery({ lang, t }) {
  return (
    <section id="stays" className="py-24 relative bg-[#0d1017]/70 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold mb-3">
            {lang === 'en' ? 'CURATED RESIDENCES' : 'HOSPEDAJES SELECCIONADOS'}
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-['Playfair_Display']">
            {lang === 'en' ? 'Verified Safe Luxury Stays' : 'Estadías de Lujo 100% Verificadas'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            {lang === 'en'
              ? 'Hand-selected penthouses and private villas in Medellín’s most secure enclaves with 24/7 guarded access and fiber connectivity.'
              : 'Penthouses y villas privadas en los sectores más seguros de Medellín con vigilancia armada 24/7 y conectividad de alta velocidad.'}
          </p>
        </div>

        {/* Stays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {staysItems.map((stay) => (
            <div
              key={stay.id}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={stay.image}
                    alt={stay.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1219] via-transparent to-black/30" />
                  
                  {/* Verified Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/80 backdrop-blur-md text-emerald-300 border border-emerald-500/40">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>24/7 Guarded</span>
                  </div>

                  {/* Nightly Rate */}
                  <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-[#090b0e]/80 backdrop-blur-md border border-white/10 text-amber-400 font-bold text-sm">
                    ${stay.pricePerNight} USD <span className="text-[11px] text-slate-400 font-normal">/ night</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400/90 font-medium mb-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{stay.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 font-['Playfair_Display']">
                    {stay.title[lang]}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-6 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4 text-slate-300" />
                      <span>{stay.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-slate-300" />
                      <span>{stay.sqm}</span>
                    </div>
                  </div>

                  {/* Feature bullet list */}
                  <div className="space-y-2">
                    {stay.features.map((feat, fIdx) => (
                      <div key={fIdx} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/${CONTACT_INFO.primaryPhone}?text=Hello%20Vanguard%20Medellin,%20I%20would%20like%20to%20check%20dates%20for%20${encodeURIComponent(stay.title.en)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl border border-white/15 bg-white/5 hover:bg-amber-500/10 hover:border-amber-400/50 text-white hover:text-amber-300 text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>{lang === 'en' ? 'Check Dates & Reserve' : 'Consultar Disponibilidad'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
