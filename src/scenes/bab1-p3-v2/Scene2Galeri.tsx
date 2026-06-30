import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const ALAT = [
  { id:'beker',    nama:'Gelas Beker',     fungsi:'Menampung, memanaskan, dan mencampur larutan.',          tip:'Jangan pegang langsung saat panas — gunakan penjepit atau kain.' },
  { id:'erlmyr',   nama:'Erlenmeyer',      fungsi:'Menampung larutan dan memanaskan sambil diaduk memutar.',tip:'Bentuk konenya mencegah tumpah saat diputar.' },
  { id:'tabung',   nama:'Tabung Reaksi',   fungsi:'Reaksi kimia skala kecil atau pemanasan zat.',           tip:'Arahkan mulut tabung menjauh dari orang saat dipanaskan.' },
  { id:'pipet',    nama:'Pipet Tetes',     fungsi:'Memindahkan cairan dalam jumlah sangat kecil (tetes).',  tip:'Jangan ditiup — tekan karet di atas untuk mengontrol.' },
  { id:'cylinder', nama:'Gelas Ukur',      fungsi:'Mengukur volume cairan dengan tepat.',                   tip:'Baca skala dari bagian bawah lengkungan cairan (meniskus).' },
  { id:'bunsen',   nama:'Pembakar Bunsen', fungsi:'Sumber panas dari gas untuk percobaan.',                 tip:'Jauhkan bahan mudah terbakar dan ikat rambut sebelum menyalakan.' },
  { id:'penjepit', nama:'Penjepit Tabung', fungsi:'Memegang tabung reaksi saat dipanaskan.',                tip:'Posisikan di bagian tengah tabung agar seimbang dan aman.' },
  { id:'kaki3',    nama:'Kaki Tiga',       fungsi:'Menyangga gelas/kawat kasa di atas pembakar.',           tip:'Pastikan stabil sebelum meletakkan beban di atasnya.' },
]

export function Scene2Galeri({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState<string | null>(null)
  const [seen, setSeen] = useState<Set<string>>(new Set())

  const pick = (id: string) => {
    setSel(id)
    const ns = new Set(seen).add(id)
    setSeen(ns)
    if (ns.size >= 5) onUnlock()
  }
  const a = ALAT.find(x => x.id === sel)

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>
          Klik tiap alat untuk tahu fungsi dan tips keamanannya.
          <br />Kenali minimal <strong>5 alat</strong> untuk lanjut.
        </p>
        <div className={local.galeriGrid}>
          {ALAT.map(a => (
            <button key={a.id}
              className={`${local.galeriBtn} ${sel === a.id ? local.galeriOn : ''} ${seen.has(a.id) ? local.galeriSeen : ''}`}
              onClick={() => pick(a.id)}>
              {a.nama}
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>
          {seen.size < 5 ? `${5 - seen.size} alat lagi` : `${seen.size} alat dikenali ✓`}
        </div>
      </div>
      <div className={local.alatDetail}>
        {a ? (
          <>
            <div className={local.adNama}>{a.nama}</div>
            <div className={local.adFungsi}><span>Fungsi</span>{a.fungsi}</div>
            <div className={local.adTip}><span>💡 Tips aman</span>{a.tip}</div>
          </>
        ) : <div className={styles.sliderHint}>← Pilih alat untuk melihat detailnya</div>}
      </div>
    </div>
  )
}
