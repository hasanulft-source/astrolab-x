import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const ALAT = [
  { nama:'Tabung reaksi', guna:'Mencampur zat kimia kecil', salah:'Dipakai sebagai gelas minum' },
  { nama:'Pipet tetes',   guna:'Mengambil cairan setetes demi setetes', salah:'Ditiup untuk mengeluarkan cairan' },
  { nama:'Gelas beker',   guna:'Menampung dan memanaskan cairan', salah:'Dipegang langsung saat dipanaskan' },
  { nama:'Bunsen',        guna:'Sumber panas untuk percobaan', salah:'Dinyalakan dekat bahan yang mudah terbakar' },
]

export function Scene1Wonder({ onUnlock }: DiscoverySceneProps) {
  const [pick, setPick] = useState<number | null>(null)

  return (
    <div className={styles.wonder}>
      <div className={styles.storyPanel}>
        <div className={styles.sceneViz}>
          <div className={local.alatGrid}>
            {ALAT.map((a, i) => (
              <div key={i} className={local.alatCard}>
                <div className={local.alatNama}>{a.nama}</div>
                <div className={local.alatSalah}>⚠️ {a.salah}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Bayangkan hari pertama masuk lab. Kamu melihat puluhan alat yang belum pernah kamu pegang sebelumnya.<br /><br />
          Di atas ada <strong>empat kesalahan umum</strong> yang sering terjadi saat menggunakan alat lab — dan bisa berbahaya.<br /><br />
          Sebelum kita lanjut, tebak dulu:
        </p>
        <div className={styles.predLabel}>Menurutmu, mengapa kita perlu mengenal alat lab sebelum menggunakannya?</div>
        <div className={styles.choices}>
          {[
            'Supaya terlihat profesional seperti ilmuwan sungguhan.',
            'Agar percobaan aman, akurat, dan hasilnya bisa dipercaya.',
            'Karena nanti akan keluar di ulangan.',
            'Supaya tidak merusakkan alat yang mahal.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Kita akan verifikasi bersama.</div>}
      </div>
    </div>
  )
}
