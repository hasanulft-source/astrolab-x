export function MoonPhase({ p, size = 60 }: { p: number; size?: number }) {
  const r = size / 2
  const phase = ((p % 1) + 1) % 1
  const cosA = Math.cos(2 * Math.PI * phase)
  const rx = Math.abs(cosA) * r
  const waxing = phase <= 0.5
  const illum = (1 - cosA) / 2
  const ellipseLit = illum > 0.5
  const lit = '#f4ecca', dark = '#2b3149'
  const half = waxing ? `M${r},0 A${r},${r} 0 0 1 ${r},${size} Z` : `M${r},0 A${r},${r} 0 0 0 ${r},${size} Z`
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} style={{ display: 'block' }}>
      <circle cx={r} cy={r} r={r} fill={dark} />
      <path d={half} fill={lit} />
      <ellipse cx={r} cy={r} rx={rx} ry={r} fill={ellipseLit ? lit : dark} />
      <circle cx={r} cy={r} r={r - 0.5} fill="none" stroke="#1f2638" strokeWidth="1" />
    </svg>
  )
}
