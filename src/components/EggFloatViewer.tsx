import { useMemo } from 'react'
import styles from './EggFloatViewer.module.css'

interface Props { salt: number; size?: 'sm' | 'md' | 'lg'; showStatus?: boolean }

export function eggStatus(salt: number): { label: string; color: string } {
  const f = salt / 10
  if (f < 0.25) return { label: 'Tenggelam', color: '#557884' }
  if (f < 0.6)  return { label: 'Melayang',  color: '#088395' }
  return { label: 'Mengapung', color: '#088395' }
}

export function EggFloatViewer({ salt, size = 'md', showStatus = false }: Props) {
  const dots = useMemo(() => {
    let s = 12345
    const rnd = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff }
    return Array.from({ length: 46 }, () => ({ x: 70 + rnd() * 140, y: 120 + rnd() * 205, r: 0.8 + rnd() * 1.4 }))
  }, [])

  const frac = Math.max(0, Math.min(1, salt / 10))
  const eggCY = 300 - frac * 150
  const nDots = Math.round(frac * dots.length)
  const st = eggStatus(salt)

  return (
    <div className={`${styles.wrap} ${styles[size]}`}>
      <svg viewBox="0 0 280 384" className={styles.svg}>
        <defs>
          <linearGradient id="ef-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#cfe3e7" /><stop offset="100%" stopColor="#e6f2f3" />
          </linearGradient>
          <radialGradient id="ef-egg" cx="38%" cy="30%">
            <stop offset="0%" stopColor="#fffdf5" /><stop offset="58%" stopColor="#f1e6cc" /><stop offset="100%" stopColor="#d6c096" />
          </radialGradient>
        </defs>

        <path d="M55 108 L225 108 L208 336 Q206 343 196 343 L84 343 Q74 343 72 336 Z" fill="url(#ef-water)" opacity="0.94" />
        {dots.slice(0, nDots).map((d, i) => <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#cfe3e7" opacity="0.5" />)}
        <line x1="55" y1="108" x2="225" y2="108" stroke="#088395" strokeWidth="1.5" opacity="0.5" />

        <ellipse cx="140" cy={eggCY} rx="26" ry="32" fill="url(#ef-egg)" stroke="#c9b27e" strokeWidth="1" />
        <ellipse cx="131" cy={eggCY - 10} rx="6.5" ry="10" fill="#ffffff" opacity="0.5" />

        <path d="M52 58 L228 58 L210 330 Q208 344 194 344 L86 344 Q72 344 70 330 Z" fill="none" stroke="#5f8b99" strokeWidth="3" />
        <line x1="52" y1="58" x2="228" y2="58" stroke="#5f8b99" strokeWidth="3.5" />
        <line x1="62" y1="78" x2="74" y2="300" stroke="#ffffff" strokeWidth="2.5" opacity="0.12" />

        {showStatus && <text x="140" y="374" textAnchor="middle" className={styles.status} fill={st.color}>{st.label}</text>}
      </svg>
    </div>
  )
}
