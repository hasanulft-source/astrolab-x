export function OrganismGlyph({ id, size = 54 }: { id: string; size?: number }) {
  const p = { width: size, height: size, viewBox: '0 0 48 48', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinejoin: 'round' as const, strokeLinecap: 'round' as const }
  switch (id) {
    case 'kucing': return (<svg {...p}><path d="M14 14 L10 6 L18 12 M34 14 L38 6 L30 12" /><path d="M12 22a12 10 0 0 0 24 0c0-7-5-12-12-12s-12 5-12 12z" /><circle cx="19" cy="22" r="1.4" fill="currentColor" /><circle cx="29" cy="22" r="1.4" fill="currentColor" /><path d="M24 26v2 M22 29h4 M14 25l-6 2 M14 28l-6 3 M34 25l6 2 M34 28l6 3" /></svg>)
    case 'api': return (<svg {...p}><path d="M24 6c4 8-3 10-3 16a6 6 0 0 0 12 0c0-4-2-6-2-6 3 3 5 7 5 11a12 12 0 0 1-24 0c0-9 9-12 12-21z" /></svg>)
    case 'kristal': return (<svg {...p}><path d="M24 5 L34 18 L28 43 L20 43 L14 18 Z" /><path d="M14 18 H34 M24 5 L24 43 M24 5 L20 18 M24 5 L28 18" /></svg>)
    case 'robot': return (<svg {...p}><rect x="12" y="16" width="24" height="20" rx="4" /><path d="M24 16 V10 M24 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /><circle cx="19" cy="25" r="2.2" fill="currentColor" /><circle cx="29" cy="25" r="2.2" fill="currentColor" /><path d="M19 31h10 M12 24H8 M36 24h4" /></svg>)
    case 'virus': return (<svg {...p}><circle cx="24" cy="24" r="11" /><circle cx="21" cy="22" r="1.6" fill="currentColor" /><circle cx="27" cy="26" r="1.6" fill="currentColor" /><path d="M24 13V6 M24 35v7 M13 24H6 M35 24h7 M16 16l-5-5 M32 32l5 5 M32 16l5-5 M16 32l-5 5" /></svg>)
    default: return (<svg {...p}><circle cx="24" cy="24" r="12" /></svg>)
  }
}
