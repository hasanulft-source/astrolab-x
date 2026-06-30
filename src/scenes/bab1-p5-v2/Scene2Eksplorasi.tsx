import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [salt, setSalt]     = useState(0)
  const [unlocked, setU]    = useState(false)
  const isFloat = salt >= 6
  const pct = Math.min(salt / 10, 1)
  const eggBottom = isFloat ? 60 + pct * 15 : 4

  const handle = (v: number) => {
    setSalt(v)
    if (v >= 6 && !unlocked) { setU(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>
          Tambahkan garam ke air sedikit demi sedikit.<br />
          Amati kapan telur mulai berubah posisi.
        </p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Garam</span>
          <input type="range" min={0} max={12} value={salt} onChange={e => handle(+e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{salt} sdm</span>
        </div>
        <div className={local.statusBox} style={{ background: isFloat ? '#dcfce7' : '#fee2e2', borderColor: isFloat ? '#16a34a' : '#dc2626' }}>
          <span style={{ fontSize:22 }}>{isFloat ? '⬆️' : '⬇️'}</span>
          <div>
            <div style={{ fontWeight:700, color: isFloat ? '#14532d' : '#7f1d1d' }}>
              {isFloat ? 'Telur mengapung' : 'Telur tenggelam'}
            </div>
            <div style={{ fontSize:13, color:'var(--discovery-ink-3)' }}>
              Kerapatan air: {(1.0 + salt * 0.025).toFixed(3)} g/mL
            </div>
          </div>
        </div>
        <div className={styles.sliderHint}>
          {!unlocked ? 'Terus tambah garam hingga telur mengapung →' : 'Kamu menemukan nilai ambangnya! ✓'}
        </div>
      </div>
      <div className={local.vizPanel}>
        <div className={local.glassLarge}>
          <div className={local.waterLarge} style={{ opacity: 0.6 + pct * 0.4 }} />
          <div className={local.eggLarge} style={{ bottom: `${eggBottom}%`, transition:'bottom .4s ease' }}>🥚</div>
        </div>
        <div className={local.rhoDivider}>
          <div className={local.rhoRow}><span>ρ air tawar</span><strong>1,000 g/mL</strong></div>
          <div className={local.rhoRow}><span>ρ telur</span><strong>~1,080 g/mL</strong></div>
          <div className={local.rhoRow}><span>ρ air garam saat ini</span><strong style={{color:'var(--discovery-primary)'}}>{(1.0 + salt * 0.025).toFixed(3)} g/mL</strong></div>
        </div>
      </div>
    </div>
  )
}
