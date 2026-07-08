import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
const POTONGAN = [
  { id:'a', text:'Ada RAZIA HP di salah satu SMP Banda Aceh hari ini', hint:'Ada detail lokasi dan waktu yang spesifik. Tapi apakah bisa diverifikasi?' },
  { id:'b', text:'Semua HP siswa DISITA', hint:'Kata SEMUA sangat absolut. Bisakah kamu cek klaim ini?' },
  { id:'c', text:'Karena ditemukan VIRUS yang menyebar lewat sebuah aplikasi chat', hint:'Ada penyebab disebutkan tapi nama aplikasinya tidak jelas. Fakta atau klaim belum terverifikasi?' },
  { id:'d', text:'Sudah 50 siswa kena dan HP-nya rusak total', hint:'Angka 50 terlihat spesifik. Tapi dari mana angka ini? Ada sumbernya?' },
  { id:'e', text:'INFO PENTING ORANG TUA!', hint:'Perhatikan huruf kapital dan tanda seru. Apakah ini menyampaikan fakta, atau memicu reaksi emosional?' },
  { id:'f', text:'SEBARKAN supaya anak-anak kita aman', hint:'Ajakan langsung menyebarkan. Apakah sumber faktual biasanya meminta ini?' },
]
const OPTS = ['DATA','INFORMASI','KONTEN']
const OPT_COLOR: Record<string,string> = { DATA:'#16a34a', INFORMASI:'#3b82f6', KONTEN:'#b45309' }
const ANSWERS: Record<string,string> = { a:'INFORMASI', b:'KONTEN', c:'INFORMASI', d:'DATA', e:'KONTEN', f:'KONTEN' }
export function SceneBedahPesan({ onUnlock }: DiscoverySceneProps) {
  const [picks, setPicks] = useState<Record<string,string>>({})
  const [hints, setHints] = useState<Record<string,boolean>>({})
  const [checked, setChecked] = useState(false)
  const allDone = POTONGAN.every(p => picks[p.id])
  const score = POTONGAN.filter(p => picks[p.id] === ANSWERS[p.id]).length
  const check = () => { setChecked(true); onUnlock() }
  return (
    <div className={styles.wrap}>
      <div className={styles.babakBadge}>SCENE 02 - BEDAH PESAN</div>
      <p className={styles.prompt}>Untuk setiap potongan, tentukan: <em>DATA</em>, <span>INFORMASI</span>, atau KONTEN?</p>
      <div className={styles.callout} style={{padding:'10px 14px'}}>
        DATA = angka/fakta mentah tanpa konteks. INFORMASI = data + konteks bermakna. KONTEN = dikemas untuk tujuan tertentu (viral, emosi, persuasi).
      </div>
      <div className={styles.scrollable} style={{flex:1,display:'flex',flexDirection:'column',gap:8}}>
        {POTONGAN.map(p => {
          const pick = picks[p.id]
          const isCorrect = checked && pick === ANSWERS[p.id]
          const isWrong   = checked && pick && pick !== ANSWERS[p.id]
          return (
            <div key={p.id} style={{border:'2px solid '+(isCorrect?'#16a34a':isWrong?'#dc2626':'#e2e6ea'),borderRadius:10,padding:'12px 14px',background:isCorrect?'#f0fdf4':isWrong?'#fef2f2':'#fff'}}>
              <div style={{fontSize:15,color:'#1a1c1e',marginBottom:10,lineHeight:1.5,fontStyle:'italic'}}>"{p.text}"</div>
              <div style={{display:'flex',gap:6,flexWrap:'wrap',alignItems:'center'}}>
                {OPTS.map(opt => (
                  <button key={opt} onClick={()=>setPicks(p2=>({...p2,[p.id]:opt}))}
                    style={{padding:'5px 13px',borderRadius:7,border:'2px solid '+(pick===opt?OPT_COLOR[opt]:'#e2e6ea'),
                      background:pick===opt?OPT_COLOR[opt]+'22':'transparent',color:pick===opt?OPT_COLOR[opt]:'#6b7280',
                      fontWeight:pick===opt?700:500,fontSize:13,cursor:'pointer'}}>
                    {opt}
                  </button>
                ))}
                <button onClick={()=>setHints(h=>({...h,[p.id]:!h[p.id]}))}
                  style={{marginLeft:'auto',background:'transparent',border:'1px solid #e2e6ea',borderRadius:6,padding:'4px 10px',fontSize:12,color:'#6b7280',cursor:'pointer'}}>
                  {hints[p.id]?'Tutup petunjuk':'Petunjuk'}
                </button>
              </div>
              {hints[p.id] && <div style={{marginTop:8,fontSize:13,color:'#6b7280',fontStyle:'italic'}}>{p.hint}</div>}
              {checked && <div style={{marginTop:8,fontSize:13,fontWeight:600,color:isCorrect?'#16a34a':'#dc2626'}}>
                {isCorrect?'Benar!':'Jawaban: '+ANSWERS[p.id]}
              </div>}
            </div>
          )
        })}
      </div>
      {!checked ? (
        <button className={styles.btn+' '+styles.btnPrimary} disabled={!allDone} onClick={check} style={{opacity:allDone?1:.4}}>
          Cek semua jawaban
        </button>
      ) : (
        <div className={styles.caseFooter}>
          <div className={styles.caseFooterStatus}>HASIL: {score}/6 BENAR</div>
          <div className={styles.caseFooterText}>{score>=5?'Analisis tajam!':score>=3?'Perhatikan lagi perbedaan INFORMASI vs KONTEN.':'Coba lagi - perhatikan tujuan dan kemasan setiap potongan.'}</div>
        </div>
      )}
    </div>
  )
}
