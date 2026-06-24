# Astrolab — Brand Guidelines

## Tagline
**Astrolab · School Ecosystem**

## Logo Files

| File | Use case |
|---|---|
| `astrolab-showcase.svg` | Overview lengkap — preview brand identity untuk presentasi |
| `astrolab-primary.svg` | Main mark (A-Cluster, full color). Header website, splash, doc. |
| `astrolab-mono.svg` | Single color via `currentColor`. Stempel, watermark, dokumen print. |
| `astrolab-appicon.svg` | App icon, PWA, splash. White on teal gradient. |
| `astrolab-wordmark.svg` | Symbol + "Astrolab" + tagline horizontal. Email signature, card. |
| `astrolab-favicon-v2.svg` | 32×32 simplified untuk browser tab. |

## Filosofi & Anatomi

**A-Cluster** — 4 elemen geometric tersusun membentuk huruf "A" tersirat.

- **▲ Apex (Astro)** — rhombus atas. Visi, arah, aspirasi. Anchor sistem.
- **◆ Left + Right pillars (Lab)** — 2 rhombus bawah. Eksekusi, presisi, daily work.
- **━ Cross bar (Bridge)** — connector tengah. Pendidikan: penghubung visi & eksekusi.

Rhombus = facets, presisi geometric, tech-feel modern. Tersusun membentuk monogram "A" yang ownable.

## Color Palette

```
Apex          #09637E   — primary deep teal (anchor)
Pillars       #088395   — mid teal (eksekusi)
Bridge        #7AB2B2   — soft teal (connector)
BG Mist       #EEF7F7   — breathing space
Ink           #0b3a44   — text utama
```

## Typography

- **Display & UI:** Plus Jakarta Sans
- **Mono / data:** DM Mono
- **Wordmark:** "Astro" Bold (700) #09637E, "lab" Light (300) #088395
- **Tagline:** 11pt, letter-spacing 0.38em, uppercase, color #7AB2B2

## Aturan Pakai

✅ DO:
- Ruang kosong minimal setinggi symbol di sekelilingnya
- Pakai monochrome di latar berwarna kuat
- Skala minimum: 16px favicon, 32px konten
- Cross-bar harus selalu tegak lurus dengan pillars

❌ DON'T:
- Stretch / distort proporsi rhombus
- Ganti warna di luar palet
- Tambah shadow, glow, outline
- Rotate logo
- Pisahkan elemen (4 elemen harus selalu utuh)

## Implementasi di App (React)

```jsx
function AstrolabMark({ size = 32 }) {
  const s = size / 32;
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <g transform="translate(16, 17)">
        <polygon points="0,-11 5.5,-3.5 0,1 -5.5,-3.5" fill="#09637E"/>
        <polygon points="-5.5,-3.5 -2,3.5 -8,9 -11.5,2" fill="#088395"/>
        <polygon points="5.5,-3.5 11.5,2 8,9 2,3.5" fill="#088395"/>
        <rect x="-3.5" y="1" width="7" height="2.2" rx="0.5" fill="#7AB2B2"/>
      </g>
    </svg>
  );
}
```

## Favicon di Vite

1. Drop `astrolab-favicon-v2.svg` ke `/public/favicon.svg`
2. Update `index.html`:
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

Untuk fallback `favicon.ico` (Safari lama), generate via [realfavicongenerator.net](https://realfavicongenerator.net) dari `astrolab-appicon.svg`.

## PWA Manifest

Convert `astrolab-appicon.svg` ke PNG 192×192 dan 512×512, lalu update `manifest.webmanifest`:

```json
{
  "name": "Astrolab",
  "short_name": "Astrolab",
  "description": "School Ecosystem",
  "theme_color": "#09637E",
  "background_color": "#EEF7F7",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

---

© 2026 M. Hasanul Fatta · Astrolab · School Ecosystem
