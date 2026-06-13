interface Props { celsius: number; scale: 'C' | 'F' | 'K' | 'R'; name: string }
const CMIN = -20, CMAX = 120, YT = 58, YB = 268
const SX = 40, SW = 22, CX = SX + SW / 2

export function reading(c: number, s: string): number {
  if (s === 'F') return c * 9 / 5 + 32
  if (s === 'K') return c + 273
  if (s === 'R') return c * 4 / 5
  return c
}
const UNIT: Record<string, string> = { C: '\u00b0C', F: '\u00b0F', K: 'K', R: '\u00b0R' }

export function Thermometer({ celsius, scale, name }: Props) {
  const cl = Math.max(CMIN, Math.min(CMAX, celsius))
  const levelY = YB - ((cl - CMIN) / (CMAX - CMIN)) * (YB - YT)
  const ticks = [0, 25, 50, 75, 100]
  return (
    <svg viewBox="0 0 120 326" style={{ width: '100%', height: '100%', display: 'block' }}>
      <text x={CX} y={24} textAnchor="middle" fontFamily="var(--font-sans)" fontSize={15} fontWeight={700} fill="#088395">{name}</text>
      <rect x={SX} y={YT} width={SW} height={YB - YT + 6} rx={11} fill="#e6f2f3" stroke="#5f8b99" strokeWidth={2} />
      <circle cx={CX} cy={282} r={18} fill="#e6f2f3" stroke="#5f8b99" strokeWidth={2} />
      <rect x={CX - 5} y={levelY} width={10} height={YB - levelY} fill="#d64545" />
      <circle cx={CX} cy={282} r={13} fill="#d64545" />
      {ticks.map(t => {
        const y = YB - ((t - CMIN) / (CMAX - CMIN)) * (YB - YT)
        return <g key={t}><line x1={SX + SW} y1={y} x2={SX + SW + 6} y2={y} stroke="#557884" strokeWidth={1.5} /><text x={SX + SW + 11} y={y + 4} fontFamily="var(--font-mono)" fontSize={12} fontWeight={600} fill="#3f6470">{Math.round(reading(t, scale))}</text></g>
      })}
      <text x={CX} y={316} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={16} fontWeight={600} fill="#0f3d49">{reading(cl, scale).toFixed(scale === 'K' ? 0 : 1).replace('.', ',')} {UNIT[scale]}</text>
    </svg>
  )
}
