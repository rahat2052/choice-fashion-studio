/* ============================================================
   Choice Fashion Studio — Sunamganj
   Site configuration + product catalog
   ------------------------------------------------------------
   ⚠️  DEMO CATALOG: The products & prices below are SAMPLES for
   preview purposes only. They are NOT confirmed store inventory.
   Replace this file's PRODUCTS array with the real catalog
   (names, prices, sizes, photos) confirmed by the shop, then set
   SITE.demoCatalog = false to remove all "Sample" labels.
   ------------------------------------------------------------
   VERIFIED FACTS (from Google business listing, 11 Aug 2026):
   - Name: Choice Fashion Studio
   - Type: Clothing store
   - Address: Nil Akash Plaza, Priyangon Market, Sunamganj 3000
   - Phone: +880 1618-006268
   - Rating: 5.0/5 (14 reviews)
   - Hours: 10:00 – 00:00, every day
   ============================================================ */

const SITE = {
  name: "Choice Fashion Studio",
  tagline: "আপনার পছন্দ, আপনার স্টাইল",
  taglineEn: "Your choice, your style",
  phoneDisplay: "+880 1618-006268",
  phoneHref: "tel:+8801618006268",
  whatsapp: "8801618006268",
  address: "Nil Akash Plaza, Priyangon Market, Sunamganj 3000, Bangladesh",
  addressShort: "Nil Akash Plaza, Priyangon Market, Sunamganj",
  hours: "10:00 AM – 12:00 Midnight",
  hoursNote: "Open every day of the week",
  rating: "5.0",
  reviewCount: 14,
  mapsQuery: "Choice Fashion Studio, Nil Akash Plaza, Priyangon Market, Sunamganj 3000, Bangladesh",
  mapsEmbed:
    "https://www.google.com/maps?q=Choice+Fashion+Studio,+Nil+Akash+Plaza,+Priyangon+Market,+Sunamganj+3000,+Bangladesh&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Choice+Fashion+Studio,+Nil+Akash+Plaza,+Priyangon+Market,+Sunamganj+3000,+Bangladesh",
  mapsShare:
    "https://www.google.com/maps/search/?api=1&query=Choice+Fashion+Studio,+Nil+Akash+Plaza,+Priyangon+Market,+Sunamganj+3000",
  baseUrl: "https://choice-fashion-studio.vercel.app",
  demoCatalog: true, // set false once the real catalog is loaded
  developer: {
    name: "Rahat Ahmed",
    nameBn: "রাহাত আহমেদ",
    site: "https://www.rahatahmed.site/en",
    brand: "RahatVerse"
  }
};

/* Color swatch map used by product cards / product page */
const COLOR_HEX = {
  "Cream": "#efe6d2", "White": "#ffffff", "Navy": "#1f2c4e", "Black": "#191919",
  "Sky Blue": "#a9cdea", "Olive": "#6b7048", "Maroon": "#7c2231", "Indigo": "#2e3f6b",
  "Charcoal": "#3c4043", "Rose": "#e7b8b3", "Teal": "#1f6f6b", "Red": "#b03030",
  "Gold": "#c9a13b", "Mint": "#b8dcc8", "Dusty Rose": "#d8a7a7", "Pink": "#e8a8c4",
  "Purple": "#8d6bb3", "Brown": "#7a4b2b", "Grey": "#9a9a9a", "Blue": "#3b6fb3"
};

const CATEGORIES = [
  { id: "men",        label: "Men's Fashion",  bn: "পুরুষদের ফ্যাশন", img: "assets/img/products/embroidered-panjabi.jpg", blurb: "Panjabi, shirts, t-shirts, jeans & more" },
  { id: "women",      label: "Women's Fashion", bn: "মহিলাদের ফ্যাশন", img: "assets/img/products/silk-saree.svg",          blurb: "Three-piece, saree, kurti & hijab" },
  { id: "kids",       label: "Kids",            bn: "বাচ্চাদের",      img: "assets/img/products/frock.svg",               blurb: "Boys' & girls' festive and daily wear" },
  { id: "accessories",label: "Accessories",     bn: "অ্যাকসেসরিজ",    img: "assets/img/products/belt.svg",                blurb: "Belts, caps & finishing touches" }
];

