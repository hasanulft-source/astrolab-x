import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
export function SceneUjiLogika({ onUnlock }: DiscoverySceneProps) {
  const [step, setStep] = useState(0)
  const advance = (n: number) => { setStep(n); if (n >= 2) onUnlock() }
  return (
    <div className={styles.wrap}>
      <div className={styles.babakBadge}>SCENE 03 - UJI LOGIKA - JEBAKAN SEMI-TRUE</div>
      <p className={styles.prompt}>Temanmu bilang: <em>"Karena nama sekolahnya beneran ada di Banda Aceh, berarti seluruh ceritanya pasti benar."</em></p>
      <div style={{display:'flex',flexDirection:'column',gap:12,flex:1}}>
        <div className={styles.panel}>
          <div className={styles.panelTitle}>Pernyataan Temanmu</div>
          <div style={{fontSize:16,color:'#1a1c1e',fontStyle:'italic',lineHeight:1.6,padding:'10px 0'}}>
            "Nama sekolah di pesan itu beneran ada - gw udah cek sendiri. Jadi pasti bener dong ceritanya!"
          </div>
          {step===0&&<button className={styles.btn+' '+styles.btnAmber} onClick={()=>advance(1)} style={{marginTop:8}}>Analisis logikanya</button>}
        </div>
        {step>=1&&(
          <div className={styles.trapWarning}>
            <span className={styles.trapLabel}>KESALAHAN LOGIKA: SEBAGIAN BENAR = SEMUA BENAR</span>
            <span className={styles.trapText}>Fakta bahwa satu elemen klaim benar (nama sekolah ada) TIDAK membuktikan klaim lainnya benar (50 siswa, virus aplikasi). Ini seperti bilang: karena satu hal benar, semua hal lainnya pasti benar juga.</span>
          </div>
        )}
        {step>=1&&(
          <div className={styles.panel}>
            <div className={styles.panelTitle} style={{color:'#b45309'}}>Teknik Semi-True</div>
            {[{l:'Fakta Asli (sebagai umpan)',t:'Di Banda Aceh ada SMP - BENAR, bisa diverifikasi',c:'#16a34a'},
              {l:'Klaim Palsu (dibungkus fakta)',t:'50 siswa kena virus, semua HP disita - TIDAK TERBUKTI, tidak ada sumber',c:'#dc2626'},
              {l:'Efek Psikologis',t:'Fakta asli membuat seluruh pesan terasa kredibel - padahal klaim utamanya palsu.',c:'#b45309'},
            ].map((r,i)=>(
              <div key={i} style={{borderLeft:'3px solid '+r.c,paddingLeft:12,paddingTop:4,paddingBottom:4,marginBottom:8}}>
                <div style={{fontSize:12,fontWeight:700,color:r.c,fontFamily:'DM Mono',marginBottom:3}}>{r.l}</div>
                <div style={{fontSize:14,color:'#3a3d42'}}>{r.t}</div>
              </div>
            ))}
            {step===1&&<button className={styles.btn+' '+styles.btnPrimary} onClick={()=>advance(2)} style={{marginTop:4}}>Aku paham - lanjutkan</button>}
          </div>
        )}
        {step>=2&&(
          <div className={styles.caseFooter}>
            <div className={styles.caseFooterStatus}>TEKNIK SEMI-TRUE TERIDENTIFIKASI</div>
            <div className={styles.caseFooterText}>Ini yang membuat hoaks ini berbahaya - campuran fakta dan kebohongan. Susun kesimpulan resmi!</div>
          </div>
        )}
      </div>
    </div>
  )
}
