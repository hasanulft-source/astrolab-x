import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene1Hook.module.css'
export function Scene1Hook({ onUnlock }: DiscoverySceneProps) {
  const [step, setStep] = useState(0)
  const hops = [
    {loc:'HP kamu', d:'Kamu kirim pesan "Halo" ke teman'},
    {loc:'Router WiFi rumah', d:'Pesan dipecah jadi paket-paket data kecil'},
    {loc:'ISP (Penyedia Internet)', d:'Paket dikirim ke jaringan yang lebih besar'},
    {loc:'Server aplikasi chat', d:'Server meneruskan ke penerima yang dituju'},
    {loc:'HP teman', d:'Paket disusun ulang jadi pesan "Halo" utuh'},
  ]
  const advance = () => {
    setStep(s => {
      const ns = s+1
      if (ns === hops.length-1) onUnlock()
      return ns
    })
  }
  return (
    <>
      <p className={styles.prompt}>Kamu kirim "Halo" ke teman. <em>Dalam sekejap. Tapi apa yang sebenarnya terjadi di balik layar?</em></p>
      <div className={styles.network}>
        {hops.slice(0,step+1).map((h,i)=>(
          <div key={i} className={styles.hop}>
            <div className={styles.hopIcon}>{['📱','📶','🌐','☁️','📱'][i]}</div>
            <div className={styles.hopBody}>
              <div className={styles.hopLoc}>{h.loc}</div>
              <div className={styles.hopD}>{h.d}</div>
            </div>
            {i<step&&<div className={styles.arrow}>↓</div>}
          </div>
        ))}
      </div>
      {step<hops.length-1?<button className={styles.nextBtn} onClick={advance}>Lanjutkan perjalanan paket ↓</button>
        :<div className={styles.reveal}>
          Pesan "Halo" melintasi <b>5+ titik dalam waktu &lt;1 detik.</b> Data dipecah jadi paket kecil, dikirim lewat rute tercepat, lalu disusun ulang di tujuan. Ini prinsip dasar jaringan: <b>packet switching.</b> Level ini: pahami & petakan jaringan yang kamu pakai tiap hari.
        </div>}
    </>
  )
}
