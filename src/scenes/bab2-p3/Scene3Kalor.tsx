import { TRANSISI } from './data'
import styles from './ui.module.css'

export function Scene3Kalor() {
  const inn = TRANSISI.filter(t => t.kalor === 'menyerap')
  const out = TRANSISI.filter(t => t.kalor === 'melepas')
  return (
    <>
      <p className={styles.prompt}>Tiap perubahan wujud selalu melibatkan <em>energi (kalor)</em> — ada yang menyerap, ada yang melepas.</p>
      <div className={styles.kalorCols}>
        <div className={styles.kCol}>
          <span className={`${styles.kHead} ${styles.kHeadIn}`}>↑ Menyerap kalor</span>
          {inn.map(t => <div key={t.id} className={styles.kItem}>{t.name} <b>— {t.from} → {t.to}</b></div>)}
        </div>
        <div className={styles.kCol}>
          <span className={`${styles.kHead} ${styles.kHeadOut}`}>↓ Melepas kalor</span>
          {out.map(t => <div key={t.id} className={styles.kItem}>{t.name} <b>— {t.from} → {t.to}</b></div>)}
        </div>
      </div>
    </>
  )
}
