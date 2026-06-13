import { useState } from 'react'
import { ConstellationViewer } from '../../components/ConstellationViewer'
import { BRANCHES, COMBOS } from './data'
import styles from './Scene5Reveal.module.css'

export function Scene5Reveal() {
  const [done, setDone] = useState(false)
  return (
    <>
      <p className={styles.prompt}>
        {done ? 'Inilah peta konsep IPA — satu keluarga besar yang saling terhubung.' : 'Kita satukan semuanya jadi satu peta.'}
      </p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <ConstellationViewer branches={BRANCHES} connections={COMBOS} litAll={done} />
        </div>
        <div className={styles.panel}>
          {!done ? (
            <button className={styles.revealBtn} onClick={(e) => { setDone(true); (e.currentTarget as HTMLButtonElement).blur() }}>
              Tampilkan peta konsep lengkap →
            </button>
          ) : (
            <div className={styles.exit}>
              <span className={styles.exitLabel}>exit ticket · 3 – 2 – 1</span>
              <p><b>3</b> hal baru yang kamu pelajari hari ini</p>
              <p><b>2</b> cabang IPA yang paling menarik buatmu</p>
              <p><b>1</b> pertanyaan yang masih ingin kamu jawab</p>
              <button className={styles.reset} onClick={(e) => { setDone(false); (e.currentTarget as HTMLButtonElement).blur() }}>ulangi</button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
