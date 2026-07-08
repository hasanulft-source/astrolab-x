import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene3Clean.module.css'
const ISSUES = [
  {id:1, nama:'alya putri', nilai:'85', status:'hadir', problems:['Nama: huruf kecil semua (tidak konsisten)','Status: huruf kecil (harus Hadir/Sakit/Izin)'], fix:'Alya Putri · Hadir'},
  {id:2, nama:'Budi Santoso', nilai:'tujuh puluh', status:'HADIR', problems:['Nilai: teks bukan angka — tidak bisa dihitung','Status: huruf besar semua'], fix:'70 · Hadir'},
  {id:3, nama:'CITRA DEWI', nilai:'92', status:'Hadir', problems:['Nama: huruf besar semua'], fix:'Citra Dewi'},
  {id:4, nama:'Dani', nilai:'', status:'Sakit', problems:['Nilai: kosong (missing value) — COUNT dan AVERAGE akan salah'], fix:'Isi N/A atau 0 atau biarkan kosong secara konsisten'},
  {id:5, nama:'Eka Pratiwi', nilai:'88 ', status:'hadir', problems:['Nilai: ada spasi tersembunyi di akhir','Status: huruf kecil'], fix:'88 · Hadir (hapus spasi dengan TRIM)'},
]
export function Scene3Clean({ onUnlock }: DiscoverySceneProps) {
  const [expanded, setExpanded] = useState<Set<number>>(new Set())
  const [allShown, setAllShown] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const trigger = () => { if (!unlocked) { setUnlocked(true); onUnlock() } }
  const toggle = (id:number) => { setExpanded(p=>{const n=new Set(p); n.has(id)?n.delete(id):n.add(id); return n}); trigger() }
  const toggleAll = () => { setAllShown(x=>!x); trigger() }
  return (
    <>
      <p className={styles.prompt}>70% kerja data analyst adalah membersihkan data.
        <em> Identifikasi masalah di setiap baris — klik untuk lihat apa yang salah.</em>
      </p>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead><tr><th>#</th><th>Nama</th><th>Nilai</th><th>Status</th><th>Masalah</th></tr></thead>
          <tbody>
            {ISSUES.map(row=>{
              const open = expanded.has(row.id)||allShown
              return (<>
                <tr key={row.id} className={styles.dataRow}>
                  <td className={styles.tdN}>{row.id}</td>
                  <td className={styles.td}>{row.nama}</td>
                  <td className={styles.td}>{row.nilai||<span className={styles.empty}>(kosong)</span>}</td>
                  <td className={styles.td}>{row.status}</td>
                  <td><button className={styles.spotBtn} onClick={()=>toggle(row.id)}>{open?'▲ Sembunyikan':'▼ Identifikasi'}</button></td>
                </tr>
                {open&&<tr key={row.id+'d'} className={styles.detailRow}>
                  <td/>
                  <td colSpan={2}>{row.problems.map((p,i)=><div key={i} className={styles.prob}>⚠ {p}</div>)}</td>
                  <td colSpan={2}><div className={styles.fix}>✓ Perbaikan: {row.fix}</div></td>
                </tr>}
              </>)
            })}
          </tbody>
        </table>
        <button className={styles.allBtn} onClick={toggleAll}>{allShown?'Sembunyikan semua':'Tampilkan semua masalah →'}</button>
      </div>
      <div className={styles.rule}><b>Aturan cleaning:</b> konsistensi format · tidak ada missing value tersembunyi · tidak ada spasi tersembunyi · angka harus berupa angka. Ini standar industri.</div>
    </>
  )
}
