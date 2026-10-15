import React, { useState, useMemo } from 'react';
import { Calculator, Check, MessageSquare, Shield, Calendar, Users, Sparkles, Building, Car, Compass, Share2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/contactConfig';
import { trackWhatsAppClick, trackItineraryEstimate } from '../utils/analytics';


const stayOptions = [
  {
    id: 'penthouse',
    name: { en: 'Luxury Panoramic Penthouse (Provenza / El Poblado)', es: 'Penthouse Panorámico de Lujo (Provenza / El Poblado)' },
    pricePerNight: 450,
    desc: { en: '4 BR, heated jacuzzi, 24/7 armed gate security, fiber internet', es: '4 habitaciones, jacuzzi climatizado, portería 24/7, fibra gigabit' }
  },
  {
    id: 'villa',
    name: { en: 'Exclusive Mountain Villa (Alto Las Palmas)', es: 'Villa Exclusiva de Montaña (Alto Las Palmas)' },
    pricePerNight: 750,
    desc: { en: '5 BR, private heated pool, perimeter laser security, helipad', es: '5 habitaciones, piscina climatizada, seguridad perimetral, helipuerto' }
  },
  {
    id: 'duplex',
    name: { en: 'Nomad Executive Duplex (Laureles)', es: 'Dúplex Ejecutivo Nomad (Laureles)' },
    pricePerNight: 240,
    desc: { en: '2 BR, acoustic soundproofing, ergonomic office, safe neighborhood', es: '2 habitaciones, insonorización acústica, oficina ergonómica' }
  },
  {
    id: 'none',
    name: { en: 'I already have my accommodation arranged', es: 'Ya tengo mi propio alojamiento reservado' },
    pricePerNight: 0,
    desc: { en: 'Only need security, concierge, and curated experiences', es: 'Solo requiero seguridad, chofer y experiencias' }
  }
];

const securityOptions = [
  {
    id: 'armored-full',
    name: { en: 'Armored SUV + 24/7 Dedicated Protection Officer', es: 'Camioneta Blindada + Escolta de Protección 24/7' },
    pricePerDay: 600,
    badge: 'Maximum Security',
    desc: { en: 'Level III armored vehicle, licensed tactical escort, full-time standby', es: 'Vehículo blindado nivel III, escolta táctico con licencia, disponibilidad total' }
  },
  {
    id: 'executive-suv',
    name: { en: 'Executive SUV + Bilingual Vetted Chauffeur (12 hrs/day)', es: 'SUV Ejecutiva + Chofer Bilingüe Verificado (12 hrs/día)' },
    pricePerDay: 260,
    badge: 'Most Popular',
    desc: { en: 'High-end SUV, vetted background-checked driver, route safety tracking', es: 'SUV de alta gama, conductor verificado, rastreo satelital de seguridad' }
  },
  {
    id: 'airport-concierge',
    name: { en: 'Airport VIP Transfers + 24/7 Virtual Concierge Hotline', es: 'Traslados Aeropuerto VIP + Asistencia Concierge 24/7' },
    pricePerDay: 40,
    badge: 'Essential',
    desc: { en: 'MDE roundtrip transfers, local 5G eSIM, 24/7 emergency dispatch', es: 'Traslados MDE ida y vuelta, eSIM local 5G y línea de emergencia 24/7' }
  },
  {
    id: 'none',
    name: { en: 'No transport required', es: 'Sin servicio de transporte' },
    pricePerDay: 0,
    badge: 'Self-guided',
    desc: { en: 'Handle own transportation inside the city', es: 'Gestionaré mi propio transporte en la ciudad' }
  }
];

const experienceList = [
  {
    id: 'guatape',
    name: { en: 'Guatapé & El Peñol VIP (Helicopter & Yacht)', es: 'Guatapé & El Peñol VIP (Helicóptero y Yate Privado)' },
    priceUSD: 650,
    perPerson: true
  },
  {
    id: 'comuna13',
    name: { en: 'Comuna 13 Historical & Graffiti Insider Tour', es: 'Comuna 13 Histórica y Graffiti con Líder Comunitario' },
    priceUSD: 160,
    perPerson: true
  },
  {
    id: 'coffee',
    name: { en: 'Antioquia Specialty Coffee Immersion & Cupping', es: 'Ruta del Café Especial y Catación en Finca Privada' },
    priceUSD: 220,
    perPerson: true
  },
  {
    id: 'nightlife',
    name: { en: 'Provenza Rooftops VIP Table & Nightlife Escort', es: 'Vida Nocturna VIP en Provenza con Escolta Bilingüe' },
    priceUSD: 280,
    perPerson: false
  }
];

export default function TripCalculator({ lang, t }) {
  const [stayId, setStayId] = useState('penthouse');
  const [securityId, setSecurityId] = useState('executive-suv');
  const [selectedTours, setSelectedTours] = useState(['guatape', 'comuna13']);
  const [days, setDays] = useState(5);
  const [guests, setGuests] = useState(2);

  const toggleTour = (tourId) => {
    if (selectedTours.includes(tourId)) {
      setSelectedTours(selectedTours.filter((id) => id !== tourId));
    } else {
      setSelectedTours([...selectedTours, tourId]);
    }
  };

  const selectedStay = stayOptions.find((s) => s.id === stayId) || stayOptions[0];
  const selectedSec = securityOptions.find((s) => s.id === securityId) || securityOptions[0];

  const calculation = useMemo(() => {
    const stayCost = selectedStay.pricePerNight * days;
    const secCost = selectedSec.pricePerDay * days;
    
    let toursCost = 0;
    selectedTours.forEach((tId) => {
      const tour = experienceList.find((e) => e.id === tId);
      if (tour) {
        if (tour.perPerson) {
          toursCost += tour.priceUSD * guests;
        } else {
          toursCost += tour.priceUSD;
        }
      }
    });

    const total = stayCost + secCost + toursCost;
    const perGuest = guests > 0 ? Math.round(total / guests) : total;

    return { stayCost, secCost, toursCost, total, perGuest };
  }, [selectedStay, selectedSec, selectedTours, days, guests]);

  const generateWhatsAppLink = () => {
    const tourNames = selectedTours
      .map((id) => experienceList.find((e) => e.id === id)?.name[lang])
      .filter(Boolean)
      .join(', ');

    const message = `Hello Vanguard Medellín! I customized an itinerary on your website:
• Duration: ${days} days
• Travelers: ${guests} guests
• Stay: ${selectedStay.name[lang]} ($${calculation.stayCost})
• Security/Mobility: ${selectedSec.name[lang]} ($${calculation.secCost})
• Selected Tours: ${tourNames || 'None'} ($${calculation.toursCost})
------------------------
Estimated Investment: $${calculation.total.toLocaleString()} USD (~$${calculation.perGuest.toLocaleString()} USD/person).

Please confirm availability and discuss custom adjustments.`;

    return `https://wa.me/${CONTACT_INFO.primaryPhone}?text=${encodeURIComponent(message)}`;
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Custom Medellín Itinerary | Vanguard Medellín',
      text: `Check out our customized VIP trip to Medellín (${days} days for ${guests} guests): Stay, Private Security, and Curated Tours!`,
      url: 'https://medellin.synaptiqnova.online/#calculator',
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled share
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(`https://medellin.synaptiqnova.online/#calculator`);
      alert(lang === 'en' ? 'Itinerary link copied to clipboard!' : '¡Enlace de itinerario copiado al portapapeles!');
    }
  };

  return (
    <section id="calculator" className="py-24 relative bg-[#090b0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.calculator.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-['Playfair_Display']">
            {t.calculator.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Builder Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Step 1: Accommodation */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Building className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white font-['Playfair_Display']">
                  {t.calculator.step1}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stayOptions.map((s) => {
                  const isSelected = stayId === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setStayId(s.id)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-amber-400 bg-amber-500/15 shadow-lg shadow-amber-500/10'
                          : 'border-white/10 bg-white/5 hover:border-white/25'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-white text-sm">
                            {s.name[lang]}
                          </span>
                          {isSelected && (
                            <div className="w-5 h-5 rounded-full bg-amber-400 text-black flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                          {s.desc[lang]}
                        </p>
                      </div>
                      <div className="mt-4 text-amber-400 font-bold text-sm">
                        {s.pricePerNight > 0 ? `$${s.pricePerNight} USD / night` : 'Included / External'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Security & Transport */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Car className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white font-['Playfair_Display']">
                  {t.calculator.step2}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {securityOptions.map((sec) => {
                  const isSelected = securityId === sec.id;
                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => setSecurityId(sec.id)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-amber-400 bg-amber-500/15 shadow-lg shadow-amber-500/10'
                          : 'border-white/10 bg-white/5 hover:border-white/25'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-white text-sm">
                            {sec.name[lang]}
                          </span>
                          {isSelected && (
                            <div className="w-5 h-5 rounded-full bg-amber-400 text-black flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          )}
                        </div>
                        <div className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-medium bg-white/10 text-slate-300">
                          {sec.badge}
                        </div>
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                          {sec.desc[lang]}
                        </p>
                      </div>
                      <div className="mt-4 text-amber-400 font-bold text-sm">
                        {sec.pricePerDay > 0 ? `$${sec.pricePerDay} USD / day` : 'No Transport'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Experiences */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white font-['Playfair_Display']">
                  {t.calculator.step3}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {experienceList.map((exp) => {
                  const isChecked = selectedTours.includes(exp.id);
                  return (
                    <button
                      key={exp.id}
                      type="button"
                      onClick={() => toggleTour(exp.id)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isChecked
                          ? 'border-amber-400 bg-amber-500/15'
                          : 'border-white/10 bg-white/5 hover:border-white/25'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-white text-sm">
                          {exp.name[lang]}
                        </div>
                        <div className="text-xs text-amber-400 font-medium mt-1">
                          ${exp.priceUSD} USD {exp.perPerson ? '/ person' : '/ group'}
                        </div>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 border ${
                          isChecked
                            ? 'bg-amber-400 border-amber-400 text-black'
                            : 'border-white/30 bg-white/5'
                        }`}
                      >
                        {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Duration & Guests */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Calendar className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white font-['Playfair_Display']">
                  {t.calculator.step4}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300 font-medium">{t.calculator.daysLabel}</span>
                    <span className="text-amber-400 font-bold">{days} days</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>1 day</span>
                    <span>15 days</span>
                    <span>30 days</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300 font-medium">{t.calculator.guestsLabel}</span>
                    <span className="text-amber-400 font-bold">{guests} travelers</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>1 solo</span>
                    <span>5 guests</span>
                    <span>10 guests</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Summary & Booking Column (4 cols) */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-amber-500/30 glow-gold bg-[#10141e]/90">
              
              <h4 className="text-xl font-bold text-white font-['Playfair_Display'] pb-4 border-b border-white/10 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-amber-400" />
                <span>{t.calculator.summaryTitle}</span>
              </h4>

              {/* Breakdown */}
              <div className="py-4 space-y-3 text-xs sm:text-sm border-b border-white/10">
                <div className="flex justify-between text-slate-300">
                  <span>Stay ({days} nights)</span>
                  <span className="font-semibold text-white">${calculation.stayCost.toLocaleString()} USD</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Security & Mobility ({days} days)</span>
                  <span className="font-semibold text-white">${calculation.secCost.toLocaleString()} USD</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Curated Tours ({selectedTours.length} experiences)</span>
                  <span className="font-semibold text-white">${calculation.toursCost.toLocaleString()} USD</span>
                </div>
              </div>

              {/* Total Price */}
              <div className="py-6">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                  {t.calculator.totalEstimate}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-['Playfair_Display'] mt-1">
                  ${calculation.total.toLocaleString()} <span className="text-lg text-slate-400 font-normal">USD</span>
                </div>
                <div className="text-xs text-emerald-400 font-medium mt-1">
                  ~${calculation.perGuest.toLocaleString()} USD {t.calculator.perPerson}
                </div>
              </div>

              {/* Direct WhatsApp Reservation CTA */}
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackItineraryEstimate(calculation.total, days, guests);
                  trackWhatsAppClick('calculator_trip_builder');
                }}
                className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>{t.calculator.bookWhatsapp}</span>
              </a>

              {/* Share Itinerary with Travel Group */}
              <button
                type="button"
                onClick={handleShare}
                className="w-full mt-3 py-3 px-4 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Share2 className="w-4 h-4 text-amber-400" />
                <span>{lang === 'en' ? 'Share Plan with Travel Friends' : 'Compartir Itinerario con Amigos'}</span>
              </button>

              <p className="mt-4 text-[11px] text-slate-400 leading-relaxed text-center">
                {t.calculator.customQuoteNote}
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
