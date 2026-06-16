import { useState } from 'react'
import styles from './ui.module.css'
export function Scene2Kocok() {
  const [settled, setSettled] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Tanah dikocok dalam air lalu didiamkan. Komponennya <em>mengendap berlapis</em> sesuai berat.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 110 160" className={styles.jarSvg}>
            <path d="M22 18 H88 V140 a8 8 0 0 1 -8 8 H30 a8 8 0 0 1 -8 -8 Z" fill="none" stroke="#8a99a6" strokeWidth="2" />
            {!settled
              ? <path d="M24 46 H86 V140 a6 6 0 0 1 -6 6 H30 a6 6 0 0 1 -6 -6 Z" fill="#9c7b52" opacity="0.7" />
              : <>
                  <rect x="24" y="46" width="62" height="34" fill="#cfe6ef" opacity="0.7" />
                  <rect x="24" y="80" width="62" height="10" fill="#5a4a30" opacity="0.7" />
                  <rect x="24" y="90" width="62" height="24" fill="#b89968" opacity="0.8" />
                  <path d="M24 114 H86 V140 a6 6 0 0 1 -6 6 H30 a6 6 0 0 1 -6 -6 Z" fill="#a37b48" opacity="0.9" />
                  <text x="92" y="66" fontSize="8" fill="#2b6f9e">air</text>
                  <text x="92" y="88" fontSize="8" fill="#5a4a30">humus</text>
                  <text x="92" y="105" fontSize="8" fill="#8a6234">liat</text>
                  <text x="92" y="132" fontSize="8" fill="#8a6234">pasir</text>
                </>}
          </svg>
        </div>
        <div className={styles.side}>
          {!settled
            ? <button className={styles.btn} onClick={(e) => { setSettled(true); (e.currentTarget as HTMLButtonElement).blur() }}>Diamkan & amati →</button>
            : <div className={styles.detail}>Dari bawah: <b>pasir</b> (terberat) mengendap dulu, lalu <b>liat/lempung</b>, di atasnya <b>humus</b> yang ringan mengapung, dan <b>air</b> jernih di puncak. Inilah bukti tanah adalah campuran.</div>}
        </div>
      </div>
    </>
  )
}
