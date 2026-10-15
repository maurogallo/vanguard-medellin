import React, { useState } from 'react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/contactConfig';
import { MapPin, Sparkles, MessageCircle, Eye, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function CityGallery({ lang }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 relative bg-[#06080a] border-t border-b border-white/5 overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'MEDELLÍN UNVEILED' : 'DESCUBRE MEDELLÍN'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white font-['Playfair_Display']">
            {lang === 'en' ? 'Nightlife, Icons & Landscapes' : 'Discotecas, Lugares Turísticos y Paisajes'}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            {lang === 'en'
              ? 'From the legendary nightlife of Provenza to the breathtaking monolith of Guatapé, explore Medellín with discrete VIP protection.'
              : 'Desde la vibrante rumba y rooftops de Provenza hasta los paisajes de Guatapé, vive cada rincón con total seguridad y estilo.'}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/20'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                {cat.label[lang]}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1219] via-transparent to-black/40" />

                  {/* Top Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/70 backdrop-blur-md text-amber-300 border border-amber-500/30">
                    {item.tag}
                  </div>

                  {/* Quick Expand Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4 text-amber-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium mb-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="text-base font-bold text-white font-['Playfair_Display'] leading-snug mb-2 group-hover:text-amber-300 transition-colors">
                    {item.title[lang]}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-light">
                    {item.desc[lang]}
                  </p>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="p-5 pt-0">
                <a
                  href={getWhatsAppUrl(
                    CONTACT_INFO.primaryPhone,
                    lang === 'en'
                      ? `Hello Vanguard Medellín, I would like to visit ${item.title.en} with your VIP escort and transportation.`
                      : `Hola Vanguard Medellín, deseo visitar ${item.title.es} con acompañamiento y transporte VIP.`
                  )}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl border border-white/10 hover:border-emerald-500/50 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Book with VIP Escort' : 'Visitar con Escolta VIP'}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full glass-card bg-[#0e1219] rounded-3xl overflow-hidden border border-amber-500/40 glow-gold"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-80 sm:h-96">
              <img
                src={selectedImage.image}
                alt={selectedImage.title[lang]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1219] via-transparent to-black/30" />
              
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-black">
                  {selectedImage.tag}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-sm text-amber-400 font-medium mb-2">
                <MapPin className="w-4 h-4" />
                <span>{selectedImage.location}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Playfair_Display'] mb-3">
                {selectedImage.title[lang]}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
                {selectedImage.desc[lang]}
              </p>

              {/* Safety Guarantee Callout */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center gap-3 mb-6">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  {lang === 'en'
                    ? 'Includes private chauffeur standby, direct VIP table access, and anti-scam protection.'
                    : 'Incluye conductor a tu disposición, acceso VIP preferencial y protocolo de seguridad preventiva.'}
                </span>
              </div>

              {/* Direct Booking CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppUrl(
                    CONTACT_INFO.primaryPhone,
                    `Hello Vanguard Medellín, I want to reserve a private VIP visit to ${selectedImage.title.en} (Location: ${selectedImage.location}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{lang === 'en' ? 'Reserve via WhatsApp' : 'Reservar por WhatsApp'}</span>
                </a>

                <button
                  onClick={() => setSelectedImage(null)}
                  className="py-3.5 px-6 rounded-xl border border-white/20 text-slate-300 text-xs uppercase font-semibold hover:bg-white/10 transition-colors"
                >
                  {lang === 'en' ? 'Close' : 'Cerrar'}
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
