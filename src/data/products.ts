// src/data/products.ts
// DryTech.sg — DBA dehumidifier product data
//
// HOW TO USE:
// - This is the single source of truth for products on the site. Edit here, not in components.
// - `image` paths point to /public/images/products/. During the scrape step, Claude Code should
//   download the real product photos from dba.sg into that folder using these exact filenames
//   (or update the filenames here to match what it downloads).
// - `enquiryText` is the pre-filled WhatsApp message for that product's "Enquire" button.
//
// Product names, capacities and specs below were taken from dba.sg. Prices intentionally omitted —
// this is a lead-gen showcase, not a store. Verify specs against the live product pages before launch.

export type SpaceType = "residential" | "commercial" | "industrial";

export interface Product {
  id: string;
  name: string;
  line: string;            // which product family it belongs to
  capacity: string;        // moisture removal per day
  tagline: string;         // one-line hook
  description: string;     // 1–2 sentences
  bestFor: SpaceType[];
  highlights: string[];    // bullet specs/features
  image: string;           // local path, downloaded during scrape
  sourceUrl: string;       // original dba.sg product page (for scraping images/specs)
  enquiryText: string;     // pre-filled WhatsApp message
}

export interface ProductLine {
  id: string;
  name: string;
  blurb: string;
  products: Product[];
}

// Shared selling points across the DBA range (use in "Why DBA" section)
export const brandHighlights = [
  "Ultra-slim ceiling-mounted profile — hides above a false ceiling",
  "Whole-house / whole-space dehumidification via ducting",
  "Built-in drain pump lifts condensate up to 1.8 m (no gravity-drain limit)",
  "Smart control: Tuya app over WiFi + RS485 Modbus for BMS integration",
  "Quiet operation — approx. 39–50 dB(A) depending on model",
  "Energy efficient, designed for Singapore's high-humidity climate",
];

export const contact = {
  whatsapp: "6589859886",            // wa.me number, no + or spaces
  whatsappDisplay: "+65 8985 9886",
  hotline: "+65 6772 9962",
  email: "dba@dba.sg",
  calculatorUrl: "https://drytech-sg-calculator-797933795168.us-west1.run.app",
};

// Helper to build a WhatsApp deep link from any message
export const waLink = (text: string) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;

