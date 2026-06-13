interface Props { dots: [number, number][] }
export function TargetBoard({ dots }: Props) {
  return (
    <svg viewBox="0 0 240 240" style={{ width: '100%', height: '100%', display: 'block' }}>
      {[95, 70, 45, 20].map((r, i) => (
        <circle key={r} cx={120} cy={120} r={r} fill={i % 2 === 0 ? 'rgba(34,211,238,0.05)' : 'rgba(34,211,238,0.10)'} stroke="#2c8294" strokeWidth={1} />
      ))}
      <circle cx={120} cy={120} r={4} fill="#088395" />
      <line x1={120} y1={18} x2={120} y2={28} stroke="#2c8294" strokeWidth={1} />
      <line x1={120} y1={212} x2={120} y2={222} stroke="#2c8294" strokeWidth={1} />
      <line x1={18} y1={120} x2={28} y2={120} stroke="#2c8294" strokeWidth={1} />
      <line x1={212} y1={120} x2={222} y2={120} stroke="#2c8294" strokeWidth={1} />
      {dots.map(([x, y], i) => (
        <g key={i}><circle cx={x} cy={y} r={6} fill="#d66a3f" opacity={0.25} /><circle cx={x} cy={y} r={3.2} fill="#d66a3f" /></g>
      ))}
    </svg>
  )
}
