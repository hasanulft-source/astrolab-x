import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
export function SceneEfisiensi({ onUnlock }: DiscoverySceneProps) {
  const [hemat, setHemat] = useState('')
  const [saved, setSaved] = useState(false)
  const save = () => { setSaved(true); onUnlock() }
  return (
    <div className={styles.wrap}>
      <div className={styles.levelBadge}>SCENE 03  -  ANALISIS EFISIENSI  -  PENUTUPAN LEVEL 2</div>
      <p className={styles.prompt}>Seberapa banyak waktu yang bisa dihemat dengan mengenali pola <em>lebih awal</em>?</p>
      <div style={{display:'flex',flexDirection:'column',gap:12,flex:1}}>
        <div className={styles.missionCard}>
          <div className={styles.missionCardTitle}>ANALOGI PROGRAMMER</div>
          <div className={styles.missionCardText}>
            Programmer yang mengenali pola ini bisa menulis SATU fungsi untuk ketiga skenario — bukan tiga program terpisah. Hasilnya: 90% lebih sedikit kode, 3x lebih cepat, dan jauh lebih mudah diperbaiki jika ada bug.
          </div>
        </div>
        <div className={styles.panel} style={{flex:1}}>
          <div className={styles.panelTitle}>Kalkulasi Efisiensimu</div>
          <table className={styles.table}>
            <thead><tr><th>Skenario</th><th>Waktu tanpa pola</th><th>Waktu dengan pola</th><th>Dihemat</th></tr></thead>
            <tbody>
              {['A (Piket Kelas)','B (Cuci Piring)','C (Siram Tanaman)'].map((s,i)=>(
                <tr key={i}><td>{s}</td><td>_____ menit</td><td>_____ menit</td><td>_____ menit</td></tr>
              ))}
            </tbody>
          </table>
          <div style={{marginTop:12}}>
            <div style={{fontSize:15,fontWeight:600,color:'#09637e',marginBottom:6}}>Mengapa pengenalan pola membuat pekerjaan jadi lebih efisien?</div>
            <textarea className={styles.noteArea} rows={4} disabled={saved}
              placeholder="Karena jika sudah tahu polanya, kita tidak perlu mulai dari nol lagi..."
              value={hemat} onChange={e=>setHemat(e.target.value)}/>
          </div>
        </div>
      </div>
      {!saved ? (
        <button className={styles.btn+' '+styles.btnViolet} disabled={!hemat.trim()} style={{opacity:hemat.trim()?1:.4}} onClick={save}>
          Simpan analisis ke Mission Log
        </button>
      ) : (
        <div className={styles.statusFooter}>
          <div className={styles.statusLevel}>LEVEL 2 SELESAI</div>
          <div className={styles.statusText}>Pola ditemukan dan efisiensinya dipahami. Lanjutkan ke Level 3: Bahasa Robot.</div>
        </div>
      )}
    </div>
  )
}
