import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const ITEMS = [
  { emoji:'🌋', teks:'Gunung berapi meletus tiba-tiba' },
  { emoji:'💊', teks:'Obat bisa menyembuhkan penyakit' },
  { emoji:'🌈', teks:'Pelangi hanya muncul setelah hujan' },
  { emoji:'🦠', teks:'Kita bisa sakit hanya karena benda yang tak terlihat' },
  { emoji:'⚡', teks:'Petir selalu diikuti guntur' },
  { emoji:'🌱', teks:'Biji kecil bisa tumbuh jadi pohon besar' },
]

export function Scene1Wonder({ onUnlock }: DiscoverySceneProps) {
  const [pick, setPick] = useState<number | null>(null)

  return (
    <div className={styles.wonder}>
      <div className={styles.storyPanel}>
        <div className={styles.sceneViz}>
          <div className={local.grid}>
            {ITEMS.map((it, i) => (
              <div key={i} className={local.item}>
                <span className={local.emoji}>{it.emoji}</span>
                <span className={local.iteks}>{it.teks}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Semua fenomena di samping terjadi di sekitar kita setiap hari.<br /><br />
          Kamu pernah penasaran kenapa? Pernah bertanya tanpa tahu harus tanya ke siapa?<br /><br />
          <strong>Itulah awal dari sains.</strong>
        </p>
        <div className={styles.predLabel}>Menurutmu, apa yang membedakan sains dari sekadar "tebak-tebakan"?</div>
        <div className={styles.choices}>
          {[
            'Sains pakai alat canggih dan dilakukan di laboratorium.',
            'Sains dimulai dari pertanyaan dan dijawab dengan bukti nyata.',
            'Sains hanya bisa dilakukan oleh ilmuwan profesional.',
            'Sains menghafalkan banyak rumus dan fakta.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && (
          <div className={styles.pickNote}>
            Prediksimu tercatat. Kita akan membangun jawabannya bersama.
          </div>
        )}
      </div>
    </div>
  )
}
