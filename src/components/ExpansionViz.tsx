interface Props { mode: 'padat' | 'cair' | 'gas'; heat: number }

export function ExpansionViz({ mode, heat }: Props) {
  const h = Math.max(0, Math.min(1, heat))
  if (mode === 'padat') {
    const x0 = 46, baseW = 168, w = baseW + h * 104, y = 92, bh = 34
    const origEnd = x0 + baseW
    return (
      <svg viewBox="0 0 360 200" style={{ width: '100%', height: '100%', display: 'block' }}>
        <rect x={x0 - 8} y={y - 14} width={10} height={bh + 28} fill="#5f8b99" />
        <rect x={x0} y={y} width={w} height={bh} rx={4} fill="#088395" opacity={0.9} />
        <line x1={origEnd} y1={y - 12} x2={origEnd} y2={y + bh + 12} stroke="#557884" strokeWidth={1.5} strokeDasharray="4 4" />
        {h > 0.02 && <><line x1={origEnd} y1={y + bh + 18} x2={x0 + w} y2={y + bh + 18} stroke="#088395" strokeWidth={2} /><text x={(origEnd + x0 + w) / 2} y={y + bh + 34} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={16} fontWeight={700} fill="#088395">ΔL</text></>}
        <text x={180} y={40} textAnchor="middle" fontFamily="var(--font-sans)" fontSize={15} fontWeight={500} fill="#557884">Zat padat memuai sedikit saat dipanaskan</text>
      </svg>
    )
  }
  if (mode === 'cair') {
    const fill = 150 - h * 96
    return (
      <svg viewBox="0 0 360 200" style={{ width: '100%', height: '100%', display: 'block' }}>
        <rect x={168} y={40} width={24} height={120} fill="#e6f2f3" stroke="#5f8b99" strokeWidth={2} />
        <circle cx={180} cy={168} r={22} fill="#e6f2f3" stroke="#5f8b99" strokeWidth={2} />
        <circle cx={180} cy={168} r={16} fill="#d64545" />
        <rect x={172} y={fill} width={16} height={160 - fill} fill="#d64545" />
        <text x={250} y={100} fontFamily="var(--font-sans)" fontSize={15} fontWeight={500} fill="#557884">Cairan memuai</text>
        <text x={250} y={118} fontFamily="var(--font-sans)" fontSize={15} fontWeight={500} fill="#557884">lebih besar</text>
      </svg>
    )
  }
  const r = 12 + h * 36
  return (
    <svg viewBox="0 0 360 200" style={{ width: '100%', height: '100%', display: 'block' }}>
      <circle cx={180} cy={86 - r * 0.3} r={r} fill="rgba(34,211,238,0.3)" stroke="#088395" strokeWidth={2} />
      <rect x={172} y={108} width={16} height={20} fill="#5f8b99" />
      <path d="M150 128 L210 128 L204 178 Q204 184 198 184 L162 184 Q156 184 156 178 Z" fill="rgba(34,180,210,0.14)" stroke="#5f8b99" strokeWidth={2} />
      <text x={250} y={150} fontFamily="var(--font-sans)" fontSize={15} fontWeight={500} fill="#557884">Gas memuai</text>
      <text x={250} y={168} fontFamily="var(--font-sans)" fontSize={15} fontWeight={500} fill="#557884">paling besar</text>
    </svg>
  )
}
