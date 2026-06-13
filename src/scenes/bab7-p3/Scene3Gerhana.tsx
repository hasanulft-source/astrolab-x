import { useState } from 'react'
import styles from './ui.module.css'
export function Scene3Gerhana() {
  const [tab, setTab] = useState<'mat' | 'bln'>('mat')
  return (
    <>
      <p className={styles.prompt}>Saat Matahari, Bumi, dan Bulan <em>segaris</em>, terjadi gerhana. Bandingkan keduanya.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.tabsTop}>
            <button className={`${styles.tt} ${tab === 'mat' ? styles.on : ''}`} onClick={() => setTab('mat')}>Gerhana Matahari</button>
            <button className={`${styles.tt} ${tab === 'bln' ? styles.on : ''}`} onClick={() => setTab('bln')}>Gerhana Bulan</button>
          </div>
          <svg viewBox="0 0 300 120" className={styles.gSvg}>
            <circle cx="26" cy="60" r="20" fill="#f4b73d" />
            {tab === 'mat'
              ? <>
                  <polygon points="150,52 150,68 244,66 244,54" fill="#9aa0b0" opacity="0.45" />
                  <circle cx="150" cy="60" r="9" fill="#8a8f9e" />
                  <circle cx="250" cy="60" r="24" fill="#3b82c4" />
                  <text x="150" y="96" textAnchor="middle" fontSize="11" fill="#3a3d42" fontWeight="600">Bulan</text>
                  <text x="250" y="100" textAnchor="middle" fontSize="11" fill="#3a3d42" fontWeight="600">Bumi</text>
                </>
              : <>
                  <polygon points="150,40 150,80 250,70 250,50" fill="#9aa0b0" opacity="0.45" />
                  <circle cx="150" cy="60" r="22" fill="#3b82c4" />
                  <circle cx="252" cy="60" r="9" fill="#5a5f6e" />
                  <text x="150" y="98" textAnchor="middle" fontSize="11" fill="#3a3d42" fontWeight="600">Bumi</text>
                  <text x="252" y="84" textAnchor="middle" fontSize="11" fill="#3a3d42" fontWeight="600">Bulan</text>
                </>}
          </svg>
        </div>
        <div className={styles.side}>
          {tab === 'mat'
            ? <div className={styles.detail3}><b>Gerhana Matahari</b> terjadi saat <b>Bulan</b> berada di antara Matahari dan Bumi - bayangan Bulan jatuh ke Bumi. Hanya mungkin saat <b>Bulan Baru</b>.</div>
            : <div className={styles.detail3}><b>Gerhana Bulan</b> terjadi saat <b>Bumi</b> berada di antara Matahari dan Bulan - bayangan Bumi menutupi Bulan. Hanya mungkin saat <b>Purnama</b>.</div>}
          <div className={styles.note}>Tidak terjadi tiap bulan karena orbit Bulan miring ~5°, jadi bayangan biasanya meleset.</div>
        </div>
      </div>
    </>
  )
}
