import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
const ROBOT_EXEC = (instruksi: string) => {
  const baris = instruksi.toLowerCase()
  const logs: string[] = []
  if (!baris.includes('lihat') && !baris.includes('periksa')) logs.push('ERROR: Tidak ada instruksi memeriksa kondisi jalan.')
  if (!baris.includes('jika') && !baris.includes('kalau')) logs.push('ERROR: Tidak ada kondisi IF. Robot langsung menyeberang tanpa cek lalu lintas!')
  if (!baris.includes('tunggu') && !baris.includes('berhenti')) logs.push('ERROR: Tidak ada instruksi untuk menunggu jika jalan tidak aman.')
  if (logs.length === 0) {
    logs.push('OK: Memeriksa kondisi jalan...')
    logs.push('OK: Menunggu hingga aman...')
    logs.push('OK: Menyeberang dengan aman.')
    logs.push('SELESAI: Berhasil!')
  } else {
    logs.push('ROBOT: Langsung menyeberang tanpa memeriksa... BAHAYA!')
  }
  return logs
}
export function SceneInstruksiBiasa({ onUnlock }: DiscoverySceneProps) {
  const [instruksi, setInstruksi] = useState('')
  const [logs, setLogs] = useState<string[]>([])
  const [ran, setRan] = useState(false)
  const run = () => { setLogs(ROBOT_EXEC(instruksi)); setRan(true); onUnlock() }
  const success = ran && logs.every(l => !l.startsWith('ERROR'))
  return (
    <div className={styles.wrap}>
      <div className={styles.levelBadge}>SCENE 02  -  INSTRUKSI BAHASA BIASA</div>
      <p className={styles.prompt}>Tulis instruksi cara menyebrang jalan. Robot akan mengeksekusi <em>secara literal</em>.</p>
      <div className={styles.main} style={{gridTemplateColumns:'1.2fr 1fr'}}>
        <div style={{display:'flex',flexDirection:'column',gap:10}}>
          <div className={styles.hint}>Tulis seperti cara kamu biasanya menjelaskan ke orang lain — jangan dipikirkan terlalu dalam dulu.</div>
          <textarea className={styles.noteArea} rows={8}
            placeholder="cara menyebrang jalan:&#10;1. ...&#10;2. ...&#10;3. ..."
            value={instruksi} onChange={e=>setInstruksi(e.target.value)}/>
          <button className={styles.btn+' '+styles.btnViolet} onClick={run} disabled={!instruksi.trim()} style={{opacity:instruksi.trim()?1:.4}}>
            Jalankan robot
          </button>
        </div>
        <div className={styles.robotDisplay}>
          <div className={styles.robotIcon}>{ran?(success?'🤖':'😵'):'🤖'}</div>
          <div className={styles.robotStatus}>{ran?'HASIL EKSEKUSI':'MENUNGGU INSTRUKSI...'}</div>
          <div className={styles.robotLog}>
            {logs.length>0 ? logs.map((l,i)=>(
              <div key={i} style={{color:l.startsWith('ERROR')?'#ef4444':l.startsWith('OK')?'#22c55e':l.startsWith('SELESAI')?'#89c5cc':'#088395'}}>{l}</div>
            )) : <div style={{color:'#374151',fontStyle:'italic'}}>Belum ada instruksi yang dijalankan...</div>}
          </div>
          {ran&&!success&&<div style={{fontSize:13,color:'#fca5a5',textAlign:'center',padding:'0 8px'}}>Instruksimu ambigu! Perbaiki di Scene 03 jadi pseudocode yang presisi.</div>}
          {ran&&success&&<div style={{fontSize:13,color:'#86efac',textAlign:'center'}}>Instruksi sudah cukup presisi untuk robot!</div>}
        </div>
      </div>
    </div>
  )
}