const PRODUCTS = [
  /* ---------------- MEN ---------------- */
  {
    id: "classic-cotton-panjabi",
    name: "Classic Cotton Panjabi",
    bn: "ক্লাসিক কটন পাঞ্জাবি",
    cat: "men", sub: "Panjabi",
    price: 950, sale: null,
    colors: ["Cream", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    img: "assets/img/products/classic-panjabi.jpg",
    material: "100% breathable cotton",
    badge: "new",
    desc: "A clean, comfortable cotton panjabi with a neat band collar — perfect for Jummah, family occasions and festive days.",
    care: "Gentle machine wash. Warm iron."
  },
  {
    id: "premium-embroidered-panjabi",
    name: "Premium Embroidered Panjabi",
    bn: "প্রিমিয়াম এমব্রয়ডারি পাঞ্জাবি",
    cat: "men", sub: "Panjabi",
    price: 1450, sale: null,
    colors: ["Navy", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    img: "assets/img/products/embroidered-panjabi.jpg",
    material: "Cotton blend with thread embroidery",
    badge: "new",
    desc: "Rich festive panjabi with elegant chest embroidery. A standout piece for Eid, weddings and special evenings.",
    care: "Hand wash recommended. Dry in shade."
  },
  {
    id: "oxford-casual-shirt",
    name: "Oxford Casual Shirt",
    bn: "অক্সফোর্ড ক্যাজুয়াল শার্ট",
    cat: "men", sub: "Shirt",
    price: 850, sale: 750,
    colors: ["Sky Blue", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    img: "assets/img/products/oxford-shirt.jpg",
    material: "Oxford weave cotton",
    badge: null,
    desc: "A wardrobe essential — crisp yet relaxed oxford shirt that works tucked or untucked, office or outing.",
    care: "Machine wash cold. Tumble dry low."
  },
  {
    id: "slim-check-shirt",
    name: "Slim-Fit Check Shirt",
    bn: "স্লিম-ফিট চেক শার্ট",
    cat: "men", sub: "Shirt",
    price: 890, sale: null,
    colors: ["Blue", "Grey"],
    sizes: ["M", "L", "XL", "XXL"],
    img: "assets/img/products/check-shirt.jpg",
    material: "Brushed cotton flannel",
    badge: null,
    desc: "Smart check pattern in a modern slim cut. Soft brushed fabric keeps it comfortable all day long.",
    care: "Machine wash. Warm iron."
  },
  {
    id: "essential-cotton-tshirt",
    name: "Essential Round-Neck T-Shirt",
    bn: "এসেনশিয়াল রাউন্ড-নেক টি-শার্ট",
    cat: "men", sub: "T-shirt",
    price: 450, sale: null,
    colors: ["Olive", "Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    img: "assets/img/products/tshirt.jpg",
    material: "180 GSM single-jersey cotton",
    badge: null,
    desc: "Everyday soft cotton tee with a clean round neck. Stock up on the basics that go with everything.",
    care: "Machine wash cold."
  },
  {
    id: "classic-polo-shirt",
    name: "Classic Polo Shirt",
    bn: "ক্লাসিক পোলো শার্ট",
    cat: "men", sub: "Polo",
    price: 650, sale: 550,
    colors: ["Maroon", "Navy"],
    sizes: ["M", "L", "XL", "XXL"],
    img: "assets/img/products/polo.jpg",
    material: "Piqué knit cotton",
    badge: null,
    desc: "Timeless piqué polo with a smart collar — dressed-up comfort for college, office or weekend adda.",
    care: "Machine wash. Do not bleach."
  },
  {
    id: "stretch-denim-jeans",
    name: "Stretch Denim Jeans",
    bn: "স্ট্রেচ ডেনিম জিন্স",
    cat: "men", sub: "Jeans",
    price: 1250, sale: null,
    colors: ["Indigo", "Black"],
    sizes: ["30", "32", "34", "36", "38"],
    img: "assets/img/products/jeans.jpg",
    material: "Stretch denim (98% cotton, 2% spandex)",
    badge: "bestseller",
    desc: "Mid-rise straight-cut jeans with a touch of stretch for easy movement. Deep colour that lasts wash after wash.",
    care: "Wash inside-out in cold water."
  },
  {
    id: "winter-hooded-jacket",
    name: "Winter Hooded Jacket",
    bn: "উইন্টার হুডেড জ্যাকেট",
    cat: "men", sub: "Winterwear",
    price: 1650, sale: null,
    colors: ["Charcoal", "Olive"],
    sizes: ["M", "L", "XL", "XXL"],
    img: "assets/img/products/jacket.svg",
    material: "Quilted polyester shell, fleece lining",
    badge: "new",
    desc: "Warm quilted jacket with a soft fleece lining and hood — ready for Sunamganj's chilly winter mornings.",
    care: "Machine wash gentle. Do not iron directly."
  },

  /* ---------------- WOMEN ---------------- */
  {
    id: "elegant-three-piece",
    name: "Elegant Three-Piece Set",
    bn: "এলিগ্যান্ট থ্রি-পিস সেট",
    cat: "women", sub: "Three-piece",
    price: 1850, sale: null,
    colors: ["Rose", "Mint"],
    sizes: ["S", "M", "L", "XL"],
    img: "assets/img/products/three-piece.svg",
    material: "Soft printed lawn with chiffon orna",
    badge: "new",
    desc: "Graceful printed three-piece with matching orna and salwar — light, airy and elegant for any occasion.",
    care: "Gentle hand wash. Dry in shade."
  },
  {
    id: "soft-georgette-saree",
    name: "Soft Georgette Saree",
    bn: "সফট জর্জেট শাড়ি",
    cat: "women", sub: "Saree",
    price: 1550, sale: null,
    colors: ["Teal"],
    sizes: ["Free Size"],
    img: "assets/img/products/georgette-saree.svg",
    material: "Soft georgette with blouse piece",
    badge: null,
    desc: "Feather-light georgette saree that drapes beautifully — effortless elegance from morning to evening.",
    care: "Dry clean recommended."
  },
  {
    id: "festive-silk-saree",
    name: "Festive Silk Saree",
    bn: "ফেস্টিভ সিল্ক শাড়ি",
    cat: "women", sub: "Saree",
    price: 2450, sale: null,
    colors: ["Red", "Gold"],
    sizes: ["Free Size"],
    img: "assets/img/products/silk-saree.svg",
    material: "Art silk with zari border",
    badge: "bestseller",
    desc: "Gorgeous festive silk saree with a shimmering zari border — made for weddings, Puja and celebration days.",
    care: "Dry clean only."
  },
  {
    id: "printed-cotton-kurti",
    name: "Printed Cotton Kurti",
    bn: "প্রিন্টেড কটন কুর্তি",
    cat: "women", sub: "Kurti",
    price: 750, sale: 650,
    colors: ["Mint", "Dusty Rose"],
    sizes: ["S", "M", "L", "XL"],
    img: "assets/img/products/kurti.svg",
    material: " breathable printed cotton",
    badge: null,
    desc: "Cheerful everyday kurti in soft breathable cotton — easy to pair with leggings, jeans or salwar.",
    care: "Machine wash cold."
  },
  {
    id: "soft-chiffon-hijab",
    name: "Soft Chiffon Hijab",
    bn: "সফট শিফন হিজাব",
    cat: "women", sub: "Hijab",
    price: 350, sale: null,
    colors: ["Dusty Rose", "Black", "White"],
    sizes: ["Free Size"],
    img: "assets/img/products/hijab.svg",
    material: "Premium soft chiffon",
    badge: null,
    desc: "Lightweight, non-slip chiffon hijab with a graceful fall — comfortable all-day coverage in lovely shades.",
    care: "Hand wash. Air dry."
  },

  /* ---------------- KIDS ---------------- */
  {
    id: "boys-shirt-pant-set",
    name: "Boys' Shirt & Pant Set",
    bn: "বালকদের শার্ট ও প্যান্ট সেট",
    cat: "kids", sub: "Boys",
    price: 950, sale: null,
    colors: ["Sky Blue", "White"],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    img: "assets/img/products/boys-set.svg",
    material: "Soft cotton twill",
    badge: "new",
    desc: "Smart two-piece shirt and pant set for boys — picture-ready for school events, Eid and family functions.",
    care: "Machine wash gentle."
  },
  {
    id: "girls-festive-frock",
    name: "Girls' Festive Frock",
    bn: "বালিকাদের ফেস্টিভ ফ্রক",
    cat: "kids", sub: "Girls",
    price: 1150, sale: null,
    colors: ["Pink", "Purple"],
    sizes: ["2-3Y", "4-5Y", "6-7Y"],
    img: "assets/img/products/frock.svg",
    material: "Satin-tulle with soft lining",
    badge: null,
    desc: "Twirl-approved festive frock with a soft inner lining so little ones stay comfy while looking adorable.",
    care: "Hand wash. Dry in shade."
  },

  /* ---------------- ACCESSORIES ---------------- */
  {
    id: "genuine-leather-belt",
    name: "Genuine Leather Belt",
    bn: "জেনুইন লেদার বেল্ট",
    cat: "accessories", sub: "Belt",
    price: 550, sale: null,
    colors: ["Brown", "Black"],
    sizes: ["32", "34", "36", "38", "40"],
    img: "assets/img/products/belt.svg",
    material: "Genuine leather, metal buckle",
    badge: null,
    desc: "Classic full-grain leather belt with a brushed-metal buckle — the finishing touch every outfit deserves.",
    care: "Wipe clean with a dry cloth."
  }
];

/* Helpers used across pages */
function cfsFindProduct(id) { return PRODUCTS.find(p => p.id === id); }
function cfsByCat(cat) { return PRODUCTS.filter(p => p.cat === cat); }
function cfsNew() { return PRODUCTS.filter(p => p.badge === "new"); }
function cfsBestsellers() { return PRODUCTS.filter(p => p.badge === "bestseller"); }
function cfsOnSale() { return PRODUCTS.filter(p => p.sale && p.sale < p.price); }
function cfsPrice(p) { return p.sale && p.sale < p.price ? p.sale : p.price; }
function cfsBDT(n) { return "৳" + Number(n).toLocaleString("en-US"); }
