import type { HeroProps, Beat } from '../shell/Keynote'

export const massaJenisBeats: Beat[] = [
  { text: 'Tenggelam, atau terapung?' },
  { text: 'Mengapung.' },
  { text: 'Kerapatannya 0,6.', sub: 'gram per sentimeter kubik' },
  { text: 'Air = 1,0.' },
  { text: 'Lebih ringan dari air.' },
  { text: 'Besi? Tenggelam.' },
  { text: 'Lebih ringan naik. Lebih berat turun.', sub: 'Itulah massa jenis.' },
]

const TOP = 128, BOT = 344, LX = 56, RX = 424, OW = 132, OH = 120, OX = (480 - OW) / 2

export function MassaJenisHero({ step }: HeroProps) {
  const besi = step >= 5
  const dropped = step >= 1
  const showRho = besi ? step >= 5 : step >= 2
  const showWater = step >= 3
  const rho = besi ? '7,9' : '0,6'
  const fill = besi ? '#8d99a6' : '#c98a4f'
  const stroke = besi ? '#5f6b78' : '#9c6433'
  const oy = !dropped ? 14 : besi ? BOT - OH - 8 : TOP - 0.4 * OH
  const dir = besi ? 'down' : 'up'

  return (
    <svg viewBox="0 0 480 384" style={{ width: '100%', height: '100%', display: 'block' }}>
      <rect x={LX} y={TOP} width={RX - LX} height={BOT - TOP} fill="rgba(8,131,149,0.12)" />
      <line x1={LX} y1={TOP} x2={RX} y2={TOP} stroke="#088395" strokeWidth={2.5} opacity={0.55} />
      {showWater && <g style={{ transition: 'opacity .4s' }}>
        <line x1={LX} y1={TOP} x2={RX} y2={TOP} stroke="#088395" strokeWidth={2} strokeDasharray="7 6" />
        <text x={RX - 8} y={TOP - 12} textAnchor="end" fontFamily="var(--font-mono)" fontSize={22} fontWeight={600} fill="#088395">air 1,0</text>
      </g>}
      <path d={`M${LX} ${TOP - 18} L${LX} ${BOT} L${RX} ${BOT} L${RX} ${TOP - 18}`} fill="none" stroke="#5f8b99" strokeWidth={3.5} />
      <g style={{ transform: `translateY(${oy}px)`, transition: 'transform .8s cubic-bezier(.34,1.1,.4,1)' }}>
        <rect x={OX} y={0} width={OW} height={OH} rx={10} fill={fill} stroke={stroke} strokeWidth={3} />
        {showRho && <text x={OX + OW / 2} y={OH / 2 + 12} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={34} fontWeight={700} fill="#fff">{rho}</text>}
      </g>
      {dropped && dir === 'up' && <g opacity={0.85}><path d="M240 70 l-16 22 h32 z" fill="#088395" /></g>}
      {dropped && dir === 'down' && <g opacity={0.85}><path d="M240 312 l-16 -22 h32 z" fill="#d64545" /></g>}
    </svg>
  )
}
