import { useState } from 'react'
import styles from './ui.module.css'
export function Scene2Peredaran() {
  const [tab, setTab] = useState<'kecil' | 'besar'>('kecil')
  const opK = tab === 'kecil' ? 1 : 0.18
  const opB = tab === 'besar' ? 1 : 0.18
  return (
    <>
      <p className={styles.prompt}>Dua jalur peredaran. Klik untuk <em>menelusuri</em> masing-masing.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.tabsTop}>
            <button className={`${styles.tt} ${tab === 'kecil' ? styles.on : ''}`} onClick={() => setTab('kecil')}>Peredaran Kecil</button>
            <button className={`${styles.tt} ${tab === 'besar' ? styles.on : ''}`} onClick={() => setTab('besar')}>Peredaran Besar</button>
          </div>
          <svg viewBox="0 0 260 224" className={styles.circ}>
            <defs>
              <marker id="ru" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto"><path d="M4 0l4 7H0z" fill="#c0392b" /></marker>
              <marker id="rd" markerWidth="8" markerHeight="8" refX="4" refY="2" orient="auto"><path d="M0 1h8l-4 7z" fill="#c0392b" /></marker>
              <marker id="bu" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto"><path d="M4 0l4 7H0z" fill="#2a6fb0" /></marker>
              <marker id="bd" markerWidth="8" markerHeight="8" refX="4" refY="2" orient="auto"><path d="M0 1h8l-4 7z" fill="#2a6fb0" /></marker>
            </defs>
            <rect x="70" y="10" width="120" height="36" rx="9" fill="#fbe9e7" stroke="#e6b8b2" /><text x="130" y="33" textAnchor="middle" fontSize="13" fontWeight="700" fill="#9a3b36">Paru-paru</text>
            <rect x="88" y="88" width="84" height="48" rx="10" fill="#fff" stroke="#d6603a" strokeWidth="1.5" /><text x="130" y="117" textAnchor="middle" fontSize="14" fontWeight="700" fill="#b03a32">Jantung</text>
            <rect x="70" y="178" width="120" height="36" rx="9" fill="#eaf1f8" stroke="#b9cee2" /><text x="130" y="201" textAnchor="middle" fontSize="13" fontWeight="700" fill="#2a5d86">Seluruh tubuh</text>
            <g opacity={opK}>
              <line x1="152" y1="86" x2="152" y2="50" stroke="#2a6fb0" strokeWidth="2.6" markerEnd="url(#bu)" />
              <line x1="108" y1="50" x2="108" y2="86" stroke="#c0392b" strokeWidth="2.6" markerEnd="url(#rd)" />
            </g>
            <g opacity={opB}>
              <line x1="152" y1="138" x2="152" y2="174" stroke="#c0392b" strokeWidth="2.6" markerEnd="url(#rd)" />
              <line x1="108" y1="174" x2="108" y2="138" stroke="#2a6fb0" strokeWidth="2.6" markerEnd="url(#bu)" />
            </g>
          </svg>
        </div>
        <div className={styles.side}>
          {tab === 'kecil'
            ? <div className={styles.detail}><b>Peredaran kecil (paru-paru).</b> Bilik kanan memompa darah <span style={{ color: '#2a6fb0' }}>kotor</span> ke paru-paru. Di sana darah melepas CO2 dan mengikat oksigen, lalu kembali <span style={{ color: '#c0392b' }}>bersih</span> ke serambi kiri.</div>
            : <div className={styles.detail}><b>Peredaran besar (tubuh).</b> Bilik kiri memompa darah <span style={{ color: '#c0392b' }}>bersih</span> ke seluruh tubuh. Sel-sel mengambil oksigen, lalu darah kembali <span style={{ color: '#2a6fb0' }}>kotor</span> ke serambi kanan.</div>}
          <div className={styles.note}>Warna <span style={{ color: '#c0392b' }}>merah</span> = kaya oksigen, <span style={{ color: '#2a6fb0' }}>biru</span> = miskin oksigen.</div>
        </div>
      </div>
    </>
  )
}
