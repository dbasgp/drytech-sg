Project: DryTech.sg — DBA Dehumidifier Showcase & Lead-Gen Site
Build a fast, animated, single-page marketing site (Astro + Tailwind + GSAP + Lenis) to showcase DBA's dehumidifier range and funnel visitors to WhatsApp. NOT an e-commerce store — a premium product showcase. Deploy as a static site on Render via GitHub.
Brand context: DBA = Singapore commercial/ceiling dehumidifier specialist. Lines: Ultra-Thin Ceiling (UTC20/68/120), Commercial Ceiling (GEC68/145/280/400), Restoration (DH65/GEX75/GEX110), Industrial, Humidity Control & Desiccant. Selling points: ultra-slim ceiling-mounted, whole-house dehumidification, built-in drain pump (lifts condensate 1.8m), Tuya app + RS485 Modbus smart control, quiet (39–50 dB), energy efficient.
Contact: WhatsApp +65 8985 9886 · Hotline +65 6772 9962 · dba@dba.sg
Lead capture = WhatsApp redirect. The form collects name, space type (residential/commercial/industrial), room size, and message, then opens https://wa.me/6589859886?text=<url-encoded pre-filled message>. No backend, no email. Every CTA across the site ("Get a Free Consultation", "Request Quote", product "Enquire") routes to WhatsApp with context-appropriate pre-filled text.
Images: Scrape product names, specs, and image URLs from www.dba.sg collections. Download each image into /public/images/products/ and reference locally — do NOT hotlink Shopify CDN URLs. Populate src/data/products.ts with the real product data so I can edit it without touching components.
Design direction: Clean, technical, commercial-premium — industrial-product confidence, not consumer cute. Generous whitespace, restrained palette (cool neutrals + one "dry/cool" blue-teal accent), strong type hierarchy, large product photography. Distinctive, not templated.
Sections (in order):

Hero — full-viewport, animated headline, hero product visual, "Get a Free Consultation" + WhatsApp buttons
Problem → Solution — Singapore humidity pain points → DBA fix
Product range — animated cards per line, each with an "Enquire on WhatsApp" action
Why DBA — feature grid (slim profile, smart control, drain pump, quiet, efficiency)
Humidity calculator CTA — link to https://dba-sg-calculator-335550284517.us-west1.run.app
Catalog downloads — PDF cards (pull the 4 catalog PDFs from dba.sg)
Lead form → WhatsApp redirect
Footer — contact + links

Animations (full-page motion feel): Lenis smooth scroll; GSAP ScrollTrigger reveals (fade/slide on enter); hero parallax or animated SVG water-droplet/humidity motif that dissipates; one pinned scroll section for product range or "how it works"; respect prefers-reduced-motion; animate transform/opacity only; target 60fps.
Quality bar: Lighthouse 90+ all metrics; mobile-first responsive; semantic HTML; meta + OG tags for drytech.sg; sitemap.xml + robots.txt; lazy-load images, modern formats; accessible (keyboard nav, alt text, contrast).
Deliverables: Working Astro repo; README with local-dev + Render static-deploy steps; editable src/data/products.ts.