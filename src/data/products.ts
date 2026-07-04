// src/data/products.ts
// DryTech.sg — DBA dehumidifier product data
// Specs sourced from dba.sg product pages (verified July 2026).
// Prices intentionally omitted — this is a lead-gen showcase, not a store.

export type SpaceType = "residential" | "commercial" | "industrial";

export interface Product {
  id: string;
  name: string;
  line: string;
  capacity: string;
  tagline: string;
  description: string;
  bestFor: SpaceType[];
  highlights: string[];
  image: string;
  sourceUrl: string;
  enquiryText: string;
}

export interface ProductLine {
  id: string;
  name: string;
  blurb: string;
  products: Product[];
}

export const brandHighlights = [
  "Ultra-slim ceiling-mounted profile — hides above a false ceiling",
  "Whole-house / whole-space dehumidification via ducting",
  "Built-in drain pump lifts condensate up to 1.8 m (no gravity-drain limit)",
  "Smart control: Tuya app over WiFi + RS485 Modbus for BMS integration",
  "Quiet operation — 39–50 dB(A) depending on model",
  "Energy efficient, designed for Singapore's high-humidity climate",
];

export const contact = {
  whatsapp: "6589859886",
  whatsappDisplay: "+65 8985 9886",
  hotline: "+65 6772 9962",
  email: "info@drytech.sg",
  calculatorUrl: "https://drytech-sg-calculator-797933795168.us-west1.run.app",
};

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
        tagline: "The slim choice for homes and small offices",
        description:
          "The entry-level Ultra-Thin ceiling unit — 200mm slim, 28 kg, fits above any standard false ceiling. Removes 20L of moisture daily at 39 dB(A), serving homes and offices up to 400 sq ft. Built-in UV-C light, Tuya WiFi app, and RS485 Modbus included as standard.",
        bestFor: ["residential", "commercial"],
        highlights: [
          "20 L/day at 30°C 80%RH — 9.9 L/day at 26.7°C 60%RH",
          "865 × 376 × 200 mm (W×D×H) — ultra-slim 200mm profile",
          "28 kg — fits inside standard false ceiling void",
          "39 dB(A) noise level, 220 CMH airflow",
          "1.8 m condensate pump lift — drain to any point",
          "200–400 sq ft coverage",
          "Tuya WiFi app + RS485 Modbus (BMS / smart home)",
          "Built-in UV-C sterilisation light",
          "196W rated / 300W max · R134a refrigerant · Grade 1 Energy Label",
        ],
        image: "/images/products/dba-utc20.jpg",
        sourceUrl: "https://www.dba.sg/products/dba-utc20-ultra-thin-ceiling-dehumidifier",
        enquiryText: "Hi DBA, I'm interested in the DBA-UTC20 (20L/day ultra-thin ceiling dehumidifier). Could you share more details and a quote for Singapore?",
      },
      {
        id: "dba-utc68",
        name: "DBA-UTC68",
        line: "Ultra-Thin Ceiling",
        capacity: "68 L/day",
        tagline: "Whole-floor humidity control in a single install",
        description:
          "A high-capacity Ultra-Thin ceiling dehumidifier for medium to large spaces. At 240mm, the UTC68 removes 68L per day while remaining entirely hidden above a false ceiling. One unit typically covers an entire Singapore apartment or small office.",
        bestFor: ["residential", "commercial"],
        highlights: [
          "68 L/day at 30°C 80%RH — 42 L/day at 26.7°C 60%RH",
          "1010 × 500 × 240 mm (W×D×H), 42 kg",
          "48 dB(A) noise level, 500 CMH airflow",
          "1.8 m condensate pump lift",
          "800–1,000 sq ft coverage",
          "Tuya WiFi app + RS485 Modbus (BMS / smart home)",
          "Built-in UV-C sterilisation light",
          "880W rated / 1,250W max · R410A refrigerant",
        ],
        image: "/images/products/dba-utc68.jpg",
        sourceUrl: "https://www.dba.sg/products/dba-utc68-ultra-thin-ceiling-dehumidifier",
        enquiryText: "Hi DBA, I'm interested in the DBA-UTC68 (68L/day ultra-thin ceiling dehumidifier). Could you share more details and a quote for Singapore?",
      },
      {
        id: "dba-utc120",
        name: "DBA-UTC120",
        line: "Ultra-Thin Ceiling",
        capacity: "120 L/day",
        tagline: "Industrial-grade output in an ultra-slim ceiling unit",
        description:
          "The highest-output Ultra-Thin ceiling unit, removing 120L per day from large commercial and light-industrial spaces. Despite its capacity, the 310mm profile fits within most standard false ceiling voids.",
        bestFor: ["commercial", "industrial"],
        highlights: [
          "120 L/day at 30°C 80%RH — 53 L/day at 26.7°C 60%RH",
          "1075 × 746 × 310 mm (W×D×H), 64 kg",
          "50 dB(A) noise level, 890 CMH airflow",
          "1.8 m condensate pump lift",
          "1,300–1,500 sq ft coverage",
          "Tuya WiFi app + RS485 Modbus (BMS / smart home)",
          "Built-in UV-C sterilisation light",
          "1,010W rated / 1,600W max · R410A refrigerant",
        ],
        image: "/images/products/dba-utc120.jpg",
        sourceUrl: "https://www.dba.sg/products/dba-utc120-ultra-thin-ceiling-dehumidifier",
        enquiryText: "Hi DBA, I'm interested in the DBA-UTC120 (120L/day ultra-thin ceiling dehumidifier). Could you share more details and a quote for Singapore?",
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
        tagline: "Ducted commercial ceiling unit with built-in pump",
        description:
          "Ducted commercial ceiling dehumidifier for concealed, whole-space humidity control. The GEC68LD-HP delivers 68L/day with a 1.2m built-in condensate pump and connects to RS485 Modbus or WiFi for smart building integration.",
        bestFor: ["commercial"],
        highlights: [
          "68 L/day at 30°C 80%RH — 33 L/day at 26.7°C 60%RH",
          "970 × 525 × 345 mm (W×D×H), 44 kg",
          "49 dB(A) noise level, 500 CMH airflow",
          "Built-in pump: 1.2m lift / 1.8m drain height",
          "800–1,000 sq ft coverage",
          "WiFi app + RS485 Modbus (BMS / smart home)",
          "Built-in UV-C sterilisation light",
          "730W rated / 940W max · R410A refrigerant",
        ],
        image: "/images/products/dba-gec68ld-hp.jpg",
        sourceUrl: "https://www.dba.sg/products/dba-gec68ld-hp-ceiling-dehumidifier",
        enquiryText: "Hi DBA, I'm interested in the DBA-GEC68LD-HP commercial ceiling dehumidifier. Could you share more details and a quote for Singapore?",
      },
      {
        id: "dba-gec145ld-hp",
        name: "DBA-GEC145LD-HP",
        line: "Commercial Ceiling",
        capacity: "145 L/day",
        tagline: "High-output ducted ceiling for large commercial spaces",
        description:
          "A high-output ducted ceiling unit handling 145L per day, built for larger commercial floors and light industrial spaces. RS485 Modbus standard; WiFi optional. Covers 1,500–1,700 sq ft from a single ceiling install.",
        bestFor: ["commercial", "industrial"],
        highlights: [
          "145 L/day at 30°C 80%RH — 85 L/day at 26.7°C 60%RH",
          "1005 × 695 × 440 mm (W×D×H), 70 kg",
          "50 dB(A) noise level, 1,200 CMH airflow",
          "Built-in pump: 1.2m lift / 1.8m drain height",
          "1,500–1,700 sq ft coverage",
          "RS485 Modbus standard; WiFi app optional",
          "Built-in UV-C sterilisation light",
          "1,520W rated / 2,220W max · R410A/1.2 kg refrigerant",
        ],
        image: "/images/products/dba-gec145ld-hp.jpg",
        sourceUrl: "https://www.dba.sg/products/dba-gec145ld-hp-industrial-dehumidifier",
        enquiryText: "Hi DBA, I'm interested in the DBA-GEC145LD-HP commercial ceiling dehumidifier. Could you share more details and a quote for Singapore?",
      },
      {
        id: "dba-gec280ld",
        name: "DBA-GEC280LD",
        line: "Commercial Ceiling",
        capacity: "280 L/day",
        tagline: "Heavy-duty 3-phase ceiling unit, 280L/day",
        description:
          "Heavy-duty 3-phase ceiling dehumidifier removing 280L per day. Built for large commercial and light-industrial environments — a single ceiling unit managing significant moisture loads across 2,500–3,000 sq ft.",
        bestFor: ["industrial"],
        highlights: [
          "280 L/day at 30°C 80%RH — 132 L/day at 26.7°C 60%RH",
          "1137 × 900 × 540 mm (W×D×H), 108 kg",
          "58 dB(A) noise level, 1,700 CMH airflow",
          "2,500–3,000 sq ft coverage",
          "RS485 Modbus standard; WiFi optional",
          "3-phase 380V · 2,580W rated / 3,510W max",
          "R410A/1.9 kg refrigerant",
        ],
        image: "/images/products/dba-gec280ld.jpg",
        sourceUrl: "https://www.dba.sg/products/dba-gec280ld-ceiling-dehumidifier",
        enquiryText: "Hi DBA, I'm interested in the DBA-GEC280LD ceiling dehumidifier. Could you share more details and a quote for Singapore?",
      },
      {
        id: "dba-gec400ld",
        name: "DBA-GEC400LD",
        line: "Commercial Ceiling",
        capacity: "400 L/day",
        tagline: "Maximum-capacity ceiling unit for demanding spaces",
        description:
          "The GEC400LD handles up to 400L of moisture per day from a ceiling-mounted position. Designed for demanding industrial environments: warehouses, large commercial kitchens, sports facilities.",
        bestFor: ["industrial"],
        highlights: [
          "400 L/day at 30°C 80%RH — 240 L/day at 26.7°C 60%RH",
          "1270 × 1200 × 605 mm (W×D×H), 210 kg",
          "65 dB(A) noise level, 3,250 CMH airflow",
          "3,000–4,000 sq ft coverage",
          "RS485 Modbus standard; WiFi optional",
          "3-phase 380V · 4,600W rated / 6,250W max",
          "R410A/1.9 kg × 2 refrigerant",
        ],
        image: "/images/products/dba-gec400ld.jpg",
        sourceUrl: "https://www.dba.sg/products/dba-gec400ld-ceiling-dehumidifier",
        enquiryText: "Hi DBA, I'm interested in the DBA-GEC400LD ceiling dehumidifier. Could you share more details and a quote for Singapore?",
      },
      {
        id: "dba-gec550ld",
        name: "DBA-GEC550LD",
        line: "Commercial Ceiling",
        capacity: "550 L/day",
        tagline: "Ultra-high-capacity industrial ceiling unit",
        description:
          "The most powerful unit in the DBA ceiling range, removing 550L per day across 4,000–5,000 sq ft. Two R410A circuits running on 3-phase 380V — built for the highest-humidity industrial environments.",
        bestFor: ["industrial"],
        highlights: [
          "550 L/day at 30°C 80%RH — 276 L/day at 26.7°C 60%RH",
          "1270 × 1200 × 605 mm (W×D×H), 240 kg",
          "65 dB(A) noise level, 3,250 CMH airflow",
          "4,000–5,000 sq ft coverage",
          "RS485 Modbus standard; WiFi optional",
          "3-phase 380V · 4,900W rated / 6,550W max",
          "R410A/2.2 kg × 2 refrigerant",
        ],
        image: "/images/products/dba-gec550ld.jpg",
        sourceUrl: "https://www.dba.sg/products/dba-gec550ld-ceiling-dehumidifier",
        enquiryText: "Hi DBA, I'm interested in the DBA-GEC550LD ceiling dehumidifier. Could you share more details and a quote for Singapore?",
      },
    ],
  },
  {
    id: "restoration",
    name: "Restoration Dehumidifiers",
    blurb:
      "Portable, high-performance units for water-damage restoration, post-renovation drying and temporary deployment where a ceiling install isn't feasible.",
    products: [
      {
        id: "dba-dh65",
        name: "DBA-DH65",
        line: "Restoration",
        capacity: "65 L/day",
        tagline: "Portable restoration unit with HEPA + plasma ioniser",
        description:
          "Portable restoration dehumidifier combining 65L/day dehumidification with HEPA filtration and plasma ioniser air purification. Ducted via ⌀146mm flange. Built for water-damage restoration, renovation drying, and construction sites.",
        bestFor: ["commercial", "industrial"],
        highlights: [
          "65 L/day capacity, 310 CMH airflow",
          "400 × 275 × 630 mm, 21 kg — portable with casters",
          "700–1,000 sq ft coverage",
          "HEPA filtration + plasma ioniser air purification",
          "Auto pump drainage (5.8L tank, continuous drain option)",
          "WiFi app control",
          "680W rated · R410A/290g refrigerant",
        ],
        image: "/images/products/dba-dh65.jpg",
        sourceUrl: "https://www.dba.sg/products/dba-dh65",
        enquiryText: "Hi DBA, I'm interested in the DBA-DH65 restoration dehumidifier. Could you share more details and a quote for Singapore?",
      },
      {
        id: "dba-gex75",
        name: "DBA-GEX75",
        line: "Restoration",
        capacity: "75 L/day",
        tagline: "LGR restoration dehumidifier, 5m pump lift",
        description:
          "LGR (Low-Grain Refrigerant) restoration dehumidifier. Removes 75L per day across 1,000 sq ft, down to 30%RH. 5m pump lift drain means no gravity drain slope required — set it anywhere and connect to any drain point.",
        bestFor: ["commercial", "industrial"],
        highlights: [
          "75 L/day at 30°C 80%RH — 35 L/day at 26.7°C 60%RH",
          "345 × 560 × 450 mm, 29.2 kg — mobile with casters",
          "55 dB(A) noise level, 420 CMH airflow",
          "5 m pump drain lift — set anywhere, drain anywhere",
          "1,000 sq ft coverage, operating range 1–38°C",
          "WiFi app control, LCD display",
          "580W rated · R290/200g (natural refrigerant)",
        ],
        image: "/images/products/dba-gex75.jpg",
        sourceUrl: "https://www.dba.sg/products/dehumidifier-dba-gex75",
        enquiryText: "Hi DBA, I'm interested in the DBA-GEX75 restoration dehumidifier. Could you share more details and a quote for Singapore?",
      },
      {
        id: "dba-gex110",
        name: "DBA-GEX110",
        line: "Restoration",
        capacity: "110 L/day",
        tagline: "High-capacity LGR restoration dehumidifier",
        description:
          "High-capacity LGR restoration dehumidifier removing 110L per day across 1,500 sq ft. 5m pump lift, WiFi control, and auto-restart after power failure. The professional choice for serious water-damage recovery.",
        bestFor: ["commercial", "industrial"],
        highlights: [
          "110 L/day at 30°C 80%RH — 55 L/day at 26.7°C 60%RH",
          "445 × 705 × 530 mm, 45 kg — mobile with casters",
          "60 dB(A) noise level, 1,000 CMH airflow",
          "5 m pump drain lift",
          "1,500 sq ft coverage, operating range 1–38°C",
          "WiFi app control, auto-restart after power failure",
          "950W rated · R290/235g (natural refrigerant)",
        ],
        image: "/images/products/dba-gex110.jpg",
        sourceUrl: "https://www.dba.sg/products/dehumidifier-dba-gex110",
        enquiryText: "Hi DBA, I'm interested in the DBA-GEX110 restoration dehumidifier. Could you share more details and a quote for Singapore?",
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
        tagline: "For warehouses, factories and large-volume spaces",
        description:
          "High-capacity industrial dehumidifiers for warehouses, factories and large commercial spaces. Handles substantial moisture loads where standard residential or commercial units would be undersized.",
        bestFor: ["industrial"],
        highlights: [
          "High-volume moisture removal",
          "Warehouse and factory scale",
          "Heavy-duty construction",
          "RS485 Modbus and BMS integration",
        ],
        image: "/images/products/industrial.jpg",
        sourceUrl: "https://www.dba.sg/collections/industrial-dehumidifier",
        enquiryText: "Hi DBA, I'm looking for an industrial dehumidifier for a large space in Singapore. Could you advise and share a quote?",
      },
      {
        id: "humidity-control-unit",
        name: "Humidity Control Units",
        line: "Humidity Control",
        capacity: "Precision control",
        tagline: "Dehumidify and humidify with precision",
        description:
          "Precision humidity control units that can both dehumidify and humidify — maintaining an exact RH setpoint in either direction. Used in laboratories, archives, pharmaceutical stores and sensitive production environments.",
        bestFor: ["commercial", "industrial"],
        highlights: [
          "Two-way humidity control (dehumidify + humidify)",
          "Precision setpoint control (±1%RH typical)",
          "Suitable for labs, archives, pharmaceutical storage",
          "RS485 Modbus for BMS integration",
        ],
        image: "/images/products/humidity-control-unit.png",
        sourceUrl: "https://www.dba.sg/collections/humidity-control-unit",
        enquiryText: "Hi DBA, I'm interested in your humidity control units (dehumidify + humidify) for Singapore. Could you share more details?",
      },
      {
        id: "desiccant",
        name: "Desiccant Dehumidifiers",
        line: "Desiccant",
        capacity: "Low-temp / low-RH",
        tagline: "For low-temperature and ultra-low-humidity environments",
        description:
          "Desiccant dehumidifiers perform where refrigerant units struggle — in low-temperature environments or applications requiring very low relative humidity (below 30%RH). Ideal for cold stores, chemical processing and specialty manufacturing.",
        bestFor: ["commercial", "industrial"],
        highlights: [
          "Effective at low temperatures where refrigerant units lose performance",
          "Achieves very low RH targets (below 30%RH)",
          "Suitable for cold stores, chemical processing, specialty manufacture",
          "No condensate — moisture captured in desiccant rotor",
        ],
        image: "/images/products/desiccant.jpg",
        sourceUrl: "https://www.dba.sg/collections/desiccant-dehumidifier",
        enquiryText: "Hi DBA, I'm interested in your desiccant dehumidifiers for a low-temperature / low-humidity application in Singapore. Could you advise?",
      },
    ],
  },
];

export const allProducts: Product[] = productLines.flatMap((l) => l.products);
