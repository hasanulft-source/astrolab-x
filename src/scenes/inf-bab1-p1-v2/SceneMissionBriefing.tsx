import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './ui.module.css'
export function SceneMissionBriefing({ onUnlock }: DiscoverySceneProps) {
  const [accepted, setAccepted] = useState(false)
  const accept = () => { setAccepted(true); onUnlock() }
  return (
    <div className={styles.wrap}>
      <div className={styles.levelBadge}>LEVEL 1 / 5  -  PUZZLE PERTAMA  -  INFORMATIKA BAB I</div>
      <p className={styles.prompt}>Selamat datang, <em>Problem Solver</em>. Kamu menerima misi pertama.</p>
      {!accepted ? (
        <div style={{flex:1,display:'flex',flexDirection:'column',gap:14,justifyContent:'center'}}>
          <div className={styles.missionCard}>
            <div className={styles.missionCardTitle}>MISSION BRIEFING - LEVEL 1</div>
            <div className={styles.missionCardText} style={{fontSize:20,fontWeight:700,color:'#fff',marginTop:8}}>Puzzle Penjadwalan Hari Guru</div>
            <div className={styles.missionCardText} style={{marginTop:8}}>
              Pak Fata punya 12 kegiatan di hari Senin. 4 di antaranya bisa dikerjakan bersamaan. Susun jadwal yang paling efisien!
            </div>
          </div>
          <div className={styles.hint}>
            Tidak ada penjelasan dulu. Coba dulu dengan caramu sendiri. Gagal itu bagian dari misi.
          </div>
          <button className={styles.btn+' '+styles.btnViolet} onClick={accept} style={{alignSelf:'flex-start'}}>
            Terima misi dan mulai puzzle
          </button>
        </div>
      ) : (
        <div style={{flex:1,display:'flex',flexDirection:'column',gap:12}}>
          <div className={styles.hint}>Sebelum mulai — tuliskan dulu strategi pertamamu:</div>
          <div className={styles.panel} style={{flex:1}}>
            <div className={styles.panelTitle}>Strategi pertamaku untuk memecahkan puzzle ini:</div>
            <textarea className={styles.noteArea} rows={4} placeholder="Aku akan mencoba dengan cara..."/>
          </div>
          <div className={styles.statusFooter}>
            <div className={styles.statusLevel}>MISSION ACCEPTED</div>
            <div className={styles.statusText}>Strategi tersimpan. Lanjutkan ke puzzle di Scene 02.</div>
          </div>
        </div>
      )}
    </div>
  )
}
