import { useState, useEffect, useRef } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [time, setTime] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [unlocked, setU] = useState(false)
  const ref = useRef<number>()

  useEffect(() => {
    if (playing && time < 100) {
      ref.current = window.setTimeout(() => setTime(t => t + 1), 60)
    } else setPlaying(false)
    return () => clearTimeout(ref.current)
  }, [playing, time])

  useEffect(() => {
    if (time > 50 && !unlocked) { setU(true); onUnlock() }
  }, [time])

  // Suhu function: naik, plateau di 0C (melting), naik, plateau di 100C (boiling), naik
  const temp = (t: number) => {
    if (t < 15) return -10 + t * 0.67
    if (t < 35) return 0
    if (t < 75) return (t - 35) * 2.5
    if (t < 90) return 100
    return 100 + (t - 90) * 0.5
  }
  const points = Array.from({ length: time + 1 }, (_, t) => ({ x: 10 + t * 1.8, y: 140 - (temp(t) + 10) * 0.95 }))

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Panaskan es batu hingga mendidih. Klik mulai, amati grafiknya terbentuk.</p>
        <button className={styles.revealBtn} onClick={() => setPlaying(!playing)} disabled={time >= 100}>
          {time >= 100 ? '✓ Selesai dipanaskan' : playing ? 'Pause' : time === 0 ? 'Mulai panaskan' : 'Lanjutkan'}
        </button>
        <div className={local.tempReadout}>
          <span>Suhu saat ini:</span>
          <strong>{temp(time).toFixed(0)}°C</strong>
        </div>
        <div className={styles.sliderHint}>{!unlocked ? 'Terus panaskan hingga lewat setengah jalan' : 'Perhatikan area yang datar (plateau) ✓'}</div>
      </div>
      <div className={local.chartPanel}>
        <svg viewBox="0 0 200 150" className={local.liveChart}>
          <line x1="10" y1="9.5" x2="190" y2="9.5" stroke="#e2e6ea" strokeWidth="1" strokeDasharray="2,2" />
          <text x="192" y="12" fontSize="7" fill="#9ca3af">100°C</text>
          <line x1="10" y1="104.5" x2="190" y2="104.5" stroke="#e2e6ea" strokeWidth="1" strokeDasharray="2,2" />
          <text x="192" y="107" fontSize="7" fill="#9ca3af">0°C</text>
          <polyline points={points.map(p => `${p.x},${p.y}`).join(' ')} fill="none" stroke="#0d6b7a" strokeWidth="2.5" />
          {points.length > 0 && <circle cx={points[points.length-1].x} cy={points[points.length-1].y} r="4" fill="#0d6b7a" />}
        </svg>
      </div>
    </div>
  )
}
