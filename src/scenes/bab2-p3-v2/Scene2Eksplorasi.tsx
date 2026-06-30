import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const PERUBAHAN = [
  { from:'padat', to:'cair',  nama:'Mencair',     contoh:'Es batu meleleh',         arah:'lepas kalor? terima kalor', kalor:'terima' },
  { from:'cair',  to:'gas',   nama:'Menguap',     contoh:'Air mendidih jadi uap',   arah:'', kalor:'terima' },
  { from:'gas',   to:'cair',  nama:'Mengembun',   contoh:'Embun di gelas dingin',   arah:'', kalor:'lepas' },
  { from:'cair',  to:'padat', nama:'Membeku',     contoh:'Air jadi es di freezer',  arah:'', kalor:'lepas' },
  { from:'padat', to:'gas',   nama:'Menyublim',   contoh:'Kapur barus menghilang',  arah:'', kalor:'terima' },
  { from:'gas',   to:'padat', nama:'Mengkristal', contoh:'Salju terbentuk di awan', arah:'', kalor:'lepas' },
]
const ICON: Record<string,string> = { padat:'🧊', cair:'💧', gas:'💨' }

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState<number | null>(null)
  const [seen, setSeen] = useState<Set<number>>(new Set())

  const pick = (i: number) => {
    setSel(i)
    const ns = new Set(seen).add(i)
    setSeen(ns)
    if (ns.size >= 6) onUnlock()
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Klik tiap perubahan wujud untuk melihat contoh nyatanya dan arah kalornya.</p>
        <div className={local.changeGrid}>
          {PERUBAHAN.map((p, i) => (
            <button key={i} className={`${local.changeBtn} ${sel === i ? local.changeOn : ''} ${seen.has(i) ? local.changeSeen : ''}`} onClick={() => pick(i)}>
              <span>{ICON[p.from]} → {ICON[p.to]}</span>
              <span className={local.changeNama}>{p.nama}</span>
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 6 ? `Jelajahi ${6 - seen.size} perubahan lagi` : 'Semua perubahan sudah dijelajahi ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.changeDetail}>
            <div className={local.cdIcons}>{ICON[PERUBAHAN[sel].from]} → {ICON[PERUBAHAN[sel].to]}</div>
            <div className={local.cdNama}>{PERUBAHAN[sel].nama}</div>
            <div className={local.cdContoh}>{PERUBAHAN[sel].contoh}</div>
            <div className={local.cdKalor} style={{ background: PERUBAHAN[sel].kalor === 'terima' ? '#fff7ed' : '#eff6ff', color: PERUBAHAN[sel].kalor === 'terima' ? '#c2410c' : '#1d4ed8' }}>
              {PERUBAHAN[sel].kalor === 'terima' ? '🔥 Menerima kalor (butuh energi)' : '❄️ Melepas kalor (membuang energi)'}
            </div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu perubahan</div>}
      </div>
    </div>
  )
}
