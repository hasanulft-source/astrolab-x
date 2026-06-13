import { EggFloatViewer } from '../../components/EggFloatViewer'
import { HypothesisCollector } from '../../components/HypothesisCollector'
import styles from './Scene1Hook.module.css'

export function Scene1Hook() {
  return (
    <>
      <p className={styles.prompt}>Telur yang sama, air yang berbeda. Kenapa yang satu <em>tenggelam</em>, yang satu <em>mengapung</em>?</p>
      <div className={styles.glasses}>
        <div className={styles.col}>
          <div className={styles.viz}><EggFloatViewer salt={0} showStatus /></div>
          <div className={styles.cap}>Air tawar</div>
        </div>
        <div className={styles.col}>
          <div className={styles.viz}><EggFloatViewer salt={9} showStatus /></div>
          <div className={styles.cap}>Air garam</div>
        </div>
      </div>
      <HypothesisCollector initial={[
        'Air garam lebih berat/padat, jadi telur terdorong ke atas.',
        'Mungkin garam bikin airnya lebih kuat menahan telur.',
      ]} />
    </>
  )
}
