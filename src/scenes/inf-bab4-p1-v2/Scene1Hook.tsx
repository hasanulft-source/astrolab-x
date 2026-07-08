import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene1Hook.module.css'
export function Scene1Hook({ onUnlock }: DiscoverySceneProps) {
  const [pick, setPick] = useState<string|null>(null)
  const choose = () => { setPick('go'); onUnlock() }
  return (
    <>
      <p className={styles.prompt}>Kamu posting sesuatu, lalu 5 menit kemudian menghapusnya.
        <em> Apakah benar-benar hilang?</em></p>
      <div className={styles.layout}>
        <div className={styles.timeline}>
          {[['00:00','Kamu posting foto/komentar','var(--teal-mid)'],['00:02','3 orang screenshot','#f59e0b'],['00:05','Kamu hapus postingan','#0ea5e9'],['00:05','Postingan hilang dari profilmu','#0ea5e9'],['selamanya','Screenshot tetap ada di HP 3 orang tadi','#dc2626']].map(([t,e,c],i)=>(
            <div key={i} className={styles.tItem} style={{borderColor:c as string}}>
              <div className={styles.tTime} style={{color:c as string}}>{t}</div>
              <div className={styles.tEvent}>{e}</div>
            </div>
          ))}
        </div>
        <div className={styles.side}>
          <div className={styles.q}>Apa pelajaran utama dari timeline ini?</div>
          <div className={styles.opts}>
            {['Hapus postingan dengan cepat supaya aman','Internet tidak punya tombol "undo" yang sesungguhnya — apa yang sudah publik bisa disimpan siapa saja, selamanya','Screenshot itu ilegal jadi tidak perlu khawatir','Cukup atur privasi ke teman saja'].map(o=>(
              <button key={o} className={styles.opt} onClick={choose}>{o}</button>
            ))}
          </div>
          {pick&&<div className={styles.reveal}>
            Konsep <b>jejak digital permanen</b>: begitu sesuatu masuk ruang publik, kendali atasnya hilang. Screenshot, arsip web, cache mesin pencari — semua bisa mengabadikan yang kamu kira sudah terhapus. Ini bukan untuk menakuti, tapi untuk membuat keputusan sadar sebelum posting.
          </div>}
        </div>
      </div>
    </>
  )
}
