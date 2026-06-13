export function KingdomIcon({ id, size = 30 }: { id: string; size?: number }) {
  const p = { width: size, height: size, viewBox: '0 0 32 32', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinejoin: 'round' as const, strokeLinecap: 'round' as const }
  switch (id) {
    case 'monera': return (<svg {...p}><rect x="8" y="12" width="16" height="8" rx="4" /><circle cx="12" cy="16" r="1" fill="currentColor" /><circle cx="16" cy="16" r="1" fill="currentColor" /><circle cx="20" cy="16" r="1" fill="currentColor" /><path d="M24 16c2-1 3 0 4-2 M8 16c-2 1-3 0-4-2" /></svg>)
    case 'protista': return (<svg {...p}><path d="M16 5c6 0 9 4 9 9 0 5-4 8-9 9-5 1-9-3-9-9 0-5 4-9 9-9z" /><circle cx="14" cy="15" r="2.4" /></svg>)
    case 'fungi': return (<svg {...p}><path d="M6 15a10 7 0 0 1 20 0z" /><path d="M13 15v9a3 3 0 0 0 6 0v-9" /></svg>)
    case 'plantae': return (<svg {...p}><path d="M7 25c0-10 8-16 18-18 0 10-8 16-18 18z" /><path d="M8 24c4-5 9-9 14-11" /></svg>)
    case 'animalia': return (<svg {...p}><circle cx="16" cy="20" r="5" /><circle cx="9" cy="14" r="2.3" /><circle cx="14" cy="10" r="2.3" /><circle cx="18" cy="10" r="2.3" /><circle cx="23" cy="14" r="2.3" /></svg>)
    default: return (<svg {...p}><circle cx="16" cy="16" r="9" /></svg>)
  }
}
