interface Pt { x: number; y: number; label?: string }
interface Props { route: Pt[] }

export function PathViz({ route }: Props) {
  const poly = route.map(p => `${p.x},${p.y}`).join(' ')
  const motionPath = route.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  const start = route[0], end = route[route.length - 1]
  const same = Math.abs(start.x - end.x) < 2 && Math.abs(start.y - end.y) < 2
  const seen = new Set<string>()
  const nodes = route.filter(p => { const k = `${p.x},${p.y}`; if (seen.has(k)) return false; seen.add(k); return true })
  const dur = Math.max(3, (route.length - 1) * 1.5)
  return (
    <svg viewBox="0 0 340 250" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <marker id="pv-arr" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#088395" /></marker>
        <radialGradient id="pv-ball" cx="38%" cy="34%"><stop offset="0%" stopColor="#ffd27a" /><stop offset="55%" stopColor="#ef8a1e" /><stop offset="100%" stopColor="#c2620c" /></radialGradient>
      </defs>
      <polyline points={poly} fill="none" stroke="#d64545" strokeWidth={3} strokeLinejoin="round" strokeLinecap="round" />
      {!same && <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke="#088395" strokeWidth={2.5} strokeDasharray="6 5" markerEnd="url(#pv-arr)" />}
      {nodes.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={13} fill="#ffffff" stroke="#088395" strokeWidth={2} />
          <text x={p.x} y={p.y + 5} textAnchor="middle" fontFamily="var(--font-sans)" fontSize={17} fontWeight={700} fill="#088395">{p.label}</text>
        </g>
      ))}
      <circle r={8} fill="url(#pv-ball)" stroke="#ffffff" strokeWidth={1.5}>
        <animateMotion dur={`${dur}s`} repeatCount="indefinite" path={motionPath} />
      </circle>
      {same && <text x={start.x + 20} y={start.y - 14} fontFamily="var(--font-mono)" fontSize={15} fontWeight={600} fill="#088395">perpindahan = 0</text>}
      <g fontFamily="var(--font-mono)" fontSize={14} fontWeight={600}>
        <line x1={24} y1={232} x2={44} y2={232} stroke="#d64545" strokeWidth={3} /><text x={50} y={236} fill="#557884">lintasan (jarak)</text>
        <line x1={170} y1={232} x2={190} y2={232} stroke="#088395" strokeWidth={2.5} strokeDasharray="6 5" /><text x={196} y={236} fill="#557884">perpindahan</text>
      </g>
    </svg>
  )
}
