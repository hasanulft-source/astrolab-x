import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
const KLAIM = [
  {id:'k1',text:'Ada SMP yang berlokasi di Banda Aceh.',kat:'FAKTA',jelas:'Benar - Banda Aceh memang punya banyak SMP. Fakta yang bisa diverifikasi.',jebakan:false},
  {id:'k2',text:'Semua HP siswa disita hari ini.',kat:'HOAKS',jelas:'Tidak ada bukti. Kata SEMUA dan hari ini tidak terdukung sumber apapun.',jebakan:false},
  {id:'k3',text:'Virus menyebar lewat sebuah aplikasi chat.',kat:'HOAKS',jelas:'Klaim teknis tanpa bukti. Nama aplikasinya tidak disebutkan, tidak ada laporan dari pakar TI.',jebakan:false},
  {id:'k4',text:'Sudah 50 siswa kena.',kat:'HOAKS',jelas:'Angka spesifik tanpa sumber. Tidak ada laporan dari sekolah atau media manapun.',jebakan:true},
  {id:'k5',text:'HP-nya rusak total.',kat:'HOAKS',jelas:'Klaim kerusakan masif tanpa dokumentasi apapun.',jebakan:false},
  {id:'k6',text:'Informasi ini penting untuk keselamatan anak.',kat:'OPINI',jelas:'Penilaian subjektif pengirim - bisa benar bisa salah tergantung sudut pandang.',jebakan:false},
]
const CHOICES = ['FAKTA','OPINI','HOAKS']
const COLORS: Record<string,string> = {FAKTA:'#16a34a',OPINI:'#3b82f6',HOAKS:'#dc2626'}
export function SceneKlasifikasi({ onUnlock }: DiscoverySceneProps) {
  const [picks, setPicks] = useState<Record<string,string>>({})
  const [showAns, setShowAns] = useState(false)
  const allDone = KLAIM.every(k=>picks[k.id])
  const score = KLAIM.filter(k=>picks[k.id]===k.kat).length
  const check = () => { setShowAns(true); onUnlock() }
  return (
    <div className={styles.wrap}>
      <div className={styles.babakBadge}>SCENE 02 - KLASIFIKASI KLAIM</div>
      <p className={styles.prompt}>Untuk setiap klaim - tentukan: <em>FAKTA</em>, <span>OPINI</span>, atau HOAKS? Periksa satu per satu.</p>
      <div style={{flex:1,overflow:'auto',display:'flex',flexDirection:'column',gap:7}}>
        {KLAIM.map(k=>{
          const pick=picks[k.id]
          const isCorrect=showAns&&pick===k.kat
          const isWrong=showAns&&pick&&pick!==k.kat
          return (
            <div key={k.id} style={{border:'2px solid '+(isCorrect?'#16a34a':isWrong?'#dc2626':k.jebakan&&!showAns?'#f59e0b':'#e2e6ea'),borderRadius:10,padding:'12px 14px',background:isCorrect?'#f0fdf4':isWrong?'#fef2f2':'#fff'}}>
              <div style={{fontSize:15,color:'#1a1c1e',marginBottom:8,lineHeight:1.5}}>
                {k.jebakan&&!showAns&&<span style={{fontSize:12,color:'#b45309',fontWeight:700,marginRight:8,fontFamily:'DM Mono'}}>perhatikan</span>}
                {k.text}
              </div>
              <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
                {CHOICES.map(c=>(
                  <button key={c} onClick={()=>!showAns&&setPicks(p=>({...p,[k.id]:c}))}
                    style={{padding:'5px 14px',borderRadius:7,border:'2px solid '+(pick===c?COLORS[c]:'#e2e6ea'),
                      background:pick===c?COLORS[c]+'22':'transparent',color:pick===c?COLORS[c]:'#6b7280',
                      fontWeight:pick===c?700:400,fontSize:13,cursor:showAns?'default':'pointer'}}>
                    {c}
                  </button>
                ))}
              </div>
              {showAns&&(
                <div style={{marginTop:8,fontSize:13,lineHeight:1.55,padding:'8px 12px',background:isCorrect?'#dcfce7':'#fee2e2',borderRadius:7}}>
                  <strong style={{color:isCorrect?'#16a34a':'#dc2626'}}>{isCorrect?'Tepat':'Jawaban: '+k.kat}</strong> - {k.jelas}
                </div>
              )}
            </div>
          )
        })}
      </div>
      {!showAns ? (
        <button className={styles.btn+' '+styles.btnPrimary} disabled={!allDone} onClick={check} style={{opacity:allDone?1:.4}}>Cek semua jawaban</button>
      ) : (
        <div className={styles.caseFooter}>
          <div className={styles.caseFooterStatus}>SKOR: {score}/{KLAIM.length} BENAR</div>
          <div className={styles.caseFooterText}>{score>=5?'Analisis tajam! Perhatikan bahwa sebagian klaim faktanya benar - ini yang disebut semi-true.':'Perhatikan: ada klaim yang faktanya benar dicampur dengan yang palsu. Periksa tiap klaim terpisah!'}</div>
        </div>
      )}
    </div>
  )
}
