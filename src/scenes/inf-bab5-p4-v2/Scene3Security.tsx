import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene3Security.module.css'
const SCENARIOS = [
  {situasi:'WiFi sekolah tidak pakai password, siapa saja bisa connect', risiko:'Orang tak dikenal bisa masuk jaringan, mengintip lalu lintas data, atau menyalahgunakan bandwidth', fix:'Pasang password WPA2/WPA3 yang kuat, ganti berkala'},
  {situasi:'Semua komputer lab pakai password admin yang sama: "admin123"', risiko:'Kalau 1 bocor, semua komputer bisa diakses. Password lemah mudah ditebak', fix:'Password unik per komputer, kuat, tidak dibagikan sembarangan'},
  {situasi:'Siswa mengakses situs dengan tanda "Not Secure" (http, bukan https)', risiko:'Data yang dikirim (termasuk password) bisa disadap karena tidak terenkripsi', fix:'Selalu cek https:// dan ikon gembok sebelum masukkan data sensitif'},
  {situasi:'File dari flashdisk tak dikenal langsung dibuka di komputer lab', risiko:'Bisa membawa virus/malware yang menyebar ke seluruh jaringan lab', fix:'Scan antivirus dulu, jangan buka file dari sumber tak dikenal'},
]
export function Scene3Security({ onUnlock }: DiscoverySceneProps) {
  const [step,setStep]=useState(0)
  const [shown,setShown]=useState<Set<number>>(new Set())
  const s=SCENARIOS[step];const r=shown.has(step)
  const analyze = () => {
    setShown(p=>{
      const n = new Set([...p, step])
      if (n.size === SCENARIOS.length) onUnlock()
      return n
    })
  }
  return (
    <>
      <p className={styles.prompt}>Audit keamanan jaringan. <em>Untuk tiap skenario lemah — identifikasi risiko & solusinya.</em> {step+1}/{SCENARIOS.length}</p>
      <div className={styles.sitBox}><span className={styles.warn}>⚠</span> {s.situasi}</div>
      {!r?<button className={styles.revBtn} onClick={analyze}>Analisis risiko →</button>
        :<div className={styles.analysis}>
          <div className={styles.risiko}><b>Risiko:</b> {s.risiko}</div>
          <div className={styles.fix}><b>Solusi:</b> {s.fix}</div>
          {step<SCENARIOS.length-1&&<button className={styles.nextBtn} onClick={()=>setStep(x=>x+1)}>Skenario berikutnya →</button>}
        </div>}
    </>
  )
}
