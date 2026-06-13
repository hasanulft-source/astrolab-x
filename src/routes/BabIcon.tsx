export function BabIcon({ babId, size = 24 }: { babId: string; size?: number }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7 } as const
  switch (babId) {
    case 'bab1': return (<svg {...p}><circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="9.5" ry="4"/><ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(120 12 12)"/></svg>)
    case 'bab2': return (<svg {...p}><circle cx="8" cy="9" r="1.8"/><circle cx="14" cy="7" r="1.8"/><circle cx="16" cy="13" r="1.8"/><circle cx="9" cy="15" r="1.8"/></svg>)
    case 'bab3': return (<svg {...p} strokeLinejoin="round"><path d="M12 3c2 4-1 5-1 8a3 3 0 0 0 6 0c0-2-1-3-1-3 2 2 3 4 3 7a6 6 0 0 1-12 0c0-5 5-6 5-12z"/></svg>)
    case 'bab4': return (<svg {...p} strokeLinecap="round" strokeLinejoin="round"><path d="M4 17c4 0 4-8 8-8s4 6 8 6"/><circle cx="4" cy="17" r="1.5" fill="currentColor" stroke="none"/></svg>)
    case 'bab5': return (<svg {...p} strokeLinejoin="round"><path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z"/><path d="M6 18c4-4 8-7 12-9"/></svg>)
    case 'bab6': return (<svg {...p} strokeLinecap="round" strokeLinejoin="round"><circle cx="8.5" cy="8" r="3"/><path d="M3 19c3-5 5.5-5 7.5-2s4 1.5 6-1.5 4.5-1 4.5-1"/></svg>)
    case 'bab7': return (<svg {...p} strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><ellipse cx="12" cy="12" rx="10" ry="3.4" transform="rotate(-20 12 12)"/></svg>)
    default: return (<svg {...p}><circle cx="12" cy="12" r="8"/></svg>)
  }
}
