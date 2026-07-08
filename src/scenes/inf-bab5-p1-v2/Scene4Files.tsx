import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene4Files.module.css'
const MESSY = ['tugas.docx','IMG_2043.jpg','tugas fix.docx','tugasFIXbgt.docx','Untitled1.docx','foto liburan.jpg','materi.pdf','materi (1).pdf','asdfgh.docx','tugas fix REVISI.docx']
const TREE = {
  'Sekolah':{'IPA':['Tugas','Materi','Ulangan'],'Informatika':['Proyek','Latihan']},
  'Pribadi':{'Foto':['Liburan','Keluarga'],'Dokumen':[]},
}
export function Scene4Files({ onUnlock }: DiscoverySceneProps) {
  const [phase, setPhase] = useState<'messy'|'tree'>('messy')
  const [unlocked, setUnlocked] = useState(false)
  const toggle = (p: 'messy'|'tree') => { setPhase(p); if (!unlocked) { setUnlocked(true); onUnlock() } }
  return (
    <>
      <p className={styles.prompt}>Drive berantakan vs sistem folder rapi. <em>Bandingkan — mana yang bisa kamu cari filenya dalam 5 detik?</em></p>
      <div className={styles.toggle}>
        <button className={`${styles.tBtn} ${phase==='messy'?styles.tOn:''}`} onClick={()=>toggle('messy')}>❌ Tanpa Sistem</button>
        <button className={`${styles.tBtn} ${phase==='tree'?styles.tOn:''}`} onClick={()=>toggle('tree')}>✓ Dengan Sistem</button>
      </div>
      {phase==='messy'&&<div className={styles.messyBox}>
        <div className={styles.messyLabel}>Desktop/ (semua file numpuk di satu tempat)</div>
        <div className={styles.messyFiles}>
          {MESSY.map((f,i)=><div key={i} className={styles.file}>📄 {f}</div>)}
        </div>
        <div className={styles.messyNote}>Masalah: nama tidak konsisten ("tugas fix", "tugasFIXbgt", "REVISI"), tidak ada folder, duplikat, nama tidak jelas ("asdfgh", "Untitled1"). Cari file = mimpi buruk.</div>
      </div>}
      {phase==='tree'&&<div className={styles.treeBox}>
        {Object.entries(TREE).map(([root,subs])=>(
          <div key={root} className={styles.treeRoot}>
            <div className={styles.folderRoot}>📁 {root}</div>
            {Object.entries(subs).map(([sub,items])=>(
              <div key={sub} className={styles.treeSub}>
                <div className={styles.folderSub}>📁 {sub}</div>
                {(items as string[]).map(item=><div key={item} className={styles.folderLeaf}>📁 {item}</div>)}
              </div>
            ))}
          </div>
        ))}
        <div className={styles.treeNote}>Prinsip: hirarki logis (umum → spesifik), nama konsisten, satu tempat untuk satu jenis. Cari file = beberapa klik yang jelas.</div>
      </div>}
      <div className={styles.rule}><b>Aturan penamaan:</b> gunakan format konsisten seperti <code>2026-01-15_IPA_TugasBab1.docx</code> — tanggal + mapel + isi. Bisa diurutkan otomatis & langsung jelas.</div>
    </>
  )
}
