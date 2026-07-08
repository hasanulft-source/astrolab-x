import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
const CRAAP = [
  {id:'C',name:'Currency (Waktu)',question:'Apakah akun ini sudah lama ada dan aktif secara konsisten?',reason:'GAGAL: Akun baru dibuat 14 hari lalu. Akun kredibel punya rekam jejak panjang.'},
  {id:'R',name:'Relevance (Relevansi)',question:'Apakah akun ini fokus pada topik yang relevan dan terpercaya?',reason:'GAGAL: Semua 8 postingan bergaya sensasional. Tidak ada spesialisasi yang jelas.'},
  {id:'A',name:'Authority (Otoritas)',question:'Apakah ada afiliasi resmi yang jelas?',reason:'GAGAL: Tidak ada afiliasi resmi, identitas anonim, tidak ada verifikasi platform.'},
  {id:'A2',name:'Accuracy (Akurasi)',question:'Apakah klaim bisa diverifikasi ke sumber independen?',reason:'GAGAL: Dari Babak 2 tidak ada sumber resmi yang mengkonfirmasi klaim ini.'},
  {id:'P',name:'Purpose (Tujuan)',question:'Apakah tujuannya untuk informasi publik yang bertanggung jawab?',reason:'GAGAL: Ajakan SEBARKAN dan gaya sensasional menunjukkan tujuan viral, bukan informasi.'},
]
export function SceneCRAAPTest({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState<string[]>([])
  const allDone = revealed.length === CRAAP.length
  const spot = (id: string) => {
    setRevealed(r=>{
      const n = [...r, id]
      if (n.length === CRAAP.length) onUnlock()
      return n
    })
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.babakBadge}>SCENE 02 - CRAAP TEST</div>
      <p className={styles.prompt}>Periksa akun "Info Aceh Update" dengan 5 kriteria CRAAP. <em>Klik setiap kriteria</em> untuk menilai.</p>
      <div style={{display:'flex',flexDirection:'column',gap:6,flex:1,overflow:'auto'}}>
        {CRAAP.map(c=>{
          const done = revealed.includes(c.id)
          return (
            <div key={c.id} style={{border:'2px solid '+(done?'#dc2626':'#e2e6ea'),borderRadius:10,overflow:'hidden'}}>
              <button onClick={()=>!done&&spot(c.id)}
                style={{width:'100%',display:'flex',alignItems:'center',gap:12,padding:'12px 16px',
                  background:done?'#fef2f2':'#fff',cursor:done?'default':'pointer',border:'none',textAlign:'left'}}>
                <span style={{fontFamily:'DM Mono',fontSize:22,fontWeight:700,color:done?'#dc2626':'#9ca3af',minWidth:28}}>{c.id.replace('A2','A')}</span>
                <div style={{flex:1}}>
                  <div style={{fontSize:15,fontWeight:700,color:'#1a2b3d'}}>{c.name}</div>
                  <div style={{fontSize:13,color:'#6b7280'}}>{c.question}</div>
                </div>
                {done?<span style={{color:'#dc2626',fontWeight:700,fontSize:14}}>GAGAL</span>
                     :<span style={{color:'#9ca3af',fontSize:13}}>Klik untuk periksa</span>}
              </button>
              {done&&<div style={{padding:'10px 16px 14px',background:'#fef2f2',borderTop:'1px solid #fecaca',fontSize:14,color:'#7f1d1d',lineHeight:1.55}}>{c.reason}</div>}
            </div>
          )
        })}
      </div>
      {allDone&&(
        <div className={styles.caseFooter}>
          <div className={styles.caseFooterStatus}>HASIL CRAAP TEST: 0/5 KRITERIA LULUS</div>
          <div className={styles.caseFooterText}>Akun ini gagal di semua kriteria. Apakah kesan pertamamu terbukti bisa menipu?</div>
        </div>
      )}
    </div>
  )
}
