import React, { useState } from 'react';
import { X, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/contactConfig';
import { trackLeadFormSubmit } from '../utils/analytics';

export default function ContactModal({ isOpen, onClose, lang }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    dates: '',
    guests: '2',
    services: 'Security + Stay + Tours',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Marketing event tracking
    trackLeadFormSubmit(formData.services, formData.guests);

    // Generate WhatsApp direct text
    const message = `*New Vanguard Client Inquiry:*
- Name: ${formData.name}
- Contact: ${formData.emailOrPhone}
- Travel Dates: ${formData.dates}
- Guests: ${formData.guests}
- Services Needed: ${formData.services}
- Notes: ${formData.notes || 'None'}`;

    const waUrl = `https://wa.me/${CONTACT_INFO.primaryPhone}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg glass-card bg-[#0e1219] p-6 sm:p-8 rounded-3xl border border-amber-500/30 glow-gold shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Confidential Inquiry' : 'Consulta Confidencial'}</span>
            </div>

            <h3 className="text-2xl font-bold text-white font-['Playfair_Display']">
              {lang === 'en' ? 'Direct Concierge Consultation' : 'Consulta con Concierge Privado'}
            </h3>
            <p className="text-xs text-slate-400 mt-1 mb-6">
              {lang === 'en'
                ? 'Your information is strictly protected under non-disclosure executive protocols.'
                : 'Tus datos están protegidos bajo protocolos de estricta confidencialidad.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  {lang === 'en' ? 'Full Name' : 'Nombre Completo'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Johnathan Vance"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  {lang === 'en' ? 'WhatsApp or Email' : 'WhatsApp o Correo Electrónico'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.emailOrPhone}
                  onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                  placeholder="+1 (555) 000-0000 or client@domain.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    {lang === 'en' ? 'Estimated Dates' : 'Fechas Estimadas'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.dates}
                    onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                    placeholder="e.g. Nov 12 - Nov 18"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    {lang === 'en' ? 'Total Guests' : 'Nº de Huéspedes'}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  {lang === 'en' ? 'Specific Requirements' : 'Requerimientos Específicos'}
                </label>
                <textarea
                  rows="3"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={
                    lang === 'en'
                      ? 'e.g. Need Level III Armored SUV, Penthouse in Provenza, Guatapé Helicopter tour...'
                      : 'Ej. Camioneta blindada, penthouse en Provenza, helicóptero a Guatapé...'
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer mt-4"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'en' ? 'Submit to Chief Concierge' : 'Enviar a Concierge Principal'}</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-['Playfair_Display']">
              {lang === 'en' ? 'Inquiry Dispatched' : 'Solicitud Enviada'}
            </h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              {lang === 'en'
                ? 'Your inquiry has been routed to our WhatsApp desk. Our concierge team will reply within 5 minutes.'
                : 'Tu solicitud ha sido transmitida a nuestra mesa de despacho. Nuestro concierge responderá en menos de 5 minutos.'}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl border border-white/20 text-white text-xs uppercase font-semibold"
            >
              {lang === 'en' ? 'Close Window' : 'Cerrar Ventana'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
