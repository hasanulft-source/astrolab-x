export interface CurveDef { pts: [number, number][]; meltT: number; boilT: number; name: string }
export const WATER: CurveDef = { name: 'Air', pts: [[0, -20], [0.15, 0], [0.38, 0], [0.55, 100], [0.80, 100], [1, 120]], meltT: 0, boilT: 100 }
export const OTHER: CurveDef = { name: 'Zat X', pts: [[0, 10], [0.2, 45], [0.42, 45], [0.6, 90], [0.82, 90], [1, 110]], meltT: 45, boilT: 90 }

const TMIN = -30, TMAX = 130, X0 = 52, X1 = 440, Y0 = 42, Y1 = 262

const xOf = (p: number) => X0 + p * (X1 - X0)
const yOf = (t: number) => Y1 - ((t - TMIN) / (TMAX - TMIN)) * (Y1 - Y0)

export function tempAt(p: number, c: CurveDef = WATER): number {
  const pts = c.pts
  for (let i = 0; i < pts.length - 1; i++) {
    const [pa, ta] = pts[i], [pb, tb] = pts[i + 1]
    if (p >= pa && p <= pb) { const f = pb === pa ? 0 : (p - pa) / (pb - pa); return ta + (tb - ta) * f }
  }
  return pts[pts.length - 1][1]
}

export function zoneAt(p: number, c: CurveDef = WATER): string {
  if (p < c.pts[1][0]) return 'Padat — memanas'
  if (p < c.pts[2][0]) return 'Mencair — suhu tetap'
  if (p < c.pts[3][0]) return 'Cair — memanas'
  if (p < c.pts[4][0]) return 'Mendidih — suhu tetap'
  return 'Gas — memanas'
}

interface Props { progress?: number; curve?: CurveDef }
export function HeatingCurve({ progress, curve = WATER }: Props) {
  const poly = curve.pts.map(([p, t]) => `${xOf(p)},${yOf(t)}`).join(' ')
  const mx = progress != null ? xOf(progress) : 0
  const mt = progress != null ? tempAt(progress, curve) : 0
  const my = progress != null ? yOf(mt) : 0
  return (
    <svg viewBox="0 0 470 300" style={{ width: '100%', height: '100%', display: 'block' }}>
      <line x1={X0} y1={Y0} x2={X0} y2={Y1} stroke="#5f8b99" strokeWidth={1.5} />
      <line x1={X0} y1={Y1} x2={X1} y2={Y1} stroke="#5f8b99" strokeWidth={1.5} />
      <line x1={X0} y1={yOf(curve.meltT)} x2={X1} y2={yOf(curve.meltT)} stroke="#c97a16" strokeWidth={1} strokeDasharray="4 4" opacity={0.5} />
      <line x1={X0} y1={yOf(curve.boilT)} x2={X1} y2={yOf(curve.boilT)} stroke="#088395" strokeWidth={1} strokeDasharray="4 4" opacity={0.5} />
      <text x={X0 - 6} y={yOf(curve.meltT) + 4} textAnchor="end" fontFamily="var(--font-mono)" fontSize={15} fontWeight={600} fill="#c97a16">{curve.meltT}°</text>
      <text x={X0 - 6} y={yOf(curve.boilT) + 4} textAnchor="end" fontFamily="var(--font-mono)" fontSize={15} fontWeight={600} fill="#088395">{curve.boilT}°</text>
      <polyline points={poly} fill="none" stroke="#088395" strokeWidth={3} strokeLinejoin="round" strokeLinecap="round" />
      {progress != null && <>
        <line x1={mx} y1={Y0} x2={mx} y2={Y1} stroke="#088395" strokeWidth={1} strokeDasharray="3 3" opacity={0.6} />
        <circle cx={mx} cy={my} r={6} fill="#088395" /><circle cx={mx} cy={my} r={11} fill="#088395" opacity={0.25} />
      </>}
      <text x={(X0 + X1) / 2} y={290} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={15} fontWeight={600} fill="#557884">kalor / waktu →</text>
      <text x={16} y={(Y0 + Y1) / 2} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={15} fontWeight={600} fill="#557884" transform={`rotate(-90 16 ${(Y0 + Y1) / 2})`}>suhu (°C)</text>
    </svg>
  )
}
