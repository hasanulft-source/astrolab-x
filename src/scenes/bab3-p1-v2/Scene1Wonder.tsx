import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene1Wonder({ onUnlock }: DiscoverySceneProps) {
  const [pick, setPick] = useState<number | null>(null)

  return (
    <div className={styles.wonder}>
      <div className={styles.storyPanel}>
        <div className={styles.sceneViz}>
          <div className={local.tempCompare}>
            <div className={local.tCard}><span className={local.tFlag}>🇮🇩</span><span className={local.tVal}>32°C</span><span className={local.tNote}>Banda Aceh, siang</span></div>
            <div className={local.tCard}><span className={local.tFlag}>🇺🇸</span><span className={local.tVal}>90°F</span><span className={local.tNote}>New York, siang</span></div>
          </div>
          <div className={local.tQuestion}>Mana yang lebih panas?</div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Temanmu yang tinggal di Amerika bilang "hari ini 90 derajat, panas sekali!"<br /><br />
          Kamu di Banda Aceh hari ini 32 derajat — dan itu juga terasa sangat panas.<br /><br />
          <strong>Apakah 90 lebih panas dari 32?</strong>
        </p>
        <div className={styles.predLabel}>Menurutmu, kenapa angka 90 dan 32 bisa-bisa sama panasnya?</div>
        <div className={styles.choices}>
          {[
            'Karena negara berbeda punya suhu maksimal yang berbeda.',
            'Karena keduanya pakai skala suhu yang berbeda (Celsius vs Fahrenheit).',
            'Karena termometer di Amerika lebih sensitif.',
            'Sebenarnya 90°F memang jauh lebih panas dari 32°C.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Ayo bandingkan keempat skala suhu yang ada.</div>}
      </div>
    </div>
  )
}
