export function Logo({ size = 32 }: { size?: number }) {
  const s = size, c = s / 2, r1 = s * 0.38, dot = s * 0.065, center = s * 0.115
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
      <ellipse cx={c} cy={c} rx={r1} ry={r1 * 0.36} stroke="#fff" strokeWidth={s * 0.055} fill="none" strokeLinecap="round" />
      <ellipse cx={c} cy={c} rx={r1} ry={r1 * 0.36} stroke="#fff" strokeWidth={s * 0.04} fill="none" strokeLinecap="round" transform={`rotate(60 ${c} ${c})`} opacity=".65" />
      <ellipse cx={c} cy={c} rx={r1} ry={r1 * 0.36} stroke="#fff" strokeWidth={s * 0.04} fill="none" strokeLinecap="round" transform={`rotate(-60 ${c} ${c})`} opacity=".65" />
      <circle cx={c} cy={c} r={center} fill="#fff" />
      <circle cx={c} cy={c} r={center * 0.55} fill="rgba(13,107,122,0.75)" />
      <circle cx={c + r1} cy={c} r={dot} fill="#fff" />
      <circle cx={c - r1} cy={c} r={dot * 0.75} fill="#fff" opacity=".7" />
      <circle cx={c + r1 * 0.5} cy={c - r1 * 0.31} r={dot * 0.85} fill="#fff" opacity=".9" />
      <circle cx={c - r1 * 0.5} cy={c + r1 * 0.31} r={dot * 0.7} fill="#fff" opacity=".6" />
    </svg>
  )
}
