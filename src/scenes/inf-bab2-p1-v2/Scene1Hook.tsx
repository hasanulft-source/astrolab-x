import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene1Hook.module.css'
export function Scene1Hook({ onUnlock }: DiscoverySceneProps) {
  const [shown, setShown] = useState(false)
  const reveal = () => { setShown(true); onUnlock() }
  const rows = [
    {val:'85', ans:'Data', hint:'Angka mentah — belum ada konteks'},
    {val:'Rata-rata kelas: 78.4', ans:'Informasi', hint:'Sudah dihitung + konteks bermakna'},
    {val:'Alya Putri', ans:'Data', hint:'Identitas mentah'},
    {val:'Alya nilai tertinggi di kelas', ans:'Informasi', hint:'Interpretasi dari data'},
    {val:'TRUE', ans:'Data', hint:'Boolean kehadiran mentah'},
    {val:'2 siswa tidak hadir', ans:'Informasi', hint:'Data diproses jadi bisa dipakai'},
  ]
  return (
    <>
      <p className={styles.prompt}>Dataset rapor kelas VII baru diterima — berantakan.
        <em> Sebelum diolah: bedakan mana DATA, mana INFORMASI.</em></p>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead><tr><th>Elemen Dataset</th><th>Data</th><th>Informasi</th>{shown&&<th>Keterangan</th>}</tr></thead>
          <tbody>
            {rows.map(row=>(
              <tr key={row.val} className={shown?(row.ans==='Data'?styles.rData:styles.rInfo):''}>
                <td className={styles.tdVal}>{row.val}</td>
                <td className={styles.tdOpt}><span className={`${styles.chip} ${shown&&row.ans==='Data'?styles.chipAns:''}`}>Data</span></td>
                <td className={styles.tdOpt}><span className={`${styles.chip} ${shown&&row.ans==='Informasi'?styles.chipAns:''}`}>Info</span></td>
                {shown&&<td className={styles.tdHint}>{row.hint}</td>}
              </tr>
            ))}
          </tbody>
        </table>
        {!shown&&<button className={styles.revBtn} onClick={reveal}>Lihat klasifikasi →</button>}
      </div>
      {shown&&<div className={styles.def}>
        <div className={styles.defBox}><b>DATA</b> — fakta mentah tanpa konteks.</div>
        <div className={styles.defBox} style={{borderColor:'var(--teal-mid)'}}><b>INFORMASI</b> — data + konteks + makna, siap dipakai.</div>
      </div>}
    </>
  )
}
