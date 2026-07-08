import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
export function SceneKredibilitasFinal({ onUnlock }: DiscoverySceneProps) {
  const [verdict, setVerdict] = useState('')
  const [saved, setSaved] = useState(false)
  const save = () => { setSaved(true); onUnlock() }
  return (
    <div className={styles.wrap}>
      <div className={styles.babakBadge}>SCENE 04 - KESIMPULAN KREDIBILITAS - PENUTUPAN BABAK 3</div>
      <p className={styles.prompt}>Tulis <em>kesimpulan resmi</em> kredibilitas sumber - didukung bukti CRAAP, bukan kesan umum.</p>
      <div style={{display:'flex',gap:12,flex:1,minHeight:0}}>
        <div className={styles.evidenceBox} style={{flex:1}}>
          <span className={styles.evidenceLabel}>RINGKASAN CRAAP TEST - AKUN INFO ACEH UPDATE</span>
          {[['Currency','GAGAL - akun baru 14 hari'],['Relevance','GAGAL - semua konten sensasional'],['Authority','GAGAL - anonim, tidak terverifikasi'],['Accuracy','GAGAL - klaim tidak terkonfirmasi (Babak 2)'],['Purpose','GAGAL - tujuan viral, bukan informasi']].map(([k,v],i)=>(
            <div key={i} style={{display:'flex',gap:8,marginBottom:5,fontSize:13}}>
              <span style={{color:'#dc2626',fontWeight:700,minWidth:16}}>x</span>
              <span style={{color:'#b45309',fontWeight:600,minWidth:120}}>{k}:</span>
              <span style={{color:'#3a3d42'}}>{v}</span>
            </div>
          ))}
          <div style={{marginTop:12,padding:'8px 12px',background:'#fef2f2',borderRadius:7,fontSize:13,fontWeight:700,color:'#dc2626'}}>Skor Kredibilitas: 0/5 kriteria lulus</div>
        </div>
        <div className={styles.panel} style={{flex:1.2}}>
          <div className={styles.panelTitle} style={{color:'#b45309'}}>Kesimpulan Resmi Detektif</div>
          <div style={{fontSize:13,color:'#6b7280',marginBottom:8}}>Tulis kesimpulan yang merujuk bukti CRAAP spesifik:</div>
          <textarea className={styles.noteArea} rows={6} disabled={saved}
            placeholder="Akun Info Aceh Update tidak dapat dianggap kredibel karena: (1) baru dibuat 14 hari lalu, (2) gagal kriteria Authority - tidak ada afiliasi resmi..."
            value={verdict} onChange={e=>setVerdict(e.target.value)} style={{flex:1,minHeight:120}}/>
          {!saved ? (
            <button className={styles.btn+' '+styles.btnAmber} style={{marginTop:8,opacity:verdict.trim()?1:.4}} disabled={!verdict.trim()} onClick={save}>
              Simpan ke Case File
            </button>
          ) : (
            <div className={styles.caseFooter} style={{marginTop:8}}>
              <div className={styles.caseFooterStatus}>BERKAS 3/6 - SUMBER MENCURIGAKAN TERCATAT</div>
              <div className={styles.caseFooterText}>Sumber tidak kredibel. Lanjutkan ke Babak 4: bongkar isi pesannya.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
