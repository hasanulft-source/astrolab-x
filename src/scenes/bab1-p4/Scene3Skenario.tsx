import { useState } from 'react'
import { SCENARIOS } from './data'
import styles from './ui.module.css'

export function Scene3Skenario() {
  const [sel, setSel] = useState<string | null>(null)
  const sc = SCENARIOS.find(x => x.id === sel)
  return (
    <>
      <p className={styles.prompt}>Kondisi darurat bisa terjadi. Pilih skenario — apa <em>langkah penanganan</em> yang benar?</p>
      <div className={styles.scenTabs}>
        {SCENARIOS.map(s => (
          <div key={s.id} role="button" className={sel === s.id ? styles.stabActive : styles.stab} onClick={() => setSel(s.id)}>{s.title}</div>
        ))}
      </div>
      {sc ? (
        <div className={styles.steps}>
          {sc.steps.map((st, i) => (
            <div key={i} className={styles.step}><span className={styles.stepNum}>{i + 1}</span><span className={styles.stepText}>{st}</span></div>
          ))}
        </div>
      ) : <div className={styles.scenEmpty}>Pilih salah satu skenario di atas.</div>}
    </>
  )
}
