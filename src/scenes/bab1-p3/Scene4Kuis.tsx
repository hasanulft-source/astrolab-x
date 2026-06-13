import { useState } from 'react'
import { ToolGlyph } from '../../components/ToolGlyph'
import { TOOLS } from './data'
import styles from './ui.module.css'

export function Scene4Kuis() {
  const [i, setI] = useState(0)
  const [show, setShow] = useState(false)
  const t = TOOLS[i]
  const next = () => { setI((i + 1) % TOOLS.length); setShow(false) }
  return (
    <>
      <p className={styles.prompt}>Kuis cepat: <em>alat apa ini?</em> Sebutkan nama + fungsi + 1 aturan keselamatan, lalu cek.</p>
      <div className={styles.quizStage}>
        <ToolGlyph id={t.id} size={134} />
        {show ? (
          <>
            <div className={styles.quizName}>{t.name}</div>
            <div className={styles.quizMeta}>{t.fungsi}</div>
            <div className={styles.quizSafety}>⚠ {t.safety}</div>
          </>
        ) : <div className={styles.quizMeta}>Alat ke-{i + 1} dari {TOOLS.length}</div>}
        <div className={styles.row}>
          {!show
            ? <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Tampilkan jawaban</button>
            : <button className={styles.btn} onClick={(e) => { next(); (e.currentTarget as HTMLButtonElement).blur() }}>Alat berikutnya →</button>}
        </div>
      </div>
    </>
  )
}
