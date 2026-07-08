import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene3Password.module.css'
function assess(pw: string) {
  let score=0; const checks: [string, boolean][] = []
  if(pw.length>=12){score+=2;checks.push(['Panjang ≥12 karakter',true])}else if(pw.length>=8){score+=1;checks.push(['Panjang ≥8 (idealnya 12+)',true])}else checks.push(['Terlalu pendek (<8)',false])
  if(/[A-Z]/.test(pw)&&/[a-z]/.test(pw)){score+=1;checks.push(['Huruf besar & kecil',true])}else checks.push(['Campur huruf besar & kecil',false])
  if(/[0-9]/.test(pw)){score+=1;checks.push(['Ada angka',true])}else checks.push(['Tambahkan angka',false])
  if(/[^A-Za-z0-9]/.test(pw)){score+=1;checks.push(['Ada simbol (!@#$)',true])}else checks.push(['Tambahkan simbol',false])
  const common=['password','12345','qwerty','admin','nama']
  if(common.some(c=>pw.toLowerCase().includes(c))){score=Math.max(0,score-2);checks.push(['Hindari kata umum/mudah ditebak',false])}
  return {score,checks}
}
export function Scene3Password({ onUnlock }: DiscoverySceneProps) {
  const [pw, setPw] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const {score,checks} = assess(pw)
  const level = score<=1?'Lemah':score<=3?'Sedang':score<=4?'Kuat':'Sangat Kuat'
  const color = score<=1?'#dc2626':score<=3?'#f59e0b':score<=4?'#16a34a':'#0891b2'
  const change = (v: string) => { setPw(v); if (v.length>0 && !unlocked) { setUnlocked(true); onUnlock() } }
  return (
    <>
      <p className={styles.prompt}>Password adalah kunci pertahananmu. <em>Ketik password (contoh, jangan yang asli!) dan lihat kekuatannya real-time.</em></p>
      <input className={styles.input} placeholder="ketik contoh password..." value={pw} onChange={e=>change(e.target.value)}/>
      {pw&&<>
        <div className={styles.meter}>
          <div className={styles.meterBar}><div className={styles.meterFill} style={{width:`${Math.min(score/6*100,100)}%`,background:color}}/></div>
          <div className={styles.meterLabel} style={{color}}>{level}</div>
        </div>
        <div className={styles.checks}>
          {checks.map(([txt,ok],i)=>(
            <div key={i} className={`${styles.check} ${ok?styles.checkOk:styles.checkNo}`}>
              <span>{ok?'✓':'○'}</span> {txt}
            </div>
          ))}
        </div>
      </>}
      <div className={styles.tip}>Tip praktis: gunakan <b>passphrase</b> — gabungan kata acak + angka + simbol. Contoh pola: "Kucing7Loncat!Pagar" jauh lebih kuat DAN lebih mudah diingat dari "P@ss123".</div>
    </>
  )
}
