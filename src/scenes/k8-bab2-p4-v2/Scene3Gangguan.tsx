import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const GANGGUAN = [
  { nama: 'Batu Ginjal', sebab: 'Endapan garam/mineral yang mengeras di saluran kemih', gejala: 'Nyeri hebat di pinggang, sulit buang air kecil' },
  { nama: 'Gagal Ginjal', sebab: 'Ginjal kehilangan kemampuan menyaring darah secara efektif', gejala: 'Penumpukan racun dalam darah, butuh cuci darah (dialisis)' },
  { nama: 'Diabetes Insipidus', sebab: 'Gangguan reabsorpsi air di tubulus ginjal', gejala: 'Urine berlebihan dan sangat encer, mudah dehidrasi' },
  { nama: 'Albuminuria', sebab: 'Kebocoran filter glomerulus sehingga protein ikut lolos', gejala: 'Protein (albumin) ditemukan dalam urine — tanda kerusakan filter' },
]

export function Scene3Gangguan({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set())
  const spot = (i: number) => {
    setRevealed(p => {
      const n = new Set([...p, i])
      if (n.size === GANGGUAN.length) onUnlock()
      return n
    })
  }

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Ketika salah satu tahap tadi terganggu, muncul gangguan ginjal. <strong>Klik untuk pelajari.</strong></p>
      <div className={styles.questPanel}>
        {GANGGUAN.map((g, i) => {
          const r = revealed.has(i)
          return (
            <div key={i} className={styles.questItem}>
              <div className={styles.questText}>{g.nama}</div>
              {!r ? (
                <button className={styles.revealBtn} onClick={() => spot(i)} style={{fontSize:14,padding:'8px 16px'}}>Apa penyebabnya? →</button>
              ) : (
                <div className={styles.insight}><span className={styles.insightIcon}>💡</span><b>Sebab:</b> {g.sebab} — <b>Gejala:</b> {g.gejala}</div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
