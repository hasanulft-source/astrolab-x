import { useState } from 'react'
import styles from './ui.module.css'
const OPS = [
  { id: 'kutip', op: '"..."', nama: 'Tanda kutip', ket: 'Mencari frasa yang sama persis. Contoh: "energi terbarukan" hanya menampilkan halaman dengan frasa itu utuh.' },
  { id: 'minus', op: '-', nama: 'Tanda minus', ket: 'Mengecualikan kata. Contoh: jaguar -mobil menampilkan hewan jaguar, bukan mobilnya.' },
  { id: 'site', op: 'site:', nama: 'Operator site', ket: 'Mencari hanya di satu situs. Contoh: banjir site:bnpb.go.id mencari di situs resmi BNPB saja.' },
]
export function Scene3Operator() {
  const [sel, setSel] = useState('kutip')
  const o = OPS.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Tiga <em>operator pencarian</em> yang paling berguna. Klik tiap operator.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.opGrid}>{OPS.map(x => <button key={x.id} className={`${styles.opCard} ${sel === x.id ? styles.opOn : ''}`} onClick={() => setSel(x.id)}><span className={styles.opSym}>{x.op}</span><span>{x.nama}</span></button>)}</div>
        </div>
        <div className={styles.side}><div className={styles.detail}>{o.ket}</div></div>
      </div>
    </>
  )
}
