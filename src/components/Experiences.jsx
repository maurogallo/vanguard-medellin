import React from 'react';
import { tourItems } from '../data/translations';
import { Clock, DollarSign, Compass, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/contactConfig';


export default function Experiences({ lang, t }) {
  return (
    <section id="experiences" className="py-24 relative bg-[#090b0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold mb-3">
            {t.experiencesSection.tag}
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-['Playfair_Display']">
            {t.experiencesSection.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            {t.experiencesSection.subtitle}
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tourItems.map((tour) => (
            <div
              key={tour.id}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Image & Tags */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1219] via-transparent to-black/40" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {tour.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-md text-amber-300 border border-amber-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-[#090b0e]/80 backdrop-blur-md border border-white/10 text-amber-400 font-bold text-sm">
                    ${tour.priceUSD} USD
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{tour.duration[lang]}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-['Playfair_Display'] group-hover:text-amber-300 transition-colors">
                    {tour.title[lang]}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {tour.description[lang]}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                <a
                  href={`https://wa.me/${CONTACT_INFO.primaryPhone}?text=Hello%20Vanguard%20Medellin,%20I%20am%20interested%20in%20the%20${encodeURIComponent(tour.title.en)}%20experience.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl border border-white/10 hover:border-amber-400/50 bg-white/5 hover:bg-amber-500/10 text-white hover:text-amber-300 text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>{t.experiencesSection.bookTour}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
