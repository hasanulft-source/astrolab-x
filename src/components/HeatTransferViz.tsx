import styles from './HeatTransferViz.module.css'
interface Props { mode: 'konduksi' | 'konveksi' | 'radiasi' }

const Defs = () => (
  <defs>
    <linearGradient id="htf" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#ffe27a" /><stop offset="0.5" stopColor="#f6a01e" /><stop offset="1" stopColor="#e8541e" />
    </linearGradient>
    <radialGradient id="htsun" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stopColor="#fff3c4" /><stop offset="0.5" stopColor="#ffce4d" /><stop offset="1" stopColor="#ef8a1e" />
    </radialGradient>
  </defs>
)

export function HeatTransferViz({ mode }: Props) {
  if (mode === 'konduksi') {
    const segs = Array.from({ length: 7 })
    return (
      <svg viewBox="0 0 420 240" style={{ width: '100%', height: '100%', display: 'block' }}>
        <Defs />
        <ellipse cx="65" cy="142" rx="14" ry="3" fill="#0f3d49" opacity="0.08" />
        {segs.map((_, i) => <rect key={i} className={styles.seg} style={{ animationDelay: `${i * 0.34}s` }} x={70 + i * 44} y={104} width={43} height={32} fill="#bcc6cb" stroke="#9aa7ad" strokeWidth={1} />)}
        <path d="M44 150 Q30 125 44 100 Q58 125 50 135 Q66 125 60 150 Z" fill="url(#htf)" className={styles.flame} />
        <text x={245} y={188} textAnchor="middle" fontFamily="var(--font-sans)" fontSize={17} fontWeight={500} fill="#557884">Panas merambat lewat zat padat →</text>
      </svg>
    )
  }
  if (mode === 'konveksi') {
    const loop = 'M210,196 C158,176 158,104 210,86 C262,104 262,176 210,196'
    return (
      <svg viewBox="0 0 420 240" style={{ width: '100%', height: '100%', display: 'block' }}>
        <Defs />
        <rect x={128} y={74} width={164} height={130} rx={6} fill="rgba(34,180,210,0.14)" stroke="#5f8b99" strokeWidth={2.5} />
        <path d="M196 214 Q182 226 196 234 Q210 226 204 230 Q218 226 210 214 Z" fill="url(#htf)" className={styles.flame} />
        <path d={loop} fill="none" stroke="#2c8294" strokeWidth={1.5} strokeDasharray="4 5" opacity={0.5} />
        {[0, 1, 2].map(i => (
          <circle key={i} r={8} fill={i === 0 ? '#d64545' : '#088395'} opacity={0.9}>
            <animateMotion dur="3.4s" repeatCount="indefinite" path={loop} begin={`${i * 1.13}s`} />
          </circle>
        ))}
        <text x={210} y={228} textAnchor="middle" fontFamily="var(--font-sans)" fontSize={16} fontWeight={500} fill="#557884">Partikel panas naik, dingin turun</text>
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 420 240" style={{ width: '100%', height: '100%', display: 'block' }}>
      <Defs />
      {[0, 1, 2].map(i => <circle key={i} className={styles.wave} style={{ animationDelay: `${i * 0.8}s` }} cx={92} cy={120} r={24} fill="none" stroke="#ef8a1e" strokeWidth={2.5} />)}
      <circle cx={92} cy={120} r={23} fill="url(#htsun)" className={styles.flame} />
      <rect x={324} y={84} width={36} height={72} rx={4} fill="#e6f2f3" stroke="#5f8b99" strokeWidth={2} />
      <text x={342} y={172} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={13} fontWeight={600} fill="#557884">objek</text>
      <text x={210} y={200} textAnchor="middle" fontFamily="var(--font-sans)" fontSize={16} fontWeight={500} fill="#557884">Panas berpindah tanpa medium (gelombang)</text>
    </svg>
  )
}
