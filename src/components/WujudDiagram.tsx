interface Props { from?: string | null; to?: string | null; kalor?: 'menyerap' | 'melepas' | null }

const POS: Record<string, { x: number; y: number; label: string }> = {
  padat: { x: 84, y: 252, label: 'Padat' },
  cair:  { x: 316, y: 252, label: 'Cair' },
  gas:   { x: 200, y: 58, label: 'Gas' },
}
const R = 44

export function WujudDiagram({ from = null, to = null, kalor = null }: Props) {
  const col = kalor === 'menyerap' ? '#c97a16' : kalor === 'melepas' ? '#088395' : '#088395'
  let arrow = null
  if (from && to && POS[from] && POS[to]) {
    const a = POS[from], b = POS[to]
    const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy)
    const ux = dx / len, uy = dy / len
    const sx = a.x + ux * (R + 6), sy = a.y + uy * (R + 6)
    const ex = b.x - ux * (R + 12), ey = b.y - uy * (R + 12)
    arrow = <line x1={sx} y1={sy} x2={ex} y2={ey} stroke={col} strokeWidth={3.5} markerEnd="url(#wd-arrow)" />
  }
  return (
    <svg viewBox="0 0 400 320" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <marker id="wd-arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
          <path d="M0 0 L7 3 L0 6 Z" fill={col} />
        </marker>
        <radialGradient id="wd-node" cx="38%" cy="34%">
          <stop offset="0%" stopColor="#5ab9c9" /><stop offset="46%" stopColor="#088395" /><stop offset="100%" stopColor="#09637E" />
        </radialGradient>
        <filter id="wd-glow" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0" dy="2.5" stdDeviation="3" floodColor="#0f3d49" floodOpacity="0.18" /></filter>
      </defs>
      {arrow}
      {Object.entries(POS).map(([id, p]) => {
        const active = id === from || id === to
        return (
          <g key={id} opacity={(from && to && !active) ? 0.4 : 1}>
            {active && <circle cx={p.x} cy={p.y} r={R + 7} fill="none" stroke={col} strokeWidth={1.5} opacity={0.6} />}
            <g filter="url(#wd-glow)"><circle cx={p.x} cy={p.y} r={R} fill="url(#wd-node)" /></g>
            <text x={p.x} y={p.y + 6} textAnchor="middle" fontFamily="var(--font-sans)" fontSize={21} fontWeight={700} fill="#ffffff">{p.label}</text>
          </g>
        )
      })}
    </svg>
  )
}
