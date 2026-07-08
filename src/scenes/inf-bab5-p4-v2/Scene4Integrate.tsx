import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene4Integrate.module.css'
const FLOW = [
  {tool:'Browser', icon:'🌐', tugas:'Riset topik proyek — cari data dengan operator pencarian, evaluasi sumber', hasil:'Informasi terverifikasi'},
  {tool:'Word', icon:'📄', tugas:'Susun temuan riset jadi ringkasan/laporan dengan formatting yang rapi', hasil:'Dokumen laporan'},
  {tool:'Email', icon:'✉️', tugas:'Kirim draft laporan ke guru untuk review, dengan email profesional + lampiran', hasil:'Draft terkirim'},
  {tool:'PowerPoint', icon:'📊', tugas:'Ubah laporan jadi presentasi 5 slide untuk showcase', hasil:'Deck presentasi'},
]
export function Scene4Integrate({ onUnlock }: DiscoverySceneProps) {
  const [active, setActive] = useState(0)
  const [unlocked, setUnlocked] = useState(false)
  const pick = (i: number) => { setActive(i); if (!unlocked) { setUnlocked(true); onUnlock() } }
  return (
    <>
      <p className={styles.prompt}>Proyek akhir: <em>satu tugas, semua alat.</em> Riset → tulis → kirim → presentasi. Inilah puncak Technology Creator.</p>
      <div className={styles.flow}>
        {FLOW.map((f,i)=>(
          <div key={i} className={styles.flowWrap}>
            <button className={`${styles.node} ${active===i?styles.nodeActive:''} ${i<active?styles.nodeDone:''}`} onClick={()=>pick(i)}>
              <div className={styles.nodeIcon}>{f.icon}</div>
              <div className={styles.nodeTool}>{f.tool}</div>
            </button>
            {i<FLOW.length-1&&<div className={styles.connector}>→</div>}
          </div>
        ))}
      </div>
      <div className={styles.detail}>
        <div className={styles.dTool}>{FLOW[active].icon} {FLOW[active].tool}</div>
        <div className={styles.dTugas}>{FLOW[active].tugas}</div>
        <div className={styles.dHasil}>Output: <b>{FLOW[active].hasil}</b> → dipakai di tahap berikutnya</div>
      </div>
      <div className={styles.showcase}>
        <b>Showcase (L10):</b> presentasikan proyek integrasimu ke kelas. Ini asesmen sumatif Bab 5 — bukti bahwa kamu bisa menggabungkan minimal 3 perkakas TIK dalam 1 alur kerja nyata.
      </div>
    </>
  )
}
