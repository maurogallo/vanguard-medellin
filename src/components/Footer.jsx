import React from 'react';
import { Shield, Phone, Mail, MapPin, CheckCircle, ShieldAlert } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/contactConfig';

export default function Footer({ lang, t }) {
  return (
    <footer className="bg-[#06080a] border-t border-white/10 text-slate-400 text-sm pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center">
                <Shield className="w-5 h-5 text-black" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-wider text-white font-['Playfair_Display']">
                VANGUARD
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              {t.footer.about}
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-emerald-400">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>RNT Verified Tourism Provider</span>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-4">
              {lang === 'en' ? 'Core Capabilities' : 'Servicios Principales'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Executive Armored Mobility</a></li>
              <li><a href="#stays" className="hover:text-amber-400 transition-colors">Verified Gated Penthouses</a></li>
              <li><a href="#experiences" className="hover:text-amber-400 transition-colors">Private Helicopter Charters</a></li>
              <li><a href="#security" className="hover:text-amber-400 transition-colors">Dating & Nightlife Escort</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Custom Trip Estimator</a></li>
            </ul>
          </div>

          {/* Safe Zones Covered */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-4">
              {lang === 'en' ? 'Safe Corridors' : 'Corredores Seguros'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>El Poblado & Provenza Exclusive</li>
              <li>Alto Las Palmas & Envigado Villas</li>
              <li>Laureles Executive Enclave</li>
              <li>Guatapé Private Lake Basin</li>
              <li>Eastern Airport Highway (Tunnel Access)</li>
            </ul>
          </div>

          {/* Contact & Emergency Desk */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-4">
              {lang === 'en' ? 'Medellín Operations Desk' : 'Central de Operaciones Medellín'}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{CONTACT_INFO.officeAddress}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={getWhatsAppUrl(CONTACT_INFO.primaryPhone, 'Hello Vanguard Medellín concierge desk.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors block font-medium text-slate-200"
                  >
                    {CONTACT_INFO.primaryPhoneDisplay}
                  </a>
                  <span className="text-[10px] text-slate-400 block">{CONTACT_INFO.primaryRole[lang]}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={getWhatsAppUrl(CONTACT_INFO.secondaryPhone, 'Hello Vanguard Medellín 24/7 security line.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors block font-medium text-slate-200"
                  >
                    {CONTACT_INFO.secondaryPhoneDisplay}
                  </a>
                  <span className="text-[10px] text-slate-400 block">{CONTACT_INFO.secondaryRole[lang]}</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
            <div className="mt-4 p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-400">
              {t.footer.emergencyDisclaimer}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} {t.footer.rights}
          </div>
          <div className="flex items-center gap-3 text-slate-500">
            <span>Payment Accepted:</span>
            <span className="text-slate-300 font-medium">USD Wire • Amex • Visa • Crypto (USDT)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
