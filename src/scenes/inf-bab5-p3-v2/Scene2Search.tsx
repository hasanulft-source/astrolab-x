import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene2Search.module.css'
const OPS = [
  {op:'"..."', nama:'Frasa Persis', desc:'Hasil harus mengandung frasa itu persis, urutan sama', ex:'"gempa bumi aceh" → bukan hasil acak berisi kata gempa/bumi/aceh terpisah'},
  {op:'site:', nama:'Batasi Situs', desc:'Cari hanya di domain tertentu', ex:'materi fisika site:kemdikbud.go.id → hanya dari situs Kemdikbud'},
  {op:'-kata', nama:'Kecualikan', desc:'Buang hasil yang mengandung kata tertentu', ex:'jaguar -mobil → hewan jaguar, bukan mobil'},
  {op:'filetype:', nama:'Jenis File', desc:'Cari file dengan format tertentu', ex:'laporan filetype:pdf → hanya file PDF'},
  {op:'OR', nama:'Salah Satu', desc:'Hasil mengandung A atau B', ex:'SMP OR SMA kurikulum → salah satu boleh'},
]
export function Scene2Search({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState(0)
  const [unlocked, setUnlocked] = useState(false)
  const o = OPS[sel]
  const pick = (i: number) => { setSel(i); if (!unlocked) { setUnlocked(true); onUnlock() } }
  return (
    <>
      <p className={styles.prompt}>5 operator pencarian yang mengubahmu dari pemula jadi peneliti. <em>Klik untuk pelajari.</em></p>
      <div className={styles.main}>
        <div className={styles.list}>
          {OPS.map((o,i)=>(
            <button key={i} className={`${styles.item} ${sel===i?styles.itemSel:''}`} onClick={()=>pick(i)}>
              <span className={styles.op}>{o.op}</span>
              <span className={styles.opName}>{o.nama}</span>
            </button>
          ))}
        </div>
        <div className={styles.detail}>
          <div className={styles.dOp}>{o.op}</div>
          <div className={styles.dNama}>{o.nama}</div>
          <div className={styles.dDesc}>{o.desc}</div>
          <div className={styles.dEx}><span className={styles.exLabel}>Contoh:</span> {o.ex}</div>
        </div>
      </div>
    </>
  )
}
