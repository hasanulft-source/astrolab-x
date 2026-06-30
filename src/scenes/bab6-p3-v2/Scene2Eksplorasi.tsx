import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const HUBUNGAN = [
  { from:'Padi', to:'Tikus' }, { from:'Padi', to:'Belalang' },
  { from:'Tikus', to:'Ular' }, { from:'Tikus', to:'Elang' },
  { from:'Belalang', to:'Katak' }, { from:'Katak', to:'Ular' },
  { from:'Ular', to:'Elang' }, { from:'Ular', to:'Burung Hantu' },
]
const ORGANISME = ['Padi','Belalang','Tikus','Katak','Ular','Burung Hantu','Elang']

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState(2)
  const next = () => {
    const nr = Math.min(revealed + 2, HUBUNGAN.length)
    setRevealed(nr)
    if (nr >= HUBUNGAN.length) onUnlock()
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Tambahkan hubungan makan-dimakan satu per satu — amati jaringnya makin kompleks.</p>
        <button className={styles.revealBtn} onClick={next} disabled={revealed >= HUBUNGAN.length}>
          {revealed >= HUBUNGAN.length ? '✓ Jaring lengkap' : 'Tambah hubungan →'}
        </button>
        <div className={local.relList}>
          {HUBUNGAN.slice(0, revealed).map((h, i) => (
            <div key={i} className={local.relItem}>{h.from} → {h.to}</div>
          ))}
        </div>
      </div>
      <div className={local.webViz}>
        <div className={local.webGrid}>
          {ORGANISME.map(o => <div key={o} className={local.orgNode}>{o}</div>)}
        </div>
        <div className={local.webHint}>{revealed} dari {HUBUNGAN.length} hubungan terbentuk</div>
      </div>
    </div>
  )
}
