import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene2Predict.module.css'
const SCENARIOS = [
  {konten:'Foto lucu teman yang sedang tertidur di kelas, diunggah tanpa izin', risk:7, aktual:'Teman merasa dipermalukan. Foto menyebar ke kelas lain. Persahabatan retak. Bisa dianggap perundungan (bullying) digital.'},
  {konten:'Komentar marah ke akun idola karena keputusan yang tidak disukai', risk:5, aktual:'Komentar di-screenshot fans lain, kamu di-doxing (data pribadi disebar), diserang balik ramai-ramai. Jejak agresi tercatat.'},
  {konten:'Curhat detail tentang masalah keluarga di status publik', risk:6, aktual:'Informasi pribadi keluarga tersebar. Orang tua tidak nyaman. Bisa dimanfaatkan orang tidak dikenal untuk manipulasi.'},
  {konten:'Membagikan berita heboh tanpa cek kebenarannya dulu', risk:8, aktual:'Ternyata hoaks. Kamu ikut menyebarkan disinformasi. Reputasi sebagai sumber tidak terpercaya. Bisa kena UU ITE.'},
]
export function Scene2Predict({ onUnlock }: DiscoverySceneProps) {
  const [step, setStep] = useState(0)
  const [preds, setPreds] = useState<Record<number,number>>({})
  const [shown, setShown] = useState<Set<number>>(new Set())
  const s=SCENARIOS[step];const p=preds[step];const r=shown.has(step)
  const reveal = () => {
    setShown(pr=>{
      const n = new Set([...pr, step])
      if (n.size === SCENARIOS.length) onUnlock()
      return n
    })
  }
  return (
    <>
      <p className={styles.prompt}>Sebelum lihat hasilnya, <em>prediksi risiko tiap skenario dulu.</em> {step+1}/{SCENARIOS.length}</p>
      <div className={styles.kontenBox}>
        <div className={styles.kLabel}>Skenario Konten</div>
        <div className={styles.kText}>{s.konten}</div>
      </div>
      <div className={styles.sliderArea}>
        <div className={styles.sliderLabel}>Prediksimu — skala risiko: <b>{p||1}</b>/10</div>
        <input type="range" min={1} max={10} value={p||1} disabled={r} onChange={e=>setPreds(pr=>({...pr,[step]:+e.target.value}))} className={styles.slider}/>
        <div className={styles.sliderMarks}><span>1 · Aman</span><span>10 · Sangat berisiko</span></div>
      </div>
      {p&&!r&&<button className={styles.revBtn} onClick={reveal}>Lihat hasil aktual →</button>}
      {r&&<div className={styles.aktual}>
        <div className={styles.aHeader}><span>Risiko aktual: <b>{s.risk}/10</b></span><span className={styles.aDelta}>{p===s.risk?'Prediksimu tepat!':p!<s.risk?`Kamu meremehkan (${p} vs ${s.risk})`:`Kamu melebih-lebihkan (${p} vs ${s.risk})`}</span></div>
        <div className={styles.aText}>{s.aktual}</div>
        {step<SCENARIOS.length-1&&<button className={styles.nextBtn} onClick={()=>setStep(x=>x+1)}>Skenario berikutnya →</button>}
      </div>}
    </>
  )
}
