import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene3DadaPerut({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState<'dada' | 'perut' | null>(null)
  const [seen, setSeen] = useState<Set<string>>(new Set())
  const pick = (s: 'dada' | 'perut') => {
    setSel(s)
    const ns = new Set(seen).add(s)
    setSeen(ns)
    if (ns.size === 2) onUnlock()
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Ada dua jenis pernapasan berdasarkan otot yang dominan bekerja. <strong>Klik untuk bandingkan.</strong></p>
        <div className={local.faseTabs}>
          <button className={`${local.fTab} ${sel === 'dada' ? local.fOn : ''}`} onClick={() => pick('dada')}>Pernapasan Dada</button>
          <button className={`${local.fTab} ${sel === 'perut' ? local.fOn : ''}`} onClick={() => pick('perut')}>Pernapasan Perut</button>
        </div>
        <div className={styles.sliderHint}>{seen.size < 2 ? 'Klik keduanya untuk membandingkan' : 'Sudah membandingkan keduanya ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel === 'dada' && (
          <div className={local.compareDetail}>
            <div className={local.cdTitle}>Pernapasan Dada</div>
            <div className={local.cdText}>Otot antar tulang rusuk yang dominan berkontraksi, mengangkat tulang rusuk untuk memperbesar rongga dada.</div>
            <div className={local.cdWho}>Umum terjadi saat: berbicara, bernapas santai sehari-hari</div>
          </div>
        )}
        {sel === 'perut' && (
          <div className={local.compareDetail}>
            <div className={local.cdTitle}>Pernapasan Perut</div>
            <div className={local.cdText}>Diafragma yang dominan berkontraksi, turun ke arah rongga perut untuk memperbesar rongga dada dari bawah.</div>
            <div className={local.cdWho}>Umum terjadi saat: tidur, bernapas dalam, teknik olah napas (relaksasi)</div>
          </div>
        )}
        {!sel && <div className={styles.sliderHint}>← Pilih jenis pernapasan</div>}
      </div>
    </div>
  )
}
