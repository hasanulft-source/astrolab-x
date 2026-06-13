import { useState } from 'react'
import { ParticleViewer, type ParticleState } from '../../components/ParticleViewer'
import styles from './Scene5Reveal.module.css'

const QS:{q:string;state:ParticleState;showBonds:boolean;insight:string}[]=[
  {q:'Mengapa es lebih keras dari air?',state:'solid',showBonds:true,
   insight:'Karena partikelnya tersusun sangat rapat & terikat dengan tetangganya — sulit dipindahkan tanpa gaya besar.'},
  {q:'Mengapa gas mengisi seluruh ruangan?',state:'gas',showBonds:false,
   insight:'Karena partikel bergerak bebas, sangat cepat, dan terus memantul ke segala arah sampai mengisi ruang yang tersedia.'},
]

export function Scene5Reveal() {
  const [rev,setRev]=useState<number[]>([])
  const [done,setDone]=useState(false)
  const toggle=(i:number)=>setRev(rs=>rs.includes(i)?rs.filter(r=>r!==i):[...rs,i])

  if(done) return(
    <div className={styles.summaryLayout}>
      <div className={styles.summaryBadge}>selesai · pertemuan 1</div>
      <div className={styles.summaryTitle}>Wujud zat & model partikel</div>
      <div className={styles.summaryGrid}>
        {[['padat','Partikel rapat, teratur, bergetar di tempat — bentuk tetap.'],
          ['cair','Partikel dekat tapi bisa mengalir — bentuk mengikuti wadah.'],
          ['gas','Partikel jauh & bergerak bebas — mengisi seluruh ruangan.'],
        ].map(([l,t])=>(
          <div key={l} className={styles.summaryCard}>
            <span className={styles.summaryLabel}>{l}</span><span className={styles.summaryText}>{t}</span>
          </div>
        ))}
      </div>
      <p className={styles.summaryClose}>Terima kasih atas perhatiannya. Sampai jumpa di pertemuan berikutnya.</p>
      <button className={styles.summaryReset} onClick={()=>setDone(false)}>← kembali ke pertanyaan</button>
    </div>
  )

  return(
    <div className={styles.layout}>
      {QS.map((q,i)=>{
        const on=rev.includes(i)
        return(
          <div key={i} className={`${styles.card} ${on?styles.cardRevealed:''}`}>
            <div className={styles.left}>
              <span className={styles.qNum}>pertanyaan_0{i+1}</span>
              <div className={styles.question}>{q.q}</div>
              {on&&<div className={styles.insight}>{q.insight}</div>}
              <button className={`${styles.btn} ${on?styles.btnRevealed:''}`} onClick={()=>toggle(i)}>
                {on?'Sembunyikan':<>Tunjukkan <span className={styles.btnArrow}>→</span></>}
              </button>
            </div>
            <div className={`${styles.right} ${on?styles.rightRevealed:''}`}>
              {on?<ParticleViewer state={q.state} showBonds={q.showBonds} size="sm"/>
                 :<div className={styles.placeholder}>klik untuk lihat partikel</div>}
            </div>
          </div>
        )
      })}
      {rev.length===QS.length&&(
        <button className={styles.closeBtn} onClick={()=>setDone(true)}>
          Selesai pertemuan <span className={styles.closeArrow}>→</span>
        </button>
      )}
    </div>
  )
}
