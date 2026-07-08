import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
const PROFIL = [
  {k:'Nama Akun',v:'Info Aceh Update'},
  {k:'Tanggal Dibuat',v:'14 hari yang lalu'},
  {k:'Jumlah Followers',v:'1.240'},
  {k:'Foto Profil',v:'Logo sederhana bertuliskan INFO ACEH dengan desain minimalis'},
  {k:'Total Postingan',v:'8 postingan sejak dibuat'},
  {k:'Jenis Konten Lain',v:'Semua bergaya sensasional - HEBOH, VIRAL, SEBARKAN'},
  {k:'Afiliasi Resmi',v:'Tidak tercantum'},
  {k:'Identitas Pengelola',v:'Anonim - tidak ada nama atau kontak yang bisa dihubungi'},
  {k:'Verifikasi Platform',v:'Tidak ada centang biru atau badge resmi'},
]
export function SceneProfilTersangka({ onUnlock }: DiscoverySceneProps) {
  const [impression, setImpression] = useState<string|null>(null)
  const [locked, setLocked] = useState(false)
  const proceed = () => { setLocked(true); onUnlock() }
  return (
    <div className={styles.wrap}>
      <div className={styles.babakBadge}>BABAK 3 - SIAPA DI BALIK INI?</div>
      <p className={styles.prompt}>Ditemukan: akun yang pertama menyebarkan pesan viral. Ini <em>profil tersangkamu</em>.</p>
      <div style={{display:'flex',gap:14,flex:1,minHeight:0}}>
        <div style={{flex:1.2,overflow:'auto'}}>
          <table className={styles.table}>
            <thead><tr><th style={{width:'35%'}}>Detail Profil</th><th>Data yang Ditemukan</th></tr></thead>
            <tbody>{PROFIL.map((r,i)=>(
              <tr key={i}><td style={{fontWeight:600,fontStyle:'normal',color:'#b45309'}}>{r.k}</td><td>{r.v}</td></tr>
            ))}</tbody>
          </table>
        </div>
        <div style={{flex:1,display:'flex',flexDirection:'column',gap:10}}>
          <div className={styles.panel}>
            <div className={styles.panelTitle}>Kesan Pertamamu</div>
            <div style={{fontSize:14,color:'#6b7280',marginBottom:10}}>Sebelum memeriksa lebih dalam - apakah akun ini terlihat terpercaya?</div>
            {!locked ? (
              <>
                <div className={styles.btnRow}>
                  {['Ya, terlihat resmi','Tidak, mencurigakan','Tidak yakin'].map(opt=>(
                    <button key={opt} onClick={()=>setImpression(opt)}
                      className={styles.btn+' '+(impression===opt?styles.btnAmber:styles.btnOutline)}
                      style={{fontSize:14,padding:'8px 14px'}}>
                      {opt}
                    </button>
                  ))}
                </div>
                {impression&&<button className={styles.btn+' '+styles.btnPrimary} style={{marginTop:8}} onClick={proceed}>Lanjut ke pemeriksaan</button>}
              </>
            ) : (
              <div className={styles.callout}>
                Kesan pertama: <strong>{impression}</strong>. Sekarang kita periksa dengan bukti - apakah kesan ini akan bertahan setelah CRAAP test?
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
