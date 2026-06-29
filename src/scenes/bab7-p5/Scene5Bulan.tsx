import { useState } from 'react'
import styles from './Scene5Bulan.module.css'

const PHASES = [
  { name:"Bulan Baru", desc:"Bulan di antara Bumi dan Matahari. Sisi yang diterangi menjauhi Bumi — tidak terlihat.", gerhana:"Gerhana Matahari mungkin terjadi!", pct:0 },
  { name:"Sabit Awal", desc:"Bulan bergerak, sebagian kecil sisi terang mulai terlihat dari Bumi di bagian kanan.", pct:12 },
  { name:"Setengah Awal", desc:"Setengah sisi Bulan yang menghadap Bumi diterangi. Terlihat seperti D.", pct:50 },
  { name:"Cembung Awal", desc:"Lebih dari setengah diterangi. Bulan cembung ke kanan.", pct:75 },
  { name:"Bulan Purnama", desc:"Bumi di antara Matahari dan Bulan. Seluruh sisi yang menghadap Bumi diterangi.", gerhana:"Gerhana Bulan mungkin terjadi!", pct:100 },
  { name:"Cembung Akhir", desc:"Cembung ke kiri. Fase berkurang.", pct:75 },
  { name:"Setengah Akhir", desc:"Setengah diterangi di sisi kiri. Terlihat seperti C.", pct:50 },
  { name:"Sabit Akhir", desc:"Hanya sebagian kecil sisi kiri yang terlihat. Mendekati siklus baru.", pct:12 },
]

export function Scene5Bulan() {
  const [phase, setPhase] = useState(0)
  const p = PHASES[phase]

  return (
    <>
      <p className={styles.prompt}><em>8 Fase Bulan</em> — navigasi untuk melihat tampilan dan penjelasan tiap fase.</p>
      <div className={styles.main}>
        <div className={styles.phaseNav}>
          {PHASES.map((ph, i) => (
            <button key={i} className={i===phase?styles.phBtnActive:styles.phBtn}
              onClick={() => setPhase(i)}>
              <div className={styles.phMoon}>
                <div className={styles.phDark} style={{opacity: 1 - ph.pct/100}}/>
              </div>
              <span className={styles.phName}>{ph.name}</span>
            </button>
          ))}
        </div>
        <div className={styles.detail}>
          <div className={styles.moonDisplay}>
            <div className={styles.moonBig}>
              <div className={styles.moonShadow} style={{opacity: 1 - p.pct/100}}/>
              <div className={styles.moonLabel}>{p.pct}% terang</div>
            </div>
          </div>
          <div className={styles.phaseName}>{p.name}</div>
          <div className={styles.phaseDesc}>{p.desc}</div>
          {p.gerhana && (
            <div className={styles.gerhanaBadge}>⚠️ {p.gerhana}</div>
          )}
          <div className={styles.note}>
            Bulan tidak bersinar sendiri — pantulan cahaya Matahari. Orbit Bulan miring 5° sehingga gerhana tidak terjadi setiap bulan baru/purnama.
          </div>
          <div className={styles.navBtns}>
            <button className={styles.navBtn} onClick={() => setPhase(p => (p-1+8)%8)}>← Fase sebelumnya</button>
            <span className={styles.navCount}>{phase+1} / 8</span>
            <button className={styles.navBtn} onClick={() => setPhase(p => (p+1)%8)}>Fase berikutnya →</button>
          </div>
        </div>
      </div>
    </>
  )
}
