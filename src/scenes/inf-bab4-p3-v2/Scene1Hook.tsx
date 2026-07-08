import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene1Hook.module.css'
export function Scene1Hook({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState(false)
  const leaks = [
    {info:'Nama lengkap', sumber:'Bio media sosial'},
    {info:'Foto berseragam', sumber:'Postingan sekolah'},
    {info:'Nama sekolah', sumber:'Tag lokasi foto'},
    {info:'Tanggal lahir', sumber:'Ucapan ulang tahun di wall'},
    {info:'Nama ibu', sumber:'Komentar keluarga di foto'},
    {info:'Rutinitas harian', sumber:'Story yang di-posting tiap hari'},
  ]
  const reveal = () => { setRevealed(true); onUnlock() }
  return (
    <>
      <p className={styles.prompt}>Seseorang yang tidak kamu kenal mengumpulkan info tentangmu dari internet.
        <em> Semuanya kamu sendiri yang posting.</em></p>
      <div className={styles.dossier}>
        <div className={styles.dHeader}>PROFIL TARGET — dikumpulkan dalam 15 menit</div>
        {leaks.map((l,i)=>(
          <div key={i} className={`${styles.leak} ${revealed?styles.leakShown:''}`} style={{transitionDelay:`${i*60}ms`}}>
            <span className={styles.leakInfo}>{revealed?l.info:'████████'}</span>
            <span className={styles.leakSrc}>{revealed?`← ${l.sumber}`:''}</span>
          </div>
        ))}
      </div>
      {!revealed&&<button className={styles.revBtn} onClick={reveal}>Ungkap data yang terkumpul →</button>}
      {revealed&&<div className={styles.insight}>
        Dengan info ini, seseorang bisa: menebak passwordmu (nama+tanggal lahir), berpura-pura mengenalmu, atau tahu kapan rumahmu kosong. <b>Kamu tidak dibobol — kamu memberikannya sendiri, sedikit demi sedikit.</b> Level ini: pertahanan terakhir privasimu.
      </div>}
    </>
  )
}
