import defaultLogo from '../images/zulfiqaar-logo.svg';

/**
 * =========================================================================
 * 🌟 GLOBAL SITE CONFIGURATION (CENTRAL CONTROL PANEL)
 * =========================================================================
 * ZULFIQAAR GLOBAL LLC - Central Brand, Contact & Color Settings
 */

export const siteConfig = {
  // 🏢 Company Information
  companyName: "Amy Azlaan LLC",
  shortName: "Amy Azlaan",
  legalName: "AMY AZLAAN LLC",
  tagline: "Premium Wholesale, General Trading & Global Distribution",
  heroSubtitle: "Direct manufacturer sourcing, dependable bulk supply chains, and exceptional consumer essentials curated by Amy Azlaan LLC.",
  eyebrowStandard: "THE AMY AZLAAN STANDARD OF EXCELLENCE",

  // 📞 Phone, WhatsApp & Email
  phonePrimary: "(+966) 53 098 7507",       // Display phone on top nav
  phonePrimaryTel: "+966530987507",          // Dial link (tel:...)
  phoneDirect: "(+966) 53 098 7507",        // Direct trade desk line
  phoneDirectTel: "+966530987507",          // Direct dial link
  whatsappNumber: "966530987507",            // Numbers only (country code + number)
  whatsappDisplay: "(+966) 53 098 7507",
  email: "zulfequar.amy@gmail.com",

  // 📍 Registered & Operating Address
  address: {
    line1: "30 N Gould St # 68445",
    line2: "Sheridan, WY 82801",
    full: "30 N Gould St # 68445 Sheridan, WY 82801",
    cityStateZip: "Sheridan, WY 82801",
    jurisdiction: "Wyoming LLC Registered"
  },

  // 🚚 Warehousing & Shipping Hubs
  hubs: {
    originText: "Dispatched via US Distribution Hubs & Global Freight Network",
    dispatchNote: "Dispatched from our primary registered facilities at Sheridan, Wyoming (US domestic & North America) and our Middle East trade hub in KSA."
  },

  // 📖 About Page Description & Mission
  about: {
    mission: "At Amy Azlaan LLC, our mission is to deliver exceptional wholesale value, connecting premier international manufacturers with retailers, commercial distributors, and online merchants worldwide.",
    b2bNote: "Whether you operate independent retail stores, supermarket chains, or e-commerce marketplaces, Amy Azlaan LLC provides flexible minimums, volume price tiers, and dependable fulfillment."
  },

  // ⭐ Testimonial Quote
  testimonial: {
    quote: "Partnering with Amy Azlaan LLC transformed our wholesale inventory turnover. Top-tier product authenticity, fast fulfillment, and flawless communication.",
    author: "Verified Commercial Trade Partner"
  },

  // 💰 Currency Symbol used across the store (e.g. '₨', '$', 'SAR', 'AED')
  currencySymbol: "$",

  // 🖼️ Logo
  logo: defaultLogo,

  // 🎨 Website Color Theme (Hex codes)
  theme: {
    primaryNavy: "#091526",
    secondaryTeal: "#112a45",
    accentTeal: "#d97706",
    accentHover: "#b45309"
  }
};
