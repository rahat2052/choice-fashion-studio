#!/usr/bin/env python3
"""
Generate cohesive product SVG placeholders for Choice Fashion Studio.
Each SVG: soft tonal gradient + fabric hairline texture + garment line icon.
Used ONLY for demo products until real photography replaces them.
"""
import os

OUT = os.path.join(os.path.dirname(__file__), "..", "assets", "img", "products")
os.makedirs(OUT, exist_ok=True)

# Garment line icons drawn in a 24x24 viewBox
ICONS = {
    "jacket": '<path d="M7.5 4 4 7.5 6 11.5l1.7-1V20h8.6v-9.5l1.7 1 2-4L16.5 4c-1.2 2.2-2.8 3.1-4.5 3.1S9 6.2 7.5 4Z"/><path d="M12 8v12"/><path d="M9.3 13.5v2.6M14.7 13.5v2.6"/>',
    "threepiece": '<path d="M8.5 3.5 6 6.5 7.6 9.2l1.3-.8L7.6 20.5h8.8l-1.3-12.1 1.3.8L18 6.5l-2.5-3c-1 1.7-2.1 2.5-3.5 2.5s-2.5-.8-3.5-2.5Z"/><path d="M8.5 8.5c3 2 5 4.5 6.7 8" stroke-dasharray="1.4 1.4"/><path d="M9.8 11.5h4.4"/>',
    "saree": '<path d="M5 19.5C6.5 13 8.5 8 12 8c3.2 0 4.6 3 6.4 5.6 1.1 1.7 2 2.9 2.6 4"/><path d="M5 19.5c4.5 1.8 11.5 1.6 16-.1"/><path d="M8.2 14.5c.7 2 1.6 3.6 2.8 4.8M11.8 13c.7 2.6 1.7 4.7 3 6.3M15.6 13.6c.5 2 .9 3.9 1 5.7" stroke-width="0.8"/>',
    "silksaree": '<path d="M5 19.5C6.5 13 8.5 8 12 8c3.2 0 4.6 3 6.4 5.6 1.1 1.7 2 2.9 2.6 4"/><path d="M5 19.5c4.5 1.8 11.5 1.6 16-.1" stroke-width="1.4"/><path d="M6.4 18.4c.3-.6 1-.7 1.2-.1M9.6 18c.3-.6 1-.7 1.2-.1M12.8 17.6c.3-.6 1-.6 1.2 0M16 16.8c.3-.6 1-.6 1.2 0" stroke-width="0.9"/>',
    "kurti": '<path d="M8.5 4 5.6 7l1.9 2.6 1.2-.7L7.4 20h9.2l-1.3-11.1 1.2.7L18.4 7 15.5 4c-.9 1.5-2.1 2.3-3.5 2.3S9.4 5.5 8.5 4Z"/><path d="M9.7 10.2h4.6M10 13.5h4"/>',
    "hijab": '<path d="M12 3.5C8 3.5 6 7 6.2 10.4c.1 3.6 1.9 5.3 1.6 8.1-.1 1-.4 1.8-.8 2.5 1.3.4 2.6.2 3.7-.6.9.4 2 .4 2.9-.1 1.2.8 2.6 1 3.9.5-.4-.7-.7-1.5-.8-2.5-.2-2.8 1.5-4.6 1.6-7.9C18.4 7 16 3.5 12 3.5Z"/><path d="M9.4 14.8c1.7 1.3 3.6 1.3 5.3 0" stroke-width="0.9"/>',
    "boysset": '<path d="M6.2 3.5 3.5 6l1.6 2.2 1.1-.7v5.3h5V7.5l1.1.7L13.9 6l-2.7-2.5c-.8 1.2-1.8 1.9-3 1.9s-1.9-.6-2-1.9ZM14.8 12.5h6.7l-.8 7h-2.2l-1-4.6h-.6l-1 4.6h-2.2Z"/>',
    "frock": '<path d="M9.4 3C10 4.3 10.9 5 12 5s2-.7 2.6-2c.9.4 1.5 1 1.9 1.8l-1.4 3.6c2 2.6 3.2 6.2 4 11.6H4.9c.8-5.4 2-9 4-11.6L7.5 4.8C7.9 4 8.5 3.4 9.4 3Z"/><path d="M8.9 9.4h6.2"/><path d="M9.5 12.5v5M12 12.8v5.7M14.5 12.5v5" stroke-width="0.8"/>',
    "belt": '<path d="M2 10.3h20v3.6H2Z"/><rect x="9.2" y="8.9" width="5.6" height="6.4" rx="0.9"/><path d="M11.2 11.1v2.4M12.3 11.1v2.4M13.4 11.1v2.4" stroke-width="0.8"/><circle cx="18.2" cy="12.1" r="0.55"/><circle cx="19.6" cy="12.1" r="0.55"/><circle cx="21" cy="12.1" r="0.55"/>',
}