export const productLines: ProductLine[] = [
  {
    id: "ultra-thin-ceiling",
    name: "Ultra-Thin Ceiling Dehumidifiers",
    blurb:
      "Sleek ceiling-mounted units that disappear above a false ceiling — discreet, whole-space humidity control for homes, offices and small commercial spaces.",
    products: [
      {
        id: "dba-utc20",
        name: "DBA-UTC20",
        line: "Ultra-Thin Ceiling",
        capacity: "20 L/day",
        tagline: "Discreet humidity control for homes & small spaces",
        description:
          "A sleek, ultra-thin ceiling-mounted dehumidifier for discreet humidity control in homes, offices and small commercial spaces. Reliable dehumidification without taking up floor space.",
        bestFor: ["residential", "commercial"],
        highlights: ["20 L/day moisture removal", "Ultra-thin ceiling profile", "~39 dB(A) quiet operation", "Tuya app + RS485 control", "Built-in drain pump"],
        image: "/images/products/dba-utc20.jpg",
        sourceUrl: "https://www.dba.sg/products/dba-utc20-ultra-thin-ceiling-dehumidifier",
        enquiryText: "Hi DBA, I'm interested in the DBA-UTC20 (20L/day ultra-thin ceiling dehumidifier). Could you share more details and a quote?",
      },
      {
        id: "dba-utc68",
        name: "DBA-UTC68",
        line: "Ultra-Thin Ceiling",
        capacity: "68 L/day",
        tagline: "High-capacity power for medium–large spaces",
        description:
          "A high-capacity ultra-thin ceiling dehumidifier built for medium to large commercial spaces. Serious dehumidification power in a slim, unobtrusive form. A single unit keeps a typical 4-room HDB flat below 60% RH.",
        bestFor: ["residential", "commercial"],
        highlights: ["68 L/day moisture removal", "Whole-house coverage", "Ultra-thin ceiling profile", "Tuya app + RS485 control", "Built-in drain pump"],
        image: "/images/products/dba-utc68.jpg",
        sourceUrl: "https://www.dba.sg/products/dba-utc68-ultra-thin-ceiling-dehumidifier",
        enquiryText: "Hi DBA, I'm interested in the DBA-UTC68 (68L/day ultra-thin ceiling dehumidifier). Could you share more details and a quote?",
      },
      {
        id: "dba-utc120",
        name: "DBA-UTC120",
        line: "Ultra-Thin Ceiling",
        capacity: "120 L/day",
        tagline: "Industrial-grade output, ultra-thin form",
        description:
          "The most powerful unit in the Ultra-Thin ceiling range, removing up to 120 litres of moisture per day. Designed for large commercial and light-industrial applications.",
        bestFor: ["commercial", "industrial"],
        highlights: ["120 L/day moisture removal", "Large commercial / light-industrial", "Ultra-thin ceiling profile", "Tuya app + RS485 control", "Built-in drain pump"],
        image: "/images/products/dba-utc120.jpg",
        sourceUrl: "https://www.dba.sg/products/dba-utc120-ultra-thin-ceiling-dehumidifier",
        enquiryText: "Hi DBA, I'm interested in the DBA-UTC120 (120L/day ultra-thin ceiling dehumidifier). Could you share more details and a quote?",
      },
    ],
  },
  {
    id: "commercial-ceiling",
    name: "Commercial Ceiling Dehumidifiers",
    blurb:
      "Higher-capacity ducted ceiling units for commercial and industrial environments where moisture load is heavy and uptime matters.",
    products: [
      {
        id: "dba-gec68ld-hp",
        name: "DBA-GEC68LD-HP",
        line: "Commercial Ceiling",
        capacity: "68 L/day",
        tagline: "Ducted commercial ceiling unit",
        description:
          "Ducted ceiling dehumidifier for commercial spaces needing reliable, concealed humidity control.",
        bestFor: ["commercial"],
        highlights: ["68 L/day", "Ducted ceiling install", "Drain pump", "RS485 / BMS ready"],
        image: "/images/products/dba-gec68ld-hp.jpg",
        sourceUrl: "https://www.dba.sg/products/dba-gec68ld-hp-ceiling-dehumidifier",
        enquiryText: "Hi DBA, I'm interested in the DBA-GEC68LD-HP commercial ceiling dehumidifier. Could you share more details and a quote?",
      },
      {
        id: "dba-gec145ld-hp",
        name: "DBA-GEC145LD-HP",
        line: "Commercial Ceiling",
        capacity: "145 L/day",
        tagline: "High-output industrial ducted unit",
        description:
          "High-capacity ducted ceiling dehumidifier for larger commercial and industrial spaces.",
        bestFor: ["commercial", "industrial"],
        highlights: ["145 L/day", "Ducted ceiling install", "Drain pump", "RS485 / BMS ready"],
        image: "/images/products/dba-gec145ld-hp.jpg",
        sourceUrl: "https://www.dba.sg/products/dba-gec145ld-hp-industrial-dehumidifier",
        enquiryText: "Hi DBA, I'm interested in the DBA-GEC145LD-HP industrial ceiling dehumidifier. Could you share more details and a quote?",
      },
      {
        id: "dba-gec280ld",
        name: "DBA-GEC280LD",
        line: "Commercial Ceiling",
        capacity: "280 L/day",
        tagline: "Heavy-duty moisture removal",
        description:
          "Heavy-duty ceiling dehumidifier for large-volume commercial and industrial dehumidification.",
        bestFor: ["industrial"],
        highlights: ["280 L/day", "Ducted ceiling install", "Drain pump", "RS485 / BMS ready"],
        image: "/images/products/dba-gec280ld.jpg",
        sourceUrl: "https://www.dba.sg/products/dba-gec280ld-ceiling-dehumidifier",
        enquiryText: "Hi DBA, I'm interested in the DBA-GEC280LD ceiling dehumidifier. Could you share more details and a quote?",
      },
      {
        id: "dba-gec400ld",
        name: "DBA-GEC400LD",
        line: "Commercial Ceiling",
        capacity: "400 L/day",
        tagline: "Maximum-capacity ceiling unit",
        description:
          "The highest-capacity ceiling dehumidifier in the range, for the most demanding industrial moisture loads.",
        bestFor: ["industrial"],
        highlights: ["400 L/day", "Ducted ceiling install", "Drain pump", "RS485 / BMS ready"],
        image: "/images/products/dba-gec400ld.jpg",
        sourceUrl: "https://www.dba.sg/products/dba-gec400ld-ceiling-dehumidifier",
        enquiryText: "Hi DBA, I'm interested in the DBA-GEC400LD ceiling dehumidifier. Could you share more details and a quote?",
      },
    ],
  },
  {
    id: "restoration",
    name: "Restoration Dehumidifiers",
    blurb:
      "Portable, high-performance units for water-damage restoration, drying and temporary deployment.",
    products: [
      {
        id: "dba-dh65",
        name: "DBA-DH65",
        line: "Restoration",
        capacity: "65 L/day",
        tagline: "Portable restoration workhorse",
        description:
          "Portable restoration dehumidifier for drying and water-damage recovery.",
        bestFor: ["commercial", "industrial"],
        highlights: ["65 L/day", "Portable", "Restoration / drying"],
        image: "/images/products/dba-dh65.jpg",
        sourceUrl: "https://www.dba.sg/products/dba-dh65",
        enquiryText: "Hi DBA, I'm interested in the DBA-DH65 restoration dehumidifier. Could you share more details and a quote?",
      },
      {
        id: "dba-gex75",
        name: "DBA-GEX75",
        line: "Restoration",
        capacity: "75 L/day",
        tagline: "Mid-capacity restoration unit",
        description:
          "Portable restoration dehumidifier for professional drying applications.",
        bestFor: ["commercial", "industrial"],
        highlights: ["75 L/day", "Portable", "Restoration / drying"],
        image: "/images/products/dba-gex75.jpg",
        sourceUrl: "https://www.dba.sg/products/dehumidifier-dba-gex75",
        enquiryText: "Hi DBA, I'm interested in the DBA-GEX75 restoration dehumidifier. Could you share more details and a quote?",
      },
      {
        id: "dba-gex110",
        name: "DBA-GEX110",
        line: "Restoration",
        capacity: "110 L/day",
        tagline: "High-capacity restoration unit",
        description:
          "High-capacity portable restoration dehumidifier for large-scale drying and water-damage recovery.",
        bestFor: ["commercial", "industrial"],
        highlights: ["110 L/day", "Portable", "Restoration / drying"],
        image: "/images/products/dba-gex110.jpg",
        sourceUrl: "https://www.dba.sg/products/dehumidifier-dba-gex110",
        enquiryText: "Hi DBA, I'm interested in the DBA-GEX110 restoration dehumidifier. Could you share more details and a quote?",
      },
    ],
  },
  {
    id: "specialised",
    name: "Industrial, Humidity Control & Desiccant",
    blurb:
      "Specialised solutions: industrial units for warehouses and factories, precision humidity-control units (dehumidify + humidify), and desiccant units for low-temperature / low-humidity environments.",
    products: [
      {
        id: "industrial",
        name: "Industrial Dehumidifiers",
        line: "Industrial",
        capacity: "High capacity",
        tagline: "For warehouses, factories & large spaces",
        description:
          "Ideal for warehouses, factories and large spaces, handling significant moisture removal.",
        bestFor: ["industrial"],
        highlights: ["High-volume moisture removal", "Warehouse / factory scale"],
        image: "/images/products/industrial.jpg",
        sourceUrl: "https://www.dba.sg/collections/industrial-dehumidifier",
        enquiryText: "Hi DBA, I'm interested in your industrial dehumidifiers for a large space. Could you advise and share a quote?",
      },
      {
        id: "humidity-control-unit",
        name: "Humidity Control Units",
        line: "Humidity Control",
        capacity: "Precision control",
        tagline: "Dehumidify and humidify with precision",
        description:
          "Designed for precision humidity control, offering both dehumidifying and humidifying functions.",
        bestFor: ["commercial", "industrial"],
        highlights: ["Two-way humidity control", "Precision applications"],
        image: "/images/products/humidity-control-unit.png",
        sourceUrl: "https://www.dba.sg/collections/humidity-control-unit",
        enquiryText: "Hi DBA, I'm interested in your humidity control units (dehumidify + humidify). Could you share more details?",
      },
      {
        id: "desiccant",
        name: "Desiccant Dehumidifiers",
        line: "Desiccant",
        capacity: "Low-temp / low-RH",
        tagline: "For low-temperature, low-humidity environments",
        description:
          "Best suited for low-temperature and low-humidity environments where refrigerant units struggle.",
        bestFor: ["commercial", "industrial"],
        highlights: ["Low-temp performance", "Very low RH targets"],
        image: "/images/products/desiccant.jpg",
        sourceUrl: "https://www.dba.sg/collections/desiccant-dehumidifier",
        enquiryText: "Hi DBA, I'm interested in your desiccant dehumidifiers for a low-temperature / low-humidity application. Could you advise?",
      },
    ],
  },
];

// Flat list helper if you need to iterate all products at once
export const allProducts: Product[] = productLines.flatMap((l) => l.products);