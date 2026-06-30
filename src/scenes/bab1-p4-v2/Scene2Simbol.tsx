import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const SIMBOL = [
  { icon:'☠️', nama:'Beracun (Toxic)',       warna:'#dc2626', ket:'Zat dapat menyebabkan keracunan jika tertelan, terhirup, atau menyentuh kulit.' },
  { icon:'🔥', nama:'Mudah Terbakar (Flammable)', warna:'#d97706', ket:'Zat atau uapnya dapat terbakar dengan mudah. Jauhkan dari sumber panas dan api.' },
  { icon:'⚡', nama:'Korosif',               warna:'#7c3aed', ket:'Dapat merusak jaringan hidup atau material logam. Gunakan sarung tangan dan kacamata.' },
  { icon:'💥', nama:'Mudah Meledak (Explosive)', warna:'#b45309', ket:'Dapat meledak akibat panas, tekanan, atau gesekan. Tangani dengan sangat hati-hati.' },
  { icon:'☢️', nama:'Radioaktif',            warna:'#059669', ket:'Memancarkan radiasi berbahaya. Hanya ditangani oleh yang terlatih khusus.' },
  { icon:'⚠️', nama:'Bahaya Umum (Irritant)',warna:'#0891b2', ket:'Dapat mengiritasi kulit, mata, atau saluran pernapasan. Hindari kontak langsung.' },
]

export function Scene2Simbol({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState<number | null>(null)
  const [seen, setSeen] = useState<Set<number>>(new Set())

  const pick = (i: number) => {
    setSel(i)
    const ns = new Set(seen).add(i)
    setSeen(ns)
    if (ns.size >= 4) onUnlock()
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>
          Simbol ini ada di semua botol zat kimia. <strong>Kamu wajib mengenalinya</strong> sebelum menyentuh apapun di lab.
          <br />Klik tiap simbol untuk tahu artinya.
        </p>
        <div className={local.simbolGrid}>
          {SIMBOL.map((s, i) => (
            <button key={i}
              className={`${local.simbolBtn} ${sel === i ? local.simbolOn : ''} ${seen.has(i) ? local.simbolSeen : ''}`}
              style={sel === i ? { borderColor: s.warna, background: s.warna + '18' } : {}}
              onClick={() => pick(i)}>
              <span className={local.simbolIcon}>{s.icon}</span>
              <span className={local.simbolNama}>{s.nama.split(' (')[0]}</span>
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 4 ? `Kenali ${4 - seen.size} simbol lagi` : 'Simbol utama sudah dikenali ✓'}</div>
      </div>
      {sel !== null ? (
        <div className={local.simbolDetail}>
          <div className={local.sdIcon} style={{ color: SIMBOL[sel].warna }}>{SIMBOL[sel].icon}</div>
          <div className={local.sdNama}>{SIMBOL[sel].nama}</div>
          <div className={local.sdKet}>{SIMBOL[sel].ket}</div>
        </div>
      ) : <div className={local.simbolDetail} style={{ justifyContent:'center', color:'var(--discovery-ink-3)', fontSize:15 }}>← Klik simbol untuk detail</div>}
    </div>
  )
}
