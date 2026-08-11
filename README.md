# Choice Fashion Studio — Sunamganj 🛍️

Official website for **Choice Fashion Studio**, a 5.0★-rated clothing store at
**Nil Akash Plaza, Priyangon Market, Sunamganj 3000, Bangladesh**.

> আপনার পছন্দ, আপনার স্টাইল — *Your choice, your style.*

---

## ✨ What's inside

A complete **Phase-1 digital storefront** (per the business research & spec):

| Area | Details |
|---|---|
| 🏠 Home | Hero, categories, new arrivals, favourites, review highlights, store location, CTAs |
| 🛒 Shop | Full catalog with live search + category / price / size filters + sorting |
| 📄 Product pages | Size & colour selection, add-to-bag, **Buy via WhatsApp**, related items, Product structured data |
| 👜 Shopping bag | Local-storage cart; checkout sends a ready-made **WhatsApp order message** — no backend needed |
| ⭐ Reviews | Real Google rating (5.0 / 5, 14 reviews) + faithful paraphrases of review themes |
| 📍 Contact | Map embed, directions, opening hours, WhatsApp quick-message form |
| 📏 Size guide | Men's, women's, kids & trousers measuring tables |
| 🚚 Delivery page | Honest ordering/delivery/exchange info with "to be confirmed" flags |
| 🌐 Bilingual | **English / বাংলা** instant language toggle |
| 🔍 SEO ready | Meta/OG tags, `ClothingStore` + `Product` JSON-LD, sitemap.xml, robots.txt |
| 📱 Mobile-first | Sticky bottom bar (Home · Shop · Call · WhatsApp · Bag), filter sheet, thumb-friendly UI |

## ✅ Facts on the site (verified 11 Aug 2026)

- **Address:** Nil Akash Plaza, Priyangon Market, Sunamganj 3000
- **Phone / WhatsApp:** +880 1618-006268
- **Hours:** 10:00 AM – 12:00 midnight, every day (per Google listing)
- **Rating:** 5.0 / 5.0 from 14 Google reviews

## ⚠️ Demo catalog — important!

`assets/js/products.js` currently contains **16 sample products with sample prices and photos**
so the store looks complete in preview. All sample items carry a **"Sample" badge** and the shop
page shows a preview notice. Before public launch:

1. Replace the `PRODUCTS` array in `assets/js/products.js` with real items
   (name, price, sizes, colours, photo path in `assets/img/products/`).
2. Set `SITE.demoCatalog = false` in the same file → all "Sample" labels disappear.
3. Delete this section from the README.

Shop settings (phone, WhatsApp number, address, hours) live at the top of the same file in `SITE`.

## 🚀 Deploy on Vercel (2 minutes)

1. Push this repository to GitHub (already done if you're reading it there).
2. Go to [vercel.com/new](https://vercel.com/new) → **Import** this repository.
3. Vercel auto-detects a **static site** — no framework preset or build command needed. Click **Deploy**.
4. After the first deploy, update the domain in:
   - `SITE.baseUrl` in `assets/js/products.js`
   - `<link rel="canonical">` tags (in each HTML file)
   - `sitemap.xml` and `robots.txt`

Custom domain later: Vercel → Project → Settings → Domains.

## 🗂️ Structure

```
├── index.html  shop.html  product.html  about.html  reviews.html
├── offers.html  contact.html  delivery.html  size-guide.html  faq.html  404.html
├── assets/
│   ├── css/style.css       → full design system
│   ├── js/products.js      → SITE config + catalog data (edit here!)
│   ├── js/main.js          → cart, search, filters, i18n, UI injection
│   └── img/                → hero, store & product photography
├── favicon.svg  vercel.json  sitemap.xml  robots.txt
```

## 📋 Pre-launch checklist for the store

- [ ] Confirm exact shop/unit number & map pin
- [ ] Confirm WhatsApp number (currently same as phone)
- [ ] Confirm official Facebook / Instagram to link
- [ ] Real product photos, names, prices, stock
- [ ] Delivery areas & charges, payment methods (bKash/Nagad/COD)
- [ ] Written exchange/return policy
- [ ] Set `demoCatalog: false`

---

### 👨‍💻 Developer credit

Designed & developed by **[Rahat Ahmed (রাহাত আহমেদ) — RahatVerse](https://www.rahatahmed.site/en)**
🌐 Portfolio: https://www.rahatahmed.site/en
