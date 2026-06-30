import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const SIFAT = [
  { sifat:'Bentuk', padat:'tetap', cair:'mengikuti wadah', gas:'mengisi seluruh ruang' },
  { sifat:'Volume', padat:'tetap', cair:'tetap', gas:'berubah (mengisi ruang)' },
  { sifat:'Kemampatan', padat:'hampir tidak bisa', cair:'sangat sulit', gas:'sangat mudah' },
]

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className={styles.polaPanel}>
      <div className={styles.chartPanel}>
        <div className={styles.chartTitle}>Bandingkan tiga sifat utama tiap wujud zat:</div>
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          {SIFAT.map((s, i) => (
            <div key={i} style={{display:'grid',gridTemplateColumns:'90px 1fr 1fr 1fr',gap:6,fontSize:13}}>
              <div style={{fontWeight:700,color:'var(--discovery-ink)'}}>{s.sifat}</div>
              <div style={{background:'var(--surface)',border:'1px solid var(--line)',borderRadius:7,padding:'6px 8px',color:'var(--discovery-ink-2)'}}>{s.padat}</div>
              <div style={{background:'var(--surface)',border:'1px solid var(--line)',borderRadius:7,padding:'6px 8px',color:'var(--discovery-ink-2)'}}>{s.cair}</div>
              <div style={{background:'var(--surface)',border:'1px solid var(--line)',borderRadius:7,padding:'6px 8px',color:'var(--discovery-ink-2)'}}>{s.gas}</div>
            </div>
          ))}
          <div style={{display:'grid',gridTemplateColumns:'90px 1fr 1fr 1fr',gap:6,fontSize:11.5,color:'var(--discovery-ink-3)',marginTop:2}}>
            <div></div><div>Padat</div><div>Cair</div><div>Gas</div>
          </div>
        </div>
      </div>
      <div className={styles.questPanel}>
        {!revealed ? (
          <>
            <div className={styles.questText}>Berdasarkan tabel dan eksplorasimu — mengapa gas paling mudah dimampatkan?</div>
            <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Cek pemahamanku →</button>
          </>
        ) : (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Kemampatan = ruang kosong antar-partikel.</div>
            <p className={styles.conceptText}><strong>Gas</strong> memiliki jarak antar-partikel yang sangat besar — ada banyak ruang kosong untuk dimampatkan. <strong>Padat dan cair</strong> partikelnya sudah sangat rapat, hampir tidak ada ruang kosong tersisa.</p>
          </div>
        )}
      </div>
    </div>
  )
}
