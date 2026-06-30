import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const VARIABEL = [
  { tipe:'Bebas (IV)', icon:'🔧', def:'Yang sengaja kita ubah untuk melihat pengaruhnya.', contoh:'Jumlah garam yang ditambahkan ke air' },
  { tipe:'Terikat (DV)', icon:'📊', def:'Yang kita ukur/amati sebagai hasil perubahan IV.', contoh:'Posisi telur (tenggelam/mengapung)' },
  { tipe:'Kontrol (CV)', icon:'🔒', def:'Yang dijaga tetap sama agar hasil adil dan valid.', contoh:'Jenis telur, volume air, ukuran gelas' },
]

const KUIS = [
  { soal:'"Suhu air" dalam percobaan ini adalah...', jawab:'Kontrol (CV)', opsi:['Bebas (IV)','Terikat (DV)','Kontrol (CV)'] },
  { soal:'"Apakah telur mengapung atau tidak" adalah...', jawab:'Terikat (DV)', opsi:['Bebas (IV)','Terikat (DV)','Kontrol (CV)'] },
]

export function Scene3Variabel({ onUnlock }: DiscoverySceneProps) {
  const [tab, setTab]   = useState(0)
  const [picks, setPicks] = useState<Record<number,string>>({})
  const [checked, setChecked] = useState(false)
  const allDone = Object.keys(picks).length === KUIS.length
  const check = () => { setChecked(true); onUnlock() }

  return (
    <div className={styles.polaPanel}>
      <div className={local.varPanel}>
        <div className={styles.chartTitle}>Tiga jenis variabel dalam percobaan ilmiah:</div>
        <div className={local.varTabs}>
          {VARIABEL.map((v, i) => (
            <button key={i} className={`${local.varTab} ${tab === i ? local.varTabOn : ''}`} onClick={() => setTab(i)}>
              {v.icon} {v.tipe.split(' ')[0]}
            </button>
          ))}
        </div>
        <div className={local.varDetail}>
          <div className={local.varTipe}>{VARIABEL[tab].icon} {VARIABEL[tab].tipe}</div>
          <div className={local.varDef}>{VARIABEL[tab].def}</div>
          <div className={local.varContoh}><span>Dalam percobaan telur:</span> {VARIABEL[tab].contoh}</div>
        </div>
      </div>
      <div className={styles.questPanel}>
        <div className={styles.chartTitle}>Uji pemahamanmu:</div>
        {KUIS.map((k, i) => (
          <div key={i} className={styles.questItem}>
            <div className={styles.questText}>{k.soal}</div>
            <div className={styles.questOpts}>
              {k.opsi.map(o => {
                const isPicked = picks[i] === o
                const right = checked && o === k.jawab
                const wrong = checked && isPicked && o !== k.jawab
                return (
                  <button key={o}
                    className={`${styles.questOpt} ${isPicked ? styles.picked : ''} ${right ? styles.optCorrect : ''} ${wrong ? styles.optWrong : ''}`}
                    onClick={() => !checked && setPicks(p => ({...p, [i]: o}))}
                    disabled={checked}>{o}</button>
                )
              })}
            </div>
          </div>
        ))}
        {allDone && !checked && <button className={styles.revealBtn} onClick={check}>Cek jawabanku →</button>}
        {checked && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Identifikasi variabel = fondasi eksperimen yang valid.</div>
            <p className={styles.conceptText}>Tanpa kontrol variabel, kita tidak bisa tahu <strong>apa yang sebenarnya menyebabkan</strong> hasilnya.</p>
          </div>
        )}
      </div>
    </div>
  )
}
