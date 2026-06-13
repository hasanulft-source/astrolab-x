export interface Series { points: [number, number][]; color?: string; area?: boolean; areaColor?: string }
interface Props { series: Series[]; xMax: number; yMax: number; xLabel?: string; yLabel?: string }
const X0 = 50, X1 = 348, Y0 = 24, Y1 = 200

export function MotionGraph({ series, xMax, yMax, xLabel, yLabel }: Props) {
  const xOf = (x: number) => X0 + (x / xMax) * (X1 - X0)
  const yOf = (y: number) => Y1 - (y / yMax) * (Y1 - Y0)
  return (
    <svg viewBox="0 0 370 244" style={{ width: '100%', height: '100%', display: 'block' }}>
      {[0.25, 0.5, 0.75, 1].map(f => <line key={f} x1={X0} y1={yOf(f * yMax)} x2={X1} y2={yOf(f * yMax)} stroke="#dbeaed" strokeWidth={1} />)}
      <line x1={X0} y1={Y0} x2={X0} y2={Y1} stroke="#5f8b99" strokeWidth={1.5} />
      <line x1={X0} y1={Y1} x2={X1} y2={Y1} stroke="#5f8b99" strokeWidth={1.5} />
      {series.map((s, i) => {
        const col = s.color || '#088395'
        const pts = s.points.map(([x, y]) => `${xOf(x)},${yOf(y)}`).join(' ')
        const areaPts = `${xOf(s.points[0][0])},${Y1} ${pts} ${xOf(s.points[s.points.length - 1][0])},${Y1}`
        return (
          <g key={i}>
            {s.area && <polygon points={areaPts} fill={s.areaColor || 'rgba(34,211,238,0.18)'} />}
            <polyline points={pts} fill="none" stroke={col} strokeWidth={3} strokeLinejoin="round" strokeLinecap="round" />
          </g>
        )
      })}
      {xLabel && <text x={(X0 + X1) / 2} y={236} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={15} fontWeight={600} fill="#557884">{xLabel}</text>}
      {yLabel && <text x={15} y={(Y0 + Y1) / 2} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={15} fontWeight={600} fill="#557884" transform={`rotate(-90 15 ${(Y0 + Y1) / 2})`}>{yLabel}</text>}
    </svg>
  )
}
