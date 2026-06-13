interface Props { rho: number }
const TOP = 84, BOT = 300, X = 34, Wd = 172, OW = 88, OH = 76

export function FloatTank({ rho }: Props) {
  const OX = (240 - OW) / 2
  let oy: number
  if (rho < 1) oy = TOP - (1 - rho) * OH
  else if (rho > 1) oy = BOT - OH - 4
  else oy = TOP + (BOT - TOP - OH) / 2
  const status = rho < 0.98 ? { t: 'Mengapung', c: '#088395' } : rho > 1.02 ? { t: 'Tenggelam', c: '#d66a3f' } : { t: 'Melayang', c: '#088395' }
  return (
    <svg viewBox="0 0 240 330" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs><clipPath id="ft-clip"><rect x={X} y={TOP} width={Wd} height={BOT - TOP} /></clipPath></defs>
      <rect x={X} y={TOP} width={Wd} height={BOT - TOP} fill="rgba(34,180,210,0.16)" />
      <g clipPath="url(#ft-clip)">
        <rect x={OX} y={oy} width={OW} height={OH} rx={6} fill="#088395" opacity={0.92} />
        <text x={OX + OW / 2} y={oy + OH / 2 + 5} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={19} fontWeight={700} fill="#ffffff">{rho.toFixed(2)}</text>
      </g>
      <line x1={X} y1={TOP} x2={X + Wd} y2={TOP} stroke="#088395" strokeWidth={2} opacity={0.7} />
      <path d={`M${X} ${TOP} L${X} ${BOT} L${X + Wd} ${BOT} L${X + Wd} ${TOP}`} fill="none" stroke="#5f8b99" strokeWidth={3} />
      <text x={120} y={324} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={20} fontWeight={700} letterSpacing="0.08em" fill={status.c}>{status.t}</text>
    </svg>
  )
}
