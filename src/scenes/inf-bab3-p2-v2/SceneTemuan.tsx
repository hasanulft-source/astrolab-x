import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
export function SceneTemuan({ onUnlock }: DiscoverySceneProps) {
  const [catatan, setCatatan] = useState('')
  const [saved, setSaved] = useState(false)
  const save = () => { setSaved(true); onUnlock() }
  return (
    <div className={styles.wrap}>
      <div className={styles.babakBadge}>SCENE 04 - TEMUAN BABAK 2</div>
      <p className={styles.prompt}>Catat temuanmu dari Babak 2 ke <em>case file</em>.</p>
      <div className={styles.evidenceBox}>
        <span className={styles.evidenceLabel}>RINGKASAN PENCARIAN - BABAK 2</span>
        {[['x','Tidak ada berita resmi razia HP di SMP Banda Aceh'],['x','Tidak ada laporan virus aplikasi dari Kemdikbud/Dinas Pendidikan'],['x','Tidak ada media terverifikasi yang melaporkan insiden ini'],['?','Pesan beredar luas tapi tidak ada sumber primernya']].map(([s,t],i)=>(
          <div key={i} style={{display:'flex',gap:10,alignItems:'flex-start',fontSize:14,marginBottom:5}}>
            <span style={{fontWeight:700,color:s==='?'?'#b45309':'#dc2626',flexShrink:0}}>{s==='x'?'x':'?'}</span>
            <span style={{color:'#3a3d42'}}>{t}</span>
          </div>
        ))}
      </div>
      <div className={styles.panel} style={{flex:1}}>
        <div className={styles.panelTitle} style={{color:'#b45309'}}>Catatan Detektif - Babak 2</div>
        <textarea className={styles.noteArea} style={{flex:1,minHeight:100}} rows={5}
          placeholder="Apa yang sudah kamu temukan? Mengapa ketidakhadiran sumber resmi itu penting?"
          value={catatan} onChange={e=>setCatatan(e.target.value)} disabled={saved}/>
      </div>
      {!saved ? (
        <button className={styles.btn+' '+styles.btnAmber} disabled={!catatan.trim()} style={{opacity:catatan.trim()?1:.4}} onClick={save}>
          Simpan ke Case File
        </button>
      ) : (
        <div className={styles.caseFooter}>
          <div className={styles.caseFooterStatus}>BERKAS 2/6 - KECURIGAAN PERTAMA TERCATAT</div>
          <div className={styles.caseFooterText}>Tidak ada sumber resmi. Lanjutkan ke Babak 3: Siapa di Balik Ini?</div>
        </div>
      )}
    </div>
  )
}
