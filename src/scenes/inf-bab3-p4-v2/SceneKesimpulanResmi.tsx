import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
export function SceneKesimpulanResmi({ onUnlock }: DiscoverySceneProps) {
  const [kesimpulan, setKesimpulan] = useState('')
  const [saved, setSaved] = useState(false)
  const save = () => { setSaved(true); onUnlock() }
  return (
    <div className={styles.wrap}>
      <div className={styles.babakBadge}>SCENE 04 - KESIMPULAN RESMI - KLIMAKS KASUS</div>
      <p className={styles.prompt}>Berdasarkan investigasi 4 babak - tulis <em>kesimpulan resmi detektif</em>.</p>
      <div className={styles.evidenceBox}>
        <span className={styles.evidenceLabel}>BUKTI YANG SUDAH TERKUMPUL (Babak 1-4)</span>
        {['Babak 1: Pesan adalah KONTEN yang dikemas untuk viral',
          'Babak 2: Tidak ada sumber resmi yang mengkonfirmasi kejadian ini',
          'Babak 3: Akun penyebar gagal 5/5 kriteria CRAAP',
          'Babak 4: Pesan mengandung fakta asli (umpan) dicampur klaim palsu - teknik SEMI-TRUE'].map((b,i)=>(
          <div key={i} style={{display:'flex',gap:8,marginBottom:5,fontSize:13}}>
            <span style={{color:'#b45309',fontWeight:700,flexShrink:0}}>ok</span>
            <span style={{color:'#3a3d42'}}>{b}</span>
          </div>
        ))}
      </div>
      <div className={styles.panel} style={{flex:1}}>
        <div className={styles.panelTitle} style={{color:'#b45309'}}>Kesimpulan Resmi Detektif - Kasus AC-2027-003</div>
        <div style={{fontSize:13,color:'#6b7280',marginBottom:8}}>Apakah pesan ini hoaks, fakta, atau campuran? Jelaskan merujuk bukti dari Babak 1-4:</div>
        <textarea className={styles.noteArea} style={{flex:1,minHeight:120}} rows={6} disabled={saved}
          placeholder="Kesimpulan resmi saya: Pesan viral razia HP yang beredar adalah HOAKS SEMI-TRUE karena..."
          value={kesimpulan} onChange={e=>setKesimpulan(e.target.value)}/>
      </div>
      {!saved ? (
        <button className={styles.btn+' '+styles.btnAmber} disabled={!kesimpulan.trim()} style={{opacity:kesimpulan.trim()?1:.4}} onClick={save}>
          Simpan Kesimpulan Resmi
        </button>
      ) : (
        <div className={styles.caseFooter}>
          <div className={styles.caseFooterStatus}>KESIMPULAN RESMI TERSIMPAN - KASUS HAMPIR DITUTUP</div>
          <div className={styles.caseFooterText}>Investigasi inti selesai. Arsipkan bukti di Babak 5, susun laporan akhir di Babak 6.</div>
        </div>
      )}
    </div>
  )
}
