import { useState } from 'react'
import styles from './ui.module.css'
export function Scene3Pertukaran() {
  const [tab, setTab] = useState<'o2' | 'co2'>('o2')
  return (
    <>
      <p className={styles.prompt}>Di alveolus terjadi <em>pertukaran gas</em> dengan darah di kapiler. Pilih gasnya.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.tabsTop}>
            <button className={`${styles.tt} ${tab === 'o2' ? styles.on : ''}`} onClick={() => setTab('o2')}>O2 masuk</button>
            <button className={`${styles.tt} ${tab === 'co2' ? styles.on : ''}`} onClick={() => setTab('co2')}>CO2 keluar</button>
          </div>
          <svg viewBox="0 0 240 160" className={styles.gasSvg}>
            <circle cx="80" cy="80" r="48" fill="#eaf4fb" stroke="#b9d6ea" strokeWidth="2" />
            <text x="80" y="84" textAnchor="middle" fontSize="13" fontWeight="700" fill="#2b6f9e">Alveolus</text>
            <rect x="150" y="32" width="40" height="96" rx="20" fill="#fbe9e7" stroke="#e6b8b2" strokeWidth="2" />
            <text x="170" y="146" textAnchor="middle" fontSize="11" fontWeight="600" fill="#9a3b36">kapiler</text>
            <defs>
              <marker id="ro" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0l6 3-6 3z" fill="#c0392b" /></marker>
              <marker id="bo" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0l6 3-6 3z" fill="#2a6fb0" /></marker>
            </defs>
            {tab === 'o2'
              ? <line x1="124" y1="80" x2="158" y2="80" stroke="#c0392b" strokeWidth="3" markerEnd="url(#ro)" />
              : <line x1="158" y1="80" x2="124" y2="80" stroke="#2a6fb0" strokeWidth="3" markerEnd="url(#bo)" />}
          </svg>
        </div>
        <div className={styles.side}>
          {tab === 'o2'
            ? <div className={styles.detail}><b>Oksigen (O2)</b> dari udara di alveolus berpindah masuk ke darah, lalu diikat hemoglobin untuk diedarkan ke seluruh tubuh.</div>
            : <div className={styles.detail}><b>Karbon dioksida (CO2)</b> - sisa pernapasan sel - berpindah dari darah ke alveolus, lalu dibuang saat mengembuskan napas.</div>}
        </div>
      </div>
    </>
  )
}
