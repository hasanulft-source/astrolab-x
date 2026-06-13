import { HeatingCurve, WATER, OTHER } from '../../components/HeatingCurve'
import styles from './ui.module.css'

export function Scene4Banding() {
  return (
    <>
      <p className={styles.prompt}>Tiap zat punya <em>titik lebur</em> dan <em>titik didih</em> sendiri. Bandingkan dua zat:</p>
      <div className={styles.twoViz}>
        <div className={styles.cVizWrap}>
          <span className={styles.cVizTitle}>Air — lebur 0°, didih 100°</span>
          <div className={styles.cViz}><HeatingCurve curve={WATER} /></div>
        </div>
        <div className={styles.cVizWrap}>
          <span className={styles.cVizTitle}>Zat X — lebur 45°, didih 90°</span>
          <div className={styles.cViz}><HeatingCurve curve={OTHER} /></div>
        </div>
      </div>
    </>
  )
}
