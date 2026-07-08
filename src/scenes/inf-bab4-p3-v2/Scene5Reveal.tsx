import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene5Reveal.module.css'
const EXIT_QS=["Audit 10 informasi tentang dirimu yang sudah ada di internet (nama di medsos, foto, sekolah). Klasifikasi: seharusnya privat atau publik? Ada yang perlu dihapus?", "Buat 1 password kuat menggunakan metode passphrase. Jelaskan mengapa lebih aman dari 'P@ssw0rd123' meski terlihat rumit.", "Bedakan: kapan berbagi informasi diri adalah 'membangun koneksi positif' vs 'membahayakan privasi'? Beri kriteria yang jelas."]
const ROWS:[string,string,string][]=[['1','Privat vs Publik','Pilah info dengan nuansa'],['2','Password Kuat','Panjang + variasi + passphrase'],['3','Kebijakan Privasi','Rancangan kontrol info pribadi']]
export function Scene5Reveal({ onUnlock }: DiscoverySceneProps){
  const [s,setS]=useState(0)
  const next = () => {
    setS(x => {
      const nx = x+1
      if (nx === EXIT_QS.length-1) onUnlock()
      return nx
    })
  }
  return(<>
    <p className={styles.prompt}>Bab 4 lengkap. <em>Pertahanan terakhir privasimu ada di keputusan sadarmu sendiri.</em></p>
    <div className={styles.main}>
      <div className={styles.col}>
        <div className={styles.card}>
          <div className={styles.ct}>Rangkuman</div>
          {ROWS.map(([l,t,d])=><div key={l} className={styles.row}><span className={styles.lv}>{l}</span><span><b>{t}</b> — {d}</span></div>)}
        </div>
        <div className={styles.fact}><b>Penutup Bab 4:</b> Digital Citizen yang baik membuat keputusan sadar — tentang apa yang diposting, apa yang dirahasiakan, dan bagaimana melindungi diri. Privasi = kontrol, bukan paranoia.</div>
      </div>
      <div className={styles.exitBox}>
        <div className={styles.exitLabel}>exit ticket</div>
        {EXIT_QS.slice(0,s+1).map((q,i)=><div key={i} className={`${styles.exitQ} ${i===s?styles.exitActive:''}`}><span className={styles.exitNum}>{i+1}</span><span className={styles.exitText}>{q}</span></div>)}
        {s<EXIT_QS.length-1&&<button className={styles.nextExit} onClick={next}>Pertanyaan berikutnya →</button>}
      </div>
    </div>
  </>)
}
