interface Layer { name: string; rho: number; color: string }
const DEFAULT: Layer[] = [
  { name: 'Minyak', rho: 0.92, color: '#d9a441' },
  { name: 'Air',    rho: 1.00, color: '#1f7d92' },
  { name: 'Madu',   rho: 1.36, color: '#8a5a1e' },
]
interface Props { layers?: Layer[] }

export function DensityColumn({ layers = DEFAULT }: Props) {
  const TOP = 70, BOT = 300, X = 54, Wd = 112
  const h = (BOT - TOP) / layers.length
  return (
    <svg viewBox="0 0 220 320" style={{ width: '100%', height: '100%', display: 'block' }}>
      {layers.map((l, i) => {
        const y = TOP + i * h
        return (
          <g key={l.name}>
            <rect x={X} y={y} width={Wd} height={h} fill={l.color} opacity={0.78} />
            <text x={X + Wd / 2} y={y + h / 2 - 6} textAnchor="middle" fontFamily="var(--font-sans)" fontSize={20} fontWeight={700} fill="#fff">{l.name}</text>
            <text x={X + Wd / 2} y={y + h / 2 + 22} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={15} fontWeight={500} fill="rgba(255,255,255,0.92)">{l.rho.toFixed(2)} g/cm³</text>
          </g>
        )
      })}
      <path d={`M${X - 3} ${TOP - 8} L${X - 3} ${BOT} Q${X - 3} ${BOT + 10} ${X + 8} ${BOT + 10} L${X + Wd - 8} ${BOT + 10} Q${X + Wd + 3} ${BOT + 10} ${X + Wd + 3} ${BOT} L${X + Wd + 3} ${TOP - 8}`} fill="none" stroke="#5f8b99" strokeWidth={3} />
    </svg>
  )
}
