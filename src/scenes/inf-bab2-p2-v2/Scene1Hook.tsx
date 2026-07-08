import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene1Hook.module.css'
export function Scene1Hook({ onUnlock }: DiscoverySceneProps) {
  const [shown, setShown] = useState(false)
  const pick = () => { setShown(true); onUnlock() }
  return (
    <>
      <p className={styles.prompt}>Pertanyaan guru: <em>"Berapa siswa yang nilainya di atas 75, DAN berapa total nilai hanya untuk yang perempuan?"</em></p>
      <div className={styles.layout}>
        <div className={styles.left}>
          <div className={styles.qCard}>Formula dasar (SUM, AVERAGE) tidak bisa menjawab pertanyaan <b>bersyarat</b> seperti ini. Butuh formula yang bisa "memfilter sambil menghitung".</div>
          <div className={styles.think}>Menurutmu, bagaimana cara Excel menghitung sesuatu HANYA jika memenuhi syarat tertentu?</div>
          <div className={styles.opts}>
            {['Hitung manual satu per satu lalu jumlahkan','Pakai formula khusus yang punya kondisi/syarat di dalamnya (IF, COUNTIF, SUMIF)','Urutkan dulu baru hitung pakai SUM biasa','Tidak mungkin — harus pakai kalkulator'].map(o=>(
              <button key={o} className={styles.opt} onClick={pick}>{o}</button>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          {!shown&&<div className={styles.placeholder}>Pilih dugaanmu untuk lanjut →</div>}
          {shown&&<div className={styles.reveal}>
            <div className={styles.revTitle}>3 Formula Bersyarat</div>
            <div className={styles.revItem}><code>IF</code> — kembalikan nilai berbeda tergantung syarat. "Jika nilai ≥75 tulis LULUS, jika tidak REMEDIAL"</div>
            <div className={styles.revItem}><code>COUNTIF</code> — hitung berapa sel yang memenuhi syarat. "Berapa siswa nilai ≥75?"</div>
            <div className={styles.revItem}><code>SUMIF</code> — jumlahkan hanya sel yang memenuhi syarat. "Total nilai khusus perempuan"</div>
          </div>}
        </div>
      </div>
    </>
  )
}
