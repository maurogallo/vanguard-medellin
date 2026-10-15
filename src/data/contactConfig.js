// Centralized Contact & Booking Configuration for Vanguard Medellín
export const CONTACT_INFO = {
  primaryPhone: "573014546530",
  primaryPhoneDisplay: "+57 301 454 6530",
  primaryRole: {
    en: "VIP Concierge & Booking Desk",
    es: "Concierge VIP y Reservas",
  },
  
  secondaryPhone: "573026415567",
  secondaryPhoneDisplay: "+57 302 641 5567",
  secondaryRole: {
    en: "24/7 Security & Rapid Operations Dispatch",
    es: "Línea 24/7 Seguridad y Despacho Operativo",
  },

  email: "concierge@vanguardmedellin.com",
  officeAddress: "Cra. 35 #7-38, El Poblado, Medellín, Colombia",
};

/**
 * Helper to build WhatsApp links
 * @param {string} phone - Target phone number without + or spaces
 * @param {string} text - Message prefill
 */
export const getWhatsAppUrl = (phone = CONTACT_INFO.primaryPhone, text = "") => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};
