import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
const SUBMASALAH_COMMON = [
  'Menentukan jumlah tugas/pos yang ada',
  'Menentukan giliran atau rotasi orang',
  'Membuat urutan/jadwal waktu',
  'Menangani kondisi pengecualian (absen, hujan, dll)',
  'Mendistribusikan beban secara adil',
]
export function ScenePolaBanding({ onUnlock }: DiscoverySceneProps) {
  const [found, setFound] = useState<boolean[]>(Array(5).fill(false))
  const allFound = found.every(Boolean)
  const toggle = (i: number) => {
    setFound(f=>{const n=[...f];n[i]=!n[i]; if (n.every(Boolean)) onUnlock(); return n})
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.levelBadge}>SCENE 02  -  PERBANDINGAN POLA</div>
      <p className={styles.prompt}>Dari 3 skenario yang sudah dikerjakan — pola apa yang <em>muncul di semua skenario</em>?</p>
      <div className={styles.hint}>Klik sub-masalah yang kamu temukan muncul di SEMUA skenario (A, B, dan C).</div>
      <div style={{flex:1,display:'flex',flexDirection:'column',gap:8,overflow:'auto'}}>
        {SUBMASALAH_COMMON.map((sm,i) => (
          <button key={i} onClick={()=>toggle(i)}
            className={styles.chip+' '+(found[i]?styles.chipActive:styles.chipDefault)}
            style={{alignSelf:'flex-start',padding:'10px 18px',fontSize:15,borderRadius:10}}>
            {found[i]?'✓ ':''}{sm}
          </button>
        ))}
      </div>
      {allFound&&(
        <div>
          <div className={styles.hint} style={{marginBottom:10}}>
            Tepat! 5 sub-masalah yang sama muncul di semua skenario. Ini berarti: solusi untuk satu skenario bisa DIPAKAI ULANG untuk skenario lainnya — hanya perlu modifikasi kecil.
          </div>
          <div className={styles.statusFooter}>
            <div className={styles.statusLevel}>POLA DITEMUKAN</div>
            <div className={styles.statusText}>5 sub-masalah yang sama teridentifikasi. Lanjutkan ke analisis efisiensi.</div>
          </div>
        </div>
      )}
    </div>
  )
}
