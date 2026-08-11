/* ============================================================
   Choice Fashion Studio — Sunamganj : main.js
   UI injection, cart, WhatsApp ordering, search, filters, i18n
   Designed & developed by Rahat Ahmed — https://www.rahatahmed.site/en
   ============================================================ */
"use strict";

/* ---------------- Icons (inline SVG) ---------------- */
const ICONS = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 3H2"/><circle cx="9" cy="20" r="1.6"/><circle cx="17" cy="20" r="1.6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2Z"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2a9.9 9.9 0 0 0-8.4 15.2L2 22l4.9-1.6A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.1 15.1l-.3-.2-2.9 1 1-2.9-.2-.3a8.1 8.1 0 0 1 8.5-12.7Zm-3 4c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.2.2 1.9 3 4.6 4 2.3 1 2.8.8 3.3.8.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.1l-1 1.2c-.2.2-.3.2-.6.1a7.4 7.4 0 0 1-3.6-3.2c-.1-.3 0-.4.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L8.7 8.2c-.2-.4-.4-.4-.7-.4Z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8Z"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 12.5 5 5 10-11"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8v.1"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5.2 3.4 9.4 8 11 4.6-1.6 8-5.8 8-11V5Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.9 2.9m7 7 2.9 2.9m0-12.8-2.9 2.9m-7 7-2.9 2.9"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 12 10 10L22 12V2H12Z"/><circle cx="16" cy="8" r="1.6"/></svg>',
  ruler: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 15 13-13 7 7L9 22Z"/><path d="m7.5 10.5 2 2m1-5 2 2m1-5 2 2"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 8h13v9H1zM14 11h4l4 3v3h-8"/><circle cx="6" cy="19" r="1.8"/><circle cx="17" cy="19" r="1.8"/></svg>',
  shirt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 3-6 3 2 4 2-1v12h10V9l2 1 2-4-6-3a3 3 0 0 1-6 0Z"/></svg>',
  filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h18l-7 8v5l-4 2v-7Z"/></svg>',
  ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4 10 14M9 5H5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-4"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1Z"/></svg>',
  google: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.6h3.2c1.9-1.8 3-4.4 3-7.5Z" fill="#4285F4"/><path d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.2H3.1v2.6A10 10 0 0 0 12 22Z" fill="#34A853"/><path d="M6.4 13.9a6 6 0 0 1 0-3.8V7.5H3.1a10 10 0 0 0 0 9Z" fill="#FBBC05"/><path d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3 7.5l3.3 2.6C7.2 7.7 9.4 5.9 12 5.9Z" fill="#EA4335"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 5v10l-9 5-9-5V7Z"/><path d="m3.5 7.5 8.5 4.5 8.5-4.5M12 12v9.5"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-8-4.7-10.3-9A5.5 5.5 0 0 1 12 6.5 5.5 5.5 0 0 1 22.3 12C20 16.3 12 21 12 21Z"/></svg>'
};
function icon(name) { return ICONS[name] || ""; }
const FALLBACK_IMG =
  "data:image/svg+xml," + encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='500'><rect width='100%' height='100%' fill='#f4efe7'/><text x='50%' y='47%' font-family='Georgia' font-size='26' fill='#8c2332' text-anchor='middle'>Choice</text><text x='50%' y='55%' font-family='Arial' font-size='11' letter-spacing='4' fill='#7d766c' text-anchor='middle'>FASHION STUDIO</text></svg>`);

/* ---------------- i18n ---------------- */
const I18N = {
  en: {
    "nav.home": "Home", "nav.shop": "Shop", "nav.new": "New Arrivals", "nav.offers": "Offers",
    "nav.about": "About", "nav.contact": "Contact", "nav.guide": "Size Guide", "nav.delivery": "Delivery Info",
    "nav.faq": "FAQ", "nav.reviews": "Reviews",
    "header.call": "Call Now",
    "hero.kicker": "Clothing Store · Priyangon Market, Sunamganj",
    "hero.title": "Fashion that feels <em>made for you</em>",
    "hero.sub": "Choice Fashion Studio brings carefully picked clothing for men, women and kids to the heart of Sunamganj — unique pieces, honest prices and service with a smile.",
    "hero.cta.shop": "Shop the Collection", "hero.cta.visit": "Visit the Store", "hero.cta.call": "Call Now",
    "hero.trust1": "5.0★ Google rating", "hero.trust2": "Open daily till midnight", "hero.trust3": "Unique, curated items",
    "cat.title": "Shop by Category", "cat.sub": "From festive panjabis to everyday essentials — find your style.",
    "new.title": "New Arrivals", "new.sub": "Fresh styles, just landed on the rack.",
    "best.title": "Customer Favourites", "best.sub": "The pieces Sunamganj keeps coming back for.",
    "shop.all": "View All",
    "feat.title": "Why Shop With Us",
    "rev.title": "Loved by Our Customers", "rev.sub": "Genuine feedback from our Google Business reviews.",
    "loc.title": "Visit Our Store", "loc.sub": "Find us at the heart of Priyangon Market — we would love to see you.",
    "foot.tag": "Clothing & fashion for the whole family — at the heart of Sunamganj.",
    "foot.shop": "Shop", "foot.help": "Help", "foot.contact": "Get in Touch",
    "foot.rights": "All rights reserved.",
    "foot.dev": "Designed & developed by",
    "cart.title": "Your Bag", "cart.empty": "Your bag is empty", "cart.emptySub": "Beautiful clothes are waiting for you.",
    "cart.start": "Start Shopping", "cart.total": "Total", "cart.note": "Delivery charge will be confirmed when you order. Pay cash on delivery or in-store.",
    "cart.wa": "Order via WhatsApp", "cart.call": "Call to Order", "cart.added": "Added to your bag",
    "shop.title": "The Collection", "shop.sub": "Browse our full range — filter by category, price, size or colour.",
    "shop.filters": "Filters", "shop.results": "items", "shop.sort": "Sort by",
    "sort.new": "Newest", "sort.plh": "Price: Low → High", "sort.phl": "Price: High → Low", "sort.name": "Name A–Z",
    "filter.cat": "Category", "filter.price": "Max price", "filter.size": "Size", "filter.clear": "Clear all",
    "search.ph": "Search panjabi, saree, jeans…", "search.hint": "Popular:", "search.none": "No products found. Try another word — or call us, we're happy to help!",
    "pd.add": "Add to Bag", "pd.buy": "Buy Now", "pd.wa": "Ask on WhatsApp", "pd.call": "Call to Order",
    "pd.size": "Select Size", "pd.color": "Select Colour", "pd.qty": "Qty", "pd.related": "You May Also Like",
    "pd.desc": "Product Details", "pd.delivery": "Delivery & Exchange", "pd.material": "Material", "pd.care": "Care",
    "pd.selectFirst": "Please select size and colour first",
    "cta.title": "Come find your style today", "cta.sub": "Drop by the store at Priyangon Market or call us — we will help you pick the perfect outfit.",
    "bar.home": "Home", "bar.shop": "Shop", "bar.call": "Call", "bar.wa": "WhatsApp", "bar.bag": "Bag",
    "form.name": "Your name", "form.phone": "Phone number", "form.msg": "Your message", "form.send": "Send via WhatsApp",
    "form.sent": "Opening WhatsApp — your message is ready to send!",
    "common.viewProduct": "View Product", "common.from": "From", "common.sample": "Sample"
  },
  bn: {
    "nav.home": "হোম", "nav.shop": "কালেকশন", "nav.new": "নতুন আগমন", "nav.offers": "অফার",
    "nav.about": "আমাদের সম্পর্কে", "nav.contact": "যোগাযোগ", "nav.guide": "সাইজ গাইড", "nav.delivery": "ডেলিভারি তথ্য",
    "nav.faq": "সাধারণ প্রশ্ন", "nav.reviews": "রিভিউ",
    "header.call": "কল করুন",
    "hero.kicker": "ক্লদিং স্টোর · প্রিয়াঙ্গন মার্কেট, সুনামগঞ্জ",
    "hero.title": "ফ্যাশন, যেন <em>আপনার জন্যই</em> তৈরি",
    "hero.sub": "চয়েস ফ্যাশন স্টুডিও নিয়ে এসেছে পুরুষ, নারী ও শিশুদের জন্য যত্নে বাছাই করা পোশাক — ইউনিক কালেকশন, ন্যায্য দাম আর হাসিমুখে সেবা।",
    "hero.cta.shop": "কালেকশন দেখুন", "hero.cta.visit": "দোকানে আসুন", "hero.cta.call": "কল করুন",
    "hero.trust1": "Google-এ ৫.০★ রেটিং", "hero.trust2": "প্রতিদিন মধ্যরাত পর্যন্ত খোলা", "hero.trust3": "ইউনিক, বাছাই করা আইটেম",
    "cat.title": "ক্যাটাগরি অনুযায়ী কিনুন", "cat.sub": "উৎসবের পাঞ্জাবি থেকে প্রতিদিনের প্রয়োজন — খুঁজে নিন আপনার স্টাইল।",
    "new.title": "নতুন কালেকশন", "new.sub": "এইমাত্র র‍্যাকে ওঠা একদম নতুন স্টাইল।",
    "best.title": "ক্রেতাদের প্রিয়", "best.sub": "যেসব পোশাকের জন্য সুনামগঞ্জ বারবার ফিরে আসে।",
    "shop.all": "সব দেখুন",
    "feat.title": "কেন আমাদের কাছ থেকে কিনবেন",
    "rev.title": "ক্রেতাদের ভালোবাসায়", "rev.sub": "আমাদের Google Business রিভিউ থেকে নেওয়া প্রকৃত মতামত।",
    "loc.title": "আমাদের দোকানে আসুন", "loc.sub": "প্রিয়াঙ্গন মার্কেটের একদম কেন্দ্রে আমাদের পাবেন — আপনার আসার অপেক্ষায় থাকব।",
    "foot.tag": "পুরো পরিবারের পোশাক ও ফ্যাশন — সুনামগঞ্জের প্রাণকেন্দ্রে।",
    "foot.shop": "কালেকশন", "foot.help": "সাহায্য", "foot.contact": "যোগাযোগ করুন",
    "foot.rights": "সর্বস্বত্ব সংরক্ষিত।",
    "foot.dev": "ডিজাইন ও ডেভেলপমেন্ট:",
    "cart.title": "আপনার ব্যাগ", "cart.empty": "ব্যাগ খালি", "cart.emptySub": "সুন্দর সুন্দর পোশাক আপনার জন্য অপেক্ষা করছে।",
    "cart.start": "কেনাকাটা শুরু করুন", "cart.total": "মোট", "cart.note": "অর্ডারের সময় ডেলিভারি চার্জ নিশ্চিত করা হবে। ক্যাশ অন ডেলিভারি বা দোকানে পেমেন্ট।",
    "cart.wa": "হোয়াটসঅ্যাপে অর্ডার করুন", "cart.call": "কল করে অর্ডার করুন", "cart.added": "ব্যাগে যোগ হয়েছে",
    "shop.title": "পুরো কালেকশন", "shop.sub": "আমাদের সব পোশাক এক জায়গায় — ক্যাটাগরি, দাম, সাইজ বা রঙ দিয়ে ফিল্টার করুন।",
    "shop.filters": "ফিল্টার", "shop.results": "টি পণ্য", "shop.sort": "সাজান",
    "sort.new": "নতুন আগে", "sort.plh": "দাম: কম → বেশি", "sort.phl": "দাম: বেশি → কম", "sort.name": "নাম A–Z",
    "filter.cat": "ক্যাটাগরি", "filter.price": "সর্বোচ্চ দাম", "filter.size": "সাইজ", "filter.clear": "সব মুছুন",
    "search.ph": "পাঞ্জাবি, শাড়ি, জিন্স খুঁজুন…", "search.hint": "জনপ্রিয়:", "search.none": "কোনো পণ্য পাওয়া যায়নি। অন্য কিছু লিখে দেখুন — অথবা কল করুন!",
    "pd.add": "ব্যাগে যোগ করুন", "pd.buy": "এখনই কিনুন", "pd.wa": "হোয়াটসঅ্যাপে জিজ্ঞেস করুন", "pd.call": "কল করে অর্ডার",
    "pd.size": "সাইজ বেছে নিন", "pd.color": "রঙ বেছে নিন", "pd.qty": "পরিমাণ", "pd.related": "আরও পছন্দ হতে পারে",
    "pd.desc": "পণ্যের বিবরণ", "pd.delivery": "ডেলিভারি ও এক্সচেঞ্জ", "pd.material": "কাপড়", "pd.care": "যত্ন",
    "pd.selectFirst": "আগে সাইজ ও রঙ বেছে নিন",
    "cta.title": "আজই খুঁজে নিন আপনার স্টাইল", "cta.sub": "প্রিয়াঙ্গন মার্কেটে আমাদের দোকানে আসুন অথবা কল করুন — পারফেক্ট পোশাক বেছে নিতে সাহায্য করব।",
    "bar.home": "হোম", "bar.shop": "শপ", "bar.call": "কল", "bar.wa": "হোয়াটসঅ্যাপ", "bar.bag": "ব্যাগ",
    "form.name": "আপনার নাম", "form.phone": "ফোন নম্বর", "form.msg": "আপনার বার্তা", "form.send": "হোয়াটসঅ্যাপে পাঠান",
    "form.sent": "হোয়াটসঅ্যাপ খুলছে — বার্তাটি পাঠানোর জন্য প্রস্তুত!",
    "common.viewProduct": "পণ্য দেখুন", "common.from": "শুরু", "common.sample": "নমুনা"
  }
};
let LANG = localStorage.getItem("cfs_lang") || "en";
function t(key) { return (I18N[LANG] && I18N[LANG][key]) || I18N.en[key] || key; }
function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.documentElement.lang = LANG === "bn" ? "bn" : "en";
  document.body.classList.toggle("bn", LANG === "bn");
  document.querySelectorAll(".lang-toggle button").forEach(b => b.classList.toggle("on", b.dataset.lang === LANG));
}
function setLang(l) { LANG = l; localStorage.setItem("cfs_lang", l); applyI18n(); }

/* ---------------- Cart store ---------------- */
const CART_KEY = "cfs_cart";
function getCart() { try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch (e) { return []; } }
function saveCart(c) { localStorage.setItem(CART_KEY, JSON.stringify(c)); updateCartUI(); }
function cartQty() { return getCart().reduce((s, i) => s + i.qty, 0); }
function cartTotal() { return getCart().reduce((s, i) => { const p = cfsFindProduct(i.id); return p ? s + cfsPrice(p) * i.qty : s; }, 0); }
function addToCart(id, size, color, qty) {
  qty = qty || 1;
  const c = getCart();
  const found = c.find(i => i.id === id && i.size === size && i.color === color);
  if (found) found.qty += qty; else c.push({ id, size, color, qty });
  saveCart(c);
  toast(t("cart.added"));
}
function setQty(idx, delta) { const c = getCart(); if (!c[idx]) return; c[idx].qty += delta; if (c[idx].qty <= 0) c.splice(idx, 1); saveCart(c); renderCartItems(); }
function removeItem(idx) { const c = getCart(); c.splice(idx, 1); saveCart(c); renderCartItems(); }

function updateCartUI() {
  const n = cartQty();
  document.querySelectorAll(".cart-count").forEach(el => { el.textContent = n; el.classList.toggle("show", n > 0); });
}

/* ---------------- Toast ---------------- */
function toast(msg) {
  let wrap = document.querySelector(".toast-wrap");
  if (!wrap) { wrap = document.createElement("div"); wrap.className = "toast-wrap"; document.body.appendChild(wrap); }
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = icon("check") + "<span>" + msg + "</span>";
  wrap.appendChild(el);
  setTimeout(() => { el.style.opacity = "0"; el.style.transition = "opacity .3s"; setTimeout(() => el.remove(), 320); }, 2400);
}

/* ---------------- WhatsApp helpers ---------------- */
function waLink(message) { return "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(message); }
function generalWa() {
  return waLink("Hello " + SITE.name + "! " + (LANG === "bn" ? "আমি আপনাদের কালেকশন সম্পর্কে জানতে চাই।" : "I would like to know more about your collection."));
}
function productWa(p, size, color) {
  const msg = "Hello " + SITE.name + "!\n" +
    (LANG === "bn" ? "আমি এই পণ্যটি সম্পর্কে জানতে চাই:" : "I am interested in this product:") + "\n\n" +
    "• " + p.name + (p.bn ? " (" + p.bn + ")" : "") +
    "\n  " + (LANG === "bn" ? "দাম" : "Price") + ": " + cfsBDT(cfsPrice(p)) +
    (size ? "\n  " + (LANG === "bn" ? "সাইজ" : "Size") + ": " + size : "") +
    (color ? "\n  " + (LANG === "bn" ? "রঙ" : "Colour") + ": " + color : "") +
    "\n\n" + (LANG === "bn" ? "স্টকে আছে কি?" : "Is it available in stock?");
  return waLink(msg);
}
function cartWa() {
  const items = getCart();
  if (!items.length) return generalWa();
  const L = LANG === "bn";
  let msg = "Hello " + SITE.name + "! 🛍️\n" + (L ? "আমি অর্ডার করতে চাই:" : "I would like to order:") + "\n\n";
  items.forEach((i, n) => {
    const p = cfsFindProduct(i.id); if (!p) return;
    msg += (n + 1) + ". " + p.name + "\n   " + (L ? "সাইজ" : "Size") + ": " + i.size + " | " + (L ? "রঙ" : "Colour") + ": " + i.color + " | " + (L ? "পরিমাণ" : "Qty") + ": " + i.qty + " — " + cfsBDT(cfsPrice(p) * i.qty) + "\n";
  });
  msg += "\n" + (L ? "মোট" : "Total") + ": " + cfsBDT(cartTotal()) + "\n";
  msg += (L ? "\nআমার নাম: \nঠিকানা: " : "\nMy name: \nDelivery address: ");
  return waLink(msg);
}

/* ---------------- Shared UI injection ---------------- */
function injectChrome() {
  const page = document.body.dataset.page || "";
  const starRow = "★★★★★";

  /* Announcement bar */
  const announce = document.createElement("div");
  announce.className = "announce";
  announce.innerHTML =
    '<div class="container">' +
    '<span class="item"><span class="stars">' + starRow + '</span> <b>&nbsp;5.0</b>&nbsp;· 14 Google reviews</span>' +
    '<span class="sep hide-sm">|</span>' +
    '<span class="item hide-sm">' + icon("clock") + " Open daily: " + SITE.hours + '</span>' +
    '<span class="sep hide-sm">|</span>' +
    '<a class="item" href="' + SITE.phoneHref + '">' + icon("phone") + " " + SITE.phoneDisplay + "</a>" +
    "</div>";
  document.body.prepend(announce);

  /* Header */
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML =
    '<div class="container header-inner">' +
    '<button class="icon-btn hamburger" id="menuBtn" aria-label="Menu">' + icon("menu") + "</button>" +
    '<a class="logo" href="index.html" aria-label="Choice Fashion Studio — Home">' +
    '<span class="logo-top">Choice <em>Fashion</em></span>' +
    '<span class="logo-sub">Studio · Sunamganj</span>' +
    "</a>" +
    '<nav class="main-nav" aria-label="Main">' +
    navLink("index.html", "nav.home", page === "home") +
    navLink("shop.html", "nav.shop", page === "shop") +
    navLink("shop.html?filter=new", "nav.new", page === "new") +
    navLink("offers.html", "nav.offers", page === "offers") +
    navLink("about.html", "nav.about", page === "about") +
    navLink("contact.html", "nav.contact", page === "contact") +
    "</nav>" +
    '<div class="header-actions">' +
    '<span class="lang-toggle"><button data-lang="en">EN</button><button data-lang="bn" class="bn">বাংলা</button></span>' +
    '<button class="icon-btn" id="searchBtn" aria-label="Search">' + icon("search") + "</button>" +
    '<a class="icon-btn header-call" href="' + SITE.phoneHref + '" aria-label="Call">' + icon("phone") + "</a>" +
    '<button class="icon-btn" id="cartBtn" aria-label="Bag">' + icon("cart") + '<span class="cart-count">0</span></button>' +
    "</div></div>";
  document.body.prepend(header);

  /* Mobile drawer */
  const scrim = document.createElement("div");
  scrim.className = "drawer-scrim";
  scrim.id = "drawerScrim";
  document.body.appendChild(scrim);

  const drawer = document.createElement("aside");
  drawer.className = "mobile-drawer";
  drawer.id = "mobileDrawer";
  drawer.innerHTML =
    '<div class="drawer-top"><a class="logo" href="index.html"><span class="logo-top">Choice <em>Fashion</em></span><span class="logo-sub">Studio · Sunamganj</span></a>' +
    '<button class="icon-btn" data-close-drawer aria-label="Close">' + icon("close") + "</button></div>" +
    "<nav>" +
    mLink("index.html", "nav.home") + mLink("shop.html", "nav.shop") + mLink("shop.html?filter=new", "nav.new") +
    mLink("offers.html", "nav.offers") + mLink("about.html", "nav.about") + mLink("reviews.html", "nav.reviews") +
    mLink("size-guide.html", "nav.guide") + mLink("delivery.html", "nav.delivery") + mLink("faq.html", "nav.faq") +
    mLink("contact.html", "nav.contact") +
    "</nav>" +
    '<div class="drawer-cta">' +
    '<a class="btn btn-primary" href="' + SITE.phoneHref + '">' + icon("phone") + " " + SITE.phoneDisplay + "</a>" +
    '<a class="btn btn-whatsapp" target="_blank" rel="noopener" href="' + generalWa() + '">' + icon("wa") + " WhatsApp</a>" +
    "</div>" +
    '<p class="drawer-note">' + icon("pin") + " " + SITE.addressShort + "<br>Open daily: " + SITE.hours + "</p>";
  document.body.appendChild(drawer);

  /* Search overlay */
  const so = document.createElement("div");
  so.className = "search-overlay";
  so.id = "searchOverlay";
  so.innerHTML =
    '<div class="container">' +
    '<div style="display:flex;align-items:center;gap:1rem">' +
    '<div class="search-box" style="flex:1">' + icon("search") +
    '<input id="searchInput" type="text" data-i18n-ph="search.ph" placeholder="Search panjabi, saree, jeans…" autocomplete="off">' +
    "</div>" +
    '<button class="icon-btn search-close" data-close-search aria-label="Close search">' + icon("close") + "</button>" +
    "</div>" +
    '<div class="search-hints"><span data-i18n="search.hint">Popular:</span>' +
    '<button class="chip" data-q="panjabi">Panjabi</button><button class="chip" data-q="saree">Saree</button>' +
    '<button class="chip" data-q="shirt">Shirt</button><button class="chip" data-q="kurti">Kurti</button>' +
    '<button class="chip" data-q="jeans">Jeans</button></div>' +
    '<div class="search-results" id="searchResults"></div>' +
    "</div>";
  document.body.appendChild(so);

  /* Cart drawer */
  const cd = document.createElement("aside");
  cd.className = "cart-drawer";
  cd.id = "cartDrawer";
  cd.innerHTML =
    '<div class="cart-head"><h3>' + icon("cart") + ' <span data-i18n="cart.title">Your Bag</span> <span class="ct" id="cartHeadCount">0</span></h3>' +
    '<button class="icon-btn" data-close-cart aria-label="Close bag">' + icon("close") + "</button></div>" +
    '<div class="cart-body" id="cartBody"></div>' +
    '<div class="cart-foot" id="cartFoot"></div>';
  document.body.appendChild(cd);

  /* Mobile bottom bar */
  const mb = document.createElement("nav");
  mb.className = "mobile-bar";
  mb.innerHTML =
    '<div class="mb-grid">' +
    '<a href="index.html" class="' + (page === "home" ? "active" : "") + '">' + icon("home") + '<span data-i18n="bar.home">Home</span></a>' +
    '<a href="shop.html" class="' + (page === "shop" ? "active" : "") + '">' + icon("shirt") + '<span data-i18n="bar.shop">Shop</span></a>' +
    '<a href="' + SITE.phoneHref + '">' + icon("phone") + '<span data-i18n="bar.call">Call</span></a>' +
    '<a href="' + generalWa() + '" target="_blank" rel="noopener" class="mb-wa">' + icon("wa") + '<span data-i18n="bar.wa">WhatsApp</span></a>' +
    '<button id="cartBtnM">' + icon("cart") + '<span data-i18n="bar.bag">Bag</span><span class="cart-count">0</span></button>' +
    "</div>";
  document.body.appendChild(mb);

  /* Footer */
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML =
    '<div class="container footer-grid">' +
    '<div class="f-col"><a class="logo f-logo" href="index.html"><span class="logo-top">Choice <em>Fashion</em></span><span class="logo-sub">Studio · Sunamganj</span></a>' +
    '<p class="f-about" data-i18n="foot.tag">Clothing & fashion for the whole family — at the heart of Sunamganj.</p>' +
    '<p class="f-tag bn">আপনার পছন্দ, আপনার স্টাইল</p></div>' +
    '<div class="f-col"><h4 data-i18n="foot.shop">Shop</h4><ul>' +
    fLink("shop.html", "All Products") + fLink("shop.html?cat=men", "Men's Fashion") + fLink("shop.html?cat=women", "Women's Fashion") +
    fLink("shop.html?cat=kids", "Kids") + fLink("shop.html?filter=new", "New Arrivals") + fLink("shop.html?filter=sale", "On Sale") + fLink("offers.html", "Offers") +
    "</ul></div>" +
    '<div class="f-col"><h4 data-i18n="foot.help">Help</h4><ul>' +
    fLink("size-guide.html", "Size Guide") + fLink("delivery.html", "Delivery Information") + fLink("faq.html", "FAQ") +
    fLink("reviews.html", "Customer Reviews") + fLink("about.html", "About Us") + fLink("contact.html", "Contact") +
    "</ul></div>" +
    '<div class="f-col"><h4 data-i18n="foot.contact">Get in Touch</h4><ul class="f-contact">' +
    "<li>" + icon("pin") + "<span>" + SITE.address + "</span></li>" +
    "<li>" + icon("phone") + '<a href="' + SITE.phoneHref + '">' + SITE.phoneDisplay + "</a></li>" +
    "<li>" + icon("clock") + "<span>Open daily: " + SITE.hours + "</span></li>" +
    "</ul>" +
    '<div style="display:flex;gap:.6rem;margin-top:1.2rem">' +
    '<a class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener" href="' + generalWa() + '">' + icon("wa") + " WhatsApp</a>" +
    '<a class="btn btn-light btn-sm" href="' + SITE.mapsDirections + '" target="_blank" rel="noopener">' + icon("pin") + " Directions</a>" +
    "</div></div>" +
    "</div>" +
    '<div class="footer-credit"><div class="container">' +
    "<p>© " + new Date().getFullYear() + " " + SITE.name + ", Sunamganj. <span data-i18n='foot.rights'>All rights reserved.</span></p>" +
    '<p class="dev-credit">' + icon("heart") + ' <span data-i18n="foot.dev">Designed &amp; developed by</span> ' +
    '<a href="' + SITE.developer.site + '" target="_blank" rel="noopener">' + SITE.developer.name + " — " + SITE.developer.brand + " " + icon("ext") + "</a></p>" +
    "</div></div>";
  document.body.appendChild(footer);

  wireChromeEvents();
  applyI18n();
  updateCartUI();
  renderCartItems();
}

function navLink(href, key, active) { return '<a href="' + href + '"' + (active ? ' class="active"' : "") + ' data-i18n="' + key + '"></a>'; }
function mLink(href, key) { return '<a href="' + href + '" data-i18n="' + key + '"></a>'; }
function fLink(href, label) { return '<li><a href="' + href + '">' + label + "</a></li>"; }

function wireChromeEvents() {
  const drawer = document.getElementById("mobileDrawer");
  const scrim = document.getElementById("drawerScrim");
  const cartD = document.getElementById("cartDrawer");
  const so = document.getElementById("searchOverlay");

  function openDrawer() { drawer.classList.add("open"); scrim.classList.add("open"); document.body.classList.add("no-scroll"); }
  function closeAll() {
    drawer.classList.remove("open"); cartD.classList.remove("open"); scrim.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }
  document.getElementById("menuBtn").addEventListener("click", openDrawer);
  scrim.addEventListener("click", closeAll);
  drawer.querySelectorAll("a, [data-close-drawer]").forEach(el => el.addEventListener("click", closeAll));

  function openCart(e) { if (e) e.preventDefault(); cartD.classList.add("open"); scrim.classList.add("open"); document.body.classList.add("no-scroll"); renderCartItems(); }
  document.getElementById("cartBtn").addEventListener("click", openCart);
  document.getElementById("cartBtnM").addEventListener("click", openCart);
  cartD.querySelector("[data-close-cart]").addEventListener("click", closeAll);

  const searchInput = document.getElementById("searchInput");
  function openSearch(e) { if (e) e.preventDefault(); so.classList.add("open"); setTimeout(() => searchInput.focus(), 60); renderSearch(""); }
  document.getElementById("searchBtn").addEventListener("click", openSearch);
  so.querySelector("[data-close-search]").addEventListener("click", () => so.classList.remove("open"));
  document.addEventListener("keydown", e => { if (e.key === "Escape") { so.classList.remove("open"); closeAll(); } });
  searchInput.addEventListener("input", () => renderSearch(searchInput.value));
  searchInput.addEventListener("keydown", e => {
    if (e.key === "Enter") { window.location.href = "shop.html?q=" + encodeURIComponent(searchInput.value.trim()); }
  });
  so.querySelectorAll(".chip").forEach(ch => ch.addEventListener("click", () => { searchInput.value = ch.dataset.q; renderSearch(ch.dataset.q); }));

  document.querySelectorAll(".lang-toggle button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

  /* Shadow on scroll */
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 8), { passive: true });
}

/* ---------------- Search ---------------- */
function searchProducts(q) {
  q = (q || "").trim().toLowerCase();
  if (!q) return [];
  return PRODUCTS.filter(p =>
    (p.name + " " + (p.bn || "") + " " + p.sub + " " + p.cat + " " + p.colors.join(" ")).toLowerCase().includes(q)
  ).slice(0, 8);
}
function renderSearch(q) {
  const box = document.getElementById("searchResults");
  if (!box) return;
  if (!q.trim()) { box.innerHTML = ""; return; }
  const hits = searchProducts(q);
  if (!hits.length) { box.innerHTML = '<p class="search-empty" data-i18n="search.none">' + t("search.none") + "</p>"; return; }
  box.innerHTML = hits.map(p =>
    '<a class="search-hit" href="product.html?id=' + p.id + '">' +
    '<img src="' + p.img + '" alt="' + p.name + '" onerror="this.src=FALLBACK_IMG">' +
    '<span><span class="hit-name">' + p.name + '</span><br><span class="hit-meta">' + catLabel(p.cat) + " · " + p.sub + "</span></span>" +
    '<span class="hit-price">' + cfsBDT(cfsPrice(p)) + "</span></a>"
  ).join("");
}
function catLabel(id) { const c = CATEGORIES.find(c => c.id === id); return c ? c.label : id; }
function catLabelBn(id) { const c = CATEGORIES.find(c => c.id === id); return (LANG === "bn" && c) ? c.bn : catLabel(id); }

/* ---------------- Product card ---------------- */
function productCard(p) {
  const onSale = p.sale && p.sale < p.price;
  let badges = "";
  if (p.badge === "new") badges += '<span class="badge new">New</span>';
  if (p.badge === "bestseller") badges += '<span class="badge bestseller">★ Popular</span>';
  if (onSale) badges += '<span class="badge sale">-' + Math.round((1 - p.sale / p.price) * 100) + "%</span>";
  if (SITE.demoCatalog) badges += '<span class="badge sample">' + t("common.sample") + "</span>";
  const price = onSale
    ? '<span class="was">' + cfsBDT(p.price) + '</span><span class="now-sale">' + cfsBDT(p.sale) + "</span>"
    : cfsBDT(p.price);
  const swatches = p.colors.slice(0, 4).map(c => '<span class="swatch" title="' + c + '" style="background:' + (COLOR_HEX[c] || "#ddd") + '"></span>').join("");
  return (
    '<article class="product-card reveal">' +
    '<div class="pc-media-wrap">' +
    '<a class="pc-media" href="product.html?id=' + p.id + '" aria-label="' + p.name + '">' +
    '<img loading="lazy" src="' + p.img + '" alt="' + p.name + ' — Choice Fashion Studio Sunamganj" onerror="this.onerror=null;this.src=FALLBACK_IMG">' +
    '<span class="pc-badges">' + badges + "</span></a>" +
    '<span class="pc-quick"><a class="btn btn-primary btn-sm" href="product.html?id=' + p.id + '">' + icon("cart") + " " + t("common.viewProduct") + "</a></span>" +
    "</div>" +
    '<div class="pc-info"><span class="pc-cat">' + catLabel(p.cat) + " · " + p.sub + "</span>" +
    '<h3 class="pc-name"><a href="product.html?id=' + p.id + '">' + p.name + "</a></h3>" +
    '<div class="pc-meta"><span class="pc-price">' + price + '</span><span class="pc-swatches">' + swatches + "</span></div>" +
    "</div></article>"
  );
}
function mountGrid(selector, list) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = list.map(productCard).join("");
  observeReveals();
}

/* ---------------- Cart drawer rendering ---------------- */
function renderCartItems() {
  const body = document.getElementById("cartBody");
  const foot = document.getElementById("cartFoot");
  if (!body || !foot) return;
  const items = getCart();
  document.getElementById("cartHeadCount").textContent = cartQty();
  if (!items.length) {
    body.innerHTML =
      '<div class="cart-empty">' + icon("cart") + "<b>" + t("cart.empty") + "</b>" +
      "<p>" + t("cart.emptySub") + '</p><a class="btn btn-primary btn-sm" href="shop.html">' + t("cart.start") + "</a></div>";
    foot.innerHTML = "";
    return;
  }
  body.innerHTML = items.map((i, idx) => {
    const p = cfsFindProduct(i.id); if (!p) return "";
    return (
      '<div class="cart-item"><img src="' + p.img + '" alt="' + p.name + '" onerror="this.src=FALLBACK_IMG">' +
      '<div class="ci-info"><div class="ci-name">' + p.name + "</div>" +
      '<div class="ci-variant">' + i.size + " · " + i.color + "</div>" +
      '<div class="ci-row">' +
      '<span class="qty-stepper"><button onclick="setQty(' + idx + ',-1)" aria-label="Decrease">−</button><span>' + i.qty + '</span><button onclick="setQty(' + idx + ',1)" aria-label="Increase">+</button></span>' +
      '<span class="ci-price">' + cfsBDT(cfsPrice(p) * i.qty) + "</span></div>" +
      '<button class="ci-remove" onclick="removeItem(' + idx + ')">Remove</button>' +
      "</div></div>"
    );
  }).join("");
  foot.innerHTML =
    '<div class="cart-total-row"><span>' + t("cart.total") + "</span><span>" + cfsBDT(cartTotal()) + "</span></div>" +
    '<p class="cart-note">' + t("cart.note") + "</p>" +
    '<a class="btn btn-whatsapp" target="_blank" rel="noopener" href="' + cartWa() + '">' + icon("wa") + " " + t("cart.wa") + "</a>" +
    '<a class="btn btn-outline" href="' + SITE.phoneHref + '">' + icon("phone") + " " + t("cart.call") + "</a>";
}

/* ---------------- Reveal on scroll ---------------- */
let revealObserver = null;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); } });
    }, { threshold: 0.08 });
  }
  document.querySelectorAll(".reveal:not(.in)").forEach(el => revealObserver.observe(el));
}

/* ---------------- SHOP PAGE ---------------- */
function initShop() {
  const grid = document.getElementById("shop-grid");
  if (!grid) return;

  const params = new URLSearchParams(location.search);
  const state = {
    q: params.get("q") || "",
    cat: params.get("cat") || "",
    filter: params.get("filter") || "",   // new | sale | popular
    maxPrice: 2500,
    size: "",
    sort: "new"
  };

  const chipsWrap = document.getElementById("shop-chips");
  const countEl = document.getElementById("result-count");
  const sortSel = document.getElementById("sort-select");
  const priceInput = document.getElementById("price-range");
  const priceVal = document.getElementById("price-val");

  /* Build category filter list */
  const catList = document.getElementById("filter-cats");
  if (catList) {
    catList.innerHTML = ['<label class="f-check"><input type="radio" name="fcat" value=""' + (state.cat ? "" : " checked") + '> <span data-i18n="shop.all">' + t("shop.all") + '</span><span class="f-count">' + PRODUCTS.length + "</span></label>"]
      .concat(CATEGORIES.map(c =>
        '<label class="f-check"><input type="radio" name="fcat" value="' + c.id + '"' + (state.cat === c.id ? " checked" : "") + "> " + c.label +
        '<span class="f-count">' + cfsByCat(c.id).length + "</span></label>"
      )).join("");
    catList.querySelectorAll("input").forEach(r => r.addEventListener("change", () => { state.cat = r.value; state.filter = ""; render(); }));
  }

  /* Size filter */
  const allSizes = [...new Set(PRODUCTS.flatMap(p => p.sizes))];
  const sizeList = document.getElementById("filter-sizes");
  if (sizeList) {
    sizeList.innerHTML = allSizes.map(s => '<label class="f-check"><input type="radio" name="fsize" value="' + s + '"> ' + s + "</label>").join("");
    sizeList.querySelectorAll("input").forEach(r => r.addEventListener("change", () => { state.size = r.value; render(); }));
  }

  if (priceInput) {
    priceInput.max = 2500; priceInput.min = 300; priceInput.step = 50; priceInput.value = state.maxPrice;
    priceInput.addEventListener("input", () => { state.maxPrice = +priceInput.value; priceVal.textContent = "≤ " + cfsBDT(state.maxPrice); render(); });
  }
  if (sortSel) sortSel.addEventListener("change", () => { state.sort = sortSel.value; render(); });

  const clearBtn = document.getElementById("filter-clear");
  if (clearBtn) clearBtn.addEventListener("click", () => {
    state.q = ""; state.cat = ""; state.filter = ""; state.maxPrice = 2500; state.size = ""; state.sort = "new";
    if (sortSel) sortSel.value = "new";
    if (priceInput) { priceInput.value = 2500; priceVal.textContent = "≤ " + cfsBDT(2500); }
    document.querySelectorAll('#filter-cats input, #filter-sizes input').forEach(i => i.checked = false);
    const allCat = document.querySelector('#filter-cats input[value=""]'); if (allCat) allCat.checked = true;
    history.replaceState(null, "", "shop.html");
    render();
  });

  /* Mobile filter sheet */
  const panel = document.getElementById("filter-panel");
  const fToggle = document.getElementById("filter-toggle");
  if (fToggle && panel) {
    fToggle.addEventListener("click", () => panel.classList.add("open"));
    panel.querySelectorAll("[data-close-filter]").forEach(b => b.addEventListener("click", () => panel.classList.remove("open")));
  }

  function filtered() {
    let list = [...PRODUCTS];
    if (state.filter === "new") list = list.filter(p => p.badge === "new");
    if (state.filter === "sale") list = list.filter(p => p.sale && p.sale < p.price);
    if (state.filter === "popular") list = list.filter(p => p.badge === "bestseller");
    if (state.cat) list = list.filter(p => p.cat === state.cat);
    if (state.q) { const q = state.q.toLowerCase(); list = list.filter(p => (p.name + " " + (p.bn || "") + " " + p.sub + " " + p.cat + " " + p.colors.join(" ")).toLowerCase().includes(q)); }
    list = list.filter(p => cfsPrice(p) <= state.maxPrice);
    if (state.size) list = list.filter(p => p.sizes.includes(state.size));
    if (state.sort === "plh") list.sort((a, b) => cfsPrice(a) - cfsPrice(b));
    else if (state.sort === "phl") list.sort((a, b) => cfsPrice(b) - cfsPrice(a));
    else if (state.sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    else list.sort((a, b) => (b.badge === "new") - (a.badge === "new"));
    return list;
  }

  function render() {
    const list = filtered();
    grid.innerHTML = list.length
      ? list.map(productCard).join("")
      : '<div class="empty-state" style="grid-column:1/-1">' + icon("search") + "<b>" + t("search.none") + "</b></div>";
    if (countEl) countEl.textContent = list.length + " " + t("shop.results");
    renderChipsDyn();
    observeReveals();
  }
  function renderChipsDyn() {
    if (!chipsWrap) return;
    const arr = [];
    if (state.q) arr.push({ l: "“" + state.q + "”", f: () => { state.q = ""; } });
    if (state.cat) arr.push({ l: catLabel(state.cat), f: () => { state.cat = ""; const r = document.querySelector('#filter-cats input[value=""]'); if (r) r.checked = true; } });
    if (state.filter) arr.push({ l: state.filter === "new" ? t("nav.new") : state.filter === "sale" ? "Sale" : "Popular", f: () => { state.filter = ""; } });
    if (state.size) arr.push({ l: "Size " + state.size, f: () => { state.size = ""; document.querySelectorAll('#filter-sizes input').forEach(i => i.checked = false); } });
    if (state.maxPrice < 2500) arr.push({ l: "≤ " + cfsBDT(state.maxPrice), f: () => { state.maxPrice = 2500; if (priceInput) { priceInput.value = 2500; priceVal.textContent = "≤ " + cfsBDT(2500); } } });
    chipsWrap.innerHTML = arr.map((c, i) => '<button class="chip on" data-i="' + i + '">' + c.l + " ✕</button>").join("");
    chipsWrap.querySelectorAll("button").forEach(b => b.addEventListener("click", () => { arr[+b.dataset.i].f(); render(); }));
  }

  /* Search box inside shop page */
  const shopSearch = document.getElementById("shop-search");
  if (shopSearch) {
    shopSearch.value = state.q;
    shopSearch.addEventListener("input", () => { state.q = shopSearch.value; render(); });
  }

  render();
}

/* ---------------- PRODUCT PAGE ---------------- */
function initProduct() {
  const root = document.getElementById("product-detail");
  if (!root) return;
  const id = new URLSearchParams(location.search).get("id");
  const p = cfsFindProduct(id) || PRODUCTS[0];
  document.title = p.name + " | Choice Fashion Studio Sunamganj";

  let selSize = null, selColor = null, qty = 1;
  const onSale = p.sale && p.sale < p.price;

  let badges = "";
  if (p.badge === "new") badges += '<span class="badge new">New</span>';
  if (p.badge === "bestseller") badges += '<span class="badge bestseller">★ Popular</span>';
  if (onSale) badges += '<span class="badge sale">-' + Math.round((1 - p.sale / p.price) * 100) + "% OFF</span>";
  if (SITE.demoCatalog) badges += '<span class="badge sample">' + t("common.sample") + " photo</span>";

  const priceHtml = onSale
    ? '<span class="pd-price sale"><span class="was">' + cfsBDT(p.price) + "</span>" + cfsBDT(p.sale) + '</span><span class="save-pill">Save ' + cfsBDT(p.price - p.sale) + "</span>"
    : '<span class="pd-price">' + cfsBDT(p.price) + "</span>";

  root.innerHTML =
    '<div class="pd-grid">' +
    '<div class="pd-media"><div class="pd-img-wrap"><img id="pd-img" src="' + p.img + '" alt="' + p.name + '" onerror="this.src=FALLBACK_IMG">' +
    '<span class="pd-badges">' + badges + "</span></div></div>" +
    '<div class="pd-info">' +
    '<span class="pd-cat">' + catLabel(p.cat) + " · " + p.sub + "</span>" +
    "<h1>" + p.name + '</h1><p class="pd-bn">' + (p.bn || "") + "</p>" +
    '<div class="pd-price-row">' + priceHtml + "</div>" +
    '<p class="pd-note">' + t("cart.note") + "</p>" +
    '<div class="pd-block"><div class="pb-label"><span>' + t("pd.size") + '</span><a href="size-guide.html">' + t("nav.guide") + "</a></div>" +
    '<div class="opt-row" id="size-opts">' + p.sizes.map(s => '<button class="size-opt" data-v="' + s + '">' + s + "</button>").join("") + "</div></div>" +
    '<div class="pd-block"><div class="pb-label"><span>' + t("pd.color") + "</span></div>" +
    '<div class="opt-row" id="color-opts">' + p.colors.map(c => '<button class="color-opt" data-v="' + c + '"><span class="dot" style="background:' + (COLOR_HEX[c] || "#ddd") + '"></span>' + c + "</button>").join("") + "</div></div>" +
    '<div class="pd-actions">' +
    '<span class="qty-stepper" style="height:48px"><button id="q-minus" style="height:46px;width:40px">−</button><span id="q-val" style="min-width:36px">1</span><button id="q-plus" style="height:46px;width:40px">+</button></span>' +
    '<button class="btn btn-primary" id="add-cart" style="height:48px">' + icon("cart") + " " + t("pd.add") + "</button>" +
    '<div class="row2">' +
    '<button class="btn btn-outline" id="buy-now">' + icon("tag") + " " + t("pd.buy") + "</button>" +
    '<a class="btn btn-whatsapp" id="wa-ask" target="_blank" rel="noopener" href="' + productWa(p, null, null) + '">' + icon("wa") + " " + t("pd.wa") + "</a>" +
    "</div></div>" +
    '<div class="pd-meta-table">' +
    '<div class="row"><span class="k">' + t("pd.material") + "</span><span class=\"v\">" + p.material + "</span></div>" +
    '<div class="row"><span class="k">' + t("pd.care") + "</span><span class=\"v\">" + p.care + "</span></div>" +
    '<div class="row"><span class="k">SKU</span><span class="v">CFS-' + p.id.toUpperCase().replace(/-/g, "").slice(0, 10) + "</span></div>" +
    "</div>" +
    '<div class="pd-acc">' +
    '<details class="acc" open><summary>' + t("pd.desc") + '</summary><div class="acc-body">' + p.desc + "</div></details>" +
    '<details class="acc"><summary>' + t("pd.delivery") + '</summary><div class="acc-body">' +
    (LANG === "bn" ? "সুনামগঞ্জ শহরে হোম ডেলিভারি হতে পারে — কল বা হোয়াটসঅ্যাপে নিশ্চিত করুন। সাইজ বদলের জন্য দোকানে আসুন। বিস্তারিত: " : "Home delivery may be available within Sunamganj town — please call or WhatsApp to confirm. For size exchange, visit the store. Details: ") +
    '<a href="delivery.html" style="color:var(--accent);text-decoration:underline">' + t("nav.delivery") + "</a></div></details>" +
    "</div>" +
    "</div></div>";

  /* selectors */
  root.querySelectorAll("#size-opts .size-opt").forEach(b => b.addEventListener("click", () => {
    root.querySelectorAll("#size-opts .size-opt").forEach(x => x.classList.remove("on"));
    b.classList.add("on"); selSize = b.dataset.v; syncWa();
  }));
  root.querySelectorAll("#color-opts .color-opt").forEach(b => b.addEventListener("click", () => {
    root.querySelectorAll("#color-opts .color-opt").forEach(x => x.classList.remove("on"));
    b.classList.add("on"); selColor = b.dataset.v; syncWa();
  }));
  function syncWa() { document.getElementById("wa-ask").href = productWa(p, selSize, selColor); }
  const qv = document.getElementById("q-val");
  document.getElementById("q-minus").addEventListener("click", () => { qty = Math.max(1, qty - 1); qv.textContent = qty; });
  document.getElementById("q-plus").addEventListener("click", () => { qty = Math.min(9, qty + 1); qv.textContent = qty; });
  function needSel() { if (p.sizes.length > 1 && !selSize) { toast(t("pd.selectFirst")); return true; } if (!selColor && p.colors.length > 1) { toast(t("pd.selectFirst")); return true; } return false; }
  document.getElementById("add-cart").addEventListener("click", () => {
    if (needSel()) return;
    addToCart(p.id, selSize || p.sizes[0], selColor || p.colors[0], qty);
    document.getElementById("cartBtn").click();
  });
  document.getElementById("buy-now").addEventListener("click", () => {
    if (needSel()) return;
    addToCart(p.id, selSize || p.sizes[0], selColor || p.colors[0], qty);
    window.open(cartWa(), "_blank");
  });

  /* Product JSON-LD */
  const ld = {
    "@context": "https://schema.org", "@type": "Product",
    name: p.name, image: SITE.baseUrl + "/" + p.img, description: p.desc, sku: "CFS-" + p.id,
    brand: { "@type": "Brand", name: SITE.name },
    offers: { "@type": "Offer", priceCurrency: "BDT", price: cfsPrice(p), availability: "https://schema.org/InStock" }
  };
  const s = document.createElement("script"); s.type = "application/ld+json"; s.textContent = JSON.stringify(ld); document.head.appendChild(s);

  /* related */
  const rel = PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);
  mountGrid("#related-grid", rel.length ? rel : PRODUCTS.filter(x => x.id !== p.id).slice(0, 4));
}

/* ---------------- CONTACT FORM ---------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.querySelector("#cf-name").value.trim();
    const phone = form.querySelector("#cf-phone").value.trim();
    const msg = form.querySelector("#cf-msg").value.trim();
    const text = "Hello " + SITE.name + "!\n\n" + (LANG === "bn" ? "নাম" : "Name") + ": " + name + "\n" +
      (LANG === "bn" ? "ফোন" : "Phone") + ": " + phone + "\n\n" + (LANG === "bn" ? "বার্তা" : "Message") + ":\n" + msg;
    window.open(waLink(text), "_blank");
    toast(t("form.sent"));
  });
}

/* ---------------- LocalBusiness schema ---------------- */
function injectSchema() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: SITE.name,
    description: "Choice Fashion Studio — clothing store at Nil Akash Plaza, Priyangon Market, Sunamganj. Fashion for men, women and kids.",
    telephone: "+880 1618-006268",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nil Akash Plaza, Priyangon Market",
      addressLocality: "Sunamganj",
      postalCode: "3000",
      addressCountry: "BD"
    },
    geo: { "@type": "GeoCoordinates", latitude: 25.0658, longitude: 91.4050 },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00", closes: "00:00"
    }],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "14" },
    priceRange: "৳৳",
    url: SITE.baseUrl
  };
  const s = document.createElement("script"); s.type = "application/ld+json"; s.textContent = JSON.stringify(ld); document.head.appendChild(s);
}

/* ---------------- Boot ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  injectChrome();
  injectSchema();
  initShop();
  initProduct();
  initContactForm();
  observeReveals();

  /* Home page dynamic mounts */
  mountGrid("#home-new", cfsNew().slice(0, 4));
  mountGrid("#home-best", (cfsBestsellers().concat(cfsOnSale()).concat(PRODUCTS.filter(p => !p.badge && !(p.sale && p.sale < p.price)))).slice(0, 4));

  /* generic year spans */
  document.querySelectorAll(".js-year").forEach(el => el.textContent = new Date().getFullYear());
});
