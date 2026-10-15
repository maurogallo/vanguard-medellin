/**
 * Vanguard Medellín - Social Media & Marketing Event Tracker
 * Ready to connect with:
 * - Meta Pixel (Facebook & Instagram Ads)
 * - Google Analytics 4 (GA4) & Google Ads
 * - TikTok Pixel
 */

export const trackEvent = (eventName, params = {}) => {
  try {
    // 1. Meta Pixel (Facebook / Instagram)
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('trackCustom', eventName, params);
    }

    // 2. Google Analytics (GA4) / Google Ads
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }

    // 3. TikTok Pixel
    if (typeof window !== 'undefined' && typeof window.ttq?.track === 'function') {
      window.ttq.track(eventName, params);
    }

    // Console log for debugging in development
    if (import.meta.env.DEV) {
      console.log(`[Marketing Event Tracked: ${eventName}]`, params);
    }
  } catch (error) {
    console.warn('Analytics tracking error:', error);
  }
};

// Convenience marketing triggers:
export const trackWhatsAppClick = (origin, label = '') => {
  trackEvent('Contact_WhatsApp', {
    origin,
    label,
    timestamp: new Date().toISOString(),
  });
};

export const trackItineraryEstimate = (totalUSD, days, guests) => {
  trackEvent('Calculate_Itinerary', {
    currency: 'USD',
    value: totalUSD,
    duration_days: days,
    guests_count: guests,
  });
};

export const trackTourView = (tourId, tourName, priceUSD) => {
  trackEvent('View_Tour', {
    content_name: tourName,
    content_id: tourId,
    currency: 'USD',
    value: priceUSD,
  });
};

export const trackLeadFormSubmit = (serviceRequested, guests) => {
  trackEvent('Lead', {
    service_type: serviceRequested,
    party_size: guests,
  });
};
