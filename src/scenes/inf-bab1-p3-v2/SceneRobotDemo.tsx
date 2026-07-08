import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
const ROBOT_RESPONSES = [
  {cmd:'Buatkan saya kopi',logs:['ERROR: Kopi jenis apa? Tidak terdefinisi.','ERROR: Lokasi alat masak tidak diketahui.','ERROR: Suhu target tidak disebutkan.','ERROR: Waktu penyeduhan tidak ada.','ROBOT BERHENTI: Tidak bisa melanjutkan tanpa spesifikasi.']},
  {cmd:'Buat kopi hitam 200ml di dapur',logs:['OK: Kopi hitam terdeteksi.','OK: Lokasi dapur dikenali.','OK: Volume 200ml ditetapkan.','ERROR: Suhu air tidak disebutkan. Default: 0 derajat?','ERROR: Langkah-langkah penyeduhan tidak terdefinisi.']},
  {cmd:`MULAI
  Rebus air 200ml hingga 90 derajat
  Ambil cangkir bersih
  Masukkan 1 sendok kopi
  Tuang air panas
  Aduk 10 detik
SELESAI`,logs:['OK: Mulai eksekusi.','OK: Merebus 200ml air ke 90°C...','OK: Mengambil cangkir dari rak...','OK: Memasukkan 1 sendok kopi...','OK: Menuang air panas...','OK: Mengaduk selama 10 detik...','SELESAI: Kopi berhasil dibuat!']},
]
export function SceneRobotDemo({ onUnlock }: DiscoverySceneProps) {
  const [step, setStep] = useState(0)
  const [unlocked, setUnlocked] = useState(false)
  const r = ROBOT_RESPONSES[step]
  const pick = (i: number) => {
    setStep(i)
    if (i > 0 && !unlocked) { setUnlocked(true); onUnlock() }
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.levelBadge}>LEVEL 3  -  BAHASA ROBOT</div>
      <p className={styles.prompt}>Robot hanya bisa mengikuti instruksi <em>literal</em>. Tidak ada asumsi, tidak ada intuisi.</p>
      <div className={styles.main} style={{gridTemplateColumns:'1.2fr 1fr'}}>
        <div style={{display:'flex',flexDirection:'column',gap:10}}>
          <div className={styles.panelTitle} style={{color:'#09637e'}}>Perintah ke Robot</div>
          {ROBOT_RESPONSES.map((resp,i) => (
            <button key={i} onClick={()=>pick(i)}
              style={{padding:'12px 16px',borderRadius:9,border:'2px solid '+(step===i?'#088395':'#e2e6ea'),
                background:step===i?'#eef7f7':'#f7f8fa',cursor:'pointer',textAlign:'left',transition:'all .15s',
                fontFamily:'DM Mono',fontSize:13,color:'#09637e',lineHeight:1.5,whiteSpace:'pre-wrap'}}>
              {resp.cmd}
            </button>
          ))}
        </div>
        <div className={styles.robotDisplay}>
          <div className={styles.robotIcon}>🤖</div>
          <div className={styles.robotStatus}>MENGEKSEKUSI PERINTAH...</div>
          <div className={styles.robotLog}>
            {r.logs.map((l,i) => (
              <div key={i} style={{color:l.startsWith('ERROR')?'#ef4444':l.startsWith('OK')?'#22c55e':l.startsWith('SELESAI')?'#89c5cc':'#088395'}}>{l}</div>
            ))}
          </div>
          <div style={{fontSize:13,color:'#6b7280',textAlign:'center'}}>
            {step===0?'Instruksi terlalu ambigu — robot tidak bisa bergerak.':step===1?'Lebih baik, tapi masih ada yang kurang.':'Instruksi presisi — robot berhasil!'}
          </div>
        </div>
      </div>
    </div>
  )
}
