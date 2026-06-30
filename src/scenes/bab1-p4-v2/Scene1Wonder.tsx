import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const INSIDEN = [
  { ikon:'🔥', teks:'Rambut terkena nyala Bunsen karena tidak diikat' },
  { ikon:'💥', teks:'Tabung reaksi meledak karena ditutup saat dipanaskan' },
  { ikon:'☠️', teks:'Menghirup asap kimia berbahaya karena tidak pakai masker' },
  { ikon:'🩹', teks:'Tangan terluka karena memungut kaca pecah tanpa sarung tangan' },
]

export function Scene1Wonder({ onUnlock }: DiscoverySceneProps) {
  const [pick, setPick] = useState<number | null>(null)

  return (
    <div className={styles.wonder}>
      <div className={styles.storyPanel}>
        <div className={styles.sceneViz}>
          <div className={local.insidenList}>
            {INSIDEN.map((it, i) => (
              <div key={i} className={local.insidenItem}>
                <span className={local.insidenIcon}>{it.ikon}</span>
                <span className={local.insidenTeks}>{it.teks}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Keempat kejadian di atas adalah insiden nyata yang terjadi di lab sekolah di berbagai negara.<br /><br />
          Bukan karena alatnya rusak. Bukan karena zat kimianya terlalu berbahaya.<br /><br />
          <strong>Semua terjadi karena satu hal yang diabaikan.</strong>
        </p>
        <div className={styles.predLabel}>Menurutmu, apa satu hal yang bisa mencegah semua insiden di atas?</div>
        <div className={styles.choices}>
          {[
            'Menggunakan alat yang lebih canggih dan modern.',
            'Memahami dan menerapkan prosedur keselamatan sebelum mulai.',
            'Hanya guru yang boleh memegang alat berbahaya.',
            'Menghindari semua percobaan yang melibatkan panas atau bahan kimia.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Kita akan buktikan bersama.</div>}
      </div>
    </div>
  )
}
