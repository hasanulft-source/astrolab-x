import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene1Hook.module.css'
export function Scene1Hook({ onUnlock }: DiscoverySceneProps) {
  const [pick, setPick] = useState<string|null>(null)
  const choose = () => { setPick('go'); onUnlock() }
  return (
    <>
      <p className={styles.prompt}>Dua dokumen berisi info yang SAMA. <em>Kenapa yang satu terlihat profesional, yang lain berantakan?</em></p>
      <div className={styles.compare}>
        <div className={styles.docBad}>
          <div className={styles.docLabel}>Dokumen A</div>
          <div className={styles.badText}>profil kelas 7-3 kami ada 32 siswa wali kelas bu ani kelas kami aktif dalam kegiatan pramuka dan olahraga kami juga punya program piket harian yang dijalankan bergilir setiap hari...</div>
        </div>
        <div className={styles.docGood}>
          <div className={styles.docLabel}>Dokumen B</div>
          <div className={styles.goodTitle}>PROFIL KELAS VII-3</div>
          <div className={styles.goodSub}>Wali Kelas: Bu Ani · 32 Siswa</div>
          <div className={styles.goodH}>Kegiatan</div>
          <div className={styles.goodBullet}>• Pramuka & Olahraga</div>
          <div className={styles.goodBullet}>• Piket harian bergilir</div>
        </div>
      </div>
      <div className={styles.q}>Apa yang membuat Dokumen B lebih baik?</div>
      <div className={styles.opts}>
        {['Dokumen B pakai lebih banyak kata','Formatting: judul, heading, bullet, hierarki visual yang membantu pembaca menavigasi','Dokumen B warnanya lebih bagus','Tidak ada bedanya, hanya selera'].map(o=>(
          <button key={o} className={styles.opt} onClick={choose}>{o}</button>
        ))}
      </div>
      {pick&&<div className={styles.reveal}>
        <b>Formatting bukan dekorasi — ia adalah komunikasi.</b> Judul, heading, bullet, dan spasi membantu pembaca menemukan informasi dengan cepat. Dokumen yang sama isinya bisa gagal atau berhasil tergantung cara penyajiannya. Level ini: buat dokumen yang "berbicara".
      </div>}
    </>
  )
}
