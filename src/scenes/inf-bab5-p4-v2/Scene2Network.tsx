import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene2Network.module.css'
const TERMS = [
  {istilah:'LAN', kepanjangan:'Local Area Network', arti:'Jaringan dalam area terbatas — 1 lab, 1 gedung, 1 rumah. Cepat & privat.', contoh:'Komputer di lab sekolah yang terhubung ke printer yang sama'},
  {istilah:'WiFi', kepanjangan:'Wireless Fidelity', arti:'Koneksi jaringan tanpa kabel via gelombang radio', contoh:'HP kamu terhubung internet tanpa colok kabel'},
  {istilah:'Router', kepanjangan:'—', arti:'Perangkat yang mengarahkan lalu lintas data antar jaringan', contoh:'Kotak WiFi di rumah yang menghubungkan semua perangkat ke internet'},
  {istilah:'IP Address', kepanjangan:'Internet Protocol Address', arti:'Alamat unik tiap perangkat di jaringan — seperti alamat rumah', contoh:'192.168.1.5 — alamat HP-mu di jaringan rumah'},
  {istilah:'ISP', kepanjangan:'Internet Service Provider', arti:'Perusahaan yang menyediakan koneksi internet ke rumah/sekolah', contoh:'Telkom, Indihome, dan penyedia internet lain'},
  {istilah:'Bandwidth', kepanjangan:'—', arti:'Kapasitas maksimal data yang bisa lewat per detik — seperti lebar jalan', contoh:'Bandwidth besar = banyak perangkat bisa streaming bersamaan tanpa lambat'},
]
export function Scene2Network({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState(0)
  const [unlocked, setUnlocked] = useState(false)
  const t = TERMS[sel]
  const pick = (i: number) => { setSel(i); if (!unlocked) { setUnlocked(true); onUnlock() } }
  return (
    <>
      <p className={styles.prompt}>Istilah jaringan yang perlu kamu tahu untuk memetakan jaringan sekolah & rumah. <em>Klik tiap istilah.</em></p>
      <div className={styles.main}>
        <div className={styles.list}>
          {TERMS.map((t,i)=>(
            <button key={i} className={`${styles.item} ${sel===i?styles.itemSel:''}`} onClick={()=>pick(i)}>{t.istilah}</button>
          ))}
        </div>
        <div className={styles.detail}>
          <div className={styles.dIstilah}>{t.istilah}</div>
          {t.kepanjangan!=='—'&&<div className={styles.dKepanjangan}>{t.kepanjangan}</div>}
          <div className={styles.dArti}>{t.arti}</div>
          <div className={styles.dContoh}><span className={styles.exLabel}>Contoh:</span> {t.contoh}</div>
        </div>
      </div>
      <div className={styles.task}>Tugas L7: petakan jaringan lab sekolah + rumahmu sendiri — gambar perangkat apa saja yang terhubung dan bagaimana.</div>
    </>
  )
}
