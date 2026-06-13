interface Props { id: string; size?: number }

export function SafetySymbol({ id, size = 64 }: Props) {
  const F = { stroke: '#e3962f', strokeWidth: 2.4, fill: 'none', strokeLinejoin: 'round' as const, strokeLinecap: 'round' as const }
  const icon: Record<string, JSX.Element> = {
    flame:     <path d="M32 16 Q40 26 36 34 Q34 38 38 42 Q44 38 42 30 Q50 38 46 48 Q42 56 32 56 Q20 56 18 46 Q16 38 24 32 Q24 40 30 40 Q26 30 32 16 Z" {...F} fill="rgba(255,180,60,0.18)" />,
    corrosive: <g {...F}><path d="M20 22 L30 30 M22 20 L24 30" /><path d="M34 24 L44 44 L24 44 Z" fill="rgba(255,180,60,0.12)" /><path d="M16 50 L48 50" /><path d="M28 44 L26 50 M36 44 L38 50" /></g>,
    toxic:     <g {...F}><circle cx="32" cy="28" r="11" fill="rgba(255,180,60,0.12)" /><circle cx="28" cy="27" r="2" fill="#e3962f" /><circle cx="36" cy="27" r="2" fill="#e3962f" /><path d="M29 33 L35 33" /><path d="M20 46 L44 54 M44 46 L20 54" /></g>,
    explosive: <g {...F}><path d="M32 14 L36 28 L50 24 L40 34 L52 42 L36 40 L34 54 L30 40 L16 44 L26 33 L14 26 L30 28 Z" fill="rgba(255,180,60,0.16)" /></g>,
    irritant:  <g {...F}><path d="M32 16 L48 48 L16 48 Z" fill="rgba(255,180,60,0.12)" /><line x1="32" y1="28" x2="32" y2="40" strokeWidth="3.5" /><circle cx="32" cy="45" r="1.6" fill="#e3962f" stroke="none" /></g>,
  }
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <rect x="6" y="6" width="52" height="52" rx="12" fill="rgba(255,180,60,0.06)" stroke="#c97a16" strokeWidth="2" />
      {icon[id] ?? null}
    </svg>
  )
}
