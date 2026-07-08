import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const ALAT = [
  { nama: 'Dongkrak hidrolik', fungsi: 'Mengangkat mobil untuk servis dengan gaya tangan yang kecil' },
  { nama: 'Rem hidrolik mobil', fungsi: 'Tekanan kecil di pedal rem diteruskan jadi gaya besar di keempat roda' },
  { nama: 'Kursi dokter gigi', fungsi: 'Menaik-turunkan kursi berat dengan tuas kecil' },
  { nama: 'Alat press hidrolik', fungsi: 'Menekan/membentuk logam dengan gaya sangat besar dari sumber gaya kecil' },
]

export function Scene3Terapan({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState<number | null>(null)
  const [seen, setSeen] = useState<Set<number>>(new Set())
  const pick = (i: number) => {
    setSel(i)
    const ns = new Set(seen).add(i)
    setSeen(ns)
    if (ns.size === 4) onUnlock()
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Hukum Pascal dipakai di banyak alat. <strong>Klik tiap alat</strong> untuk penerapannya.</p>
        <div className={styles.questPanel} style={{gap:6}}>
          {ALAT.map((a, i) => (
            <button key={i} className={styles.caseOpt} style={sel === i ? {borderColor:'var(--discovery-primary)',background:'#eaf4f3'} : {}} onClick={() => pick(i)}>{a.nama}</button>
          ))}
        </div>
      </div>
      <div className={styles.questPanel}>
        {sel !== null ? (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>{ALAT[sel].nama}</div>
            <p className={styles.conceptText}>{ALAT[sel].fungsi}</p>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu alat</div>}
      </div>
    </div>
  )
}
