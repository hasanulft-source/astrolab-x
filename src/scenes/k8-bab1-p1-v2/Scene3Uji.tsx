import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const MAKANAN = [
  { nama: 'Nasi', icon: '🍚', amilum: true, hasil: 'Biru kehitaman pekat' },
  { nama: 'Telur rebus', icon: '🥚', amilum: false, hasil: 'Tetap cokelat iodin (tidak berubah)' },
  { nama: 'Roti', icon: '🍞', amilum: true, hasil: 'Biru kehitaman' },
  { nama: 'Daging', icon: '🍗', amilum: false, hasil: 'Tidak berubah warna' },
  { nama: 'Kentang', icon: '🥔', amilum: true, hasil: 'Biru kehitaman pekat' },
]

export function Scene3Uji({ onUnlock }: DiscoverySceneProps) {
  const [tested, setTested] = useState<Set<number>>(new Set())
  const [revealed, setRevealed] = useState(false)

  const test = (i: number) => {
    setTested(t => {
      const n = new Set(t).add(i)
      if (n.size === MAKANAN.length) onUnlock()
      return n
    })
  }

  return (
    <div className={styles.polaPanel}>
      <div className={styles.chartPanel}>
        <div className={styles.chartTitle}>Tetesi tiap makanan dengan iodin — amati mana yang bereaksi.</div>
        <div className={local.testGrid}>
          {MAKANAN.map((m, i) => {
            const done = tested.has(i)
            return (
              <button key={i} className={`${local.testCard} ${done ? (m.amilum ? local.testDark : local.testSame) : ''}`} onClick={() => test(i)}>
                <span className={local.testIcon}>{m.icon}</span>
                <span className={local.testNama}>{m.nama}</span>
                {done && <span className={local.testHasil}>{m.hasil}</span>}
              </button>
            )
          })}
        </div>
      </div>
      <div className={styles.questPanel}>
        {tested.size < MAKANAN.length ? (
          <div className={styles.sliderHint}>Uji {MAKANAN.length - tested.size} makanan lagi untuk melihat polanya</div>
        ) : !revealed ? (
          <button className={styles.revealBtn} onClick={() => setRevealed(true)}>Apa polanya? →</button>
        ) : (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Iodin adalah indikator khusus amilum (karbohidrat).</div>
            <p className={styles.conceptText}>Nasi, roti, dan kentang — semuanya sumber <strong>karbohidrat (amilum)</strong> — bereaksi jadi biru kehitaman. Telur dan daging (protein) tidak bereaksi sama sekali. Iodin bereaksi <strong>secara spesifik</strong> dengan amilum, bukan dengan makanan secara umum.</p>
          </div>
        )}
      </div>
    </div>
  )
}
