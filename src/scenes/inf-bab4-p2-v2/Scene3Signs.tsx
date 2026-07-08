import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene3Signs.module.css'
const SIGNS = [
  'Cek HP dalam 5 menit pertama setelah bangun tidur',
  'Merasa cemas/gelisah saat HP tidak ada di dekatmu',
  'Waktu di aplikasi lebih lama dari yang kamu rencanakan',
  'Mengorbankan tidur untuk scrolling/gaming',
  'Sulit fokus belajar tanpa mengecek HP berkali-kali',
]
export function Scene3Signs({ onUnlock }: DiscoverySceneProps) {
  const [checked, setChecked] = useState<Set<number>>(new Set())
  const [done, setDone] = useState(false)
  const toggle = (i:number) => setChecked(p=>{const n=new Set(p);n.has(i)?n.delete(i):n.add(i);return n})
  const reflect = () => { setDone(true); onUnlock() }
  return (
    <>
      <p className={styles.prompt}>5 tanda ketergantungan digital. <em>Centang yang berlaku untukmu — ini untuk kesadaran diri, bukan penilaian.</em></p>
      <div className={styles.list}>
        {SIGNS.map((s,i)=>(
          <button key={i} className={`${styles.item} ${checked.has(i)?styles.checked:''}`} onClick={()=>toggle(i)}>
            <span className={styles.box}>{checked.has(i)?'✓':''}</span>
            <span className={styles.text}>{s}</span>
          </button>
        ))}
      </div>
      {!done&&<button className={styles.doneBtn} onClick={reflect}>Lihat refleksi →</button>}
      {done&&<div className={styles.reflect}>
        <div className={styles.rCount}>Kamu mencentang <b>{checked.size}</b> dari 5 tanda.</div>
        <div className={styles.rText}>
          {checked.size===0&&'Bagus — kamu tampak punya hubungan sehat dengan teknologi. Tetap sadar dan jaga keseimbangan.'}
          {checked.size>=1&&checked.size<=2&&'Beberapa tanda muncul — ini normal dan bisa dikelola. Kesadaran adalah langkah pertama.'}
          {checked.size>=3&&'Beberapa tanda cukup kuat. Ini bukan vonis — tapi sinyal untuk membuat keputusan sadar tentang keseimbangan digitalmu.'}
        </div>
        <div className={styles.rNote}>Tidak ada skor "benar" atau "salah". Ini cermin, bukan rapor. Yang penting: apa yang akan KAMU lakukan dengan kesadaran ini?</div>
      </div>}
    </>
  )
}
