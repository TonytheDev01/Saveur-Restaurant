/* =====================================================
   CLIENT CONFIGURATION FILE — config.js
   -------------------------------------------------------
   Hi! This is the only file you need to edit to update
   your website content. Change the values below and
   save the file — your website updates automatically.

   DO NOT delete any line. Only change what's inside
   the quote marks "..." or numbers.
   ===================================================== */

var SiteConfig = {
  /* ---- YOUR BUSINESS DETAILS ---- */
  business: {
    name: "Saveur Restaurant" /* Your restaurant name */,
    tagline: "Authentic flavours, unforgettable dining experiences.",
    established: "2019" /* Year you opened */,
    city: "Abuja, Nigeria",
  },

  /* ---- CONTACT INFORMATION ---- */
  contact: {
    phone: "+234 803 000 0000" /* Your phone number */,
    whatsapp: "2348030000000" /* WhatsApp number — no spaces, no + */,
    email: "hello@saveur.ng" /* Your email address */,
    address: "Plot 45, Wuse Zone 3, Abuja FCT, Nigeria",
  },

  /* ---- OPENING HOURS ---- */
  hours: {
    weekdays: "Monday – Sunday",
    open: "11:00 AM",
    close: "10:00 PM",
  },

  /* ---- SOCIAL MEDIA LINKS ---- */
  socials: {
    facebook: "https://facebook.com/yourpage" /* Paste your full link */,
    instagram: "https://instagram.com/yourhandle",
    twitter: "https://twitter.com/yourhandle",
  },

  /* ---- GOOGLE MAPS ---- */
  /* 
    To get your embed link:
    1. Go to maps.google.com
    2. Search your business address
    3. Click Share → Embed a map → Copy the src="..." link only
    4. Paste it below inside the quotes
  */
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3!2d7.49!3d9.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDQnMTIuMCJOIDfCsDI5JzI0LjAiRQ!5e0!3m2!1sen!2sng!4v1234567890",

  /* ---- BRAND COLORS ---- */
  /*
    Want to change colors? Update the hex codes below.
    You can use any color picker (e.g. coolors.co) to find hex codes.
  */
  colors: {
    primary: "#8B1A00" /* Main brand color — buttons, headings */,
    primaryLight: "#B82200" /* Hover state */,
    primaryDark: "#5C0F00" /* Dark backgrounds (navbar, footer) */,
    accent: "#F97300" /* Highlight color — tags, icons */,
    surface: "#FFF8F2" /* Page background tint */,
  },

  /* ---- RESERVATION TIME SLOTS ---- */
  /* Add or remove times your restaurant accepts bookings */
  timeSlots: [
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
  ],

  /* ---- HERO SECTION ---- */
  hero: {
    badge: "Est. 2019 · Abuja, Nigeria",
    heading: "Taste the Art of",
    headingEm: "Authentic Flavour",
    subtext:
      "From farm-fresh ingredients to masterfully crafted dishes — every plate tells a story worth savouring.",
    cta1: "Explore Our Menu",
    cta2: "Reserve a Table",
    stats: [
      { number: "200+", label: "Dishes Served Daily" },
      { number: "5★", label: "Rated on Google" },
      { number: "12+", label: "Years of Excellence" },
    ],
  },

  /* ---- ABOUT SECTION ---- */
  about: {
    yearsOpen: "12",
    para1:
      "Saveur was born from one simple belief — that every Nigerian deserves to experience food that feels like a warm embrace. Founded in 2012 in the heart of Abuja, we've grown from a 10-table dining room to one of the most beloved restaurants in the FCT.",
    para2:
      "Our chefs bring decades of culinary training across West Africa and Europe, blending tradition with bold innovation — so every dish honours our roots while surprising your palate.",
    highlights: [
      "100% locally sourced proteins & vegetables",
      "NAFDAC-certified kitchen and storage",
      "Private dining & event catering available",
      "Open 7 days — 11am to 10pm daily",
    ],
  },
};
