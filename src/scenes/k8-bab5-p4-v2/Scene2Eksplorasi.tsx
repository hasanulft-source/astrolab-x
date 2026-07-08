import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const JENIS = [
  { nama: 'Cermin Datar', bentuk: 'Permukaan rata', sifat: 'Bayangan tegak, sama besar, jarak sama dengan benda', contoh: 'Cermin kamar mandi' },
  { nama: 'Cermin Cekung', bentuk: 'Melengkung ke dalam', sifat: 'Bisa mengumpulkan cahaya — bayangan bisa nyata/terbalik atau maya/tegak tergantung jarak benda', contoh: 'Reflektor senter, kaca spion cembung dalam mobil' },
  { nama: 'Cermin Cembung', bentuk: 'Melengkung ke luar', sifat: 'Menyebarkan cahaya — selalu menghasilkan bayangan maya, tegak, diperkecil', contoh: 'Kaca spion mobil, cermin di tikungan jalan' },
  { nama: 'Lensa Cembung', bentuk: 'Tebal di tengah', sifat: 'Mengumpulkan cahaya (konvergen) — bisa membentuk bayangan nyata', contoh: 'Kaca pembesar, lensa kamera' },
  { nama: 'Lensa Cekung', bentuk: 'Tipis di tengah', sifat: 'Menyebarkan cahaya (divergen) — selalu bayangan maya, diperkecil', contoh: 'Kacamata minus (rabun jauh)' },
]

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState<number | null>(null)
  const [seen, setSeen] = useState<Set<number>>(new Set())
  const pick = (i: number) => {
    setSel(i)
    const ns = new Set(seen).add(i)
    setSeen(ns)
    if (ns.size === 5) onUnlock()
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>5 jenis cermin & lensa. <strong>Klik tiap jenis</strong> untuk sifat bayangannya.</p>
        <div className={local.jenisGrid}>
          {JENIS.map((j, i) => (
            <button key={i} className={`${local.jBtn} ${sel === i ? local.jOn : ''} ${seen.has(i) ? local.jSeen : ''}`} onClick={() => pick(i)}>
              {j.nama}
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 5 ? `${5 - seen.size} jenis lagi` : 'Semua sudah dijelajahi ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.jDetail}>
            <div className={local.jdNama}>{JENIS[sel].nama}</div>
            <div className={local.jdBentuk}>{JENIS[sel].bentuk}</div>
            <div className={local.jdSifat}>{JENIS[sel].sifat}</div>
            <div className={local.jdContoh}><span>Contoh</span>{JENIS[sel].contoh}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu jenis</div>}
      </div>
    </div>
  )
}
