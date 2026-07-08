import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
export function SceneCatatDetektif({ onUnlock }: DiscoverySceneProps) {
  const [diketahui, setDiketahui] = useState('')
  const [belum, setBelum] = useState('')
  const [saved, setSaved] = useState(false)
  const canSave = diketahui.trim() || belum.trim()
  const save = () => { setSaved(true); onUnlock() }
  return (
    <div className={styles.wrap}>
      <div className={styles.babakBadge}>SCENE 04 - CATATAN DETEKTIF - PENUTUPAN BABAK 1</div>
      <p className={styles.prompt}>Sebelum Babak 1 ditutup - catat posisi investigasimu sekarang.</p>
      <div className={styles.main} style={{gridTemplateColumns:'1fr 1fr',gap:16}}>
        <div className={styles.panel}>
          <div className={styles.panelTitle} style={{color:'#16a34a'}}>Yang Sudah Aku Ketahui</div>
          <textarea className={styles.noteArea} rows={6} placeholder="Tulis apa yang sudah kamu pahami tentang pesan viral ini..." value={diketahui} onChange={e=>setDiketahui(e.target.value)} disabled={saved}/>
        </div>
        <div className={styles.panel}>
          <div className={styles.panelTitle} style={{color:'#b45309'}}>Yang Masih Harus Diselidiki</div>
          <textarea className={styles.noteArea} rows={6} placeholder="Apa yang masih harus dicari? Apakah pesan ini benar?" value={belum} onChange={e=>setBelum(e.target.value)} disabled={saved}/>
        </div>
      </div>
      {!saved ? (
        <button className={styles.btn+' '+styles.btnAmber} disabled={!canSave} style={{opacity:canSave?1:.4}} onClick={save}>
          Simpan ke Case File
        </button>
      ) : (
        <div className={styles.caseFooter}>
          <div className={styles.caseFooterStatus}>BERKAS 1/6 SELESAI - KASUS MASIH TERBUKA</div>
          <div className={styles.caseFooterText}>Babak 1 selesai. Kebenarannya belum dikonfirmasi. Lanjutkan ke Babak 2: Mencari Jejak.</div>
        </div>
      )}
    </div>
  )
}
