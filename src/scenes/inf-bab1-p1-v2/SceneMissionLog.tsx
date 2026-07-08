import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
export function SceneMissionLog({ onUnlock }: DiscoverySceneProps) {
  const [notes, setNotes] = useState({pernah:'',beda:'',wow:''})
  const [saved, setSaved] = useState(false)
  const save = () => { setSaved(true); onUnlock() }
  return (
    <div className={styles.wrap}>
      <div className={styles.levelBadge}>SCENE 04  -  MISSION LOG  -  PENUTUPAN LEVEL 1</div>
      <p className={styles.prompt}>Sebelum Level 1 ditutup — catat apa yang baru kamu temukan.</p>
      <div className={styles.main} style={{gridTemplateColumns:'1fr 1fr',gap:12}}>
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          <div className={styles.panel}>
            <div className={styles.panelTitle} style={{color:'#088395'}}>Pernah Lakukan Ini Tanpa Sadar</div>
            <div style={{fontSize:13,color:'#6b7280',marginBottom:6}}>Kegiatan sehari-hari mana yang tanpa sadar sudah pakai salah satu dari 4 pondasi BK?</div>
            <textarea className={styles.noteArea} rows={4} placeholder="Contoh: waktu masak, aku selalu..." value={notes.pernah} onChange={e=>setNotes(n=>({...n,pernah:e.target.value}))} disabled={saved}/>
          </div>
          <div className={styles.panel}>
            <div className={styles.panelTitle} style={{color:'#09637e'}}>Yang Bikin Kamu WOW</div>
            <div style={{fontSize:13,color:'#6b7280',marginBottom:6}}>Dari puzzle tadi, hal apa yang paling mengejutkan atau menarik?</div>
            <textarea className={styles.noteArea} rows={3} placeholder="Yang bikin gue kaget adalah..." value={notes.wow} onChange={e=>setNotes(n=>({...n,wow:e.target.value}))} disabled={saved}/>
          </div>
        </div>
        <div className={styles.panel}>
          <div className={styles.panelTitle} style={{color:'#09637e'}}>Bedanya BK dengan Cara Biasa</div>
          <div style={{fontSize:13,color:'#6b7280',marginBottom:6}}>Sebelum belajar BK — bagaimana kamu biasanya memecahkan masalah kompleks? Sekarang apa yang berbeda?</div>
          <textarea className={styles.noteArea} style={{flex:1,minHeight:120}} rows={8} placeholder="Sebelum ini, aku biasanya langsung... Sekarang aku lebih..." value={notes.beda} onChange={e=>setNotes(n=>({...n,beda:e.target.value}))} disabled={saved}/>
        </div>
      </div>
      {!saved ? (
        <button className={styles.btn+' '+styles.btnViolet}
          disabled={!Object.values(notes).some(v=>v.trim())}
          style={{opacity:Object.values(notes).some(v=>v.trim())?1:.4}}
          onClick={save}>
          Simpan Mission Log Level 1
        </button>
      ) : (
        <div className={styles.statusFooter}>
          <div className={styles.statusLevel}>LEVEL 1 SELESAI</div>
          <div className={styles.statusText}>4 pondasi BK ditemukan dan dicatat. Lanjutkan ke Level 2: Detektif Pola.</div>
        </div>
      )}
    </div>
  )
}
