import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
const KEYWORDS = ['MULAI','SELESAI','JIKA','MAKA','LAINNYA','ULANGI SELAMA','LAKUKAN','TAMPILKAN','SIMPAN','HITUNG']
const TEMPLATE = `MULAI
  // Tulis langkah-langkahmu di sini
  JIKA [kondisi] MAKA
    [aksi]
  SELESAI JIKA
  ULANGI SELAMA [kondisi] :
    [aksi berulang]
SELESAI`
export function ScenePseudocode({ onUnlock }: DiscoverySceneProps) {
  const [code, setCode] = useState('')
  const [piket, setPiket] = useState('')
  const [validated, setValidated] = useState<boolean|null>(null)
  const validate = () => {
    const c = code.toLowerCase()
    const ok = c.includes('mulai') && c.includes('selesai') && (c.includes('jika')||c.includes('ulangi'))
    setValidated(ok)
    onUnlock()
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.levelBadge}>SCENE 03  -  PSEUDOCODE  -  BAHASA PRESISI</div>
      <p className={styles.prompt}>Perbaiki instruksi menyebrang jalan menjadi <em>pseudocode yang presisi</em>. Lalu buat blueprint jadwal piket.</p>
      <div className={styles.main} style={{gridTemplateColumns:'1fr 1fr'}}>
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          <div className={styles.panelTitle}>Kata kunci pseudocode:</div>
          <div style={{display:'flex',flexWrap:'wrap',gap:5}}>
            {KEYWORDS.map(k=>(
              <span key={k} style={{fontFamily:'DM Mono',fontSize:13,fontWeight:700,color:'#09637e',background:'#eef7f7',padding:'4px 10px',borderRadius:6}}>{k}</span>
            ))}
          </div>
          <div className={styles.panelTitle} style={{marginTop:6}}>Pseudocode cara menyebrang jalan:</div>
          <textarea className={styles.pseudoInput} rows={8}
            placeholder={TEMPLATE}
            value={code} onChange={e=>{setCode(e.target.value);setValidated(null)}}/>
          <div className={styles.btnRow}>
            <button className={styles.btn+' '+styles.btnViolet} onClick={validate} disabled={!code.trim()} style={{opacity:code.trim()?1:.4}}>Validasi pseudocode</button>
            <button className={styles.btn+' '+styles.btnOutline} onClick={()=>{setCode(TEMPLATE);setValidated(null)}}>Pakai template</button>
          </div>
          {validated!==null&&(
            <div style={{padding:'10px 14px',borderRadius:8,background:validated?'#f0fdf4':'#fef2f2',fontSize:14,fontWeight:600,color:validated?'#16a34a':'#dc2626'}}>
              {validated?'Struktur pseudocode benar! Ada MULAI, SELESAI, dan kondisi/perulangan.':'Cek lagi: harus ada MULAI, SELESAI, dan minimal 1 JIKA atau ULANGI.'}
            </div>
          )}
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          <div className={styles.panelTitle} style={{color:'#088395'}}>Blueprint Jadwal Piket untuk Scratch (Level 4)</div>
          <div className={styles.hint} style={{fontSize:13}}>Ini yang akan kamu kode di Scratch. Pastikan logikanya benar!</div>
          <textarea className={styles.pseudoInput} style={{flex:1,minHeight:160}} rows={10}
            placeholder="MULAI&#10;  // Pseudocode jadwal piket kelas&#10;  // Masukkan nama-nama siswa&#10;  // Tentukan pos piket&#10;  // Loop setiap hari&#10;    // Tentukan siapa piket hari ini&#10;    // Tampilkan hasilnya&#10;SELESAI"
            value={piket} onChange={e=>setPiket(e.target.value)}/>
          {piket.trim()&&(
            <div className={styles.statusFooter}>
              <div className={styles.statusLevel}>BLUEPRINT TERSIMPAN</div>
              <div className={styles.statusText}>Pseudocode jadwal piket siap. Level 4: bawa ke Scratch!</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
