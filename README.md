# DryTech.sg

Product showcase and lead-gen site for DBA's ceiling dehumidifier range. Built with Astro, Tailwind CSS, GSAP, and Lenis.

## Local development

```bash
cd clients/DryTech-sg
npm install
npm run dev
```

Open http://localhost:4321

## Before the first build

Two asset steps are required before the site looks complete:

**1. Product images**

Download product photos from dba.sg into `public/images/products/`. Filenames must match the `image` field in `src/data/products.ts`. Example:

```
public/images/products/dba-utc20.jpg
public/images/products/dba-utc68.jpg
public/images/products/dba-utc120.jpg
...
```

**2. Catalog PDFs**

Download the four catalog PDFs from dba.sg and place them in `public/catalogs/`:

```
public/catalogs/dba-ultra-thin-ceiling.pdf
public/catalogs/dba-commercial-ceiling.pdf
public/catalogs/dba-restoration.pdf
public/catalogs/dba-industrial-specialised.pdf
```

Update the filenames in `src/components/Catalogs.astro` if the actual filenames differ.

## Editing content

- **Products** — edit `src/data/products.ts` (single source of truth, no component changes needed)
- **Contact / WhatsApp number** — edit `contact` in `src/data/products.ts`
- **Animations** — `src/scripts/animations.ts`
- **Design tokens** — `tailwind.config.mjs`

## Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build with `npm run preview`.

## Deploy to Render (static site)

1. Push this directory (or the full repo) to a GitHub repository
2. In Render → New → Static Site
3. Set **Root Directory** to `clients/DryTech-sg` (or `.` if the repo is just this project)
4. **Build Command**: `npm install && npm run build`
5. **Publish Directory**: `dist`
6. Set **Custom Domain** to `drytech.sg` and configure DNS as directed by Render

Auto-deploy is triggered on every push to the connected branch. To trigger a manual deploy, use the Render dashboard or the API:

```bash
curl -X POST "https://api.render.com/v1/services/<SERVICE_ID>/deploys" \
  -H "Authorization: Bearer <API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{"clearCache": false}'
```