# product -> (icon, bg_start, bg_end, stroke, sub-label)
ITEMS = {
    "jacket":          ("jacket",     "#efede8", "#e3ddd2", "#4b4e53", "Winterwear"),
    "three-piece":     ("threepiece", "#f9ecea", "#f3dcd8", "#a65356", "Three-Piece"),
    "georgette-saree": ("saree",      "#e6f1ef", "#d6e8e4", "#1f6f6b", "Saree"),
    "silk-saree":      ("silksaree",  "#fae9e5", "#f4d7cf", "#b03030", "Silk Saree"),
    "kurti":           ("kurti",      "#e9f4ec", "#d9ecdf", "#4d8a66", "Kurti"),
    "hijab":           ("hijab",      "#f6ebe9", "#eedbd8", "#b98a8a", "Hijab"),
    "boys-set":        ("boysset",    "#e8f0f9", "#d7e6f4", "#3b6fb3", "Boys"),
    "frock":           ("frock",      "#f9eaf2", "#f3d8e7", "#b35a8c", "Girls"),
    "belt":            ("belt",       "#f2ebe0", "#e9ddcc", "#7a4b2b", "Accessories"),
}

TEMPLATE = """<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 400 500">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="{bg1}"/>
      <stop offset="1" stop-color="{bg2}"/>
    </linearGradient>
    <pattern id="weave" width="9" height="9" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="9" stroke="{stroke}" stroke-opacity="0.05" stroke-width="1.4"/>
    </pattern>
  </defs>
  <rect width="400" height="500" fill="url(#bg)"/>
  <rect width="400" height="500" fill="url(#weave)"/>
  <circle cx="200" cy="218" r="118" fill="#ffffff" fill-opacity="0.42"/>
  <circle cx="200" cy="218" r="118" fill="none" stroke="{stroke}" stroke-opacity="0.25" stroke-width="1.5" stroke-dasharray="3 6"/>
  <g transform="translate(108,126) scale(7.66)" fill="none" stroke="{stroke}" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round">
    {icon}
  </g>
  <text x="200" y="402" font-family="Georgia, serif" font-size="30" fill="{stroke}" text-anchor="middle" font-weight="bold">Choice</text>
  <text x="200" y="424" font-family="Arial, sans-serif" font-size="11.5" letter-spacing="4.5" fill="{stroke}" fill-opacity="0.75" text-anchor="middle">FASHION STUDIO</text>
  <text x="200" y="452" font-family="Arial, sans-serif" font-size="12" fill="{stroke}" fill-opacity="0.9" text-anchor="middle">{sub} \u2014 studio photo coming soon</text>
</svg>"""

for name, (icon_key, bg1, bg2, stroke, sub) in ITEMS.items():
    svg = TEMPLATE.format(bg1=bg1, bg2=bg2, stroke=stroke, icon=ICONS[icon_key], sub=sub)
    with open(os.path.join(OUT, name + ".svg"), "w", encoding="utf-8") as f:
        f.write(svg)
    print("wrote", name + ".svg")

print("done:", len(ITEMS), "placeholders")
