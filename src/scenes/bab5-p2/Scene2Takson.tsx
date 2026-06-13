import { useState } from 'react'
import { TaksonLadder } from '../../components/TaksonLadder'
import { HARIMAU } from './data'
import styles from './ui.module.css'

export function Scene2Takson() {
  const [i, setI] = useState(0)
  const l = HARIMAU[i]
  const isSp = l.takson === 'Spesies'
  return (
    <>
      <p className={styles.prompt}>Makhluk hidup disusun bertingkat dari <em>Kingdom</em> sampai <em>Spesies</em>. Klik tiap tingkat - lihat contoh harimau.</p>
      <div className={styles.main}>
        <div className={styles.viz}><TaksonLadder levels={HARIMAU} active={i} onSelect={setI} /></div>
        <div className={styles.side}>
          <div className={styles.detail}>
            <div className={styles.detailH}>{l.takson}: <span className={isSp ? styles.ital : ''}>{l.nilai}</span></div>
            <div className={styles.detailRow}>Jumlah anggota: <b>{l.jumlah}</b></div>
            <div className={styles.detailRow}>Ibarat alamat: <b>{l.alamat}</b></div>
          </div>
          {isSp
            ? <div className={styles.allNote}>Nama spesies ditulis <b>dua kata</b>: Genus (huruf besar) + penunjuk spesies (huruf kecil), dicetak <i>miring</i>. Contoh: <i>Panthera tigris</i>.</div>
            : <div className={styles.allNote}>Makin ke bawah: anggota makin <b>sedikit</b>, ciri makin <b>mirip</b> - makin spesifik, persis alamat rumah.</div>}
        </div>
      </div>
    </>
  )
}
