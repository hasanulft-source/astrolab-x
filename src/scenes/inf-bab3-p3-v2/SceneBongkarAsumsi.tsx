import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
export function SceneBongkarAsumsi({ onUnlock }: DiscoverySceneProps) {
  const [reveal, setReveal] = useState(false)
  const bongkar = () => { setReveal(true); onUnlock() }
  return (
    <div className={styles.wrap}>
      <div className={styles.babakBadge}>SCENE 03 - BONGKAR ASUMSI</div>
      <p className={styles.prompt}>Akun ini punya logo dan nama formal. Tapi apakah itu cukup untuk <em>membuktikan kredibilitas</em>?</p>
      <div style={{display:'flex',gap:14,flex:1,alignItems:'stretch'}}>
        <div style={{flex:1,display:'flex',flexDirection:'column',gap:10}}>
          <div className={styles.panel} style={{background:'#fef3e2',borderColor:'#b45309'}}>
            <div className={styles.panelTitle} style={{color:'#b45309'}}>Tampilan Akun</div>
            <div style={{textAlign:'center',padding:'20px 0'}}>
              <div style={{width:64,height:64,borderRadius:'50%',background:'#1a2b3d',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 10px',fontSize:11,fontWeight:700,color:'#b45309',fontFamily:'DM Mono'}}>INFO ACEH</div>
              <div style={{fontWeight:700,color:'#1a1c1e'}}>Info Aceh Update</div>
              <div style={{fontSize:13,color:'#6b7280'}}>1.240 followers</div>
            </div>
            <div className={styles.callout} style={{fontSize:13}}>Terlihat profesional? Logo ada. Nama formal. Followers lebih dari seribu. Banyak orang langsung percaya di titik ini.</div>
          </div>
        </div>
        <div style={{flex:1,display:'flex',flexDirection:'column',gap:10}}>
          <div className={styles.panel}>
            <div className={styles.panelTitle}>Realitas di Balik Tampilan</div>
            {!reveal ? (
              <button className={styles.btn+' '+styles.btnAmber} onClick={bongkar}>Bongkar realitasnya</button>
            ) : (
              <div style={{display:'flex',flexDirection:'column',gap:8}}>
                {['Logo dan nama resmi-sounding: siapa pun bisa membuatnya dalam 5 menit.',
                  '1.240 followers: tidak otomatis berarti terpercaya - bisa dibeli atau bot.',
                  'Dibuat 14 hari lalu: rekam jejak terlalu pendek.',
                  'Tidak ada verifikasi platform resmi.'].map((t,i)=>(
                  <div key={i} style={{display:'flex',gap:9,fontSize:14,color:'#3a3d42',lineHeight:1.5}}>
                    <span style={{color:'#dc2626',fontWeight:700,flexShrink:0}}>x</span>{t}
                  </div>
                ))}
                <div className={styles.trapWarning} style={{marginTop:6}}>
                  <span className={styles.trapLabel}>JEBAKAN YANG PALING SERING BERHASIL</span>
                  <span className={styles.trapText}>Penampilan profesional menciptakan kepercayaan otomatis - bahkan tanpa satu pun bukti afiliasi resmi. Ini yang membuat hoaks yang dikemas rapi jauh lebih berbahaya.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
