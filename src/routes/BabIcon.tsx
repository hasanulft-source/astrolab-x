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
    case 'k8bab1': return (<svg {...p} strokeLinecap="round" strokeLinejoin="round"><path d="M12 8.5c-1.6-2.4-5-2-6.5 0-1.8 2.4-1 7 1 9.6 1 1.4 2.5 2.4 5.5 2.4s4.5-1 5.5-2.4c2-2.6 2.8-7.2 1-9.6-1.5-2-4.9-2.4-6.5 0z"/><path d="M12 8.5C12 6 13.2 4.7 15.2 4.5"/></svg>)
    case 'k8bab2': return (<svg {...p} strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v8"/><path d="M12 9c-1-2.2-4.5-2-5.6.3C5 12 5.5 17.5 8 19c1.6 1 3.5-.2 3.5-2.2V9z"/><path d="M12 9c1-2.2 4.5-2 5.6.3C19 12 18.5 17.5 16 19c-1.6 1-3.5-.2-3.5-2.2V9z"/></svg>)
    case 'k8bab3': return (<svg {...p} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3.4"/><path d="M12 2.5v3.2M12 18.3v3.2M2.5 12h3.2M18.3 12h3.2M5.2 5.2l2.3 2.3M16.5 16.5l2.3 2.3M18.8 5.2l-2.3 2.3M7.5 16.5l-2.3 2.3"/></svg>)
    case 'k8bab4': return (<svg {...p} strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 13a8.5 8.5 0 0 1 17 0"/><path d="M12 13l3.5-3"/><circle cx="12" cy="13" r="1.3" fill="currentColor" stroke="none"/><path d="M5 17.5h14"/></svg>)
    case 'k8bab5': return (<svg {...p} strokeLinecap="round" strokeLinejoin="round"><path d="M2 12q2.5-6 5 0t5 0t5 0t5 0"/></svg>)
    case 'k8bab6': return (<svg {...p} strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h14l-5.5 7.5V18l-3 2v-8.5z"/></svg>)
    case 'k8bab7': return (<svg {...p} strokeLinecap="round" strokeLinejoin="round"><path d="M4 11h16v9H4z"/><path d="M4 14.5h16M4 17.5h16"/><path d="M12 11V6M12 6c-1.6 0-2.6-1-2.6-2.2M12 6c1.6 0 2.6-1 2.6-2.2"/></svg>)
    case 'infbab1': return (<svg {...p} strokeLinecap="round" strokeLinejoin="round"><path d="M9 8l-3.6 4 3.6 4M15 8l3.6 4-3.6 4"/></svg>)
    case 'infbab2': return (<svg {...p} strokeLinecap="round" strokeLinejoin="round"><path d="M3 20h18"/><rect x="5" y="11" width="3.4" height="7" rx="1"/><rect x="10.3" y="5" width="3.4" height="13" rx="1"/><rect x="15.6" y="8" width="3.4" height="10" rx="1"/></svg>)
    case 'infbab3': return (<svg {...p} strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="6.5"/><path d="M15.8 15.8L20 20"/></svg>)
    case 'infbab4': return (<svg {...p} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.5l6.5 2.5v4.5c0 3.8-2.8 6.8-6.5 8.5-3.7-1.7-6.5-4.7-6.5-8.5V6z"/><path d="M9.3 11.8l1.8 1.8 3.6-3.6"/></svg>)
    case 'infbab5': return (<svg {...p} strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="7" width="10" height="10" rx="1.5"/><rect x="10" y="10" width="4" height="4" rx="0.5"/><path d="M9.5 7V4.5M14.5 7V4.5M9.5 19.5V17M14.5 19.5V17M7 9.5H4.5M7 14.5H4.5M19.5 9.5H17M19.5 14.5H17"/></svg>)
    default: return (<svg {...p}><circle cx="12" cy="12" r="8"/></svg>)
  }
}
