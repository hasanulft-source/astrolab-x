import { useState } from 'react'
import styles from './ui.module.css'

export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Amati sebuah kolam. <em>Apa saja yang menyusunnya?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 240 150" className={styles.eco}>
            <circle cx="48" cy="36" r="16" fill="#f4c95d" />
            <g stroke="#2f7d52" strokeWidth="3" strokeLinecap="round" fill="none">
              <path d="M70 110V78" /><path d="M70 88c-7-3-10-9-9-15 7 1 11 6 9 15z" fill="#7cc69a" stroke="none" />
              <path d="M88 110V82" /><path d="M88 92c7-3 10-9 9-15-7 1-11 6-9 15z" fill="#7cc69a" stroke="none" />
            </g>
            <path d="M0 112h240v38H0z" fill="#bfe3ec" />
            <path d="M0 112q60 8 120 0t120 0" fill="none" stroke="#7AB2B2" strokeWidth="2.5" />
            <path d="M150 132c8-5 18-5 22 0-4 4-14 5-22 0z" fill="#0d6b7a" />
            <circle cx="166" cy="130" r="1.4" fill="#fff" />
          </svg>
        </div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Ada dua macam penyusun: yang <b>hidup</b> (ikan, padi, cacing) disebut <b>komponen biotik</b>, dan yang <b>tak hidup</b> (air, cahaya, batu) disebut <b>komponen abiotik</b>.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa saja penyusunnya? →</button>}
        </div>
      </div>
    </>
  )
}
