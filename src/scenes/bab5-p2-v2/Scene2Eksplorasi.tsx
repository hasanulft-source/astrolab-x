import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const TAKSON = [
  { level:'Kingdom', analogi:'Negara',    contoh:'Animalia',  luas:'Semua hewan' },
  { level:'Filum',   analogi:'Provinsi',  contoh:'Chordata',  luas:'Hewan bertulang belakang' },
  { level:'Kelas',   analogi:'Kabupaten', contoh:'Mammalia',  luas:'Hewan menyusui' },
  { level:'Ordo',    analogi:'Kecamatan', contoh:'Carnivora', luas:'Karnivora' },
  { level:'Famili',  analogi:'Kelurahan', contoh:'Felidae',   luas:'Kucing-kucingan' },
  { level:'Genus',   analogi:'RW',        contoh:'Panthera',  luas:'Harimau, singa, macan' },
  { level:'Spesies', analogi:'No. Rumah', contoh:'tigris',    luas:'Harimau saja' },
]

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState(1)

  const next = () => {
    const nr = Math.min(revealed + 1, TAKSON.length)
    setRevealed(nr)
    if (nr >= TAKSON.length) onUnlock()
  }

  return (
    <div className={styles.exploPanel}>
      <div className={local.ladderPanel}>
        <div className={styles.chartTitle}>Tangga Taksonomi — seperti alamat yang makin spesifik.</div>
        {TAKSON.slice(0, revealed).map((t, i) => (
          <div key={i} className={local.rung} style={{ width: `${100 - i * 8}%` }}>
            <div className={local.rungLevel}>{t.level}</div>
            <div className={local.rungContoh}>{t.contoh}</div>
            <div className={local.rungLuas}>{t.luas} · ≈ {t.analogi}</div>
          </div>
        ))}
      </div>
      <div className={styles.side}>
        {revealed < TAKSON.length
          ? <button className={styles.revealBtn} onClick={next}>Persempit lagi →</button>
          : <div className={styles.conceptCard}>
              <div className={styles.conceptTitle}>Dari semua hewan, sampai HANYA harimau.</div>
              <p className={styles.conceptText}>7 tingkatan ini disebut <strong>takson</strong> — semakin ke bawah, semakin spesifik. Ini cara ilmuwan "menemukan alamat" satu spesies di antara jutaan lainnya.</p>
            </div>}
      </div>
    </div>
  )
}
