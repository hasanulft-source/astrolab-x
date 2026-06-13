interface Props { value: number }
const X0 = 34, SCALE = 36, Y = 96

export function RulerReader({ value }: Props) {
  const cx = (cm: number) => X0 + cm * SCALE
  const cmTicks = Array.from({ length: 15 }, (_, i) => i)
  const mmTicks = Array.from({ length: 141 }, (_, i) => i).filter(i => i % 10 !== 0)
  return (
    <svg viewBox="0 0 560 180" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <linearGradient id="rr-bar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#09637E" /><stop offset="100%" stopColor="#088395" />
        </linearGradient>
      </defs>
      <rect x={cx(0)} y={42} width={Math.max(0, value * SCALE)} height={28} rx={4} fill="url(#rr-bar)" opacity={0.92} />
      <line x1={cx(value)} y1={36} x2={cx(value)} y2={150} stroke="#088395" strokeWidth={1.5} strokeDasharray="3 3" opacity={0.8} />
      <rect x={X0} y={Y} width={14 * SCALE} height={52} rx={4} fill="#e6f2f3" stroke="#5f8b99" strokeWidth={1.5} />
      {mmTicks.map(i => <line key={'m' + i} x1={X0 + i * (SCALE / 10)} y1={Y} x2={X0 + i * (SCALE / 10)} y2={Y + 9} stroke="#5f8b99" strokeWidth={1} />)}
      {cmTicks.map(i => (
        <g key={'c' + i}>
          <line x1={cx(i)} y1={Y} x2={cx(i)} y2={Y + 18} stroke="#557884" strokeWidth={1.5} />
          <text x={cx(i)} y={Y + 36} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={16} fontWeight={600} fill="#557884">{i}</text>
        </g>
      ))}
      <text x={cx(14) + 6} y={Y + 14} fontFamily="var(--font-mono)" fontSize={14} fontWeight={600} fill="#557884">cm</text>
    </svg>
  )
}
