import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [mode, setMode] = useState<'pantul' | 'bias'>('pantul')
  const [unlocked, setUnlocked] = useState(false)
  const pick = (m: 'pantul' | 'bias') => { setMode(m); if (!unlocked) { setUnlocked(true); onUnlock() } }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Dua peristiwa cahaya. <strong>Klik untuk bandingkan</strong> pemantulan dan pembiasan.</p>
        <div className={local.modeTabs}>
          <button className={`${local.mTab} ${mode === 'pantul' ? local.mOn : ''}`} onClick={() => pick('pantul')}>Pemantulan</button>
          <button className={`${local.mTab} ${mode === 'bias' ? local.mOn : ''}`} onClick={() => pick('bias')}>Pembiasan</button>
        </div>
        {mode === 'pantul' ? (
          <div className={local.explainBox}>
            <div className={local.explainTitle}>Pemantulan (Refleksi)</div>
            <div className={local.explainText}>Cahaya memantul kembali ke medium asalnya saat mengenai permukaan — sudut datang selalu sama besar dengan sudut pantul.</div>
            <div className={local.explainContoh}>Contoh: bayangan di cermin, pantulan di permukaan air tenang</div>
          </div>
        ) : (
          <div className={local.explainBox}>
            <div className={local.explainTitle}>Pembiasan (Refraksi)</div>
            <div className={local.explainText}>Cahaya berbelok arah saat berpindah dari satu medium ke medium lain yang kerapatannya berbeda — kecepatan cahaya berubah di tiap medium.</div>
            <div className={local.explainContoh}>Contoh: sedotan tampak patah, kolam terlihat lebih dangkal dari sebenarnya</div>
          </div>
        )}
      </div>
      <div className={local.vizCenter}>
        {mode === 'pantul' ? (
          <svg viewBox="0 0 200 140" className={local.raySvg}>
            <line x1="10" y1="130" x2="190" y2="130" stroke="var(--discovery-ink-3)" strokeWidth="2" />
            <line x1="100" y1="130" x2="60" y2="20" stroke="var(--discovery-primary)" strokeWidth="2.5" />
            <line x1="100" y1="130" x2="140" y2="20" stroke="var(--discovery-primary)" strokeWidth="2.5" strokeDasharray="4,3" />
            <line x1="100" y1="10" x2="100" y2="130" stroke="var(--line)" strokeWidth="1" strokeDasharray="2,2" />
          </svg>
        ) : (
          <svg viewBox="0 0 200 140" className={local.raySvg}>
            <rect x="10" y="70" width="180" height="60" fill="#dbeafe" opacity="0.5" />
            <line x1="10" y1="70" x2="190" y2="70" stroke="var(--discovery-ink-3)" strokeWidth="2" />
            <line x1="100" y1="70" x2="60" y2="10" stroke="var(--discovery-primary)" strokeWidth="2.5" />
            <line x1="100" y1="70" x2="130" y2="130" stroke="var(--discovery-primary)" strokeWidth="2.5" />
          </svg>
        )}
      </div>
    </div>
  )
}
